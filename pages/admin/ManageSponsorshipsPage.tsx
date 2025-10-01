
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SPONSORSHIPS_DATA } from '../../constants';
import { SearchIcon, EditIcon, TrashIcon, HeartHandshakeIcon } from '../../components/ui/Icons';

export const ManageSponsorshipsPage: React.FC = () => {
    const { t } = useI18n();

    const getStatusBadge = (status: string) => (
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
            {t(`sponsorship_list_status_${status}`)}
        </span>
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_sponsorships')}</h1>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    <HeartHandshakeIcon className="w-4 h-4" />
                    {t('admin_add_new')}
                </button>
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
                                <th scope="col" className="px-6 py-3">ID Contrato</th>
                                <th scope="col" className="px-6 py-3">Escola</th>
                                <th scope="col" className="px-6 py-3">Valor</th>
                                <th scope="col" className="px-6 py-3">Alunos</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_SPONSORSHIPS_DATA.map((s) => (
                                <tr key={s.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{s.id}</td>
                                    <td className="px-6 py-4">{s.school}</td>
                                    <td className="px-6 py-4">R$ {s.value.toLocaleString('pt-BR')}</td>
                                    <td className="px-6 py-4">{s.students}/{s.scholarships}</td>
                                    <td className="px-6 py-4">{getStatusBadge(s.status)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end items-center gap-4">
                                            <button className="text-blue-600 hover:underline"><EditIcon className="w-5 h-5" /></button>
                                            <button className="text-red-600 hover:underline"><TrashIcon className="w-5 h-5" /></button>
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
