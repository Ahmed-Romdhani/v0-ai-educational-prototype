import { NextResponse } from 'next/server';
import { openai } from '@/lib/openai';

export async function GET() {
  try {
    const models = await openai.models.list();
    return NextResponse.json({ 
      success: true, 
      models: models.data.slice(0, 3) 
    });
  } catch (error) {
    // Vérification de type sécurisée
    if (error instanceof Error) {
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 500 });
    }
    
    // Pour les erreurs non-Error
    return NextResponse.json({ 
      success: false, 
      error: 'Une erreur inconnue est survenue' 
    }, { status: 500 });
  }
}