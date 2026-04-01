export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Aguilar Media</h1>
            <p className="text-sm text-gray-600">Digital ads that help brands grow</p>
          </div>
        </div>
      </header>
      <main className="p-10">
        <h2 className="text-4xl font-bold">We turn attention into customers.</h2>
        <p className="mt-4 text-gray-600">Aguilar Media helps brands grow online.</p>
      </main>
    </div>
  );
}
