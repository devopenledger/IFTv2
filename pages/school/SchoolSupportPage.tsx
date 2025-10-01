
import React from 'react';
import { StudentSupportPage } from '../student/StudentSupportPage';

// For the prototype, we can re-use the student support page component
// as the structure (FAQ, contact form) is generic.
// In a real application, the FAQ content would be specific to schools.
export const SchoolSupportPage: React.FC = () => {
    return <StudentSupportPage />;
};
