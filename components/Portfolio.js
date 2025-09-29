import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "POS System",
      category: "Software Development",
      images: ["/portfolio/pos1.jpg", "/portfolio/pos2.jpg", "/portfolio/pos3.jpg"],
    },
    {
      title: "3D Printed Phone Stand",
      category: "3D Printing",
      images: ["/portfolio/print1.jpg", "/portfolio/print2.jpg", "/portfolio/print3.jpg"],
    },
    {
      title: "Smart Cane",
      category: "Arduino/Hardware",
      images: ["/portfolio/arduino1.jpg", "/portfolio/arduino2.jpg", "/portfolio/arduino3.jpg"],
    },
  ];

  return (
    <section id="portfolio" className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A behind-the-scenes look into the systems and prototypes we've built.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="card-hover bg-white dark:bg-gray-800 text-brand-blue dark:text-white rounded-2xl shadow-lg overflow-hidden">
              <Image src={p.images[0]} alt={p.title} width={600} height={400} className="w-full h-40 md:h-48 object-cover object-center" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{p.category}</p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {p.images.map((img, j) => (
                    <Image key={j} src={img} alt={p.title + " preview " + (j + 1)} width={100} height={100} className="w-full h-20 rounded-lg object-cover object-center" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
