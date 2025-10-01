import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SUPPORT_TICKETS } from '../../constants';
import { SearchIcon, ExternalLinkIcon } from '../../components/ui/Icons';
import { Link, useParams } from 'react-router-dom';

export const ManageSupportPage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();
    
    const getStatusBadge = (status: string) => (
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${status === 'open' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
            {t(`admin_status_${status}`)}
        </span>
    );

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_support')}</h1>

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
                                <th scope="col" className="px-6 py-3">{t('admin_support_subject')}</th>
                                <th scope="col" className="px-6 py-3">{t('admin_support_user')}</th>
                                <th scope="col" className="px-6 py-3">{t('admin_support_date')}</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_SUPPORT_TICKETS.map((ticket) => (
                                <tr key={ticket.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{ticket.subject}</td>
                                    <td className="px-6 py-4">{ticket.user}</td>
                                    <td className="px-6 py-4">{ticket.date}</td>
                                    <td className="px-6 py-4">{getStatusBadge(ticket.status)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <Link to={`/${locale}/admin/manage-support/${ticket.id}/details`} className="flex items-center justify-end gap-1 font-medium text-green-600 hover:underline">
                                            <ExternalLinkIcon className="w-4 h-4" />
                                            {t('admin_support_view_ticket')}
                                        </Link>
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