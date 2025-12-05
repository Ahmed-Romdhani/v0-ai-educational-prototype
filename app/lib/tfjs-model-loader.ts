import * as tf from '@tensorflow/tfjs';

export interface Prediction {
  className: string;
  confidence: number;
  classId: number;
  icon: string;
  color: string;
}

export class ModelService {
  private static instance: ModelService;
  private model: tf.LayersModel | null = null;
  private classes: any[] = [];
  private isInitialized = false;

  private constructor() {}

  static getInstance(): ModelService {
    if (!ModelService.instance) {
      ModelService.instance = new ModelService();
    }
    return ModelService.instance;
  }

  async initialize() {
    if (this.isInitialized) return;
    
    try {
      console.log('🔄 Initialisation du modèle...');
      
      // 1. Charger les classes
      const classesResponse = await fetch('/models/tfjs-model/classes.json');
      const classesData = await classesResponse.json();
      this.classes = classesData.classes;
      
      // 2. Charger le modèle TensorFlow.js
      console.log('📦 Chargement du modèle TensorFlow.js...');
      this.model = await tf.loadLayersModel('/models/tfjs-model/model.json');
      
      // 3. Warm up (première prédiction lente)
      console.log('⚡ Warm up du modèle...');
      await this.warmUp();
      
      this.isInitialized = true;
      console.log('✅ Modèle initialisé avec succès');
      
    } catch (error) {
      console.error('❌ Erreur d\'initialisation:', error);
      throw error;
    }
  }

  private async warmUp() {
    if (!this.model) return;
    
    const inputShape = this.model.inputs[0].shape as number[];
    const [height, width, channels] = inputShape.slice(1);
    
    // Créer un tensor de test
    const testTensor = tf.ones([1, height, width, channels]);
    const prediction = this.model.predict(testTensor) as tf.Tensor;
    
    // Nettoyer
    testTensor.dispose();
    prediction.dispose();
  }

  async predictImage(imageFile: File): Promise<Prediction[]> {
    if (!this.model || !this.isInitialized) {
      await this.initialize();
    }

    try {
      // Convertir File en Image
      const img = await this.fileToImage(imageFile);
      
      // Prétraiter l'image
      const tensor = await this.preprocessImage(img);
      
      // Prédiction
      const prediction = this.model!.predict(tensor) as tf.Tensor;
      const predictionsArray = await prediction.data();
      
      // Formater les résultats
      const results = Array.from(predictionsArray)
        .map((confidence, index) => ({
          className: this.classes[index]?.displayName || `Class ${index}`,
          confidence: confidence,
          classId: index,
          icon: this.classes[index]?.icon || '❓',
          color: this.classes[index]?.color || '#666'
        }))
        .sort((a, b) => b.confidence - a.confidence);
      
      // Nettoyer la mémoire
      tensor.dispose();
      prediction.dispose();
      
      return results;
      
    } catch (error) {
      console.error('Erreur de prédiction:', error);
      throw error;
    }
  }

  private fileToImage(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  }

  private async preprocessImage(img: HTMLImageElement): Promise<tf.Tensor> {
    // Convertir en tensor
    let tensor = tf.browser.fromPixels(img);
    
    // Redimensionner selon le modèle
    const inputShape = this.model!.inputs[0].shape as number[];
    const [height, width] = inputShape.slice(1, 3);
    
    tensor = tf.image.resizeBilinear(tensor, [height, width]);
    
    // Normaliser [0, 255] → [0, 1]
    tensor = tensor.div(255.0);
    
    // Ajouter dimension batch
    tensor = tensor.expandDims(0);
    
    return tensor;
  }

  getModelInfo() {
    if (!this.model) return null;
    
    return {
      inputShape: this.model.inputs[0].shape,
      outputShape: this.model.outputs[0].shape,
      classesCount: this.classes.length,
      classes: this.classes.map(c => c.displayName)
    };
  }
}

// Instance globale
export const modelService = ModelService.getInstance();