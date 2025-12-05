module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/openai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeImage",
    ()=>analyzeImage,
    "chatWithAI",
    ()=>chatWithAI,
    "classifyData",
    ()=>classifyData,
    "generateContent",
    ()=>generateContent,
    "openai",
    ()=>openai
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
async function chatWithAI(message) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Tu es un assistant IA éducatif pour une plateforme d'apprentissage. Tu expliques des concepts d'IA de manière simple et engageante pour les jeunes apprenants. Réponds en français."
                },
                {
                    role: "user",
                    content: message
                }
            ],
            temperature: 0.7,
            max_tokens: 500
        });
        return response.choices[0]?.message?.content || "Je n'ai pas pu générer une réponse.";
    } catch (error) {
        console.error("Erreur OpenAI chatbot:", error);
        throw new Error("Impossible de communiquer avec l'IA");
    }
}
async function generateContent(prompt, contentType) {
    try {
        const systemPrompt = contentType === "text" ? "Tu es un écrivain créatif. Génère un texte créatif intéressant et engageant basé sur le prompt de l'utilisateur. Réponds en français." : "Tu es un innovateur. Génère des idées de projets créatives et réalisables basées sur le prompt de l'utilisateur. Réponds en français.";
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.9,
            max_tokens: 800
        });
        return response.choices[0]?.message?.content || "Impossible de générer du contenu.";
    } catch (error) {
        console.error("Erreur OpenAI generator:", error);
        throw new Error("Impossible de générer du contenu");
    }
}
async function classifyData(description) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: 'Tu es un expert en classification de données. Analyse le texte fourni et classe-le dans une catégorie appropriée. Réponds au format JSON: {"category": "nom_categorie", "confidence": 0.95, "explanation": "explication courte"}'
                },
                {
                    role: "user",
                    content: description
                }
            ],
            temperature: 0.3,
            max_tokens: 200
        });
        const content = response.choices[0]?.message?.content || "{}";
        return JSON.parse(content);
    } catch (error) {
        console.error("Erreur OpenAI classification:", error);
        throw new Error("Impossible de classifier les données");
    }
}
async function analyzeImage(base64Image, imageType) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Tu es un expert en vision par ordinateur. Analyse l'image fournie et décris en détail ce que tu vois. Explique comment une IA pourrait interpréter les éléments clés. Réponds en français."
                },
                {
                    role: "user",
                    content: [
                        {
                            type: "image_url",
                            image_url: {
                                url: `data:image/${imageType};base64,${base64Image}`
                            }
                        },
                        {
                            type: "text",
                            text: "Analyse cette image et explique ce que tu vois. Comment une IA pourrait-elle interpréter cela?"
                        }
                    ]
                }
            ],
            temperature: 0.7,
            max_tokens: 600
        });
        return response.choices[0]?.message?.content || "Impossible d'analyser l'image.";
    } catch (error) {
        console.error("Erreur OpenAI vision:", error);
        throw new Error("Impossible d'analyser l'image");
    }
}
}),
"[project]/app/api/generator/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/openai.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const { prompt, type } = await request.json();
        if (!prompt || typeof prompt !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Prompt invalide"
            }, {
                status: 400
            });
        }
        const content = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateContent"])(prompt, type || "text");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            content
        });
    } catch (error) {
        console.error("Erreur générateur:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error instanceof Error ? error.message : "Erreur serveur"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d8676e21._.js.map