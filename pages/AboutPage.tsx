
import React from 'react';
import { useI18n } from '../hooks/useI18n';
import { TIMELINE_EVENTS } from '../constants';
import { BricsMap } from '../components/BricsMap';

const AnimatedSection: React.FC<{children: React.ReactNode}> = ({ children }) => {
    // A simplified version for brevity. In a real app, use the IntersectionObserver hook from HomePage.
    return <div className="py-10">{children}</div>;
}

export const AboutPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-ift-dark-blue text-white text-center py-20 md:py-32">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://res.cloudinary.com/dsdzoebyq/image/upload/v1758835216/Background_02_sgfioz.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">{t('about_title')}</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">{t('about_subtitle')}</p>
                </div>
            </div>

            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Mission and Vision */}
                    <AnimatedSection>
                        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left items-start">
                             <div>
                                <h2 className="text-3xl font-bold text-ift-dark-blue">{t('about_who_we_are_title')}</h2>
                                <p className="mt-4 text-gray-600">{t('about_who_we_are_desc')}</p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-ift-dark-blue">{t('about_mission_title')}</h2>
                                <p className="mt-4 text-gray-600">{t('about_mission_desc')}</p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-ift-dark-blue">{t('about_vision_title')}</h2>
                                <p className="mt-4 text-gray-600">{t('about_vision_desc')}</p>
                            </div>
                        </div>
                    </AnimatedSection>
                    
                    {/* BRICS Section */}
                    <AnimatedSection>
                         <div className="mt-20 text-center">
                            <h2 className="text-3xl font-bold text-ift-dark-blue">{t('about_brics_title')}</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
                                {t('about_brics_desc_part1')}
                                <strong className="font-bold">{t('about_brics_desc_bold')}</strong>
                                {t('about_brics_desc_part2')}
                            </p>
                            <div className="mt-8 mx-auto w-full max-w-4xl">
                               <BricsMap />
                            </div>
                         </div>
                    </AnimatedSection>

                    {/* Timeline Section */}
                    <AnimatedSection>
                        <div className="mt-20">
                             <h2 className="text-3xl font-bold text-center text-ift-dark-blue">{t('about_timeline_title')}</h2>
                             <div className="mt-12 relative">
                                 {/* Vertical line */}
                                <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-gray-200"></div>
                                {TIMELINE_EVENTS.map((event, index) => (
                                    <div key={index} className="relative mb-12">
                                        <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                            <div className="w-1/2 px-4">
                                                <div className={`p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                                    <h3 className="text-xl font-bold text-ift-light-green">{t(event.title)}</h3>
                                                    <p className="mt-2 text-gray-600">{t(event.description)}</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-ift-dark-blue rounded-full flex items-center justify-center text-white font-bold">
                                                {event.year}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};
