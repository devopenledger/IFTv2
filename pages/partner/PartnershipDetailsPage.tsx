import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_PARTNERSHIPS_DATA } from '../../constants';

type Tab = 'overview' | 'reports' | 'documents';

const OverviewTab: React.FC = () => {
    const { t } = useI18n();
    return (
        <div className="p-6">
            <h3 className="text-xl font-bold mb-4">{t('partnership_details_overview')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
                <div>
                    <p className="text-4xl font-bold text-ift-light-green">92%</p>
                    <p className="text-gray-500">{t('partnership_details_completion_rate')}</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-ift-light-green">78%</p>
                    <p className="text-gray-500">{t('partnership_details_avg_progress')}</p>
                </div>
            </div>
            <div className="mt-6 h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                Member Progress Chart Placeholder
            </div>
        </div>
    );
}

export const PartnershipDetailsPage: React.FC = () => {
    const { t } = useI18n();
    const { partnershipId } = useParams<{ partnershipId: string }>();
    const partnership = MOCK_PARTNERSHIPS_DATA.find(p => p.id === partnershipId);
    const [activeTab, setActiveTab] = useState<Tab>('overview');

    if (!partnership) {
        return <div>Partnership not found</div>;
    }

    const tabs: { id: Tab, name: string }[] = [
        { id: 'overview', name: t('partnership_details_overview') },
        { id: 'reports', name: t('partnership_details_reports') },
        { id: 'documents', name: t('partnership_details_documents') },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-2">{partnership.name}</h1>
            <p className="text-gray-600 mb-6">{t('page_title_partner_partnership_details')}</p>
            
            <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                {activeTab === 'overview' && <OverviewTab />}
                {activeTab === 'reports' && <div className="p-6">Impact Reports List Placeholder</div>}
                {activeTab === 'documents' && <div className="p-6">Agreement Documents Placeholder</div>}
            </div>
        </div>
    );
};