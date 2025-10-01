
import React from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { Locale } from '../../types';

export const AuthLayout: React.FC = () => {
    const { locale = Locale.English } = useParams<{ locale: Locale }>();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <Link to={`/${locale}/home`}>
                       <img className="mx-auto h-16 w-auto" src="https://res.cloudinary.com/dsdzoebyq/image/upload/v1758834228/IFT_Logo_Color_jg4a6o.png" alt="IFT BRICS Logo" />
                    </Link>
                </div>
                <Outlet />
            </div>
        </div>
    );
};
