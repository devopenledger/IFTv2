
import React from 'react';
import { StudentSettingsPage } from '../student/StudentSettingsPage';

// For the prototype, we can re-use the student settings page component
// as the functionality (changing password, notification prefs) is generic.
export const SchoolSettingsPage: React.FC = () => {
    return <StudentSettingsPage />;
};
