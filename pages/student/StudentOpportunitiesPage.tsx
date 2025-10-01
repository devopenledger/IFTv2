
import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_INNOVATION_CHALLENGES, MOCK_SERVICE_OFFERS, MOCK_ACCELERATION_PROGRAMS } from '../../constants';
import { InnovationChallenge, ServiceOffer, AccelerationProgram } from '../../types';

type Tab = 'challenges' | 'services' | 'acceleration';

const InnovationChallengeCard: React.FC<{ challenge: InnovationChallenge }> = ({ challenge }) => {
    const { t } = useI18n();
    const statusClass = challenge.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-ift-dark-blue">{t(challenge.titleKey)}</h3>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusClass}`}>{t(`opportunity_status_${challenge.status}`)}</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Por: {challenge.company}</p>
            <p className="text-sm text-gray-600 flex-grow mb-4">{t(challenge.descriptionKey)}</p>
            <div className="text-sm font-semibold text-ift-dark-blue mb-4">{t('opportunity_prize')}: {t(challenge.prizeKey)}</div>
            <button className="w-full mt-auto px-4 py-2 text-sm font-semibold text-black bg-ift-light-green rounded-md hover:opacity-90">
                {t('opportunity_view_challenge')}
            </button>
        </div>
    );
};

const ServiceOfferCard: React.FC<{ offer: ServiceOffer }> = ({ offer }) => {
    const { t } = useI18n();
     const statusClass = offer.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-ift-dark-blue">{t(offer.titleKey)}</h3>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusClass}`}>{t(`opportunity_status_${offer.status}`)}</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Cliente: {offer.client}</p>
            <p className="text-sm text-gray-600 flex-grow mb-4">{t(offer.descriptionKey)}</p>
            <div className="text-sm font-semibold text-ift-dark-blue mb-4">{t('opportunity_budget')}: {t(offer.budgetKey)}</div>
            <button className="w-full mt-auto px-4 py-2 text-sm font-semibold text-black bg-ift-light-green rounded-md hover:opacity-90">
                {t('opportunity_apply')}
            </button>
        </div>
    );
};

const AccelerationProgramCard: React.FC<{ program: AccelerationProgram }> = ({ program }) => {
    const { t } = useI18n();
     const statusClass = program.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col">
             <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-ift-dark-blue">{t(program.titleKey)}</h3>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusClass}`}>{t(`opportunity_status_${program.status}`)}</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">{t('opportunity_offered_by')}: {t(program.offeredByKey)}</p>
            <p className="text-sm text-gray-600 flex-grow mb-4">{t(program.descriptionKey)}</p>
            <button className="w-full mt-auto px-4 py-2 text-sm font-semibold text-black bg-ift-light-green rounded-md hover:opacity-90">
                {t('opportunity_learn_more')}
            </button>
        </div>
    );
};

export const StudentOpportunitiesPage: React.FC = () => {
    const { t } = useI18n();
    const [activeTab, setActiveTab] = useState<Tab>('challenges');

    const tabs: {id: Tab, labelKey: string}[] = [
        {id: 'challenges', labelKey: 'opportunities_tab_challenges'},
        {id: 'services', labelKey: 'opportunities_tab_services'},
        {id: 'acceleration', labelKey: 'opportunities_tab_acceleration'},
    ];

    const renderContent = () => {
        switch(activeTab) {
            case 'challenges':
                return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {MOCK_INNOVATION_CHALLENGES.map(item => <InnovationChallengeCard key={item.id} challenge={item} />)}
                </div>
            case 'services':
                 return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {MOCK_SERVICE_OFFERS.map(item => <ServiceOfferCard key={item.id} offer={item} />)}
                </div>
            case 'acceleration':
                 return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {MOCK_ACCELERATION_PROGRAMS.map(item => <AccelerationProgramCard key={item.id} program={item} />)}
                </div>
            default:
                return null;
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_student_opportunities')}</h1>

            <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex flex-wrap space-x-8" aria-label="Tabs">
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
            
            {renderContent()}
        </div>
    );
};
