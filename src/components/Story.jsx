import { motion } from "framer-motion";

function Story() {
  return (
    <section id="story" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-600"
          >
            Two cities, one chance meeting, and a thousand little moments in between.
          </motion.p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-4 text-gray-700 leading-relaxed"
          >
            <p>
              We met on a rainy spring afternoon at a coffee shop tucked away on a quiet street. A shared table turned into a long conversation, and that conversation never really ended.
            </p>
            <p>
              Over the years, we explored new places, shared countless laughs, and learned to love the little things—like Sunday pancakes and sunset walks. Now, we're excited to begin this next chapter surrounded by the people we love most.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-rose-100"
          >
            <img
              src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1600&auto=format&fit=crop"
              alt="Couple in love"
              className="w-full h-80 object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Story;
