import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_AFFILIATE_CAMPAIGNS } from '../../constants';

export const AffiliateCampaignPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_affiliate_campaign')}</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {MOCK_AFFILIATE_CAMPAIGNS.map((asset) => (
                    <div key={asset.id} className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <div className="p-4 flex-grow">
                            <h3 className="font-bold text-ift-dark-blue">{asset.name}</h3>
                            <div className="mt-2 text-sm text-gray-600 border-t pt-2">
                                {asset.type === 'image' ? (
                                    <img src={asset.preview} alt="Campaign asset preview" className="rounded-md"/>
                                ) : (
                                    <p className="italic">"{asset.preview}"</p>
                                )}
                            </div>
                        </div>
                        <div className="p-4 border-t">
                             <button className="w-full px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                                {t('affiliate_campaigns_use_asset')}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};