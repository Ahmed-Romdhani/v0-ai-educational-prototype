import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  try {
    const { prompt, type } = await req.json()

    if (!prompt || !prompt.trim()) {
      return Response.json(
        { error: "Le prompt est requis" }, 
        { status: 400 }
      )
    }

    // Système prompt adapté au type
    const systemPrompt =
      type === "creative"
        ? `Tu es un assistant créatif qui génère des textes imaginatifs et engageants. 
Crée du contenu original, captivant et adapté aux jeunes. 
Utilise un langage vivant et des descriptions détaillées.
Écris en français.`
        : `Tu es un générateur d'idées créatives pour des projets éducatifs et techniques.
Propose des idées innovantes, réalisables et pédagogiques adaptées aux jeunes.
Donne des suggestions concrètes avec des étapes claires.
Écris en français.`

    const response = await generateText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      prompt: prompt,
      temperature: 0.8, // Plus créatif
    })

    return Response.json({
      content: response.text,
      type: type,
    })
  } catch (error) {
    console.error("Generator error:", error)
    return Response.json(
      { error: "Erreur lors de la génération de contenu" }, 
      { status: 500 }
    )
  }
}