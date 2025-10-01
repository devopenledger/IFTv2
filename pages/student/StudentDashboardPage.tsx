import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_STUDENT_STATS, MOCK_CONTINUE_LEARNING, MOCK_UPCOMING_SCHEDULE, MOCK_ENROLLED_COURSES, MOCK_MARKETPLACE_OFFERS } from '../../constants';
import * as Icons from '../../components/ui/Icons';
import { Locale } from '../../types';

const WelcomeHeader: React.FC<{ overallProgress: number }> = ({ overallProgress }) => {
    const { t } = useI18n();
    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h1 className="text-3xl font-bold text-ift-dark-blue">{t('student_dashboard_welcome')}</h1>
            <p className="mt-1 text-gray-600">{t('student_dashboard_subtitle')}</p>
            <div className="mt-4">
                <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-700">{t('student_dashboard_overall_progress')}</span>
                    <span className="text-sm font-medium text-gray-700">{overallProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-ift-light-green h-2.5 rounded-full" style={{ width: `${overallProgress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

const ContinueLearningCard: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: Locale }>();
    const { courseTitleKey, lessonTitle } = MOCK_CONTINUE_LEARNING;

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between h-full">
            <div>
                <h3 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">{t('student_dashboard_continue_learning')}</h3>
                <p className="text-lg font-bold text-ift-dark-blue mt-2">{t(courseTitleKey)}</p>
                <p className="text-sm text-gray-600">{lessonTitle}</p>
            </div>
            <Link 
                to={`/${locale}/student/classroom`} 
                className="w-full mt-4 text-center block px-4 py-3 text-base font-semibold rounded-md transition-colors bg-ift-light-green text-black hover:opacity-90">
                {t('student_dashboard_continue_learning')} &rarr;
            </Link>
        </div>
    );
};

const StatCard: React.FC<{ titleKey: string; value: number; icon: React.ReactNode; href: string }> = ({ titleKey, value, icon, href }) => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: Locale }>();

    return (
        <Link to={`/${locale}/student/${href}`} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-green-300 transition-colors flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg text-green-600">
                {icon}
            </div>
            <div>
                <p className="text-2xl font-bold text-ift-dark-blue">{value}</p>
                <p className="text-sm text-gray-500">{t(titleKey)}</p>
            </div>
        </Link>
    );
};

const UpcomingSchedule: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full">
            <h3 className="text-lg font-bold mb-4">{t('student_dashboard_upcoming_classes')}</h3>
            {MOCK_UPCOMING_SCHEDULE.length > 0 ? (
                <ul className="space-y-4">
                    {MOCK_UPCOMING_SCHEDULE.map((item, index) => {
                         const Icon: React.FC<{ className?: string; }> = Icons[item.icon as keyof typeof Icons] || Icons.CalendarIcon;
                         const date = new Date(item.time);
                         const formattedDate = date.toLocaleDateString(undefined, { day: '2-digit', month: 'short' });
                         const formattedTime = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
                        return (
                            <li key={index} className="flex items-center gap-4">
                                <div className="bg-gray-100 p-3 rounded-lg text-gray-600">
                                   <Icon className="w-5 h-5"/>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">{t(item.type)}: {item.title}</p>
                                    <p className="text-sm text-gray-500">{formattedDate} - {formattedTime}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <div className="text-center text-gray-500 py-8">
                    <p>{t('student_dashboard_no_upcoming_classes')}</p>
                </div>
            )}
        </div>
    );
};

const FeaturedOffersCarousel: React.FC = () => {
    const { t } = useI18n();
    const { locale } = useParams<{ locale: Locale }>();
    const [currentSlide, setCurrentSlide] = useState(0);
    const featuredOffers = MOCK_MARKETPLACE_OFFERS.filter(o => o.category === 'ai').slice(0, 3);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () => setCurrentSlide((prev) => (prev === featuredOffers.length - 1 ? 0 : prev + 1)),
            5000
        );
        return () => {
            resetTimeout();
        };
    }, [currentSlide, featuredOffers.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === featuredOffers.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? featuredOffers.length - 1 : prev - 1));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full">
            <h3 className="text-lg font-bold mb-4">{t('student_dashboard_featured_offers')}</h3>
            <div className="relative overflow-hidden rounded-lg h-64">
                {featuredOffers.map((offer, index) => (
                    <div
                        key={offer.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="h-full flex flex-col items-center justify-center text-center p-4 bg-gray-50">
                             <img src={offer.logo} alt={offer.title} className="max-h-16 h-16 object-contain mb-4"/>
                             <h4 className="font-bold text-ift-dark-blue">{offer.title}</h4>
                             <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
                             <Link to={`/${locale}/student/marketplace/${offer.id}`} className="px-4 py-2 text-sm font-semibold text-black bg-ift-light-green rounded-md hover:opacity-90">
                                {t('student_dashboard_view_offer')}
                            </Link>
                        </div>
                    </div>
                ))}
                {/* Controls */}
                <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-1 text-gray-700 z-10">
                    <Icons.ArrowLeftIcon className="w-5 h-5" />
                </button>
                 <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-1 text-gray-700 z-10">
                    <Icons.ArrowRightIcon className="w-5 h-5" />
                </button>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {featuredOffers.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-ift-dark-blue' : 'bg-gray-400'}`}></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const StudentDashboardPage: React.FC = () => {
    const totalProgress = MOCK_ENROLLED_COURSES.reduce((acc, course) => acc + course.progress, 0);
    const overallProgress = MOCK_ENROLLED_COURSES.length > 0 ? Math.round(totalProgress / MOCK_ENROLLED_COURSES.length) : 0;

    return (
        <div className="space-y-8">
            <WelcomeHeader overallProgress={overallProgress} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard titleKey="student_dashboard_courses_inprogress" value={MOCK_STUDENT_STATS.inProgress} href="courses" icon={<Icons.ClockIcon className="w-6 h-6" />} />
                <StatCard titleKey="student_dashboard_courses_completed" value={MOCK_STUDENT_STATS.completed} href="courses" icon={<Icons.CheckCircleIcon className="w-6 h-6" />} />
                <StatCard titleKey="student_dashboard_certificates_earned" value={MOCK_STUDENT_STATS.certificates} href="certificate" icon={<Icons.CertificateIcon className="w-6 h-6" />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <FeaturedOffersCarousel />
                </div>
                <div className="lg:col-span-1 space-y-8">
                    <ContinueLearningCard />
                    <UpcomingSchedule />
                </div>
            </div>
        </div>
    );
};