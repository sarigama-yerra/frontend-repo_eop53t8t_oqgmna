function Story() {
  return (
    <section id="story" className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Our Story</h2>
          <p className="mt-4 text-gray-600">Two cities, one chance meeting, and a thousand little moments in between.</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 items-start">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We met on a rainy spring afternoon at a coffee shop tucked away on a quiet street. A shared table turned into a long conversation, and that conversation never really ended.
            </p>
            <p>
              Over the years, we explored new places, shared countless laughs, and learned to love the little things—like Sunday pancakes and sunset walks. Now, we're excited to begin this next chapter surrounded by the people we love most.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-rose-100">
            <img
              src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1600&auto=format&fit=crop"
              alt="Couple in love"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
