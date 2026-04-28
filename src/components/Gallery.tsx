import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";

const projects = [
  { src: gallery1, title: "Barn Conversion", category: "Carpentry & Flooring" },
  { src: gallery2, title: "Office Refurbishment", category: "Commercial" },
  { src: gallery3, title: "Media Wall", category: "Bespoke Carpentry" },
  { src: gallery4, title: "Garden Room", category: "Interior Painting" },
  { src: gallery5, title: "Period Bedroom", category: "Interior Painting" },
  { src: gallery6, title: "Period Living Room", category: "Interior Painting" },
  { src: gallery7, title: "Staircase & Balustrade", category: "Carpentry & Painting" },
  { src: gallery8, title: "Beamed Living Room", category: "Interior Painting" },
  { src: gallery9, title: "Bathroom Refurbishment", category: "Carpentry & Painting" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-body font-semibold tracking-wider uppercase text-sm mb-3">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Project Gallery
          </h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            A selection of recent projects across Dorset — from cosy cottages to modern commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border"
            >
              <img
                src={project.src}
                alt={project.title}
                loading="lazy"
                width={768}
                height={512}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-accent mb-1">
                  {project.category}
                </span>
                <h3 className="text-lg font-heading font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
