import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_AFFILIATES } from '../../constants';

type Affiliate = typeof MOCK_AFFILIATES[0];

export const ManageAffiliateEditPage: React.FC = () => {
    const { t } = useI18n();
    const { affiliateId, locale } = useParams<{ affiliateId: string; locale: string }>();
    const navigate = useNavigate();
    const isNew = affiliateId === 'new';

    const [affiliate, setAffiliate] = useState<Partial<Affiliate>>({
        name: '',
        status: 'active',
    });

    useEffect(() => {
        if (!isNew) {
            const existing = MOCK_AFFILIATES.find(a => a.id === affiliateId);
            if (existing) {
                setAffiliate(existing);
            }
        }
    }, [affiliateId, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAffiliate(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving affiliate:", affiliate);
        navigate(`/${locale}/admin/manage-affiliates`);
    };
    
    const pageTitle = isNew ? "Adicionar Novo Afiliado" : `Editar Afiliado: ${affiliate.name}`;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{pageTitle}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                    <input type="text" name="name" id="name" value={affiliate.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div>
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <select name="status" id="status" value={affiliate.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option value="active">{t('admin_status_active')}</option>
                        <option value="inactive">{t('admin_status_inactive')}</option>
                    </select>
                </div>
            </div>
            
             <div className="text-right">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar Afiliado
                </button>
            </div>
        </div>
    );
};
