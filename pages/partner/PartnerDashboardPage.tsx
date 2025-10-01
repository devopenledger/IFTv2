import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { HandshakeIcon, AwardIcon, UsersIcon } from '../../components/ui/Icons';

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center gap-4">
        <div className="bg-green-100 p-3 rounded-full">{icon}</div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-ift-dark-blue">{value}</p>
        </div>
    </div>
);

export const PartnerDashboardPage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('partner_dashboard_welcome')}</h1>
                <p className="mt-1 text-gray-600">{t('partner_dashboard_subtitle')}</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard title={t('partner_dashboard_active_agreements')} value="2" icon={<HandshakeIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('partner_dashboard_allocated_scholarships')} value="10.500" icon={<AwardIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('partner_dashboard_active_members')} value="8.950" icon={<UsersIcon className="w-6 h-6 text-green-600" />} />
            </div>

            {/* Member Engagement */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{t('partner_dashboard_member_engagement')}</h3>
                     <Link to={`/${locale}/partner/partnership`} className="text-sm font-semibold text-green-600 hover:text-green-800">
                        {t('partner_dashboard_view_partnerships')}
                    </Link>
                </div>
                {/* Placeholder for a chart */}
                <div className="mt-6 h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                    Member Engagement Chart Placeholder
                </div>
            </div>
        </div>
    );
};