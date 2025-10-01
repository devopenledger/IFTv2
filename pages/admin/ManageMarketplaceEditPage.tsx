import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_MARKETPLACE_OFFERS, MARKETPLACE_CATEGORIES } from '../../constants';
import { MarketplaceOffer } from '../../types';

export const ManageMarketplaceEditPage: React.FC = () => {
    const { t } = useI18n();
    const { offerId, locale } = useParams<{ offerId: string; locale: string }>();
    const navigate = useNavigate();
    const isNew = offerId === 'new';

    const [offer, setOffer] = useState<Partial<MarketplaceOffer>>({
        title: '',
        description: '',
        logo: '',
        status: 'active',
        category: 'ai',
        tutorialKey: '',
        benefitsKey: [],
        partnerUrl: ''
    });

    useEffect(() => {
        if (!isNew) {
            const existingOffer = MOCK_MARKETPLACE_OFFERS.find(o => o.id === offerId);
            if (existingOffer) {
                setOffer(existingOffer);
            }
        }
    }, [offerId, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setOffer(prev => ({ ...prev, [name]: value }));
    };
    
    const handleBenefitsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        // Assuming benefits are one per line in the translation file, we just need the key
        // For this prototype, let's just save the raw string. A real implementation would be more complex.
        setOffer(prev => ({...prev, benefitsKey: value.split('\n')}));
    }

    const handleSave = () => {
        console.log("Saving offer:", offer);
        // In a real app, you would update global state or make an API call here.
        navigate(`/${locale}/admin/manage-marketplace`);
    };
    
    const title = isNew ? "Adicionar Nova Oferta" : `Editar Oferta: ${offer.title}`;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{title}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Título da Oferta</label>
                    <input type="text" name="title" id="title" value={offer.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Descrição</label>
                    <textarea name="description" id="description" value={offer.description} onChange={handleChange} rows={2} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"></textarea>
                </div>
                 <div>
                    <label htmlFor="logo" className="block mb-2 text-sm font-medium text-gray-900">URL do Logo</label>
                    <input type="text" name="logo" id="logo" value={offer.logo} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Categoria</label>
                        <select name="category" id="category" value={offer.category} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                            {MARKETPLACE_CATEGORIES.map(cat => <option key={cat.id} value={cat.id}>{t(cat.nameKey)}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <select name="status" id="status" value={offer.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                            <option value="active">{t('admin_status_active')}</option>
                            <option value="inactive">{t('admin_status_inactive')}</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="tutorialKey" className="block mb-2 text-sm font-medium text-gray-900">{t('admin_marketplace_tutorial')}</label>
                    <textarea name="tutorialKey" id="tutorialKey" value={t(offer.tutorialKey || '')} onChange={handleChange} rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"></textarea>
                </div>
                <div>
                    <label htmlFor="benefitsKey" className="block mb-2 text-sm font-medium text-gray-900">{t('admin_marketplace_benefits')}</label>
                    <textarea name="benefitsKey" id="benefitsKey" value={offer.benefitsKey?.map(k => t(k)).join('\n')} onChange={handleBenefitsChange} rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"></textarea>
                </div>
                <div>
                    <label htmlFor="partnerUrl" className="block mb-2 text-sm font-medium text-gray-900">{t('admin_marketplace_partner_url')}</label>
                    <input type="text" name="partnerUrl" id="partnerUrl" value={offer.partnerUrl} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>

            </div>
            
             <div className="text-right">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar Oferta
                </button>
            </div>
        </div>
    );
};