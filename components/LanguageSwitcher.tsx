
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { COUNTRIES_FOR_SWITCHER, LANGUAGE_NAMES } from '../constants';
import { Locale } from '../types';
import { GlobeIcon, ChevronDownIcon } from './ui/Icons';

export const LanguageSwitcher: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { locale } = useParams<{ locale: Locale }>();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguageName = (locale && LANGUAGE_NAMES[locale]) || 'Language';

    const handleLanguageChange = (newLocale: Locale) => {
        const path = window.location.hash.substring(1); // remove '#'
        const pathParts = path.split('/').filter(p => p);
        
        // Replace old locale with new one
        if (pathParts.length > 0 && Object.values(Locale).includes(pathParts[0] as Locale)) {
            pathParts[0] = newLocale;
        } else {
            pathParts.unshift(newLocale);
        }
        
        navigate(`/${pathParts.join('/')}`);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md text-sm text-ift-dark-blue hover:bg-gray-50 transition-colors"
            >
                <GlobeIcon className="w-5 h-5" />
                <span className="hidden sm:inline">{currentLanguageName}</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-20 border">
                    <ul className="py-1">
                        {COUNTRIES_FOR_SWITCHER.map((country) => (
                            <li key={country.name}>
                                <button
                                    onClick={() => handleLanguageChange(country.locale)}
                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    {country.name} ({country.locale})
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};