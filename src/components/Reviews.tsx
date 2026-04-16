import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Steve Stockley",
    date: "14 Dec 2021",
    text: "Jas is a fantastic painter and decorator, good carpenter too. Fast, reliable, great work, turns up when he says so — friendly, awesome guy.",
  },
  {
    name: "Leanne Groves",
    date: "2 Nov 2021",
    text: "Jason is a really nice guy. Very professional and outstanding at what he does. Nothing is ever too much trouble and he pays great attention to detail. Highly recommended.",
  },
  {
    name: "Holly Ridout",
    date: "29 Jun 2020",
    text: "Great job of painting my bathroom and utility room, thank you! Timely and professional.",
  },
  {
    name: "Julie Martin",
    date: "5 Mar 2020",
    text: "Thank you Jason for the fantastic job of living room, kitchen and hall. Very pleased with the result, and lovely and clean after. I would highly recommend him and would use him again.",
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
          <p className="text-muted-foreground font-body mt-4">
            Genuine recommendations from clients on Facebook.
          </p>
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
                <p className="text-muted-foreground text-sm font-body">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
