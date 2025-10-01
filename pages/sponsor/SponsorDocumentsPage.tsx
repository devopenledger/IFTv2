import React from 'react';
import { StudentDocumentsPage } from '../student/StudentDocumentsPage';

// For the prototype, we can re-use the student documents page component
// as the functionality (upload, view, delete files) is generic.
// In a real application, this would point to the sponsor's own document store
// and be pre-populated with contracts, receipts, etc.
export const SponsorDocumentsPage: React.FC = () => {
    return <StudentDocumentsPage />;
};
