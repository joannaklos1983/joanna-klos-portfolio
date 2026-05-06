export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">
          AI-Native Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Joanna Kłos
        </h1>

        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Marketing • Strategia • AI • Web Projects
        </p>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <button className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition">
            Explore Projects
          </button>

          <button className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition">
            Contact
          </button>
        </div>
      </div>
    </main>
  );
}
