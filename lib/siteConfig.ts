const siteConfig = {
  company: {
    name: "ELIZ ENERGY",
    fullName: "ELIZ ENERGY Solar Solutions",
    tagline: "The pit stop solution for renewable energy equipment.",
    logo: "E",
    contact: {
      phone: "+91 7208244097",
      whatsapp: "917208244097",
      email: "energyeliz@gmail.com",
      address: "Office no: 1108, 11th floor, Solus Building Hiranandani Estate, Thane West, Maharashtra 400607.",
      googleMaps: "#",
      workingHours: "11am to 5pm",
      locationBoost:
        "Pan India solar equipment sale & support | Residential, Commercial, Industrial & Utility",
    },
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ],
  hero: {
    badge: "Pan India solar equipment sale & support",
    title: "The pit stop solution for renewable energy equipment",
    description:
      "Eliz Energy provides fast delivery, reliable and sustainable power systems for a cleaner future.",
    primaryCta: {
      text: "Contact Us",
      href: "/contact",
    },
    secondaryCta: {
      text: "View Products",
      href: "/products",
    },
    trustChips: [
      "Supply & Support Across India",
      "Residential, Commercial, Industrial & Utility",
      "4+ years in the solar sector",
      "Waaree, Citizen, GoodWe & more",
    ],
    sideStats: [
      {
        label: "Experience",
        value: "4+ years",
        note: "Solar sector supply and support",
      },
      {
        label: "Coverage",
        value: "Pan India",
        note: "Fast delivery and reliable support",
      },
    ],
    stageCards: {
      proof: {
        title: "Pan India solar equipment sale & support.",
        image: "/images/worker-helmet.webp",
      },
      social: {
        value: "Across India",
        label: "Supply and support",
      },
      highlight: {
        title: "Grow Green Energy With Us !!",
        description:
          "Reliable solar equipment and clean-energy systems for residential, commercial, industrial, and utility projects.",
      },
    },
    metrics: [
      { value: "4+ Years", label: "Solar sector experience" },
      { value: "Pan India", label: "Supply & support coverage" },
      { value: "4", label: "Sectors served" },
      { value: "Tier-1", label: "Partner brands" },
    ],
    image: "/new-images/HomePage.png",
  },
  solutions: {
    badge: "Products & services",
    title: "Complete solar equipment supply and support",
    description:
      "We provide complete solar solutions including solar panels, inverters, solar batteries, mounting structures, BoS components, cabling & accessories, EV chargers, robotic cleaning for utility, and Surya Ghar Yojana subsidy project support.",
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
        title: "Solar Panels & Inverters",
        description:
          "Reliable panels and inverter options from trusted brands for homes, businesses, and larger installations.",
        bullets: [
          "Solar panels",
          "Inverters",
          "Waaree, Citizen, GoodWe and more",
        ],
      },
      {
        id: "02",
        title: "Batteries, Mounting & BoS",
        description:
          "Storage, mounting structures, and balance-of-system components for dependable project execution.",
        bullets: [
          "Solar batteries",
          "Mounting structures",
          "BoS components",
        ],
      },
      {
        id: "03",
        title: "Cabling, Accessories & EV Chargers",
        description:
          "Supporting electrical hardware and EV charger supply for residential, commercial, and industrial needs.",
        bullets: [
          "Cabling & accessories",
          "EV charger",
          "Fast delivery across India",
        ],
      },
      {
        id: "04",
        title: "Robotic Cleaning & Subsidy Support",
        description:
          "Utility cleaning solutions and Surya Ghar Yojana project support for cleaner, simpler adoption.",
        bullets: [
          "Robotic cleaning for utility",
          "Surya Ghar Yojana",
          "Pan India supply & support",
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
        title: "The project capacity is 600kw–Non-DCR",
        sector: "Residential",
        location: "Latur, Maharashtra",
        scale: "Rooftop solar system",
        outcome: "Projected 35%+ reduction in daytime grid dependency",
        image: "/project/latur_maharashtra.jpeg",
      },
      {
        title: "700+ kW Non-DCR Project (535 Wp Modules) ",
        sector: "Residential",
        location: "Thane, Maharashtra",
        scale: "Surya Ghar Yojana subsidised install",
        outcome: "Near-zero electricity bills with govt subsidy",
        image: "/project/pune_maharashtra.jpeg",
      },
      {
        title: " 20kw_590wp Waree Non-DCR",
        sector: "Utility",
        location: "Mumbai",
        scale: "Large-scale utility plant",
        outcome: "Automated robotic cleaning maximised generation",
        image: "/project/project-2.jpeg",
      },
      // {
      //   title: "Inverter Project",
      //   sector: "Industrial",
      //   location: "",
      //   scale: "Multi-Inverter Grid-Tie System",
      //   outcome: "Seamless grid integration and real-time power analytics",
      //   image: "/new-images/Inverters.jpg",
      // },
    ],
  },
  testimonials: {
    badge: "Client perspective",
    title: "What Our Solar Customers Say.",
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
    badge: "What teams use us for",
    title: "Why buyers stay with ELIZ ENERGY",
    description:
      "ELIZ ENERGY brings 4+ years of solar sector experience and supports Residential, Commercial, Industrial & Utility customers across India.",
    image: "/new-images/whatteams.jpg",
    checklist: [
      "Pan India solar equipment sale & support",
      "Solar panels, inverters, batteries, mounting structures",
      "BoS components, cabling, accessories, and EV chargers",
      "Robotic cleaning for utility and Surya Ghar Yojana support",
    ],
  },
  finalCta: {
    title: "Grow Green Energy With Us !!",
    description:
      "Call between 11am and 5pm for solar equipment, supply, and support across India.",
    primary: {
      text: "Contact Now",
      href: "/contact",
    },
    secondary: {
      text: "View Products",
      href: "/products",
    },
    deliverables: [
      "Fast delivery across India",
      "Reliable solar equipment support",
      "Residential, Commercial, Industrial & Utility coverage",
    ],
  },
  overview: {
    badge: "About ELIZ ENERGY",
    title: "About ELIZ ENERGY",
    description:
      "Eliz Energy is a solar equipment partner delivering reliable products and support across India for residential, commercial, industrial, and utility projects.",
    highlight:
      "Fast delivery, reliable and sustainable power systems for a cleaner future.",
    images: [
      "/new-images/Enterprisenote1.jpg",
      "/new-images/Enterprisenote2.jpg",
    ],
    gallery: ["/images/Rooftop.jpg", "/images/industrial.png"],
    stats: [
      { value: "4+ Years", label: "Solar sector experience" },
      { value: "Across India", label: "Supply & support" },
      { value: "Tier-1", label: "Partner brands" },
    ],
    advantages: [
      "Solar panels, inverters, batteries, mounting structures, and BoS components",
      "EV charger supply and robotic cleaning for utility",
      "Surya Ghar Yojana project support",
    ],
    sectors: [
      "Residential Homes",
      "Commercial Offices & Shops",
      "Industrial Plants",
      "Utility-Scale Projects",
      "Hospitals & Campuses",
      "Government Subsidy Projects",
    ],
    mission:
      "To supply dependable solar equipment and support that helps customers switch to clean energy with confidence, speed, and service.",
    vision:
      "To become a trusted pan-India renewable energy partner known for fast delivery, reliable support, and practical solar solutions.",
  },
  seo: {
    home: {
      title: "Eliz Energy | Solar Equipment Supply & Support Across India",
      description:
        "Eliz Energy provides fast delivery, reliable solar equipment, and support across India for Residential, Commercial, Industrial & Utility projects.",
    },
    about: {
      title: "About Eliz Energy | Solar Equipment Supply & Support",
      description:
        "Learn about Eliz Energy - 4+ years of solar sector experience, pan-India supply & support, and trusted partner brands like Waaree, Citizen, and GoodWe.",
    },
    services: {
      title:
        "Solar Products & Services in India | Residential, Commercial, Industrial & Utility",
      description:
        "ELIZ ENERGY provides solar panels, inverters, batteries, mounting structures, BoS components, cabling, EV chargers, robotic cleaning, and Surya Ghar Yojana support.",
    },
    products: {
      title: "Solar Panels, Inverters, Batteries & More | Eliz Energy",
      description:
        "Buy solar panels, inverters, batteries, mounting structures, BoS components, cabling & accessories, EV chargers, and robotic cleaning support from Eliz Energy.",
    },
    maintenance: {
      title: "Solar Maintenance Services | AMC, Cleaning & Robotic Cleaning",
      description:
        "Keep your solar system efficient with expert maintenance. AMC, panel cleaning, robotic cleaning for utility plants, and performance optimization by ELIZ ENERGY.",
    },
    contact: {
      title: "Contact Eliz Energy | Pan India Solar Equipment Sale & Support",
      description: "Call between 11am and 5pm for solar equipment, supply, and support across India.",
    },
  },
  footer: {
    title: "Speak with a team built for B2B & B2C solar buying decisions.",
    description: "Call between 11am and 5pm for fast delivery and reliable solar support across India.",
    quickLinks: [
      { name: "About Us", href: "/about" },
      { name: "Products", href: "/products" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    legalLinks: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms and Conditions", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
    solutionLinks: [
      { name: "Solar Products", href: "/products" },
      { name: "Solar Services", href: "/services" },
      { name: "Maintenance & AMC", href: "/maintenance" },
    ],
    copyright: "(c) 2026 ELIZ ENERGY. All rights reserved.",
  },
  founder: {
    name: "Ms. Falguni Rawal",
    role: "Founder & Lead Consultant",
    experience: {
      solar: "4+ years",
      combined: "10-11 years",
      sales: "5+ years",
    },
    bio: "Ms. Falguni Rawal brings 4+ years of dedicated solar sector experience alongside a decade of combined expertise. Driven by a passion for clean energy, she founded ELIZ ENERGY to deliver complete solar solutions - from residential rooftops eligible for Surya Ghar Yojana subsidies to utility-scale projects with robotic cleaning - making sustainable power accessible and affordable across India.",
    image: "/images/founder.jpeg",
  },
  faqs: [
    {
      id: "1",
      question: "How long does solar panel installation take in India?",
      answer:
        "A typical residential solar panel installation in India takes 3-5 days. Larger commercial solar projects may take 2-4 weeks depending on system size and site conditions.",
      category: "General",
    },
    {
      id: "2",
      question: "Does solar work during cloudy or rainy days in India?",
      answer:
        "Yes, solar panels generate electricity even on cloudy or rainy days using diffused sunlight. However, output may reduce by 10-30% compared to sunny conditions.",
      category: "Technical",
    },
    {
      id: "3",
      question: "What is the payback period for solar systems in India?",
      answer:
        "The average payback period for solar systems in India is 3 to 5 years. After that, you can enjoy free electricity for 20+ years.",
      category: "Pricing",
    },
    {
      id: "4",
      question: "What maintenance is required for solar panels?",
      answer:
        "Solar panels require minimal maintenance. Cleaning every 15-30 days and an annual inspection is enough to maintain efficiency.",
      category: "Maintenance",
    },
    {
      id: "5",
      question: "Is government subsidy available for solar in India?",
      answer:
        "Yes, the Indian government provides subsidies under schemes like PM Surya Ghar Yojana. Residential users can get up to 40% subsidy on rooftop solar systems.",
      category: "General",
    },
    {
      id: "6",
      question: "Do you provide EV charger installation with solar?",
      answer:
        "Yes, we install EV chargers for homes and businesses. These can be integrated with your solar system for efficient and cost-effective charging.",
      category: "Technical",
    },
    {
      id: "7",
      question: "How much does a solar system cost in India?",
      answer:
        "The cost of a solar system in India typically ranges from Rs 70,000 to Rs 90,000 per kW depending on components, installation, and system type.",
      category: "Pricing",
    },
    {
      id: "8",
      question: "Is solar worth it for homes in India?",
      answer:
        "Yes, solar is a great investment for Indian homes due to high electricity costs, government subsidies, and long-term savings.",
      category: "General",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export default siteConfig;
