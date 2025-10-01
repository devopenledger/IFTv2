import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_AFFILIATE_COUPONS } from '../../constants';
import { GiftIcon } from '../../components/ui/Icons';

export const AffiliateCouponsPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_affiliate_coupons')}</h1>
            
            <div className="space-y-4">
                {MOCK_AFFILIATE_COUPONS.map((coupon, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-4">
                            <GiftIcon className="w-8 h-8 text-green-500" />
                            <div>
                                <h3 className="text-lg font-bold text-ift-dark-blue">{coupon.code}</h3>
                                <p className="text-sm text-gray-600">{coupon.description}</p>
                            </div>
                        </div>
                        <button 
                             onClick={() => navigator.clipboard.writeText(coupon.code)}
                            className="w-full sm:w-auto px-4 py-2 text-sm font-semibold text-black bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            {t('affiliate_coupons_copy')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};