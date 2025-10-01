
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_SCHOOL_TEACHERS } from '../../constants';
import { ExternalLinkIcon } from '../../components/ui/Icons';

export const SchoolTeachersPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_school_teachers')}</h1>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">{t('school_teachers_table_name')}</th>
                            <th scope="col" className="px-6 py-3">{t('school_teachers_table_course')}</th>
                            <th scope="col" className="px-6 py-3">{t('school_teachers_table_students')}</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_SCHOOL_TEACHERS.map((teacher) => (
                            <tr key={teacher.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{teacher.name}</td>
                                <td className="px-6 py-4">{teacher.course}</td>
                                <td className="px-6 py-4">{teacher.students}</td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="flex items-center justify-end gap-1 font-medium text-green-600 hover:underline">
                                        <ExternalLinkIcon className="w-4 h-4" />
                                        {t('school_teachers_view_profile')}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
