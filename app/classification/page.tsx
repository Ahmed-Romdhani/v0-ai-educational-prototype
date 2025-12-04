"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ClassificationPage() {
  const [trainData, setTrainData] = useState("")
  const [testInput, setTestInput] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleClassify = async () => {
    if (!testInput.trim()) return
    setLoading(true)

    try {
      const response = await fetch("/api/classification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: testInput, trainingData: trainData }),
      })
      const data = await response.json()
      setResult(data.classification)
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
          <h1 className="text-4xl font-bold text-white mb-2">Classification</h1>
          <p className="text-slate-300">Apprends comment l'IA classe et catégorise des données</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 border-teal-500/30 border-2 p-6">
            <h3 className="font-bold text-white mb-4">Données d'entraînement</h3>
            <textarea
              placeholder="Exemple: chat minou félin / chien toutou canin / oiseau plume ailé"
              value={trainData}
              onChange={(e) => setTrainData(e.target.value)}
              className="w-full h-32 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 rounded-lg p-3"
            />
            <p className="text-xs text-slate-400 mt-2">Format: label mots-clés / label mots-clés</p>
          </Card>

          <Card className="bg-slate-800/50 border-teal-500/30 border-2 p-6">
            <h3 className="font-bold text-white mb-4">Tester la classification</h3>
            <Input
              type="text"
              placeholder="Entrée à classifier..."
              value={testInput}
              onChange={(e) => setTestInput(e.target.value)}
              className="mb-4 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
            <Button
              onClick={handleClassify}
              disabled={loading || !testInput.trim()}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            >
              {loading ? "Analyse..." : "Classifier"}
            </Button>
            {result && (
              <div className="mt-4 p-3 bg-teal-600/20 border border-teal-500 rounded-lg">
                <p className="text-white">
                  <span className="font-bold">Résultat:</span> {result}
                </p>
              </div>
            )}
          </Card>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h3 className="font-bold text-white mb-2">Algorithmes de classification</h3>
            <p className="text-slate-300 text-sm">
              La classification utilise des modèles comme Naive Bayes, SVM ou arbres de décision pour catégoriser les
              données.
            </p>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h3 className="font-bold text-white mb-2">Points clés</h3>
            <p className="text-slate-300 text-sm">
              Plus les données d'entraînement sont variées et précises, meilleure sera la classification de nouvelles
              données.
            </p>
          </Card>
        </div>
      </section>
    </main>
  )
}
