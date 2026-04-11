import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Bournemouth",
    text: "JBK transformed our entire downstairs. The attention to detail was incredible — every edge was crisp, every surface smooth. Couldn't recommend them highly enough!",
  },
  {
    name: "David & Claire T.",
    location: "Poole",
    text: "We've used JBK three times now and they never disappoint. Professional, tidy, and the finish is always perfect. They're our go-to decorators.",
  },
  {
    name: "James R.",
    location: "Weymouth",
    text: "Had the exterior of our period property painted. JBK took real care with the prep work and the result is stunning. Great value for the quality of work.",
  },
  {
    name: "Emma L.",
    location: "Dorchester",
    text: "From the initial quote to the final coat, everything was seamless. They even helped us choose the right colours. Absolutely brilliant service!",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-body font-semibold tracking-wider uppercase text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-background p-8 rounded-xl border border-border relative"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div>
                <p className="font-body font-semibold text-foreground">{review.name}</p>
                <p className="text-muted-foreground text-sm font-body">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
