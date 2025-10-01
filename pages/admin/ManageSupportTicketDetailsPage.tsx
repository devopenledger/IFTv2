import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_SUPPORT_TICKETS } from '../../constants';
import { useI18n } from '../../hooks/useI18n';

export const ManageSupportTicketDetailsPage: React.FC = () => {
    const { ticketId } = useParams<{ ticketId: string }>();
    const { t } = useI18n();
    const ticket = MOCK_SUPPORT_TICKETS.find(t => t.id === ticketId);

    if (!ticket) {
        return <div>Ticket not found.</div>
    }

    const mockMessages = [
        { user: ticket.user, text: "Olá, não consigo encontrar meu certificado do curso de IA. Podem me ajudar?" },
        { user: "Suporte IFT", text: "Olá! Claro. Verificamos em nosso sistema e o certificado foi emitido. Você tentou acessar a página 'Meus Certificados'?" }
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">Ticket #{ticket.id}: {ticket.subject}</h1>
            <p className="text-gray-600">De: {ticket.user} | Status: {ticket.status}</p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <h2 className="text-xl font-bold">Histórico da Conversa</h2>
                <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
                    {mockMessages.map((msg, index) => (
                         <div key={index} className={`flex gap-3 ${msg.user.startsWith('Suporte') ? 'justify-end' : ''}`}>
                             <div className={`max-w-xl p-3 rounded-lg ${msg.user.startsWith('Suporte') ? 'bg-ift-light-green text-black' : 'bg-gray-100 text-ift-dark-blue'}`}>
                                <p className="font-bold text-sm">{msg.user}</p>
                                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                 <h2 className="text-xl font-bold">Responder ao Ticket</h2>
                 <div>
                    <textarea rows={6} placeholder="Digite sua resposta aqui..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"></textarea>
                 </div>
                 <div className="flex justify-end gap-4">
                     <button className="px-6 py-2.5 font-semibold text-white bg-gray-400 rounded-md hover:bg-gray-500">
                        Marcar como Resolvido
                    </button>
                    <button className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                        Enviar Resposta
                    </button>
                 </div>
             </div>
        </div>
    );
};
