export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-brand-yellow to-yellow-400 text-brand-blue py-24 text-center px-4"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold">
        Custom Software & 3D Printing Solutions
      </h2>
      <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
        Empowering Students, Startups & Businesses with Innovation
      </p>

      <a
        href="#contact"
        className="mt-6 inline-block px-6 md:px-8 py-3 bg-brand-blue text-white rounded-lg shadow hover:bg-blue-800 transition"
      >
        Request a Quote
      </a>
    </section>
  );
}
