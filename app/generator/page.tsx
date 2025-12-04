"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState("")
  const [generationType, setGenerationType] = useState<"text" | "idea">("text")
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    setLoading(true)

    try {
      const response = await fetch("/api/generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, type: generationType }),
      })
      const data = await response.json()
      setResult(data.content)
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
          <h1 className="text-4xl font-bold text-white mb-2">Générateur de Contenu</h1>
          <p className="text-slate-300">
            Crée des textes avec l'IA et découvre comment les prompts influencent les résultats
          </p>
        </div>

        <Card className="bg-slate-800/50 border-violet-500/30 border-2 p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">Type de génération</label>
              <div className="flex gap-4">
                <label className="flex items-center text-slate-300 cursor-pointer">
                  <input
                    type="radio"
                    value="text"
                    checked={generationType === "text"}
                    onChange={(e) => setGenerationType(e.target.value as "text" | "idea")}
                    className="mr-2"
                  />
                  Texte créatif
                </label>
                <label className="flex items-center text-slate-300 cursor-pointer">
                  <input
                    type="radio"
                    value="idea"
                    checked={generationType === "idea"}
                    onChange={(e) => setGenerationType(e.target.value as "text" | "idea")}
                    className="mr-2"
                  />
                  Idées de projet
                </label>
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Prompt</label>
              <textarea
                placeholder="Décris ce que tu veux générer... Plus le prompt est détaillé, meilleur sera le résultat!"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-32 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 rounded-lg p-3"
              />
            </div>

            <Button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white"
            >
              {loading ? "Génération en cours..." : "Générer"}
            </Button>
          </div>
        </Card>

        {result && (
          <Card className="bg-slate-800/50 border-violet-500/30 border-2 p-6 mb-6">
            <h3 className="font-bold text-white mb-4">Résultat généré</h3>
            <div className="text-slate-100 leading-relaxed whitespace-pre-wrap">{result}</div>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h3 className="font-bold text-white mb-2">Comment rédiger un bon prompt?</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Sois spécifique et détaillé</li>
              <li>• Fournis un contexte clair</li>
              <li>• Donne des exemples si possible</li>
              <li>• Décris le style et le ton souhaité</li>
            </ul>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h3 className="font-bold text-white mb-2">À découvrir</h3>
            <p className="text-slate-300 text-sm">
              Essaie le même prompt avec des variantes pour voir comment les petits changements affectent complètement
              la sortie de l'IA.
            </p>
          </Card>
        </div>
      </section>
    </main>
  )
}
