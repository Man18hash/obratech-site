export default function Testimonials() {
  const feedback = [
    { name: "3D Printing Client", text: "Their 3D printing services are excellent and affordable." },
    { name: "Researcher", text: "The face attendance is accurate and was delivered fast." },
    { name: "SME Owner", text: "They customized a POS and inventory system for our shop—easy to use, reliable, and fits our budget." },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {feedback.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow text-center">
            <p className="italic text-gray-700">&ldquo;{f.text}&rdquo;</p>
            <p className="mt-4 font-bold text-brand-blue">{f.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
