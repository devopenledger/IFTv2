
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_ALL_PAYMENTS } from '../../constants';
import { SearchIcon, DownloadIcon } from '../../components/ui/Icons';

export const ManagePaymentsPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_payments')}</h1>

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
                                <th scope="col" className="px-6 py-3">{t('payment_table_id')}</th>
                                <th scope="col" className="px-6 py-3">{t('payment_table_date')}</th>
                                <th scope="col" className="px-6 py-3">{t('payment_table_description')}</th>
                                <th scope="col" className="px-6 py-3">{t('admin_payments_source')}</th>
                                <th scope="col" className="px-6 py-3">{t('payment_table_amount')}</th>
                                <th scope="col" className="px-6 py-3">{t('payment_table_status')}</th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_ALL_PAYMENTS.map((payment) => (
                                <tr key={payment.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{payment.id}</td>
                                    <td className="px-6 py-4">{payment.date}</td>
                                    <td className="px-6 py-4">{payment.description}</td>
                                    <td className="px-6 py-4">{payment.source}</td>
                                    <td className="px-6 py-4">R$ {payment.amount.toFixed(2).replace('.', ',')}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                            {payment.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-green-600 hover:underline"><DownloadIcon className="w-5 h-5" /></button>
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
