"use client";

import Image from "next/image";

export default function SettlementAdvancesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Settlement Advances in Canada
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get cash before your case settles. No upfront fees. No risk if you lose.
        </p>

        <div className="flex justify-center gap-3 text-sm text-gray-600">
          <span>✔ No Win, No Repayment</span>
          <span>✔ Fast Approval</span>
          <span>✔ 100% Confidential</span>
        </div>

        <a
          href="/#contact"
          className="bg-teal-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-teal-700"
        >
          Apply Now
        </a>
      </section>

      {/* BADGES */}
      <section className="flex justify-center">
        <Image
          src="/badges.png"
          alt="Trust badges"
          width={400}
          height={120}
          className="object-contain"
        />
      </section>

      {/* WHAT IS THIS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          What is a Settlement Advance?
        </h2>

        <p className="text-gray-700">
          A settlement advance allows you to access a portion of your expected
          settlement before your case is resolved. Instead of waiting months or
          years, you can receive funds quickly to cover living expenses, medical
          bills, or other financial needs.
        </p>

        <p className="text-gray-700">
          This is not a traditional loan. If you don’t win your case, you don’t
          repay anything.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Apply", "Submit a simple application online or by phone."],
            ["Case Review", "We work directly with your lawyer to assess your case."],
            ["Get Funded", "Receive your funds quickly once approved."],
          ].map(([title, desc], i) => (
            <div key={i} className="border p-5 rounded-xl bg-white shadow-sm">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Why Choose a Settlement Advance?
        </h2>

        <ul className="space-y-2 text-gray-700">
          <li>✔ No credit checks</li>
          <li>✔ No monthly payments</li>
          <li>✔ Non-recourse funding (you only repay if you win)</li>
          <li>✔ Fast approvals within 24–48 hours</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            ["Do I need good credit?", "No. Approval is based on your case, not your credit."],
            ["How fast can I get funds?", "Most approvals happen within 1–2 days."],
            ["What if I lose my case?", "You owe nothing. It’s completely risk-free."],
          ].map(([q, a], i) => (
            <details key={i} className="border p-4 rounded-lg">
              <summary className="font-medium cursor-pointer">{q}</summary>
              <p className="mt-2 text-gray-600">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center space-y-4 bg-teal-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-900">
          Get Your Settlement Advance Today
        </h2>

        <p className="text-gray-600">
          Apply now and receive funding quickly with no upfront costs.
        </p>

        <a
          href="/#contact"
          className="bg-teal-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-teal-700"
        >
          Start Your Application
        </a>
      </section>

    </main>
  );
}