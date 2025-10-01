import React from 'react';

export const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
    <div className="p-12 text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-2 text-gray-500">Content to be implemented.</p>
    </div>
);
