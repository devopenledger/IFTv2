import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_CAREER_LISTINGS } from '../../constants';

type Listing = typeof MOCK_CAREER_LISTINGS[0];

export const ManageCareersEditPage: React.FC = () => {
    const { t } = useI18n();
    const { careerId, locale } = useParams<{ careerId: string; locale: string }>();
    const navigate = useNavigate();
    const isNew = careerId === 'new';

    const [listing, setListing] = useState<Partial<Listing>>({
        title: '',
        company: '',
        location: '',
        type: 'Estágio',
        status: 'open',
    });

    useEffect(() => {
        if (!isNew) {
            const existing = MOCK_CAREER_LISTINGS.find(l => l.id === careerId);
            if (existing) {
                setListing(existing);
            }
        }
    }, [careerId, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setListing(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving listing:", listing);
        navigate(`/${locale}/admin/manage-careers`);
    };
    
    const pageTitle = isNew ? "Adicionar Nova Vaga" : `Editar Vaga: ${listing.title}`;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{pageTitle}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Título da Vaga</label>
                    <input type="text" name="title" id="title" value={listing.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                 <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">{t('admin_careers_company')}</label>
                    <input type="text" name="company" id="company" value={listing.company} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                 <div>
                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">{t('admin_careers_location')}</label>
                    <input type="text" name="location" id="location" value={listing.location} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Tipo</label>
                        <select name="type" id="type" value={listing.type} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                            <option>Estágio</option>
                            <option>Integral</option>
                            <option>Meio Período</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <select name="status" id="status" value={listing.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                            <option value="open">{t('admin_status_open')}</option>
                            <option value="closed">{t('admin_status_closed')}</option>
                        </select>
                    </div>
                </div>
            </div>
            
             <div className="text-right">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar Vaga
                </button>
            </div>
        </div>
    );
};
