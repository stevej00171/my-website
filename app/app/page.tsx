"use client";

import React from "react";

export default function Website() {
  return (
    <div className="min-h-screen font-sans text-gray-900">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 shadow-sm">
        <h1 className="text-xl font-bold">SteveLaw Investments</h1>
        <div className="space-x-6">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-28 px-6 bg-gradient-to-b from-gray-50 to-white">
  <h2 className="text-5xl font-bold mb-6 leading-tight max-w-3xl mx-auto">
    Build Wealth Through Strategic and Trusted Investments
  </h2>

  <p className="max-w-xl mx-auto mb-8 text-lg text-gray-600">
    We provide tailored investment solutions designed to help individuals and businesses grow their capital with confidence.
  </p>

  <div className="flex justify-center gap-4">
    <button className="bg-black text-white px-8 py-3 rounded-2xl">
      Request Consultation
    </button>

    <button className="border px-8 py-3 rounded-2xl">
      Learn More
    </button>
  </div>
</section>


      {/* SERVICES */}
      <div className="grid md:grid-cols-3 gap-8">
  {[
    "Investment Planning",
    "Private Funding",
    "Financial Consulting",
  ].map((service) => (
    <div key={service} className="p-8 border rounded-2xl hover:shadow-lg transition">
      <h4 className="font-semibold text-lg mb-3">{service}</h4>
      <p className="text-gray-600">
        Professional solutions tailored to help you grow and manage your finances effectively.
      </p>
    </div>
  ))}
</div>

      <section className="bg-black text-white py-16 text-center">
  <h3 className="text-2xl font-semibold mb-6">
    Why Choose SteveLaw Investments
  </h3>

  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <div>
      <h4 className="text-3xl font-bold">10+ Years</h4>
      <p>Experience in investment management</p>
    </div>

    <div>
      <h4 className="text-3xl font-bold">100+ Clients</h4>
      <p>Successfully served</p>
    </div>

    <div>
      <h4 className="text-3xl font-bold">Trusted</h4>
      <p>Transparent and reliable approach</p>
    </div>
  </div>
</section>

      {/* TRUST / STATS */}
      <section className="bg-black text-white py-16 text-center">
        <h3 className="text-2xl font-semibold mb-6">
          Why Choose Us
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <h4 className="text-3xl font-bold">10+ Years</h4>
            <p>Experience in financial services</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold">100+ Clients</h4>
            <p>Successfully served</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold">Trusted</h4>
            <p>Transparent & reliable approach</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gray-50 py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">About Us</h3>

        <p className="max-w-2xl mx-auto text-gray-600">
          SteveLaw Investments is committed to delivering reliable, transparent, and results-driven financial solutions. Our mission is to help clients build sustainable wealth with confidence.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Get Started Today
        </h3>

        <p className="mb-6">
          Speak with us about your investment goals.
        </p>

        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
          />

          <button className="bg-black text-white px-6 py-3 rounded-2xl w-full">
            Submit
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        <p>
          © {new Date().getFullYear()} SteveLaw Investments. All rights reserved.
        </p>
      </footer>

    </div>
  );
}