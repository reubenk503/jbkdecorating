import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: "Please fill in your name and email", variant: "destructive" });
      return;
    }
    setLoading(true);
    const id = crypto.randomUUID();
    const { error } = await supabase.from("enquiries").insert({
      id,
      name: form.name,
      phone: form.phone || null,
      email: form.email,
      message: form.message || null,
    });
    if (error) {
      setLoading(false);
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
      return;
    }

    // Send notification email to JBK Decorating
    await supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "enquiry-notification",
        idempotencyKey: `enquiry-${id}`,
        templateData: {
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          message: form.message || undefined,
        },
      },
    });

    setLoading(false);
    toast({ title: "Enquiry sent!", description: "We'll be in touch shortly." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

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
              Get in touch for a free, no-obligation quote. We cover North Dorset,
              South Somerset and West Wiltshire.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Call us</p>
                  <a href="tel:07774015129" className="font-body font-semibold text-foreground hover:text-accent transition-colors">
                    07774 015129
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Email us</p>
                  <p className="font-body font-semibold text-foreground">jbkdecorating@outlook.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Based in</p>
                  <p className="font-body font-semibold text-foreground">Gillingham, Dorset — 25-mile radius</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Response time</p>
                  <p className="font-body font-semibold text-foreground">We reply within hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Request a Free Quote
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
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
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
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
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="e.g. Interior painting of 3-bedroom house..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-body font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
