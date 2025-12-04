import { type NextRequest, NextResponse } from "next/server"
import { generateContent } from "@/lib/openai"

export async function POST(request: NextRequest) {
  try {
    const { prompt, type } = await request.json()

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt invalide" }, { status: 400 })
    }

    const content = await generateContent(prompt, type || "text")

    return NextResponse.json({ content })
  } catch (error) {
    console.error("Erreur générateur:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : "Erreur serveur" }, { status: 500 })
  }
}
