const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-2xl font-heading font-bold">
              JBK <span className="text-accent">Decorating</span>
            </p>
            <p className="text-primary-foreground/60 font-body text-sm mt-1">
              Professional Painters & Decorators · Dorset
            </p>
          </div>
          <p className="text-primary-foreground/50 font-body text-sm">
            © {new Date().getFullYear()} JBK Decorating. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
