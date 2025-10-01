
import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';

const SettingsCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b">
            <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <div className="p-6 space-y-4">
            {children}
        </div>
    </div>
);

const InputField: React.FC<{ label: string; type: string; id: string; }> = ({ label, type, id }) => (
    <div>
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
        <input type={type} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" />
    </div>
);

const Toggle: React.FC<{ label: string, enabled: boolean, setEnabled: (e:boolean)=>void }> = ({ label, enabled, setEnabled }) => (
     <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={enabled} onChange={()=>setEnabled(!enabled)} className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ift-light-green"></div>
        <span className="ms-3 text-sm font-medium text-gray-900">{label}</span>
    </label>
);


export const StudentSettingsPage: React.FC = () => {
    const { t } = useI18n();
    const [notifyCourses, setNotifyCourses] = useState(true);
    const [notifyActivity, setNotifyActivity] = useState(false);

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_student_settings')}</h1>

            <SettingsCard title={t('settings_change_password')}>
                <InputField label={t('settings_current_password')} type="password" id="current_password" />
                <InputField label={t('settings_new_password')} type="password" id="new_password" />
                <InputField label={t('settings_confirm_password')} type="password" id="confirm_password" />
                 <div className="text-right">
                    <button className="px-5 py-2.5 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                        {t('settings_update_password')}
                    </button>
                </div>
            </SettingsCard>

             <SettingsCard title={t('settings_email_notifications')}>
                <Toggle label={t('settings_new_courses')} enabled={notifyCourses} setEnabled={setNotifyCourses} />
                <Toggle label={t('settings_account_activity')} enabled={notifyActivity} setEnabled={setNotifyActivity} />
                <div className="text-right pt-4">
                    <button className="px-5 py-2.5 text-sm font-semibold text-black bg-gray-200 rounded-md hover:bg-gray-300">
                        {t('settings_save_changes')}
                    </button>
                </div>
             </SettingsCard>
        </div>
    );
};
