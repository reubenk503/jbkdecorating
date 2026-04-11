import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent font-body font-semibold tracking-wider uppercase text-sm mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Transform<br />Your Space?
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              Get in touch for a free, no-obligation quote. We cover all areas of Dorset
              including Bournemouth, Poole, Weymouth, Dorchester and surrounding villages.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Call us</p>
                  <p className="font-body font-semibold text-foreground">01234 567 890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Email us</p>
                  <p className="font-body font-semibold text-foreground">info@jbkdecorating.co.uk</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Covering</p>
                  <p className="font-body font-semibold text-foreground">All areas of Dorset</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Working hours</p>
                  <p className="font-body font-semibold text-foreground">Mon–Fri: 8am – 6pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Request a Free Quote
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="e.g. Interior painting of 3-bedroom house..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-body font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
