import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_AFFILIATE_COMMISSIONS } from '../../constants';
import { DollarSignIcon } from '../../components/ui/Icons';

export const AffiliateCommissionsPage: React.FC = () => {
    const { t } = useI18n();
    const totalEarned = MOCK_AFFILIATE_COMMISSIONS.filter(c => c.status === 'paid').reduce((sum, c) => sum + c.amount, 0);

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
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_affiliate_commissions')}</h1>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                 <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full"><DollarSignIcon className="w-6 h-6 text-green-600"/></div>
                    <div>
                        <p className="text-sm text-gray-500">{t('affiliate_commissions_total')}</p>
                        <p className="text-2xl font-bold text-ift-dark-blue">R$ {totalEarned.toFixed(2).replace('.', ',')}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">{t('affiliate_commissions_table_date')}</th>
                            <th scope="col" className="px-6 py-3">{t('affiliate_commissions_table_lead')}</th>
                            <th scope="col" className="px-6 py-3">{t('affiliate_commissions_table_amount')}</th>
                            <th scope="col" className="px-6 py-3">{t('affiliate_commissions_table_status')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_AFFILIATE_COMMISSIONS.map((com) => (
                            <tr key={com.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{com.date}</td>
                                <td className="px-6 py-4">{com.lead}</td>
                                <td className="px-6 py-4">R$ {com.amount.toFixed(2).replace('.', ',')}</td>
                                <td className="px-6 py-4">{getStatusBadge(com.status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};