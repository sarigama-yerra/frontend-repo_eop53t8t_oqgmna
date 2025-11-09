import { CalendarClock, MapPin, Music, Utensils } from "lucide-react";

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
    <section id="schedule" className="py-20 bg-rose-50/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">The Day</h2>
          <p className="mt-3 text-gray-600">Here’s what to expect on our wedding day.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {events.map(({ time, title, icon: Icon, details }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
