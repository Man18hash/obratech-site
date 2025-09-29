export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Pricing Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-bold text-lg md:text-xl">Starter</h3>
          <p className="mt-2 text-gray-600 text-sm md:text-base">For students and prototypes</p>
          <p className="text-2xl md:text-3xl font-bold mt-4">₱5,000+</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center border-2 border-brand-blue">
          <h3 className="font-bold text-lg md:text-xl">Business</h3>
          <p className="mt-2 text-gray-600 text-sm md:text-base">For SMEs and startups</p>
          <p className="text-2xl md:text-3xl font-bold mt-4">₱20,000+</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-bold text-lg md:text-xl">Enterprise</h3>
          <p className="mt-2 text-gray-600 text-sm md:text-base">For large companies</p>
          <p className="text-2xl md:text-3xl font-bold mt-4">₱50,000+</p>
        </div>
      </div>
    </section>
  );
}
