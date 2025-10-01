import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { Link } from 'react-router-dom';

export const AffiliateSalesPage: React.FC = () => {
    const { t } = useI18n();
    const affiliateLink = "https://iftbrics.org/pt/register?ref=AFILIADO123";

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_affiliate_sales_page')}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4">{t('affiliate_dashboard_your_link')}</h3>
                <input 
                    type="text" 
                    readOnly 
                    value={affiliateLink}
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                />
                <button 
                    onClick={() => navigator.clipboard.writeText(affiliateLink)}
                    className="mt-3 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90"
                >
                    {t('affiliate_dashboard_copy_link')}
                </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{t('affiliate_sales_page_preview')}</h3>
                     <Link to="/pt/home" target="_blank" className="text-sm font-semibold text-green-600 hover:text-green-800">
                        Abrir em nova aba &rarr;
                    </Link>
                </div>
                <div className="w-full h-96 border rounded-md">
                    <iframe src="/#/pt/home" className="w-full h-full" title="Sales Page Preview"></iframe>
                </div>
            </div>
        </div>
    );
};