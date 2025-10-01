import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { XIcon, SendIcon } from '../ui/Icons';

interface ComposeEmailModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSend: (data: { to: string, subject: string, message: string }) => void;
}

export const ComposeEmailModal: React.FC<ComposeEmailModalProps> = ({ isOpen, onClose, onSend }) => {
    const { t } = useI18n();
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSend({ to, subject, message });
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
                <header className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-ift-dark-blue">{t('webmail_compose_title')}</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200">
                        <XIcon className="w-5 h-5 text-gray-600" />
                    </button>
                </header>
                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-4">
                        <div>
                            <label htmlFor="to" className="sr-only">{t('webmail_to')}</label>
                            <input type="email" id="to" value={to} onChange={e => setTo(e.target.value)} placeholder={t('webmail_to')} className="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-green-500 block w-full p-2" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="sr-only">{t('webmail_subject')}</label>
                            <input type="text" id="subject" value={subject} onChange={e => setSubject(e.target.value)} placeholder={t('webmail_subject')} className="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-green-500 block w-full p-2" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">{t('webmail_message')}</label>
                            <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={10} placeholder={t('webmail_message')} className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-0 block w-full p-2"></textarea>
                        </div>
                    </div>
                    <footer className="flex justify-end p-4 bg-gray-50 rounded-b-lg">
                        <button type="submit" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                            <SendIcon className="w-4 h-4" />
                            {t('webmail_send')}
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    );
};