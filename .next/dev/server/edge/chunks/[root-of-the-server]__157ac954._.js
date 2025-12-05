(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__157ac954._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/app/api/chatbot/route.ts [app-edge-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/chat/route.ts
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [app-edge-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [app-edge-route] (ecmascript)");
;
const runtime = 'edge';
// Initialiser le contexte
let conversationContext = {
    lastTopics: []
};
// Base de connaissances avec types
const knowledgeBase = [
    {
        triggers: [
            [
                'bonjour',
                'salut',
                'coucou',
                'hello',
                'hey',
                'yo',
                'bonsoir'
            ],
            [
                'ça va',
                'comment tu vas',
                'comment allez-vous'
            ]
        ],
        responses: [
            "👋 Salut ! Je suis AIBot, ton guide dans le monde fascinant de l'Intelligence Artificielle !",
            "Bonjour ! Prêt(e) à découvrir les secrets de l'IA ensemble ? 🤖",
            "Hey ! Ravie de te rencontrer. Je suis là pour démystifier l'IA avec toi !"
        ]
    },
    {
        triggers: [
            [
                'c\'est quoi',
                'qu\'est-ce que',
                'définition',
                'explique',
                'définis'
            ],
            [
                'ia',
                'intelligence artificielle',
                'l\'intelligence artificielle',
                'ai'
            ]
        ],
        responses: [
            "🤖 **L'IA (Intelligence Artificielle)**, c'est la simulation de l'intelligence humaine par des machines !",
            "Imagine donner à un ordinateur la capacité d'apprendre, de raisonner et de s'adapter. C'est ça l'IA !",
            "L'IA, c'est comme créer un cerveau numérique qui peut résoudre des problèmes complexes tout seul !"
        ]
    },
    {
        triggers: [
            [
                'comment',
                'fonctionne',
                'marche',
                'travailler',
                'principe',
                'mécanisme'
            ],
            [
                'ia',
                'elle',
                'ça'
            ]
        ],
        responses: [
            "🔧 **L'IA fonctionne principalement grâce au Machine Learning** : elle analyse des données pour trouver des patterns !",
            "Pense à comment tu apprends à reconnaître un chat : en en voyant plusieurs. L'IA fait pareil, mais avec des millions d'exemples !",
            "Elle utilise des algorithmes et des réseaux neuronaux qui imitent le cerveau humain. Magique, non ?"
        ]
    },
    {
        triggers: [
            [
                'exemple',
                'application',
                'utilise',
                'concret',
                'cas'
            ],
            [
                'ia',
                'dans la vie',
                'quotidien',
                'réel'
            ]
        ],
        responses: [
            "🎯 **Exemples concrets d'IA** :\n• Assistants vocaux (Siri, Alexa)\n• Recommandations Netflix/YouTube\n• Voitures autonomes\n• Diagnostic médical\n• Traduction automatique",
            "Tu utilises l'IA tous les jours sans t'en rendre compte :\n🔍 Recherches Google\n📸 Filtres photo intelligents\n📱 Reconnaissance faciale\n🗣️ Transcription audio",
            "**Dans la médecine** : détection de cancers\n**Dans l'écologie** : prévision climatique\n**Dans l'art** : génération d'images\nL'IA est partout !"
        ]
    },
    {
        triggers: [
            [
                'apprendre',
                'étudier',
                'commencer',
                'débutant',
                'formation'
            ],
            [
                'ia',
                'machine learning',
                'programmation'
            ]
        ],
        responses: [
            "📚 **Pour débuter en IA** :\n1. Apprends Python (langage le plus utilisé)\n2. Découvre les bases des statistiques\n3. Essaie TensorFlow ou PyTorch\n4. Pratique sur Kaggle !",
            "💡 **Ressources gratuites** :\n• Coursera : AI For Everyone\n• fast.ai : cours pratiques\n• YouTube : 3Blue1Brown (explications visuelles)\n• GitHub : projets open-source",
            "Commence par un petit projet :\n🎨 Classificateur d'images\n💬 Chatbot simple\n📊 Analyse de données\nLe mieux, c'est de pratiquer !"
        ]
    },
    {
        triggers: [
            [
                'avantage',
                'bénéfice',
                'utile',
                'pourquoi',
                'intérêt'
            ],
            [
                'ia',
                'elle',
                'l\'ia'
            ]
        ],
        responses: [
            "✨ **Les avantages de l'IA** :\n⚡ Automatisation des tâches répétitives\n🎯 Précision supérieure dans certains domaines\n🌍 Solutions aux grands défis (climat, santé)\n💡 Création de nouvelles opportunités",
            "L'IA nous aide à :\n🏥 Améliorer les diagnostics médicaux\n🌱 Optimiser l'agriculture\n🔒 Renforcer la cybersécurité\n🎨 Booster la créativité",
            "**Pour la société** : plus d'efficacité\n**Pour la science** : découvertes accélérées\n**Pour toi** : outils plus intelligents au quotidien !"
        ]
    },
    {
        triggers: [
            [
                'danger',
                'risque',
                'problème',
                'mauvais',
                'négatif'
            ],
            [
                'ia',
                'elle',
                'l\'ia'
            ]
        ],
        responses: [
            "⚠️ **Les défis de l'IA** :\n• Biais dans les données d'entraînement\n• Impact sur l'emploi\n• Questions éthiques\n• Sécurité et confidentialité",
            "Il faut développer l'IA de façon **responsable** :\n🔒 Protéger la vie privée\n⚖️ Assurer l'équité\n👥 Impliquer tout le monde\n📜 Établir des règles claires",
            "L'IA est un outil. Comme tout outil, tout dépend de comment on l'utilise ! L'important, c'est la supervision humaine."
        ]
    }
];
// Réponses créatives
const creativeResponses = [
    "🤔 Intéressant ! J'adore qu'on explore l'IA ensemble. Que veux-tu savoir d'autre ?",
    "💭 Excellente réflexion ! L'IA évolue tellement vite. Une autre question ?",
    "🎯 Passionnant ! Voici ce que je peux t'expliquer sur l'IA :\n• Définition et concepts\n• Exemples concrets\n• Comment ça fonctionne\n• Comment apprendre\n• Avantages et défis\nQue choisis-tu ?",
    "🚀 Super question ! L'IA, c'est vaste. Veux-tu que je te parle plutôt d'applications pratiques ou de comment ça marche ?",
    "🌟 Je sens ta curiosité ! L'IA te passionne ? Moi aussi ! Pose-moi n'importe quelle question sur ce sujet fascinant."
];
// Fonction de similarité avec types
function calculateSimilarity(a, b) {
    if (a === b) return 1;
    const longer = a.length > b.length ? a : b;
    const shorter = a.length > b.length ? b : a;
    if (longer.length === 0) return 1;
    // Correspondance partielle
    if (longer.includes(shorter)) return 0.8;
    // Similarité de début
    if (longer.startsWith(shorter) || shorter.startsWith(longer)) {
        return 0.6;
    }
    // Même lettres
    const aSet = new Set(a);
    const bSet = new Set(b);
    let common = 0;
    for (const char of aSet){
        if (bSet.has(char)) common++;
    }
    return common / Math.max(aSet.size, bSet.size);
}
async function POST(req) {
    try {
        const body = await req.json();
        const { messages } = body;
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Aucun message reçu'
            }, {
                status: 400
            });
        }
        // Récupère le dernier message
        const lastMessage = messages[messages.length - 1];
        const userText = lastMessage.content.toLowerCase();
        console.log(`💬 Question: "${userText}"`);
        // Nettoyage
        const cleanText = userText.replace(/[^\w\sàâäéèêëîïôöùûüç]/g, ' ').replace(/\s+/g, ' ').trim();
        const words = cleanText.split(' ').filter((word)=>word.length > 2);
        console.log(`🔍 Mots: ${words.join(', ')}`);
        // Recherche intelligente
        let bestMatch = null;
        let bestScore = 0;
        for (const category of knowledgeBase){
            let categoryScore = 0;
            for (const triggerGroup of category.triggers){
                let groupScore = 0;
                let matchedWords = 0;
                for (const keyword of triggerGroup){
                    // Vérifie les correspondances
                    for (const word of words){
                        if (word.includes(keyword) || keyword.includes(word)) {
                            groupScore += 2;
                            matchedWords++;
                        } else if (calculateSimilarity(word, keyword) > 0.7) {
                            groupScore += 1.5;
                            matchedWords++;
                        }
                    }
                    // Phrases complètes
                    if (userText.includes(keyword)) {
                        groupScore += 3;
                        matchedWords++;
                    }
                }
                if (matchedWords > 0) {
                    categoryScore += groupScore;
                }
            }
            if (categoryScore > bestScore) {
                bestScore = categoryScore;
                bestMatch = category;
            }
        }
        let response;
        // Si bonne correspondance
        if (bestMatch && bestScore >= 2) {
            const responses = bestMatch.responses;
            response = responses[Math.floor(Math.random() * responses.length)];
            console.log(`🎯 Catégorie trouvée (score: ${bestScore.toFixed(1)})`);
        } else if (bestScore > 0.5 && bestMatch) {
            const intro = creativeResponses[Math.floor(Math.random() * creativeResponses.length)];
            const categoryResponse = bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
            response = `${intro}\n\n${categoryResponse}`;
            console.log(`🎨 Correspondance faible (score: ${bestScore.toFixed(1)})`);
        } else {
            // Analyse le type
            if (userText.includes('?')) {
                response = creativeResponses[Math.floor(Math.random() * creativeResponses.length)];
                console.log('❓ Question générale');
            } else if (words.length < 3) {
                response = "👋 Salut ! Je suis AIBot, spécialiste en Intelligence Artificielle. Pose-moi une question sur ce sujet fascinant !";
                console.log('👋 Message court');
            } else {
                // Devine l'intention
                if (userText.includes('quoi') || userText.includes('qu est')) {
                    response = knowledgeBase[1].responses[0];
                } else if (userText.includes('comment')) {
                    response = knowledgeBase[2].responses[0];
                } else {
                    response = creativeResponses[Math.floor(Math.random() * creativeResponses.length)];
                }
                console.log('🔮 Intention devinée');
            }
        }
        // Mettre à jour le contexte
        if (bestMatch && bestMatch.triggers.length > 0) {
            conversationContext.lastTopics.push(bestMatch.triggers[0][0]);
            if (conversationContext.lastTopics.length > 3) {
                conversationContext.lastTopics.shift();
            }
        }
        // Temps de réflexion naturel
        const thinkTime = 300 + Math.random() * 500;
        await new Promise((resolve)=>setTimeout(resolve, thinkTime));
        console.log(`🤖 Réponse: "${response.substring(0, 60)}..."`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            content: response,
            model: 'smart-rule-based',
            score: bestScore,
            timestamp: new Date().toISOString(),
            success: true
        });
    } catch (error) {
        console.error('Erreur:', error);
        // Toujours une réponse valide
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            content: "👋 Salut ! Je suis AIBot, ton assistant sur l'Intelligence Artificielle. Pose-moi des questions, je serais ravi de t'expliquer ! 🤖",
            model: 'fallback',
            timestamp: new Date().toISOString(),
            success: true
        });
    }
}
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: 'online',
        endpoint: '/api/chat',
        type: 'smart-chatbot-ia',
        features: [
            'correspondance flexible',
            'compréhension contextuelle',
            'réponses éducatives'
        ],
        timestamp: new Date().toISOString()
    });
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__157ac954._.js.map