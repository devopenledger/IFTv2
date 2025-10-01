
import React from 'react';
import { useI18n } from '../../hooks/useI18n';

const ColorPicker: React.FC<{ label: string, color: string }> = ({ label, color }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="mt-1 flex items-center gap-2">
            <div className="w-8 h-8 rounded-md border border-gray-300" style={{ backgroundColor: color }}></div>
            <input type="text" defaultValue={color} className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm" />
        </div>
    </div>
);

export const ManageDesignSystemPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_admin_manage_design_system')}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4">Cores da Marca</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ColorPicker label="Cor Primária CTA" color="#61e6a1" />
                    <ColorPicker label="Cor do Fundo da Página" color="#F9FAFB" />
                    <ColorPicker label="Cor da Fonte Principal" color="#1D283A" />
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4">Tipografia</h2>
                <div>
                    <label htmlFor="font-family" className="block text-sm font-medium text-gray-700">Fonte Principal</label>
                    <select id="font-family" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                        <option>Inter</option>
                        <option>Roboto</option>
                        <option>Lato</option>
                    </select>
                </div>
            </div>

             <div className="text-right">
                <button className="px-6 py-2.5 font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                    Salvar Alterações
                </button>
            </div>
        </div>
    );
};
