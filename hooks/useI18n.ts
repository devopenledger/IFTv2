
import { useContext } from 'react';
import { I18nContext } from '../i18n/I18nProvider';

export const useI18n = () => {
    return useContext(I18nContext);
};
