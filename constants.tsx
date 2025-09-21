
import React from 'react';

// Heroicons converted to React.createElement
const CheckBadgeIcon = (props) => {
  const className = props.className || "w-6 h-6";
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: className,
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z",
    })
  );
};

export const UserCircleIcon = (props) => { // Exported for use in HeroSection
  const className = props.className || "w-6 h-6";
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: className,
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    })
  );
};

const BriefcaseIcon = (props) => {
  const className = props.className || "w-6 h-6";
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: className,
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M20.25 14.15v4.073a2.25 2.25 0 0 1-2.25 2.25h-12a2.25 2.25 0 0 1-2.25-2.25v-4.073M15.75 8.108A6 6 0 0 0 12 3.608 6 6 0 0 0 8.25 8.108M15.75 8.108V12m0 0H8.25M15.75 8.108a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-7.5 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z",
    })
  );
};

const PaperAirplaneIcon = (props) => {
  const className = props.className || "w-6 h-6";
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: className,
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5",
    })
  );
};

export const UsersIcon = (props) => { // Exported for use in HeroSection
  const className = props.className || "w-6 h-6";
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: className,
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    })
  );
};


export const PathThriveMarkIcon = ({ className = "h-8 w-auto text-[#5468FF]" }) => (
  React.createElement("svg", {
    className: className,
    viewBox: "0 0 44 34",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  },
  React.createElement("title", null, "PathThrive Logo Mark"),
  React.createElement("path", { d: "M18.7849 0.206349L16.0509 2.94035L29.6229 16.5123L32.3569 13.7783L18.7849 0.206349Z" }),
  React.createElement("path", { d: "M22.8329 0.206349L20.0989 2.94035L33.6709 16.5123L36.4049 13.7783L22.8329 0.206349Z" }),
  React.createElement("path", { d: "M29.6078 16.5231L32.3418 19.2571L18.7698 32.8291L16.0358 30.0951L29.6078 16.5231Z" }),
  React.createElement("path", { d: "M33.6558 16.5231L36.3898 19.2571L22.8178 32.8291L20.0838 30.0951L33.6558 16.5231Z" }))
);


export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Wall of Love', path: '/wall-of-love' },
  { label: 'Contact', path: '/contact' },
  { label: 'Book Free Consultation', path: '/contact', isCta: true },
];

const howItWorksIconProps = { className: "w-12 h-12 text-[#5C5FF5]" }; // Updated color
export const HOW_IT_WORKS_STEPS = [
  {
    id: '1',
    title: 'Tell Us About Yourself',
    description: 'Share your career goals, experience, and preferences with our team.',
    icon: React.createElement(UserCircleIcon, howItWorksIconProps),
  },
  {
    id: '2',
    title: 'Select Your Dream Jobs',
    description: 'Browse and shortlist jobs you\'re interested in, or let us find them for you.',
    icon: React.createElement(BriefcaseIcon, howItWorksIconProps),
  },
  {
    id: '3',
    title: 'We Apply For You',
    description: 'Our human assistants handle the applications, customizing resumes to highlight your skills.',
    icon: React.createElement(PaperAirplaneIcon, howItWorksIconProps),
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: '1',
    name: 'Sarah Chen',
    photoUrl: 'https://picsum.photos/seed/sarah/100/100',
    jobTitle: 'Software Engineer',
    companyName: 'Facebook',
    companyLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    rating: 5,
    quote: 'PathThrive made my job search incredibly efficient. Landed my dream job in weeks!',
    fullStory: 'Before PathThrive, I spent hours tailoring my resume for each application. Their assistants took over, and the quality was amazing. I started getting interviews almost immediately and accepted an offer from Facebook much faster than I expected.'
  },
  {
    id: '2',
    name: 'Michael Lee',
    photoUrl: 'https://picsum.photos/seed/michael/100/100',
    jobTitle: 'Product Manager',
    companyName: 'Lyft',
    companyLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Lyft_logo.svg',
    rating: 4,
    quote: 'The LinkedIn optimization and application delegation were game-changers.',
    fullStory: 'Juggling a full-time job while searching for a new one was exhausting. PathThrive\'s team optimized my LinkedIn, which attracted recruiters, and they handled applying to jobs I flagged. It significantly reduced my stress and workload.'
  },
  {
    id: '3',
    name: 'Priya Patel',
    photoUrl: 'https://picsum.photos/seed/priya/100/100',
    jobTitle: 'Data Scientist',
    companyName: 'CMU (Alumni)',
    companyLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cs/Carnegie_Mellon_University_Wordmark.svg',
    rating: 5,
    quote: 'As a recent grad, their guidance and resume help were invaluable.',
    fullStory: 'Navigating the job market as a new graduate from CMU was daunting. PathThrive helped me craft an ATS-friendly resume that highlighted my skills effectively. I felt much more confident in my applications.'
  },
];

// For the new TrustedBySection / PathrisePartnersLogos
export const FEATURED_IN_LOGOS = [
  { id: 'techcrunch', name: 'TechCrunch', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png' },
  { id: 'fastcompany', name: 'Fast Company', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Fast_Company_logo.svg/1200px-Fast_Company_logo.svg.png' },
  { id: 'nyt', name: 'The New York Times', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_New_York_Times_logo.svg/1200px-The_New_York_Times_logo.svg.png' },
  { id: 'forbes', name: 'Forbes', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Forbes_logo.svg/1200px-Forbes_logo.svg.png' },
];

export const FELLOWS_WORK_AT_LOGOS = [
  { id: 'google', name: 'Google', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/100px-Google_%22G%22_logo.svg.png' },
  { id: 'amazon', name: 'Amazon', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { id: 'facebook', name: 'Facebook', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
  { id: 'linkedin', name: 'LinkedIn', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/80px-LinkedIn_logo_initials.png' },
];

// Kept existing TRUSTED_BY_LOGOS in case other parts of the app use it.
export const TRUSTED_BY_LOGOS = [
    { id: 'facebook', name: 'Facebook', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
    { id: 'walmart', name: 'Walmart', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg' },
    { id: 'amazon', name: 'Amazon', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { id: 'microsoft', name: 'Microsoft', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { id: 'oracle', name: 'Oracle', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
];


export const STATISTICS_DATA = [
  { id: '1', value: '9/10', label: 'users land a job in 90 days' },
  { id: '2', value: '40%', label: 'reduction in job search time' },
  { id: '3', value: '200x', label: 'return on investment' },
];

const serviceIconProps = { className: "w-8 h-8 text-[#5C5FF5]" }; // Updated color
export const SERVICES_DATA = [
  { id: '1', title: 'ATS-Friendly Custom Resumes', description: 'Tailored resumes that beat applicant tracking systems and impress recruiters.', icon: React.createElement(CheckBadgeIcon, serviceIconProps) },
  { id: '3', title: 'LinkedIn Profile Optimization', description: 'Enhance your LinkedIn presence to attract recruiters and network effectively.', icon: React.createElement(CheckBadgeIcon, serviceIconProps) },
  { id: '4', title: 'Job Application Delegation', description: 'Let our assistants handle the tedious task of filling out applications accurately.', icon: React.createElement(CheckBadgeIcon, serviceIconProps) },
  { id: '5', title: 'Application Tracking with Proof', description: 'A transparent system to monitor your application status with submission confirmations.', icon: React.createElement(CheckBadgeIcon, serviceIconProps) },
  { id: '6', title: 'Dedicated WhatsApp Support', description: 'Direct and quick communication with your assigned assistant via WhatsApp.', icon: React.createElement(CheckBadgeIcon, serviceIconProps) },
];

export const PRICING_PLANS_DATA = [
  {
    id: 'comprehensive',
    name: 'Comprehensive Career Accelerator',
    price: '$499',
    priceDescription: '/month',
    features: [
        '1000 applications',
        '1 assistant',
        'Custom resume (3 versions)',
        'LinkedIn profile optimization',
        'Dedicated WhatsApp support',
        'Interview tracking'
    ],
    ctaText: 'Get Started Now',
    isPopular: true,
  },
];

export const ADD_ON_SERVICES_DATA = [
  {
    id: 'linkedin-resume-opt',
    name: 'LinkedIn + Resume Optimization',
    description: 'Comprehensive overhaul of your LinkedIn profile and resume to maximize impact and visibility.',
    price: '$119'
  },
  {
    id: 'mock-ood',
    name: 'Mock Interview: Object Oriented Design',
    description: 'Practice and refine your OOD skills with expert feedback.',
    price: '$149'
  },
  {
    id: 'mock-system-design',
    name: 'Mock Interview: System Design',
    description: 'Sharpen your system design abilities with a realistic mock interview.',
    price: '$149'
  },
  {
    id: 'mock-problem-solving',
    name: 'Mock Interview: Problem Solving',
    description: 'Tackle challenging coding problems and improve your approach.',
    price: '$129'
  },
  {
    id: 'mock-behavioral',
    name: 'Mock Interview: Behavioral Interview',
    description: 'Master the art of answering behavioral questions effectively.',
    price: '$99'
  },
  {
    id: 'mock-eng-manager',
    name: 'Mock Interview: Engineering Manager',
    description: 'Prepare for engineering management interviews with targeted practice.',
    price: '$179'
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: 'Contact Us', path: '/contact' },
  ],
  resources: [
    { label: 'Testimonials', path: '/wall-of-love' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ],
  services: [
    { label: 'Resume Writing', path: '/services#resume' },
    { label: 'LinkedIn Optimization', path: '/services#linkedin' },
    { label: 'Application Delegation', path: '/services#delegation' },
  ]
};
