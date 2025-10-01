

import React, { useState, useRef, useMemo } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { SearchIcon, EditIcon, TrashIcon, CartIcon, ChevronDownIcon, DragHandleIcon } from '../../components/ui/Icons';
import { Link, useParams } from 'react-router-dom';
import { ConfirmDeleteModal } from '../../components/admin/ConfirmDeleteModal';
import { MarketplaceOffer, MarketplaceCategory } from '../../types';
import { useAdminOutletContext } from './AdminLayout';
import { MARKETPLACE_CATEGORIES } from '../../constants';

type SortType = 'default' | 'category' | 'date' | 'status';

export const ManageMarketplacePage: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: string }>();
    const { marketplaceOffers, setMarketplaceOffers } = useAdminOutletContext();
    
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<MarketplaceOffer | null>(null);
    const [sortType, setSortType] = useState<SortType>('default');

    // Drag and Drop state
    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    const openDeleteModal = (offer: MarketplaceOffer) => {
        setItemToDelete(offer);
        setDeleteModalOpen(true);
    };

    const handleDelete = () => {
        if (itemToDelete) {
            setMarketplaceOffers(prev => prev.filter(o => o.id !== itemToDelete.id));
        }
        setDeleteModalOpen(false);
        setItemToDelete(null);
    };
    
    const sortedOffers = useMemo(() => {
        const sorted = [...marketplaceOffers];
        switch (sortType) {
            case 'category':
                return sorted.sort((a, b) => a.category.localeCompare(b.category));
            case 'date':
                return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            case 'status':
                return sorted.sort((a, b) => a.status.localeCompare(b.status));
            default:
                return marketplaceOffers; // Keep original order for manual drag-and-drop
        }
    }, [marketplaceOffers, sortType]);


    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSortType = e.target.value as SortType;
        setSortType(newSortType);
        if (newSortType !== 'default') {
            // Apply the sort immediately
            const sorted = [...marketplaceOffers];
            switch (newSortType) {
                 case 'category':
                    sorted.sort((a, b) => a.category.localeCompare(b.category));
                    break;
                case 'date':
                    sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                    break;
                case 'status':
                    sorted.sort((a, b) => a.status.localeCompare(b.status));
                    break;
            }
             setMarketplaceOffers(sorted);
        }
    }

    const handleDragSort = () => {
        if (dragItem.current === null || dragOverItem.current === null) return;
        
        let items = [...marketplaceOffers];
        const draggedItemContent = items.splice(dragItem.current, 1)[0];
        items.splice(dragOverItem.current, 0, draggedItemContent);
        
        dragItem.current = null;
        dragOverItem.current = null;

        setMarketplaceOffers(items);
         // Reset sort dropdown to default to indicate manual order
        setSortType('default');
    };

    const getStatusBadge = (status: string) => (
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {t(`admin_status_${status}`)}
        </span>
    );
    
    const categoryMap = MARKETPLACE_CATEGORIES.reduce((acc, cat) => {
        acc[cat.id] = t(cat.nameKey);
        return acc;
    }, {} as Record<MarketplaceCategory, string>);


    return (
        <div className="space-y-6">
             <ConfirmDeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDelete}
                title={`Excluir Oferta`}
                message={`Tem certeza que deseja excluir a oferta "${itemToDelete?.title}"? Esta ação não pode ser desfeita.`}
            />
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_marketplace')}</h1>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <select
                            value={sortType}
                            onChange={handleSortChange}
                            className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                        >
                            <option value="default">{t('admin_marketplace_sort')}</option>
                            <option value="category">{t('admin_marketplace_sort_category')}</option>
                            <option value="date">{t('admin_marketplace_sort_date')}</option>
                            <option value="status">{t('admin_marketplace_sort_status')}</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                           <ChevronDownIcon className="w-4 h-4" />
                        </div>
                    </div>
                    <Link
                        to={`/${locale}/admin/manage-marketplace/new/edit`}
                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity"
                    >
                        <CartIcon className="w-4 h-4" />
                        {t('admin_add_new')}
                    </Link>
                </div>
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
                                <th scope="col" className="px-2 py-3 w-12"></th>
                                <th scope="col" className="px-6 py-3">Oferta</th>
                                <th scope="col" className="px-6 py-3">{t('admin_marketplace_category')}</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedOffers.map((offer, index) => (
                                <tr 
                                    key={offer.id}
                                    className="bg-white border-b hover:bg-gray-50"
                                    draggable
                                    onDragStart={() => dragItem.current = index}
                                    onDragEnter={() => dragOverItem.current = index}
                                    onDragEnd={handleDragSort}
                                    onDragOver={(e) => e.preventDefault()}
                                >
                                    <td className="px-2 py-4 text-center cursor-move text-gray-400">
                                        <DragHandleIcon className="w-5 h-5 inline-block" />
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{offer.title}</td>
                                    <td className="px-6 py-4">{categoryMap[offer.category]}</td>
                                    <td className="px-6 py-4">{getStatusBadge(offer.status)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end items-center gap-4">
                                            <Link to={`/${locale}/admin/manage-marketplace/${offer.id}/edit`} className="text-blue-600 hover:underline"><EditIcon className="w-5 h-5" /></Link>
                                            <button onClick={() => openDeleteModal(offer)} className="text-red-600 hover:underline"><TrashIcon className="w-5 h-5" /></button>
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