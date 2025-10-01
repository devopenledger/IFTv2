import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SCHOOL_TEACHERS } from '../../constants';

type Teacher = typeof MOCK_SCHOOL_TEACHERS[0];

export const ManageTeacherEditPage: React.FC = () => {
    const { t } = useI18n();
    const { teacherId, locale } = useParams<{ teacherId: string; locale: string }>();
    const navigate = useNavigate();
    const isNew = teacherId === 'new';

    const [teacher, setTeacher] = useState<Partial<Teacher>>({
        name: '',
        email: '',
        status: 'active',
        course: ''
    });

    useEffect(() => {
        if (!isNew) {
            const existing = MOCK_SCHOOL_TEACHERS.find(t => t.id === teacherId);
            if (existing) {
                setTeacher(existing);
            }
        }
    }, [teacherId, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTeacher(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving teacher:", teacher);
        navigate(`/${locale}/admin/manage-teachers`);
    };
    
    const pageTitle = isNew ? "Adicionar Novo Professor" : `Editar Professor: ${teacher.name}`;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{pageTitle}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nome Completo</label>
                    <input type="text" name="name" id="name" value={teacher.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                 <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
                    <input type="email" name="email" id="email" value={teacher.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                 <div>
                    <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900">Curso Principal</label>
                    <input type="text" name="course" id="course" value={teacher.course} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div>
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <select name="status" id="status" value={teacher.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option value="active">{t('admin_status_active')}</option>
                        <option value="inactive">{t('admin_status_inactive')}</option>
                    </select>
                </div>
            </div>
            
             <div className="text-right">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar Professor
                </button>
            </div>
        </div>
    );
};
