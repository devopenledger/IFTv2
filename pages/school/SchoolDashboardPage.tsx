
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { AwardIcon, UsersIcon } from '../../components/ui/Icons';

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center gap-4">
        <div className="bg-green-100 p-3 rounded-full">{icon}</div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-ift-dark-blue">{value}</p>
        </div>
    </div>
);

export const SchoolDashboardPage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('school_dashboard_welcome')}</h1>
                <p className="mt-1 text-gray-600">{t('school_dashboard_subtitle')}</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard title={t('school_dashboard_total_scholarships')} value="250" icon={<AwardIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('school_dashboard_active_students')} value="105" icon={<UsersIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('school_dashboard_teachers_count')} value="2" icon={<UsersIcon className="w-6 h-6 text-green-600" />} />
            </div>

            {/* Student Performance */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{t('school_dashboard_student_performance')}</h3>
                     <Link to={`/${locale}/school/reports`} className="text-sm font-semibold text-green-600 hover:text-green-800">
                        {t('school_dashboard_view_reports')}
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
                    <div>
                        <p className="text-4xl font-bold text-ift-light-green">85%</p>
                        <p className="text-gray-500">{t('school_dashboard_completion_rate')}</p>
                    </div>
                     <div>
                        <p className="text-4xl font-bold text-ift-light-green">A-</p>
                        <p className="text-gray-500">{t('school_dashboard_avg_grade')}</p>
                    </div>
                </div>
                {/* Placeholder for a chart */}
                <div className="mt-6 h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                    Performance Chart Placeholder
                </div>
            </div>
        </div>
    );
};
