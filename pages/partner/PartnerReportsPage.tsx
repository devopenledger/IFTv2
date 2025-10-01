import React from 'react';
import { SchoolReportsPage } from '../school/SchoolReportsPage';

// For the prototype, we can re-use the school reports page component
// as the functionality (viewing and downloading reports) is similar.
// In a real application, this would be populated with partner-specific
// reports focusing on their members' engagement and performance.
export const PartnerReportsPage: React.FC = () => {
    return <SchoolReportsPage />;
};