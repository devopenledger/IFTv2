import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { Link, useParams } from 'react-router-dom';
import { MOCK_SPONSORSHIPS_DATA } from '../../constants';
import { HeartHandshakeIcon, ExternalLinkIcon } from '../../components/ui/Icons';

export const SponsorshipListPage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('sponsorship_list_title')}</h1>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    <HeartHandshakeIcon className="w-4 h-4" />
                    {t('sponsorship_list_new')}
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID Contrato</th>
                            <th scope="col" className="px-6 py-3">{t('sponsorship_list_school')}</th>
                            <th scope="col" className="px-6 py-3">{t('sponsorship_list_period')}</th>
                            <th scope="col" className="px-6 py-3">{t('sponsorship_list_value')}</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_SPONSORSHIPS_DATA.map((s) => (
                            <tr key={s.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{s.id}</td>
                                <td className="px-6 py-4">{s.school}</td>
                                <td className="px-6 py-4">{s.period}</td>
                                <td className="px-6 py-4">R$ {s.value.toLocaleString('pt-BR')}</td>
                                <td className="px-6 py-4">
                                     <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${s.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {t(`sponsorship_list_status_${s.status}`)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link to={`/${locale}/sponsor/sponsorship/${s.id}/details`} className="flex items-center justify-end gap-1 font-medium text-green-600 hover:underline">
                                        <ExternalLinkIcon className="w-4 h-4" />
                                        {t('sponsorship_list_details')}
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
