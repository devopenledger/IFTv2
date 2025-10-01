
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_FINANCED_EQUIPMENT } from '../../constants';
import { FinancedEquipment } from '../../types';

export const ManageFinancingEquipmentEditPage: React.FC = () => {
    const { t } = useI18n();
    const { equipmentId, locale } = useParams<{ equipmentId: string; locale: string }>();
    const navigate = useNavigate();
    const isNew = equipmentId === 'new';

    const [equipment, setEquipment] = useState<Partial<FinancedEquipment>>({
        name: '',
        image: '',
        price: 0,
        subsidy: 0,
        specs: []
    });

    useEffect(() => {
        if (!isNew) {
            const existing = MOCK_FINANCED_EQUIPMENT.find(e => e.id === equipmentId);
            if (existing) {
                setEquipment(existing);
            }
        }
    }, [equipmentId, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'specs') {
            const specsArray = value.split('\n').map(line => {
                const [key, val] = line.split(':');
                return { key: key?.trim(), value: val?.trim() };
            });
            setEquipment(prev => ({ ...prev, specs: specsArray }));
        } else {
            setEquipment(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSave = () => {
        console.log("Saving equipment:", equipment);
        // In a real app, update global state or make an API call
        navigate(`/${locale}/admin/manage-financing`);
    };
    
    const pageTitle = isNew ? "Adicionar Equipamento para Financiamento" : `Editar Equipamento: ${equipment.name}`;
    const specsString = equipment.specs?.map(s => `${s.key}: ${s.value}`).join('\n');

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{pageTitle}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">{t('admin_financing_equipment_name')}</label>
                    <input type="text" name="name" id="name" value={equipment.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div>
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">URL da Imagem</label>
                    <input type="text" name="image" id="image" value={equipment.image} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">{t('admin_financing_equipment_price')}</label>
                        <input type="number" name="price" id="price" value={equipment.price} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                    </div>
                     <div>
                        <label htmlFor="subsidy" className="block mb-2 text-sm font-medium text-gray-900">{t('admin_financing_equipment_subsidy')}</label>
                        <input type="number" name="subsidy" id="subsidy" value={equipment.subsidy} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                    </div>
                </div>
                <div>
                    <label htmlFor="specs" className="block mb-2 text-sm font-medium text-gray-900">Especificações (uma por linha, ex: CPU: Intel i9)</label>
                    <textarea name="specs" id="specs" value={specsString} onChange={handleChange} rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 font-mono"></textarea>
                </div>
            </div>
            
             <div className="text-right">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar Equipamento
                </button>
            </div>
        </div>
    );
};
