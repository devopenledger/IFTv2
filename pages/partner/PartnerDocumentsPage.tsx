import React from 'react';
import { StudentDocumentsPage } from '../student/StudentDocumentsPage';

// For the prototype, we can re-use the student documents page component
// as the functionality (upload, view, delete files) is generic.
// In a real application, this would point to the partner's own document store.
export const PartnerDocumentsPage: React.FC = () => {
    return <StudentDocumentsPage />;
};