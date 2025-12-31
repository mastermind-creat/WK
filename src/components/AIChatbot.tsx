import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap, Settings, Loader2, Volume2, VolumeX } from 'lucide-react';
import { profile, services, projects, skills } from '../data/portfolio';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

type AIProvider = 'openai' | 'gemini';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: `Hi! I'm Wambia Kennedy's AI assistant. I know everything about him - his skills, projects, services, and experience. Ask me anything!`,
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [aiProvider, setAiProvider] = useState<AIProvider>('gemini');
    const [showSettings, setShowSettings] = useState(false);
    const [showReminder, setShowReminder] = useState(false);
    // Voice settings
    const [voiceEnabled, setVoiceEnabled] = useState(false);
    const synth = window.speechSynthesis;

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Focus input when chat opens & clear reminder
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            setShowReminder(false);
        }
    }, [isOpen]);

    // Listen for custom open event (e.g. from FloatingActions)
    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener('openChatbot', handleOpenChat);
        return () => window.removeEventListener('openChatbot', handleOpenChat);
    }, []);

    // Show reminder after 7 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) {
                setShowReminder(true);
            }
        }, 7000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    // Text to Speech Function
    const speak = (text: string) => {
        if (!voiceEnabled || !synth) return;

        // Cancel any current speech
        synth.cancel();

        // sophisticated text cleaning for speech
        let cleanText = text
            // Remove markdown buttons [[Label|URL]]
            .replace(/\[\[.*?\|.*?\]\]/g, '')
            // Remove markdown bold
            .replace(/\*\*/g, '')
            .replace(/\*/g, '')
            // Remove links
            .replace(/https?:\/\/[^\s]+/g, '')
            // Expand abbreviations and currency
            .replace(/Ksh\./g, 'Kenyan Shillings')
            .replace(/Ksh/g, 'Kenyan Shillings')
            .replace(/\bOMG\b/g, 'Oh my god')
            .replace(/\be\.g\.\b/g, 'for example')
            .replace(/\bi\.e\.\b/g, 'that is')
            .replace(/\betc\b/g, 'et cetera')
            .replace(/\bAI\b/g, 'A I')
            // Remove emojis (ranges of surrogate pairs)
            .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2700}-\u{27BF}]/gu, '');

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = 1.0; // Normal speed
        utterance.pitch = 1.0; // Normal pitch
        utterance.onend = () => { };

        // Try to pick a natural sounding voice (prioritize Google US English or similar high quality)
        const voices = synth.getVoices();
        const preferredVoice = voices.find(v =>
            (v.name.includes('Google') && v.lang.includes('en-US')) ||
            v.name.includes('Natural') ||
            (v.lang.includes('en') && !v.name.includes('Microsoft'))
        ) || voices[0];

        if (preferredVoice) utterance.voice = preferredVoice;

        synth.speak(utterance);
    };

    // Replace basic markdown with styled elements and ACTION BUTTONS
    const formatMessage = (content: string) => {
        // Split by bold (**...**) AND Custom Buttons ([[Label|Link]])
        const parts = content.split(/(\*\*.*?\*\*|\[\[.*?\|.*?\]\])/g);

        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <span key={index} className="font-bold text-primary-500">
                        {part.slice(2, -2)}
                    </span>
                );
            }
            if (part.startsWith('[[') && part.endsWith(']]')) {
                const [label, url] = part.slice(2, -2).split('|');
                const isMailto = url.startsWith('mailto:');

                return (
                    <a
                        key={index}
                        href={url}
                        target={isMailto ? undefined : "_blank"}
                        rel={isMailto ? undefined : "noopener noreferrer"}
                        className="inline-flex items-center gap-2 mt-2 mr-2 px-4 py-2 bg-white text-primary-600 border border-primary-200 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-primary-50 transition-all shadow-sm"
                        style={{ textDecoration: 'none' }}
                    >
                        {label}
                        <Send size={12} />
                    </a>
                );
            }
            return <span key={index}>{part}</span>;
        });
    };

    // Comprehensive knowledge base about Wambia Kennedy
    const knowledgeBase = `
You are an AI assistant representing Wambia Kennedy. Here's comprehensive information about him:

PERSONAL INFORMATION:
- Name: ${profile.name}
- Role: ${profile.role}
- Location: ${profile.location}
- Email: ${profile.email}
- Phone: ${profile.phone}
- Summary: ${profile.summary}
- About: ${profile.about}
- Fun Fact: ${profile.funFact}

EDUCATION:
${profile.education.map(edu => `- ${edu.degree} at ${edu.institution} (${edu.period})`).join('\n')}

WORK EXPERIENCE:
${profile.experience.map(exp => `- ${exp.title} at ${exp.company} (${exp.period}): ${exp.description}`).join('\n')}

LEADERSHIP ROLES:
${profile.leadership.map(lead => `- ${lead.title} (${lead.period}): ${lead.description}`).join('\n')}

AWARDS & ACHIEVEMENTS:
${profile.awards.map(award => `- ${award.title}: ${award.subtitle} (${award.year})`).join('\n')}

TECHNICAL SKILLS:
${skills.map(category => `${category.category}: ${category.items.map(item => `${item.name} (${item.level}%)`).join(', ')}`).join('\n')}

SERVICES OFFERED:
${services.map(service => `- ${service.title} (${service.price}): ${service.description}\n  Features: ${service.features.join(', ')}`).join('\n')}

NOTABLE PROJECTS:
${projects.map(project => `- ${project.title}: ${project.description}\n  Technologies: ${project.tags.join(', ')}\n  ${project.liveUrl !== '#' ? `Live: ${project.liveUrl}` : ''}`).join('\n')}

CONTACT INFORMATION:
- Email: ${profile.email} (kennyleyy0@gmail.com)
- Phone/WhatsApp: ${profile.phone} (+254 743 394 373)
- Location: ${profile.location}

INSTRUCTIONS FOR HANDLING USER REQUESTS:
1. Be friendly, professional, and enthusiastic.
2. **Bold** key details like names, tools, and prices.
3. Keep responses concise (under 1000 tokens).

CRITICAL - HANDLING CONTACT & HIRING REQUESTS:
If the user says they want to "hire", "contact", "start a project", or "needs help":
1.  **FIRST Response**: Enthusiastically ask them to briefly describe what they need. (e.g., "That's great! I'd love to help. Could you tell me a bit about the project or what you're looking to build?")
2.  **SECOND Response (After they describe the need)**: 
    - Acknowledge their idea enthusiastically.
    - Generate two **ACTION BUTTONS** using the special syntax: \`[[Label|URL]]\`.
    - Button 1 (WhatsApp): \`[[Send via WhatsApp|https://wa.me/254743394373?text=Hi%20Wambia!%20I%20am%20interested%20in%20your%20services.%20Here%20is%20what%20I%20need:%20(INSERT_USER_NEED)]]\`
    - Button 2 (Email): \`[[Send via Email|mailto:kennyleyy0@gmail.com?subject=New%20Project%20Inquiry&body=Hi%20Wambia,%0A%0AI%20am%20looking%20for:%20(INSERT_USER_NEED)]]\`
    - Tell them: "I've drafted a direct message for Wambia with your details. Click above to send it instantly!"
`;

    const callOpenAI = async (userMessage: string): Promise<string> => {
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

        if (!apiKey) {
            return "OpenAI API key not configured. Please add VITE_OPENAI_API_KEY to your .env file.";
        }

        try {
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
                        ...messages.map(msg => ({ role: msg.role, content: msg.content })),
                        { role: 'user', content: userMessage }
                    ],
                    temperature: 0.7,
                    max_tokens: 1000
                })
            });

            if (!response.ok) {
                // OpenAI often blocks browser requests (CORS). Mention this if it happens.
                if (response.status === 0 || response.type === 'opaque') {
                    throw new Error("CORS blocked request. Please use Gemini or a backend proxy.");
                }
                throw new Error(`OpenAI API error: ${response.statusText}`);
            }

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('OpenAI Error:', error);
            return "Connection failed (likely CORS). Please switch to Gemini (Settings ⚙️) which works better in the browser, or check your API key.";
        }
    };

    const callGemini = async (userMessage: string): Promise<string> => {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        if (!apiKey) {
            return "Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.";
        }

        try {
            const conversationHistory = messages.map(msg =>
                `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
            ).join('\n');

            const prompt = `${knowledgeBase}\n\nConversation History:\n${conversationHistory}\n\nUser: ${userMessage}\n\nAssistant:`;

            // Updated model to gemini-flash-latest which is available on free tier and points to the newest flash model (e.g. 2.0/2.5)
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
                throw new Error(`Gemini API error: ${response.statusText}`);
            }

            const data = await response.json();
            // Gemini response structure can vary slightly
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Unexpected response structure from Gemini");
            }

        } catch (error) {
            console.error('Gemini Error:', error);
            return "Sorry, I'm having trouble connecting to Gemini. Please try again or switch to OpenAI.";
        }
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            role: 'user',
            content: input.trim(),
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const aiResponse = aiProvider === 'openai'
                ? await callOpenAI(userMessage.content)
                : await callGemini(userMessage.content);

            const assistantMessage: Message = {
                role: 'assistant',
                content: aiResponse,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, assistantMessage]);

            // Speak response if voice enabled
            if (voiceEnabled) {
                speak(aiResponse);
            }
        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage: Message = {
                role: 'assistant',
                content: "Sorry, something went wrong. Please try again.",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const quickQuestions = [
        "What services do you offer?",
        "Tell me about your projects",
        "What are your skills?",
        "How can I contact you?",
        "What's your experience?"
    ];

    return (
        <>
            {/* Reminder Tooltip positioned cleanly above left-aligned button */}
            <AnimatePresence>
                {showReminder && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="fixed bottom-24 left-6 z-40 max-w-[200px] bg-white text-zinc-900 p-4 rounded-xl shadow-2xl border-l-4 border-primary-500 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setIsOpen(true)}
                    >
                        <div className="absolute bottom-[-6px] left-6 w-4 h-4 bg-white rotate-45" />
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                                <Sparkles size={16} className="text-primary-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold leading-tight">Hi there! 👋</p>
                                <p className="text-[10px] mt-1 opacity-80">I can answer any questions about Wambia's work!</p>
                            </div>
                        </div>
                        <button
                            onClick={(e) => { e.stopPropagation(); setShowReminder(false); }}
                            className="absolute top-1 right-1 p-1 hover:bg-black/5 rounded-full"
                        >
                            <X size={12} className="opacity-40" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Chat Button - Moved to LEFT side */}
            <motion.button
                className="fixed bottom-6 left-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-primary-600 to-rose-500 text-white rounded-full shadow-2xl flex items-center justify-center group hover:shadow-primary-600/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            className="relative"
                        >
                            <MessageCircle size={24} />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window - Moved to LEFT side */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-24 left-6 z-50 w-[90vw] md:w-[400px] h-[600px] rounded-3xl shadow-2xl overflow-hidden border flex flex-col"
                        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-600 to-rose-500 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <Bot size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-sm">AI Assistant</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        <span className="text-white/80 text-xs font-bold">Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                                    className={`p-2 rounded-full transition-colors ${voiceEnabled ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'}`}
                                    title={voiceEnabled ? "Mute Voice" : "Enable Voice"}
                                >
                                    {voiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                                </button>
                                <button
                                    onClick={() => setShowSettings(!showSettings)}
                                    className="p-2 text-white/80 hover:text-white transition-colors"
                                >
                                    <Settings size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Settings Panel */}
                        <AnimatePresence>
                            {showSettings && (
                                <motion.div
                                    className="p-4 border-b"
                                    style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-main)' }}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                >
                                    <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>AI Provider</p>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setAiProvider('gemini')}
                                            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${aiProvider === 'gemini'
                                                ? 'bg-primary-600 text-white'
                                                : 'bg-white/5 hover:bg-white/10'
                                                }`}
                                            style={{ color: aiProvider === 'gemini' ? 'white' : 'var(--text-main)' }}
                                        >
                                            <Sparkles size={14} className="inline mr-1" />
                                            Gemini
                                        </button>
                                        <button
                                            onClick={() => setAiProvider('openai')}
                                            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${aiProvider === 'openai'
                                                ? 'bg-primary-600 text-white'
                                                : 'bg-white/5 hover:bg-white/10'
                                                }`}
                                            style={{ color: aiProvider === 'openai' ? 'white' : 'var(--text-main)' }}
                                        >
                                            <Zap size={14} className="inline mr-1" />
                                            OpenAI
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((message, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.role === 'user'
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gradient-to-r from-primary-600 to-rose-500 text-white'
                                        }`}>
                                        {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                                    </div>
                                    <div className={`flex-1 ${message.role === 'user' ? 'text-right' : ''}`}>
                                        <div
                                            className={`inline-block px-4 py-2 rounded-2xl text-sm ${message.role === 'user'
                                                ? 'bg-primary-600 text-white rounded-tr-none'
                                                : 'border rounded-tl-none'
                                                }`}
                                            style={{
                                                backgroundColor: message.role === 'user' ? undefined : 'var(--bg-main)',
                                                borderColor: message.role === 'user' ? undefined : 'var(--border-main)',
                                                color: message.role === 'user' ? 'white' : 'var(--text-main)',
                                                maxWidth: '90%'
                                            }}
                                        >
                                            {formatMessage(message.content)}
                                        </div>
                                        <p className="text-[10px] mt-1 opacity-50" style={{ color: 'var(--text-muted)' }}>
                                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <motion.div
                                    className="flex gap-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-rose-500 flex items-center justify-center">
                                        <Bot size={16} className="text-white" />
                                    </div>
                                    <div className="px-4 py-2 rounded-2xl rounded-tl-none border flex items-center gap-2" style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-main)' }}>
                                        <Loader2 size={16} className="animate-spin text-primary-600" />
                                        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Thinking...</span>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Questions */}
                        {messages.length === 1 && (
                            <div className="px-4 pb-2">
                                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Quick Questions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {quickQuestions.map((question, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setInput(question)}
                                            className="text-xs px-3 py-1.5 rounded-full border hover:border-primary-600 hover:bg-primary-600/10 transition-all font-medium"
                                            style={{ borderColor: 'var(--border-main)', color: 'var(--text-main)' }}
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 border-t" style={{ borderColor: 'var(--border-main)' }}>
                            <div className="flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask me anything..."
                                    className="flex-1 px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-primary-600 text-sm"
                                    style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-main)', color: 'var(--text-main)' }}
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    className="w-12 h-12 bg-primary-600 text-white rounded-2xl flex items-center justify-center hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
