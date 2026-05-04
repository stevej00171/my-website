export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-gray-900"
      style={{
        backgroundImage: "url('/finance-bg.jpg')", // Applying the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* HERO */}
      <section className="py-24 text-center bg-white/80 backdrop-blur-sm">
        <img
          src="/logo-mjf.svg"
          alt="MJF Capital"
          className="mx-auto mb-4 h-12"
        />

        <h1 className="text-4xl font-bold mb-4">
          McCowan, Jeffrey & Fich
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Structured Finance Solutions
        </p>

        <a
          href="/project-funding"
          className="bg-black text-white px-6 py-3 rounded-md"
        >
          View Funding Programs
        </a>
      </section>

      {/* BADGES */}
      <section className="py-16 text-center border-t">
        <h2 className="text-xl font-semibold mb-6">
          Recognized & Trusted
        </h2>

        <img
          src="/badges.png"
          alt="Badges"
          className="mx-auto max-w-md"
        />
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <a
          href="/portal"
          className="bg-black text-white px-6 py-3 rounded-md"
        >
          Client Portal Access
        </a>
      </section>

    </main>
  );
}