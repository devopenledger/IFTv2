
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_REPORTS } from '../../constants';
import { DownloadIcon, FileTextIcon } from '../../components/ui/Icons';

const ReportCard: React.FC<{ report: typeof MOCK_REPORTS[0] }> = ({ report }) => {
    const { t } = useI18n();
    
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
                <FileTextIcon className="w-8 h-8 text-gray-400 flex-shrink-0" />
                <div>
                    <h3 className="font-bold text-ift-dark-blue">{report.name}</h3>
                    <p className="text-xs text-gray-500">{t('school_reports_generated_on')} {report.date}</p>
                </div>
            </div>
            <button className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-black bg-gray-100 rounded-md hover:bg-gray-200 transition-opacity">
                <DownloadIcon className="w-4 h-4" />
                {t('school_reports_download')}
            </button>
        </div>
    );
};

export const SchoolReportsPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_school_reports')}</h1>
            
            <div className="space-y-4">
                {MOCK_REPORTS.map(report => (
                    <ReportCard key={report.id} report={report} />
                ))}
            </div>
        </div>
    );
};
