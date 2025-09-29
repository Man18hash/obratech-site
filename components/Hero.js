export default function Hero() {
  return (
    <section
      id="home"
      className="gradient-bg text-white section-padding relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Custom Software & 
            <span className="text-brand-yellow block">3D Printing Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering Students, Startups & Businesses with cutting-edge technology solutions. 
            From custom software development to innovative 3D printing services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started Today
            </a>
            <a
              href="#portfolio"
              className="btn-secondary text-lg px-8 py-4"
            >
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2">50+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2">3</div>
              <div className="text-sm text-gray-300">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2">100%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
