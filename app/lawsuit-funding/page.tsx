"use client";

import Image from "next/image";

export default function LawsuitFundingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden
    bg-[linear-gradient(to_right,#e6f4f3_0%,#ffffff_12%,#ffffff_88%,#e6f4f3_100%)]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-teal-100 opacity-30 blur-3xl rounded-full pointer-events-none"></div>

      {/* NAV (simple for now) */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-lg">SteveLaw Investments</div>
          <a href="/" className="text-sm font-semibold hover:text-teal-600">Home</a>
        </div>
      </nav>

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
            Lawsuit Funding in Canada
          </h1>

          <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get the financial support you need while your case moves forward—no upfront costs, no monthly payments.
          </p>

          <div className="flex justify-center gap-4 flex-wrap text-sm text-gray-600">
            <span>✔ No Win, No Repayment</span>
            <span>✔ Fast Approval</span>
            <span>✔ Risk-Free Funding</span>
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
              What is Lawsuit Funding?
            </h2>
            <p className="text-gray-700">
              Lawsuit funding provides plaintiffs with cash advances based on the expected outcome of their case.
              This allows you to cover living expenses, medical bills, and other costs while waiting for settlement.
            </p>
            <p className="text-gray-700">
              Unlike traditional loans, repayment only happens if you win your case.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-3">
            <h3 className="font-semibold text-lg">Why Choose Us</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>✔ Fast approvals within 24–48 hours</li>
              <li>✔ No credit checks</li>
              <li>✔ Transparent terms</li>
              <li>✔ Trusted by legal professionals</li>
            </ul>
          </div>

        </section>

        {/* CTA */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Need Funding Now?
          </h2>
          <p className="text-gray-600">
            Apply today and get a decision quickly.
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