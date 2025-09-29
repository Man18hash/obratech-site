export default function Services() {
  const services = [
    {
      title: "Software Development",
      desc: "Web systems, POS, custom apps – from prototype to deployment.",
      samples: ["POS System", "Attendance Tracker", "E-commerce Site"],
      icon: "💻",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "3D Printing",
      desc: "High-quality 3D printed parts for prototypes & custom projects.",
      samples: ["Phone Stand", "Arduino Case", "Custom Gears"],
      icon: "🖨️",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Arduino/Hardware Prototyping",
      desc: "IoT solutions and Arduino-based systems tailored for you.",
      samples: ["Smart Cane", "Trash Sorter", "Solar Tracker"],
      icon: "🔧",
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${s.color}`}></div>
              <div className="p-8">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-2xl text-brand-blue dark:text-white mb-4">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{s.desc}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Sample Projects:</h4>
                  {s.samples.map((ex, j) => (
                    <div key={j} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">{ex}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a href="#contact" className="text-brand-blue dark:text-brand-yellow font-semibold hover:text-brand-yellow dark:hover:text-yellow-300 transition-colors">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
