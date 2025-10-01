import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_AFFILIATE_LEADS } from '../../constants';

export const AffiliateLeadsPage: React.FC = () => {
    const { t } = useI18n();

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'converted':
                return <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{t('affiliate_leads_status_converted')}</span>;
            case 'contacted':
                return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{t('affiliate_leads_status_contacted')}</span>;
            case 'new':
            default:
                return <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{t('affiliate_leads_status_new')}</span>;
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_affiliate_leads')}</h1>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">{t('affiliate_leads_table_name')}</th>
                            <th scope="col" className="px-6 py-3">{t('affiliate_leads_table_email')}</th>
                            <th scope="col" className="px-6 py-3">{t('affiliate_leads_table_date')}</th>
                            <th scope="col" className="px-6 py-3">{t('affiliate_leads_table_status')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_AFFILIATE_LEADS.map((lead) => (
                            <tr key={lead.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{lead.name}</td>
                                <td className="px-6 py-4">{lead.email}</td>
                                <td className="px-6 py-4">{lead.date}</td>
                                <td className="px-6 py-4">{getStatusBadge(lead.status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};