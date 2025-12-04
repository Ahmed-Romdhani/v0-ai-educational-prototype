"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: "assistant",
      content: "Salut! Je suis un chatbot IA. Pose-moi une question et observe comment je comprends et réponds!",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input
    setInput("")
    setError(null)
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setLoading(true)

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })
      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Erreur lors de la réponse")
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `Désolé, une erreur s'est produite: ${data.error}`,
          },
        ])
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
      }
    } catch (error) {
      console.error("Erreur:", error)
      setError("Erreur de connexion")
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Désolé, je ne peux pas répondre en ce moment. Vérifie ta connexion.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navigation />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Chatbot Intelligent</h1>
          <p className="text-slate-300">
            Discute avec une IA générative pour découvrir comment elle comprend et répond intelligemment à tes questions
          </p>
        </div>

        <Card className="bg-slate-800/50 border-indigo-500/30 border-2 p-6 h-96 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg text-sm ${msg.role === "user" ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-100"}`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-slate-400 italic text-sm">En attente de réponse...</div>}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="text"
              placeholder="Pose une question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              className="flex-1 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
            <Button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Envoyer
            </Button>
          </form>
          {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h3 className="font-bold text-white mb-2">Comment ça marche?</h3>
            <p className="text-slate-300 text-sm">
              Le chatbot utilise un modèle de langage avancé pour comprendre ton message et générer une réponse
              cohérente basée sur les patterns dans les données d'entraînement.
            </p>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h3 className="font-bold text-white mb-2">À explorer</h3>
            <p className="text-slate-300 text-sm">
              Essaie des questions variées pour voir comment le modèle gère différents contextes, langues et styles de
              questions. Observe les limites et capacités de l'IA.
            </p>
          </Card>
        </div>
      </section>
    </main>
  )
}
