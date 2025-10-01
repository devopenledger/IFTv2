
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { EditIcon } from '../../components/ui/Icons';

const ProfileSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const { t } = useI18n();
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-bold">{title}</h2>
                <button className="text-sm text-green-600 font-semibold flex items-center gap-1">
                    <EditIcon className="w-4 h-4" />
                    {t('profile_edit')}
                </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {children}
            </div>
        </div>
    );
};

const ProfileField: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <label className="block text-sm font-medium text-gray-500">{label}</label>
        <p className="mt-1 text-gray-900">{value}</p>
    </div>
);


export const StudentProfilePage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                 <div className="w-24 h-24 rounded-full bg-gray-300"></div>
                 <div>
                    <h1 className="text-3xl font-bold text-ift-dark-blue">Aluno Teste</h1>
                    <p className="text-gray-600">aluno.teste@iftbrics.org</p>
                 </div>
            </div>
            
            <ProfileSection title={t('profile_personal_details')}>
                <ProfileField label={t('profile_full_name')} value="Aluno Teste da Silva" />
                <ProfileField label={t('profile_birth_date')} value="01/01/2005" />
            </ProfileSection>

            <ProfileSection title={t('profile_contact_info')}>
                <ProfileField label={t('profile_email')} value="aluno.teste@iftbrics.org" />
                <ProfileField label={t('profile_phone')} value="+55 (11) 98765-4321" />
            </ProfileSection>

             <ProfileSection title={t('profile_address')}>
                <ProfileField label={t('profile_street')} value="Rua das Flores, 123" />
                <ProfileField label={t('profile_city_state_zip')} value="São Paulo, SP, 01234-567" />
                <ProfileField label={t('profile_country')} value="Brasil" />
            </ProfileSection>
        </div>
    );
};
