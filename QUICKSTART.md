# Quick Start - AI Learning Hub

Get your AI Educational Platform running in 5 minutes!

## Step 1: Get Your OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy the key (looks like: `sk-proj-...`)

## Step 2: Add Environment Variable in v0

1. Open the sidebar in v0 (left panel)
2. Click on **"Vars"** tab
3. Click **"+ Add"**
4. Add:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Your API key from Step 1
5. Click **"Add"**

That's it! The app will now use your real OpenAI API.

## Step 3: Test the Features

### Home Page
- Go to http://localhost:3000
- See all 4 AI features

### Test Chatbot
1. Click "Chatbot Intelligent"
2. Type: "Explique-moi les réseaux de neurones"
3. AI responds with real GPT-4 mini answers

### Test Vision
1. Click "Vision par IA"
2. Upload any image
3. AI analyzes what it sees

### Test Generator
1. Click "Générateur de Contenu"
2. Type: "Écris une histoire courte sur un robot qui apprend"
3. AI generates creative content

### Test Classification
1. Click "Classification"
2. Add training data: `Fruit apple orange banana / Légume carotte tomate oignon`
3. Test: "apple"
4. AI classifies it

## Deploy to Vercel

\`\`\`bash
npm install -g vercel
vercel login
vercel
\`\`\`

When prompted, add your `OPENAI_API_KEY` environment variable.

## Troubleshooting

### "Error: Invalid API key"
- Check your key was copied correctly
- Regenerate it from OpenAI dashboard
- Ensure no extra spaces in the Vars

### "Image analysis failed"
- Try a smaller image
- Ensure it's PNG, JPG, GIF, or WebP
- Clear browser cache

### "Empty response from chatbot"
- Check OpenAI API balance
- Try asking in French for better results
- API might be temporarily slow

## What's Next?

- Customize the theme colors in `app/globals.css`
- Add more AI features using the same pattern
- Deploy to Vercel and share with students
- Add authentication with Supabase for user profiles

## Need Help?

Check `SETUP_GUIDE.md` for detailed documentation.
