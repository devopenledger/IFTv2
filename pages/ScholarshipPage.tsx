import React from 'react';
import { useI18n } from '../hooks/useI18n';
import { SCHOLARSHIP_STATS } from '../constants';
import { Link } from 'react-router-dom';

const StatCard: React.FC<{ stat: { value: string, label: string } }> = ({ stat }) => {
    const { t } = useI18n();
    return (
        <div className="bg-green-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-ift-light-green">{stat.value}</p>
            <p className="mt-1 text-gray-600 font-medium">{t(stat.label)}</p>
        </div>
    );
};

export const ScholarshipPage: React.FC = () => {
    const { t } = useI18n();

    return (
         <div className="bg-white">
            {/* Hero Section */}
            <div className="text-center py-20 md:py-28 bg-gray-50 border-b">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-ift-dark-blue">{t('scholarship_title')}</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{t('scholarship_subtitle')}</p>
                </div>
            </div>
            
             <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SCHOLARSHIP_STATS.map(stat => <StatCard key={stat.label} stat={stat} />)}
                    </div>

                    {/* How It Works */}
                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold text-ift-dark-blue">{t('scholarship_how_it_works_title')}</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-gray-600">{t('scholarship_how_it_works_desc')}</p>
                    </div>
                    
                    {/* CTAs */}
                    <div className="mt-20 grid md:grid-cols-2 gap-8">
                         <div className="bg-white p-10 rounded-lg shadow-md border text-center">
                            <h3 className="text-2xl font-bold">{t('scholarship_student_cta_title')}</h3>
                            <p className="mt-2 text-gray-600">{t('scholarship_student_cta_desc')}</p>
                            <Link to="/pt/register" className="mt-6 inline-block px-8 py-3 text-base font-medium text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                                {t('scholarship_student_cta_button')}
                            </Link>
                        </div>
                         <div className="bg-white p-10 rounded-lg shadow-md border text-center">
                            <h3 className="text-2xl font-bold">{t('scholarship_sponsor_cta_title')}</h3>
                            <p className="mt-2 text-gray-600">{t('scholarship_sponsor_cta_desc')}</p>
                             <Link to="/pt/register" className="mt-6 inline-block px-8 py-3 text-base font-medium text-black bg-transparent border-2 border-ift-light-green rounded-md hover:bg-ift-light-green hover:text-black transition-colors">
                                {t('scholarship_sponsor_cta_button')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
