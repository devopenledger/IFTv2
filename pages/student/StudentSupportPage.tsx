
import React from 'react';
import { useI18n } from '../../hooks/useI18n';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
    <details className="p-4 rounded-lg bg-gray-50 group" open={false}>
        <summary className="font-semibold cursor-pointer list-none">
            {question}
        </summary>
        <div className="mt-3 text-gray-600">
            {answer}
        </div>
    </details>
);

export const StudentSupportPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="space-y-8">
             <h1 className="text-3xl font-bold text-ift-dark-blue">{t('page_title_student_support')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* FAQ Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">{t('support_faq')}</h2>
                    <div className="space-y-3">
                        <FaqItem question="Como acesso meu certificado?" answer="Seu certificado fica disponível na página 'Meus Certificados' assim que você conclui um curso com 100% de aproveitamento." />
                        <FaqItem question="Posso refazer uma avaliação?" answer="Sim, as avaliações podem ser refeitas até 3 vezes para melhorar sua nota." />
                         <FaqItem question="Como funcionam os descontos do Marketplace?" answer="Basta clicar em 'Resgatar Oferta' e você será direcionado para o site do parceiro com o desconto já aplicado." />
                    </div>
                </div>

                {/* Contact Form Section */}
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold mb-4">{t('support_contact_us')}</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">{t('support_name')}</label>
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" />
                        </div>
                         <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">{t('support_email')}</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">{t('support_message')}</label>
                            <textarea id="message" rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"></textarea>
                        </div>
                        <button type="submit" className="w-full px-5 py-2.5 text-sm font-semibold text-white bg-ift-light-green rounded-md hover:opacity-90">
                            {t('support_send_message')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
