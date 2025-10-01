
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_TEACHER_COURSES, MOCK_STUDENTS } from '../../constants';

type Tab = 'students' | 'grades' | 'content' | 'settings';

const StudentRoster: React.FC = () => {
    const { t } = useI18n();
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">{t('teacher_course_details_student_name')}</th>
                        <th scope="col" className="px-6 py-3">{t('teacher_course_details_joined_date')}</th>
                        <th scope="col" className="px-6 py-3">{t('teacher_course_details_progress')}</th>
                        <th scope="col" className="px-6 py-3">{t('teacher_course_details_grade')}</th>
                    </tr>
                </thead>
                <tbody>
                    {MOCK_STUDENTS.map(student => (
                        <tr key={student.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{student.name}</td>
                            <td className="px-6 py-4">{student.joined}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-ift-light-green h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
                                    </div>
                                    <span>{student.progress}%</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">{student.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export const TeacherCourseDetailsPage: React.FC = () => {
    const { t } = useI18n();
    const { courseId } = useParams<{ courseId: string }>();
    const course = MOCK_TEACHER_COURSES.find(c => c.id.toString() === courseId);
    const [activeTab, setActiveTab] = useState<Tab>('students');

    if (!course) {
        return <div>Course not found</div>;
    }

    const tabs: { id: Tab, name: string }[] = [
        { id: 'students', name: t('teacher_course_details_students') },
        { id: 'grades', name: t('teacher_course_details_grades') },
        { id: 'content', name: t('teacher_course_details_content') },
        { id: 'settings', name: t('teacher_course_details_settings') },
    ]

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-2">{t(course.titleKey)}</h1>
            <p className="text-gray-600 mb-6">{t('teacher_course_details_title')}</p>
            
            <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                {activeTab === 'students' && <StudentRoster />}
                {activeTab === 'grades' && <div className="p-6">Grades Management Placeholder</div>}
                {activeTab === 'content' && <div className="p-6">Content Management Placeholder</div>}
                {activeTab === 'settings' && <div className="p-6">Course Settings Placeholder</div>}
            </div>
        </div>
    );
};
