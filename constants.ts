import { Course, Locale, NavLinkInfo, UserRole, MarketplaceCategory, MarketplaceOffer, SingleSubject, Email, InnovationChallenge, ServiceOffer, AccelerationProgram, CareerListing, Newsletter, StrategicPartner, Notification, FinancedEquipment, FinancingApplication } from './types';

export const COUNTRIES_FOR_SWITCHER: { name: string; locale: Locale }[] = [
  { name: 'International Version', locale: Locale.English },
  { name: 'Brazil', locale: Locale.Portuguese },
  { name: 'Russia', locale: Locale.Russian },
  { name: 'India', locale: Locale.Hindi },
  { name: 'China', locale: Locale.Mandarin },
  { name: 'South Africa', locale: Locale.English },
  { name: 'Saudi Arabia', locale: Locale.Arabic },
  { name: 'Egypt', locale: Locale.Arabic },
  { name: 'United Arab Emirates', locale: Locale.Arabic },
  { name: 'Ethiopia', locale: Locale.Amharic },
  { name: 'Iran', locale: Locale.Persian },
  { name: 'Indonesia', locale: Locale.Bahasa },
  { name: 'Belarus', locale: Locale.Belarusian },
  { name: 'Bolivia', locale: Locale.Spanish },
  { name: 'Kazakhstan', locale: Locale.Kazakh },
  { name: 'Cuba', locale: Locale.Spanish },
  { name: 'Malaysia', locale: Locale.Malay },
  { name: 'Nigeria', locale: Locale.English },
  { name: 'Thailand', locale: Locale.Thai },
  { name: 'Uganda', locale: Locale.English },
  { name: 'Uzbekistan', locale: Locale.Uzbek },
];

export const LANGUAGE_NAMES: { [key in Locale]: string } = {
  [Locale.Portuguese]: 'Português (BR)',
  [Locale.English]: 'English (Global)',
  [Locale.Russian]: 'Русский',
  [Locale.Hindi]: 'हिन्दी',
  [Locale.Mandarin]: '中文',
  [Locale.Persian]: 'فارسی',
  [Locale.Arabic]: 'العربية',
  [Locale.Bahasa]: 'Bahasa Indonesia',
  [Locale.Amharic]: 'አማርኛ',
  [Locale.Spanish]: 'Español',
  [Locale.Belarusian]: 'Беларуская',
  [Locale.Kazakh]: 'Қазақша',
  [Locale.Malay]: 'Bahasa Melayu',
  [Locale.Thai]: 'ภาษาไทย',
  [Locale.Uzbek]: 'Oʻzbekcha',
};

export const MOCK_ADMIN_COURSES: Course[] = [
  {
    id: 1,
    titleKey: 'course1_title',
    descriptionKey: 'course1_description',
    targetAudienceKey: 'course1_audience',
    durationKey: 'course1_duration',
    priceKey: 'course1_price',
    price: 349.0,
    status: 'active',
    students: 120,
    progress: 75,
    modules: [
      {
        id: 'm1',
        title: 'Módulo 1: Introdução à IA (Semanas 1-2)',
        lessons: [
          { id: 'l1-1', title: 'Aula 1: O que é IA? História e conceitos básicos', type: 'video', duration: '15 min', completed: true, videoUrl: 'https://www.youtube.com/embed/0Uu_VJeVVfo', pdfUrl: '#', content: 'Nesta aula introdutória, exploramos a fascinante história da Inteligência Artificial, desde suas origens teóricas até os avanços modernos. Cobrimos conceitos fundamentais como machine learning, deep learning e redes neurais, estabelecendo a base para o restante do curso.', materials: [{ id: 'sm1', title: 'Glossário de Termos de IA.pdf', url: '#' }] },
          { id: 'l1-2', title: 'Aula 2: IA no cotidiano (exemplos práticos)', type: 'video', duration: '20 min', completed: true, videoUrl: 'https://www.youtube.com/embed/0Uu_VJeVVfo', pdfUrl: '#', content: 'Descubra como a IA já faz parte do seu dia a dia, desde os algoritmos de recomendação em serviços de streaming até os assistentes de voz em seu smartphone. Analisamos casos de uso práticos para desmistificar a tecnologia.', materials: [{ id: 'sm2', title: 'Infográfico - IA no seu Dia.pdf', url: '#' }] },
          { id: 'l1-3', title: 'Aula 3: Tipos de IA (Machine Learning, Deep Learning)', type: 'document', duration: '10 min', completed: true, videoUrl: '', pdfUrl: '#', content: 'Aprofunde-se nas principais subcategorias da IA. Diferenciamos Machine Learning, Deep Learning e outras abordagens, explicando como cada uma funciona e onde são mais eficazes. Este material de leitura é essencial para entender o cenário da IA.', materials: [] },
          { id: 'l1-4', title: 'Aula 4: Mitos vs Realidade sobre IA', type: 'video', duration: '18 min', completed: false, videoUrl: 'https://www.youtube.com/embed/0Uu_VJeVVfo', pdfUrl: '#', content: 'Nesta aula, vamos desmistificar algumas das ideias mais comuns sobre Inteligência Artificial, separando fatos de ficção científica. Abordamos temas como a "consciência" da IA e o futuro do trabalho.', materials: [] },
        ],
      },
      {
        id: 'm2',
        title: 'Módulo 2: IA nas Profissões (Semanas 3-4)',
        lessons: [
          { id: 'l2-1', title: 'Aula 5: IA na Medicina (diagnósticos, telemedicina)', type: 'video', duration: '22 min', completed: false, videoUrl: 'https://www.youtube.com/embed/0Uu_VJeVVfo', pdfUrl: '#', content: 'Veja como a IA está revolucionando a área da saúde, auxiliando em diagnósticos mais precisos, personalizando tratamentos e otimizando a gestão hospitalar. Discutimos tanto as tecnologias atuais quanto as futuras.', materials: [{ id: 'sm3', title: 'Case Study - IA em Radiologia.pdf', url: '#' }] },
        ],
      },
    ],
  },
   {
    id: 2,
    titleKey: 'course2_title',
    descriptionKey: 'course2_description',
    targetAudienceKey: 'course2_audience',
    durationKey: 'course2_duration',
    priceKey: 'course2_price',
    price: 499.00,
    status: 'active',
    students: 50,
    progress: 10,
    modules: [],
  },
  {
    id: 3,
    titleKey: 'course3_title',
    descriptionKey: 'course3_description',
    targetAudienceKey: 'course3_audience',
    durationKey: 'course3_duration',
    priceKey: 'course3_price',
    price: 549.00,
    status: 'active',
    students: 85,
    progress: 40,
    modules: [],
  },
];


// Fix: Refactor map to avoid parameter destructuring which can cause ReferenceErrors in some JS engines.
export const MOCK_COURSES: Omit<Course, 'modules'>[] = MOCK_ADMIN_COURSES.map(course => {
    const { modules, ...rest } = course;
    return rest;
});


export const MOCK_ENROLLED_COURSES = [
    {
        ...MOCK_COURSES[0],
        progress: 75,
        status: 'inprogress',
    },
    {
        ...MOCK_COURSES[1],
        progress: 25,
        status: 'inprogress',
    },
    {
        ...MOCK_COURSES[2],
        progress: 100,
        status: 'completed',
    },
];

export const MOCK_SINGLE_SUBJECTS: SingleSubject[] = [
    {
        id: 'SS01',
        titleKey: 'single_subject1_title',
        descriptionKey: 'single_subject1_desc',
        partner: {
            name: 'UNIBF',
            logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758919597/UNIBF_Avatar_hcxii4.png',
        },
    },
    {
        id: 'SS02',
        titleKey: 'single_subject2_title',
        descriptionKey: 'single_subject2_desc',
        partner: {
            name: 'UNIBF',
            logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758919597/UNIBF_Avatar_hcxii4.png',
        },
    },
    {
        id: 'SS03',
        titleKey: 'single_subject3_title',
        descriptionKey: 'single_subject3_desc',
        partner: {
            name: 'UNIBF',
            logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758919597/UNIBF_Avatar_hcxii4.png',
        },
    },
];

// Fix: Add explicit type NavLinkInfo[] to ensure icon properties are correctly typed.
export const STUDENT_NAV_LINKS: NavLinkInfo[] = [
    { name: 'student_sidebar_dashboard', href: '/dashboard', icon: 'DashboardIcon' },
    { name: 'student_sidebar_liveclass', href: '/liveclass', icon: 'LiveIcon' },
    { name: 'student_sidebar_courses', href: '/courses', icon: 'BookOpenIcon' },
    { name: 'student_sidebar_classroom', href: '/classroom', icon: 'PlayCircleIcon' },
    { name: 'student_sidebar_schedule', href: '/schedule', icon: 'CalendarIcon' },
    { name: 'student_sidebar_marketplace', href: '/marketplace', icon: 'CartIcon' },
    { name: 'student_sidebar_documents', href: '/documents', icon: 'DocumentIcon' },
    { name: 'student_sidebar_certificate', href: '/certificate', icon: 'CertificateIcon' },
    { name: 'student_sidebar_webmail', href: '/webmail', icon: 'MailIcon' },
    { name: 'student_sidebar_library', href: '/library', icon: 'LibraryIcon' },
    { name: 'student_sidebar_careers', href: '/careers', icon: 'BriefcaseIcon' },
    { name: 'student_sidebar_opportunities', href: '/opportunities', icon: 'LightbulbIcon' },
    { name: 'student_sidebar_financing', href: '/financing', icon: 'ShoppingBasketIcon' },
    { name: 'student_sidebar_newsletter', href: '/newsletter', icon: 'NewsletterIcon' },
];

// Fix: Add explicit type NavLinkInfo[] to ensure icon properties are correctly typed.
export const STUDENT_PROFILE_LINKS: NavLinkInfo[] = [
    { name: 'student_sidebar_profile', href: '/profile', icon: 'UserIcon' },
    { name: 'student_sidebar_payment', href: '/payment', icon: 'CreditCardIcon' },
    { name: 'student_sidebar_settings', href: '/settings', icon: 'SettingsIcon' },
    { name: 'student_sidebar_support', href: '/support', icon: 'HelpCircleIcon' },
];

export const MARKETPLACE_CATEGORIES: { id: MarketplaceCategory, nameKey: string }[] = [
    { id: 'ai', nameKey: 'marketplace_cat_ai' },
    { id: 'universities', nameKey: 'marketplace_cat_universities' },
    { id: 'software', nameKey: 'marketplace_cat_software' },
    { id: 'informatica', nameKey: 'marketplace_cat_informatica' },
    { id: 'equipamentos', nameKey: 'marketplace_cat_equipamentos' },
    { id: 'other', nameKey: 'marketplace_cat_other' },
];

// FIX: Added the required 'createdAt' property to all MarketplaceOffer objects to satisfy the type definition.
export const MOCK_MARKETPLACE_OFFERS: MarketplaceOffer[] = [
    // AI
    { id: 'MKT_GHCopilot', title: 'GitHub Copilot Pro', description: 'Assistente de programação com IA', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602377/github-copilot_y4w7at.png', status: 'active', category: 'ai', tutorialKey: 'offer_ghcopilot_tutorial', benefitsKey: ['offer_ghcopilot_benefit1'], partnerUrl: 'https://education.github.com/pack', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_NotionAI', title: 'Notion AI', description: 'Gerenciamento de projetos com IA', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602379/notion-ai_b9h8na.png', status: 'active', category: 'ai', tutorialKey: 'offer_notionai_tutorial', benefitsKey: ['offer_notionai_benefit1'], partnerUrl: 'https://www.notion.so/product/ai', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_Perplexity', title: 'Perplexity Pro', description: 'Assistente de pesquisa com IA', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602379/perplexity-ai_xyempj.png', status: 'active', category: 'ai', tutorialKey: 'offer_perplexity_tutorial', benefitsKey: ['offer_perplexity_benefit1'], partnerUrl: 'https://www.perplexity.ai/', createdAt: '2024-07-01T10:00:00Z' },
    // Universities (Learning)
    { id: 'MKT_DataCamp', title: 'DataCamp Premium', description: 'Cursos de ciência de dados', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602377/datacamp_p58q3j.png', status: 'active', category: 'universities', tutorialKey: 'offer_datacamp_tutorial', benefitsKey: ['offer_datacamp_benefit1'], partnerUrl: 'https://www.datacamp.com/pricing', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_Scrimba', title: 'Scrimba Pro', description: 'Cursos interativos de programação', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602380/scrimba_vbfyjt.png', status: 'active', category: 'universities', tutorialKey: 'offer_scrimba_tutorial', benefitsKey: ['offer_scrimba_benefit1'], partnerUrl: 'https://education.github.com/pack', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_LinkedInL', title: 'LinkedIn Learning', description: 'Cursos profissionais online', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602378/linkedin-learning_ox8pom.png', status: 'active', category: 'universities', tutorialKey: 'offer_linkedinl_tutorial', benefitsKey: ['offer_linkedinl_benefit1'], partnerUrl: '#', createdAt: '2024-07-01T10:00:00Z' },
    // Software
    { id: 'MKT_Adobe', title: 'Adobe Creative Cloud', description: '65% de desconto para estudantes', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758854883/creative-cloud_d8v8qi.png', status: 'active', category: 'software', tutorialKey: 'offer_adobe_tutorial', benefitsKey: ['offer_adobe_benefit1'], partnerUrl: 'https://www.adobe.com/creativecloud/buy/students.html', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_GitHubPro', title: 'Github Pro', description: 'Gratuito para estudantes', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758854958/github_kas8dh.png', status: 'active', category: 'software', tutorialKey: 'offer_github_tutorial', benefitsKey: ['offer_github_benefit1'], partnerUrl: 'https://education.github.com/pack', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_CanvaPro', title: 'Canva Pro', description: 'Gratuito para estudantes', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758854881/canva_tk3kmh.png', status: 'active', category: 'software', tutorialKey: 'offer_canva_tutorial', benefitsKey: ['offer_canva_benefit1'], partnerUrl: 'https://www.canva.com/education/', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_Figma', title: 'Figma Professional', description: 'Plano profissional gratuito', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602377/figma_bswavg.png', status: 'active', category: 'software', tutorialKey: 'offer_figma_tutorial', benefitsKey: ['offer_figma_benefit1'], partnerUrl: 'https://www.figma.com/education/', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_JetBrains', title: 'JetBrains All Products', description: 'Todas as IDEs profissionais grátis', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602378/jetbrains_ic9ihg.png', status: 'active', category: 'software', tutorialKey: 'offer_jetbrains_tutorial', benefitsKey: ['offer_jetbrains_benefit1'], partnerUrl: 'https://www.jetbrains.com/community/education/', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_MSOffice', title: 'Microsoft Office 365', description: 'Suíte Office completa grátis', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602379/office-365_y9lnj5.png', status: 'active', category: 'software', tutorialKey: 'offer_msoffice_tutorial', benefitsKey: ['offer_msoffice_benefit1'], partnerUrl: 'https://www.microsoft.com/en-us/education/products/office', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_Slack', title: 'Slack Standard', description: 'Gratuito para equipes de estudantes', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602380/slack_y9spsj.png', status: 'active', category: 'software', tutorialKey: 'offer_slack_tutorial', benefitsKey: ['offer_slack_benefit1'], partnerUrl: 'https://slack.com/pricing', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_Miro', title: 'Miro Team', description: 'Colaboração visual gratuita', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602378/miro_udsoax.png', status: 'active', category: 'software', tutorialKey: 'offer_miro_tutorial', benefitsKey: ['offer_miro_benefit1'], partnerUrl: 'https://miro.com/education/', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_Sketch', title: 'Sketch', description: '50% de desconto em design UI/UX', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602380/sketch_tnhuil.png', status: 'active', category: 'software', tutorialKey: 'offer_sketch_tutorial', benefitsKey: ['offer_sketch_benefit1'], partnerUrl: 'https://www.sketch.com/store/edu/', createdAt: '2024-07-01T10:00:00Z' },
    // Other
    { id: 'MKT_Spotify', title: 'Spotify Premium', description: '50% de desconto', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602380/spotify_wac2lo.png', status: 'active', category: 'other', tutorialKey: 'offer_spotify_tutorial', benefitsKey: ['offer_spotify_benefit1'], partnerUrl: 'https://www.spotify.com/student/', createdAt: '2024-07-01T10:00:00Z' },
    { id: 'MKT_Discord', title: 'Discord Nitro', description: 'Recursos aprimorados do Discord', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719602377/discord_cxdw5p.png', status: 'active', category: 'other', tutorialKey: 'offer_discord_tutorial', benefitsKey: ['offer_discord_benefit1'], partnerUrl: 'https://discord.com/nitro', createdAt: '2024-07-01T10:00:00Z' },
    // Old offers
    { id: 'MKT08', title: 'Dell All in One i7', description: '15% de desconto para estudantes', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758922463/dell_ckdnnw.png', status: 'active', category: 'informatica', tutorialKey: 'offer_dell_tutorial', benefitsKey: ['offer_dell_benefit1'], partnerUrl: 'https://dell.com/students', createdAt: '2024-06-20T10:00:00Z' },
    { id: 'MKT09', title: 'Samsung Galaxy S24', description: '10% de desconto e fone grátis', logo: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758922463/s24_iihe4k.jpg', status: 'active', category: 'equipamentos', tutorialKey: 'offer_samsung_tutorial', benefitsKey: ['offer_samsung_benefit1', 'offer_samsung_benefit2'], partnerUrl: 'https://samsung.com/students', createdAt: '2024-06-20T10:00:00Z' },
];

export const MOCK_LIBRARY_BOOKS = [
    { id: 'LIB01', title: 'Inteligência Artificial: Uma Abordagem Modern', author: 'Stuart Russell & Peter Norvig', cover: 'https://m.media-amazon.com/images/I/81M62j2a5kL._AC_UF1000,1000_QL80_.jpg', status: 'available' },
    { id: 'LIB02', title: 'Superinteligência: Caminhos, Perigos, Estratégias', author: 'Nick Bostrom', cover: 'https://m.media-amazon.com/images/I/81i+z5a7N8L._AC_UF1000,1000_QL80_.jpg', status: 'available' },
    { id: 'LIB03', title: 'Vida 3.0: O Ser Humano na Era da Inteligência Artificial', author: 'Max Tegmark', cover: 'https://m.media-amazon.com/images/I/81h9vjVp6EL._AC_UF1000,1000_QL80_.jpg', status: 'available' },
    { id: 'LIB04', title: 'Homo Deus: Uma Breve História do Amanhã', author: 'Yuval Noah Harari', cover: 'https://m.media-amazon.com/images/I/71zH266Y1OL._AC_UF1000,1000_QL80_.jpg', status: 'rented' },
];

export const MOCK_CAREER_LISTINGS: CareerListing[] = [
    { id: 'CAR01', title: 'Estágio em IA', company: 'Tech Corp', location: 'Remoto', type: 'Estágio', status: 'open', level: 'internship' },
    { id: 'CAR02', title: 'Desenvolvedor Machine Learning Jr', company: 'Inova Tech', location: 'São Paulo, BR', type: 'Integral', status: 'open', level: 'junior' },
    { id: 'CAR03', title: 'Analista de Dados', company: 'Future Analytics', location: 'Rio de Janeiro, BR', type: 'Integral', status: 'closed', level: 'junior' },
    { id: 'CAR04', title: 'Programa de Trainee - Dados', company: 'BRICS Data Solutions', location: 'Remoto', type: 'Trainee', status: 'open', level: 'trainee' },
    { id: 'CAR05', title: 'Engenheiro de Software Pleno', company: 'Global Tech', location: 'Belo Horizonte, BR', type: 'Integral', status: 'open', level: 'mid' },
    { id: 'CAR06', title: 'Estágio em Desenvolvimento Web', company: 'Web Wizards', location: 'Remoto', type: 'Estágio', status: 'open', level: 'internship' },
];

export const MOCK_PAYMENTS = [
    { id: 'TXN12345', date: '2024-06-20', description: 'Mensalidade - IA Aplicada às Profissões', amount: 'R$ 87,25', status: 'Pago' },
    { id: 'TXN12344', date: '2024-05-20', description: 'Mensalidade - IA Aplicada às Profissões', amount: 'R$ 87,25', status: 'Pago' },
    { id: 'TXN12343', date: '2024-04-20', description: 'Mensalidade - IA Aplicada às Profissões', amount: 'R$ 87,25', status: 'Pago' },
];

export const MOCK_DOCUMENTS = [
    { name: 'Identidade_Frente.pdf', date: '2024-03-01', size: '1.2MB' },
    { name: 'Comprovante_Residencia.pdf', date: '2024-03-01', size: '800KB' },
];

export const MOCK_EMAILS: Email[] = [
    {
        id: '1',
        from: 'Secretaria',
        fromKey: 'webmail_from_registrar',
        subject: 'Bem-vindo ao IFT BRICS!',
        subjectKey: 'webmail_subject_welcome',
        body: 'Olá,\n\nSeja bem-vindo à nossa plataforma! Estamos muito felizes em tê-lo conosco.\n\nExplore seus cursos e não hesite em nos contatar se tiver alguma dúvida.\n\nAtenciosamente,\nEquipe IFT BRICS',
        bodyKey: 'webmail_body_welcome',
        time: 'Ontem',
        read: false,
        favorited: true,
    },
    {
        id: '2',
        from: 'Prof. Celso Jungbluth',
        fromKey: 'webmail_from_teacher',
        subject: 'Materiais da Aula 1',
        subjectKey: 'webmail_subject_materials',
        body: 'Prezados alunos,\n\nOs materiais complementares para a Aula 1 já estão disponíveis na plataforma.\n\nBons estudos!',
        bodyKey: 'webmail_body_materials',
        time: '2 dias atrás',
        read: false,
        favorited: false,
    },
    {
        id: '3',
        from: 'Plataforma IFT',
        fromKey: 'webmail_from_platform',
        subject: 'Atualização de Termos de Serviço',
        subjectKey: 'webmail_subject_terms',
        body: 'Informamos que nossos Termos de Serviço foram atualizados. Por favor, revise-os em seu perfil.',
        bodyKey: 'webmail_body_terms',
        time: '5 dias atrás',
        read: true,
        favorited: false,
    }
];

export const MOCK_STUDENT_STATS = {
    inProgress: MOCK_ENROLLED_COURSES.filter(c => c.status === 'inprogress').length,
    completed: MOCK_ENROLLED_COURSES.filter(c => c.status === 'completed').length,
    certificates: MOCK_ENROLLED_COURSES.filter(c => c.status === 'completed').length,
};

export const MOCK_CONTINUE_LEARNING = {
    courseTitleKey: 'course1_title',
    lessonTitle: 'Aula 4: Mitos vs Realidade sobre IA',
    moduleTitle: 'Módulo 1: Introdução à IA (Semanas 1-2)',
};

export const MOCK_UPCOMING_SCHEDULE = [
    { type: 'live_class', title: 'Aula ao Vivo: Módulo 2', time: '2024-07-25T19:00:00', icon: 'VideoIcon' },
    { type: 'assignment_deadline', title: 'Entrega do Projeto 1', time: '2024-07-28T23:59:00', icon: 'FileTextIcon' },
];

export const MOCK_INNOVATION_CHALLENGES: InnovationChallenge[] = [
    { id: 'IC01', titleKey: 'challenge1_title', descriptionKey: 'challenge1_desc', company: 'Tech Corp', prizeKey: 'challenge1_prize', status: 'open' },
    { id: 'IC02', titleKey: 'challenge2_title', descriptionKey: 'challenge2_desc', company: 'Inova Tech', prizeKey: 'challenge2_prize', status: 'open' },
    { id: 'IC03', titleKey: 'challenge3_title', descriptionKey: 'challenge3_desc', company: 'Future Analytics', prizeKey: 'challenge3_prize', status: 'closed' },
];

export const MOCK_SERVICE_OFFERS: ServiceOffer[] = [
    { id: 'SO01', titleKey: 'service1_title', descriptionKey: 'service1_desc', client: 'Empresa Criativa', budgetKey: 'service1_budget', status: 'open' },
    { id: 'SO02', titleKey: 'service2_title', descriptionKey: 'service2_desc', client: 'Marketing Digital BR', budgetKey: 'service2_budget', status: 'open' },
];

export const MOCK_ACCELERATION_PROGRAMS: AccelerationProgram[] = [
    { id: 'AP01', titleKey: 'program1_title', descriptionKey: 'program1_desc', offeredByKey: 'program1_offered', status: 'open' },
    { id: 'AP02', titleKey: 'program2_title', descriptionKey: 'program2_desc', offeredByKey: 'program2_offered', status: 'closed' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
    { id: 'N1', messageKey: 'notification_welcome', time: '1 day ago', read: false },
    { id: 'N2', messageKey: 'notification_assignment', time: '2 days ago', read: false },
    { id: 'N3', messageKey: 'notification_live_class', time: '3 days ago', read: true },
];

// Teacher Panel Data
export const TEACHER_NAV_LINKS: NavLinkInfo[] = [
    { name: 'teacher_sidebar_dashboard', href: '/dashboard', icon: 'DashboardIcon' },
    { name: 'teacher_sidebar_liveclass', href: '/liveclass', icon: 'LiveIcon' },
    { name: 'teacher_sidebar_courses', href: '/courses', icon: 'BookOpenIcon' },
    { name: 'teacher_sidebar_classroom', href: '/classroom', icon: 'PlayCircleIcon' },
    { name: 'teacher_sidebar_content', href: '/content', icon: 'FilePlusIcon' },
    { name: 'teacher_sidebar_schedule', href: '/schedule', icon: 'CalendarIcon' },
    { name: 'teacher_sidebar_marketplace', href: '/marketplace', icon: 'CartIcon' },
    { name: 'teacher_sidebar_documents', href: '/documents', icon: 'DocumentIcon' },
    { name: 'teacher_sidebar_webmail', href: '/webmail', icon: 'MailIcon' },
    { name: 'teacher_sidebar_library', href: '/library', icon: 'LibraryIcon' },
    { name: 'teacher_sidebar_newsletter', href: '/newsletter', icon: 'NewsletterIcon' },
];

export const TEACHER_PROFILE_LINKS: NavLinkInfo[] = [
    { name: 'teacher_sidebar_profile', href: '/profile', icon: 'UserIcon' },
    { name: 'teacher_sidebar_payment', href: '/payment', icon: 'CreditCardIcon' },
    { name: 'teacher_sidebar_settings', href: '/settings', icon: 'SettingsIcon' },
    { name: 'teacher_sidebar_support', href: '/support', icon: 'HelpCircleIcon' },
];

// Fix: Refactor map to avoid parameter destructuring and add explicit type.
export const MOCK_TEACHER_COURSES: Omit<Course, 'modules'>[] = MOCK_ADMIN_COURSES.map(course => {
    const { modules, ...rest } = course;
    return rest;
});

export const MOCK_STUDENTS = [
    { id: 'S001', name: 'Alice Johnson', joined: '2024-03-01', progress: 95, grade: 'A', email: 'alice.j@example.com', status: 'active' },
    { id: 'S002', name: 'Bob Williams', joined: '2024-03-01', progress: 80, grade: 'B', email: 'bob.w@example.com', status: 'active' },
    { id: 'S003', name: 'Charlie Brown', joined: '2024-03-02', progress: 75, grade: 'C', email: 'charlie.b@example.com', status: 'inactive' },
    { id: 'S004', name: 'Diana Miller', joined: '2024-03-02', progress: 100, grade: 'A+', email: 'diana.m@example.com', status: 'active' },
];

export const MOCK_CONTENT_LIBRARY = [
    { id: 'C01', type: 'video', name: 'Aula 1 - Apresentação.mp4', size: '150MB', uploaded: '2024-02-15' },
    { id: 'C02', type: 'document', name: 'Módulo 1 - Slides.pdf', size: '5MB', uploaded: '2024-02-15' },
    { id: 'C03', type: 'document', name: 'Atividade Prática 1.docx', size: '50KB', uploaded: '2024-02-18' },
];

// School Panel Data
export const SCHOOL_NAV_LINKS: NavLinkInfo[] = [
    { name: 'school_sidebar_dashboard', href: '/dashboard', icon: 'DashboardIcon' },
    { name: 'school_sidebar_scholarships', href: '/scholarships', icon: 'AwardIcon' },
    { name: 'school_sidebar_teachers', href: '/teachers', icon: 'UsersIcon' },
    { name: 'school_sidebar_reports', href: '/reports', icon: 'TrendingUpIcon' },
    { name: 'school_sidebar_documents', href: '/documents', icon: 'DocumentIcon' },
    { name: 'school_sidebar_newsletter', href: '/newsletter', icon: 'NewsletterIcon' },
];

export const SCHOOL_PROFILE_LINKS: NavLinkInfo[] = [
    { name: 'school_sidebar_profile', href: '/profile', icon: 'UserIcon' },
    { name: 'school_sidebar_settings', href: '/settings', icon: 'SettingsIcon' },
    { name: 'school_sidebar_support', href: '/support', icon: 'HelpCircleIcon' },
];

export const MOCK_SCHOLARSHIPS = [
    { id: 'SCH001', sponsor: 'Empresa Amiga da Educação A', total: 100, used: 85, status: 'active' },
    { id: 'SCH002', sponsor: 'Sponsor Tech B', total: 50, used: 50, status: 'completed' },
    { id: 'SCH003', sponsor: 'Empresa Amiga da Educação C', total: 100, used: 20, status: 'active' },
];

export const MOCK_SCHOOL_TEACHERS = [
    { id: 'T01', name: 'Prof. Celso Jungbluth', course: 'IA Aplicada às Profissões', students: 120, email: 'celso.j@example.com', status: 'active' },
    { id: 'T02', name: 'Profa. Ana Pereira', course: 'IA Para Educadores', students: 85, email: 'ana.p@example.com', status: 'active' },
];

export const MOCK_REPORTS = [
    { id: 'REP01', name: 'Relatório de Engajamento Trimestral', date: '2024-06-01', type: 'Engajamento' },
    { id: 'REP02', name: 'Relatório de Uso de Bolsas', date: '2024-06-01', type: 'Bolsas' },
    { id: 'REP03', name: 'Relatório de Desempenho Acadêmico', date: '2024-05-30', type: 'Acadêmico' },
];

// Sponsor Panel Data
export const SPONSOR_NAV_LINKS: NavLinkInfo[] = [
    { name: 'sponsor_sidebar_dashboard', href: '/dashboard', icon: 'DashboardIcon' },
    { name: 'sponsor_sidebar_sponsorship', href: '/sponsorship', icon: 'HeartHandshakeIcon' },
    { name: 'sponsor_sidebar_reports', href: '/reports', icon: 'TrendingUpIcon' },
    { name: 'sponsor_sidebar_careers', href: '/careers', icon: 'BriefcaseIcon' },
    { name: 'sponsor_sidebar_documents', href: '/documents', icon: 'DocumentIcon' },
    { name: 'sponsor_sidebar_newsletter', href: '/newsletter', icon: 'NewsletterIcon' },
];

export const SPONSOR_PROFILE_LINKS: NavLinkInfo[] = [
    { name: 'sponsor_sidebar_profile', href: '/profile', icon: 'UserIcon' },
    { name: 'sponsor_sidebar_payment', href: '/payment', icon: 'CreditCardIcon' },
    { name: 'sponsor_sidebar_settings', href: '/settings', icon: 'SettingsIcon' },
    { name: 'sponsor_sidebar_support', href: '/support', icon: 'HelpCircleIcon' },
];

export const MOCK_SPONSORSHIPS_DATA = [
    { id: 'CTR-2024-001', school: 'Escola Pública Exemplo', value: 12000, scholarships: 100, students: 85, status: 'active', period: '2024-2025' },
    { id: 'CTR-2023-005', school: 'Colégio Estadual Modelo', value: 12000, scholarships: 100, students: 100, status: 'completed', period: '2023-2024' },
];

export const MOCK_SPONSOR_PAYMENTS = [
    { id: 'PAY-SPN-001', date: '2024-01-15', description: 'Quota Anual - CTR-2024-001', amount: 'R$ 12.000,00', status: 'Pago' },
    { id: 'PAY-SPN-002', date: '2023-01-15', description: 'Quota Anual - CTR-2023-005', amount: 'R$ 12.000,00', status: 'Pago' },
];

export const MOCK_SPONSOR_CAREERS = [
    { id: 'CAR-001', title: 'Estágio em IA', location: 'Remoto', type: 'Estágio', applicants: 15, status: 'open' },
    { id: 'CAR-002', title: 'Desenvolvedor Jr', location: 'São Paulo, BR', type: 'Integral', applicants: 8, status: 'open' },
];

// Partner Panel Data
export const PARTNER_NAV_LINKS: NavLinkInfo[] = [
    { name: 'partner_sidebar_dashboard', href: '/dashboard', icon: 'DashboardIcon' },
    { name: 'partner_sidebar_partnership', href: '/partnership', icon: 'HandshakeIcon' },
    { name: 'partner_sidebar_reports', href: '/reports', icon: 'TrendingUpIcon' },
    { name: 'partner_sidebar_documents', href: '/documents', icon: 'DocumentIcon' },
    { name: 'partner_sidebar_newsletter', href: '/newsletter', icon: 'NewsletterIcon' },
];

export const PARTNER_PROFILE_LINKS: NavLinkInfo[] = [
    { name: 'partner_sidebar_profile', href: '/profile', icon: 'UserIcon' },
    { name: 'partner_sidebar_settings', href: '/settings', icon: 'SettingsIcon' },
    { name: 'partner_sidebar_support', href: '/support', icon: 'HelpCircleIcon' },
];

export const MOCK_PARTNERSHIPS_DATA = [
    { id: 'CNV-GOV-01', name: 'Secretaria de Educação Estadual', scholarships: 10000, members: 8500, status: 'active', type: 'government' },
    { id: 'CNV-ENT-02', name: 'Sindicato dos Profissionais de TI', scholarships: 500, members: 450, status: 'active', type: 'entity' },
];

// Affiliate Panel Data
export const AFFILIATE_NAV_LINKS: NavLinkInfo[] = [
    { name: 'affiliate_sidebar_dashboard', href: '/dashboard', icon: 'DashboardIcon' },
    { name: 'affiliate_sidebar_sales_page', href: '/sales_page', icon: 'ExternalLinkIcon' },
    { name: 'affiliate_sidebar_leads', href: '/leads', icon: 'TargetIcon' },
    { name: 'affiliate_sidebar_commissions', href: '/commissions', icon: 'DollarSignIcon' },
    { name: 'affiliate_sidebar_coupons', href: '/coupons', icon: 'GiftIcon' },
    { name: 'affiliate_sidebar_campaign', href: '/campaign', icon: 'MegaphoneIcon' },
    { name: 'affiliate_sidebar_newsletter', href: '/newsletter', icon: 'NewsletterIcon' },
];

export const AFFILIATE_PROFILE_LINKS: NavLinkInfo[] = [
    { name: 'affiliate_sidebar_profile', href: '/profile', icon: 'UserIcon' },
    { name: 'affiliate_sidebar_documents', href: '/documents', icon: 'DocumentIcon' },
    { name: 'affiliate_sidebar_settings', href: '/settings', icon: 'SettingsIcon' },
    { name: 'affiliate_sidebar_support', href: '/support', icon: 'HelpCircleIcon' },
];

export const MOCK_AFFILIATE_LEADS = [
    { id: 'LEAD-001', name: 'João da Silva', email: 'joao.silva@example.com', date: '2024-06-25', status: 'converted' },
    { id: 'LEAD-002', name: 'Maria Oliveira', email: 'maria.o@example.com', date: '2024-06-24', status: 'contacted' },
    { id: 'LEAD-003', name: 'Pedro Costa', email: 'pedro.costa@example.com', date: '2024-06-22', status: 'new' },
];

export const MOCK_AFFILIATE_COMMISSIONS = [
    { id: 'COM-001', date: '2024-06-25', lead: 'João da Silva', amount: 49.90, status: 'paid' },
    { id: 'COM-002', date: '2024-06-15', lead: 'Ana Souza', amount: 34.90, status: 'paid' },
    { id: 'COM-003', date: '2024-07-01', lead: 'Carlos Lima', amount: 49.90, status: 'pending' },
];

export const MOCK_AFFILIATE_COUPONS = [
    { id: 'COUP-01', code: 'AFILIADO10', discount: '10%', description: 'Cupom de 10% para qualquer curso.', status: 'active' },
    { id: 'COUP-02', code: 'BEMVINDO20', discount: 'R$ 20', description: 'R$ 20 de desconto na primeira compra.', status: 'active' },
];

export const MOCK_AFFILIATE_CAMPAIGNS = [
    { id: 'CAMP-01', name: 'Banner Redes Sociais - Curso de Negócios', type: 'image', preview: 'https://via.placeholder.com/300x150.png?text=Banner+IA+Negócios', status: 'active' },
    { id: 'CAMP-02', name: 'Texto para E-mail Marketing', type: 'text', preview: 'Aumente sua produtividade com nosso novo curso de IA Aplicada a Negócios...', status: 'active' },
];


// Admin Panel Data
export const ADMIN_GENERAL_LINKS: NavLinkInfo[] = [
    { name: 'admin_nav_dashboard', href: '/dashboard', icon: 'DashboardIcon' },
    { name: 'admin_nav_design_system', href: '/manage-design-system', icon: 'PaletteIcon' },
    { name: 'admin_nav_courses', href: '/manage-courses', icon: 'BookOpenIcon' },
    { name: 'admin_nav_payments', href: '/manage-payments', icon: 'CreditCardIcon' },
    { name: 'admin_nav_financing', href: '/manage-financing', icon: 'ShoppingBasketIcon' },
    { name: 'admin_nav_schedule', href: '/manage-schedule', icon: 'CalendarIcon' },
    { name: 'admin_nav_marketplace', href: '/manage-marketplace', icon: 'CartIcon' },
    { name: 'admin_nav_library', href: '/manage-library', icon: 'LibraryIcon' },
    { name: 'admin_nav_careers', href: '/manage-careers', icon: 'BriefcaseIcon' },
    { name: 'admin_nav_newsletters', href: '/manage-newsletters', icon: 'NewsletterIcon' },
];

export const ADMIN_STUDENTS_LINKS: NavLinkInfo[] = [
    { name: 'admin_nav_students', href: '/manage-students', icon: 'GraduationCapIcon' },
    { name: 'admin_nav_classrooms', href: '/manage-classrooms', icon: 'PlayCircleIcon' },
    { name: 'admin_nav_student_certs', href: '/manage-students-certificates', icon: 'CertificateIcon' },
];

export const ADMIN_TEACHERS_LINKS: NavLinkInfo[] = [
    { name: 'admin_nav_teachers', href: '/manage-teachers', icon: 'UsersIcon' },
    { name: 'admin_nav_content', href: '/manage-content', icon: 'FilePlusIcon' },
];

export const ADMIN_SCHOOLS_LINKS: NavLinkInfo[] = [
    { name: 'admin_nav_schools', href: '/manage-schools', icon: 'BuildingIcon' },
    { name: 'admin_nav_scholarships', href: '/manage-scholarships', icon: 'AwardIcon' },
    { name: 'admin_nav_school_reports', href: '/manage-school-reports', icon: 'TrendingUpIcon' },
];

export const ADMIN_SPONSORS_LINKS: NavLinkInfo[] = [
    { name: 'admin_nav_sponsors', href: '/manage-sponsors', icon: 'BuildingIcon' },
    { name: 'admin_nav_sponsorships', href: '/manage-sponsorships', icon: 'HeartHandshakeIcon' },
];

export const ADMIN_PARTNERS_LINKS: NavLinkInfo[] = [
    { name: 'admin_nav_partners', href: '/manage-partners', icon: 'BuildingIcon' },
    { name: 'admin_nav_partnerships', href: '/manage-partnerships', icon: 'HandshakeIcon' },
];

export const ADMIN_AFFILIATES_LINKS: NavLinkInfo[] = [
    { name: 'admin_nav_affiliates', href: '/manage-affiliates', icon: 'UsersRoundIcon' },
    { name: 'admin_nav_leads', href: '/manage-leads', icon: 'TargetIcon' },
    { name: 'admin_nav_commissions', href: '/manage-commissions', icon: 'DollarSignIcon' },
    { name: 'admin_nav_coupons', href: '/manage-coupons', icon: 'GiftIcon' },
    { name: 'admin_nav_campaigns', href: '/manage-campaigns', icon: 'MegaphoneIcon' },
];

export const ADMIN_SETTINGS_LINKS: NavLinkInfo[] = [
    { name: 'admin_nav_profile', href: '/manage-profile', icon: 'UserIcon' },
    { name: 'admin_nav_settings', href: '/settings', icon: 'SettingsIcon' },
    { name: 'admin_nav_support', href: '/manage-support', icon: 'HelpCircleIcon' },
];

export const MOCK_SCHOOLS = [
    { id: 'SCHL001', name: 'Escola Pública Exemplo', city: 'São Paulo', students: 105, status: 'active' },
    { id: 'SCHL002', name: 'Colégio Estadual Modelo', city: 'Rio de Janeiro', students: 250, status: 'active' },
];

export const MOCK_SPONSORS = [
    { id: 'SPN001', name: 'Empresa Amiga A', industry: 'Tecnologia', investment: 12000, status: 'active' },
    { id: 'SPN002', name: 'Sponsor Tech B', industry: 'Financeiro', investment: 6000, status: 'active' },
];

export const MOCK_PARTNERS = [
    { id: 'PRT001', name: 'Secretaria de Educação Estadual', type: 'Governo', members: 8500, status: 'active' },
    { id: 'PRT002', name: 'Sindicato dos Profissionais de TI', type: 'Entidade', members: 450, status: 'active' },
];

export const MOCK_AFFILIATES = [
    { id: 'AFF001', name: 'Influencer Digital', leads: 152, sales: 25, commission: 1247.50, status: 'active' },
    { id: 'AFF002', name: 'Blog de Tecnologia', leads: 88, sales: 12, commission: 598.80, status: 'active' },
];

export const MOCK_ALL_PAYMENTS = [
    { id: 'TXN12345', date: '2024-06-20', description: 'Mensalidade Aluno', amount: 87.25, status: 'Pago', source: 'Student' },
    { id: 'PAY-SPN-001', date: '2024-01-15', description: 'Quota Anual Patrocínio', amount: 12000.00, status: 'Pago', source: 'Sponsor' },
    { id: 'TXN12350', date: '2024-06-21', description: 'Compra Curso', amount: 499.00, status: 'Pago', source: 'Student' },
];

export const MOCK_CLASSROOMS = [
    { id: 'CLS001', course: 'IA Aplicada às Profissões', teacher: 'Prof. Celso Jungbluth', students: 120, status: 'active' },
    { id: 'CLS002', course: 'IA Para Educadores', teacher: 'Profa. Ana Pereira', students: 85, status: 'active' },
    { id: 'CLS003', course: 'IA Aplicada a Negócios', teacher: 'Prof. Business Applications', students: 50, status: 'planning' },
];

export const MOCK_STUDENT_CERTIFICATES = [
    { id: 'CERT-S004-1', student: 'Diana Miller', course: 'IA Para Educadores', issueDate: '2024-05-15' },
    { id: 'CERT-S012-3', student: 'Frank Wright', course: 'IA Aplicada a Negócios', issueDate: '2024-04-20' },
];

export const MOCK_ADMIN_CONTENT = [
    ...MOCK_CONTENT_LIBRARY,
    { id: 'C04', type: 'video', name: 'Aula 1 (Educadores) - Apresentação.mp4', size: '180MB', uploaded: '2024-03-10' },
    { id: 'C05', type: 'document', name: 'Módulo 1 (Educadores) - Slides.pdf', size: '8MB', uploaded: '2024-03-10' },
];

export const MOCK_NEWSLETTERS: Newsletter[] = [
    { id: 'NEWS01', subject: 'Novidades de Julho no IFT BRICS', recipients: 9500, status: 'sent', date: '2024-07-01', targetAudiences: ['all'], image: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1719504780/faculty-1_wgrzxo.jpg' },
    { id: 'NEWS02', subject: 'Webinar Exclusivo: O Futuro da IA para Estudantes', recipients: 8950, status: 'sent', date: '2024-06-28', targetAudiences: ['student'], image: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758846584/7322_og37d1.jpg'},
    { id: 'NEWS03', subject: 'Novas Ferramentas para Professores', recipients: 550, status: 'draft', date: '2024-07-15', targetAudiences: ['teacher'], image: 'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758846377/asian-boy-typing-laptop-keyboard-classmates-sitting-table-watching-him-doing-task-together_dbx3ir.jpg' },
];

export const MOCK_SUPPORT_TICKETS = [
    { id: 'SUP01', subject: 'Problema com certificado', user: 'Alice Johnson', status: 'open', date: '2024-06-30' },
    { id: 'SUP02', subject: 'Dúvida sobre pagamento', user: 'Bob Williams', status: 'closed', date: '2024-06-28' },
    { id: 'SUP03', subject: 'Acesso à biblioteca', user: 'Charlie Brown', status: 'open', date: '2024-07-01' },
];


// Homepage specific data
export const HERO_SLIDES = [
    { 
        title1: 'hero_carousel_slide1_title1',
        title2: 'hero_carousel_slide1_title2',
        title3: 'hero_carousel_slide1_title3',
        subtitle: 'hero_carousel_slide1_subtitle',
    },
    { 
        title1: 'hero_carousel_slide2_title1',
        title2: 'hero_carousel_slide2_title2',
        title3: 'hero_carousel_slide2_title3',
        subtitle: 'hero_carousel_slide2_subtitle',
    },
    { 
        title1: 'hero_carousel_slide3_title1',
        title2: 'hero_carousel_slide3_title2',
        title3: 'hero_carousel_slide3_title3',
        subtitle: 'hero_carousel_slide3_subtitle',
    }
];

export const METHODOLOGY_CARDS = [
    { icon: 'FilePlusIcon', title: 'methodology_card1_title', description: 'methodology_card1_desc' },
    { icon: 'BookOpenIcon', title: 'methodology_card2_title', description: 'methodology_card2_desc' },
    { icon: 'UsersIcon', title: 'methodology_card3_title', description: 'methodology_card3_desc' },
] as const;

export const FACULTY_MEMBERS = [
    { name: 'faculty_1_name', title: 'faculty_1_title', linkedinUrl: '#' },
    { name: 'faculty_2_name', title: 'faculty_2_title', linkedinUrl: '#' },
    { name: 'faculty_3_name', title: 'faculty_3_title', linkedinUrl: '#' },
    { name: 'faculty_4_name', title: 'faculty_4_title', linkedinUrl: '#' },
] as const;

export const BENEFITS = [
    { key: 'benefit_1', icon: 'MailIcon' },
    { key: 'benefit_2', icon: 'CartIcon' },
    { key: 'benefit_3', icon: 'GraduationCapIcon' },
    { key: 'benefit_4', icon: 'FileTextIcon' },
    { key: 'benefit_5', icon: 'LibraryIcon' },
    { key: 'benefit_6', icon: 'BookOpenIcon' }
] as const;

export const SPONSORSHIP_IMAGES = [
    "https://res.cloudinary.com/dsdzoebyq/image/upload/v1758846584/7322_og37d1.jpg",
    "https://res.cloudinary.com/dsdzoebyq/image/upload/v1758846377/asian-boy-typing-laptop-keyboard-classmates-sitting-table-watching-him-doing-task-together_dbx3ir.jpg",
    "https://res.cloudinary.com/dsdzoebyq/image/upload/v1758846583/13633_f6aarn.jpg"
];

export const USER_ROLES: UserRole[] = [
  { id: 'student', nameKey: 'role_student', descriptionKey: 'role_student_desc', icon: 'GraduationCapIcon' },
  { id: 'teacher', nameKey: 'role_teacher', descriptionKey: 'role_teacher_desc', icon: 'UsersIcon' },
  { id: 'school', nameKey: 'role_school', descriptionKey: 'role_school_desc', icon: 'SchoolIcon' },
  { id: 'sponsor', nameKey: 'role_sponsor', descriptionKey: 'role_sponsor_desc', icon: 'HeartHandshakeIcon' },
  { id: 'partner', nameKey: 'role_partner', descriptionKey: 'role_partner_desc', icon: 'HandshakeIcon' },
  { id: 'affiliate', nameKey: 'role_affiliate', descriptionKey: 'role_affiliate_desc', icon: 'MegaphoneIcon' },
];

export const TIMELINE_EVENTS = [
    { year: '2024', title: 'timeline_2024_title', description: 'timeline_2024_desc' },
    { year: '2025', title: 'timeline_2025_title', description: 'timeline_2025_desc' },
    { year: 'Future', title: 'timeline_future_title', description: 'timeline_future_desc' }
];

export const SCHOLARSHIP_STATS = [
    { value: '100k+', label: 'scholarship_stats_students' },
    { value: '9', label: 'scholarship_stats_countries' },
    { value: '3', label: 'scholarship_stats_courses' },
];


// This replaces the old, distorted path data and will be removed in favor of the dotted map implementation.
export const BRICS_COUNTRY_COORDINATES = [
    { id: 'AE', nameKey: 'countries.AE', top: '49%', left: '60%' },
    { id: 'BR', nameKey: 'countries.BR', top: '70%', left: '32%' },
    { id: 'CN', nameKey: 'countries.CN', top: '44%', left: '74%' },
    { id: 'EG', nameKey: 'countries.EG', top: '47%', left: '52%' },
    { id: 'ET', nameKey: 'countries.ET', top: '56%', left: '55%' },
    { id: 'ID', nameKey: 'countries.ID', top: '65%', left: '77%' },
    { id: 'IN', nameKey: 'countries.IN', top: '50%', left: '68%' },
    { id: 'IR', nameKey: 'countries.IR', top: '44%', left: '58%' },
    { id: 'RU', nameKey: 'countries.RU', top: '28%', left: '70%' },
    { id: 'SA', nameKey: 'countries.SA', top: '50%', left: '57%' },
    { id: 'ZA', nameKey: 'countries.ZA', top: '78%', left: '51%' },
];

export const STRATEGIC_PARTNERS: StrategicPartner[] = [
    { id: 'unibf', titleKey: 'partner_unibf_title', textKey: 'partner_unibf_text' },
    { id: 'brics_bc', titleKey: 'partner_brics_bc_title', textKey: 'partner_brics_bc_text' },
    { id: 'brics_univ', titleKey: 'partner_brics_univ_title', textKey: 'partner_brics_univ_text' },
    { id: 'cut', titleKey: 'partner_cut_title', textKey: 'partner_cut_text' },
    { id: 'mcti', titleKey: 'partner_mcti_title', textKey: 'partner_mcti_text' },
];

export const QUICK_NAV_LINKS = [
    {
        group: 'Public Pages',
        links: [
            { name: 'Home', href: '/home' },
            { name: 'About', href: '/about' },
            { name: 'Marketplace', href: '/marketplace' },
            { name: 'Scholarships', href: '/scholarship' },
            { name: 'Contact', href: '/contact' },
            { name: 'Login', href: '/login' },
            { name: 'Register', href: '/register' },
        ],
    },
    {
        group: 'Dashboards',
        links: [
            { name: 'Student', href: '/student/dashboard' },
            { name: 'Teacher', href: '/teacher/dashboard' },
            { name: 'School', href: '/school/dashboard' },
            { name: 'Sponsor', href: '/sponsor/dashboard' },
            { name: 'Partner', href: '/partner/dashboard' },
            { name: 'Affiliate', href: '/affiliate/dashboard' },
            { name: 'Admin', href: '/admin/dashboard' },
        ],
    },
];

export const MOCK_FINANCED_EQUIPMENT: FinancedEquipment[] = [
    {
        id: 'MINIPC-NAB9',
        name: 'MINISFORUM NAB9 Mini PC i9-12900HK',
        image: 'https://m.media-amazon.com/images/I/71FeAaB+0GL._AC_SL1500_.jpg',
        price: 3500.00,
        subsidy: 1500.00,
        specs: [
            { key: 'CPU', value: 'Intel Core i9-12900HK, 14 Cores/20 Threads, up to 5.0GHz' },
            { key: 'GPU', value: 'Intel Iris Xe Graphics' },
            { key: 'RAM', value: 'DDR4 Dual channel (SODIMM Slots×2)' },
            { key: 'Armazenamento', value: 'M.2 2280 PCIe4.0 SSD' },
            { key: 'Conectividade', value: 'Wi-Fi 6, Bluetooth 5.2' },
            { key: 'Portas', value: '2x USB-C, 4x USB-A 3.2, 2x HDMI, 2x 2.5G LAN' }
        ],
    }
];

export const MOCK_FINANCING_APPLICATIONS: FinancingApplication[] = [
    {
        id: 'APP001',
        protocolNumber: 'IFT-FIN-20240730-001',
        studentName: 'Alice Johnson',
        equipmentId: 'MINIPC-NAB9',
        status: 'pending',
        formData: {},
        createdAt: '2024-07-30T10:00:00Z',
    },
    {
        id: 'APP002',
        protocolNumber: 'IFT-FIN-20240729-001',
        studentName: 'Bob Williams',
        equipmentId: 'MINIPC-NAB9',
        status: 'approved',
        formData: {},
        createdAt: '2024-07-29T14:30:00Z',
    }
];