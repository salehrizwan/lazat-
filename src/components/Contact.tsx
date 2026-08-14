import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info & Map */}
          <div>
            <span className="text-brand-red font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              Visit or <span className="text-brand-gold">Reserve</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Location</h4>
                  <p className="text-gray-600">Abdul Mall, GT Road, River Garden Housing Scheme, Gujrat, 50700, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Hours</h4>
                  <p className="text-gray-600">Open Daily<br />12:00 PM – 11:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+923164578578" className="text-gray-600 hover:text-brand-red transition-colors block">+92 316 4578578</a>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.166299187123!2d74.0728956!3d32.5855013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1b212f4340d1%3A0xc3cf9c986915e612!2sLazat%20Restaurant!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lazat Restaurant Location"
              ></iframe>
            </div>
          </div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-cream p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">Book a Table</h3>
            <p className="text-gray-600 mb-8">For large gatherings (up to 150+ guests) or special events, please contact us via WhatsApp.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white" placeholder="+92 300 0000000" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-bold text-gray-700 mb-2">Date</label>
                  <input type="date" id="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white" />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-bold text-gray-700 mb-2">Number of Guests</label>
                  <select id="guests" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-gray-600">
                    <option>2 People</option>
                    <option>3 - 5 People</option>
                    <option>6 - 10 People</option>
                    <option>10+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Special Requests (Optional)</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white resize-none" placeholder="Any dietary preferences or event details..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-red text-white font-bold py-4 rounded-xl hover:bg-brand-red-dark transition-colors shadow-lg">
                Confirm Reservation
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
