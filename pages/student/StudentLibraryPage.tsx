
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_LIBRARY_BOOKS } from '../../constants';
import { SearchIcon } from '../../components/ui/Icons';

const BookCard: React.FC<{ book: typeof MOCK_LIBRARY_BOOKS[0] }> = ({ book }) => {
    const { t } = useI18n();

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group text-center">
            <img src={book.cover} alt={`Cover of ${book.title}`} className="h-64 w-full object-cover"/>
            <div className="p-4">
                <h3 className="font-bold text-ift-dark-blue">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{book.author}</p>
                <button className="w-full px-4 py-2 text-sm font-semibold text-black bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                    {t('library_view_book')}
                </button>
            </div>
        </div>
    );
};

export const StudentLibraryPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div>
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-6">{t('page_title_student_library')}</h1>

            <div className="mb-6 relative">
                <input
                    type="text"
                    placeholder={t('library_search')}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="w-5 h-5 text-gray-400" />
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {MOCK_LIBRARY_BOOKS.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
};
