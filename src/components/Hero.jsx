import { useRef } from "react";
import { Heart, Calendar, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Spline from "@splinetool/react-spline";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]); // subtle parallax for foreground
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* 3D Spline background cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* soft radial fade to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70" aria-hidden />
      </div>

      {/* content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-28 w-full">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs sm:text-sm uppercase tracking-[0.35em] text-rose-600/90"
          >
            We're getting married
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]"
          >
            Ava & Noah
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-700"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 ring-1 ring-rose-200/60">
              <Calendar size={18} className="text-rose-600"/> Sept 21, 2025
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 ring-1 ring-rose-200/60">
              <MapPin size={18} className="text-rose-600"/> Lakeview Gardens
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a href="#rsvp" className="inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-6 py-3 shadow-xl shadow-rose-600/20 hover:bg-rose-700 transition">
              <Heart size={18} /> RSVP Now
            </a>
            <a href="#schedule" className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/70 backdrop-blur text-rose-700 px-6 py-3 hover:bg-rose-50 transition">
              View Schedule
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* romantic floating orbs with parallax */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-10 h-64 w-64 rounded-full bg-rose-300/30 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
      />
    </section>
  );
}

export default Hero;
