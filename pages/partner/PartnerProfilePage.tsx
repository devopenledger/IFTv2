import React from 'react';
import { StudentProfilePage } from '../student/StudentProfilePage';

// For the prototype, we can re-use the student profile page component
// as the structure for displaying and editing information is similar.
// In a real application, this would be tailored to partner-specific fields
// like Organization Name, Type, Contact Person, etc.
export const PartnerProfilePage: React.FC = () => {
    return <StudentProfilePage />;
};