import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
          alt="Lazat Restaurant Fine Dining"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold font-sans font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 block">
            Welcome to Lazat
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-6 drop-shadow-lg">
            Har Lazzat, <br />
            <span className="text-brand-gold italic">Ek Hi Chhat Ke Neeche</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 drop-shadow-md">
            Experience the true essence of hospitality in Gujrat. A perfect blend of authentic flavors, warm ambience, and a memorable dining experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors shadow-xl"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-brand-red transition-colors shadow-xl"
            >
              View Menu
            </a>
            <a
              href="https://wa.me/923164578578"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-xl flex justify-center items-center gap-2"
            >
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
