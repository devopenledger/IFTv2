import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SPONSORSHIPS_DATA } from '../../constants';
import { AwardIcon, UsersIcon, TrendingUpIcon, HeartHandshakeIcon } from '../../components/ui/Icons';

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center gap-4">
        <div className="bg-green-100 p-3 rounded-full">{icon}</div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-ift-dark-blue">{value}</p>
        </div>
    </div>
);

export const SponsorDashboardPage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();
    const activeSponsorship = MOCK_SPONSORSHIPS_DATA.find(s => s.status === 'active');

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('sponsor_dashboard_welcome')}</h1>
                <p className="mt-1 text-gray-600">{t('sponsor_dashboard_subtitle')}</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title={t('sponsor_dashboard_total_investment')} value="R$12.000" icon={<HeartHandshakeIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('sponsor_dashboard_scholarships_funded')} value="100" icon={<AwardIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('sponsor_dashboard_students_impacted')} value="85" icon={<UsersIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('sponsor_dashboard_sponsored_school')} value="E.P. Exemplo" icon={<TrendingUpIcon className="w-6 h-6 text-green-600" />} />
            </div>

            {/* Scholarship Utilization */}
            {activeSponsorship && (
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                        <h3 className="text-xl font-bold">{t('sponsor_dashboard_utilization')}</h3>
                        <Link to={`/${locale}/sponsor/sponsorship/${activeSponsorship.id}/details`} className="text-sm font-semibold text-green-600 hover:text-green-800">
                            {t('sponsor_dashboard_view_sponsorship')}
                        </Link>
                    </div>
                    <div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div className="bg-ift-light-green h-4 rounded-full text-xs font-medium text-black text-center p-0.5 leading-none" style={{ width: `${(activeSponsorship.students / activeSponsorship.scholarships) * 100}%` }}>
                                {`${activeSponsorship.students}/${activeSponsorship.scholarships}`}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                        Impact Over Time Chart Placeholder
                    </div>
                </div>
            )}
        </div>
    );
};
