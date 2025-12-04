"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

const features = [
  {
    id: 1,
    title: "Chatbot Intelligent",
    description: "Discute avec une IA générative. Comprends comment elle comprend et répond à tes questions.",
    icon: "🧠",
    color: "from-indigo-500 to-blue-500",
    accentBg: "bg-slate-800/50 border-indigo-500/30",
    href: "/chatbot",
    iconBg: "bg-indigo-500/20 border border-indigo-500/50",
  },
  {
    id: 2,
    title: "Vision par IA",
    description: "Envoie une image et l'IA la reconnait. Découvre comment les réseaux de neurones « voient ».",
    icon: "🖼️",
    color: "from-orange-500 to-red-500",
    accentBg: "bg-slate-800/50 border-orange-500/30",
    href: "/vision",
    iconBg: "bg-orange-500/20 border border-orange-500/50",
  },
  {
    id: 3,
    title: "Classification",
    description: "Apprends comment l'IA classe et catégorise des données. Entraîne ton propre modèle.",
    icon: "📊",
    color: "from-teal-500 to-cyan-500",
    accentBg: "bg-slate-800/50 border-teal-500/30",
    href: "/classification",
    iconBg: "bg-teal-500/20 border border-teal-500/50",
  },
  {
    id: 4,
    title: "Générateur de Contenu",
    description: "Crée des textes et des images avec l'IA. Découvre comment les prompts influencent les résultats.",
    icon: "✨",
    color: "from-violet-500 to-purple-500",
    accentBg: "bg-slate-800/50 border-violet-500/30",
    href: "/generator",
    iconBg: "bg-violet-500/20 border border-violet-500/50",
  },
]

export default function FeatureCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <Link key={feature.id} href={feature.href}>
            <Card
              className={`p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${feature.accentBg} border-2`}
            >
              <div className={`${feature.iconBg} w-16 h-16 rounded-xl flex items-center justify-center text-2xl mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
