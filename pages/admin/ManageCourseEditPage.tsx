
import React, { useState, useEffect } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { useParams, useNavigate } from 'react-router-dom';
import { Course, Module, Lesson, SupplementaryMaterial } from '../../types';
import * as Icons from '../../components/ui/Icons';

interface ManageCourseEditPageProps {
    courses: Course[];
    setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}

const getNewCourseTemplate = (newId: number): Course => ({
    id: newId,
    titleKey: '',
    descriptionKey: '',
    targetAudienceKey: '',
    durationKey: '',
    priceKey: '',
    price: 0,
    status: 'planning',
    modules: [],
});

const InputField: React.FC<{ label: string; id: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ label, id, value, onChange }) => (
    <div>
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
        <input type="text" id={id} name={id} value={value} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" />
    </div>
);

const TextAreaField: React.FC<{ label: string; id: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; rows?: number }> = ({ label, id, value, onChange, rows=4 }) => (
     <div>
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
        <textarea id={id} name={id} rows={rows} value={value} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"></textarea>
    </div>
);

export const ManageCourseEditPage: React.FC<ManageCourseEditPageProps> = ({ courses, setCourses }) => {
    const { t } = useI18n();
    const { courseId, locale } = useParams<{ courseId: string, locale: string }>();
    const navigate = useNavigate();
    const isNew = courseId === 'new';

    const [course, setCourse] = useState<Course | null>(null);

    useEffect(() => {
        if (isNew) {
            const newId = Math.max(...courses.map(c => c.id), 0) + 1;
            setCourse(getNewCourseTemplate(newId));
        } else {
            const foundCourse = courses.find(c => c.id.toString() === courseId);
            setCourse(foundCourse ? JSON.parse(JSON.stringify(foundCourse)) : null);
        }
    }, [courseId, courses, isNew]);

    const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCourse(prev => prev ? { ...prev, [name]: name === 'price' ? parseFloat(value) || 0 : value } : null);
    };

    const handleModuleChange = (moduleIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newModules = [...course!.modules];
        newModules[moduleIndex] = { ...newModules[moduleIndex], [name]: value };
        setCourse(prev => prev ? { ...prev, modules: newModules } : null);
    };
    
    const handleLessonChange = (moduleIndex: number, lessonIndex: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const newModules = [...course!.modules];
        newModules[moduleIndex].lessons[lessonIndex] = { ...newModules[moduleIndex].lessons[lessonIndex], [name]: value };
        setCourse(prev => prev ? { ...prev, modules: newModules } : null);
    };

    const handleMaterialChange = (moduleIndex: number, lessonIndex: number, materialIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newModules = [...course!.modules];
        newModules[moduleIndex].lessons[lessonIndex].materials[materialIndex] = { ...newModules[moduleIndex].lessons[lessonIndex].materials[materialIndex], [name]: value };
        setCourse(prev => prev ? { ...prev, modules: newModules } : null);
    }
    
    // --- ADD/DELETE HANDLERS ---
    const addModule = () => {
        const newModule: Module = { id: `m${Date.now()}`, title: 'Novo Módulo', lessons: [] };
        setCourse(prev => prev ? { ...prev, modules: [...prev.modules, newModule] } : null);
    };

    const deleteModule = (moduleIndex: number) => {
        setCourse(prev => prev ? { ...prev, modules: prev.modules.filter((_, i) => i !== moduleIndex) } : null);
    };

    const addLesson = (moduleIndex: number) => {
        const newLesson: Lesson = { id: `l${Date.now()}`, title: 'Nova Aula', type: 'video', duration: '10 min', completed: false, videoUrl: '', pdfUrl: '', content: '', materials: [] };
        const newModules = [...course!.modules];
        newModules[moduleIndex].lessons.push(newLesson);
        setCourse(prev => prev ? { ...prev, modules: newModules } : null);
    };
    
    const deleteLesson = (moduleIndex: number, lessonIndex: number) => {
        const newModules = [...course!.modules];
        newModules[moduleIndex].lessons = newModules[moduleIndex].lessons.filter((_, i) => i !== lessonIndex);
        setCourse(prev => prev ? { ...prev, modules: newModules } : null);
    };

    const addMaterial = (moduleIndex: number, lessonIndex: number) => {
        const newMaterial: SupplementaryMaterial = { id: `sm${Date.now()}`, title: 'Novo Material', url: '' };
        const newModules = [...course!.modules];
        newModules[moduleIndex].lessons[lessonIndex].materials.push(newMaterial);
        setCourse(prev => prev ? { ...prev, modules: newModules } : null);
    }

    const deleteMaterial = (moduleIndex: number, lessonIndex: number, materialIndex: number) => {
        const newModules = [...course!.modules];
        newModules[moduleIndex].lessons[lessonIndex].materials = newModules[moduleIndex].lessons[lessonIndex].materials.filter((_, i) => i !== materialIndex);
        setCourse(prev => prev ? { ...prev, modules: newModules } : null);
    }

    const handleSave = () => {
        if (!course) return;
        if (isNew) {
            setCourses(prev => [...prev, course]);
        } else {
            setCourses(prev => prev.map(c => c.id === course.id ? course : c));
        }
        navigate(`/${locale}/admin/manage-courses`);
    };

    if (!course) return <div>{isNew ? 'Creating new course...' : 'Loading course...'}</div>;

    const title = isNew ? "Criar Novo Curso" : `${t('admin_edit')} ${t(course.titleKey) || course.titleKey}`;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{title}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <h2 className="text-xl font-bold">Informações Básicas</h2>
                <InputField label="Título do Curso (Chave)" id="titleKey" value={course.titleKey} onChange={handleCourseChange} />
                <TextAreaField label="Descrição (Chave)" id="descriptionKey" value={course.descriptionKey} onChange={handleCourseChange} />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Público-Alvo (Chave)" id="targetAudienceKey" value={course.targetAudienceKey} onChange={handleCourseChange} />
                    <InputField label="Duração (Chave)" id="durationKey" value={course.durationKey} onChange={handleCourseChange} />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Preço (R$)" id="price" value={course.price.toString()} onChange={handleCourseChange} />
                    <div>
                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <select id="status" name="status" value={course.status} onChange={handleCourseChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                            <option value="active">Ativo</option>
                            <option value="inactive">Inativo</option>
                            <option value="planning">Planejamento</option>
                        </select>
                    </div>
                 </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Conteúdo do Curso</h2>
                    <button onClick={addModule} className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-800">
                        <Icons.PlusCircleIcon className="w-5 h-5" /> {t('admin_course_edit_add_module')}
                    </button>
                </div>
                
                {course.modules.map((module, moduleIndex) => (
                    <div key={module.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
                        <div className="flex items-center gap-2">
                            <input type="text" name="title" value={module.title} onChange={(e) => handleModuleChange(moduleIndex, e)} className="flex-grow font-semibold text-lg border-b p-1" />
                            <button onClick={() => deleteModule(moduleIndex)} className="text-red-500 hover:text-red-700"><Icons.TrashIcon className="w-5 h-5" /></button>
                        </div>
                        
                        {module.lessons.map((lesson, lessonIndex) => (
                             <div key={lesson.id} className="border-t pt-4 mt-4 ml-4 space-y-3">
                                 <div className="flex items-center gap-2">
                                     <input type="text" name="title" value={lesson.title} onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, e)} className="flex-grow font-medium border-b p-1" />
                                     <button onClick={() => deleteLesson(moduleIndex, lessonIndex)} className="text-red-500 hover:text-red-700"><Icons.TrashIcon className="w-4 h-4" /></button>
                                 </div>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                     <InputField label={t('admin_course_edit_video_url')} id="videoUrl" value={lesson.videoUrl} onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, e)} />
                                     <InputField label={t('admin_course_edit_pdf_url')} id="pdfUrl" value={lesson.pdfUrl} onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, e)} />
                                 </div>
                                 <TextAreaField label={t('admin_course_edit_lesson_content')} id="content" value={lesson.content} onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, e)} />
                                 
                                 <div>
                                     <h4 className="text-sm font-semibold mb-2">{t('admin_course_edit_supplementary_materials')}</h4>
                                     <div className="space-y-2">
                                         {lesson.materials.map((material, materialIndex) => (
                                             <div key={material.id} className="flex items-center gap-2">
                                                 <input type="text" name="title" placeholder={t('admin_course_edit_material_title')} value={material.title} onChange={(e) => handleMaterialChange(moduleIndex, lessonIndex, materialIndex, e)} className="w-1/2 bg-gray-50 border border-gray-300 text-sm rounded-lg p-2" />
                                                 <input type="text" name="url" placeholder={t('admin_course_edit_material_url')} value={material.url} onChange={(e) => handleMaterialChange(moduleIndex, lessonIndex, materialIndex, e)} className="w-1/2 bg-gray-50 border border-gray-300 text-sm rounded-lg p-2" />
                                                 <button onClick={() => deleteMaterial(moduleIndex, lessonIndex, materialIndex)} className="text-red-500 hover:text-red-700"><Icons.TrashIcon className="w-4 h-4" /></button>
                                             </div>
                                         ))}
                                     </div>
                                     <button onClick={() => addMaterial(moduleIndex, lessonIndex)} className="mt-2 text-xs font-semibold text-green-600 hover:text-green-800 flex items-center gap-1">
                                        <Icons.PlusCircleIcon className="w-4 h-4" /> {t('admin_course_edit_add_material')}
                                    </button>
                                 </div>
                             </div>
                        ))}
                         <button onClick={() => addLesson(moduleIndex)} className="mt-4 text-sm font-semibold text-green-600 hover:text-green-800 flex items-center gap-1">
                            <Icons.PlusCircleIcon className="w-5 h-5" /> {t('admin_course_edit_add_lesson')}
                        </button>
                    </div>
                ))}
            </div>

            <div className="text-right">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    {t('admin_course_edit_save')}
                </button>
            </div>
        </div>
    );
};