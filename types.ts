

export enum Locale {
  Portuguese = 'pt',
  English = 'en',
  Russian = 'ru',
  Hindi = 'hi',
  Mandarin = 'zh',
  Persian = 'fa',
  Arabic = 'ar',
  Bahasa = 'id',
  Amharic = 'am',
  Spanish = 'es',
  Belarusian = 'be',
  Kazakh = 'kk',
  Malay = 'ms',
  Thai = 'th',
  Uzbek = 'uz',
}

// Fix: Add IconName and NavLinkInfo types for stricter type checking of navigation links.
export type IconName =
  | 'BookOpenIcon'
  | 'BriefcaseIcon'
  | 'CalendarIcon'
  | 'CartIcon'
  | 'CertificateIcon'
  | 'ChevronDownIcon'
  | 'CreditCardIcon'
  | 'DashboardIcon'
  | 'DocumentIcon'
  | 'GlobeIcon'
  | 'HelpCircleIcon'
  | 'LibraryIcon'
  | 'LiveIcon'
  | 'MailIcon'
  | 'MenuIcon'
  | 'SettingsIcon'
  | 'UserIcon'
  | 'XIcon'
  | 'NewsletterIcon'
  | 'DownloadIcon'
  | 'PlayCircleIcon'
  | 'FileTextIcon'
  | 'LockIcon'
  | 'CheckCircleIcon'
  | 'SearchIcon'
  | 'UploadIcon'
  | 'EditIcon'
  | 'TrashIcon'
  | 'ExternalLinkIcon'
  | 'UsersIcon'
  | 'FilePlusIcon'
  | 'BarChartIcon'
  | 'AwardIcon'
  | 'TrendingUpIcon'
  | 'HeartHandshakeIcon'
  | 'HandshakeIcon'
  | 'TargetIcon'
  | 'DollarSignIcon'
  | 'GiftIcon'
  | 'MegaphoneIcon'
  | 'PaletteIcon'
  | 'UsersRoundIcon'
  | 'BuildingIcon'
  | 'GraduationCapIcon'
  | 'ClockIcon'
  | 'VideoIcon'
  | 'FileDownIcon'
  | 'LinkIcon'
  | 'PlusCircleIcon'
  | 'ArrowUpIcon'
  | 'ArrowDownIcon'
  | 'SchoolIcon'
  | 'BotIcon'
  | 'QrCodeIcon'
  | 'StarIcon'
  | 'ReplyIcon'
  | 'SendIcon'
  | 'LightbulbIcon'
  | 'DragHandleIcon'
  | 'LinkedinIcon'
  | 'BellIcon'
  | 'MapPinIcon'
  | 'PhoneIcon'
  | 'LayersIcon'
  | 'ShoppingBasketIcon';


export interface NavLinkInfo {
  name: string;
  href: string;
  icon: IconName;
}

export interface SupplementaryMaterial {
  id: string;
  title: string;
  url: string;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'document';
  duration: string;
  completed: boolean;
  videoUrl: string;
  pdfUrl: string;
  content: string;
  materials: SupplementaryMaterial[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: number;
  titleKey: string;
  descriptionKey: string;
  targetAudienceKey: string;
  durationKey: string;
  priceKey: string;
  price: number;
  status: 'active' | 'inactive' | 'planning';
  students?: number;
  progress?: number;
  modules: Module[];
}

export type Translations = {
  [key: string]: any;
};

export interface UserRole {
  id: string;
  nameKey: string;
  descriptionKey: string;
  icon: IconName;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export type MarketplaceCategory = 'ai' | 'universities' | 'software' | 'informatica' | 'equipamentos' | 'other';

export interface MarketplaceOffer {
    id: string;
    title: string;
    description: string;
    logo: string;
    status: 'active' | 'inactive';
    category: MarketplaceCategory;
    tutorialKey: string;
    benefitsKey: string[];
    partnerUrl: string;
    createdAt: string;
}

export interface SingleSubject {
    id: string;
    titleKey: string;
    descriptionKey: string;
    partner: {
        name: string;
        logo: string;
    };
}

export interface Email {
    id: string;
    from: string;
    fromKey?: string;
    subject: string;
    subjectKey?: string;
    body: string;
    bodyKey?: string;
    time: string;
    read: boolean;
    favorited: boolean;
}

export interface InnovationChallenge {
    id: string;
    titleKey: string;
    descriptionKey: string;
    company: string;
    prizeKey: string;
    status: 'open' | 'closed';
}

export interface ServiceOffer {
    id: string;
    titleKey: string;
    descriptionKey: string;
    client: string;
    budgetKey: string;
    status: 'open' | 'closed';
}

export interface AccelerationProgram {
    id: string;
    titleKey: string;
    descriptionKey: string;
    offeredByKey: string;
    status: 'open' | 'closed';
}

export type CareerLevel = 'internship' | 'trainee' | 'junior' | 'mid';

export interface CareerListing {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    status: 'open' | 'closed';
    level: CareerLevel;
}

export interface Newsletter {
    id: string;
    subject: string;
    recipients: number;
    status: 'sent' | 'draft';
    date: string;
    targetAudiences: Array<UserRole['id'] | 'all'>;
    image?: string;
}

export interface StrategicPartner {
    id: string;
    titleKey: string;
    textKey: string;
}

export interface Notification {
  id: string;
  messageKey: string;
  time: string;
  read: boolean;
}

export interface FinancedEquipment {
    id: string;
    name: string;
    image: string;
    price: number;
    subsidy: number;
    specs: { key: string, value: string }[];
}

export interface FinancingApplication {
    id: string;
    protocolNumber: string;
    studentName: string;
    equipmentId: string;
    status: 'pending' | 'approved' | 'rejected';
    formData: any;
    createdAt: string;
}