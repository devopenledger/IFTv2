import React from 'react';
import { useI18n } from '../../hooks/useI18n';

export const TermsPage: React.FC = () => {
    const { t } = useI18n();

    return (
         <div>
            <h1>{t('terms_title')}</h1>
            <p>{t('terms_p1')}</p>
            <h2>{t('terms_h2_1')}</h2>
            <p>{t('terms_p2')}</p>
            <h2>{t('terms_h2_2')}</h2>
            <p>{t('terms_p3')}</p>
        </div>
    );
};
