

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { Locale } from '../../types';
import { MapPinIcon, PhoneIcon, MailIcon } from '../ui/Icons';
import { QuickNav } from '../QuickNav';

export const Footer: React.FC = () => {
    const { t } = useI18n();
    const { locale = Locale.English } = useParams<{ locale: Locale }>();

    return (
        <footer className="bg-ift-footer-bg text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4 md:col-span-1">
                        <Link to={`/${locale}/home`}>
                            <img className="h-10 w-auto hidden md:block" src="https://res.cloudinary.com/dsdzoebyq/image/upload/v1758834229/IFT_WhiteGreen_Horizontal_v8cqlx.png" alt="IFT BRICS Logo" />
                             <img className="h-12 w-auto md:hidden" src="https://res.cloudinary.com/dsdzoebyq/image/upload/v1758834229/IFT_Logo_WhiteGreen_nr6eqc.png" alt="IFT BRICS Logo" />
                        </Link>
                        <p className="text-gray-300 text-sm max-w-xs">{t('footer_description')}</p>
                    </div>
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">{t('footer_platform')}</h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link to={`/${locale}/about`} className="text-base text-gray-300 hover:text-white">{t('nav_about')}</Link></li>
                                <li><Link to={`/${locale}/marketplace`} className="text-base text-gray-300 hover:text-white">{t('nav_marketplace')}</Link></li>
                                <li><Link to={`/${locale}/scholarship`} className="text-base text-gray-300 hover:text-white">{t('nav_scholarship')}</Link></li>
                                <li><Link to={`/${locale}/careers`} className="text-base text-gray-300 hover:text-white">{t('nav_careers')}</Link></li>
                                <li><Link to={`/${locale}/contact`} className="text-base text-gray-300 hover:text-white">{t('nav_contact')}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">{t('footer_legal')}</h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link to={`/${locale}/compliance`} className="text-base text-gray-300 hover:text-white">{t('compliance_title')}</Link></li>
                                <li><Link to={`/${locale}/terms`} className="text-base text-gray-300 hover:text-white">{t('terms_title')}</Link></li>
                                <li><Link to={`/${locale}/transparency`} className="text-base text-gray-300 hover:text-white">{t('transparency_title')}</Link></li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">{t('footer_contact_us')}</h3>
                             <ul className="mt-4 space-y-3 text-sm text-gray-300">
                                <li className="flex items-start gap-3">
                                    <MapPinIcon className="w-4 h-4 mt-1 flex-shrink-0" />
                                    <span>{t('footer_address')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <PhoneIcon className="w-4 h-4" />
                                    <span>{t('footer_phone')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <MailIcon className="w-4 h-4" />
                                    <a href={`mailto:${t('footer_email')}`} className="hover:text-white">{t('footer_email')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} IFT Institute of Future Technologies for BRICS. {t('footer_all_rights')}</p>
                </div>
            </div>
            <QuickNav />
        </footer>
    );
};