import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_STUDENT_CERTIFICATES } from '../../constants';
import { SearchIcon, TrashIcon, ExternalLinkIcon } from '../../components/ui/Icons';

export const ManageStudentCertificatesPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_student_certs')}</h1>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="mb-4 relative">
                    <input
                        type="text"
                        placeholder={t('admin_search')}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-gray-400" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">{t('admin_certs_student')}</th>
                                <th scope="col" className="px-6 py-3">{t('admin_certs_course')}</th>
                                <th scope="col" className="px-6 py-3">{t('admin_certs_issue_date')}</th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_STUDENT_CERTIFICATES.map((cert) => (
                                <tr key={cert.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{cert.id}</td>
                                    <td className="px-6 py-4">{cert.student}</td>
                                    <td className="px-6 py-4">{cert.course}</td>
                                    <td className="px-6 py-4">{cert.issueDate}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end items-center gap-4">
                                            <button className="text-blue-600 hover:underline flex items-center gap-1">
                                                <ExternalLinkIcon className="w-4 h-4" />{t('admin_view')}
                                            </button>
                                            <button className="text-red-600 hover:underline flex items-center gap-1">
                                                <TrashIcon className="w-4 h-4" />{t('admin_certs_revoke')}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};