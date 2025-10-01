
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_TEACHER_COURSES } from '../../constants';
import { UsersIcon } from '../../components/ui/Icons';

const TeacherCourseCard: React.FC<{ course: typeof MOCK_TEACHER_COURSES[0] }> = ({ course }) => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-ift-dark-blue">{t(course.titleKey)}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-grow">{t(course.descriptionKey)}</p>
                
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <UsersIcon className="w-5 h-5" />
                    <span>{course.students} {t('teacher_dashboard_students')}</span>
                </div>

                <div className="mt-4">
                     <div className="flex justify-between mb-1">
                        <span className="text-xs font-medium text-gray-500">{t('teacher_dashboard_avg_progress')}</span>
                        <span className="text-xs font-medium text-gray-700">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-ift-light-green h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                    </div>
                </div>
                 <div className="mt-6">
                    <Link 
                        to={`/${locale}/teacher/courses/${course.id}/details`} 
                        className="w-full text-center block px-4 py-2 text-sm font-semibold rounded-md transition-colors bg-ift-light-green text-black hover:opacity-90"
                    >
                        {t('teacher_courses_manage_students')}
                    </Link>
                </div>
            </div>
        </div>
    );
};


export const TeacherCoursesPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_teacher_courses')}</h1>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {MOCK_TEACHER_COURSES.map(course => (
                    <TeacherCourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};
