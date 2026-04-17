const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function main() {
  const services = [
    {
      title: "Residential Solar",
      slug: "residential-solar",
      description: "High-efficiency solar solutions for modern homes. Reduce electricity bills and increase property value with our premium rooftop installations.",
      icon: "Home",
      features: [
        "Customized Rooftop Design",
        "Net Metering Support",
        "25-Year Warranty",
        "Remote Monitoring app"
      ],
      content: "<h2>Solar for your Home</h2><p>Experience the power of the sun with our residential solar solutions. We handle everything from site survey to government approvals.</p>"
    },
    {
      title: "Commercial Solar",
      slug: "commercial-solar",
      description: "Scalable solar power for businesses, offices, and retail spaces. Locked-in energy costs and a stronger ESG profile for your enterprise.",
      icon: "Building",
      features: [
        "Accelerated Depreciation Benefits",
        "High Performance TOPCon Panels",
        "Zero-Disruption Installation",
        "Energy Load Optimization"
      ],
      content: "<h2>Empower Your Business</h2><p>Switching to solar is the smartest financial decision for your commercial property. Reduce your operational costs significantly.</p>"
    },
    {
      title: "Industrial Solar",
      slug: "industrial-solar",
      description: "Heavy-duty solar systems for factories and warehouses. Engineered for high uptime and maximum yield in demanding industrial environments.",
      icon: "Factory",
      features: [
        "MW-Scale Deployment",
        "Structural Integrity Analysis",
        "Open Access Solutions",
        "Grid Stability Management"
      ],
      content: "<h2>Industrial Grade Power</h2><p>Our industrial solar plants are built to last. We use top-tier components and advanced engineering to ensure maximum energy harvest.</p>"
    },
    {
      title: "Maintenance and AMC",
      slug: "maintenance-and-amc",
      description: "Comprehensive Annual Maintenance Contracts and on-demand service. Ensure your solar investment continues to perform at 100% efficiency.",
      icon: "Settings",
      features: [
        "Robotic Panel Cleaning",
        "Inverter Health Checks",
        "Thermal Imaging Surveys",
        "Performance Audits"
      ],
      content: "<h2>Maximum Uptime, Always</h2><p>A solar system is only as good as its maintenance. Our AMC services guarantee that your system performs at its peak throughout the year.</p>"
    }
  ];

  console.log("Seeding services...");

  for (const service of services) {
    await db.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }

  const faqs = [
    {
      question: "How long does the installation take?",
      answer: "A typical residential installation takes 3-5 days, while commercial projects can take 2-4 weeks depending on the capacity and site conditions.",
      category: "General",
      order: 1
    },
    {
      question: "Does solar work during cloudy days?",
      answer: "Yes, solar panels still generate electricity on cloudy days, though at a reduced output. They use diffused daylight which is still present during overcast weather.",
      category: "Technical",
      order: 2
    },
    {
      question: "What is the payback period for a solar system?",
      answer: "The typical payback period for most commercial installations is between 3 to 4 years, after which the electricity generated is essentially free.",
      category: "Pricing",
      order: 3
    }
  ];

  console.log("Seeding FAQs...");

  for (const faq of faqs) {
    await db.fAQ.create({
      data: faq
    });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
