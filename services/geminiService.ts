import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const MODEL_NAME = 'gemini-2.5-flash';

export const generateLegalChatResponse = async (
  history: { role: string; text: string }[],
  currentMessage: string
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: `Você é um assistente virtual do escritório de advocacia Jeferson Cardoso (JC). 
        Seu tom deve ser profissional, empático, formal (mas acessível) e seguro.
        O escritório é especialista em Direito Imobiliário, Direito de Família e Sucessões.
        Responda dúvidas básicas sobre esses temas.
        NUNCA dê conselhos jurídicos definitivos ou garanta resultados. Sempre recomende agendar uma consulta com o Dr. Jeferson para análise detalhada do caso.
        Se perguntarem sobre contato, forneça o botão de WhatsApp ou peça para usarem o formulário do site.
        Seja conciso.`,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: currentMessage });
    return result.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Houve um erro de conexão. Por favor, tente novamente mais tarde.";
  }
};

export const refineContactMessage = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: `Reescreva a seguinte mensagem de contato para um escritório de advocacia para torná-la mais clara, formal e profissional, mantendo o sentido original. 
      Mensagem original: "${message}"`,
    });
    return response.text?.trim() || message;
  } catch (error) {
    console.error("Gemini Refine Error:", error);
    return message;
  }
};