import { Heart, Calendar, MapPin } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-rose-50 to-amber-50" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-28">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-rose-500">We're getting married</p>
          <h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            Ava & Noah
          </h1>
          <div className="mt-6 flex items-center justify-center gap-6 text-gray-700">
            <span className="inline-flex items-center gap-2"><Calendar size={18} className="text-rose-500"/> Sept 21, 2025</span>
            <span className="inline-flex items-center gap-2"><MapPin size={18} className="text-rose-500"/> Lakeview Gardens</span>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#rsvp" className="inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-6 py-3 shadow hover:bg-rose-600 transition">
              <Heart size={18} /> RSVP Now
            </a>
            <a href="#schedule" className="inline-flex items-center gap-2 rounded-full border border-rose-200 text-rose-600 px-6 py-3 hover:bg-rose-50 transition">
              View Schedule
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-rose-200/60 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-amber-200/60 blur-3xl" aria-hidden />
      </div>
    </section>
  );
}

export default Hero;
