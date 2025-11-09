import Hero from "./components/Hero";
import Story from "./components/Story";
import Schedule from "./components/Schedule";
import RSVP from "./components/RSVP";

function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-b from-white via-rose-50/40 to-amber-50/30">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-gray-900">Ava & Noah</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#story" className="hover:text-rose-600">Story</a>
            <a href="#schedule" className="hover:text-rose-600">Schedule</a>
            <a href="#rsvp" className="hover:text-rose-600">RSVP</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Story />
        <Schedule />
        <RSVP />
      </main>

      <footer className="border-t border-rose-100">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center text-sm text-gray-600">
          Made with love • © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default App;
