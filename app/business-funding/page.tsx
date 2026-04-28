"use client";

import Image from "next/image";

export default function BusinessFundingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden
    bg-[linear-gradient(to_right,#e6f4f3_0%,#ffffff_12%,#ffffff_88%,#e6f4f3_100%)]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-teal-100 opacity-30 blur-3xl rounded-full pointer-events-none"></div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">

        {/* HERO */}
        <section className="text-center space-y-6">
          <Image
            src="/badges.png"
            alt="Awards"
            width={420}
            height={130}
            className="mx-auto object-contain"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Business Funding Solutions
          </h1>

          <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access fast, flexible capital to grow your business, manage cash flow, and seize new opportunities.
          </p>

          <div className="flex justify-center gap-4 flex-wrap text-sm text-gray-600">
            <span>✔ Fast Approvals</span>
            <span>✔ Flexible Terms</span>
            <span>✔ Scalable Funding</span>
          </div>

          <a
            href="/#contact"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-teal-700 transition"
          >
            Apply Now
          </a>
        </section>

        {/* INFO SECTION */}
        <section className="grid md:grid-cols-2 gap-10">

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              What is Business Funding?
            </h2>
            <p className="text-gray-700">
              Business funding provides companies with access to capital for operations, expansion, inventory, or
              short-term cash flow needs. Whether you're scaling or stabilizing, funding helps you move faster.
            </p>
            <p className="text-gray-700">
              Our solutions are flexible and tailored to your business goals, without the delays of traditional lending.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-3">
            <h3 className="font-semibold text-lg">Why Choose Us</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>✔ Quick funding decisions</li>
              <li>✔ Minimal paperwork</li>
              <li>✔ Flexible repayment options</li>
              <li>✔ Trusted funding partner</li>
            </ul>
          </div>

        </section>

        {/* CTA */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-600">
            Get the capital you need—fast and stress-free.
          </p>

          <a
            href="/#contact"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-teal-700 transition"
          >
            Start Your Application
          </a>
        </section>

      </div>
    </main>
  );
}