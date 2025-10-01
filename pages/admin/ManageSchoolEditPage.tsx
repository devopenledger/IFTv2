import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SCHOOLS } from '../../constants';

type School = typeof MOCK_SCHOOLS[0];

export const ManageSchoolEditPage: React.FC = () => {
    const { t } = useI18n();
    const { schoolId, locale } = useParams<{ schoolId: string; locale: string }>();
    const navigate = useNavigate();
    const isNew = schoolId === 'new';

    const [school, setSchool] = useState<Partial<School>>({
        name: '',
        city: '',
        status: 'active',
    });

    useEffect(() => {
        if (!isNew) {
            const existing = MOCK_SCHOOLS.find(s => s.id === schoolId);
            if (existing) {
                setSchool(existing);
            }
        }
    }, [schoolId, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSchool(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving school:", school);
        navigate(`/${locale}/admin/manage-schools`);
    };
    
    const pageTitle = isNew ? "Adicionar Nova Escola" : `Editar Escola: ${school.name}`;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{pageTitle}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nome da Escola</label>
                    <input type="text" name="name" id="name" value={school.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                 <div>
                    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">Cidade</label>
                    <input type="text" name="city" id="city" value={school.city} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div>
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <select name="status" id="status" value={school.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option value="active">{t('admin_status_active')}</option>
                        <option value="inactive">{t('admin_status_inactive')}</option>
                    </select>
                </div>
            </div>
            
             <div className="text-right">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar Escola
                </button>
            </div>
        </div>
    );
};
