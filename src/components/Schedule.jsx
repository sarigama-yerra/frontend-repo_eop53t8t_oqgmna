import { CalendarClock, MapPin, Music, Utensils } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    time: "3:00 PM",
    title: "Ceremony",
    icon: CalendarClock,
    details: "Garden Pavilion",
  },
  {
    time: "4:30 PM",
    title: "Cocktail Hour",
    icon: Utensils,
    details: "Terrace Lawn",
  },
  {
    time: "6:00 PM",
    title: "Reception",
    icon: Music,
    details: "Grand Hall",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-gradient-to-b from-rose-50/60 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold text-gray-900"
          >
            The Day
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-gray-600"
          >
            Here’s what to expect on our wedding day.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {events.map(({ time, title, icon: Icon, details }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-rose-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{time}</p>
                  <p className="font-medium text-gray-900">{title}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-rose-600" /> {details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
