
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SINGLE_SUBJECTS } from '../../constants';
import { SingleSubject } from '../../types';

export const ManageSingleSubjectEditPage: React.FC = () => {
    const { t } = useI18n();
    const { subjectId, locale } = useParams<{ subjectId: string; locale: string }>();
    const navigate = useNavigate();
    const isNew = subjectId === 'new';

    const [subject, setSubject] = useState<Partial<SingleSubject>>({
        titleKey: '',
        descriptionKey: '',
        partner: { name: '', logo: '' },
    });

    useEffect(() => {
        if (!isNew) {
            const existing = MOCK_SINGLE_SUBJECTS.find(s => s.id === subjectId);
            if (existing) {
                setSubject(existing);
            }
        }
    }, [subjectId, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSubject(prev => ({ ...prev, [name]: value }));
    };

    const handlePartnerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSubject(prev => ({
            ...prev,
            partner: { ...prev.partner, [name]: value }
        }));
    }

    const handleSave = () => {
        console.log("Saving subject:", subject);
        // In a real app, update global state or make an API call here.
        navigate(`/${locale}/admin/manage-courses`);
    };
    
    const pageTitle = isNew ? "Adicionar Nova Disciplina Avulsa" : `Editar Disciplina: ${t(subject.titleKey || '')}`;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{pageTitle}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label htmlFor="titleKey" className="block mb-2 text-sm font-medium text-gray-900">Título (Chave de Tradução)</label>
                    <input type="text" name="titleKey" id="titleKey" value={subject.titleKey} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div>
                    <label htmlFor="descriptionKey" className="block mb-2 text-sm font-medium text-gray-900">Descrição (Chave de Tradução)</label>
                    <textarea name="descriptionKey" id="descriptionKey" value={subject.descriptionKey} onChange={handleChange} rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="partnerName" className="block mb-2 text-sm font-medium text-gray-900">Nome do Parceiro</label>
                        <input type="text" name="name" id="partnerName" value={subject.partner?.name} onChange={handlePartnerChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                    </div>
                     <div>
                        <label htmlFor="partnerLogo" className="block mb-2 text-sm font-medium text-gray-900">URL do Logo do Parceiro</label>
                        <input type="text" name="logo" id="partnerLogo" value={subject.partner?.logo} onChange={handlePartnerChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                    </div>
                </div>
            </div>
            
             <div className="text-right">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar Disciplina
                </button>
            </div>
        </div>
    );
};
