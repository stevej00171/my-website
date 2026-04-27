import Image from "next/image";

export default function Page() {
  return (
    <main className="relative p-6 max-w-6xl mx-auto space-y-16 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-100 opacity-30 blur-3xl rounded-full pointer-events-none"></div>

      {/* NAV */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 flex justify-between items-center py-4 border-b border-gray-200 mb-8 rounded-lg px-4">
        <div className="font-bold text-lg">SteveLaw Investments</div>
        <div className="space-x-6 text-sm">
          <a href="#services" className="hover:text-teal-600 transition">Services</a>
          <a href="#contact" className="hover:text-teal-600 transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center space-y-6 py-16 bg-white rounded-xl shadow-sm border border-gray-100">
        <Image src="/badges.png" alt="Awards and recognition" width={420} height={130} className="mx-auto object-contain" />

        <h1 className="text-4xl font-bold text-gray-900">
          Canada’s Leading Litigation Funding Solutions
        </h1>

        <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Fast, confidential settlement funding—so you don’t have to wait months or years.
        </p>

        {/* TRUST BAR */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span>✔ No Win, No Repayment</span>
          <span>✔ Fast Approval</span>
          <span>✔ 100% Confidential</span>
        </div>

        <a
          href="#contact"
          className="bg-teal-600 text-white px-6 py-3 rounded-lg inline-block shadow-sm transition-all duration-200 hover:bg-teal-700 hover:-translate-y-0.5 active:scale-95"
        >
          Apply for Funding
        </a>

        {/* STAR RATING */}
        <div className="text-yellow-500 text-lg">★★★★★</div>
        <div className="text-sm text-gray-500">Trusted by clients across Canada</div>
      </section>

      {/* WHAT WE DO */}
      <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900">
          Access Your Settlement Before Your Case Ends
        </h2>
        <p className="text-gray-700">
          Legal cases can take time—but your financial needs cannot wait. We provide early access to your expected settlement.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Our Services</h2>

        <div className="space-y-6">
          {[
            "Settlement Advances",
            "Lawsuit Funding",
            "Law Firm Financing",
            "Business & Loan Funding",
          ].map((title, i) => (
            <details
              key={i}
              className="border border-gray-200 p-5 rounded-xl shadow-sm bg-white transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer"
            >
              <summary className="font-semibold text-lg">{title}</summary>
              <p className="text-gray-700 mt-3">
                Professional funding solutions tailored to your needs with fast approvals and flexible structures.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {["Submit", "Review", "Fund"].map((step, i) => (
            <div
              key={i}
              className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white transition hover:shadow-md hover:-translate-y-1"
            >
              <div className="text-3xl font-bold text-teal-600 mb-2">{i + 1}</div>
              <h3 className="font-semibold text-lg">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center space-y-4">
        <p className="text-gray-700 italic max-w-2xl mx-auto">
          “SteveLaw helped me cover my expenses while waiting for my case to settle. The process was simple and fast.”
        </p>
        <div className="text-sm text-gray-500">— Client, Toronto</div>
      </section>

      {/* GOOGLE MAP (REAL TRUST BOOST) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-center text-gray-900">
          Our Office
        </h2>

        <div className="w-full h-[300px] rounded-xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps?q=First+Canadian+Place+Toronto&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center space-y-2">
        <a
          href="#contact"
          className="bg-teal-600 text-white px-8 py-4 rounded-lg inline-block font-semibold transition-all duration-200 hover:bg-teal-700 hover:-translate-y-0.5 active:scale-95"
        >
          Apply for Funding
        </a>
        <p className="text-sm text-gray-500">
          No obligation. Free review within 24 hours.
        </p>
      </div>

      {/* CONTACT */}
      <section id="contact" className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Apply for Funding
        </h2>

        <form action="/api/contact" method="POST" className="max-w-xl mx-auto space-y-4">
          <input type="text" name="name" placeholder="Full Name" required className="w-full border border-gray-200 p-3 rounded-lg" />
          <input type="email" name="email" placeholder="Email Address" required className="w-full border border-gray-200 p-3 rounded-lg" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full border border-gray-200 p-3 rounded-lg" />

          <select name="service" required className="w-full border border-gray-200 p-3 rounded-lg">
            <option value="">Select Service</option>
            <option>Settlement Advance</option>
            <option>Lawsuit Funding</option>
            <option>Law Firm Financing</option>
            <option>Business / Loan Funding</option>
          </select>

          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg w-full transition-all duration-200 hover:bg-teal-700 hover:-translate-y-0.5 active:scale-95"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t pt-8 mt-12 text-sm text-gray-600 space-y-4">
        <div className="font-semibold text-black">SteveLaw Investments</div>

        <p>Providing fast, confidential funding solutions across Canada.</p>

        <div className="space-y-1">
          <div>Phone: <a href="tel:14162220000">1-416-222-0000</a></div>
          <div>Email: <a href="mailto:stevej00171@gmail.com">stevej00171@gmail.com</a></div>
          <div>First Canadian Place, Toronto, ON</div>
        </div>
      </footer>

    </main>
  );
}