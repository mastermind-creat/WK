# AI Chatbot Setup Guide

## Overview
Your portfolio now includes an advanced AI chatbot that knows everything about you and can answer visitor questions intelligently. The chatbot supports both **OpenAI GPT-4** and **Google Gemini** APIs.

## Features ✨

### 🤖 **Intelligent Responses**
- Comprehensive knowledge about your skills, projects, services, and experience
- Context-aware conversations with memory
- Professional and friendly tone
- Accurate information based on your portfolio data

### 🔄 **Dual AI Provider Support**
- **OpenAI GPT-4 Turbo**: Premium, highly accurate responses
- **Google Gemini Pro**: Fast, efficient, and cost-effective
- Easy switching between providers in the chat settings

### 💬 **Premium User Experience**
- Beautiful, responsive chat interface
- Smooth animations with Framer Motion
- Quick question suggestions for first-time users
- Real-time typing indicators
- Conversation history
- Mobile-optimized design

### 🎨 **Design Features**
- Gradient backgrounds and glassmorphism effects
- Animated chat bubble with online status indicator
- Settings panel for AI provider selection
- Custom scrollbar styling
- Dark/Light mode support

## Setup Instructions

### 1. Get API Keys

#### **Option A: Google Gemini (Recommended for beginners)**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

#### **Option B: OpenAI GPT-4**
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy your API key
5. **Note**: Requires billing setup and credits

### 2. Configure Environment Variables

1. Copy the example file:
```bash
cp .env.example .env
```

2. Open `.env` and add your API keys:
```env
# Use Gemini (Free tier available)
VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here

# Or use OpenAI (Paid)
VITE_OPENAI_API_KEY=your_actual_openai_api_key_here
```

3. **Important**: Never commit your `.env` file to Git!

### 3. Restart Development Server

After adding API keys, restart your dev server:
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Usage

### For Visitors
1. Click the floating chat button in the bottom-right corner
2. Ask questions about you, your services, projects, or skills
3. Get instant, intelligent responses
4. Use quick questions for common inquiries

### Switching AI Providers
1. Click the settings icon (⚙️) in the chat header
2. Choose between Gemini or OpenAI
3. The chatbot will use your selected provider for all future messages

## What the Chatbot Knows

The AI assistant has comprehensive knowledge about:

- ✅ **Personal Information**: Name, location, contact details
- ✅ **Education**: All degrees, certifications, and training
- ✅ **Work Experience**: Current and past positions with descriptions
- ✅ **Leadership Roles**: All leadership positions and responsibilities
- ✅ **Awards & Achievements**: Competitions, certificates, recognitions
- ✅ **Technical Skills**: All programming languages, frameworks, tools (with proficiency levels)
- ✅ **Services**: All services offered with pricing and features
- ✅ **Projects**: Detailed project descriptions with technologies used
- ✅ **Contact Methods**: Email, phone, WhatsApp, location

## Example Questions Visitors Can Ask

- "What services do you offer?"
- "Tell me about your web development experience"
- "What are your skills in React?"
- "How much does a website cost?"
- "What projects have you built?"
- "How can I contact you?"
- "Do you offer graphic design services?"
- "What's your experience with Python?"
- "Can you help with HELB applications?"
- "Tell me about your education"

## Cost Considerations

### Google Gemini
- **Free Tier**: 60 requests per minute
- **Cost**: Very affordable for most use cases
- **Best For**: Personal portfolios, small businesses

### OpenAI GPT-4
- **Pricing**: ~$0.01 per 1K tokens (input) + $0.03 per 1K tokens (output)
- **Estimate**: ~$0.02-0.05 per conversation
- **Best For**: High-traffic sites, premium experiences

## Customization

### Update Knowledge Base
Edit `/src/components/AIChatbot.tsx` and modify the `knowledgeBase` constant to add or update information.

### Change AI Models
- **Gemini**: Currently using `gemini-pro`
- **OpenAI**: Currently using `gpt-4-turbo-preview`

You can change these in the API calls within `AIChatbot.tsx`.

### Styling
The chatbot uses your existing design system:
- CSS variables for colors
- Tailwind CSS for styling
- Framer Motion for animations

## Troubleshooting

### "API key not configured" message
- Make sure you've created a `.env` file
- Check that the API key is correctly copied
- Restart your development server

### Chatbot not responding
- Check browser console for errors
- Verify your API key is valid
- Check your internet connection
- Ensure you have API credits (for OpenAI)

### Slow responses
- Gemini is usually faster than OpenAI
- Check your internet speed
- Consider switching providers

## Security Notes

⚠️ **Important Security Practices**:

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Don't share API keys** - They're linked to your billing
3. **Rotate keys regularly** - Generate new keys periodically
4. **Monitor usage** - Check your API dashboard for unusual activity
5. **Set spending limits** - Configure billing alerts in your API dashboard

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify your API keys are correct
3. Ensure your `.env` file is properly formatted
4. Restart your development server

## Future Enhancements

Potential improvements you can add:
- Voice input/output
- Multi-language support
- Conversation export
- Analytics tracking
- Custom training on specific topics
- Integration with your CRM
- Email notifications for important queries

---

**Congratulations!** 🎉 Your portfolio now has an intelligent AI assistant that can engage with visitors 24/7!
