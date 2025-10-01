
import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_NEWSLETTERS } from '../../constants';
import { Newsletter } from '../../types';

const Toggle: React.FC<{ label: string, enabled: boolean, setEnabled: (e:boolean)=>void }> = ({ label, enabled, setEnabled }) => (
     <label className="inline-flex items-center cursor-pointer">
        <span className="me-3 text-sm font-medium text-gray-900">{label}</span>
        <input type="checkbox" checked={enabled} onChange={()=>setEnabled(!enabled)} className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ift-light-green"></div>
    </label>
);

const NewsletterCard: React.FC<{ article: Newsletter }> = ({ article }) => {
    const { t } = useI18n();
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <img src={article.image} alt={article.subject} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-ift-dark-blue">{article.subject}</h3>
                <p className="text-xs text-gray-500 mt-1">{t('newsletter_published_on')} {article.date}</p>
                <p className="text-gray-600 mt-2 flex-grow">Breve descrição da notícia. O conteúdo completo seria exibido ao clicar em "Ler mais".</p>
                 <div className="mt-4">
                    <button className="font-semibold text-green-600 hover:text-green-800">
                        {t('newsletter_read_more')} &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};


export const StudentNewsletterPage: React.FC = () => {
    const { t } = useI18n();
    const [receiveByEmail, setReceiveByEmail] = useState(true);
    
    // For this prototype, we'll assume the user role is 'student'
    const userRole = 'student';
    const visibleNewsletters = MOCK_NEWSLETTERS.filter(
        n => n.status === 'sent' && (n.targetAudiences.includes('all') || n.targetAudiences.includes(userRole))
    );

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_student_newsletter')}</h1>
                <Toggle label={t('newsletter_receive_by_email')} enabled={receiveByEmail} setEnabled={setReceiveByEmail} />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {visibleNewsletters.map(article => (
                    <NewsletterCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
};