import React from 'react';
import { StudentSettingsPage } from '../student/StudentSettingsPage';

// For the prototype, we can re-use the student settings page component
// as the functionality (changing password, notification prefs) is generic.
// In a real application, settings might include branding options or
// API key management for integrations.
export const SponsorSettingsPage: React.FC = () => {
    return <StudentSettingsPage />;
};
