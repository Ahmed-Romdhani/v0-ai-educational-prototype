"use client"

import type React from "react"

import { useState, useRef } from "react"
import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function VisionPage() {
  const [image, setImage] = useState<string | null>(null)
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const base64 = event.target?.result as string
      setImage(base64)
    }
    reader.readAsDataURL(file)
  }

  const handleAnalyze = async () => {
    if (!image) return
    setLoading(true)

    try {
      const response = await fetch("/api/vision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image }),
      })
      const data = await response.json()
      setAnalysis(data.analysis)
    } catch (error) {
      console.error("Erreur:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navigation />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Vision par IA</h1>
          <p className="text-slate-300">Envoie une image et découvre comment l'IA la reconnaît</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 border-orange-500/30 border-2 p-6">
            <h3 className="font-bold text-white mb-4">Charger une image</h3>
            <div
              className="border-2 border-dashed border-orange-500/50 rounded-lg p-8 text-center cursor-pointer hover:border-orange-500 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              {image ? (
                <div className="relative w-full h-48">
                  <Image src={image || "/placeholder.svg"} alt="Aperçu" fill className="object-contain" />
                </div>
              ) : (
                <div className="text-slate-300">
                  <p className="text-lg font-medium">Clique pour charger une image</p>
                  <p className="text-sm mt-2">PNG, JPG ou GIF</p>
                </div>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            <Button
              onClick={handleAnalyze}
              disabled={!image || loading}
              className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white"
            >
              {loading ? "Analyse en cours..." : "Analyser l'image"}
            </Button>
          </Card>

          <Card className="bg-slate-800/50 border-orange-500/30 border-2 p-6">
            <h3 className="font-bold text-white mb-4">Résultat</h3>
            {analysis ? (
              <div className="text-slate-100 text-sm leading-relaxed space-y-2">
                {analysis.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-center py-8">L'analyse apparaîtra ici...</p>
            )}
          </Card>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h3 className="font-bold text-white mb-2">Réseaux de neurones convolutifs</h3>
            <p className="text-slate-300 text-sm">
              La vision par IA utilise des couches qui reconnaissent des patterns visuels de plus en plus complexes.
            </p>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h3 className="font-bold text-white mb-2">À tester</h3>
            <p className="text-slate-300 text-sm">
              Essaie avec des objets simples, puis des images complexes pour voir les limites et forces du modèle.
            </p>
          </Card>
        </div>
      </section>
    </main>
  )
}
