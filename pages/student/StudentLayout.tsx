
import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { StudentSidebar } from '../../components/student/StudentSidebar';
import { StudentHeader } from '../../components/student/StudentHeader';
import { MarketplaceOffer, FinancingApplication } from '../../types';

interface StudentLayoutProps {
    marketplaceOffers: MarketplaceOffer[];
    financingApplications: FinancingApplication[];
    setFinancingApplications: React.Dispatch<React.SetStateAction<FinancingApplication[]>>;
}

export const StudentLayout: React.FC<StudentLayoutProps> = ({ marketplaceOffers, financingApplications, setFinancingApplications }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    return (
        <div className="bg-gray-50 text-ift-dark-blue">
            <div className="flex h-screen overflow-hidden">
                {/* <!-- ===== Sidebar Start ===== --> */}
                <StudentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {/* <!-- ===== Header Start ===== --> */}
                    <StudentHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* <!-- ===== Header End ===== --> */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            <Outlet context={{ marketplaceOffers, financingApplications, setFinancingApplications }}/>
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
        </div>
    );
};

export function useStudentOutletContext() {
    return useOutletContext<{ 
        marketplaceOffers: MarketplaceOffer[],
        financingApplications: FinancingApplication[],
        setFinancingApplications: React.Dispatch<React.SetStateAction<FinancingApplication[]>>
    }>();
}
