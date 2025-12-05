# AI Learning Hub - Setup Guide

This is a complete working Next.js full-stack AI educational platform with real OpenAI integration.

## Features

- **Chatbot Intelligent**: Real-time conversations with GPT-4 mini powered by OpenAI
- **Vision par IA**: Image analysis and recognition using OpenAI's vision capabilities
- **Classification**: AI-powered data classification with confidence scores
- **Générateur de Contenu**: Creative text and project idea generation
- **Dark Theme UI**: Beautiful, educational interface with vibrant accent colors

## Prerequisites

- Node.js 18+ installed
- OpenAI API key (from https://platform.openai.com/api-keys)

## Installation

### 1. Clone and Setup Locally

\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd ai-educational-prototype

# Install dependencies
npm install
\`\`\`

### 2. Set Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`bash
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
\`\`\`

**Important**: Replace with your actual OpenAI API key. Never commit `.env.local` to git.

### 3. Run Locally

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Deployment to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Connect your GitHub account and select your repository
4. Add environment variable:
   - Key: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
5. Click "Deploy"

### Option 2: Deploy with Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Add environment variable when prompted
# OPENAI_API_KEY: sk-proj-xxxxxxxxxxxxx
\`\`\`

## Features Overview

### Chatbot Intelligent
- Real-time AI conversations using GPT-4 mini
- Educational context for learners
- French language support with responsive answers
- Error handling with user-friendly messages

### Vision par IA
- Upload images in PNG, JPG, GIF, or WebP formats
- AI analyzes visual content
- Explains how neural networks interpret images
- Real-time image preview

### Classification
- AI-powered data classification
- Training data input for context
- Confidence scores
- Detailed explanations for classifications

### Générateur de Contenu
- Generate creative text content
- Generate project ideas
- Customizable prompts
- Educational explanations

## API Routes

- `POST /api/chatbot` - Send message and get AI response
- `POST /api/generator` - Generate text or project ideas
- `POST /api/vision` - Analyze images with AI vision
- `POST /api/classification` - Classify data with AI

## Architecture

\`\`\`
app/
├── page.tsx                 # Home page with feature cards
├── layout.tsx               # Root layout with metadata
├── globals.css              # Tailwind theme and styles
├── chatbot/page.tsx         # Chatbot interface
├── vision/page.tsx          # Image analysis interface
├── classification/page.tsx  # Data classification interface
├── generator/page.tsx       # Content generation interface
└── api/
    ├── chatbot/route.ts     # Chatbot API with OpenAI
    ├── vision/route.ts      # Vision API with OpenAI
    ├── classification/route.ts # Classification API
    └── generator/route.ts   # Generator API with OpenAI

components/
├── navigation.tsx           # Top navigation bar
├── hero.tsx                 # Hero section
├── feature-cards.tsx        # Feature showcase cards
├── footer.tsx               # Footer
└── ui/                      # shadcn/ui components

lib/
└── openai.ts               # OpenAI integration utilities

styles/
└── globals.css             # Additional styles (if needed)
\`\`\`

## Customization

### Change Theme Colors

Edit `app/globals.css` to modify the color scheme. The design tokens are:
- `--primary`: Main brand color (currently indigo)
- `--accent`: Secondary accent color
- `--background`: Dark background
- `--foreground`: Text color

### Add New Features

1. Create a new page in `app/[feature]/page.tsx`
2. Create a corresponding API route in `app/api/[feature]/route.ts`
3. Add OpenAI integration functions to `lib/openai.ts`
4. Update navigation in `components/navigation.tsx`
5. Add feature card in `components/feature-cards.tsx`

### Modify OpenAI Models

In `lib/openai.ts`, change the model parameter:

\`\`\`typescript
// Current (gpt-4o-mini)
model: "gpt-4o-mini"

// Available options
model: "gpt-4-turbo"      // More powerful but slower/expensive
model: "gpt-3.5-turbo"    // Faster but less capable
\`\`\`

## Troubleshooting

### API Key Not Working
- Verify your OpenAI API key is valid
- Check that billing is enabled in OpenAI dashboard
- Ensure the key is correctly set in environment variables

### Image Upload Issues
- Verify file size is reasonable (< 20MB)
- Check supported formats: PNG, JPG, GIF, WebP
- Clear browser cache and retry

### Classification Errors
- Provide clear training data format
- Separate categories with `/`
- Include relevant keywords for each category

### Slow Responses
- OpenAI API might be rate-limited
- Check your API usage in OpenAI dashboard
- Wait a few moments and retry

## Security

- Never commit API keys to git
- Use Vercel environment variables for secrets
- API routes validate all inputs
- Error messages don't expose sensitive information

## Future Enhancements

- Add authentication with Supabase
- Store conversation history in database
- Add image generation with DALL-E
- Implement user profiles and saved results
- Add more languages and locales

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review OpenAI documentation
3. Contact support at your project repository

## License

MIT License - See LICENSE file for details
\`\`\`

```typescript file="" isHidden
