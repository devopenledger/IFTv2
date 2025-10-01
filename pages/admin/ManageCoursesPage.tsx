
import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { SearchIcon, EditIcon, TrashIcon, BookOpenIcon } from '../../components/ui/Icons';
import { Link, useParams } from 'react-router-dom';
import { MOCK_ADMIN_COURSES, MOCK_SINGLE_SUBJECTS } from '../../constants';
import { Course, SingleSubject } from '../../types';

type Tab = 'courses' | 'singleSubjects';

const CoursesTable: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();

    const getStatusBadge = (status: string) => (
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
            {t(`admin_status_${status}`)}
        </span>
    );

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Título do Curso</th>
                        <th scope="col" className="px-6 py-3">{t('admin_courses_enrolled')}</th>
                        <th scope="col" className="px-6 py-3">Preço</th>
                        <th scope="col" className="px-6 py-3">{t('admin_courses_status')}</th>
                        <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                    </tr>
                </thead>
                <tbody>
                    {MOCK_ADMIN_COURSES.map((course) => (
                        <tr key={course.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{t(course.titleKey) || course.titleKey}</td>
                            <td className="px-6 py-4">{course.students}</td>
                            <td className="px-6 py-4">R$ {course.price.toFixed(2).replace('.', ',')}</td>
                            <td className="px-6 py-4">{getStatusBadge(course.status)}</td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end items-center gap-4">
                                    <Link to={`/${locale}/admin/manage-courses/${course.id}/edit`} className="text-blue-600 hover:underline"><EditIcon className="w-5 h-5" /></Link>
                                    <button onClick={() => alert('Delete action')} className="text-red-600 hover:underline"><TrashIcon className="w-5 h-5" /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const SingleSubjectsTable: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Título da Disciplina</th>
                        <th scope="col" className="px-6 py-3">{t('admin_subjects_partner')}</th>
                        <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                    </tr>
                </thead>
                <tbody>
                    {MOCK_SINGLE_SUBJECTS.map((subject) => (
                        <tr key={subject.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{t(subject.titleKey)}</td>
                            <td className="px-6 py-4">{subject.partner.name}</td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end items-center gap-4">
                                     <Link to={`/${locale}/admin/manage-single-subjects/${subject.id}/edit`} className="text-blue-600 hover:underline"><EditIcon className="w-5 h-5" /></Link>
                                    <button onClick={() => alert('Delete action')} className="text-red-600 hover:underline"><TrashIcon className="w-5 h-5" /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export const ManageCoursesPage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();
    const [activeTab, setActiveTab] = useState<Tab>('courses');
    
    const tabs: {id: Tab, labelKey: string}[] = [
        {id: 'courses', labelKey: 'admin_courses_tab_courses'},
        {id: 'singleSubjects', labelKey: 'admin_courses_tab_single_subjects'},
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_courses')}</h1>
                {activeTab === 'courses' ? (
                     <Link 
                        to={`/${locale}/admin/manage-courses/new/edit`}
                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity"
                    >
                        <BookOpenIcon className="w-4 h-4" />
                        {t('admin_courses_add_new_course')}
                    </Link>
                ) : (
                    <Link 
                        to={`/${locale}/admin/manage-single-subjects/new/edit`}
                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity"
                    >
                        <BookOpenIcon className="w-4 h-4" />
                        {t('admin_courses_add_new_subject')}
                    </Link>
                )}
            </div>
            
             <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
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

                {activeTab === 'courses' ? <CoursesTable /> : <SingleSubjectsTable />}
                
            </div>
        </div>
    );
};
