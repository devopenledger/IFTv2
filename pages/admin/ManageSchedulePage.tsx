import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { CalendarIcon } from '../../components/ui/Icons';
import { StudentSchedulePage } from '../student/StudentSchedulePage';
import { AddEventModal } from '../../components/admin/AddEventModal';

export const ManageSchedulePage: React.FC = () => {
    const { t } = useI18n();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleSaveEvent = (eventData: any) => {
        console.log("Saving event:", eventData);
        // In a real app, update state here
        setModalOpen(false);
    }

    // Reusing the student schedule component as a base for the admin view.
    // In a real app, this would be an editable calendar.
    return (
         <div>
            <AddEventModal 
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSaveEvent}
            />
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_schedule')}</h1>
                <button 
                    onClick={() => setModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity"
                >
                    <CalendarIcon className="w-4 h-4" />
                    Adicionar Evento
                </button>
            </div>
            <StudentSchedulePage />
        </div>
    );
};