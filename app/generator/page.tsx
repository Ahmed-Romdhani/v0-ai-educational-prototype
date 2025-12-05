'use client';

import { useState } from 'react';
import TextGenerator from './components/TextGenerator';
import ImageGenerator from './components/ImageGenerator';
import PromptExamples from './components/ui/PromptExamples';
import HistoryPanel from './components/HistoryPanel';

type GenerationType = 'text' | 'image';
type GenerationItem = {
  id: string;
  type: GenerationType;
  prompt: string;
  result: string;
  timestamp: Date;
};

export default function GeneratePage() {
  const [activeTab, setActiveTab] = useState<'text' | 'image'>('text');
  const [history, setHistory] = useState<GenerationItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addToHistory = (item: Omit<GenerationItem, 'id' | 'timestamp'>) => {
    const newItem: GenerationItem = {
      ...item,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setHistory(prev => [newItem, ...prev.slice(0, 9)]); // Garder les 10 derniers
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            🎨 Générateur de Contenu IA
          </h1>
          <p className="text-gray-600">
            Créez des textes et des images avec l'IA. Découvrez comment les prompts influencent les résultats.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Onglets */}
            <div className="bg-white rounded-xl shadow-lg p-1">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('text')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${activeTab === 'text'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  📝 Générer du Texte
                </button>
                <button
                  onClick={() => setActiveTab('image')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${activeTab === 'image'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  🖼️ Générer des Images
                </button>
              </div>
            </div>

            {/* Contenu actif */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              {activeTab === 'text' ? (
                <TextGenerator
                  onGenerate={addToHistory}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              ) : (
                <ImageGenerator
                  onGenerate={addToHistory}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              )}
            </div>

            {/* Exemples de prompts */}
            <PromptExamples
              activeTab={activeTab}
              onSelectPrompt={(prompt) => {
                // Implémentez la logique pour remplir le prompt
                console.log('Prompt sélectionné:', prompt);
              }}
            />
          </div>

          {/* Colonne latérale - Historique */}
          <div className="lg:col-span-1">
            <HistoryPanel
              history={history}
              onSelectItem={(item) => {
                // Recharger un élément de l'historique
                console.log('Élément sélectionné:', item);
              }}
              onClearHistory={() => setHistory([])}
            />
          </div>
        </div>

        {/* Section éducative */}
        <div className="mt-8 md:mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🎯 Comment les Prompts Influencent les Résultats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-700">🧠 Précision</h3>
              <p className="text-gray-600">
                Plus votre prompt est spécifique, plus le résultat sera précis.
                Ex: "un chat" vs "un chat siamois assis sur un coussin rouge".
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-purple-700">🎨 Style</h3>
              <p className="text-gray-600">
                Mentionnez le style désiré: "photo réaliste", "dessin animé",
                "aquarelle", "style pixel art".
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-green-700">📐 Paramètres</h3>
              <p className="text-gray-600">
                Pour les images: "lumière douce", "vue de dessus", "arrière-plan flou".
                Pour le texte: "ton formel", "style journalistique".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}