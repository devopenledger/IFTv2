import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { TargetIcon, DollarSignIcon, UsersIcon } from '../../components/ui/Icons';

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

export const AffiliateDashboardPage: React.FC = () => {
    const { t } = useI18n();
    const affiliateLink = "https://iftbrics.org/pt/register?ref=AFILIADO123";

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('affiliate_dashboard_welcome')}</h1>
                <p className="mt-1 text-gray-600">{t('affiliate_dashboard_subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title={t('affiliate_dashboard_clicks')} value="1,234" icon={<TargetIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('affiliate_dashboard_leads')} value="152" icon={<UsersIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('affiliate_dashboard_sales')} value="25" icon={<DollarSignIcon className="w-6 h-6 text-green-600" />} />
                <StatCard title={t('affiliate_dashboard_commission')} value="R$ 1.247,50" icon={<DollarSignIcon className="w-6 h-6 text-green-600" />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold mb-4">{t('affiliate_dashboard_performance')}</h3>
                    <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                        Performance Chart Placeholder
                    </div>
                </div>

                <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold mb-4">{t('affiliate_dashboard_your_link')}</h3>
                    <input 
                        type="text" 
                        readOnly 
                        value={affiliateLink}
                        className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    />
                    <button 
                        onClick={() => navigator.clipboard.writeText(affiliateLink)}
                        className="w-full mt-3 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90"
                    >
                        {t('affiliate_dashboard_copy_link')}
                    </button>
                </div>
            </div>
        </div>
    );
};