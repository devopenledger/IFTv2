

import React, { useState } from 'react';
import { useI18n } from '../hooks/useI18n';
import { Link, useOutletContext } from 'react-router-dom';
import { MarketplaceCategory, MarketplaceOffer } from '../types';
import { MARKETPLACE_CATEGORIES } from '../constants';

const OfferCard: React.FC<{ offer: MarketplaceOffer }> = ({ offer }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-center p-6 text-center transition-transform hover:-translate-y-1">
            <div className="h-20 w-20 flex items-center justify-center mb-4">
                <img src={offer.logo} alt={`${offer.title} logo`} className="max-h-16 max-w-16 object-contain"/>
            </div>
            <h3 className="text-lg font-bold text-ift-dark-blue">{offer.title}</h3>
            <p className="text-sm text-gray-600 flex-grow mb-4">{offer.description}</p>
        </div>
    );
};


export const MarketplacePublicPage: React.FC = () => {
    const { t } = useI18n();
    const { marketplaceOffers } = useOutletContext<{ marketplaceOffers: MarketplaceOffer[] }>();
    const [activeTab, setActiveTab] = useState<MarketplaceCategory>('ai');

    const filteredOffers = marketplaceOffers.filter(offer => offer.category === activeTab);

    return (
        <div className="bg-gray-50">
             {/* Hero Section */}
            <div className="text-center py-20 md:py-28 bg-white border-b">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-ift-dark-blue">{t('marketplace_title')}</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">{t('marketplace_subtitle')}</p>
                </div>
            </div>
            
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="border-b border-gray-200 mb-8 flex justify-center">
                        <nav className="-mb-px flex flex-wrap justify-center space-x-4 sm:space-x-8" aria-label="Tabs">
                            {MARKETPLACE_CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-semibold text-base ${activeTab === cat.id ? 'border-ift-light-green text-ift-dark-blue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                                >
                                    {t(cat.nameKey)}
                                </button>
                            ))}
                        </nav>
                    </div>

                     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredOffers.map((offer) => (
                            <OfferCard key={offer.id} offer={offer} />
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-white p-10 rounded-lg shadow-md border">
                        <h2 className="text-2xl font-bold">{t('marketplace_cta_title')}</h2>
                        <p className="mt-2 text-gray-600">{t('marketplace_cta_subtitle')}</p>
                        <Link to="/pt/register" className="mt-6 inline-block px-8 py-3 text-base font-medium text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                            {t('nav_register')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};