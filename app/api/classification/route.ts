import { type NextRequest, NextResponse } from "next/server"

// Simple classification algorithm
function classifyInput(input: string, trainingData: string): string {
  if (!trainingData.trim()) {
    return "Veuillez fournir des données d'entraînement"
  }

  const categories = trainingData.split("/")
  let bestMatch = "Non classifié"
  let bestScore = 0

  for (const category of categories) {
    const parts = category.trim().split(/\s+/)
    if (parts.length < 2) continue

    const label = parts[0]
    const keywords = parts.slice(1)

    let score = 0
    for (const keyword of keywords) {
      if (input.toLowerCase().includes(keyword.toLowerCase())) {
        score += 1
      }
    }

    if (score > bestScore) {
      bestScore = score
      bestMatch = label
    }
  }

  return bestMatch || "Non classifié"
}

export async function POST(request: NextRequest) {
  try {
    const { input, trainingData } = await request.json()

    if (!input || typeof input !== "string") {
      return NextResponse.json({ error: "Entrée invalide" }, { status: 400 })
    }

    const classification = classifyInput(input, trainingData || "")

    return NextResponse.json({ classification })
  } catch (error) {
    console.error("Erreur classification:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
