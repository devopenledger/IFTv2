import React, { useState } from 'react';
import { XIcon } from '../ui/Icons';

interface AddEventModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (eventData: any) => void;
}

export const AddEventModal: React.FC<AddEventModalProps> = ({ isOpen, onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('live_class');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ title, date, type });
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <header className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-ift-dark-blue">Adicionar Novo Evento</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200">
                        <XIcon className="w-5 h-5 text-gray-600" />
                    </button>
                </header>
                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-4">
                        <div>
                            <label htmlFor="event-title" className="block mb-2 text-sm font-medium text-gray-900">Título do Evento</label>
                            <input type="text" id="event-title" value={title} onChange={e => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="event-date" className="block mb-2 text-sm font-medium text-gray-900">Data e Hora</label>
                            <input type="datetime-local" id="event-date" value={date} onChange={e => setDate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="event-type" className="block mb-2 text-sm font-medium text-gray-900">Tipo de Evento</label>
                            <select id="event-type" value={type} onChange={e => setType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                <option value="live_class">Aula ao Vivo</option>
                                <option value="assignment_deadline">Prazo de Entrega</option>
                                <option value="webinar">Webinar</option>
                            </select>
                        </div>
                    </div>
                    <footer className="flex justify-end gap-4 p-4 bg-gray-50 rounded-b-lg">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                            Cancelar
                        </button>
                        <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                            Salvar Evento
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    );
};