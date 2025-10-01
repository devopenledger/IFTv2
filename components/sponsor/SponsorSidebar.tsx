import React, { useEffect, useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { Locale, NavLinkInfo } from '../../types';
import * as Icons from '../ui/Icons';
import { SPONSOR_NAV_LINKS, SPONSOR_PROFILE_LINKS } from '../../constants';

interface SponsorSidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const NavGroup: React.FC<{ links: NavLinkInfo[], basePath: string }> = ({ links, basePath }) => {
    const { t } = useI18n();
    return (
        <ul className="space-y-1.5">
            {links.map((link) => {
                const Icon = Icons[link.icon] || Icons.HelpCircleIcon;
                return (
                    <li key={link.name}>
                        <NavLink
                            to={basePath + link.href}
                            end={link.href === '/dashboard'} // Ensure only dashboard is exact match
                            className={({ isActive }) =>
                                `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-500 duration-300 ease-in-out hover:bg-gray-100 ${isActive && 'bg-ift-light-green/20 text-ift-dark-blue font-semibold'
                                }`
                            }
                        >
                            <Icon className="w-5 h-5" />
                            {t(link.name)}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};


export const SponsorSidebar: React.FC<SponsorSidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const { locale = Locale.English } = useParams<{ locale: Locale }>();
    const trigger = useRef<HTMLButtonElement>(null);
    const sidebar = useRef<HTMLElement>(null);

    const basePath = `/${locale}/sponsor`;

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    }, [sidebarOpen, setSidebarOpen]);

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!sidebarOpen || keyCode !== 27) return; 
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    }, [sidebarOpen, setSidebarOpen]);

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-40 flex h-screen w-72 flex-col overflow-y-hidden bg-white border-r border-gray-200 duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 h-20 border-b border-gray-200">
                <NavLink to={`/${locale}/home`}>
                    <img src="https://res.cloudinary.com/dsdzoebyq/image/upload/v1758834228/IFT_Logo_Horizontal_nfytm4.png" alt="Logo" className="h-10"/>
                </NavLink>

                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sponsor-sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden text-gray-500"
                >
                    <Icons.XIcon className="w-6 h-6" />
                </button>
            </div>
            {/* <!-- SIDEBAR HEADER --> */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-5 py-4 px-4 lg:px-6">
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-400">MENU</h3>
                        <NavGroup links={SPONSOR_NAV_LINKS} basePath={basePath} />
                    </div>

                    <div className="mt-8">
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-400">PROFILE</h3>
                        <NavGroup links={SPONSOR_PROFILE_LINKS} basePath={basePath} />
                    </div>
                </nav>
                {/* <!-- Sidebar Menu --> */}
            </div>
        </aside>
    );
};
