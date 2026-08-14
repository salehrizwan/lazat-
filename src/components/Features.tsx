import { motion } from "motion/react";
import { UtensilsCrossed, Users, ShoppingBag, PartyPopper, MapPin } from "lucide-react";

const features = [
  {
    icon: <UtensilsCrossed size={32} strokeWidth={1.5} />,
    title: "Variety of Cuisines",
    description: "Desi, Continental, Chinese & fast food—all under one roof.",
  },
  {
    icon: <Users size={32} strokeWidth={1.5} />,
    title: "Cooperative Staff",
    description: "Highly trained professionals dedicated to making you feel at home.",
  },
  {
    icon: <ShoppingBag size={32} strokeWidth={1.5} />,
    title: "Flexible Services",
    description: "Enjoy our food via Dine-in, Takeout, or quick home Delivery.",
  },
  {
    icon: <PartyPopper size={32} strokeWidth={1.5} />,
    title: "Event Hosting",
    description: "Spacious halls accommodating 150+ guests for your celebrations.",
  },
  {
    icon: <MapPin size={32} strokeWidth={1.5} />,
    title: "Prime Location",
    description: "Easy to access on GT Road, River Garden Housing Scheme.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            More Than Just a Meal
          </h2>
          <p className="text-gray-600 text-lg">
            We are dedicated to providing the ultimate dining experience in Gujrat, combining world-class taste with unmatched service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-cream p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
