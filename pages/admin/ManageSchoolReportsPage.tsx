import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_REPORTS } from '../../constants';
import { SearchIcon, EditIcon, TrashIcon, TrendingUpIcon } from '../../components/ui/Icons';

export const ManageSchoolReportsPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_school_reports')}</h1>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    <TrendingUpIcon className="w-4 h-4" />
                    Gerar Novo Relatório
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
                                <th scope="col" className="px-6 py-3">Nome do Relatório</th>
                                <th scope="col" className="px-6 py-3">Tipo</th>
                                <th scope="col" className="px-6 py-3">Data de Geração</th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_REPORTS.map((report) => (
                                <tr key={report.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{report.name}</td>
                                    <td className="px-6 py-4">{report.type}</td>
                                    <td className="px-6 py-4">{report.date}</td>
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