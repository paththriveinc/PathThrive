
export interface Testimonial {
  id: string;
  name: string;
  photoUrl: string;
  jobTitle: string;
  companyName: string;
  companyLogoUrl?: string; 
  rating: number;
  quote: string;
  fullStory?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceDescription?: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface AddOnService {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode;
  ctaText: string;
  path: string;
}

export interface NavLinkItem {
  label: string;
  path: string;
  isCta?: boolean;
}

export interface CompanyLogo {
  id: string;
  name: string;
  logoUrl: string; // can be a path to an SVG or a URL
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface HowItWorksStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}