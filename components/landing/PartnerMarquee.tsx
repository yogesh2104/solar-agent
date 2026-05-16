"use client";
import { motion } from "framer-motion";

const PARTNERS = [
  { name: "Waaree", x: "0%", y: "0%" },
  { name: "Citizen", x: "100%", y: "0%" },
  { name: "GoodWe", x: "0%", y: "50%" },
  { name: "Sineng", x: "100%", y: "50%" },
  { name: "Apar", x: "0%", y: "100%" },
  { name: "Polycab", x: "100%", y: "100%" },
];

const PartnerMarquee = () => {
  const displayPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 md:py-20">
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Our Dealing <span className="text-primary">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deal in trusted solar brands to deliver fast supply and support
            across India.
          </p>
        </motion.div>
      </div>

      <div className="relative flex pause-marquee">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        <div className="flex whitespace-nowrap animate-marquee">
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="mx-2 md:mx-4 flex-shrink-0 group"
            >
              <div className="w-48 h-24 md:w-64 md:h-32 bg-[#f4f5f5]! rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/20 overflow-hidden relative glass">
                <div
                  className="w-full h-full bg-no-repeat transition-all duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  style={{
                    backgroundImage: "url('/dealing-with.png')",
                    backgroundSize: "200% 300%",
                    backgroundPosition: `${partner.x} ${partner.y}`,
                  }}
                />
                <div className="sr-only">{partner.name}</div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;
