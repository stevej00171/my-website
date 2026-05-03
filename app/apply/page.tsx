"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company_name: formData.get("name"), // temp
      funding_amount: formData.get("deal_size"),
      case_type: formData.get("service"),
      timeline: formData.get("timeline"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        const errorText = await res.text();
        console.error("Submission failed:", errorText);
      }
    } catch (err) {
      console.error("Error:", err);
    }

    setLoading(false);
  }

  if (submitted) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-3xl font-bold">Request Received</h1>
        <p className="text-gray-600">
          Your submission has been received. A member of our team will review
          your request and contact you shortly.
        </p>
      </main>
    );
  }

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="py-20 text-center border-b px-4 space-y-6">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Confidential Funding Intake
        </p>

        <h1 className="text-4xl font-bold max-w-3xl mx-auto">
          Submit Your Funding Request
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We evaluate each opportunity with discretion and institutional
          discipline.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 p-8 rounded-md border"
        >
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input name="name" required className="w-full border p-3 rounded-md" />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border p-3 rounded-md"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input name="phone" className="w-full border p-3 rounded-md" />
          </div>

          {/* SERVICE */}
          <div>
            <label className="block text-sm font-medium mb-1">Funding Type</label>
            <select
              name="service"
              required
              className="w-full border p-3 rounded-md"
            >
              <option value="">Select</option>
              <option>Settlement Advance</option>
              <option>Litigation Financing</option>
              <option>Law Firm Capital</option>
              <option>Business Funding</option>
              <option>Project Funding</option>
            </select>
          </div>

          {/* DEAL SIZE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Estimated Deal Size
            </label>
            <select name="deal_size" className="w-full border p-3 rounded-md">
              <option value="">Select</option>
              <option>$10,000 – $100,000</option>
              <option>$100,000 – $1,000,000</option>
              <option>$1M – $5M</option>
              <option>$5M – $25M</option>
              <option>$25M – $100M</option>
              <option>$100M+</option>
            </select>
          </div>

          {/* TIMELINE */}
          <div>
            <label className="block text-sm font-medium mb-1">Timeline</label>
            <select name="timeline" className="w-full border p-3 rounded-md">
              <option value="">Select</option>
              <option>Immediate (0–30 days)</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>6+ months</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Project Details
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full border p-3 rounded-md"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

          <p className="text-xs text-gray-500 text-center">
            All submissions are confidential and subject to review.
          </p>
        </form>
      </section>
    </main>
  );
}