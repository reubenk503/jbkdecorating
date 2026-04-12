import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const projects = [
  { src: gallery1, title: "Period Living Room", category: "Interior Painting" },
  { src: gallery2, title: "Shaker Kitchen", category: "Kitchen Cabinets" },
  { src: gallery3, title: "Feature Wall", category: "Wallpapering" },
  { src: gallery4, title: "Dorset Cottage", category: "Exterior Painting" },
  { src: gallery5, title: "Oak Staircase", category: "Wood Finishing" },
  { src: gallery6, title: "Office Refurbishment", category: "Commercial" },
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
