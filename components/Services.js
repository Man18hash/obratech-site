export default function Services() {
  const services = [
    {
      title: "Software Development",
      desc: "Web systems, POS, custom apps – from prototype to deployment.",
      samples: ["POS System", "Attendance Tracker", "E-commerce Site"]
    },
    {
      title: "3D Printing",
      desc: "High-quality 3D printed parts for prototypes & custom projects.",
      samples: ["Phone Stand", "Arduino Case", "Custom Gears"]
    },
    {
      title: "Arduino/Hardware Prototyping",
      desc: "IoT solutions and Arduino-based systems tailored for you.",
      samples: ["Smart Cane", "Trash Sorter", "Solar Tracker"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-brand-blue">{s.title}</h3>
            <p className="mt-2 text-gray-700">{s.desc}</p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              {s.samples.map((ex, j) => <li key={j}>{ex}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
