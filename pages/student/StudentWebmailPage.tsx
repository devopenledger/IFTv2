import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_EMAILS } from '../../constants';
import { Email } from '../../types';
import { MailIcon, StarIcon, TrashIcon, ReplyIcon } from '../../components/ui/Icons';
import { ComposeEmailModal } from '../../components/student/ComposeEmailModal';

type Tab = 'inbox' | 'favorites';

const EmailListItem: React.FC<{ email: Email; onSelect: () => void; isSelected: boolean; }> = ({ email, onSelect, isSelected }) => {
    const { t } = useI18n();
    const from = email.fromKey ? t(email.fromKey) : email.from;
    const subject = email.subjectKey ? t(email.subjectKey) : email.subject;

    return (
        <button
            onClick={onSelect}
            className={`w-full text-left p-3 rounded-lg border-b border-gray-100 ${isSelected ? 'bg-green-100' : 'hover:bg-gray-50'}`}
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {!email.read && <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>}
                    <p className={`font-semibold truncate ${email.read ? 'text-gray-600' : 'text-ift-dark-blue'}`}>{from}</p>
                </div>
                <p className="text-xs text-gray-500">{email.time}</p>
            </div>
            <p className={`truncate text-sm mt-1 ${email.read ? 'text-gray-600' : 'text-ift-dark-blue font-medium'}`}>{subject}</p>
        </button>
    );
};

export const StudentWebmailPage: React.FC = () => {
    const { t } = useI18n();
    const [emails, setEmails] = useState<Email[]>(MOCK_EMAILS);
    const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<Tab>('inbox');
    const [isComposeOpen, setComposeOpen] = useState(false);

    const handleSelectEmail = (id: string) => {
        setSelectedEmailId(id);
        setEmails(prev => prev.map(e => e.id === id ? { ...e, read: true } : e));
    };

    const handleToggleFavorite = (id: string) => {
        setEmails(prev => prev.map(e => e.id === id ? { ...e, favorited: !e.favorited } : e));
    };

    const handleDeleteEmail = (id: string) => {
        setEmails(prev => prev.filter(e => e.id !== id));
        if (selectedEmailId === id) {
            setSelectedEmailId(null);
        }
    };
    
    const handleSendEmail = (newEmailData: { to: string, subject: string, message: string }) => {
        const newEmail: Email = {
            id: `E${Date.now()}`,
            from: 'Aluno Teste',
            subject: newEmailData.subject,
            body: newEmailData.message,
            time: 'Agora',
            read: true,
            favorited: false,
        }
        setEmails(prev => [newEmail, ...prev]);
        setComposeOpen(false);
    }
    
    const selectedEmail = emails.find(e => e.id === selectedEmailId);
    
    const filteredEmails = emails.filter(email => {
        if (activeTab === 'favorites') {
            return email.favorited;
        }
        return true; // Inbox shows all
    });

    const tabs: {id: Tab, labelKey: string}[] = [
        {id: 'inbox', labelKey: 'webmail_inbox'},
        {id: 'favorites', labelKey: 'webmail_favorites'},
    ];

    return (
        <div className="h-[calc(100vh-10rem)] flex flex-col">
             <ComposeEmailModal isOpen={isComposeOpen} onClose={() => setComposeOpen(false)} onSend={handleSendEmail} />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_student_webmail')}</h1>
                <button onClick={() => setComposeOpen(true)} className="px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    {t('webmail_compose')}
                </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex-grow flex overflow-hidden">
                {/* Email List Pane */}
                <div className="w-full md:w-1/3 border-r border-gray-200 flex flex-col">
                    <div className="p-2 border-b">
                        <div className="flex space-x-1 bg-gray-100 p-1 rounded-md">
                             {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full px-3 py-1.5 text-sm font-semibold rounded-md ${activeTab === tab.id ? 'bg-white shadow' : 'text-gray-600 hover:bg-white/50'}`}
                                >
                                    {t(tab.labelKey)}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="p-2 space-y-1 overflow-y-auto">
                        {filteredEmails.length > 0 ? (
                            filteredEmails.map(email => (
                                <EmailListItem 
                                    key={email.id} 
                                    email={email} 
                                    onSelect={() => handleSelectEmail(email.id)} 
                                    isSelected={selectedEmailId === email.id}
                                />
                            ))
                        ) : (
                            <div className="text-center text-gray-500 py-16">
                                <p>{activeTab === 'inbox' ? t('webmail_inbox_empty') : t('webmail_favorites_empty')}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Email View Pane */}
                <div className="hidden md:block w-2/3 p-6 overflow-y-auto">
                    {selectedEmail ? (
                        <div>
                            <div className="flex justify-between items-start pb-4 border-b">
                                <div>
                                    <h2 className="text-xl font-bold">{selectedEmail.subjectKey ? t(selectedEmail.subjectKey) : selectedEmail.subject}</h2>
                                    <p className="text-sm text-gray-500">De: {selectedEmail.fromKey ? t(selectedEmail.fromKey) : selectedEmail.from}</p>
                                </div>
                                 <div className="flex items-center gap-2">
                                    <button onClick={() => handleToggleFavorite(selectedEmail.id)} title={selectedEmail.favorited ? t('webmail_unfavorite') : t('webmail_favorite')} className="p-2 text-gray-500 hover:text-yellow-500 rounded-full hover:bg-gray-100">
                                        <StarIcon className={`w-5 h-5 ${selectedEmail.favorited ? 'fill-current text-yellow-500' : ''}`} />
                                    </button>
                                     <button onClick={() => handleDeleteEmail(selectedEmail.id)} title={t('webmail_delete')} className="p-2 text-gray-500 hover:text-red-600 rounded-full hover:bg-gray-100">
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 pt-4">
                                <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                                    <ReplyIcon className="w-4 h-4" />{t('webmail_reply')}
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                                    <ReplyIcon className="w-4 h-4 transform -scale-x-100" />{t('webmail_forward')}
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-700 whitespace-pre-wrap">
                               {selectedEmail.bodyKey ? t(selectedEmail.bodyKey) : selectedEmail.body}
                            </div>
                        </div>
                    ) : (
                         <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                            <MailIcon className="w-16 h-16 text-gray-300 mb-4" />
                            <p>{t('webmail_no_email_selected')}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};