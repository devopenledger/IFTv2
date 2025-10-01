import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_CAREER_LISTINGS } from '../../constants';

export const CareersPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ift-dark-blue">{t('careers_title')}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{t('careers_subtitle')}</p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto space-y-6">
          {MOCK_CAREER_LISTINGS.filter(j => j.status === 'open').map(job => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-green-400 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">{job.title}</h2>
                  <p className="text-gray-600">{job.company} - {job.location}</p>
                </div>
                <a href="#" className="px-6 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                  {t('careers_apply_now')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
