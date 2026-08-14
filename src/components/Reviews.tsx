import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Ali Hassan",
    text: "Wonderful dinner experience! Delicious food, great service, and a cozy atmosphere. The Special Karahi is a must-try for everyone in Gujrat.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Ayesha Noor",
    text: "Staff is incredibly well-mannered. The Rajasthani tikka and tawa masala were excellent. We hosted our daughter's birthday here, and the arrangement was perfect.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Kamran Shah",
    text: "Best high tea buffet in town. The variety of dishes under one roof is amazing. Truly lives up to their tagline 'Har Lazzat, Ek Hi Chhat Ke Neeche'.",
    rating: 5,
    date: "3 months ago"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
             <span className="text-3xl font-bold text-gray-900">4.1</span>
             <div className="flex text-brand-gold">
               {[...Array(4)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
               <Star key="half" size={24} strokeWidth={2.5} className="text-brand-gold" />
             </div>
             <span className="text-gray-500 font-medium ml-2">(151+ Google Reviews)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <Quote size={40} className="text-brand-red/10 absolute top-6 right-6" />
              <div className="flex text-brand-gold mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={18} />
                ))}
              </div>
              <p className="text-gray-700 italic font-serif leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="flex justify-between items-end border-t border-gray-100 pt-6 mt-auto">
                <h4 className="font-bold text-gray-900 font-sans">{review.name}</h4>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <div className="inline-block bg-brand-cream-dark border border-brand-gold/30 px-8 py-4 rounded-xl">
             <p className="text-gray-600 font-sans italic">
               We deeply value your feedback. It helps us maintain our quality and continuously improve our services.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
}
