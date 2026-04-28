"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden
    bg-[linear-gradient(to_right,#e6f4f3_0%,#ffffff_12%,#ffffff_88%,#e6f4f3_100%)]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-teal-100 opacity-30 blur-3xl rounded-full pointer-events-none"></div>

      {/* TOP NAV SYSTEM */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">

        <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">

          {/* TOP RIGHT BAR */}
          <div className="flex justify-end items-center text-xs md:text-sm text-gray-700 gap-4">
            <span className="font-semibold">1-888-000-0000</span>

            <span className="text-gray-400">|</span>

            <a href="#" className="hover:text-teal-600">Log In</a>

            <span className="text-gray-400">|</span>

            <a href="#" className="hover:text-teal-600">F</a>
            <a href="#" className="hover:text-teal-600">X</a>
            <a href="#" className="hover:text-teal-600">in</a>
          </div>

          {/* MAIN NAV */}
          <div className="flex justify-center md:justify-between items-center flex-wrap gap-4">

            <div className="font-bold text-lg">SteveLaw Investments</div>

            <div className="flex gap-6 text-sm md:text-base font-semibold tracking-wide">
              <a href="#" className="hover:text-teal-600">Home</a>
              <a href="#services" className="hover:text-teal-600">Services</a>
              <a href="#" className="hover:text-teal-600">Blog</a>
              <a href="#" className="hover:text-teal-600">About</a>
              <a href="#contact" className="hover:text-teal-600">Contact</a>
            </div>

          </div>
        </div>
      </nav>

      {/* PAGE CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 space-y-16 py-10">

        {/* HERO */}
        <section className="text-center space-y-6 py-16 bg-white rounded-xl shadow-sm border border-gray-100">

          {/* TOP LINE */}
          <p className="text-sm md:text-base font-bold text-black max-w-3xl mx-auto leading-relaxed">
            For Individuals: Settlement Advances for Personal Injury Plaintiffs and Estates Funding Solutions for Beneficiaries, Executors and Trustees.
          </p>

          <Image
            src="/badges.png"
            alt="Awards"
            width={420}
            height={130}
            className="mx-auto object-contain"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Canada’s Leading Litigation Funding Solutions
          </h1>

          <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Fast, confidential settlement funding—so you don’t have to wait months or years.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-gray-600">
            <span>✔ No Win, No Repayment</span>
            <span>✔ Fast Approval</span>
            <span>✔ 100% Confidential</span>
          </div>

          <a
            href="#contact"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg inline-block transition hover:bg-teal-700 active:scale-95"
          >
            Apply for Funding
          </a>
        </section>

        {/* SERVICES */}
        <section id="services" className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Our Services</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Settlement Advances",
              "Lawsuit Funding",
              "Law Firm Financing",
              "Business & Loan Funding",
            ].map((title, i) => (
              <details
                key={i}
                className="border border-gray-200 p-5 rounded-xl shadow-sm bg-white hover:shadow-md transition"
              >
                <summary className="font-semibold text-lg cursor-pointer">{title}</summary>
                <p className="text-gray-700 mt-3">
                  Professional funding solutions tailored to your needs with fast approvals and flexible structures.
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">
            Apply for Funding
          </h2>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <input name="name" placeholder="Full Name" required className="w-full border p-3 rounded-lg" />
            <input name="email" type="email" placeholder="Email Address" required className="w-full border p-3 rounded-lg" />
            <input name="phone" placeholder="Phone Number" required className="w-full border p-3 rounded-lg" />

            <select name="service" required className="w-full border p-3 rounded-lg">
              <option value="">Select Service</option>
              <option>Settlement Advance</option>
              <option>Lawsuit Funding</option>
              <option>Law Firm Financing</option>
              <option>Business / Loan Funding</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="bg-teal-600 text-white py-3 rounded-lg w-full hover:bg-teal-700 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center text-sm">
                ✅ Submitted successfully. We’ll contact you shortly.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-center text-sm">
                ❌ Something went wrong. Try again.
              </p>
            )}
          </form>
        </section>

        {/* FOOTER */}
        <footer className="text-sm text-gray-600 space-y-4 pt-10 border-t">
          <div className="font-semibold text-black">SteveLaw Investments</div>

          <div className="space-y-1">
            <div>Phone: <a href="tel:14162220000">1-416-222-0000</a></div>
            <div>Email: <a href="mailto:stevej00171@gmail.com">stevej00171@gmail.com</a></div>
            <div>Toronto, Canada</div>
          </div>
        </footer>

      </div>
    </main>
  );
}