export default function ChatbotDiagram() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-950/30 to-purple-950/30 rounded-lg p-8 border border-indigo-500/20">
      <h2 className="text-white font-bold text-lg mb-6">Comment fonctionne un Chatbot?</h2>

      <svg viewBox="0 0 800 300" className="w-full h-auto max-w-2xl mx-auto">
        {/* User Input */}
        <rect
          x="20"
          y="50"
          width="120"
          height="80"
          rx="8"
          fill="#4f46e5"
          opacity="0.2"
          stroke="#818cf8"
          strokeWidth="2"
        />
        <circle cx="80" cy="85" r="12" fill="#818cf8" />
        <text x="80" y="145" textAnchor="middle" className="fill-white text-sm font-semibold">
          Entrée Utilisateur
        </text>
        <text x="80" y="160" textAnchor="middle" className="fill-slate-300 text-xs">
          "Explique moi l'IA"
        </text>

        {/* Arrow 1 */}
        <path d="M 150 95 L 210 95" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <text x="180" y="85" textAnchor="middle" className="fill-indigo-400 text-xs font-semibold">
          Traitement
        </text>

        {/* AI Processing */}
        <circle cx="270" cy="95" r="50" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.6" />
        <circle cx="270" cy="95" r="35" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.4" />
        <circle cx="270" cy="95" r="20" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.2" />

        {/* AI Brain icon */}
        <g transform="translate(270, 95)">
          <circle cx="0" cy="0" r="8" fill="#a78bfa" opacity="0.8" />
          <circle cx="-6" cy="-6" r="3" fill="#a78bfa" opacity="0.6" />
          <circle cx="6" cy="-6" r="3" fill="#a78bfa" opacity="0.6" />
          <circle cx="-6" cy="6" r="3" fill="#a78bfa" opacity="0.6" />
          <circle cx="6" cy="6" r="3" fill="#a78bfa" opacity="0.6" />
        </g>
        <text x="270" y="160" textAnchor="middle" className="fill-white text-sm font-semibold">
          Modèle IA
        </text>
        <text x="270" y="175" textAnchor="middle" className="fill-slate-300 text-xs">
          GPT-3.5 Turbo
        </text>

        {/* Arrow 2 */}
        <path d="M 320 95 L 380 95" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#arrowhead2)" />
        <text x="350" y="85" textAnchor="middle" className="fill-purple-400 text-xs font-semibold">
          Génération
        </text>

        {/* Response Output */}
        <rect
          x="400"
          y="50"
          width="120"
          height="80"
          rx="8"
          fill="#a78bfa"
          opacity="0.2"
          stroke="#c4b5fd"
          strokeWidth="2"
        />
        <circle cx="460" cy="85" r="12" fill="#c4b5fd" />
        <text x="460" y="145" textAnchor="middle" className="fill-white text-sm font-semibold">
          Réponse IA
        </text>
        <text x="460" y="160" textAnchor="middle" className="fill-slate-300 text-xs">
          "L'IA est une..."
        </text>

        {/* Bottom flow explanation */}
        <rect
          x="520"
          y="50"
          width="260"
          height="80"
          rx="8"
          fill="slate-800"
          opacity="0.5"
          stroke="#64748b"
          strokeWidth="1"
        />
        <text x="650" y="75" textAnchor="middle" className="fill-white text-xs font-semibold">
          Étapes du processus:
        </text>
        <text x="530" y="95" className="fill-slate-300 text-xs">
          1️⃣ Compréhension du texte
        </text>
        <text x="530" y="110" className="fill-slate-300 text-xs">
          2️⃣ Analyse contextuelle
        </text>
        <text x="530" y="125" className="fill-slate-300 text-xs">
          3️⃣ Génération de réponse
        </text>

        {/* Arrow markers */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#818cf8" />
          </marker>
          <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#a78bfa" />
          </marker>
        </defs>
      </svg>

      {/* Key Points */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
          <h3 className="text-indigo-300 font-semibold text-sm mb-2">Comprendre</h3>
          <p className="text-slate-300 text-xs">
            Le chatbot analyse chaque mot et comprend le contexte de ta question.
          </p>
        </div>
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <h3 className="text-purple-300 font-semibold text-sm mb-2">Traiter</h3>
          <p className="text-slate-300 text-xs">Des millions de paramètres calculent la meilleure réponse possible.</p>
        </div>
        <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
          <h3 className="text-violet-300 font-semibold text-sm mb-2">Répondre</h3>
          <p className="text-slate-300 text-xs">Le modèle génère une réponse cohérente basée sur son apprentissage.</p>
        </div>
      </div>
    </div>
  )
}
