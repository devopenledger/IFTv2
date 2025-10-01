import React from 'react';
import { useI18n } from '../../hooks/useI18n';

export const TransparencyPage: React.FC = () => {
    const { t } = useI18n();
    return (
        <div>
            <h1>{t('transparency_title')}</h1>
            <p>{t('transparency_p1')}</p>
            <h2>{t('transparency_h2_1')}</h2>
            <p>{t('transparency_p2')}</p>
        </div>
    );
};
