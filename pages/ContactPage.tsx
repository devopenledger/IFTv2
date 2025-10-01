
import React from 'react';
import { useI18n } from '../hooks/useI18n';
import { MapPinIcon, PhoneIcon, MailIcon } from '../components/ui/Icons';

export const ContactPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="bg-white">
            <div className="text-center py-20 md:py-28 bg-gray-50 border-b">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-ift-dark-blue">{t('contact_page_title')}</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{t('contact_page_subtitle')}</p>
                </div>
            </div>

            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">{t('contact_form_name')}</label>
                                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">{t('contact_form_email')}</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">{t('contact_form_message')}</label>
                                    <textarea id="message" rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"></textarea>
                                </div>
                                <button type="submit" className="w-full px-5 py-3 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                                    {t('contact_form_send')}
                                </button>
                            </form>
                        </div>
                        {/* Contact Info */}
                        <div className="space-y-6">
                             <h2 className="text-3xl font-bold text-ift-dark-blue">{t('contact_info_title')}</h2>
                             <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-4">
                                    <MapPinIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                    <span>{t('footer_address')}</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <PhoneIcon className="w-6 h-6 text-green-600" />
                                    <span>{t('footer_phone')}</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <MailIcon className="w-6 h-6 text-green-600" />
                                    <a href={`mailto:${t('footer_email')}`} className="hover:text-green-800">{t('footer_email')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
