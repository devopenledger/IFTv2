
import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_DOCUMENTS } from '../../constants';
import { UploadIcon, TrashIcon, DownloadIcon, QrCodeIcon } from '../../components/ui/Icons';

type Tab = 'personal' | 'id_card' | 'enrollment' | 'other';

const PersonalDocumentsTab: React.FC = () => {
    const { t } = useI18n();
    return (
        <div>
            <div className="flex justify-end mb-4">
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    <UploadIcon className="w-4 h-4" />
                    {t('documents_upload_new')}
                </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">{t('documents_table_name')}</th>
                            <th scope="col" className="px-6 py-3">{t('documents_table_date')}</th>
                            <th scope="col" className="px-6 py-3">{t('documents_table_size')}</th>
                            <th scope="col" className="px-6 py-3 text-right">{t('documents_table_actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_DOCUMENTS.map((doc, index) => (
                            <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {doc.name}
                                </th>
                                <td className="px-6 py-4">{doc.date}</td>
                                <td className="px-6 py-4">{doc.size}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end items-center gap-4">
                                        <a href="#" className="font-medium text-green-600 hover:underline">
                                           <DownloadIcon className="w-5 h-5" />
                                        </a>
                                        <button className="font-medium text-red-600 hover:underline">
                                            <TrashIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const StudentIdCardTab: React.FC = () => {
    const { t } = useI18n();
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">{t('documents_id_card_title')}</h2>
            <div className="bg-gradient-to-br from-gray-700 to-ift-dark-blue text-white rounded-xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-md flex-shrink-0">
                        {/* Placeholder for student photo */}
                    </div>
                    <div>
                         <img src="https://res.cloudinary.com/dsdzoebyq/image/upload/v1758834229/IFT_WhiteGreen_Horizontal_v8cqlx.png" alt="IFT BRICS Logo" className="h-8 mb-2"/>
                        <p className="text-xs">{t('documents_id_card_name')}</p>
                        <p className="font-bold text-lg">Aluno Teste</p>
                    </div>
                </div>
                <div>
                     <p className="text-xs">{t('documents_id_card_course')}</p>
                     <p className="font-semibold">{t('course1_title')}</p>
                </div>
                <div className="flex justify-between items-end mt-2">
                    <div>
                        <p className="text-xs">{t('documents_id_card_validity')}</p>
                        <p className="font-semibold">12/2025</p>
                        <p className="text-xs mt-2">{t('documents_id_card_code')}:</p>
                        <p className="font-mono text-xs">XYZ123ABC456</p>
                    </div>
                    <div className="bg-white p-1 rounded-md">
                        <QrCodeIcon className="w-16 h-16 text-black"/>
                    </div>
                </div>
            </div>
             <button className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                <DownloadIcon className="w-4 h-4" />
                {t('documents_download_pdf')}
            </button>
        </div>
    )
}

const EnrollmentStatementTab: React.FC = () => {
    const { t } = useI18n();
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">{t('documents_enrollment_statement_title')}</h2>
            <p className="text-gray-600 max-w-md mx-auto">{t('documents_enrollment_statement_desc')}</p>
             <button className="mt-6 flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity mx-auto">
                <DownloadIcon className="w-5 h-5" />
                {t('documents_issue_and_download')}
            </button>
        </div>
    )
}

const OtherStatementsTab: React.FC = () => {
    const { t } = useI18n();
    const otherStatements = [
        { titleKey: 'documents_other_statement_1', desc: 'Comprova a conclusão bem-sucedida de um curso.'},
        { titleKey: 'documents_other_statement_2', desc: 'Detalha as notas e o progresso até o momento.'},
    ];
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
             {otherStatements.map(statement => (
                <div key={statement.titleKey} className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 p-4 border rounded-md">
                    <div>
                        <h3 className="font-bold text-ift-dark-blue">{t(statement.titleKey)}</h3>
                        <p className="text-sm text-gray-500">{statement.desc}</p>
                    </div>
                    <button className="flex-shrink-0 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                        <DownloadIcon className="w-4 h-4" />
                        {t('documents_issue_and_download')}
                    </button>
                </div>
             ))}
        </div>
    )
}

export const StudentDocumentsPage: React.FC = () => {
    const { t } = useI18n();
    const [activeTab, setActiveTab] = useState<Tab>('personal');
    
    const tabs: {id: Tab, labelKey: string}[] = [
        {id: 'personal', labelKey: 'documents_tab_personal'},
        {id: 'id_card', labelKey: 'documents_tab_id_card'},
        {id: 'enrollment', labelKey: 'documents_tab_enrollment'},
        {id: 'other', labelKey: 'documents_tab_other'},
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'personal': return <PersonalDocumentsTab />;
            case 'id_card': return <StudentIdCardTab />;
            case 'enrollment': return <EnrollmentStatementTab />;
            case 'other': return <OtherStatementsTab />;
            default: return null;
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_student_documents')}</h1>

            <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex flex-wrap space-x-8" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-semibold text-base ${activeTab === tab.id ? 'border-ift-light-green text-ift-dark-blue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            {t(tab.labelKey)}
                        </button>
                    ))}
                </nav>
            </div>

            {renderContent()}
        </div>
    );
};