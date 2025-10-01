import React, { useState } from 'react';
import { useI18n } from '../hooks/useI18n';
// FIX: Switched to BRICS_COUNTRY_COORDINATES to fix import error, following deprecation notice in constants.ts. This component now implements a 'dotted map'.
import { BRICS_COUNTRY_COORDINATES } from '../constants';

const Tooltip: React.FC<{ text: string, position: { x: number, y: number } }> = ({ text, position }) => (
    <div
        className="absolute bg-ift-dark-blue text-white text-sm px-3 py-1.5 rounded-md shadow-lg pointer-events-none transition-opacity z-10"
        style={{
            left: position.x + 15,
            top: position.y + 15,
        }}
    >
        {text}
    </div>
);

export const BricsMap: React.FC = () => {
    const { t } = useI18n();
    const [hoveredCountryKey, setHoveredCountryKey] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div 
            className="relative w-full aspect-[1000/580] bg-white rounded-lg overflow-hidden" 
            style={{
                backgroundImage: "url('https://res.cloudinary.com/dsdzoebyq/image/upload/v1758897540/377489136_403eda1c-ca72-4d3b-9665-f667e8f2e046_ukrgyt.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            onMouseMove={handleMouseMove} 
            onMouseLeave={() => setHoveredCountryKey(null)}
        >
            {BRICS_COUNTRY_COORDINATES.map(country => (
                <div
                    key={country.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: country.top, left: country.left }}
                    onMouseEnter={() => setHoveredCountryKey(country.nameKey)}
                >
                    <div className="w-3 h-3 bg-ift-light-green rounded-full cursor-pointer transform hover:scale-150 transition-transform shadow-md border-2 border-gray-600"></div>
                </div>
            ))}

            {hoveredCountryKey && (
                <Tooltip 
                    text={t(hoveredCountryKey)} 
                    position={mousePosition} 
                />
            )}
        </div>
    );
};
