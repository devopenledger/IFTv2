import React, { useState, useEffect, useRef } from 'react';
import { MOCK_COURSES, HERO_SLIDES, METHODOLOGY_CARDS, FACULTY_MEMBERS, BENEFITS, SPONSORSHIP_IMAGES, STRATEGIC_PARTNERS } from '../constants';
import { useI18n } from '../hooks/useI18n';
import { Course, IconName, Locale, StrategicPartner } from '../types';
import * as Icons from '../components/ui/Icons';
import { Link, useParams } from 'react-router-dom';

// Custom hook for observing intersection
const useIntersectionObserver = (options: IntersectionObserverInit & { triggerOnce?: boolean }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const { triggerOnce, ...observerOptions } = options;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                if (triggerOnce) {
                    observer.unobserve(entry.target);
                }
            }
        }, observerOptions);

        observer.observe(element);

        return () => {
            if(element) {
              observer.unobserve(element);
            }
        };
    }, [ref, options]);

    return [ref, isIntersecting] as const;
};


const AnimatedSection: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

    return (
        <div 
            ref={ref} 
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
            {children}
        </div>
    );
}

const HeroSection: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: Locale }>();
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 7000);
        return () => clearTimeout(timer);
    }, [currentSlide]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }

        const handleScroll = () => {
            if (videoRef.current) {
                const offset = window.pageYOffset;
                videoRef.current.style.transform = `translateY(${offset * 0.5}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const slide = HERO_SLIDES[currentSlide];

    return (
        <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
             <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
            >
                <source src="https://res.cloudinary.com/dsdzoebyq/video/upload/v1758844447/VIDEO_background_jk7fkw.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <div key={currentSlide} className="animate-[fadeIn_1.5s_ease-in-out]">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        <span className="block">{t(slide.title1)}</span>
                        <span className="block text-ift-light-green">{t(slide.title2)}</span>
                        <span className="block">{t(slide.title3)}</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">{t(slide.subtitle)}</p>
                </div>
                
                <div className="mt-10 flex space-x-3">
                    {HERO_SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-ift-light-green' : 'bg-white/50 hover:bg-white/75'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to={`/${locale}/courses`} className="w-full sm:w-auto px-8 py-3 text-base font-medium text-black bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                        {t('hero_cta_courses')}
                    </Link>
                     <Link to={`/${locale}/register`} className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-transparent border-2 border-ift-light-green rounded-md hover:bg-ift-light-green hover:text-black transition-colors">
                        {t('hero_cta_sponsorship')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

const CourseCard: React.FC<{ course: Omit<Course, 'modules'> }> = ({ course }) => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: Locale }>();
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-ift-dark-blue">{t(course.titleKey)}</h3>
                <p className="mt-2 text-gray-600 flex-grow">{t(course.descriptionKey)}</p>
                <div className="mt-4 text-sm text-gray-500">
                    <p><strong>{t('course_audience')}</strong>{t(course.targetAudienceKey)}</p>
                    <p><strong>{t('course_duration')}</strong>{t(course.durationKey)}</p>
                </div>
                <div className="mt-6">
                    <Link to={`/${locale}/register`} className="w-full block text-center px-4 py-3 text-base font-medium text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                        {t('course_signup_cta')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

const CoursesSection: React.FC = () => {
    const { t } = useI18n();
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-ift-dark-blue">{t('courses_title')}</h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {MOCK_COURSES.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

const MethodologySection: React.FC = () => {
    const { t } = useI18n();
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-ift-dark-blue">{t('methodology_title')}</h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {METHODOLOGY_CARDS.map(card => {
                            const Icon = Icons[card.icon];
                            return (
                                <div key={card.title} className="text-center p-6">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto mb-4">
                                        <Icon className="w-8 h-8"/>
                                    </div>
                                    <h3 className="text-xl font-bold text-ift-dark-blue">{t(card.title)}</h3>
                                    <p className="mt-2 text-gray-600">{t(card.description)}</p>
                                </div>
                            );
                        })}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

const FacultySection: React.FC = () => {
    const { t } = useI18n();
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-ift-dark-blue">{t('faculty_title')}</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{t('faculty_subtitle')}</p>
                    </div>
                    <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        {FACULTY_MEMBERS.map(member => (
                            <div key={member.name} className="group text-center p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:bg-white rounded-lg">
                                <div className="mx-auto h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                                    <Icons.UserIcon className="w-12 h-12 text-gray-400" />
                                </div>
                                <div className="mt-4 space-y-1">
                                    <h3 className="text-lg font-bold">{t(member.name)}</h3>
                                    <p className="text-ift-light-green font-semibold">{t(member.title)}</p>
                                </div>
                                <div className="mt-3">
                                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn for ${t(member.name)}`}>
                                        <Icons.LinkedinIcon className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors mx-auto" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

const SponsorshipSection: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: Locale }>();
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % SPONSORSHIP_IMAGES.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentImage]);

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <AnimatedSection>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-ift-dark-blue">{t('sponsorship_title')}</h2>
                            <p className="mt-4 text-lg text-gray-600">{t('sponsorship_description')}</p>
                            <div className="mt-6 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                                <p className="text-lg font-semibold text-green-800">{t('sponsorship_value')}</p>
                                <ul className="mt-4 space-y-2 text-green-700 list-disc list-inside">
                                    <li>{t('sponsorship_benefits_1')}</li>
                                    <li>{t('sponsorship_benefits_2')}</li>
                                    <li>{t('sponsorship_benefits_3')}</li>
                                </ul>
                            </div>
                             <Link to={`/${locale}/scholarship`} className="mt-8 inline-block px-8 py-3 text-base font-medium text-white bg-ift-light-green rounded-md hover:opacity-90 transition-opacity">
                                {t('sponsorship_cta')}
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2 relative h-96 w-full">
                            {SPONSORSHIP_IMAGES.map((src, index) => (
                                <img 
                                    key={src}
                                    src={src} 
                                    alt="Students collaborating"
                                    className={`absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

const BenefitsSection: React.FC = () => {
    const { t } = useI18n();
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-ift-dark-blue">{t('benefits_title')}</h2>
                     <div className="mt-12 grid max-w-4xl mx-auto gap-8 md:grid-cols-2">
                        {BENEFITS.map(benefit => {
                            const Icon = Icons[benefit.icon];
                            return (
                                <div key={benefit.key} className="flex items-start">
                                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 text-green-600">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-lg font-medium text-gray-900">{t(benefit.key)}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

const PartnershipsSection: React.FC = () => {
    const { t } = useI18n();
    const [activePartner, setActivePartner] = useState<StrategicPartner>(STRATEGIC_PARTNERS[0]);

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-ift-dark-blue">{t('strategic_partnerships_title')}</h2>
                    <div className="mt-12 grid lg:grid-cols-3 gap-8">
                        <aside className="lg:col-span-1">
                            <nav>
                                <ul className="space-y-2">
                                    {STRATEGIC_PARTNERS.map(partner => (
                                        <li key={partner.id}>
                                            <button
                                                onClick={() => setActivePartner(partner)}
                                                className={`w-full text-left px-4 py-3 rounded-md font-medium transition-colors ${activePartner.id === partner.id ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
                                            >
                                                {t(partner.titleKey)}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </aside>
                        <main className="lg:col-span-2">
                             <div className="p-8 bg-gray-50 rounded-lg">
                                <h3 className="text-2xl font-bold text-ift-dark-blue">{t(activePartner.titleKey)}</h3>
                                <p className="mt-4 text-gray-700 leading-relaxed">{t(activePartner.textKey)}</p>
                            </div>
                        </main>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export const HomePage: React.FC = () => {
    return (
        <div className="bg-ift-page-bg">
            <HeroSection />
            <MethodologySection />
            <CoursesSection />
            <FacultySection />
            <SponsorshipSection />
            <BenefitsSection />
            <PartnershipsSection />
        </div>
    );
};