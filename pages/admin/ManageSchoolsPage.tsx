import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SCHOOLS } from '../../constants';
import { SearchIcon, EditIcon, TrashIcon, BuildingIcon } from '../../components/ui/Icons';
import { Link, useParams } from 'react-router-dom';
import { ConfirmDeleteModal } from '../../components/admin/ConfirmDeleteModal';

type School = typeof MOCK_SCHOOLS[0];

export const ManageSchoolsPage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<School | null>(null);

    const openDeleteModal = (school: School) => {
        setItemToDelete(school);
        setDeleteModalOpen(true);
    };

    const handleDelete = () => {
        console.log("Deleting:", itemToDelete?.id);
        setDeleteModalOpen(false);
        setItemToDelete(null);
    };

    const getStatusBadge = (status: string) => (
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {t(`admin_status_${status}`)}
        </span>
    );

    return (
        <div className="space-y-6">
            <ConfirmDeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDelete}
                title="Excluir Escola"
                message={`Tem certeza que deseja excluir a escola "${itemToDelete?.name}"?`}
            />
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_schools')}</h1>
                <Link to={`/${locale}/admin/manage-schools/new/edit`} className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    <BuildingIcon className="w-4 h-4" />
                    {t('admin_add_new')}
                </Link>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="mb-4 relative">
                     <input
                        type="text"
                        placeholder={t('admin_search')}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-gray-400" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Nome da Escola</th>
                                <th scope="col" className="px-6 py-3">Cidade</th>
                                <th scope="col" className="px-6 py-3">Alunos Ativos</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_SCHOOLS.map((school) => (
                                <tr key={school.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{school.name}</td>
                                    <td className="px-6 py-4">{school.city}</td>
                                    <td className="px-6 py-4">{school.students}</td>
                                    <td className="px-6 py-4">{getStatusBadge(school.status)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end items-center gap-4">
                                            <Link to={`/${locale}/admin/manage-schools/${school.id}/edit`} className="text-blue-600 hover:underline"><EditIcon className="w-5 h-5" /></Link>
                                            <button onClick={() => openDeleteModal(school)} className="text-red-600 hover:underline"><TrashIcon className="w-5 h-5" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};