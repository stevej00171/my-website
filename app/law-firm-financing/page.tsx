"use client";

import Image from "next/image";

export default function LawFirmFinancingPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_right,#e6f4f3_0%,#ffffff_12%,#ffffff_88%,#e6f4f3_100%)]">

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">

        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Law Firm Financing Solutions
          </h1>

          <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible capital for law firms to manage cash flow, grow operations, and take on more cases.
          </p>

          <Image
            src="/badges.png"
            alt="Trust badges"
            width={420}
            height={130}
            className="mx-auto"
          />

          <div className="flex justify-center gap-4 text-sm text-gray-600 flex-wrap">
            <span>✔ Case-Based Financing</span>
            <span>✔ No Upfront Costs</span>
            <span>✔ Scalable Capital</span>
          </div>

          <a
            href="/#contact"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Request Funding
          </a>
        </section>

        {/* CONTENT */}
        <section className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Financing Built for Law Firms
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Law firm financing provides access to capital secured against your case portfolio
            or future receivables. This allows firms to maintain steady cash flow while pursuing
            high-value litigation without financial pressure.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether you're expanding your practice, hiring staff, or managing ongoing case expenses,
            our funding solutions are structured to align with your firm's growth.
          </p>
        </section>

        {/* BENEFITS */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Improve Cash Flow",
              text: "Access capital without waiting for settlements.",
            },
            {
              title: "Grow Your Firm",
              text: "Take on more cases and scale operations confidently.",
            },
            {
              title: "Flexible Terms",
              text: "Funding structured around your case portfolio.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="text-center bg-white p-8 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-900">
            Partner With Us for Law Firm Financing
          </h2>

          <p className="text-gray-600 mt-2">
            Fast approvals. Flexible structures. Built for legal professionals.
          </p>

          <a
            href="/#contact"
            className="inline-block mt-4 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700"
          >
            Get Started
          </a>
        </section>

      </div>
    </main>
  );
}