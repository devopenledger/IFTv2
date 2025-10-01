
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_TEACHER_COURSES } from '../../constants';
import { UsersIcon, BarChartIcon } from '../../components/ui/Icons';

const TeacherCourseCard: React.FC<{ course: typeof MOCK_TEACHER_COURSES[0] }> = ({ course }) => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();

    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col gap-4">
            <h4 className="font-bold text-lg text-ift-dark-blue">{t(course.titleKey)}</h4>
            <div className="flex justify-around text-center">
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <UsersIcon className="w-5 h-5 text-gray-500" />
                        <span className="text-2xl font-bold">{course.students}</span>
                    </div>
                    <p className="text-sm text-gray-500">{t('teacher_dashboard_students')}</p>
                </div>
                <div>
                    <div className="flex items-center justify-center gap-2">
                         <BarChartIcon className="w-5 h-5 text-gray-500" />
                        <span className="text-2xl font-bold">{course.progress}%</span>
                    </div>
                    <p className="text-sm text-gray-500">{t('teacher_dashboard_avg_progress')}</p>
                </div>
            </div>
            <Link 
                to={`/${locale}/teacher/courses/${course.id}/details`} 
                className="w-full text-center block px-4 py-2 text-sm font-semibold rounded-md transition-colors bg-ift-light-green text-black hover:opacity-90 mt-2">
                {t('teacher_dashboard_manage_course')}
            </Link>
        </div>
    );
}

export const TeacherDashboardPage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('teacher_dashboard_welcome')}</h1>
                <p className="mt-1 text-gray-600">{t('teacher_dashboard_subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                     <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold">{t('teacher_dashboard_my_courses')}</h3>
                        <Link to={`/${locale}/teacher/courses`} className="text-sm font-semibold text-green-600 hover:text-green-800">
                            {t('teacher_dashboard_view_all_courses')}
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {MOCK_TEACHER_COURSES.map(course => (
                            <TeacherCourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                         <h3 className="text-xl font-bold mb-4">{t('teacher_dashboard_student_engagement')}</h3>
                         <div className="text-center text-gray-500 py-8">
                            <p>Engagement chart placeholder</p>
                         </div>
                    </div>
                     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                         <h3 className="text-xl font-bold mb-4">{t('teacher_dashboard_quick_actions')}</h3>
                         <div className="space-y-3">
                             <button className="w-full text-left p-3 bg-gray-100 hover:bg-gray-200 rounded-md font-medium text-gray-700">{t('teacher_dashboard_create_announcement')}</button>
                              <button className="w-full text-left p-3 bg-gray-100 hover:bg-gray-200 rounded-md font-medium text-gray-700">{t('teacher_dashboard_schedule_class')}</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
