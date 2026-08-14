import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
                alt="Restaurant Ambience"
                className="w-full rounded-2xl shadow-2xl object-cover h-[500px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-red text-brand-cream p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-serif font-bold text-brand-gold mb-1">150+</p>
                <p className="font-sans font-bold uppercase tracking-wider text-sm">Guest Capacity</p>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <span className="text-brand-red font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              A Symphony of <span className="text-brand-gold">Flavors & Tradition</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
              Welcome to <strong className="text-brand-red">Lazat Restaurant</strong>, located in the heart of Gujrat on the iconic GT Road. We take immense pride in offering a warm, inviting ambience paired with exceptional hospitality. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-sans">
              Our vision is simple: to bring a vast variety of cuisines under one roof without compromising on authenticity. Whether you're craving our legendary Special Karahi, rich Chicken Tawa Masala, or planning an elegant high-tea evening, every dish is crafted with passion and the finest ingredients.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-brand-gold"></div>
              <p className="font-serif italic text-xl text-gray-800">"Serving memories, one plate at a time."</p>
            </div>
            
            <div className="mt-10">
               <a href="#menu" className="text-brand-red font-bold hover:text-brand-red-dark flex items-center gap-2 uppercase tracking-widest text-sm transition-colors">
                 Discover our Menu
                 <span className="text-brand-gold text-lg">→</span>
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
