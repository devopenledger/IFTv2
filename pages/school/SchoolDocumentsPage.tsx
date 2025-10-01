
import React from 'react';
import { StudentDocumentsPage } from '../student/StudentDocumentsPage';

// For the prototype, we can re-use the student documents page component
// as the functionality (upload, view, delete files) is generic.
// In a real application, this would point to the school's own document store.
export const SchoolDocumentsPage: React.FC = () => {
    return <StudentDocumentsPage />;
};
