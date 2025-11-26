import React from 'react';

export type PlaceType = 'Masjid' | 'Madrasa' | 'Maqbara' | 'Organization';

export type SunniCategory = 
  | 'ED Sunni' 
  | 'AP Sunni' 
  | 'EK Sunni' 
  | 'Sunni Organization' 
  | 'General Sunni';

export interface SalahTimes {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  jumuah: string;
}

export interface Place {
  id: string;
  name: string;
  type: PlaceType;
  category: SunniCategory;
  description: string;
  state: string;
  district: string;
  city: string;
  address: string;
  pincode?: string;
  compassCode?: string; // Added Compass Code
  latitude?: number;
  longitude?: number;
  phone?: string;
  imamName?: string;
  salahTimes?: SalahTimes;
  facilities: string[]; 
  images: string[];
  googleMapLink: string;
  approved: boolean;
  featured?: boolean;
  featuredUntil?: string; // ISO Date
  courses?: string[]; 
  ursDate?: string; 
  createdAt: string;
  history?: string;
  notes?: string;
  submittedBy?: string; // User ID
  submittedByName?: string;
  views?: number; // Track user engagement
}

export type AdPlacement = 
  | 'HOME_HEADER' 
  | 'HOME_MID' 
  | 'HOME_FOOTER' 
  | 'SIDEBAR' 
  | 'LISTING_INBETWEEN' 
  | 'DETAIL_HEADER'
  | 'DETAIL_SIDEBAR'
  | 'DETAIL_FOOTER';

export type AdFormat = 'IMAGE' | 'VIDEO' | 'SCRIPT' | 'HTML';

export interface Ad {
  id: string;
  title: string;
  format: AdFormat;
  mediaUrl?: string; // Base64 or URL
  scriptCode?: string; // HTML/AdSense
  linkUrl?: string;
  placement: AdPlacement;
  active: boolean;
  startDate?: string;
  endDate?: string;
  width?: string; // CSS width (e.g. "100%", "728px")
  height?: string; // CSS height (e.g. "90px", "auto")
  views: number;
  clicks: number;
  impressions: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  areaCode: string; // "Arial Code" from prompt, assuming Area/Pin code
  password?: string; // In a real app, never store plain text
  role: 'USER' | 'ADMIN';
  createdAt: string;
}

export interface UserSubmission extends Omit<Place, 'id' | 'approved' | 'createdAt'> {
  submittedAt: string;
  userId: string;
  userName: string;
  userPhone?: string;
}

export type AdminRole = 'SUPER_ADMIN' | 'MODERATOR' | 'CONTENT_MANAGER';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  avatar?: string;
}

export interface Notification {
  id: string;
  type: 'SUBMISSION' | 'AD_EXPIRY' | 'SYSTEM' | 'USER_ALERT';
  message: string;
  read: boolean;
  date: string;
  targetUserId?: string; // If present, only this user sees it. If null, admins see it.
}

export interface PartnerLogo {
  id: string;
  name: string;
  imageUrl: string;
  linkUrl?: string;
  height?: number; // Custom height in pixels
}

export interface SiteConfig {
  siteName: string;
  logoUrl?: string;
  primaryColor?: string;
  adminEmail: string;
  states: string[];
  contactEmail?: string;
  contactLocation?: string;
  contactPhone?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  mapApiKey?: string;
  footerText?: string;
  partners: PartnerLogo[];
  partnerLayout: 'GRID' | 'MARQUEE';
}

// Keeping these for existing file compatibility
export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  tags: string[];
}

export interface DownloadItem {
  id: string;
  title: string;
  type: string;
  size: string;
  url: string;
  image: string;
}

export interface Designer {
  id: string;
  name: string;
  role: string;
  skills: string[];
  hourlyRate: number;
  image: string;
  availability: boolean;
}