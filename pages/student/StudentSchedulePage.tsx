
import React from 'react';
import { useI18n } from '../../hooks/useI18n';

const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const CalendarEvent: React.FC<{ title: string, time: string }> = ({ title, time }) => (
    <div className="bg-green-100 text-green-800 p-1.5 rounded-md text-xs truncate">
        <span className="font-semibold">{time}</span> {title}
    </div>
);

export const StudentSchedulePage: React.FC = () => {
    const { t } = useI18n();
    const calendarDays = Array.from({ length: 35 }, (_, i) => i - 4); // Dummy days for June 2024

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_student_schedule')}</h1>
                <div className="font-semibold text-xl">{t('schedule_month_june')} 2024</div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="grid grid-cols-7 text-center font-bold text-gray-600 border-b">
                    {days.map(day => <div key={day} className="py-3">{day}</div>)}
                </div>
                <div className="grid grid-cols-7">
                    {calendarDays.map((day, index) => (
                        <div key={index} className={`h-32 p-2 border-b border-r ${day < 1 ? 'bg-gray-50' : ''}`}>
                            <span className={`font-semibold ${day === 26 ? 'bg-ift-light-green text-black rounded-full w-7 h-7 flex items-center justify-center' : ''}`}>
                                {day > 0 ? day : ''}
                            </span>
                            {day === 27 && (
                                <div className="mt-1 space-y-1">
                                    <CalendarEvent title="Aula ao Vivo" time="19:00"/>
                                </div>
                            )}
                             {day === 29 && (
                                <div className="mt-1 space-y-1">
                                    <CalendarEvent title="Entrega Projeto" time="23:59"/>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
