import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { Link, useParams } from 'react-router-dom';
import { MOCK_PARTNERSHIPS_DATA } from '../../constants';
import { HandshakeIcon, ExternalLinkIcon } from '../../components/ui/Icons';

export const PartnershipListPage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('partnership_list_title')}</h1>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    <HandshakeIcon className="w-4 h-4" />
                    {t('partnership_list_new')}
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">{t('partnership_list_name')}</th>
                            <th scope="col" className="px-6 py-3">{t('partnership_list_scholarships')}</th>
                            <th scope="col" className="px-6 py-3">{t('partnership_list_members')}</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_PARTNERSHIPS_DATA.map((p) => (
                            <tr key={p.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{p.name}</td>
                                <td className="px-6 py-4">{p.scholarships.toLocaleString('pt-BR')}</td>
                                <td className="px-6 py-4">{p.members.toLocaleString('pt-BR')}</td>
                                <td className="px-6 py-4">
                                     <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${p.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {t(`partnership_list_status_${p.status}`)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link to={`/${locale}/partner/partnership/${p.id}/details`} className="flex items-center justify-end gap-1 font-medium text-green-600 hover:underline">
                                        <ExternalLinkIcon className="w-4 h-4" />
                                        {t('partnership_list_details')}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};