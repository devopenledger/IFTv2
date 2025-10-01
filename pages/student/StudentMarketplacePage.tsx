

import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MARKETPLACE_CATEGORIES } from '../../constants';
import { Locale, MarketplaceCategory, MarketplaceOffer } from '../../types';
import { Link, useParams } from 'react-router-dom';
import { useStudentOutletContext } from './StudentLayout';

const OfferCard: React.FC<{ offer: MarketplaceOffer }> = ({ offer }) => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: Locale }>();

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-center p-6 text-center">
            <div className="h-20 w-20 flex items-center justify-center mb-4">
                <img src={offer.logo} alt={`${offer.title} logo`} className="max-h-16 max-w-16 object-contain"/>
            </div>
            <h3 className="text-lg font-bold text-ift-dark-blue">{offer.title}</h3>
            <p className="text-sm text-gray-600 flex-grow mb-4">{offer.description}</p>
            <Link to={`/${locale}/student/marketplace/${offer.id}`} className="w-full mt-auto px-4 py-2 text-sm font-semibold text-black bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                {t('marketplace_claim_offer')}
            </Link>
        </div>
    );
};

export const StudentMarketplacePage: React.FC = () => {
    const { t } = useI18n();
    const { marketplaceOffers } = useStudentOutletContext();
    const [activeTab, setActiveTab] = useState<MarketplaceCategory>('ai');

    const filteredOffers = marketplaceOffers.filter(offer => offer.category === activeTab);

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-2">{t('page_title_student_marketplace')}</h1>
            <p className="text-gray-600 mb-6">{t('marketplace_subtitle')}</p>
            
             <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex flex-wrap space-x-4 sm:space-x-8" aria-label="Tabs">
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

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {filteredOffers.map((offer) => (
                    <OfferCard key={offer.id} offer={offer} />
                ))}
            </div>
        </div>
    );
};