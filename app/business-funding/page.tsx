"use client";

import Image from "next/image";

export default function BusinessFundingPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_right,#e6f4f3_0%,#ffffff_12%,#ffffff_88%,#e6f4f3_100%)]">

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">

        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Business Funding & Capital Solutions
          </h1>

          <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Fast, flexible funding to help your business grow, manage cash flow, and seize new opportunities.
          </p>

          <Image
            src="/badges.png"
            alt="Trust badges"
            width={420}
            height={130}
            className="mx-auto"
          />

          <div className="flex justify-center gap-4 text-sm text-gray-600 flex-wrap">
            <span>✔ Fast Approvals</span>
            <span>✔ Flexible Terms</span>
            <span>✔ All Credit Types Considered</span>
          </div>

          <a
            href="/#contact"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Apply for Funding
          </a>
        </section>

        {/* WHAT WE OFFER */}
        <section className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Funding Solutions for Every Business Stage
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Whether you're a startup, growing company, or established business, access the capital you need without
            the delays and restrictions of traditional banks.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our funding solutions are designed to support working capital, expansion, payroll, marketing, inventory,
            and unexpected expenses.
          </p>
        </section>

        {/* FUNDING TYPES */}
        <section className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Working Capital Loans",
              text: "Maintain smooth day-to-day operations and cover short-term expenses.",
            },
            {
              title: "Business Expansion Funding",
              text: "Open new locations, hire staff, and invest in growth opportunities.",
            },
            {
              title: "Equipment Financing",
              text: "Purchase or lease equipment without large upfront costs.",
            },
            {
              title: "Revenue-Based Financing",
              text: "Repay funding based on your business revenue performance.",
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

        {/* WHY CHOOSE US */}
        <section className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Why Businesses Choose Us
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Simple application process</li>
            <li>✔ Funding in as little as 24–72 hours</li>
            <li>✔ Minimal paperwork</li>
            <li>✔ No restrictive bank requirements</li>
            <li>✔ Dedicated support team</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center bg-white p-8 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-900">
            Get the Capital Your Business Needs
          </h2>

          <p className="text-gray-600 mt-2">
            No obligation. Fast decisions. Built for growth.
          </p>

          <a
            href="/#contact"
            className="inline-block mt-4 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700"
          >
            Start Application
          </a>
        </section>

      </div>
    </main>
  );
}