import heroImage from "@/assets/hero-painting.jpg";
import { Phone, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional painter decorating interior woodwork in Dorset"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-2 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="text-primary-foreground/80 font-body text-sm ml-2">
              5-Star Rated · Dorset
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight">
            Painting &<br />
            Decorating<br />
            <span className="text-accent">Done Right</span>
          </h1>

          <p className="text-lg text-primary-foreground/80 font-body max-w-lg leading-relaxed">
            Trusted by homeowners across Dorset since 2012. Quality craftsmanship,
            meticulous attention to detail, and a finish you'll love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+441234567890"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
