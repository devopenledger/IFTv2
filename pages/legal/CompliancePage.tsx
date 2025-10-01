import React from 'react';
import { useI18n } from '../../hooks/useI18n';

export const CompliancePage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <h1>{t('compliance_title')}</h1>
            <p>{t('compliance_p1')}</p>
            <h2>{t('compliance_h2_1')}</h2>
            <p>{t('compliance_p2')}</p>
            <p>{t('compliance_p3')}</p>
        </div>
    );
};
