import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Established 2012, based in Dorset",
  "Fully insured and reliable",
  "Premium paints and materials",
  "Clean, tidy and respectful of your home",
  "Free, no-obligation quotes",
  "Excellent reviews from happy customers",
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-body font-semibold tracking-wider uppercase text-sm mb-3">
              About JBK Decorating
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Dorset's Trusted<br />Decorating Team
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Led by Jason, JBK Decorating has been elevating interiors across the region since
              2012. Operating from our base in Gillingham, we proudly serve clients within a
              25-mile radius — encompassing Dorset's most picturesque towns and villages. Every
              project reflects our unwavering commitment to meticulous craftsmanship, transparent
              pricing, and a flawless finish that truly speaks for itself.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground font-body">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary rounded-2xl p-12 text-primary-foreground">
              <p className="text-5xl md:text-7xl font-heading font-bold text-accent mb-2">EST. 2012</p>
              <p className="text-2xl font-heading font-semibold mb-4">A Decade of Excellence</p>
              <p className="font-body text-primary-foreground/80 leading-relaxed">
                Serving homeowners and businesses throughout Dorset with dedication and
                craftsmanship that keeps customers coming back.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
                <div>
                  <p className="text-3xl font-heading font-bold text-accent">500+</p>
                  <p className="text-sm font-body text-primary-foreground/70">Projects Done</p>
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-accent">100%</p>
                  <p className="text-sm font-body text-primary-foreground/70">Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-accent">5★</p>
                  <p className="text-sm font-body text-primary-foreground/70">Avg Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
