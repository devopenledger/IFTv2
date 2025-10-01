import React from 'react';
import { Outlet, NavLink, useParams } from 'react-router-dom';
import { Locale } from '../../types';

export const LegalLayout: React.FC = () => {
    const { locale } = useParams<{ locale: Locale }>();
    const legalLinks = [
        { name: 'Compliance', href: `/${locale}/compliance` },
        { name: 'Terms', href: `/${locale}/terms` },
        { name: 'Transparency', href: `/${locale}/transparency` },
    ];

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid lg:grid-cols-4 gap-8">
                    <aside className="lg:col-span-1">
                        <nav className="sticky top-24">
                            <ul className="space-y-2">
                                {legalLinks.map(link => (
                                    <li key={link.name}>
                                        <NavLink
                                            to={link.href}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 rounded-md font-medium ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>
                    <main className="lg:col-span-3">
                        <div className="prose max-w-none prose-h1:text-ift-dark-blue prose-h2:text-ift-dark-blue">
                             <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};
