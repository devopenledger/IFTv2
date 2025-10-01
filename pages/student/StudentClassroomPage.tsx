
import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_ADMIN_COURSES } from '../../constants';
import * as Icons from '../../components/ui/Icons';
import { Lesson } from '../../types';
import { AITutorModal } from '../../components/student/AITutorModal';


const LessonItem: React.FC<{ lesson: Lesson, isCurrent: boolean, onSelect: () => void }> = ({ lesson, isCurrent, onSelect }) => {
    const Icon = lesson.type === 'video' ? Icons.PlayCircleIcon : Icons.FileTextIcon;
    
    return (
        <button onClick={onSelect} className={`w-full p-3 flex items-center justify-between rounded-md text-left ${isCurrent ? 'bg-ift-light-green/20' : 'hover:bg-gray-100'}`}>
            <div className="flex items-center gap-3">
                <Icon className={`w-5 h-5 flex-shrink-0 ${isCurrent ? 'text-green-600' : 'text-gray-400'}`} />
                <div>
                    <p className={`font-medium ${isCurrent ? 'text-ift-dark-blue' : 'text-gray-700'}`}>{lesson.title}</p>
                    <span className="text-xs text-gray-500">{lesson.duration}</span>
                </div>
            </div>
            {lesson.completed ? (
                <Icons.CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
            ) : (
                <Icons.LockIcon className="w-5 h-5 text-gray-300 flex-shrink-0" />
            )}
        </button>
    );
};

export const StudentClassroomPage: React.FC = () => {
    const { t } = useI18n();
    const course = MOCK_ADMIN_COURSES[0];
    const firstLesson = course.modules[0]?.lessons[0];

    const [selectedLesson, setSelectedLesson] = useState<Lesson | undefined>(firstLesson);
    const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => {
        const completed = new Set<string>();
        course.modules.forEach(m => m.lessons.forEach(l => {
            if (l.completed) completed.add(l.id);
        }));
        return completed;
    });
    const [isTutorModalOpen, setIsTutorModalOpen] = useState(false);

    const handleMarkAsComplete = (lessonId: string) => {
        setCompletedLessons(prev => new Set(prev).add(lessonId));
    };

    const isCurrentLessonCompleted = selectedLesson ? completedLessons.has(selectedLesson.id) : false;

    return (
        <div>
             {selectedLesson && (
                <AITutorModal 
                    isOpen={isTutorModalOpen}
                    onClose={() => setIsTutorModalOpen(false)}
                    lessonTitle={selectedLesson.title}
                    lessonContent={selectedLesson.content}
                />
            )}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-2">
                 <h1 className="text-3xl font-bold text-ift-dark-blue">{t(course.titleKey)}</h1>
                 <button onClick={() => setIsTutorModalOpen(true)} className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-dark-blue rounded-md hover:opacity-90 transition-opacity">
                    <Icons.BotIcon className="w-5 h-5" />
                    {t('ai_tutor_ask_button')}
                </button>
            </div>
            <p className="text-gray-600 mb-6">Continue de onde você parou.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Viewer */}
                <div className="lg:col-span-2 space-y-6">
                    {selectedLesson ? (
                        <>
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="aspect-video bg-black rounded-t-lg">
                                    <iframe 
                                        className="w-full h-full rounded-t-lg"
                                        src={selectedLesson.videoUrl}
                                        title={selectedLesson.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen>
                                    </iframe>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold">{selectedLesson.title}</h2>
                                </div>
                            </div>
                             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <h3 className="text-xl font-bold mb-4">{t('classroom_lesson_content')}</h3>
                                <div className="prose max-w-none text-gray-700">
                                    <p>{selectedLesson.content}</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <h3 className="text-xl font-bold mb-4">{t('classroom_supplementary_materials')}</h3>
                                {selectedLesson.materials.length > 0 ? (
                                    <ul className="space-y-3">
                                        {selectedLesson.materials.map(material => (
                                            <li key={material.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                                <div className="flex items-center gap-3">
                                                    <Icons.FileTextIcon className="w-5 h-5 text-gray-500"/>
                                                    <span className="font-medium">{material.title}</span>
                                                </div>
                                                <a href={material.url} download className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-800">
                                                    <Icons.FileDownIcon className="w-4 h-4" />
                                                    {t('classroom_download_material')}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                ) : <p className="text-gray-500">Nenhum material complementar para esta aula.</p>}
                            </div>

                             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-right">
                                {isCurrentLessonCompleted ? (
                                     <span className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-green-700 bg-green-100 rounded-md">
                                        <Icons.CheckCircleIcon className="w-5 h-5"/>
                                        {t('classroom_completed')}
                                    </span>
                                ) : (
                                    <button onClick={() => handleMarkAsComplete(selectedLesson.id)} className="px-6 py-2 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                                        {t('classroom_mark_as_complete')}
                                    </button>
                                )}
                            </div>
                        </>
                    ) : <div className="text-center p-12 bg-white rounded-lg">Selecione uma aula para começar.</div>}
                </div>

                {/* Course Content Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 h-full">
                        <h3 className="text-xl font-bold mb-4 px-2">{t('classroom_course_content')}</h3>
                        <div className="space-y-4">
                            {course.modules.map((module) => (
                                <div key={module.id}>
                                    <h4 className="font-semibold text-gray-800 mb-2 px-2">{module.title}</h4>
                                    <div className="space-y-1">
                                        {module.lessons.map(lesson => (
                                            <LessonItem 
                                                key={lesson.id} 
                                                lesson={{...lesson, completed: completedLessons.has(lesson.id)}}
                                                isCurrent={selectedLesson?.id === lesson.id}
                                                onSelect={() => setSelectedLesson(lesson)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
