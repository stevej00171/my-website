"use client";

import Image from "next/image";

export default function LawsuitFundingPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_right,#e6f4f3_0%,#ffffff_12%,#ffffff_88%,#e6f4f3_100%)]">

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">

        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Lawsuit Funding in Canada
          </h1>

          <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Get financial support during your legal case so you can focus on recovery—not bills.
          </p>

          <Image
            src="/badges.png"
            alt="Trust badges"
            width={420}
            height={130}
            className="mx-auto"
          />

          <div className="flex justify-center gap-4 text-sm text-gray-600 flex-wrap">
            <span>✔ No Win, No Repayment</span>
            <span>✔ Fast Approval</span>
            <span>✔ No Credit Checks</span>
          </div>

          <a
            href="/#contact"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Apply Now
          </a>
        </section>

        {/* CONTENT */}
        <section className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            What is Lawsuit Funding?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Lawsuit funding provides plaintiffs with access to cash advances while their case is ongoing.
            Instead of waiting months or years for a settlement, you can receive funds now to cover
            living expenses, medical bills, and other financial needs.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This type of funding is non-recourse, meaning you only repay if your case is successful.
            There are no monthly payments and no financial risk if you lose.
          </p>
        </section>

        {/* BENEFITS */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "No Risk",
              text: "You only repay if your case wins.",
            },
            {
              title: "Fast Access",
              text: "Funding decisions in as little as 24–48 hours.",
            },
            {
              title: "Confidential",
              text: "Your information is kept private and secure.",
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
            Apply for Lawsuit Funding Today
          </h2>

          <p className="text-gray-600 mt-2">
            Simple application. Fast approval. No obligation.
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