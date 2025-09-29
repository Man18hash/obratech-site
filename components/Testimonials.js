export default function Testimonials() {
  const feedback = [
    { name: "Glazy Rae", text: "Their 3D printing services are excellent and affordable." },
    { name: "Classmate", text: "The POS system helped me with my thesis presentation." },
    { name: "Startup Founder", text: "ObraTech delivered our prototype quickly and reliably." },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {feedback.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow text-center">
            <p className="italic text-gray-700">"{f.text}"</p>
            <p className="mt-4 font-bold text-brand-blue">{f.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
