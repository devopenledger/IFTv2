import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_MARKETPLACE_OFFERS } from '../../constants';
import { CheckCircleIcon } from '../../components/ui/Icons';

export const StudentMarketplaceOfferPage: React.FC = () => {
    const { t } = useI18n();
    const { offerId, locale } = useParams<{ offerId: string, locale: string }>();
    const offer = MOCK_MARKETPLACE_OFFERS.find(o => o.id === offerId);

    if (!offer) {
        return <div className="text-center p-12">Oferta não encontrada.</div>;
    }

    const tutorialSteps = t(offer.tutorialKey).split('\n');
    const benefits = offer.benefitsKey.map(key => t(key));

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
                    <img src={offer.logo} alt={`${offer.title} logo`} className="w-24 h-24 object-contain flex-shrink-0" />
                    <div>
                        <h1 className="text-3xl font-bold text-ift-dark-blue">{offer.title}</h1>
                        <p className="mt-2 text-lg text-gray-600">{offer.description}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Tutorial Section */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">{t('marketplace_offer_tutorial')}</h2>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                            {tutorialSteps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-green-50 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">{t('marketplace_offer_benefits')}</h2>
                        <ul className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-800">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center">
                    <a 
                        href={offer.partnerUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-12 py-4 text-lg font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity"
                    >
                        {t('marketplace_offer_cta')}
                    </a>
                </div>
            </div>
        </div>
    );
};