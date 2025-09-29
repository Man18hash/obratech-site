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
    <section id="portfolio" className="py-20 bg-brand-blue text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our Portfolio Projects</h2>
        <p className="text-center text-gray-300 mb-12 text-sm md:text-base">
          A behind-the-scenes look into the systems and prototypes we’ve built.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white text-brand-blue rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
              <Image src={p.images[0]} alt={p.title} width={600} height={400} className="w-full h-40 md:h-48 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold">{p.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{p.category}</p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {p.images.map((img, j) => (
                    <Image key={j} src={img} alt={p.title + " preview " + (j + 1)} width={100} height={100} className="rounded-lg object-cover" />
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
