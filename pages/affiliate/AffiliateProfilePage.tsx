import React from 'react';
import { StudentProfilePage } from '../student/StudentProfilePage';

// For the prototype, we can re-use the student profile page component
// as the structure is similar. In a real application, this would be tailored
// to affiliate-specific fields like payment details (PayPal, bank account).
export const AffiliateProfilePage: React.FC = () => {
    return <StudentProfilePage />;
};