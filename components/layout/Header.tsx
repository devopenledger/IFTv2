import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { Locale } from '../../types';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { MenuIcon, XIcon, DownloadIcon } from '../ui/Icons';

export const Header: React.FC = () => {
    const { t } = useI18n();
    const { locale = Locale.English } = useParams<{ locale: Locale }>();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showInstallButton, setShowInstallButton] = useState(!window.matchMedia('(display-mode: standalone)').matches);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowInstallButton(true);
        };

        const handleAppInstalled = () => {
            setShowInstallButton(false);
            setDeferredPrompt(null);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            await deferredPrompt.userChoice;
            setDeferredPrompt(null);
        } else if (showInstallButton) {
            alert("This app is installable. Please use your browser's 'Install' option.");
        }
    };


    const navLinks = [
        { href: `/${locale}/home`, label: t('nav_home') },
        { href: `/${locale}/about`, label: t('nav_about') },
        { href: `/${locale}/marketplace`, label: t('nav_marketplace') },
        { href: `/${locale}/scholarship`, label: t('nav_scholarship') },
    ];

    return (
        <header className="bg-ift-page-bg/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to={`/${locale}/home`}>
                            <img className="h-10 w-auto hidden lg:block" src="https://res.cloudinary.com/dsdzoebyq/image/upload/v1758834228/IFT_Logo_Horizontal_nfytm4.png" alt="IFT BRICS Logo" />
                            <img className="h-12 w-auto lg:hidden" src="https://res.cloudinary.com/dsdzoebyq/image/upload/v1758834228/IFT_Logo_Color_jg4a6o.png" alt="IFT BRICS Logo" />
                        </Link>
                    </div>
                    <nav className="hidden lg:flex lg:space-x-8 items-center">
                        {navLinks.map(link => (
                            <Link key={link.label} to={link.href} className="text-base font-medium text-ift-dark-blue hover:text-green-600 transition-colors">{link.label}</Link>
                        ))}
                         {showInstallButton && (
                             <button onClick={handleInstallClick} className="flex items-center gap-2 text-base font-medium text-ift-dark-blue hover:text-green-600 transition-colors">
                                <DownloadIcon className="w-5 h-5" />
                                {t('nav_download_app')}
                            </button>
                        )}
                    </nav>
                    <div className="hidden lg:flex items-center space-x-4">
                        <LanguageSwitcher />
                        <Link to={`/${locale}/login`} className="text-base font-medium text-ift-dark-blue hover:text-green-600 transition-colors">{t('nav_login')}</Link>
                        <Link to={`/${locale}/register`} className="px-4 py-2 text-base font-medium text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">{t('nav_register')}</Link>
                    </div>
                    <div className="lg:hidden flex items-center">
                         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-ift-dark-blue">
                            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
             {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-ift-page-bg border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                           <Link key={link.label} to={link.href} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-ift-dark-blue hover:bg-gray-100">{link.label}</Link>
                        ))}
                         {showInstallButton && (
                            <button onClick={() => { handleInstallClick(); setIsMenuOpen(false); }} className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-ift-dark-blue hover:bg-gray-100">
                                <DownloadIcon className="w-5 h-5" />
                                {t('nav_download_app')}
                            </button>
                        )}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="px-5 flex items-center justify-between">
                            <LanguageSwitcher />
                            <div className="space-x-4">
                               <Link to={`/${locale}/login`} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-ift-dark-blue hover:text-green-600">{t('nav_login')}</Link>
                               <Link to={`/${locale}/register`} onClick={() => setIsMenuOpen(false)} className="px-4 py-2 text-base font-medium text-white bg-ift-light-green rounded-md hover:opacity-90">{t('nav_register')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};