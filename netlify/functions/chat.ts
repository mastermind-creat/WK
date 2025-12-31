import type { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { provider, messages, userMessage } = JSON.parse(event.body || '{}');

        if (provider === 'gemini') {
            const apiKey = process.env.GEMINI_API_KEY;

            if (!apiKey) {
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: 'Gemini API key not configured' })
                };
            }

            const conversationHistory = messages.map((msg: any) =>
                `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
            ).join('\n');

            const knowledgeBase = event.headers['x-knowledge-base'] || '';
            const prompt = `${knowledgeBase}\n\nConversation History:\n${conversationHistory}\n\nUser: ${userMessage}\n\nAssistant:`;

            // Updated to use the correct model for v1beta API - gemini-flash-latest works best with free tier
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 1000,
                    }
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Gemini API Error:', errorText);
                throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            // Safer response parsing
            let aiResponse = "Sorry, I couldn't understand that.";
            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
                aiResponse = data.candidates[0].content.parts[0].text;
            }

            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ response: aiResponse })
            };

        } else if (provider === 'openai') {
            const apiKey = process.env.OPENAI_API_KEY;

            if (!apiKey) {
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: 'OpenAI API key not configured' })
                };
            }

            const knowledgeBase = event.headers['x-knowledge-base'] || '';

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-4-turbo-preview',
                    messages: [
                        { role: 'system', content: knowledgeBase },
                        ...messages.map((msg: any) => ({ role: msg.role, content: msg.content })),
                        { role: 'user', content: userMessage }
                    ],
                    temperature: 0.7,
                    max_tokens: 1000
                })
            });

            if (!response.ok) {
                throw new Error(`OpenAI API error: ${response.statusText}`);
            }

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;

            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ response: aiResponse })
            };
        }

        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Invalid provider' })
        };

    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                error: error instanceof Error ? error.message : 'Internal server error'
            })
        };
    }
};

export { handler };
