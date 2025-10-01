
import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../hooks/useI18n';
import { MOCK_NOTIFICATIONS } from '../constants';
import { Notification } from '../types';
import { BellIcon } from './ui/Icons';

export const NotificationBell: React.FC = () => {
    const { t } = useI18n();
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const unreadCount = notifications.filter(n => !n.read).length;

    const handleToggle = () => {
        setIsOpen(prev => !prev);
        if (!isOpen) {
            // Mark all as read when opening
            setNotifications(prev => prev.map(n => ({ ...n, read: true })));
        }
    };

    const handleClearAll = () => {
        setNotifications([]);
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
                onClick={handleToggle}
                className="relative z-10 block rounded-full border border-stroke bg-gray-100 p-2 text-ift-dark-blue hover:bg-gray-200"
            >
                {unreadCount > 0 && (
                     <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                        {unreadCount}
                    </span>
                )}
                <BellIcon className="w-5 h-5" />
            </button>
            {isOpen && (
                <div className="absolute -right-16 mt-4 flex w-72 flex-col rounded-lg border border-stroke bg-white shadow-lg sm:right-0 sm:w-80">
                    <div className="px-4 py-3">
                        <h5 className="text-sm font-medium text-gray-500">{t('notifications_title')}</h5>
                    </div>

                    <ul className="flex h-auto flex-col overflow-y-auto">
                        {notifications.map((notification) => (
                            <li key={notification.id}>
                                <a className="flex flex-col gap-2.5 border-t border-stroke px-4 py-3 hover:bg-gray-50" href="#">
                                    <p className="text-sm">
                                        {t(notification.messageKey)}
                                    </p>
                                    <p className="text-xs text-gray-500">{notification.time}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                     <div className="px-4 py-3 border-t">
                        <button className="text-sm font-medium text-red-500 hover:text-red-700 w-full text-center" onClick={handleClearAll}>
                           {t('notifications_clear_all')}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
