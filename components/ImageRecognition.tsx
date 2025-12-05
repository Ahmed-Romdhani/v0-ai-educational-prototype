'use client';

import { useState, useRef, useEffect } from 'react';
import { Upload, Camera, X, Loader2, BarChart3 } from 'lucide-react';
import { modelService, Prediction } from '@/app/lib/tfjs-model-loader';

export default function ImageRecognition() {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [modelInfo, setModelInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialiser le modèle au chargement
  useEffect(() => {
    const initModel = async () => {
      try {
        await modelService.initialize();
        const info = modelService.getModelInfo();
        setModelInfo(info);
      } catch (err) {
        console.error('Initialisation échouée:', err);
        setError('Modèle non disponible. Vérifiez la conversion.');
      }
    };
    
    initModel();
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setImage(URL.createObjectURL(selectedFile));
    setPredictions([]);
    setError(null);
  };

  const handlePredict = async () => {
    if (!file) {
      setError('Sélectionnez une image d\'abord');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const results = await modelService.predictImage(file);
      setPredictions(results);
    } catch (err) {
      setError(`Erreur: ${err.message}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clearImage = () => {
    setImage(null);
    setFile(null);
    setPredictions([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* En-tête */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🖼️ Reconnaissance d'Images avec IA
        </h1>
        <p className="text-gray-600">
          Téléchargez une image et voyez ce que l'IA reconnaît
        </p>
        
        {modelInfo && (
          <div className="mt-4 inline-flex items-center gap-4 text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
            <BarChart3 size={16} />
            <span>Modèle: {modelInfo.classesCount} classes • Input: {JSON.stringify(modelInfo.inputShape)}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Colonne gauche - Upload & Preview */}
        <div className="space-y-6">
          {/* Zone de téléchargement */}
          <div
            className={`border-3 border-dashed rounded-2xl p-8 text-center transition-all ${image
                ? 'border-green-400 bg-green-50'
                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
              }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*"
              className="hidden"
              capture="environment"
            />
            
            {image ? (
              <div className="relative">
                <img
                  src={image}
                  alt="Preview"
                  className="max-h-64 mx-auto rounded-lg shadow-lg"
                />
                <button
                  onClick={(e) => { e.stopPropagation(); clearImage(); }}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-6xl">📁</div>
                <div>
                  <p className="text-lg font-medium text-gray-700">
                    Glissez-déposez une image ici
                  </p>
                  <p className="text-gray-500 mt-2">ou cliquez pour parcourir</p>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
                    <Upload size={18} />
                    Parcourir
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                    <Camera size={18} />
                    Caméra
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bouton de prédiction */}
          <button
            onClick={handlePredict}
            disabled={!image || loading}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-3 ${!image || loading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
              } text-white`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={24} />
                Analyse en cours...
              </>
            ) : (
              <>
                <span className="text-2xl">🔍</span>
                Analyser l'Image
              </>
            )}
          </button>

          {/* Info modèle */}
          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-xl">
              <strong>❌ Erreur:</strong> {error}
            </div>
          )}
        </div>

        {/* Colonne droite - Résultats */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-3xl">📊</span> Résultats
          </h2>

          {predictions.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <div className="text-6xl mb-4">🤖</div>
              <p className="text-gray-500">
                Les résultats apparaîtront ici après analyse
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Top prediction */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="text-3xl p-3 rounded-xl"
                      style={{ backgroundColor: `${predictions[0].color}20` }}
                    >
                      {predictions[0].icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{predictions[0].className}</h3>
                      <p className="text-gray-600">Prédiction principale</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-700">
                    {(predictions[0].confidence * 100).toFixed(1)}%
                  </div>
                </div>
                
                {/* Barre de confiance */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Confiance</span>
                    <span>{(predictions[0].confidence * 100).toFixed(1)}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${predictions[0].confidence * 100}%`,
                        backgroundColor: predictions[0].color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Autres prédictions */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">Autres possibilités:</h4>
                {predictions.slice(1, 5).map((pred, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <span style={{ color: pred.color }}>{pred.icon}</span>
                      <span>{pred.className}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pred.confidence * 100}%`,
                            backgroundColor: pred.color,
                          }}
                        ></div>
                      </div>
                      <span className="font-medium">
                        {(pred.confidence * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conseils */}
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 Conseils pour de meilleurs résultats:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Utilisez des images claires et bien éclairées</li>
              <li>• Centrez l'objet principal dans l'image</li>
              <li>• Évitez les images floues ou pixelisées</li>
              <li>• Taille recommandée: 224x224 pixels</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}