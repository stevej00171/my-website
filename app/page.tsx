"use client";

import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

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
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(to_right,#e6f4f3_0%,#ffffff_12%,#ffffff_88%,#e6f4f3_100%)]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-teal-100 opacity-30 blur-3xl rounded-full pointer-events-none"></div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">

          {/* TOP BAR */}
          <div className="flex justify-end items-center text-xs md:text-sm text-gray-700 gap-4">
            <span className="font-semibold tracking-wide">1-888-800-4966</span>

            <span className="text-gray-300">|</span>

            <a href="#" className="hover:text-teal-600 transition font-medium">
              Log In
            </a>

            <span className="text-gray-300">|</span>

            {/* ✅ FIXED ICONS */}
            <div className="flex items-center gap-3">
              <FaFacebook size={16} className="hover:text-teal-600 cursor-pointer transition" />
              <FaTwitter size={16} className="hover:text-teal-600 cursor-pointer transition" />
              <FaLinkedin size={16} className="hover:text-teal-600 cursor-pointer transition" />
            </div>
          </div>

          {/* MAIN NAV */}
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg tracking-tight">
              SteveLaw Investments
            </div>

            <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
              <a href="#" className="relative group">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-600 transition-all group-hover:w-full"></span>
              </a>

              <a href="#services" className="relative group">
                Services
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-600 transition-all group-hover:w-full"></span>
              </a>

              <a href="#" className="relative group">
                Blog
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-600 transition-all group-hover:w-full"></span>
              </a>

              <a href="#" className="relative group">
                About
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-600 transition-all group-hover:w-full"></span>
              </a>

              <a href="#contact" className="relative group">
                Contact
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-600 transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 space-y-16 py-10">

        {/* HERO */}
        <section className="text-center space-y-6 py-16 bg-white rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm md:text-base font-bold text-black max-w-3xl mx-auto">
            Settlement Advances for Personal Injury Plaintiffs and Estate Funding Solutions.
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

          <a href="#contact" className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
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
              <details key={i} className="border p-5 rounded-xl bg-white">
                <summary className="font-semibold text-lg cursor-pointer">{title}</summary>
                <p className="mt-3 text-gray-700">
                  Fast approvals, flexible funding, no upfront cost.
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white p-6 rounded-xl border">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Apply for Funding
          </h2>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <input name="name" placeholder="Full Name" required className="w-full border p-3 rounded-lg" />
            <input name="email" type="email" placeholder="Email" required className="w-full border p-3 rounded-lg" />
            <input name="phone" placeholder="Phone" required className="w-full border p-3 rounded-lg" />

            <select name="service" required className="w-full border p-3 rounded-lg">
              <option value="">Select Service</option>
              <option>Settlement Advance</option>
              <option>Lawsuit Funding</option>
              <option>Law Firm Financing</option>
              <option>Business Funding</option>
            </select>

            <button type="submit" disabled={loading} className="bg-teal-600 text-white py-3 rounded-lg w-full">
              {loading ? "Submitting..." : "Submit Request"}
            </button>

            {status === "success" && <p className="text-green-600 text-center">Submitted successfully</p>}
            {status === "error" && <p className="text-red-600 text-center">Something went wrong</p>}
          </form>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6">
          <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
            <p className="text-sm text-gray-500">© 2026 SteveLaw Investments</p>

            <div className="flex items-center gap-3">
              <FaFacebook size={16} />
              <FaTwitter size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}