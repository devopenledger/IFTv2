import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_NEWSLETTERS, USER_ROLES } from '../../constants';
import { Newsletter, UserRole } from '../../types';

export const ManageNewsletterEditPage: React.FC = () => {
    const { t } = useI18n();
    const { newsletterId, locale } = useParams<{ newsletterId: string; locale: string }>();
    const navigate = useNavigate();
    const isNew = newsletterId === 'new';

    const [newsletter, setNewsletter] = useState<Partial<Newsletter>>({
        subject: '',
        status: 'draft',
        targetAudiences: ['all'],
    });
    const [content, setContent] = useState('');

    useEffect(() => {
        if (!isNew) {
            const existing = MOCK_NEWSLETTERS.find(n => n.id === newsletterId);
            if (existing) {
                setNewsletter(existing);
                // Mock content
                setContent(`Conteúdo da newsletter sobre "${existing.subject}".`);
            }
        }
    }, [newsletterId, isNew]);

    const handleAudienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        
        setNewsletter(prev => {
            if (!prev || !prev.targetAudiences) return prev;

            let newAudiences = [...prev.targetAudiences];
            if (value === 'all') {
                return {...prev, targetAudiences: ['all']};
            }
            
            newAudiences = newAudiences.filter(a => a !== 'all');

            if(checked) {
                newAudiences.push(value);
            } else {
                newAudiences = newAudiences.filter(a => a !== value);
            }

            if (newAudiences.length === 0) {
                newAudiences = ['all'];
            }

            return {...prev, targetAudiences: newAudiences};
        });
    }

    const handleSave = () => {
        console.log("Saving newsletter:", { ...newsletter, content });
        navigate(`/${locale}/admin/manage-newsletters`);
    };
    
    const pageTitle = isNew ? "Criar Nova Newsletter" : `Editar Newsletter: ${newsletter.subject}`;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{pageTitle}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">{t('admin_newsletters_subject')}</label>
                    <input type="text" name="subject" id="subject" value={newsletter.subject} onChange={(e) => setNewsletter(prev => ({...prev, subject: e.target.value}))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">{t('admin_newsletters_target_audience')}</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border rounded-md">
                         <div>
                            <input
                                type="checkbox"
                                id="audience-all"
                                value="all"
                                checked={newsletter.targetAudiences?.includes('all')}
                                onChange={handleAudienceChange}
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                            />
                            <label htmlFor="audience-all" className="ml-2 text-sm font-medium text-gray-900">{t('admin_newsletters_audience_all')}</label>
                        </div>
                        {USER_ROLES.map(role => (
                            <div key={role.id}>
                                <input
                                    type="checkbox"
                                    id={`audience-${role.id}`}
                                    value={role.id}
                                    checked={!newsletter.targetAudiences?.includes('all') && newsletter.targetAudiences?.includes(role.id)}
                                    onChange={handleAudienceChange}
                                    disabled={newsletter.targetAudiences?.includes('all')}
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 disabled:opacity-50"
                                />
                                <label htmlFor={`audience-${role.id}`} className="ml-2 text-sm font-medium text-gray-900">{t(role.nameKey)}</label>
                            </div>
                        ))}
                    </div>
                </div>

                 <div>
                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Conteúdo</label>
                    <textarea name="content" id="content" value={content} onChange={e => setContent(e.target.value)} rows={15} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"></textarea>
                </div>
            </div>
            
             <div className="flex justify-end gap-4">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300">
                    Salvar Rascunho
                </button>
                 <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar e Enviar
                </button>
            </div>
        </div>
    );
};