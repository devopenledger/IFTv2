import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_NEWSLETTERS, USER_ROLES } from '../../constants';
import { SearchIcon, EditIcon, TrashIcon, NewsletterIcon, ExternalLinkIcon, UsersIcon } from '../../components/ui/Icons';
import { Link, useParams } from 'react-router-dom';
import { ConfirmDeleteModal } from '../../components/admin/ConfirmDeleteModal';
import { PreviewNewsletterModal } from '../../components/admin/PreviewNewsletterModal';
import { Newsletter } from '../../types';


export const ManageNewslettersPage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);
    const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);

    const openDeleteModal = (newsletter: Newsletter) => {
        setSelectedNewsletter(newsletter);
        setDeleteModalOpen(true);
    };

    const openPreviewModal = (newsletter: Newsletter) => {
        setSelectedNewsletter(newsletter);
        setPreviewModalOpen(true);
    };

    const handleDelete = () => {
        console.log("Deleting:", selectedNewsletter?.id);
        setDeleteModalOpen(false);
        setSelectedNewsletter(null);
    };

    const getStatusBadge = (status: string) => (
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${status === 'sent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {t(`admin_status_${status}`)}
        </span>
    );
    
    const getAudienceTooltip = (audiences: Array<string>) => {
        if (audiences.includes('all')) {
            return t('admin_newsletters_audience_all');
        }
        return audiences.map(audienceId => {
            const role = USER_ROLES.find(r => r.id === audienceId);
            return role ? t(role.nameKey) : audienceId;
        }).join(', ');
    };

    return (
        <div className="space-y-6">
            <ConfirmDeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDelete}
                title="Excluir Newsletter"
                message={`Tem certeza que deseja excluir a newsletter "${selectedNewsletter?.subject}"?`}
            />
            <PreviewNewsletterModal
                isOpen={isPreviewModalOpen}
                onClose={() => setPreviewModalOpen(false)}
                newsletter={selectedNewsletter}
            />
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_newsletters')}</h1>
                <Link to={`/${locale}/admin/manage-newsletters/new/edit`} className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    <NewsletterIcon className="w-4 h-4" />
                    {t('admin_add_new')}
                </Link>
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

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">{t('admin_newsletters_subject')}</th>
                                <th scope="col" className="px-6 py-3">{t('admin_newsletters_target_audience')}</th>
                                <th scope="col" className="px-6 py-3">{t('admin_newsletters_recipients')}</th>
                                <th scope="col" className="px-6 py-3">Data</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_NEWSLETTERS.map((newsletter) => (
                                <tr key={newsletter.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{newsletter.subject}</td>
                                    <td className="px-6 py-4">
                                        <div className="relative group flex justify-center">
                                            <UsersIcon className="w-5 h-5 text-gray-500"/>
                                            <div className="absolute bottom-full mb-2 w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {getAudienceTooltip(newsletter.targetAudiences)}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{newsletter.recipients.toLocaleString('pt-BR')}</td>
                                    <td className="px-6 py-4">{newsletter.date}</td>
                                    <td className="px-6 py-4">{getStatusBadge(newsletter.status)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end items-center gap-4">
                                            <Link to={`/${locale}/admin/manage-newsletters/${newsletter.id}/edit`} className="text-blue-600 hover:underline"><EditIcon className="w-5 h-5" /></Link>
                                            <button onClick={() => openPreviewModal(newsletter)} className="text-green-600 hover:underline"><ExternalLinkIcon className="w-5 h-5" /></button>
                                            <button onClick={() => openDeleteModal(newsletter)} className="text-red-600 hover:underline"><TrashIcon className="w-5 h-5" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};