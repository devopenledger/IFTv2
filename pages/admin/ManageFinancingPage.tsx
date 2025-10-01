
import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { useAdminOutletContext } from './AdminLayout';
import { MOCK_FINANCED_EQUIPMENT } from '../../constants';
import { SearchIcon, EditIcon, TrashIcon, ShoppingBasketIcon } from '../../components/ui/Icons';
import { Link, useParams } from 'react-router-dom';

type Tab = 'applications' | 'equipment';

export const ManageFinancingPage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();
    const { financingApplications } = useAdminOutletContext();
    const [activeTab, setActiveTab] = useState<Tab>('applications');

    const getStatusBadge = (status: string) => {
        let colorClasses = '';
        switch (status) {
            case 'approved': colorClasses = 'bg-green-100 text-green-800'; break;
            case 'rejected': colorClasses = 'bg-red-100 text-red-800'; break;
            default: colorClasses = 'bg-yellow-100 text-yellow-800';
        }
        return <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${colorClasses}`}>{t(`admin_financing_status_${status}`)}</span>;
    };
    
    const tabs: {id: Tab, labelKey: string}[] = [
        {id: 'applications', labelKey: 'admin_financing_tab_applications'},
        {id: 'equipment', labelKey: 'admin_financing_tab_equipment'},
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_financing')}</h1>
                {activeTab === 'equipment' && (
                     <Link to={`/${locale}/admin/manage-financing/equipment/new/edit`} className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                        <ShoppingBasketIcon className="w-4 h-4" />
                        {t('admin_financing_add_equipment')}
                    </Link>
                )}
            </div>

            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-semibold text-base ${activeTab === tab.id ? 'border-ift-light-green text-ift-dark-blue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            {t(tab.labelKey)}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="mb-4 relative">
                    <input type="text" placeholder={t('admin_search')} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg" />
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                {activeTab === 'applications' && (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3">{t('admin_financing_app_protocol')}</th>
                                    <th className="px-6 py-3">{t('admin_financing_app_student')}</th>
                                    <th className="px-6 py-3">{t('admin_financing_app_equipment')}</th>
                                    <th className="px-6 py-3">{t('admin_financing_app_date')}</th>
                                    <th className="px-6 py-3">{t('admin_financing_app_status')}</th>
                                    <th className="px-6 py-3"><span className="sr-only">Ações</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {financingApplications.map(app => (
                                    <tr key={app.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-mono">{app.protocolNumber}</td>
                                        <td className="px-6 py-4">{app.studentName}</td>
                                        <td className="px-6 py-4">{MOCK_FINANCED_EQUIPMENT.find(e => e.id === app.equipmentId)?.name}</td>
                                        <td className="px-6 py-4">{new Date(app.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">{getStatusBadge(app.status)}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-blue-600 hover:underline"><EditIcon className="w-5 h-5" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'equipment' && (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3">{t('admin_financing_equipment_name')}</th>
                                    <th className="px-6 py-3">{t('admin_financing_equipment_price')}</th>
                                    <th className="px-6 py-3">{t('admin_financing_equipment_subsidy')}</th>
                                    <th className="px-6 py-3"><span className="sr-only">Ações</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {MOCK_FINANCED_EQUIPMENT.map(item => (
                                    <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium">{item.name}</td>
                                        <td className="px-6 py-4">R$ {item.price.toFixed(2)}</td>
                                        <td className="px-6 py-4">R$ {item.subsidy.toFixed(2)}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end items-center gap-4">
                                                <Link to={`/${locale}/admin/manage-financing/equipment/${item.id}/edit`} className="text-blue-600 hover:underline"><EditIcon className="w-5 h-5" /></Link>
                                                <button className="text-red-600 hover:underline"><TrashIcon className="w-5 h-5" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};
