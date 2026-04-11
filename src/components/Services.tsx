import { Paintbrush, Home, Building2, Wallpaper, Droplets, Sparkles } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Painting",
    description: "Flawless walls, ceilings and woodwork. We prep thoroughly and use premium paints for a lasting finish.",
  },
  {
    icon: Home,
    title: "Exterior Painting",
    description: "Weather-resistant coatings that protect and beautify your property against the Dorset elements.",
  },
  {
    icon: Wallpaper,
    title: "Wallpapering",
    description: "Expert hanging of all wallpaper types, from feature walls to full room transformations.",
  },
  {
    icon: Droplets,
    title: "Wood Staining & Varnishing",
    description: "Bring out the natural beauty of timber with professional staining and protective finishes.",
  },
  {
    icon: Building2,
    title: "Commercial Work",
    description: "Offices, shops and commercial spaces completed efficiently with minimal disruption.",
  },
  {
    icon: Sparkles,
    title: "Specialist Finishes",
    description: "From colour consultations to decorative techniques that add character to any space.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-body font-semibold tracking-wider uppercase text-sm mb-3">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl bg-background border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
