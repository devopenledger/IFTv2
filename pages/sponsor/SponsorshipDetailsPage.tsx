import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SPONSORSHIPS_DATA } from '../../constants';

type Tab = 'overview' | 'students' | 'reports' | 'documents';

const OverviewTab: React.FC = () => {
    const { t } = useI18n();
    return (
        <div className="p-6">
            <h3 className="text-xl font-bold mb-4">{t('sponsorship_details_overview')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
                <div>
                    <p className="text-4xl font-bold text-ift-light-green">85%</p>
                    <p className="text-gray-500">{t('sponsorship_details_completion_rate')}</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-ift-light-green">A-</p>
                    <p className="text-gray-500">{t('sponsorship_details_avg_grade')}</p>
                </div>
            </div>
            <div className="mt-6 h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                Student Performance Chart Placeholder
            </div>
        </div>
    );
}

export const SponsorshipDetailsPage: React.FC = () => {
    const { t } = useI18n();
    const { sponsorshipId } = useParams<{ sponsorshipId: string }>();
    const sponsorship = MOCK_SPONSORSHIPS_DATA.find(s => s.id === sponsorshipId);
    const [activeTab, setActiveTab] = useState<Tab>('overview');

    if (!sponsorship) {
        return <div>Sponsorship not found</div>;
    }

    const tabs: { id: Tab, name: string }[] = [
        { id: 'overview', name: t('sponsorship_details_overview') },
        { id: 'students', name: t('sponsorship_details_students') },
        { id: 'reports', name: t('sponsorship_details_reports') },
        { id: 'documents', name: t('sponsorship_details_documents') },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-2">Contrato {sponsorship.id}</h1>
            <p className="text-gray-600 mb-6">{t('page_title_sponsor_sponsorship_details')} para {sponsorship.school}</p>
            
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
                {activeTab === 'students' && <div className="p-6">Student List Placeholder</div>}
                {activeTab === 'reports' && <div className="p-6">Reports List Placeholder</div>}
                {activeTab === 'documents' && <div className="p-6">Contract Documents Placeholder</div>}
            </div>
        </div>
    );
};
