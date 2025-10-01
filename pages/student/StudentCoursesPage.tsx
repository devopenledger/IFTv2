import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_ENROLLED_COURSES, MOCK_ADMIN_COURSES, MOCK_COURSES, MOCK_SINGLE_SUBJECTS } from '../../constants';
import { Course, Locale, SingleSubject } from '../../types';
import { BookOpenIcon, CertificateIcon } from '../../components/ui/Icons';


const EnrolledCourseCard: React.FC<{ course: typeof MOCK_ENROLLED_COURSES[0] }> = ({ course }) => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: Locale }>();
    const isCompleted = course.status === 'completed';

    const courseDetails = MOCK_ADMIN_COURSES.find(c => c.id === course.id);
    const allLessons = courseDetails ? courseDetails.modules.flatMap(m => m.lessons) : [];

    const totalLessons = allLessons.length;
    const completedLessons = allLessons.filter(l => l.completed).length;
    const lessonsLeft = totalLessons - completedLessons;
    const nextLesson = allLessons.find(l => !l.completed);

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-ift-dark-blue">{t(course.titleKey)}</h3>
                
                <div className="mt-4">
                     <div className="flex justify-between mb-1">
                        <span className="text-xs font-medium text-gray-500">{t('student_dashboard_progress')}</span>
                        <span className="text-sm font-semibold text-ift-dark-blue">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-ift-light-green h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 flex-grow">
                    {isCompleted ? (
                        <div className="flex flex-col items-center text-center">
                            <CertificateIcon className="w-16 h-16 text-yellow-400 mb-2"/>
                            <p className="font-semibold">Certificado Concluído!</p>
                        </div>
                    ) : (
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">{t('student_courses_lessons_left', { count: lessonsLeft })}</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                                <span className="text-gray-500">{t('student_courses_next_up')}:</span>
                                <span className="text-ift-dark-blue text-right">{nextLesson?.title}</span>
                            </div>
                        </div>
                    )}
                </div>

                 <div className="mt-6">
                    <Link 
                        to={`/${locale}/student/${isCompleted ? 'certificate' : 'classroom'}`} 
                        className={`w-full text-center block px-4 py-3 text-base font-semibold rounded-md transition-colors ${
                            isCompleted 
                            ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                            : 'bg-ift-light-green text-black hover:opacity-90'
                        }`}
                    >
                        {isCompleted ? t('student_courses_view_certificate') : t('student_courses_go_to_classroom')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

const AvailableCourseCard: React.FC<{ course: Omit<Course, 'modules'> }> = ({ course }) => {
    const { t } = useI18n();
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-ift-dark-blue">{t(course.titleKey)}</h3>
                <p className="mt-2 text-gray-600 flex-grow text-sm">{t(course.descriptionKey)}</p>
                <div className="mt-4 text-xs text-gray-500">
                    <p><strong>{t('course_duration')}</strong>{t(course.durationKey)}</p>
                </div>
                 <div className="mt-6">
                    <button className="w-full text-center block px-4 py-3 text-base font-semibold rounded-md transition-colors bg-ift-light-green text-black hover:opacity-90">
                        {t('course_learn_more')}
                    </button>
                </div>
            </div>
        </div>
    );
};

const SingleSubjectCard: React.FC<{ subject: SingleSubject }> = ({ subject }) => {
    const { t } = useI18n();
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                    <img src={subject.partner.logo} alt={subject.partner.name} className="h-12 w-12 object-contain"/>
                    <div>
                        <p className="text-xs text-gray-500">Equivalência aceita por:</p>
                        <p className="font-semibold">{subject.partner.name}</p>
                    </div>
                </div>
                <h3 className="text-lg font-bold text-ift-dark-blue leading-tight">{t(subject.titleKey)}</h3>
                <p className="mt-2 text-gray-600 flex-grow text-sm">{t(subject.descriptionKey)}</p>
                <div className="mt-6">
                    <button className="w-full text-center block px-4 py-3 text-base font-semibold rounded-md transition-colors bg-ift-light-green text-black hover:opacity-90">
                        {t('course_enroll')}
                    </button>
                </div>
            </div>
        </div>
    );
}

type Tab = 'inprogress' | 'completed' | 'available' | 'single_subjects';

export const StudentCoursesPage: React.FC = () => {
    const { t } = useI18n();
    const [activeTab, setActiveTab] = useState<Tab>('inprogress');

    const enrolledCourses = MOCK_ENROLLED_COURSES.filter(c => c.status === activeTab);

    const renderContent = () => {
        switch (activeTab) {
            case 'inprogress':
            case 'completed':
                if (enrolledCourses.length > 0) {
                    return (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {enrolledCourses.map(course => (
                                <EnrolledCourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    );
                }
                return (
                    <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpenIcon className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 font-medium">
                            {activeTab === 'inprogress' ? t('student_courses_no_inprogress') : t('student_courses_no_completed')}
                        </p>
                    </div>
                );
            case 'available':
                 return (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {MOCK_COURSES.map(course => (
                            <AvailableCourseCard key={course.id} course={course} />
                        ))}
                    </div>
                );
            case 'single_subjects':
                return (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {MOCK_SINGLE_SUBJECTS.map(subject => (
                            <SingleSubjectCard key={subject.id} subject={subject} />
                        ))}
                    </div>
                );
            default:
                return null;
        }
    }
    
    const tabs: {id: Tab, labelKey: string}[] = [
        {id: 'inprogress', labelKey: 'student_courses_inprogress'},
        {id: 'completed', labelKey: 'student_courses_completed'},
        {id: 'available', labelKey: 'student_courses_available'},
        {id: 'single_subjects', labelKey: 'student_courses_single_subjects'},
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('student_courses_title')}</h1>
            
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