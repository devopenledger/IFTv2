import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SPONSOR_CAREERS } from '../../constants';
import { BriefcaseIcon, UsersIcon, EditIcon } from '../../components/ui/Icons';

export const SponsorCareersPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_sponsor_careers')}</h1>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    <BriefcaseIcon className="w-4 h-4" />
                    {t('careers_post_new')}
                </button>
            </div>

            <div className="space-y-4">
                {MOCK_SPONSOR_CAREERS.map((job) => (
                    <div key={job.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-ift-dark-blue">{job.title}</h3>
                            <p className="text-gray-600 text-sm">{job.location} - {job.type}</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-sm">
                                <UsersIcon className="w-5 h-5 text-gray-500"/>
                                <span className="font-medium">{job.applicants} {t('careers_applicants')}</span>
                            </div>
                            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${job.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                {t(`careers_status_${job.status}`)}
                            </span>
                            <div className="flex items-center gap-2">
                                <button className="text-sm font-semibold text-green-600 hover:text-green-800">{t('careers_view_applicants')}</button>
                                <button className="text-gray-500 hover:text-gray-700"><EditIcon className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
