
import React from 'react';
import { MenuIcon } from '../ui/Icons';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { NotificationBell } from '../NotificationBell';

interface AdminHeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ setSidebarOpen }) => {
    return (
        <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between bg-ift-page-bg/80 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-6 lg:px-8 lg:justify-end">
            {/* Hamburger menu button for mobile */}
            <button
                className="lg:hidden text-ift-dark-blue"
                aria-controls="admin-sidebar"
                onClick={(e) => {
                    e.stopPropagation();
                    setSidebarOpen(true);
                }}
            >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-6 w-6" />
            </button>
            
            <div className="flex items-center gap-4">
                 <NotificationBell />
                 <LanguageSwitcher />
                 <div className="h-9 w-9 rounded-full bg-gray-300">
                    {/* User avatar placeholder */}
                 </div>
            </div>
        </header>
    );
};
