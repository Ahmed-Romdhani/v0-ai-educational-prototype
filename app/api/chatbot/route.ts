import { type NextRequest, NextResponse } from "next/server"

// Simulated chatbot response
// In production, you would connect this to a real LLM API like OpenAI, Anthropic, etc.
function generateChatbotResponse(message: string): string {
  const responses: { [key: string]: string[] } = {
    hello: ["Salut! Comment ça va?", "Bonjour! Je suis heureux de te parler."],
    ai: [
      "L'IA est fascinante! Elle peut apprendre des patterns dans les données.",
      "L'intelligence artificielle est un domaine qui évolue très rapidement.",
    ],
    help: [
      "Je peux t'aider avec tes questions sur l'IA!",
      "N'hésite pas à poser des questions, je ferai de mon mieux pour répondre.",
    ],
    default: [
      "C'est une bonne question! Je vais y réfléchir.",
      "Intéressant! Peux-tu m'en dire plus?",
      "Je comprends. Dis-moi ce que tu penses.",
    ],
  }

  const lowerMessage = message.toLowerCase()
  let selectedResponses = responses.default

  if (lowerMessage.includes("salut") || lowerMessage.includes("bonjour")) {
    selectedResponses = responses.hello
  } else if (lowerMessage.includes("ia") || lowerMessage.includes("intelligence")) {
    selectedResponses = responses.ai
  } else if (lowerMessage.includes("aide") || lowerMessage.includes("help")) {
    selectedResponses = responses.help
  }

  return selectedResponses[Math.floor(Math.random() * selectedResponses.length)]
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message invalide" }, { status: 400 })
    }

    const response = generateChatbotResponse(message)

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Erreur chatbot:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
