export default function KokoKeyWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-50 to-sky-50 text-slate-800">
      <header className="relative overflow-hidden border-b border-white/50 bg-white/60 backdrop-blur">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,114,182,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(168,85,247,0.14),transparent_35%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.14),transparent_30%)]" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-black tracking-[0.2em] text-pink-500">KOKO KEY</h1>
            <p className="text-sm text-slate-600">Coastal charm with a country touch</p>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#shop" className="transition hover:text-pink-500">Shop</a>
            <a href="#about" className="transition hover:text-pink-500">About</a>
            <a href="#collection" className="transition hover:text-pink-500">Collection</a>
            <a href="#contact" className="transition hover:text-pink-500">Contact</a>
          </nav>
          <button className="rounded-full bg-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:scale-105">
            Shop Now
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(216,180,254,0.35),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 inline-block rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-pink-500 shadow">
                Pink • Purple • Ocean • Country
              </p>
              <h2 className="max-w-xl text-5xl font-black leading-tight md:text-6xl">
                Sweet style with a <span className="text-pink-500">coastal glow</span>.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                Koko Key blends beachy colors, soft feminine details, and a tiny country twist for a brand that feels fun, stylish, and confident.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-purple-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition hover:scale-105">
                  New Arrivals
                </button>
                <button className="rounded-full border border-pink-200 bg-white px-6 py-3 font-semibold text-pink-500 transition hover:bg-pink-50">
                  View Lookbook
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-pink-100">
                <div className="mb-4 h-52 rounded-[1.5rem] bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200" />
                <h3 className="text-lg font-bold">Coastal Sets</h3>
                <p className="mt-2 text-sm text-slate-600">Soft, girly styles inspired by the ocean.</p>
              </div>
              <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-xl shadow-purple-100">
                <div className="mb-4 h-52 rounded-[1.5rem] bg-gradient-to-br from-sky-100 via-purple-100 to-pink-200" />
                <h3 className="text-lg font-bold">Country Touch</h3>
                <p className="mt-2 text-sm text-slate-600">A little western charm mixed into a dreamy aesthetic.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-500">Featured</p>
              <h3 className="text-3xl font-black">Shop the vibe</h3>
            </div>
            <a href="#" className="text-sm font-semibold text-pink-500">See all pieces</a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: 'Pink Tide Set', price: '$52' },
              { name: 'Sage Shore Dress', price: '$48' },
              { name: 'Ocean Bloom Top', price: '$34' },
            ].map((item) => (
              <div key={item.name} className="rounded-[2rem] bg-white p-5 shadow-lg shadow-pink-100 transition hover:-translate-y-1">
                <div className="mb-4 h-72 rounded-[1.5rem] bg-gradient-to-b from-pink-100 via-purple-50 to-sky-100" />
                <div className="flex items-center justify-between">
                  <h4 className="font-bold">{item.name}</h4>
                  <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-500">{item.price}</span>
                </div>
                <button className="mt-4 w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-pink-500">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-purple-100">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">About the brand</p>
            <h3 className="mt-3 text-3xl font-black">Girly, coastal, and made to stand out.</h3>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Koko Key is for girls who love soft colors, beachy energy, and a little country sweetness. The style feels playful and pretty while still looking polished.
            </p>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-pink-200 via-purple-100 to-sky-100 p-8 text-slate-800 shadow-xl shadow-pink-100">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">Signature vibe</p>
            <ul className="mt-5 space-y-4 text-lg font-semibold">
              <li>♡ Soft pink and purple palette</li>
              <li>♡ Ocean-inspired details</li>
              <li>♡ Hint of western charm</li>
              <li>♡ Clean, trendy silhouettes</li>
            </ul>
          </div>
        </section>

        <section id="collection" className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2.5rem] bg-white px-8 py-12 shadow-xl shadow-pink-100">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">Collection</p>
                <h3 className="mt-3 text-3xl font-black">The Sunset Shore Drop</h3>
              </div>
              <div className="rounded-[1.5rem] bg-pink-50 p-6">
                <h4 className="font-bold">Dreamy Colors</h4>
                <p className="mt-2 text-sm text-slate-600">Blush pink, lavender, seafoam, and soft sky blue.</p>
              </div>
              <div className="rounded-[1.5rem] bg-purple-50 p-6">
                <h4 className="font-bold">Signature Mood</h4>
                <p className="mt-2 text-sm text-slate-600">Cute, confident, beachy, and a little southern.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/50 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="text-xl font-black tracking-[0.18em] text-pink-500">KOKO KEY</h4>
            <p className="mt-2 text-sm text-slate-600">Made for the soft, stylish, coastal dream girl.</p>
          </div>
          <div className="flex gap-3">
            <input
              placeholder="Enter your email"
              className="rounded-full border border-pink-100 bg-white px-5 py-3 text-sm outline-none ring-0 placeholder:text-slate-400"
            />
            <button className="rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white">
              Join
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
