
import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_ENROLLED_COURSES, MOCK_SINGLE_SUBJECTS } from '../../constants';
import { DownloadIcon, CertificateIcon, BookOpenIcon } from '../../components/ui/Icons';
import { SingleSubject } from '../../types';

type Course = typeof MOCK_ENROLLED_COURSES[0];
type Tab = 'courses' | 'subjects';

const CompletedCourseCard: React.FC<{ course: Course }> = ({ course }) => {
    const { t } = useI18n();
    
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group">
            <div className="p-6">
                <h3 className="text-lg font-bold text-ift-dark-blue">{t(course.titleKey)}</h3>
                <p className="text-sm text-gray-500">{t('certificate_completed_on')}: 2024-05-15</p>
            </div>
            <div className="p-4 bg-gray-50 border-t grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                    <DownloadIcon className="w-4 h-4" />
                    {t('certificate_download_diploma')}
                </button>
                 <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                    <DownloadIcon className="w-4 h-4" />
                    {t('certificate_download_transcript')}
                </button>
                 <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                    <DownloadIcon className="w-4 h-4" />
                    {t('certificate_download_syllabus')}
                </button>
            </div>
        </div>
    );
};

const CompletedSubjectCard: React.FC<{ subject: SingleSubject }> = ({ subject }) => {
    const { t } = useI18n();
    
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group">
            <div className="p-6">
                <h3 className="text-lg font-bold text-ift-dark-blue">{t(subject.titleKey)}</h3>
                <p className="text-sm text-gray-500">{t('certificate_completed_on')}: 2024-06-10</p>
            </div>
            <div className="p-4 bg-gray-50 border-t grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                    <DownloadIcon className="w-4 h-4" />
                    {t('certificate_download_certificate')}
                </button>
                 <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                    <DownloadIcon className="w-4 h-4" />
                    {t('certificate_download_transcript')}
                </button>
                 <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                    <DownloadIcon className="w-4 h-4" />
                    {t('certificate_download_syllabus')}
                </button>
            </div>
        </div>
    );
};

export const StudentCertificatePage: React.FC = () => {
    const { t } = useI18n();
    const [activeTab, setActiveTab] = useState<Tab>('courses');
    
    const completedCourses = MOCK_ENROLLED_COURSES.filter(c => c.status === 'completed');
    const completedSubjects = MOCK_SINGLE_SUBJECTS; // Assuming all are completed for prototype

    const tabs: {id: Tab, labelKey: string}[] = [
        {id: 'courses', labelKey: 'certificate_tab_courses'},
        {id: 'subjects', labelKey: 'certificate_tab_subjects'},
    ];

    const renderContent = () => {
        if (activeTab === 'courses') {
            if (completedCourses.length === 0) {
                return (
                    <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                         <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CertificateIcon className="w-8 h-8 text-gray-400" />
                        </div>
                        <p>{t('certificate_no_completed_courses')}</p>
                    </div>
                )
            }
            return (
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                    {completedCourses.map(course => <CompletedCourseCard key={course.id} course={course} />)}
                </div>
            )
        }

        if (activeTab === 'subjects') {
             if (completedSubjects.length === 0) {
                return (
                    <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpenIcon className="w-8 h-8 text-gray-400" />
                        </div>
                        <p>{t('certificate_no_completed_subjects')}</p>
                    </div>
                )
            }
            return (
                 <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                    {completedSubjects.map(subject => <CompletedSubjectCard key={subject.id} subject={subject} />)}
                </div>
            )
        }
    };


    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_student_certificate')}</h1>
            
             <div className="border-b border-gray-200 mb-8">
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
            
            {renderContent()}
        </div>
    );
};
