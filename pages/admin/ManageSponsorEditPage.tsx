import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SPONSORS } from '../../constants';

type Sponsor = typeof MOCK_SPONSORS[0];

export const ManageSponsorEditPage: React.FC = () => {
    const { t } = useI18n();
    const { sponsorId, locale } = useParams<{ sponsorId: string; locale: string }>();
    const navigate = useNavigate();
    const isNew = sponsorId === 'new';

    const [sponsor, setSponsor] = useState<Partial<Sponsor>>({
        name: '',
        industry: '',
        investment: 0,
        status: 'active',
    });

    useEffect(() => {
        if (!isNew) {
            const existing = MOCK_SPONSORS.find(s => s.id === sponsorId);
            if (existing) {
                setSponsor(existing);
            }
        }
    }, [sponsorId, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSponsor(prev => ({ ...prev, [name]: name === 'investment' ? parseFloat(value) || 0 : value }));
    };

    const handleSave = () => {
        console.log("Saving sponsor:", sponsor);
        navigate(`/${locale}/admin/manage-sponsors`);
    };
    
    const pageTitle = isNew ? "Adicionar Novo Patrocinador" : `Editar Patrocinador: ${sponsor.name}`;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{pageTitle}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                    <input type="text" name="name" id="name" value={sponsor.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                 <div>
                    <label htmlFor="industry" className="block mb-2 text-sm font-medium text-gray-900">Setor</label>
                    <input type="text" name="industry" id="industry" value={sponsor.industry} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="investment" className="block mb-2 text-sm font-medium text-gray-900">Investimento Anual</label>
                        <input type="number" name="investment" id="investment" value={sponsor.investment} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                    </div>
                    <div>
                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <select name="status" id="status" value={sponsor.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                            <option value="active">{t('admin_status_active')}</option>
                            <option value="inactive">{t('admin_status_inactive')}</option>
                        </select>
                    </div>
                </div>
            </div>
            
             <div className="text-right">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar Patrocinador
                </button>
            </div>
        </div>
    );
};
