
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { HashRouter, Routes, Route, useParams, Outlet, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { I18nProvider } from './i18n/I18nProvider';
import { Course, Locale, MarketplaceOffer, FinancingApplication } from './types';
import { MOCK_ADMIN_COURSES, MOCK_MARKETPLACE_OFFERS, MOCK_FINANCING_APPLICATIONS } from './constants';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { StudentLayout } from './pages/student/StudentLayout';
import { StudentDashboardPage } from './pages/student/StudentDashboardPage';
import { StudentCoursesPage } from './pages/student/StudentCoursesPage';
import { StudentLiveClassPage } from './pages/student/StudentLiveClassPage';
import { StudentClassroomPage } from './pages/student/StudentClassroomPage';
import { StudentSchedulePage } from './pages/student/StudentSchedulePage';
import { StudentMarketplacePage } from './pages/student/StudentMarketplacePage';
import { StudentDocumentsPage } from './pages/student/StudentDocumentsPage';
import { StudentCertificatePage } from './pages/student/StudentCertificatePage';
import { StudentWebmailPage } from './pages/student/StudentWebmailPage';
import { StudentLibraryPage } from './pages/student/StudentLibraryPage';
import { StudentCareersPage } from './pages/student/StudentCareersPage';
import { StudentProfilePage } from './pages/student/StudentProfilePage';
import { StudentPaymentPage } from './pages/student/StudentPaymentPage';
import { StudentNewsletterPage } from './pages/student/StudentNewsletterPage';
import { StudentSettingsPage } from './pages/student/StudentSettingsPage';
import { StudentSupportPage } from './pages/student/StudentSupportPage';
import { StudentOpportunitiesPage } from './pages/student/StudentOpportunitiesPage';
import { StudentMarketplaceOfferPage } from './pages/student/StudentMarketplaceOfferPage';
import { StudentFinancingPage } from './pages/student/StudentFinancingPage';

// Teacher Imports
import { TeacherLayout } from './pages/teacher/TeacherLayout';
import { TeacherDashboardPage } from './pages/teacher/TeacherDashboardPage';
import { TeacherCoursesPage } from './pages/teacher/TeacherCoursesPage';
import { TeacherCourseDetailsPage } from './pages/teacher/TeacherCourseDetailsPage';
import { TeacherContentPage } from './pages/teacher/TeacherContentPage';

// School Imports
import { SchoolLayout } from './pages/school/SchoolLayout';
import { SchoolDashboardPage } from './pages/school/SchoolDashboardPage';
import { SchoolScholarshipsPage } from './pages/school/SchoolScholarshipsPage';
import { SchoolTeachersPage } from './pages/school/SchoolTeachersPage';
import { SchoolReportsPage } from './pages/school/SchoolReportsPage';
import { SchoolDocumentsPage } from './pages/school/SchoolDocumentsPage';
import { SchoolProfilePage } from './pages/school/SchoolProfilePage';
import { SchoolSettingsPage } from './pages/school/SchoolSettingsPage';
import { SchoolSupportPage } from './pages/school/SchoolSupportPage';

// Sponsor Imports
import { SponsorLayout } from './pages/sponsor/SponsorLayout';
import { SponsorDashboardPage } from './pages/sponsor/SponsorDashboardPage';
import { SponsorshipListPage } from './pages/sponsor/SponsorshipListPage';
import { SponsorshipDetailsPage } from './pages/sponsor/SponsorshipDetailsPage';
import { SponsorReportsPage } from './pages/sponsor/SponsorReportsPage';
import { SponsorCareersPage } from './pages/sponsor/SponsorCareersPage';
import { SponsorDocumentsPage } from './pages/sponsor/SponsorDocumentsPage';
import { SponsorProfilePage } from './pages/sponsor/SponsorProfilePage';
import { SponsorPaymentPage } from './pages/sponsor/SponsorPaymentPage';
import { SponsorSettingsPage } from './pages/sponsor/SponsorSettingsPage';
import { SponsorSupportPage } from './pages/sponsor/SponsorSupportPage';

// Partner Imports
import { PartnerLayout } from './pages/partner/PartnerLayout';
import { PartnerDashboardPage } from './pages/partner/PartnerDashboardPage';
import { PartnershipListPage } from './pages/partner/PartnershipListPage';
import { PartnershipDetailsPage } from './pages/partner/PartnershipDetailsPage';
import { PartnerReportsPage } from './pages/partner/PartnerReportsPage';
import { PartnerDocumentsPage } from './pages/partner/PartnerDocumentsPage';
import { PartnerProfilePage } from './pages/partner/PartnerProfilePage';
import { PartnerSettingsPage } from './pages/partner/PartnerSettingsPage';
import { PartnerSupportPage } from './pages/partner/PartnerSupportPage';

// Affiliate Imports
import { AffiliateLayout } from './pages/affiliate/AffiliateLayout';
import { AffiliateDashboardPage } from './pages/affiliate/AffiliateDashboardPage';
import { AffiliateSalesPage } from './pages/affiliate/AffiliateSalesPage';
import { AffiliateLeadsPage } from './pages/affiliate/AffiliateLeadsPage';
import { AffiliateCommissionsPage } from './pages/affiliate/AffiliateCommissionsPage';
import { AffiliateCouponsPage } from './pages/affiliate/AffiliateCouponsPage';
import { AffiliateCampaignPage } from './pages/affiliate/AffiliateCampaignPage';
import { AffiliateProfilePage } from './pages/affiliate/AffiliateProfilePage';
import { AffiliateDocumentsPage } from './pages/affiliate/AffiliateDocumentsPage';
import { AffiliateSettingsPage } from './pages/affiliate/AffiliateSettingsPage';
import { AffiliateSupportPage } from './pages/affiliate/AffiliateSupportPage';

// Admin Imports
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { ManageStudentsPage } from './pages/admin/ManageStudentsPage';
import { ManageStudentEditPage } from './pages/admin/ManageStudentEditPage';
import { ManageTeachersPage } from './pages/admin/ManageTeachersPage';
import { ManageTeacherEditPage } from './pages/admin/ManageTeacherEditPage';
import { ManageCoursesPage } from './pages/admin/ManageCoursesPage';
import { ManageCourseEditPage } from './pages/admin/ManageCourseEditPage';
import { ManageSingleSubjectEditPage } from './pages/admin/ManageSingleSubjectEditPage';
import { ManageSchoolsPage } from './pages/admin/ManageSchoolsPage';
import { ManageSchoolEditPage } from './pages/admin/ManageSchoolEditPage';
import { ManageSponsorsPage } from './pages/admin/ManageSponsorsPage';
import { ManageSponsorEditPage } from './pages/admin/ManageSponsorEditPage';
import { ManagePartnersPage } from './pages/admin/ManagePartnersPage';
import { ManagePartnerEditPage } from './pages/admin/ManagePartnerEditPage';
import { ManageAffiliatesPage } from './pages/admin/ManageAffiliatesPage';
import { ManageAffiliateEditPage } from './pages/admin/ManageAffiliateEditPage';
import { ManagePaymentsPage } from './pages/admin/ManagePaymentsPage';
import { ManageDesignSystemPage } from './pages/admin/ManageDesignSystemPage';
import { ManageScholarshipsPage } from './pages/admin/ManageScholarshipsPage';
import { ManageSponsorshipsPage } from './pages/admin/ManageSponsorshipsPage';
import { ManagePartnershipsPage } from './pages/admin/ManagePartnershipsPage';
import { ManageLeadsPage } from './pages/admin/ManageLeadsPage';
import { ManageCommissionsPage } from './pages/admin/ManageCommissionsPage';
import { ManageClassroomsPage } from './pages/admin/ManageClassroomsPage';
import { ManageStudentCertificatesPage } from './pages/admin/ManageStudentCertificatesPage';
import { ManageContentPage } from './pages/admin/ManageContentPage';
import { ManageSchoolReportsPage } from './pages/admin/ManageSchoolReportsPage';
import { ManageCouponsPage } from './pages/admin/ManageCouponsPage';
import { ManageCampaignsPage } from './pages/admin/ManageCampaignsPage';
import { ManageLibraryPage } from './pages/admin/ManageLibraryPage';
import { ManageLibraryEditPage } from './pages/admin/ManageLibraryEditPage';
import { ManageMarketplacePage } from './pages/admin/ManageMarketplacePage';
import { ManageMarketplaceEditPage } from './pages/admin/ManageMarketplaceEditPage';
import { ManageCareersPage } from './pages/admin/ManageCareersPage';
import { ManageCareersEditPage } from './pages/admin/ManageCareersEditPage';
import { ManageSchedulePage } from './pages/admin/ManageSchedulePage';
import { ManageNewslettersPage } from './pages/admin/ManageNewslettersPage';
import { ManageNewsletterEditPage } from './pages/admin/ManageNewsletterEditPage';
import { ManageSupportPage } from './pages/admin/ManageSupportPage';
import { ManageSupportTicketDetailsPage } from './pages/admin/ManageSupportTicketDetailsPage';
import { ManageFinancingPage } from './pages/admin/ManageFinancingPage';
import { ManageFinancingEquipmentEditPage } from './pages/admin/ManageFinancingEquipmentEditPage';

// Auth Imports
import { AuthLayout } from './pages/auth/AuthLayout';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { AboutPage } from './pages/AboutPage';
import { MarketplacePublicPage } from './pages/MarketplacePublicPage';
import { ScholarshipPage } from './pages/ScholarshipPage';
import { CareersPage } from './pages/careers/CareersPage';
import { LegalLayout } from './pages/legal/LegalLayout';
import { CompliancePage } from './pages/legal/CompliancePage';
import { TermsPage } from './pages/legal/TermsPage';
import { TransparencyPage } from './pages/legal/TransparencyPage';
import { PlaceholderPage } from './pages/admin/PlaceholderPage';
import { ContactPage } from './pages/ContactPage';

const isValidLocale = (locale: string | undefined): locale is Locale => {
    return !!locale && Object.values(Locale).includes(locale as Locale);
};

const getBrowserLocale = (): Locale => {
    const browserLang = navigator.language.split('-')[0] as Locale;
    return isValidLocale(browserLang) ? browserLang : Locale.English;
};

const LocaleWrapper: React.FC = () => {
    const { locale } = useParams<{ locale: string }>();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!isValidLocale(locale)) {
            const browserLocale = getBrowserLocale();
            const newPath = location.pathname.replace(`/${locale}`, `/${browserLocale}`);
            navigate(newPath, { replace: true });
        }
    }, [locale, navigate, location.pathname]);

    if (!isValidLocale(locale)) {
        return null; // or a loading spinner
    }

    return (
        <I18nProvider locale={locale}>
            <Outlet />
        </I18nProvider>
    );
};

const MainLayout: React.FC<{ marketplaceOffers: MarketplaceOffer[] }> = ({ marketplaceOffers }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen font-sans bg-ift-page-bg text-ift-dark-blue">
            <Header />
            <main className="flex-grow">
                <Outlet context={{ marketplaceOffers }}/>
            </main>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>(MOCK_ADMIN_COURSES);
    const [marketplaceOffers, setMarketplaceOffers] = useState<MarketplaceOffer[]>(MOCK_MARKETPLACE_OFFERS);
    const [financingApplications, setFinancingApplications] = useState<FinancingApplication[]>(MOCK_FINANCING_APPLICATIONS);

    return (
        <HashRouter>
            <Routes>
                <Route path="/:locale" element={<LocaleWrapper />}>
                    {/* Public facing pages */}
                    <Route element={<MainLayout marketplaceOffers={marketplaceOffers} />}>
                        <Route index element={<Navigate to="home" replace />} />
                        <Route path="home" element={<HomePage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="marketplace" element={<MarketplacePublicPage />} />
                        <Route path="scholarship" element={<ScholarshipPage />} />
                        <Route path="careers" element={<CareersPage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route element={<LegalLayout />}>
                          <Route path="compliance" element={<CompliancePage />} />
                          <Route path="terms" element={<TermsPage />} />
                          <Route path="transparency" element={<TransparencyPage />} />
                        </Route>
                    </Route>

                    {/* Authentication pages */}
                    <Route element={<AuthLayout />}>
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                    </Route>

                    {/* Student Panel */}
                    <Route path="student" element={<StudentLayout marketplaceOffers={marketplaceOffers} financingApplications={financingApplications} setFinancingApplications={setFinancingApplications} />}>
                        <Route index element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<StudentDashboardPage />} />
                        <Route path="liveclass" element={<StudentLiveClassPage />} />
                        <Route path="courses" element={<StudentCoursesPage />} />
                        <Route path="classroom" element={<StudentClassroomPage />} />
                        <Route path="schedule" element={<StudentSchedulePage />} />
                        <Route path="marketplace" element={<StudentMarketplacePage />} />
                        <Route path="marketplace/:offerId" element={<StudentMarketplaceOfferPage />} />
                        <Route path="documents" element={<StudentDocumentsPage />} />
                        <Route path="certificate" element={<StudentCertificatePage />} />
                        <Route path="webmail" element={<StudentWebmailPage />} />
                        <Route path="library" element={<StudentLibraryPage />} />
                        <Route path="profile" element={<StudentProfilePage />} />
                        <Route path="payment" element={<StudentPaymentPage />} />
                        <Route path="newsletter" element={<StudentNewsletterPage />} />
                        <Route path="careers" element={<StudentCareersPage />} />
                        <Route path="opportunities" element={<StudentOpportunitiesPage />} />
                        <Route path="financing" element={<StudentFinancingPage />} />
                        <Route path="settings" element={<StudentSettingsPage />} />
                        <Route path="support" element={<StudentSupportPage />} />
                    </Route>
                    
                    {/* Teacher Panel */}
                    <Route path="teacher" element={<TeacherLayout />}>
                        <Route index element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<TeacherDashboardPage />} />
                        <Route path="liveclass" element={<StudentLiveClassPage />} /> {/* Re-use for demo */}
                        <Route path="courses" element={<TeacherCoursesPage />} />
                        <Route path="courses/:courseId/details" element={<TeacherCourseDetailsPage />} />
                        <Route path="classroom" element={<StudentClassroomPage />} /> {/* Re-use for demo */}
                        <Route path="content" element={<TeacherContentPage />} />
                        <Route path="schedule" element={<StudentSchedulePage />} /> {/* Re-use for demo */}
                        <Route path="marketplace" element={<StudentMarketplacePage />} /> {/* Re-use for demo */}
                        <Route path="documents" element={<StudentDocumentsPage />} /> {/* Re-use for demo */}
                        <Route path="webmail" element={<StudentWebmailPage />} /> {/* Re-use for demo */}
                        <Route path="library" element={<StudentLibraryPage />} /> {/* Re-use for demo */}
                        <Route path="profile" element={<StudentProfilePage />} /> {/* Re-use for demo */}
                        <Route path="payment" element={<StudentPaymentPage />} /> {/* Re-use for demo */}
                        <Route path="newsletter" element={<StudentNewsletterPage />} /> {/* Re-use for demo */}
                        <Route path="settings" element={<StudentSettingsPage />} /> {/* Re-use for demo */}
                        <Route path="support" element={<StudentSupportPage />} /> {/* Re-use for demo */}
                    </Route>

                    {/* School Panel */}
                    <Route path="school" element={<SchoolLayout />}>
                        <Route index element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<SchoolDashboardPage />} />
                        <Route path="scholarships" element={<SchoolScholarshipsPage />} />
                        <Route path="teachers" element={<SchoolTeachersPage />} />
                        <Route path="reports" element={<SchoolReportsPage />} />
                        <Route path="documents" element={<SchoolDocumentsPage />} />
                        <Route path="profile" element={<SchoolProfilePage />} />
                        <Route path="newsletter" element={<StudentNewsletterPage />} /> {/* Re-use for demo */}
                        <Route path="settings" element={<SchoolSettingsPage />} />
                        <Route path="support" element={<SchoolSupportPage />} />
                    </Route>

                    {/* Sponsor Panel */}
                    <Route path="sponsor" element={<SponsorLayout />}>
                        <Route index element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<SponsorDashboardPage />} />
                        <Route path="sponsorship" element={<SponsorshipListPage />} />
                        <Route path="sponsorship/:sponsorshipId/details" element={<SponsorshipDetailsPage />} />
                        <Route path="documents" element={<SponsorDocumentsPage />} />
                        <Route path="reports" element={<SponsorReportsPage />} />
                        <Route path="payment" element={<SponsorPaymentPage />} />
                        <Route path="payment/:paymentId/receipt" element={<PlaceholderPage title="Receipt Page" />} />
                        <Route path="profile" element={<SponsorProfilePage />} />
                        <Route path="newsletter" element={<StudentNewsletterPage />} /> {/* Re-use for demo */}
                        <Route path="careers" element={<SponsorCareersPage />} />
                        <Route path="settings" element={<SponsorSettingsPage />} />
                        <Route path="support" element={<SponsorSupportPage />} />
                    </Route>

                    {/* Partner Panel */}
                    <Route path="partner" element={<PartnerLayout />}>
                        <Route index element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<PartnerDashboardPage />} />
                        <Route path="partnership" element={<PartnershipListPage />} />
                        <Route path="partnership/:partnershipId/details" element={<PartnershipDetailsPage />} />
                        <Route path="documents" element={<PartnerDocumentsPage />} />
                        <Route path="reports" element={<PartnerReportsPage />} />
                        <Route path="profile" element={<PartnerProfilePage />} />
                        <Route path="newsletter" element={<StudentNewsletterPage />} /> {/* Re-use for demo */}
                        <Route path="settings" element={<PartnerSettingsPage />} />
                        <Route path="support" element={<PartnerSupportPage />} />
                    </Route>

                    {/* Affiliate Panel */}
                    <Route path="affiliate" element={<AffiliateLayout />}>
                        <Route index element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<AffiliateDashboardPage />} />
                        <Route path="sales_page" element={<AffiliateSalesPage />} />
                        <Route path="leads" element={<AffiliateLeadsPage />} />
                        <Route path="commissions" element={<AffiliateCommissionsPage />} />
                        <Route path="coupons" element={<AffiliateCouponsPage />} />
                        <Route path="campaign" element={<AffiliateCampaignPage />} />
                        <Route path="profile" element={<AffiliateProfilePage />} />
                        <Route path="documents" element={<AffiliateDocumentsPage />} />
                        <Route path="newsletter" element={<StudentNewsletterPage />} /> {/* Re-use for demo */}
                        <Route path="settings" element={<AffiliateSettingsPage />} />
                        <Route path="support" element={<AffiliateSupportPage />} />
                    </Route>

                    {/* Admin Panel */}
                    <Route path="admin" element={<AdminLayout marketplaceOffers={marketplaceOffers} setMarketplaceOffers={setMarketplaceOffers} financingApplications={financingApplications} setFinancingApplications={setFinancingApplications} />}>
                        <Route index element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<AdminDashboardPage />} />
                        <Route path="settings" element={<StudentSettingsPage />} /> {/* Re-use */}
                        <Route path="manage-design-system" element={<ManageDesignSystemPage />} />
                        <Route path="manage-profile" element={<StudentProfilePage />} /> {/* Re-use */}
                        
                        {/* GENERAL MENU */}
                        <Route path="manage-courses" element={<ManageCoursesPage />} />
                        <Route path="manage-courses/:courseId/edit" element={<ManageCourseEditPage courses={courses} setCourses={setCourses} />} />
                        <Route path="manage-single-subjects/:subjectId/edit" element={<ManageSingleSubjectEditPage />} />
                        <Route path="manage-payments" element={<ManagePaymentsPage />} />
                        <Route path="manage-financing" element={<ManageFinancingPage />} />
                        <Route path="manage-financing/equipment/:equipmentId/edit" element={<ManageFinancingEquipmentEditPage />} />
                        <Route path="manage-schedule" element={<ManageSchedulePage />} />
                        <Route path="manage-marketplace" element={<ManageMarketplacePage />} />
                        <Route path="manage-marketplace/:offerId/edit" element={<ManageMarketplaceEditPage />} />
                        <Route path="manage-library" element={<ManageLibraryPage />} />
                        <Route path="manage-library/:bookId/edit" element={<ManageLibraryEditPage />} />
                        <Route path="manage-newsletters" element={<ManageNewslettersPage />} />
                        <Route path="manage-newsletters/:newsletterId/edit" element={<ManageNewsletterEditPage />} />
                        <Route path="manage-careers" element={<ManageCareersPage />} />
                        <Route path="manage-careers/:careerId/edit" element={<ManageCareersEditPage />} />
                        <Route path="manage-support" element={<ManageSupportPage />} />
                        <Route path="manage-support/:ticketId/details" element={<ManageSupportTicketDetailsPage />} />


                        {/* STUDENTS MENU */}
                        <Route path="manage-students" element={<ManageStudentsPage />} />
                        <Route path="manage-students/:studentId/edit" element={<ManageStudentEditPage />} />
                        <Route path="manage-classrooms" element={<ManageClassroomsPage />} />
                        <Route path="manage-students-certificates" element={<ManageStudentCertificatesPage />} />

                        {/* TEACHERS MENU */}
                        <Route path="manage-teachers" element={<ManageTeachersPage />} />
                        <Route path="manage-teachers/:teacherId/edit" element={<ManageTeacherEditPage />} />
                        <Route path="manage-content" element={<ManageContentPage />} />

                        {/* SCHOOLS MENU */}
                        <Route path="manage-schools" element={<ManageSchoolsPage />} />
                        <Route path="manage-schools/:schoolId/edit" element={<ManageSchoolEditPage />} />
                        <Route path="manage-scholarships" element={<ManageScholarshipsPage />} />
                        <Route path="manage-school-reports" element={<ManageSchoolReportsPage />} />

                        {/* SPONSORS MENU */}
                        <Route path="manage-sponsors" element={<ManageSponsorsPage />} />
                        <Route path="manage-sponsors/:sponsorId/edit" element={<ManageSponsorEditPage />} />
                        <Route path="manage-sponsorships" element={<ManageSponsorshipsPage />} />

                        {/* AFFILIATES MENU */}
                        <Route path="manage-affiliates" element={<ManageAffiliatesPage />} />
                         <Route path="manage-affiliates/:affiliateId/edit" element={<ManageAffiliateEditPage />} />
                        <Route path="manage-leads" element={<ManageLeadsPage />} />
                        <Route path="manage-commissions" element={<ManageCommissionsPage />} />
                        <Route path="manage-coupons" element={<ManageCouponsPage />} />
                        <Route path="manage-campaigns" element={<ManageCampaignsPage />} />

                        {/* PARTNERS MENU */}
                        <Route path="manage-partners" element={<ManagePartnersPage />} />
                         <Route path="manage-partners/:partnerId/edit" element={<ManagePartnerEditPage />} />
                        <Route path="manage-partnerships" element={<ManagePartnershipsPage />} />
                    </Route>

                </Route>
                <Route path="*" element={<Navigate to={`/${getBrowserLocale()}/home`} replace />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
