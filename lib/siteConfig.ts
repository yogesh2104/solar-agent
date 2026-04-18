const siteConfig = {
  company: {
    name: "ELIZ ENERGY",
    fullName: "ELIZ ENERGY Solar Solutions",
    tagline:
      "Affordable & reliable solar solutions across India – Residential, Commercial, Industrial & Utility.",
    logo: "E",
    contact: {
      phone: "+91 7700908508",
      whatsapp: "917700908508",
      email: "energyeliz@gmail.com",
      address: "Thane, Mumbai, Maharashtra",
      googleMaps: "#",
      workingHours: "Mon-Sat, 9:00 AM - 7:00 PM",
      locationBoost:
        "Solar Company in Mumbai | Thane | Navi Mumbai | Pan India | Maharashtra",
    },
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    // { name: "Maintenance", href: "/maintenance" },
    { name: "Contact", href: "/contact" },
  ],
  hero: {
    badge: "Clean energy for Residential, Commercial, Industrial & Utility",
    title:
      "Solar Panel Installation Across India – Save Electricity Bills with Solar",
    description:
      "ELIZ ENERGY provides affordable solar panel installation across India for homes, shops, industries, and utility-scale projects. We serve Mumbai, Thane, Navi Mumbai and beyond. Reduce electricity costs and switch to clean energy today.",
    primaryCta: {
      text: "Get Free Consultation",
      href: "/contact",
    },
    secondaryCta: {
      text: "Our Services",
      href: "/services",
    },
    trustChips: [
      "Pan India Solar Installation",
      "End-to-end Solar Solutions & Support",
      "Surya Ghar Yojana Subsidy Assistance",
      "Residential, Commercial, Industrial & Utility",
    ],
    sideStats: [
      {
        label: "Module efficiency",
        value: "22.3%",
        note: "High-output mono PERC and TOPCon supply",
      },
      {
        label: "Asset uptime target",
        value: "99.5%",
        note: "Commissioning, monitoring, and service support",
      },
    ],
    stageCards: {
      proof: {
        title:
          "Commercial-ready supply for rooftops, captive plants, and phased site rollouts.",
        image: "/images/worker-helmet.webp",
      },
      social: {
        value: "500+",
        label: "satisfied customers and partners served",
      },
      highlight: {
        title: "Storage-ready design",
        description:
          "Hybrid inverter and battery options for resilience, peak shaving, and night-shift continuity.",
      },
    },
    metrics: [
      { value: "4+ Years", label: "Solar sector experience" },
      { value: "3.4 yrs", label: "median modeled payback on high-load sites" },
      {
        value: "Pan India",
        label: "Installation coverage across India",
      },
      {
        value: "48 hrs",
        label: "for first-pass feasibility and commercial response",
      },
    ],
    image: "/images/new_landing/hero_b2b.png",
  },
  solutions: {
    badge: "Solar delivery models",
    title: "Complete Solar Solutions Across India",
    description:
      "We provide complete solar solutions including panels, inverters, batteries, mounting structures, BoS components, cabling, EV chargers, and robotic cleaning for utility projects. Tailored for Residential, Commercial, Industrial & Utility sectors.",
    image: "/images/Solar-Panel-Installation.webp",
    sectors: [
      "Residential Homes",
      "Commercial Offices & Shops",
      "Industrial Plants",
      "Utility-Scale Projects",
      "Educational Campuses",
      "Healthcare Facilities",
    ],
    cards: [
      {
        id: "01",
        title: "Residential Solar",
        description:
          "Solar panel installation for homes across India. Reduce electricity bills, increase property value, and avail Surya Ghar Yojana subsidy.",
        bullets: [
          "Affordable rooftop solar for homes",
          "Surya Ghar Yojana subsidy assistance",
          "Professional installation & maintenance",
        ],
      },
      {
        id: "02",
        title: "Commercial & Industrial Solar",
        description:
          "Cost-effective solar solutions for shops, offices, and industrial plants across India. Maximize ROI and reduce energy costs.",
        bullets: [
          "Reduced operational energy costs",
          "Tax benefits and ROI modeling",
          "Scalable solar deployments",
        ],
      },
      {
        id: "03",
        title: "Utility-Scale Solar",
        description:
          "Large-scale utility solar projects with robotic cleaning solutions. We also supply and install EV chargers for homes and businesses.",
        bullets: [
          "Robotic cleaning for utility solar plants",
          "EV charger installation (home & commercial)",
          "Turnkey utility-scale project delivery",
        ],
      },
      {
        id: "04",
        title: "Monitoring, Warranty & O&M",
        description:
          "Track generation and asset health after go-live with service workflows built for residential, commercial, industrial, and utility facilities.",
        bullets: [
          "Remote performance monitoring",
          "Preventive maintenance schedules",
          "Warranty coordination and escalation support",
        ],
      },
    ],
  },
  projects: {
    badge: "Selected deployments",
    title: "Solar Projects Across India",
    description:
      "Representative use cases that show how ELIZ ENERGY approaches panel selection, project sizing, and commercial outcomes across India.",
    items: [
      {
        title: "Industrial Rooftop Solar Plant",
        sector: "Industrial",
        location: "Mumbai, Maharashtra",
        scale: "Rooftop solar system",
        outcome: "Projected 35%+ reduction in daytime grid dependency",
        image: "/images/industrial.png",
      },
      {
        title: "Residential Solar with Battery Storage",
        sector: "Residential",
        location: "Thane, Maharashtra",
        scale: "Surya Ghar Yojana subsidised install",
        outcome: "Near-zero electricity bills with govt subsidy",
        image: "/images/solar-battery-solar.jpg",
      },
      {
        title: "Utility Solar with Robotic Cleaning",
        sector: "Utility",
        location: "Pan India",
        scale: "Large-scale utility plant",
        outcome: "Automated robotic cleaning maximised generation",
        image: "/images/solar-battery-solar.jpg",
      },
    ],
  },
  testimonials: {
    badge: "Client perspective",
    title: "What Our Solar Customers Say in Mumbai",
    items: [
      {
        quote:
          "ELIZ ENERGY did not just quote panels. They mapped our load curve, showed where storage would matter later, and helped our finance team compare capex versus supply-led phases.",
        author: "Rohan Mehta",
        role: "Procurement Head",
        company: "Westline Manufacturing",
        result: "Approved in one internal review cycle",
        image: "/images/new_landing/avatar1.png",
      },
      {
        quote:
          "We needed a partner who understood the realities of warehouse operations. The installation plan avoided our peak dispatch windows and the system started delivering savings immediately.",
        author: "Ananya Rao",
        role: "Operations Director",
        company: "TransitGrid Logistics",
        result: "Minimal disruption during execution",
        image: "/images/new_landing/avatar1.png",
      },
      {
        quote:
          "Their team was strong on technical response time, documentation, and warranty clarity. That matters when you are buying for multiple sites and cannot afford vague supplier commitments.",
        author: "Karan Bedi",
        role: "Project Lead",
        company: "Axis Retail Parks",
        result: "Standardized rollout model for multi-site expansion",
        image: "/images/new_landing/avatar1.png",
      },
    ],
    proofPoints: [
      "Technical-first pre-sales support",
      "Faster stakeholder approvals",
      "Clearer post-install service ownership",
    ],
  },
  whyUs: {
    badge: "Commercial confidence",
    title: "Why Choose ELIZ ENERGY – Trusted Solar Company Across India?",
    description:
      "ELIZ ENERGY brings 4+ years of dedicated solar experience. We serve Residential, Commercial, Industrial & Utility customers with end-to-end solar solutions and Surya Ghar Yojana subsidy assistance.",
    image: "/images/Solar-Panel-Installation.webp",
    checklist: [
      "Pan India solar installation coverage",
      "4+ years of solar sector expertise",
      "Complete product supply – Panels, Inverters, Batteries, BoS, Cabling & ",
      "Robotic cleaning solutions for utility-scale solar plants",
      "Surya Ghar Yojana subsidy project assistance",
    ],
  },
  finalCta: {
    title: "Get Free Solar Consultation – Anywhere in India",
    description:
      "Contact ELIZ ENERGY today for complete solar solutions across India. Residential, Commercial, Industrial & Utility sectors served. Surya Ghar Yojana subsidy assistance available.",
    primary: {
      text: "Talk to Our Solar Experts",
      href: "/contact",
    },
    secondary: {
      text: "Start Your Quote",
      href: "/get-quote",
    },
    deliverables: [
      "Capacity sizing recommendation",
      "Estimated generation and savings model",
      "Surya Ghar Yojana subsidy eligibility check",
    ],
  },
  overview: {
    badge: "About ELIZ ENERGY",
    title:
      "Trusted Solar Company Across India – Residential, Commercial, Industrial & Utility",
    description:
      "ELIZ ENERGY is a leading solar company with 4+ years of experience in the solar sector. We provide reliable, cost-effective, and sustainable solar solutions across India. Our founder's solar expertise drives end-to-end project delivery for residential, commercial, industrial, and utility-scale customers, including Surya Ghar Yojana subsidy projects.",
    highlight:
      "We align sourcing, engineering, commissioning, and service – across all sectors.",
    image: "/images/new_landing/about_b2b.png",
    gallery: ["/images/Rooftop.jpg", "/images/industrial.png"],
    stats: [
      { value: "4+ Years", label: "Solar sector experience" },
      { value: "10+ Years", label: "Combined expertise" },
      { value: "Founded 2025", label: "ELIZ ENERGY" },
    ],
    advantages: [
      "Complete solar product supply – Panels, Inverters, Batteries, Mounting Structures, BoS & Cabling",
      "EV Charger installation for homes and commercial premises",
      "Robotic cleaning solutions for utility-scale solar plants",
    ],
    sectors: [
      "Residential Homes",
      "Commercial Offices & Shops",
      "Industrial Plants",
      "Utility-Scale Projects",
      "Hospitals & Campuses",
      "Government Subsidy Projects",
    ],
  },
  seo: {
    home: {
      title:
        "Solar Panel Installation Across India | Best Solar Company | ELIZ ENERGY",
      description:
        "ELIZ ENERGY provides affordable solar solutions across India for Residential, Commercial, Industrial & Utility sectors. Surya Ghar Yojana subsidy available. Get a free consultation today.",
    },
    about: {
      title:
        "About ELIZ ENERGY | Trusted Solar Company with 4+ Years Experience",
      description:
        "Learn about ELIZ ENERGY – 4+ years of solar expertise. We provide complete solar solutions for Residential, Commercial, Industrial & Utility sectors across India.",
    },
    services: {
      title:
        "Complete Solar Solutions in India | Residential, Commercial, Industrial & Utility",
      description:
        "ELIZ ENERGY provides rooftop solar, commercial, industrial, and utility-scale solar solutions. EV charger installation and robotic cleaning for utility plants also available.",
    },
    products: {
      title: "Solar Panels, Inverters, Batteries,  & More | ELIZ ENERGY",
      description:
        "Buy high-quality solar panels, inverters, batteries, mounting structures, BoS components, cabling, and EV chargers. Robotic cleaning for utility solar available.",
    },
    maintenance: {
      title: "Solar Maintenance Services | AMC, Cleaning & Robotic Cleaning",
      description:
        "Keep your solar system efficient with expert maintenance. AMC, panel cleaning, robotic cleaning for utility plants, and performance optimization by ELIZ ENERGY.",
    },
    contact: {
      title: "Contact ELIZ ENERGY | Solar Consultation Across India",
      description:
        "Contact ELIZ ENERGY for solar panel installation across India. Residential, Commercial, Industrial & Utility sectors. Get a free consultation and quotation today.",
    },
  },
  footer: {
    title: "Need pricing, technical data sheets, or solar support?",
    description:
      "Tell us whether you are evaluating a rooftop solar project, buying panels, or planning maintenance. Our team will point you to the right path quickly.",
    quickLinks: [
      { name: "About Us", href: "/about" },
      { name: "Products", href: "/products" },
      { name: "Services", href: "/services" },
      { name: "Maintenance", href: "/maintenance" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    legalLinks: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms and Conditions", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
    solutionLinks: [
      { name: "Rooftop Solar", href: "/services" },
      { name: "Commercial Solar", href: "/services" },
      { name: "Maintenance & AMC", href: "/maintenance" },
    ],
    copyright: "© 2026 ELIZ ENERGY. All rights reserved.",
  },
  founder: {
    name: "Ms. Falguni Rawal",
    role: "Founder & Lead Consultant",
    experience: {
      solar: "4+ years",
      combined: "10-11 years",
      sales: "5+ years",
    },
    bio: "Ms. Falguni Rawal brings 4+ years of dedicated solar sector experience alongside a decade of combined expertise. Driven by a passion for clean energy, she founded ELIZ ENERGY to deliver complete solar solutions – from residential rooftops eligible for Surya Ghar Yojana subsidies to utility-scale projects with robotic cleaning – making sustainable power accessible and affordable across India.",
    image: "/images/founder.jpeg",
  },
  faqs: [
    {
      id: "1",
      question: "How long does the installation take?",
      answer:
        "A typical residential installation takes 3-5 days, while commercial projects can take 2-4 weeks depending on the capacity and site conditions.",
      category: "General",
    },
    {
      id: "2",
      question: "Does solar work during cloudy days?",
      answer:
        "Yes, solar panels still generate electricity on cloudy days, though at a reduced output. They use diffused daylight which is still present during overcast weather.",
      category: "Technical",
    },
    {
      id: "3",
      question: "What is the payback period for a solar system?",
      answer:
        "The typical payback period for most commercial installations is between 3 to 4 years, after which the electricity generated is essentially free.",
      category: "Pricing",
    },
    {
      id: "4",
      question: "What are the maintenance requirements for solar panels?",
      answer:
        "Solar panels require very little maintenance. Periodic cleaning (every 3-6 months) and a yearly professional inspection are usually sufficient to maintain optimal performance.",
      category: "Maintenance",
    },
    {
      id: "5",
      question: "Do you assist with Surya Ghar Yojana subsidies?",
      answer:
        "Yes, we provide complete, end-to-end assistance with Surya Ghar Yojana government subsidies, handling all paperwork and approvals to ensure you get the maximum benefit.",
      category: "General",
    },
    {
      id: "6",
      question: "Do you install EV chargers as well?",
      answer:
        "Yes, we supply and install EV chargers for both residential homes and commercial premises, seamlessly integrating them with your solar power setup if desired.",
      category: "Technical",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export default siteConfig;
