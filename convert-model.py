# convert-model.py
import os
import json
import tensorflow as tf
import numpy as np

print("🚀 Conversion du modèle .h5 vers TensorFlow.js...")

# Vérifier si le modèle existe
model_path = "public/models/final_image_recognition_model.h5"
if not os.path.exists(model_path):
    print(f"❌ Fichier non trouvé: {model_path}")
    print("Assure-toi que le fichier est dans public/models/")
    exit(1)

try:
    # 1. Charger le modèle pour voir ses caractéristiques
    print("📊 Analyse du modèle...")
    model = tf.keras.models.load_model(model_path)
    
    print(f"✅ Modèle chargé: {model_path}")
    print(f"   Shape d'entrée: {model.input_shape}")
    print(f"   Shape de sortie: {model.output_shape}")
    print(f"   Nombre de couches: {len(model.layers)}")
    print(f"   Nombre de paramètres: {model.count_params():,}")
    
    # 2. Demander le nombre de classes
    output_shape = model.output_shape
    if len(output_shape) == 2:
        num_classes = output_shape[1]
        print(f"   Classes détectées: {num_classes}")
    else:
        num_classes = int(input("Combien de classes ton modèle reconnaît-il ? "))
    
    # 3. Demander les noms des classes
    classes = []
    print("\n📝 Entrez les noms des classes (appuyez sur Entrée après chaque) :")
    for i in range(num_classes):
        class_name = input(f"Classe {i}: ") or f"Classe_{i}"
        classes.append({
            "id": i,
            "name": class_name.lower().replace(" ", "_"),
            "displayName": class_name,
            "icon": ["🐱", "🐶", "🚗", "✈️", "🏠", "🌳", "👤", "📱", "💻", "🎮"][i % 10],
            "color": f"#{''.join([f'{int(x*255):02x}' for x in np.random.rand(3)])}"
        })
    
    # 4. Créer le dossier de sortie
    output_dir = "public/models/tfjs-model"
    os.makedirs(output_dir, exist_ok=True)
    
    # 5. Convertir avec tensorflowjs
    print("\n🔄 Conversion en TensorFlow.js...")
    os.system(f"tensorflowjs_converter --input_format=keras {model_path} {output_dir}")
    
    # 6. Créer les fichiers de configuration
    print("\n📝 Création des fichiers de configuration...")
    
    # classes.json
    classes_path = os.path.join(output_dir, "classes.json")
    with open(classes_path, "w") as f:
        json.dump({
            "classes": classes,
            "modelInfo": {
                "name": "Image Recognition Model",
                "inputShape": model.input_shape[1:],  # Supprime batch dimension
                "normalization": "divide_by_255",
                "framework": "TensorFlow/Keras",
                "convertedDate": "2024"
            }
        }, f, indent=2)
    
    # metadata.json (mis à jour)
    metadata_path = os.path.join(output_dir, "metadata.json")
    with open(metadata_path, "w") as f:
        json.dump({
            "modelName": "Image Recognition Model",
            "version": "1.0.0",
            "description": "Modèle de reconnaissance d'images",
            "inputShape": str(model.input_shape),
            "outputShape": str(model.output_shape),
            "classes": [c["displayName"] for c in classes]
        }, f, indent=2)
    
    print(f"\n🎉 Conversion terminée !")
    print(f"📁 Modèle disponible dans: {output_dir}")
    print("\nFichiers générés:")
    for file in os.listdir(output_dir):
        size = os.path.getsize(os.path.join(output_dir, file)) / 1024
        print(f"  - {file} ({size:.1f} KB)")
    
    print("\n🚀 Pour utiliser dans Next.js:")
    print("   1. npm install @tensorflow/tfjs")
    print("   2. Importer le composant ImageRecognition")
    
except Exception as e:
    print(f"\n❌ Erreur: {e}")
    print("\n💡 Solution alternative:")
    print("   1. Installer tensorflowjs: pip install tensorflowjs")
    print("   2. Lancer: tensorflowjs_converter --input_format=keras public/models/final_image_recognition_model.h5 public/models/tfjs-model/")