import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            AI Education
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">
              Accueil
            </Link>
            <Link href="/chatbot" className="text-slate-300 hover:text-white transition-colors">
              Chatbot
            </Link>
            <Link href="/generator" className="text-slate-300 hover:text-white transition-colors">
              Générateur
            </Link>
            <Link href="/classification" className="text-slate-300 hover:text-white transition-colors">
              Classification
            </Link>
            <Link href="/vision" className="text-slate-300 hover:text-white transition-colors">
              Vision
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}