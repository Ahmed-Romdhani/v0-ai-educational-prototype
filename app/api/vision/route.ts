import { type NextRequest, NextResponse } from "next/server"
import { analyzeImage } from "@/lib/openai"

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json()

    if (!image || typeof image !== "string") {
      return NextResponse.json({ error: "Image invalide" }, { status: 400 })
    }

    // Extract base64 from data URL and determine image type
    const base64Match = image.match(/data:image\/(.*?);base64,(.*)/)
    if (!base64Match) {
      return NextResponse.json({ error: "Format d'image invalide" }, { status: 400 })
    }

    const imageType = base64Match[1] as "jpeg" | "png" | "gif" | "webp"
    const base64Data = base64Match[2]

    const analysis = await analyzeImage(base64Data, imageType)

    return NextResponse.json({ analysis })
  } catch (error) {
    console.error("Erreur vision:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : "Erreur serveur" }, { status: 500 })
  }
}
