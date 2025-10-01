import React from 'react';
import { StudentDocumentsPage } from '../student/StudentDocumentsPage';

// Re-using the generic document management component for the prototype.
// This would hold affiliate agreements, tax forms, etc.
export const AffiliateDocumentsPage: React.FC = () => {
    return <StudentDocumentsPage />;
};