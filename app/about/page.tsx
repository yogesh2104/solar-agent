import StaticPageHeader from "@/components/landing/StaticPageHeader";
import { Zap, Shield, TrendingUp, Users } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Sustainability",
    description: "Committed to providing 100% clean and renewable energy solutions for a greener planet.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Our systems are built to last, with industry-leading warranties and dedicated support.",
  },
  {
    icon: TrendingUp,
    title: "Efficiency",
    description: "Maximizing energy harvest with top-tier solar technology and smart monitoring.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Tailored solar solutions designed to meet the unique needs of every home and business.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <StaticPageHeader
        title="About SolarCo"
        description="We are on a mission to accelerate the world's transition to sustainable energy through affordable and efficient solar technology."
      />

      {/* Our Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-4xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-fe5bb584852e?auto=format&fit=crop&q=80"
                  alt="Solar Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl hidden md:block">
                <div className="text-primary-foreground text-4xl font-bold mb-1">10+</div>
                <div className="text-primary-foreground/80 text-sm">Years of Experience</div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Journey</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 2014, SolarCo began with a simple vision: to make solar energy accessible to everyone. What started as a small team of passionate engineers has grown into a leading solar provider, serving thousands of residential and industrial clients across the country.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that the sun is the most powerful resource we have. By harnessing its power, we can not only reduce electricity bills but also create a lasting impact on the environment for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide us in every project we undertake.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-card border border-border p-8 rounded-3xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats (Reused style) */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "kW Installed", value: "750+" },
              { label: "Happy Clients", value: "1.2k+" },
              { label: "Cities Served", value: "15+" },
              { label: "Carbon Offset", value: "5k Tons" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
