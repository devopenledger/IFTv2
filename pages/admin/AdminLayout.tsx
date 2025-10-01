
import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { MarketplaceOffer, FinancingApplication } from '../../types';

interface AdminLayoutProps {
    marketplaceOffers: MarketplaceOffer[];
    setMarketplaceOffers: React.Dispatch<React.SetStateAction<MarketplaceOffer[]>>;
    financingApplications: FinancingApplication[];
    setFinancingApplications: React.Dispatch<React.SetStateAction<FinancingApplication[]>>;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ marketplaceOffers, setMarketplaceOffers, financingApplications, setFinancingApplications }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    return (
        <div className="bg-gray-50 text-ift-dark-blue">
            <div className="flex h-screen overflow-hidden">
                <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            <Outlet context={{ marketplaceOffers, setMarketplaceOffers, financingApplications, setFinancingApplications }} />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export function useAdminOutletContext() {
    return useOutletContext<{ 
        marketplaceOffers: MarketplaceOffer[],
        setMarketplaceOffers: React.Dispatch<React.SetStateAction<MarketplaceOffer[]>>,
        financingApplications: FinancingApplication[],
        setFinancingApplications: React.Dispatch<React.SetStateAction<FinancingApplication[]>>
    }>();
}
