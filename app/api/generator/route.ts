import { type NextRequest, NextResponse } from "next/server"

// Simulated content generation
function generateContent(prompt: string, type: string): string {
  if (type === "text") {
    const templates = [
      `Voici une histoire basée sur votre prompt: "${prompt}"...\n\nIl était une fois, dans un monde fantastique, quelque chose d'extraordinaire se passa. ${prompt} devint le point de départ d'une aventure épique...`,
      `Texte créatif générée: "${prompt}"\n\nEn explorant ce thème, on découvre que ${prompt} représente bien plus qu'une simple idée. C'est une porte vers de nouvelles possibilités...`,
    ]
    return templates[Math.floor(Math.random() * templates.length)]
  } else {
    const ideas = [
      `Idée de projet 1: Créer une application basée sur: ${prompt}\n- Fonctionnalité principale\n- Intégration IA\n- Interface utilisateur interactive`,
      `Concept innovant: Utiliser "${prompt}" pour développer une solution qui:\n• Résout un problème réel\n• Utilise l'IA de manière créative\n• Engendre un impact social positif`,
    ]
    return ideas[Math.floor(Math.random() * ideas.length)]
  }
}

export async function POST(request: NextRequest) {
  try {
    const { prompt, type } = await request.json()

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt invalide" }, { status: 400 })
    }

    const content = generateContent(prompt, type || "text")

    return NextResponse.json({ content })
  } catch (error) {
    console.error("Erreur générateur:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
