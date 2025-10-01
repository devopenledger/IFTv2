
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { UsersRoundIcon, GraduationCapIcon, DollarSignIcon, BookOpenIcon } from '../../components/ui/Icons';

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-ift-dark-blue">{value}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">{icon}</div>
        </div>
    </div>
);

export const AdminDashboardPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_dashboard')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title={t('admin_dashboard_total_users')} value="10,250" icon={<UsersRoundIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('admin_dashboard_total_students')} value="8,950" icon={<GraduationCapIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('admin_dashboard_total_revenue')} value="R$ 150.7k" icon={<DollarSignIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('admin_dashboard_enrollments')} value="+350" icon={<BookOpenIcon className="w-6 h-6 text-green-600" />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold mb-4">{t('admin_dashboard_user_growth')}</h3>
                    <div className="h-80 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                        User Growth Chart Placeholder
                    </div>
                </div>

                <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold mb-4">{t('admin_dashboard_recent_activity')}</h3>
                    <ul className="space-y-4">
                        <li className="text-sm">New student <span className="font-semibold">Alice Johnson</span> enrolled.</li>
                        <li className="text-sm">New sponsor <span className="font-semibold">Empresa Amiga A</span> joined.</li>
                        <li className="text-sm">Payment of <span className="font-semibold">R$ 499,00</span> received.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
