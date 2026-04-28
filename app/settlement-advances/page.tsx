"use client";

import Image from "next/image";
import { useState } from "react";

export default function SettlementAdvancesPage() {
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
    <main className="relative min-h-screen bg-[linear-gradient(to_right,#e6f4f3_0%,#ffffff_12%,#ffffff_88%,#e6f4f3_100%)]">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center space-y-6">
        <Image
          src="/badges.png"
          alt="Awards"
          width={420}
          height={130}
          className="mx-auto"
        />

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Settlement Advances in Canada
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Access a portion of your settlement early. No win, no repayment.
          Fast approvals and completely confidential.
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          <span>✔ No Win, No Repayment</span>
          <span>✔ Fast Approval</span>
          <span>✔ No Credit Checks</span>
        </div>

        <a
          href="#contact"
          className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
        >
          Apply Now
        </a>
      </section>

      {/* WHAT IT IS */}
      <section className="max-w-4xl mx-auto px-4 py-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          What is a Settlement Advance?
        </h2>

        <p className="text-gray-700">
          A settlement advance allows you to access funds from your expected
          lawsuit settlement before your case is resolved. This gives you
          financial flexibility while your legal case is ongoing.
        </p>

        <p className="text-gray-700">
          If your case is unsuccessful, you owe nothing. This is a risk-free
          funding solution designed to support you when you need it most.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "No Win, No Repayment",
              text: "You only repay if your case is successful.",
            },
            {
              title: "Fast Approvals",
              text: "Get approved quickly—often within 24 hours.",
            },
            {
              title: "No Credit Checks",
              text: "Approval is based on your case, not your credit.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm text-center"
            >
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-5xl mx-auto px-4 py-10 text-center space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              step: "1",
              title: "Apply Online",
              text: "Submit a simple application in minutes.",
            },
            {
              step: "2",
              title: "Case Review",
              text: "We work with your lawyer to evaluate your case.",
            },
            {
              step: "3",
              title: "Get Funded",
              text: "Receive funds quickly once approved.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm"
            >
              <div className="text-teal-600 font-bold text-xl">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg mt-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-4 py-12 bg-white border rounded-xl shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Apply for a Settlement Advance
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full border p-3 rounded-lg"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full border p-3 rounded-lg"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="service"
            required
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Service</option>
            <option>Settlement Advance</option>
            <option>Lawsuit Funding</option>
            <option>Law Firm Financing</option>
            <option>Business Funding</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="bg-teal-600 text-white py-3 rounded-lg w-full hover:bg-teal-700"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center">
              Submitted successfully. We’ll contact you shortly.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>

    </main>
  );
}