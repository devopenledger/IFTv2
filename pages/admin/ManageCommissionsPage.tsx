
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_AFFILIATE_COMMISSIONS } from '../../constants';
import { SearchIcon } from '../../components/ui/Icons';

export const ManageCommissionsPage: React.FC = () => {
    const { t } = useI18n();

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'paid':
                return <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{t('affiliate_commissions_status_paid')}</span>;
            case 'pending':
            default:
                return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{t('affiliate_commissions_status_pending')}</span>;
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_commissions')}</h1>
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
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">Data</th>
                                <th scope="col" className="px-6 py-3">Lead</th>
                                <th scope="col" className="px-6 py-3">Valor</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_AFFILIATE_COMMISSIONS.map((com) => (
                                <tr key={com.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{com.id}</td>
                                    <td className="px-6 py-4">{com.date}</td>
                                    <td className="px-6 py-4">{com.lead}</td>
                                    <td className="px-6 py-4">R$ {com.amount.toFixed(2).replace('.', ',')}</td>
                                    <td className="px-6 py-4">{getStatusBadge(com.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
