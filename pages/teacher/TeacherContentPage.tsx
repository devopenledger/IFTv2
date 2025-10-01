
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_CONTENT_LIBRARY } from '../../constants';
import { UploadIcon, TrashIcon, DownloadIcon, PlayCircleIcon, FileTextIcon } from '../../components/ui/Icons';

export const TeacherContentPage: React.FC = () => {
    const { t } = useI18n();

    const getIconForType = (type: string) => {
        if (type === 'video') return <PlayCircleIcon className="w-5 h-5 text-purple-600" />;
        if (type === 'document') return <FileTextIcon className="w-5 h-5 text-blue-600" />;
        return <FileTextIcon className="w-5 h-5 text-gray-600" />;
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_teacher_content')}</h1>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    <UploadIcon className="w-4 h-4" />
                    {t('teacher_content_upload_new')}
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">{t('teacher_content_table_name')}</th>
                            <th scope="col" className="px-6 py-3">{t('teacher_content_table_type')}</th>
                            <th scope="col" className="px-6 py-3">{t('teacher_content_table_size')}</th>
                            <th scope="col" className="px-6 py-3">{t('teacher_content_table_uploaded')}</th>
                            <th scope="col" className="px-6 py-3 text-right">{t('teacher_content_table_actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_CONTENT_LIBRARY.map((item) => (
                            <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2">
                                    {getIconForType(item.type)}
                                    {item.name}
                                </th>
                                <td className="px-6 py-4 capitalize">{item.type}</td>
                                <td className="px-6 py-4">{item.size}</td>
                                <td className="px-6 py-4">{item.uploaded}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end items-center gap-4">
                                        <button className="font-medium text-green-600 hover:underline">
                                           <DownloadIcon className="w-5 h-5" />
                                        </button>
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
    );
};
