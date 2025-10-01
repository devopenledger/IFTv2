
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { PlayCircleIcon } from '../../components/ui/Icons';

const UserAvatar: React.FC<{ name: string }> = ({ name }) => (
    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-ift-dark-blue">
        {name.charAt(0)}
    </div>
);

export const StudentLiveClassPage: React.FC = () => {
    const { t } = useI18n();
    const participants = ['Alice', 'Bob', 'Celso J.', 'David', 'Eve'];
    const messages = [
        { user: 'Alice', text: 'Olá pessoal!' },
        { user: 'Prof. Celso', text: 'Bem-vindos à aula de hoje.' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('live_class_title')}</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Video Player */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="aspect-video bg-black rounded-t-lg flex items-center justify-center">
                        <PlayCircleIcon className="w-20 h-20 text-white/50" />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold">Módulo 1: O que é IA? História e conceitos básicos</h2>
                        <p className="text-gray-600 mt-1">com Prof. Celso Jungbluth</p>
                    </div>
                </div>

                {/* Sidebar with Participants and Chat */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <h3 className="font-bold text-lg mb-3">{t('live_class_participants')} ({participants.length})</h3>
                        <div className="space-y-3 max-h-48 overflow-y-auto">
                            {participants.map(name => (
                                <div key={name} className="flex items-center gap-3">
                                    <UserAvatar name={name} />
                                    <span>{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-96">
                        <h3 className="font-bold text-lg p-4 border-b">{t('live_class_chat')}</h3>
                        <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                            {messages.map((msg, i) => (
                                <div key={i}>
                                    <span className="font-semibold text-sm">{msg.user}: </span>
                                    <span className="text-sm text-gray-700">{msg.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t">
                            <input
                                type="text"
                                placeholder={t('live_class_send_message')}
                                className="w-full text-sm border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
