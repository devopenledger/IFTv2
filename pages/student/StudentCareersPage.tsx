

import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_CAREER_LISTINGS } from '../../constants';
import { BriefcaseIcon } from '../../components/ui/Icons';
import { CareerListing, CareerLevel } from '../../types';

const CareerCard: React.FC<{ listing: CareerListing }> = ({ listing }) => {
    const { t } = useI18n();

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-ift-dark-blue">{listing.title}</h3>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${listing.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {t(`opportunity_status_${listing.status}`)}
                </span>
            </div>
            <p className="text-sm text-gray-500 mb-1">{listing.company} - {listing.location}</p>
            <p className="text-sm text-gray-600 flex-grow mb-4">{listing.type}</p>
            <a 
                href="#"
                className="w-full mt-auto text-center px-4 py-2 text-sm font-semibold text-black bg-ift-light-green rounded-md hover:opacity-90"
            >
                {t('careers_apply_now')}
            </a>
        </div>
    );
};

export const StudentCareersPage: React.FC = () => {
    const { t } = useI18n();
    const [activeTab, setActiveTab] = useState<CareerLevel>('internship');

    const tabs: { id: CareerLevel, labelKey: string }[] = [
        { id: 'internship', labelKey: 'careers_tab_internships' },
        { id: 'trainee', labelKey: 'careers_tab_trainee' },
        { id: 'junior', labelKey: 'careers_tab_junior' },
        { id: 'mid', labelKey: 'careers_tab_mid' },
    ];

    const filteredListings = MOCK_CAREER_LISTINGS.filter(l => l.level === activeTab && l.status === 'open');

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_student_careers')}</h1>

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
            
            {filteredListings.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredListings.map((listing) => (
                        <CareerCard key={listing.id} listing={listing} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BriefcaseIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 font-medium">
                        Nenhuma vaga encontrada nesta categoria.
                    </p>
                </div>
            )}
        </div>
    );
};