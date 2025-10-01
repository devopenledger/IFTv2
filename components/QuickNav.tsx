
import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { QUICK_NAV_LINKS } from '../constants';
import { LayersIcon, XIcon } from './ui/Icons';
import { Locale } from '../types';

export const QuickNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { locale = Locale.English } = useParams<{ locale: string }>();
    const dropdownRef = useRef<HTMLDivElement>(null);

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
        <div ref={dropdownRef} className="fixed bottom-4 right-4 z-50">
            {isOpen && (
                <div className="absolute bottom-14 right-0 w-64 bg-white rounded-lg shadow-2xl border border-gray-200">
                    <div className="p-2 max-h-80 overflow-y-auto">
                        {QUICK_NAV_LINKS.map(group => (
                            <div key={group.group} className="mb-2">
                                <h4 className="px-2 py-1 text-xs font-bold text-gray-400 uppercase">{group.group}</h4>
                                <ul>
                                    {group.links.map(link => (
                                        <li key={link.name}>
                                            <Link
                                                to={`/${locale}${link.href}`}
                                                onClick={() => setIsOpen(false)}
                                                className="block w-full text-left px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-ift-dark-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all"
                aria-label="Quick Navigation"
            >
                {isOpen ? <XIcon className="w-6 h-6" /> : <LayersIcon className="w-6 h-6" />}
            </button>
        </div>
    );
};