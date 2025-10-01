
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { Locale, UserRole } from '../../types';
import { USER_ROLES } from '../../constants';
import * as Icons from '../../components/ui/Icons';

const RoleSelectionStep: React.FC<{ onSelectRole: (role: UserRole) => void }> = ({ onSelectRole }) => {
    const { t } = useI18n();
    return (
        <div>
            <div className="text-center">
                <h2 className="text-2xl font-bold text-ift-dark-blue">{t('auth_register_title')}</h2>
                <p className="mt-2 text-sm text-gray-600">{t('auth_register_step1_title')}</p>
            </div>
            <div className="mt-8 space-y-4">
                {USER_ROLES.map(role => {
                    const Icon = Icons[role.icon];
                    return (
                        <button 
                            key={role.id} 
                            onClick={() => onSelectRole(role)}
                            className="w-full text-left flex items-center p-4 border border-gray-300 rounded-lg hover:bg-green-50 hover:border-green-400 transition-colors"
                        >
                            <Icon className="w-8 h-8 text-green-600 mr-4" />
                            <div>
                                <p className="font-semibold text-ift-dark-blue">{t(role.nameKey)}</p>
                                <p className="text-sm text-gray-500">{t(role.descriptionKey)}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const RegistrationFormStep: React.FC<{ selectedRole: UserRole, onBack: () => void }> = ({ selectedRole, onBack }) => {
    const { t } = useI18n();
    const { locale = Locale.English } = useParams<{ locale: Locale }>();

    return (
        <div>
            <div className="text-center">
                <h2 className="text-2xl font-bold text-ift-dark-blue">{t('auth_register_step2_title')}</h2>
                <p className="mt-2 text-sm text-gray-600">Registrando como <span className="font-semibold">{t(selectedRole.nameKey)}</span></p>
            </div>
            <form className="mt-8 space-y-4">
                 <div>
                    <label htmlFor="full-name" className="sr-only">{t('auth_full_name')}</label>
                    <input id="full-name" name="name" type="text" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder={t('auth_full_name')} />
                </div>
                <div>
                    <label htmlFor="email-address" className="sr-only">{t('auth_email')}</label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder={t('auth_email')} />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">{t('auth_password')}</label>
                    <input id="password" name="password" type="password" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder={t('auth_password')} />
                </div>
                 <div>
                    <label htmlFor="confirm-password" className="sr-only">{t('auth_confirm_password')}</label>
                    <input id="confirm-password" name="confirmPassword" type="password" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder={t('auth_confirm_password')} />
                </div>
                
                <p className="text-xs text-gray-500">
                    {t('auth_agree_terms')}{' '}
                    <a href="#" className="font-medium text-green-600 hover:text-green-500">{t('auth_terms_of_service')}</a>.
                </p>

                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-ift-light-green hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        {t('auth_register_button')}
                    </button>
                </div>
            </form>
             <button onClick={onBack} className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900">&larr; {t('auth_back_to_selection')}</button>
        </div>
    );
};

export const RegisterPage: React.FC = () => {
    const { t } = useI18n();
    const { locale = Locale.English } = useParams<{ locale: Locale }>();
    const [step, setStep] = useState(1);
    const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

    const handleSelectRole = (role: UserRole) => {
        setSelectedRole(role);
        setStep(2);
    };
    
    return (
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 w-full">
            {step === 1 && <RoleSelectionStep onSelectRole={handleSelectRole} />}
            {step === 2 && selectedRole && <RegistrationFormStep selectedRole={selectedRole} onBack={() => setStep(1)} />}

             <p className="mt-8 text-center text-sm text-gray-600">
                {t('auth_already_have_account')}{' '}
                <Link to={`/${locale}/login`} className="font-medium text-green-600 hover:text-green-500">{t('auth_login_here')}</Link>
            </p>
        </div>
    );
};
