import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_LIBRARY_BOOKS } from '../../constants';

type Book = typeof MOCK_LIBRARY_BOOKS[0];

export const ManageLibraryEditPage: React.FC = () => {
    const { t } = useI18n();
    const { bookId, locale } = useParams<{ bookId: string; locale: string }>();
    const navigate = useNavigate();
    const isNew = bookId === 'new';

    const [book, setBook] = useState<Partial<Book>>({
        title: '',
        author: '',
        cover: '',
        status: 'available',
    });

    useEffect(() => {
        if (!isNew) {
            const existingBook = MOCK_LIBRARY_BOOKS.find(b => b.id === bookId);
            if (existingBook) {
                setBook(existingBook);
            }
        }
    }, [bookId, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setBook(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving book:", book);
        navigate(`/${locale}/admin/manage-library`);
    };
    
    const pageTitle = isNew ? "Adicionar Novo Livro" : `Editar Livro: ${book.title}`;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{pageTitle}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">{t('admin_library_title')}</label>
                    <input type="text" name="title" id="title" value={book.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                 <div>
                    <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900">{t('admin_library_author')}</label>
                    <input type="text" name="author" id="author" value={book.author} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                 <div>
                    <label htmlFor="cover" className="block mb-2 text-sm font-medium text-gray-900">URL da Capa</label>
                    <input type="text" name="cover" id="cover" value={book.cover} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
                <div>
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <select name="status" id="status" value={book.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option value="available">{t('admin_status_available')}</option>
                        <option value="rented">{t('admin_status_rented')}</option>
                    </select>
                </div>
            </div>
            
             <div className="text-right">
                <button onClick={handleSave} className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar Livro
                </button>
            </div>
        </div>
    );
};
