export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-white mb-4">Plateforme</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/" className="hover:text-indigo-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Ressources</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Tutoriels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Exemples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Communauté</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Légal</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 AI Learning Hub. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
