
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useI18n } from '../../hooks/useI18n';
import { ChatMessage } from '../../types';
import { BotIcon, XIcon } from '../ui/Icons';

// This is a placeholder for a real API key which should be handled securely.
// For this prototype, we assume `process.env.API_KEY` is available.
const API_KEY = process.env.API_KEY;

interface AITutorModalProps {
    isOpen: boolean;
    onClose: () => void;
    lessonTitle: string;
    lessonContent: string;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({ isOpen, onClose, lessonTitle, lessonContent }) => {
    const { t } = useI18n();
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            if (!API_KEY) {
                throw new Error("API key is not configured.");
            }
            const ai = new GoogleGenAI({ apiKey: API_KEY });

            const model = 'gemini-2.5-flash';
            const systemInstruction = `You are an expert tutor for the IFT BRICS platform. Your name is "Tutor IA".
            Your task is to answer student questions based ONLY on the provided lesson content.
            NEVER provide information from outside the lesson content.
            If the answer is not in the content, politely state that the information is not available in this lesson and suggest the student ask a different question related to the material.
            Be helpful, encouraging, and clear in your explanations.
            The current lesson is titled: "${lessonTitle}".
            Here is the lesson content:
            ---
            ${lessonContent}
            ---
            Now, answer the student's question.`;

            const modelResponse: ChatMessage = { role: 'model', text: '' };
            setMessages(prev => [...prev, modelResponse]);

            const responseStream = await ai.models.generateContentStream({
                model,
                contents: input,
                config: { systemInstruction }
            });

            for await (const chunk of responseStream) {
                const chunkText = chunk.text;
                setMessages(prev =>
                    prev.map((msg, index) =>
                        index === prev.length - 1 ? { ...msg, text: msg.text + chunkText } : msg
                    )
                );
            }
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            const errorMessage: ChatMessage = {
                role: 'model',
                text: "Sorry, I'm having trouble connecting right now. Please try again later.",
            };
            setMessages(prev => [...prev.slice(0, -1), errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl h-[80vh] flex flex-col">
                <header className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-3">
                        <BotIcon className="w-6 h-6 text-ift-dark-blue" />
                        <h2 className="text-lg font-bold text-ift-dark-blue">{t('ai_tutor_modal_title')}</h2>
                    </div>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200">
                        <XIcon className="w-5 h-5 text-gray-600" />
                    </button>
                </header>

                <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                             {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0"><BotIcon className="w-5 h-5 text-gray-600"/></div>}
                             <div className={`max-w-md p-3 rounded-lg ${msg.role === 'user' ? 'bg-ift-light-green text-black' : 'bg-gray-100 text-ift-dark-blue'}`}>
                                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && messages[messages.length - 1]?.role === 'model' && (
                         <div className="flex gap-3">
                             <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0"><BotIcon className="w-5 h-5 text-gray-600"/></div>
                             <div className="max-w-md p-3 rounded-lg bg-gray-100 text-ift-dark-blue">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-0"></span>
                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <footer className="p-4 border-t">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={t('ai_tutor_placeholder')}
                            className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="px-4 py-2 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
                            Send
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-2 text-center">{t('ai_tutor_disclaimer')}</p>
                </footer>
            </div>
        </div>
    );
};
