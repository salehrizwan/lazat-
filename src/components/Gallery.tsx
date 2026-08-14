import { motion } from "motion/react";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop", // Restaurant interior
  "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop", // Fine dining table
  "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800&auto=format&fit=crop", // Dessert/Tea
  "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop", // Indian/Pakistani food top view
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop", // Ambience
  "https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=800&auto=format&fit=crop", // Biryani/Karahi close up
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
            Visual Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            A Glimpse of Lazat
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? "col-span-2 md:col-span-1" : ""
              } ${index === 0 ? "md:row-span-2" : ""}`}
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className={`w-full object-cover hover:scale-105 transition-transform duration-700 ${
                  index === 0 ? "h-64 md:h-full" : "h-64 md:h-80"
                }`}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
