import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SPONSOR_PAYMENTS } from '../../constants';
import { DownloadIcon } from '../../components/ui/Icons';

export const SponsorPaymentPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_sponsor_payment')}</h1>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
                 <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">{t('payment_table_id')}</th>
                            <th scope="col" className="px-6 py-3">{t('payment_table_date')}</th>
                            <th scope="col" className="px-6 py-3">{t('payment_table_description')}</th>
                            <th scope="col" className="px-6 py-3">{t('payment_table_amount')}</th>
                            <th scope="col" className="px-6 py-3">{t('payment_table_status')}</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_SPONSOR_PAYMENTS.map((payment) => (
                            <tr key={payment.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{payment.id}</td>
                                <td className="px-6 py-4">{payment.date}</td>
                                <td className="px-6 py-4">{payment.description}</td>
                                <td className="px-6 py-4">{payment.amount}</td>
                                <td className="px-6 py-4">
                                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                        {payment.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="flex items-center justify-end gap-1 font-medium text-green-600 hover:underline">
                                        <DownloadIcon className="w-4 h-4" />
                                        {t('payment_download_receipt')}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
