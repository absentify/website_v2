import { ReactNode } from "react";

// ============================================
// NAVIGATION
// ============================================

export interface INavItem {
  text: string;
  url: string;
  isDropdown?: boolean;
  dropdownItems?: INavDropdownItem[];
}

export interface INavDropdownItem {
  title: string;
  description: string;
  icon: ReactNode;
  url: string;
}

export interface INavCTA {
  text: string;
  url: string;
  variant: "primary" | "secondary" | "outline";
}

// ============================================
// HERO
// ============================================

export interface IHero {
  headline: string;
  subheadline: string;
  primaryCTA: ICTAButton;
  secondaryCTA?: ICTAButton;
  screenshots: string[];
}

export interface ICTAButton {
  text: string;
  url: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface ITrustBadge {
  text: string;
  rating?: string;
  icon?: ReactNode;
  url?: string;
}

// ============================================
// CLIENT LOGOS
// ============================================

export interface IClientLogo {
  name: string;
  logoSrc: string;
  alt: string;
}

// ============================================
// FEATURE CARDS
// ============================================

export interface IFeatureCard {
  title: string;
  description: string;
  icon: ReactNode;
  imageSrc?: string;
}

// ============================================
// PRODUCT TABS
// ============================================

export interface IProductTab {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
}

// ============================================
// COMPARISON
// ============================================

export interface IComparisonRow {
  feature: string;
  absentify: boolean | string;
  competitors: (boolean | string)[];
}

export interface ICompetitor {
  name: string;
  logoSrc?: string;
}

// ============================================
// DIFFERENTIATORS (Why Absentify)
// ============================================

export interface IDifferentiator {
  title: string;
  description: string;
  icon: ReactNode;
}

// ============================================
// INTEGRATIONS
// ============================================

export interface IIntegration {
  name: string;
  logoSrc: string;
  category: "productivity" | "communication" | "hr" | "calendar" | "other";
  url?: string;
}

// ============================================
// ONBOARDING
// ============================================

export interface IOnboardingStep {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc?: string;
}

// ============================================
// TESTIMONIALS
// ============================================

export interface ITestimonial {
  name: string;
  role: string;
  company?: string;
  message: string;
  avatar: string;
  rating?: number;
}

// ============================================
// SECURITY BADGES
// ============================================

export interface ISecurityBadge {
  name: string;
  logoSrc: string;
  description?: string;
}

// ============================================
// FAQ
// ============================================

export interface IFAQ {
  question: string;
  answer: string;
  category?: string;
}

// ============================================
// FOOTER
// ============================================

export interface IFooterColumn {
  title: string;
  links: IFooterLink[];
}

export interface IFooterLink {
  text: string;
  url: string;
  isExternal?: boolean;
}

export interface ISocials {
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  threads?: string;
  twitter?: string;
  youtube?: string;
  x?: string;
  [key: string]: string | undefined;
}

// ============================================
// LEGACY (für Kompatibilität)
// ============================================

export interface IMenuItem {
  text: string;
  url: string;
}

export interface IBenefit {
  title: string;
  description: string;
  imageSrc: string;
  bullets: IBenefitBullet[];
}

export interface IBenefitBullet {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface IPricing {
  name: string;
  price: number | string;
  features: string[];
}

export interface IStats {
  title: string;
  icon: ReactNode;
  description: string;
}