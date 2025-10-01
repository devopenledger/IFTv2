import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_PARTNERS } from '../../constants';

type Partner = typeof MOCK_PARTNERS[0];

export const ManagePartnerEditPage: React.FC = () => {
    const { t } = useI18n();
    const { partnerId, locale } = useParams<{ partnerId: string; locale: string }>();
    const navigate = useNavigate();
    const isNew = partnerId === 'new';

    const [partner, setPartner] = useState<Partial<Partner>>({
        name: '',
        type: 'Governo',
        status: 'active',
    });

    useEffect(() => {
        if (!isNew) {
            const existing = MOCK_PARTNERS.find(p => p.id === partnerId);
            if (existing) {
                setPartner(existing);
            }
        }
    }, [partnerId, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPartner(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving partner:", partner);
        navigate(`/${locale}/admin/manage-partners`);
    };
    
    const pageTitle = isNew ? "Adicionar Novo Parceiro" : `Editar Parceiro: ${partner.name}`;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{pageTitle}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                    <input type="text" name="name" id="name" value={partner.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                 <div>
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Tipo</label>
                    <input type="text" name="type" id="type" value={partner.type} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div>
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <select name="status" id="status" value={partner.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option value="active">{t('admin_status_active')}</option>
                        <option value="inactive">{t('admin_status_inactive')}</option>
                    </select>
                </div>
            </div>
            
             <div className="text-right">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar Parceiro
                </button>
            </div>
        </div>
    );
};
