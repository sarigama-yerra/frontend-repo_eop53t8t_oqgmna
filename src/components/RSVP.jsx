import { useState } from "react";

function RSVP() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      // In a full app, this would POST to the backend. For now we simulate.
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      e.currentTarget.reset();
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <section id="rsvp" className="bg-white">
      <div className="max-w-xl mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">RSVP</h2>
          <p className="mt-3 text-gray-600">We can’t wait to celebrate with you. Kindly let us know if you’ll be joining.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-rose-50/60 border border-rose-100 rounded-2xl p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm text-gray-600 mb-1">Full Name</label>
              <input required name="name" className="w-full rounded-lg border border-rose-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input type="email" required name="email" className="w-full rounded-lg border border-rose-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Attendance</label>
              <select name="attending" className="w-full rounded-lg border border-rose-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300">
                <option value="yes">Happily attending</option>
                <option value="no">Regretfully decline</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Message (optional)</label>
              <textarea name="message" rows="3" className="w-full rounded-lg border border-rose-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
            </div>
          </div>
          <button type="submit" className="mt-4 w-full rounded-lg bg-rose-500 text-white py-3 font-medium hover:bg-rose-600 transition">
            {status === "loading" ? "Sending..." : status === "success" ? "RSVP Received!" : "Send RSVP"}
          </button>
          {status === "error" && (
            <p className="mt-2 text-sm text-red-600 text-center">Something went wrong. Please try again.</p>
          )}
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">Dress code: Garden formal. Children welcome.</p>
      </div>
    </section>
  );
}

export default RSVP;
