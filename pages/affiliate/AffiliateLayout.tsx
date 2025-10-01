
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AffiliateSidebar } from '../../components/affiliate/AffiliateSidebar';
import { AffiliateHeader } from '../../components/affiliate/AffiliateHeader';

export const AffiliateLayout: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="bg-gray-50 text-ift-dark-blue">
            <div className="flex h-screen overflow-hidden">
                <AffiliateSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <AffiliateHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};