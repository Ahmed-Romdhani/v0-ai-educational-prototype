import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function chatWithAI(message: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Tu es un assistant IA éducatif pour une plateforme d'apprentissage. Tu expliques des concepts d'IA de manière simple et engageante pour les jeunes apprenants. Réponds en français.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    return response.choices[0]?.message?.content || "Je n'ai pas pu générer une réponse."
  } catch (error) {
    console.error("Erreur OpenAI chatbot:", error)
    throw new Error("Impossible de communiquer avec l'IA")
  }
}

export async function generateContent(prompt: string, contentType: "text" | "idea"): Promise<string> {
  try {
    const systemPrompt =
      contentType === "text"
        ? "Tu es un écrivain créatif. Génère un texte créatif intéressant et engageant basé sur le prompt de l'utilisateur. Réponds en français."
        : "Tu es un innovateur. Génère des idées de projets créatives et réalisables basées sur le prompt de l'utilisateur. Réponds en français."

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.9,
      max_tokens: 800,
    })

    return response.choices[0]?.message?.content || "Impossible de générer du contenu."
  } catch (error) {
    console.error("Erreur OpenAI generator:", error)
    throw new Error("Impossible de générer du contenu")
  }
}

export async function classifyData(description: string): Promise<{ category: string; confidence: number }> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            'Tu es un expert en classification de données. Analyse le texte fourni et classe-le dans une catégorie appropriée. Réponds au format JSON: {"category": "nom_categorie", "confidence": 0.95, "explanation": "explication courte"}',
        },
        {
          role: "user",
          content: description,
        },
      ],
      temperature: 0.3,
      max_tokens: 200,
    })

    const content = response.choices[0]?.message?.content || "{}"
    return JSON.parse(content)
  } catch (error) {
    console.error("Erreur OpenAI classification:", error)
    throw new Error("Impossible de classifier les données")
  }
}

export async function analyzeImage(base64Image: string, imageType: "jpeg" | "png" | "gif" | "webp"): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Tu es un expert en vision par ordinateur. Analyse l'image fournie et décris en détail ce que tu vois. Explique comment une IA pourrait interpréter les éléments clés. Réponds en français.",
        },
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: `data:image/${imageType};base64,${base64Image}`,
              },
            },
            {
              type: "text",
              text: "Analyse cette image et explique ce que tu vois. Comment une IA pourrait-elle interpréter cela?",
            },
          ],
        },
      ],
      temperature: 0.7,
      max_tokens: 600,
    })

    return response.choices[0]?.message?.content || "Impossible d'analyser l'image."
  } catch (error) {
    console.error("Erreur OpenAI vision:", error)
    throw new Error("Impossible d'analyser l'image")
  }
}
