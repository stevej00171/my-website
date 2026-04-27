import Image from "next/image";

export default function Page() {
  return (
    <main className="p-6 max-w-5xl mx-auto space-y-16 bg-gray-50 min-h-screen">

      {/* NAV */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur z-50 flex justify-between items-center py-4 border-b mb-8">
        <div className="font-bold text-lg">
          SteveLaw Investments
        </div>

        <div className="space-x-6 text-sm">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center space-y-6 py-16 bg-gradient-to-b from-teal-50 to-white rounded-lg">

        <Image
          src="/badges.png"
          alt="Awards and recognition"
          width={420}
          height={130}
          className="mx-auto object-contain"
        />

        <h1 className="text-4xl font-bold">
          Canada’s Leading Litigation Funding Solutions
        </h1>

        <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>

        <p className="text-lg text-gray-600">
          We provide fast, confidential settlement advances to individuals awaiting legal settlements—helping you access the funds you need today, without waiting months or years.
        </p>

        <a
          href="#contact"
          className="bg-teal-600 text-white px-6 py-3 rounded inline-block hover:bg-teal-700 transition"
        >
          Apply for Funding
        </a>
      </section>

      {/* WHAT WE DO */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Access Your Settlement Before Your Case Ends
        </h2>
        <p className="text-gray-700">
          Legal cases can take time—but your financial needs cannot wait. We offer settlement advances to plaintiffs across Canada, giving you access to a portion of your expected settlement before your case is resolved.
        </p>
        <p className="text-gray-700">
          There are no upfront fees, and repayment is only required if your case is successful.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Our Services</h2>

        <div className="space-y-6">

          {[
            {
              title: "Settlement Advances",
              desc: "We provide plaintiffs with early access to a portion of their expected settlement, helping cover living expenses and financial obligations.",
            },
            {
              title: "Lawsuit Funding",
              desc: "Funding for ongoing legal cases so clients can focus on outcomes without financial pressure.",
            },
            {
              title: "Law Firm Financing",
              desc: "We help law firms manage cash flow and finance case-related expenses.",
            },
            {
              title: "Business & Loan Funding",
              desc: "Access to private capital for businesses that may not qualify for traditional bank financing.",
            },
          ].map((item, i) => (
            <details key={i} className="border border-gray-200 p-5 rounded-lg shadow-sm bg-white hover:shadow-md transition cursor-pointer">
              <summary className="font-semibold text-lg">{item.title}</summary>
              <p className="text-gray-700 mt-3">{item.desc}</p>
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

          {[1, 2, 3].map((step) => (
            <div key={step} className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white hover:shadow-md transition">
              <div className="text-3xl font-bold text-teal-600 mb-2">{step}</div>
              <h3 className="font-semibold text-lg">
                {step === 1 && "Submit Your Request"}
                {step === 2 && "We Review Your Case"}
                {step === 3 && "Receive Your Funding"}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#contact"
          className="bg-teal-600 text-white px-8 py-4 rounded-lg inline-block font-semibold hover:bg-teal-700 transition"
        >
          Apply for Funding
        </a>
      </div>

      {/* CONTACT */}
      <section id="contact" className="space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Apply for Funding
        </h2>

        <form
          action="/api/contact"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input type="text" name="name" placeholder="Full Name" required className="w-full border p-3 rounded" />
          <input type="email" name="email" placeholder="Email Address" required className="w-full border p-3 rounded" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full border p-3 rounded" />

          <select name="service" required className="w-full border p-3 rounded">
            <option value="">Select Service</option>
            <option>Settlement Advance</option>
            <option>Lawsuit Funding</option>
            <option>Law Firm Financing</option>
            <option>Business / Loan Funding</option>
          </select>

          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-3 rounded w-full hover:bg-teal-700 transition"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t pt-8 mt-12 text-sm text-gray-600 space-y-4">

        <div className="font-semibold text-black">
          SteveLaw Investments
        </div>

        <p>
          Providing fast, confidential funding solutions across Canada.
        </p>

        <div className="space-y-1">
          <div>Phone: <a href="tel:14162220000" className="hover:underline">1-416-222-0000</a></div>
          <div>Email: <a href="mailto:stevej00171@gmail.com" className="hover:underline">stevej00171@gmail.com</a></div>
          <div>First Canadian Place, Toronto, ON</div>
        </div>

      </footer>

    </main>
  );
}