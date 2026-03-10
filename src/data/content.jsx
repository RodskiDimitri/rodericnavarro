import {
    Bot, Network, Server, Wrench,
    Terminal, Wifi, Shield, HardDrive,
    CheckSquare, MessageCircle, Settings,
    Cloud, FileText, Monitor, Zap, Code,
    Brain, MessageSquare, Wind, Sparkles, BookOpen,
    Briefcase, TrendingUp, Award, DollarSign,
    Building2, Landmark, Rocket
} from 'lucide-react';
import React from 'react';

// About Section Stats
export const aboutStats = [
    { icon: <Briefcase size={24} />, value: "17+", label: "Years Experience" },
    { icon: <TrendingUp size={24} />, value: "$50K+", label: "Annual Savings Generated" },
    { icon: <Award size={24} />, value: "99.8%", label: "System Uptime Maintained" }
];

// Experience / Timeline
export const experiences = [
    {
        title: "AI Technology Consultant",
        company: "Self-Employed",
        period: "Dec 2024 - Present",
        description: "Strategic AI implementation consulting for SMEs. Custom prompt engineering and chatbot development resulting in significant process optimization.",
        highlights: [
            "Automated and eliminated repetitive workflows for SME clients",
            "Boosted client productivity by 35% within 30 days",
            "Cut customer service response times from 2 hours to 48 minutes"
        ]
    },
    {
        title: "IT & Innovation Manager",
        company: "Polianna, LLC",
        logo: "poliannaLogo", // Needs to be handled dynamically in component or imported here if using bundler paths
        period: "Jan 2020 - Jan 2024",
        description: "Led technology innovation, IT infrastructure management, and strategic planning. Progressed from System Adviser & Administrator to IT & Innovation Manager, driving transformation across the organization.",
        highlights: [
            "Delivered $20K+ annual cost savings via vendor negotiations",
            "Redesigned infrastructure cutting monthly downtime from 8% to <2%",
            "Increased operational efficiency across 4 departments by 30%",
            "Maintained 99.8% uptime with zero security breaches over 3 years",
            "Reduced security incidents by 85% with new IAM deployments"
        ]
    },
    {
        title: "IT Administrator",
        company: "Firestarter Group",
        logo: "firestartLogo", // Needs to be handled dynamically in component or imported here if using bundler paths
        period: "Mar 2016 - Dec 2019",
        description: "Administered complete IT infrastructure including system maintenance, optimization protocols, and end-to-end technical support.",
        highlights: [
            "Managed full IT infrastructure for the organization",
            "Implemented system maintenance and optimization protocols",
            "Provided comprehensive technical support and troubleshooting"
        ]
    }
];

// Skills Configuration
export const skillCategories = [
    {
        title: "AI & Language Models",
        icon: <Bot size={28} />,
        color: "#3b82f6",
        bgColor: "rgba(59, 130, 246, 0.1)",
        skills: [
            { name: "Claude Pro", iconName: "anthropic", fallback: Brain, brandColor: "#D97757" },
            { name: "ChatGPT", customIcon: <MessageSquare size={16} color="#10A37F" />, brandColor: "#10A37F" },
            { name: "Mistral AI", iconName: "mistralai", fallback: Wind, brandColor: "#F26522" },
            { name: "Gemini AI", iconName: "googlegemini", fallback: Sparkles, brandColor: "#8E75B2" },
            { name: "Notebook LM", iconName: "google", fallback: BookOpen, brandColor: "#4285F4" },
            { name: "Antigravity IDE", customIcon: <img src="https://antigravity.google/assets/image/antigravity-logo.png" alt="Antigravity IDE" style={{ width: '16px', height: '16px', objectFit: 'contain' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />, brandColor: "#4A90D9" },
            { name: "Prompt Eng.", customIcon: <Terminal size={16} color="#A855F7" />, brandColor: "#A855F7" }
        ]
    },
    {
        title: "Networking & Infrastructure",
        icon: <Network size={28} />,
        color: "#8b5cf6",
        bgColor: "rgba(139, 92, 246, 0.1)",
        skills: [
            { name: "Omada Systems", iconName: "tplink", fallback: Wifi, brandColor: "#46B2C8" },
            { name: "Commercial WiFi", customIcon: <Wifi size={16} color="#38BDF8" />, brandColor: "#38BDF8" },
            { name: "Net Monetization", customIcon: <Shield size={16} color="#22C55E" />, brandColor: "#22C55E" },
            { name: "System Optimization", customIcon: <HardDrive size={16} color="#F43F5E" />, brandColor: "#F43F5E" }
        ]
    },
    {
        title: "Admin & Productivity",
        icon: <Server size={28} />,
        color: "#ec4899",
        bgColor: "rgba(236, 72, 153, 0.1)",
        skills: [
            { name: "Google Workspace", iconName: "google", fallback: Cloud, brandColor: "#4285F4" },
            { name: "MS Office 2021", customIcon: <FileText size={16} color="#D83B01" />, brandColor: "#D83B01" },
            { name: "Windows 11", customIcon: <Monitor size={16} color="#0078D4" />, brandColor: "#0078D4" },
            { name: "Project Mgmt", customIcon: <CheckSquare size={16} color="#EAB308" />, brandColor: "#EAB308" }
        ]
    },
    {
        title: "Automation & Integration",
        icon: <Wrench size={28} />,
        color: "#10b981",
        bgColor: "rgba(16, 185, 129, 0.1)",
        skills: [
            { name: "Zapier", iconName: "zapier", fallback: Zap, brandColor: "#FF4A00" },
            { name: "Custom Chatbots", customIcon: <MessageCircle size={16} color="#06B6D4" />, brandColor: "#06B6D4" },
            { name: "App Script", iconName: "googleappsscript", fallback: Code, brandColor: "#4285F4" },
            { name: "Workflows", customIcon: <Settings size={16} color="#94A3B8" />, brandColor: "#94A3B8" }
        ]
    }
];

// Results At a Glance Stats
export const resultsStats = [
    {
        icon: <Zap size={26} />,
        value: 15,
        suffix: '+',
        prefix: '',
        label: 'Hours Saved Weekly per Client',
        description: 'Directed the implementation of AI solutions for SME clients, fully automating manual workflows and eliminating repetitive tasks.',
        color: 'var(--accent-primary)'
    },
    {
        icon: <TrendingUp size={26} />,
        value: 35,
        suffix: '%',
        prefix: '',
        label: 'Client Productivity Boost',
        description: 'Achieved in just 30 days by leading the integration of efficiency strategies and driving team adoption of new tools.',
        color: 'var(--accent-secondary)'
    },
    {
        icon: <DollarSign size={26} />, // DollarSign needs import in Target file or here
        value: 50,
        suffix: 'K+',
        prefix: '$',
        label: 'Annual Savings Generated',
        description: 'Delivered bottom-line impact through strategic vendor negotiations, contract management, and process optimization.',
        color: '#00ff88'
    },
    {
        icon: <Shield size={26} />,
        value: 85,
        suffix: '%',
        prefix: '',
        label: 'Drop in Security Incidents',
        description: 'Managed the rollout of comprehensive identity management systems and security protocols across 100+ user environments.',
        color: '#ff007f'
    }
];

// Target Markets
export const targetMarkets = [
    {
        title: "SMEs",
        icon: <Building2 size={32} />,
        desc: "Technology adoption consulting, specific process optimization, and seamless AI integration to eliminate repetitive workflows and maximize revenue.",
        example: "",
        color: "var(--accent-primary)"
    },
    {
        title: "Startups",
        icon: <Rocket size={32} />,
        desc: "Robust infrastructure setup, scalable growth-oriented AI solutions, and strategic technology planning for rapid acceleration.",
        example: "",
        color: "var(--accent-secondary)"
    },
    {
        title: "Government Agencies",
        icon: <Landmark size={32} />,
        desc: "Compliance-focused modernization and process consulting, ensuring secure and highly reliable system architectures.",
        example: "",
        color: "#00ff88"
    }
];

// Testimonials
export const testimonialsData = [
    {
        quote: "Roderic cut our customer service response time by over 60% in the first month. We didn't think that kind of improvement was possible without hiring more staff.",
        name: "J. Reyes",
        role: "Operations Director",
        industry: "Healthcare SME",
        rating: 5,
        accentColor: "var(--accent-primary)"
    },
    {
        quote: "His approach to AI integration was practical, not theoretical. Within two weeks, he automated workflows that used to take my team hours every day.",
        name: "M. Santos",
        role: "CEO",
        industry: "E-Commerce Startup",
        rating: 5,
        accentColor: "var(--accent-secondary)"
    },
    {
        quote: "What impressed me most was how he explained complex technology in terms our entire leadership team could understand. The ROI was clear from day one.",
        name: "A. Torres",
        role: "Managing Partner",
        industry: "Professional Services",
        rating: 5,
        accentColor: "#00ff88"
    }
];
