# AI Learning Hub 🧠✨

A modern, interactive educational platform for discovering and experimenting with Artificial Intelligence. Built with Next.js, Tailwind CSS, and OpenAI API.

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ahmedpro490-3227s-projects/v0-ai-educational-prototype)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/leuxCaqLbl7)

## Features

### Chatbot Intelligent 💬
Real-time conversations powered by GPT-4 mini. Learn how language models understand and generate text.

### Vision par IA 👁️
Upload images and let AI analyze them. Discover how neural networks interpret visual information.

### Classification 📊
Teach AI to categorize data. Understand machine learning classification with confidence scores.

### Générateur de Contenu ✨
Generate creative text and project ideas. Explore how prompts influence AI output.

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **AI**: OpenAI API (GPT-4 mini)
- **Language**: TypeScript
- **Deployment**: Vercel

## Quick Start

### Prerequisites
- Node.js 18+
- OpenAI API key from https://platform.openai.com/api-keys

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd ai-educational-prototype

# Install dependencies
npm install

# Create environment file
echo "OPENAI_API_KEY=sk-proj-your-key-here" > .env.local

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

See `QUICKSTART.md` for a 5-minute setup guide.

## Deployment

Your project is live on Vercel. To deploy updates:

1. Make changes in the v0 chat
2. Click "Publish" to deploy
3. Changes sync automatically to GitHub

To add environment variables on Vercel:
1. Go to your project settings
2. Click "Environment Variables"
3. Add `OPENAI_API_KEY` with your OpenAI API key

## Project Structure

\`\`\`
├── app/
│   ├── chatbot/        # Chatbot interface
│   ├── vision/         # Image analysis interface
│   ├── classification/ # Data classification interface
│   ├── generator/      # Content generation interface
│   ├── api/            # Backend API routes
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Tailwind theme
├── components/
│   ├── navigation.tsx   # Top navigation
│   ├── hero.tsx         # Hero section
│   ├── feature-cards.tsx # Feature showcase
│   ├── footer.tsx       # Footer
│   └── ui/             # shadcn/ui components
├── lib/
│   └── openai.ts       # OpenAI integration utilities
└── public/
\`\`\`

## Environment Variables

Create a `.env.local` file:

\`\`\`env
OPENAI_API_KEY=sk-proj-your-key-here
\`\`\`

## Available Scripts

\`\`\`bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
\`\`\`

## Documentation

- **QUICKSTART.md** - 5-minute setup guide
- **SETUP_GUIDE.md** - Comprehensive documentation
- **README.md** (this file) - Project overview

## Features in Detail

### Chatbot
- Real-time conversations with GPT-4 mini
- Educational context for learners
- French language support
- Message history with auto-scroll
- Error handling and loading states

### Vision
- Image upload (PNG, JPG, GIF, WebP)
- AI-powered image analysis
- Explanation of how neural networks work
- Real-time image preview
- Base64 encoding for API transmission

### Classification
- Customizable training data
- AI-powered categorization
- Confidence scores and explanations
- Multi-class classification support
- Educational insights

### Generator
- Two modes: Creative text & Project ideas
- Customizable prompts
- Real-time generation
- Tips for better prompts
- French language support

## Customization

### Change Theme Colors
Edit `app/globals.css` to modify the color scheme using CSS variables.

### Add New Features
1. Create page: `app/[feature]/page.tsx`
2. Create API: `app/api/[feature]/route.ts`
3. Add OpenAI function: `lib/openai.ts`
4. Update navigation: `components/navigation.tsx`
5. Add card: `components/feature-cards.tsx`

### Modify AI Models
In `lib/openai.ts`, change the model:
- `gpt-4-turbo` - More powerful, slower, more expensive
- `gpt-3.5-turbo` - Faster, cheaper, less capable
- `gpt-4o-mini` - Current (balanced)

## Security

- API keys stored server-side only
- Input validation on all endpoints
- No sensitive data in error messages
- Environment variables for all secrets
- CORS headers properly configured

## Performance

- Server-side rendering for SEO
- Client-side components for interactivity
- Image optimization
- CSS-in-JS for smaller bundles
- Fast API routes

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers

## Troubleshooting

### "Error: Invalid API key"
- Check OpenAI dashboard for correct key
- Regenerate a new key if needed
- Ensure no extra spaces in environment variable

### "Image analysis failed"
- Try a smaller image
- Verify format is PNG, JPG, GIF, or WebP
- Check OpenAI API balance

### "Empty response from chatbot"
- Verify OpenAI API has available balance
- Try asking in French for better results
- Check API status

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your changes from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues or questions:
1. Check the documentation (SETUP_GUIDE.md, QUICKSTART.md)
2. Review OpenAI API documentation
3. Open an issue on GitHub
4. Contact the development team

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI from [shadcn/ui](https://ui.shadcn.com)
- Styling with [Tailwind CSS](https://tailwindcss.com)
- AI powered by [OpenAI](https://openai.com)

## Build your app

Continue building on [v0.app](https://v0.app/chat/leuxCaqLbl7)

---

**Made with ❤️ for educators and learners**
