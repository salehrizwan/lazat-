import { motion } from "motion/react";
import { Download } from "lucide-react";

const HIGHLIGHTS = [
  {
    id: 1,
    name: "Rajasthani Tikka",
    description: "Tender, marinated chicken pieces grilled to perfection with authentic Rajasthani spices.",
    price: "Rs. 1,250",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Chicken Tawa Masala",
    description: "Juicy chicken cooked on a hot tawa with a rich, spicy, and tangy tomato-based gravy.",
    price: "Rs. 1,450",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Special Karahi",
    description: "Our signature dish. Slow-cooked meat in a wok with fresh tomatoes, green chilies, and ginger.",
    price: "Rs. 2,100",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "High Tea Buffet",
    description: "An elegant spread of sweet and savory delights, perfect for afternoon gatherings and celebrations.",
    price: "Rs. 1,800/head",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-red font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
              Culinary Masterpieces
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Menu Highlights
            </h2>
          </div>
          <button className="flex items-center gap-2 bg-transparent border-2 border-brand-red text-brand-red px-6 py-2.5 rounded-full font-bold hover:bg-brand-red hover:text-white transition-colors">
            <Download size={18} />
            Download Full Menu
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-2xl shadow-sm border border-orange-50 hover:shadow-xl transition-all"
            >
              <div className="w-full sm:w-48 h-48 rounded-xl overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center py-2 flex-grow">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-2xl font-serif font-bold text-gray-900">{item.name}</h3>
                  <span className="text-brand-gold font-bold text-lg whitespace-nowrap">{item.price}</span>
                </div>
                <div className="w-full border-b border-dashed border-gray-200 mb-4"></div>
                <p className="text-gray-600 font-sans leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                   <a href="https://wa.me/923164578578" target="_blank" rel="noreferrer" className="text-brand-red text-sm font-bold uppercase tracking-wider hover:text-brand-gold transition-colors">Order Now →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
