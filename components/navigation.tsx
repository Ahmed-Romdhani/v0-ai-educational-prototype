"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"
          >
            AI Hub
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-indigo-400 transition-colors">
              Accueil
            </Link>
            <Link href="/chatbot" className="hover:text-indigo-400 transition-colors">
              Chatbot
            </Link>
            <Link href="/vision" className="hover:text-indigo-400 transition-colors">
              Vision
            </Link>
            <Link href="/classification" className="hover:text-indigo-400 transition-colors">
              Classification
            </Link>
            <Link href="/generator" className="hover:text-indigo-400 transition-colors">
              Générateur
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
