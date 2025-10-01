
import React, { createContext, ReactNode, useMemo } from 'react';
import { translations } from './locales';
import { Locale } from '../types';

// FIX: Update I18nContextType to allow for placeholder replacement in translations.
interface I18nContextType {
    locale: Locale;
    t: (key: string, params?: Record<string, string | number>) => string;
}

export const I18nContext = createContext<I18nContextType>({
    locale: Locale.English,
    // FIX: Update default `t` function to match the new type signature.
    t: (key: string) => key,
});

interface I18nProviderProps {
    children: ReactNode;
    locale: Locale;
}

// FIX: Update getTranslation to handle an optional `params` object for interpolation.
const getTranslation = (locale: Locale, key: string, params?: Record<string, string | number>): string => {
    const lang = translations[locale] || translations[Locale.English];
    const keys = key.split('.');
    let result: any = lang;
    for (const k of keys) {
        result = result?.[k];
        if (result === undefined) {
            return key;
        }
    }
    
    let strResult = String(result);

    if (params) {
        for (const pKey of Object.keys(params)) {
            strResult = strResult.replace(`{${pKey}}`, String(params[pKey]));
        }
    }

    return strResult;
};

export const I18nProvider: React.FC<I18nProviderProps> = ({ children, locale }) => {
    // FIX: Update the `t` function in the provider's value to pass along the `params` object.
    const value = useMemo(() => ({
        locale,
        t: (key: string, params?: Record<string, string | number>) => getTranslation(locale, key, params),
    }), [locale]);

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    );
};
