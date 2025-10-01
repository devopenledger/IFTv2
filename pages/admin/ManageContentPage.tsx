import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_ADMIN_CONTENT } from '../../constants';
import { SearchIcon, EditIcon, TrashIcon, FilePlusIcon, PlayCircleIcon, FileTextIcon } from '../../components/ui/Icons';

export const ManageContentPage: React.FC = () => {
    const { t } = useI18n();
    
    const getIconForType = (type: string) => {
        if (type === 'video') return <PlayCircleIcon className="w-5 h-5 text-purple-600" />;
        if (type === 'document') return <FileTextIcon className="w-5 h-5 text-blue-600" />;
        return <FileTextIcon className="w-5 h-5 text-gray-600" />;
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_content')}</h1>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    <FilePlusIcon className="w-4 h-4" />
                    {t('admin_add_new')}
                </button>
            </div>

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
                                <th scope="col" className="px-6 py-3">Nome do Arquivo</th>
                                <th scope="col" className="px-6 py-3">{t('admin_content_type')}</th>
                                <th scope="col" className="px-6 py-3">{t('admin_content_size')}</th>
                                <th scope="col" className="px-6 py-3">{t('admin_content_uploaded')}</th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_ADMIN_CONTENT.map((item) => (
                                <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2">
                                        {getIconForType(item.type)}
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 capitalize">{item.type}</td>
                                    <td className="px-6 py-4">{item.size}</td>
                                    <td className="px-6 py-4">{item.uploaded}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end items-center gap-4">
                                            <button className="text-blue-600 hover:underline"><EditIcon className="w-5 h-5" /></button>
                                            <button className="text-red-600 hover:underline"><TrashIcon className="w-5 h-5" /></button>
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