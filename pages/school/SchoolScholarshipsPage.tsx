
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SCHOLARSHIPS } from '../../constants';
import { AwardIcon, UsersIcon } from '../../components/ui/Icons';

const ScholarshipCard: React.FC<{ scholarship: typeof MOCK_SCHOLARSHIPS[0] }> = ({ scholarship }) => {
    const { t } = useI18n();
    const available = scholarship.total - scholarship.used;
    const usagePercentage = (scholarship.used / scholarship.total) * 100;

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-bold text-ift-dark-blue">{t('school_scholarships_sponsor')}: {scholarship.sponsor}</h3>
                    <p className="text-sm text-gray-500">ID: {scholarship.id}</p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${scholarship.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {t(`school_scholarships_status_${scholarship.status}`)}
                </span>
            </div>
            
            <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-ift-light-green h-2.5 rounded-full" style={{ width: `${usagePercentage}%` }}></div>
                </div>
                <div className="flex justify-between text-sm mt-2 text-gray-600">
                    <span>{t('school_scholarships_used')}: {scholarship.used}</span>
                    <span>{t('school_scholarships_available')}: {available}</span>
                    <span>{t('school_scholarships_total')}: {scholarship.total}</span>
                </div>
            </div>

            <div className="mt-6 text-right">
                <button className="text-sm font-semibold text-green-600 hover:text-green-800">
                    {t('school_scholarships_view_details')}
                </button>
            </div>
        </div>
    );
};


export const SchoolScholarshipsPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_school_scholarships')}</h1>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    <AwardIcon className="w-4 h-4" />
                    {t('school_scholarships_request_new')}
                </button>
            </div>
            
            <div className="space-y-4">
                {MOCK_SCHOLARSHIPS.map(scholarship => (
                    <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
                ))}
            </div>
        </div>
    );
};
