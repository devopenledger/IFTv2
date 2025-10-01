import React from 'react';
import { XIcon } from '../ui/Icons';
import { MOCK_NEWSLETTERS } from '../../constants';

type Newsletter = typeof MOCK_NEWSLETTERS[0];

interface PreviewNewsletterModalProps {
    isOpen: boolean;
    onClose: () => void;
    newsletter: Newsletter | null;
}

export const PreviewNewsletterModal: React.FC<PreviewNewsletterModalProps> = ({ isOpen, onClose, newsletter }) => {
    if (!isOpen || !newsletter) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl h-[80vh] flex flex-col">
                <header className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-ift-dark-blue">Pré-visualizar Newsletter</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200">
                        <XIcon className="w-5 h-5 text-gray-600" />
                    </button>
                </header>
                <div className="p-6 overflow-y-auto">
                    <h3 className="text-2xl font-bold mb-4">{newsletter.subject}</h3>
                    <div className="prose max-w-none">
                        <p>Olá [Nome do Usuário],</p>
                        <p>Esta é uma pré-visualização do conteúdo da sua newsletter. Em uma aplicação real, o conteúdo completo e formatado seria exibido aqui.</p>
                        <p>Atenciosamente,<br/>Equipe IFT BRICS</p>
                    </div>
                </div>
                 <footer className="flex justify-end gap-4 p-4 bg-gray-50 rounded-b-lg">
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                        Fechar
                    </button>
                </footer>
            </div>
        </div>
    );
};
