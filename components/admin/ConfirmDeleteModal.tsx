import React from 'react';
import { XIcon } from '../ui/Icons';

interface ConfirmDeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <header className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-ift-dark-blue">{title}</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200">
                        <XIcon className="w-5 h-5 text-gray-600" />
                    </button>
                </header>
                <div className="p-6">
                    <p className="text-gray-600">{message}</p>
                </div>
                <footer className="flex justify-end gap-4 p-4 bg-gray-50 rounded-b-lg">
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                        Cancelar
                    </button>
                     <button 
                        onClick={onConfirm}
                        className="px-4 py-2 text-sm font-semibold text-white bg-red-600 border border-red-600 rounded-md hover:bg-red-700"
                    >
                        Confirmar Exclusão
                    </button>
                </footer>
            </div>
        </div>
    );
};
