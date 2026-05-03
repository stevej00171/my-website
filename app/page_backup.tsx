'use client'

import { useEffect, useState } from "react";
import { supabase, uploadFile } from '../lib/supabaseClient'
import Image from "next/image";


export default function Page() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const [files, setFiles] = useState([])

useEffect(() => {
  fetchFiles()
}, [])

async function fetchFiles() {
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching files:', error)
    return
  }

  setFiles(data)
}

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
    <main className="bg-gray-50 text-gray-900 space-y-16 pb-24">

      {/* HERO */}
      <section className="text-center space-y-6 py-24 bg-white border-b">
        <p className="text-sm tracking-wide text-gray-500 uppercase">
          Litigation & Structured Finance
        </p>

        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Strategic Funding Solutions for Legal Claims and Businesses Across Canada
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide non-recourse funding to plaintiffs, law firms, and businesses—
          delivering liquidity without upfront cost or repayment risk.
        </p>

        <div className="flex justify-center gap-4 pt-6">
          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Request Consultation
          </a>

          <a
            href="#services"
            className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            View Solutions
          </a>
        </div>

        <div className="pt-6 flex justify-center">
          <Image
            src="/badges.png"
            alt="Trusted & Recognized"
            width={420}
            height={130}
            className="object-contain"
          />
        </div>
      </section>

      {/* POSITIONING */}
      <section className="max-w-4xl mx-auto text-center px-4">
        <p className="text-gray-600 leading-relaxed">
          Our funding solutions are structured in collaboration with legal professionals
          and designed to align with the unique needs of each case and client.
          We focus on disciplined underwriting, speed of execution, and confidentiality.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-2xl font-semibold text-center">
          Funding Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Project Funding",
              desc: "Structured capital solutions from $5M to $500M+ for shovel-ready projects. Long-term financing with disciplined underwriting and flexible structuring. Subject to underwriting and approval.",
              href: "/project-funding",
            },
            {
              title: "Business Capital",
              desc: "Flexible financing from $50K to $100K for businesses and professionals. Streamlined process with fast access to working capital. Subject to underwriting and approval.",
              href: "/business-funding",
            },
            {
              title: "Settlement Funding",
              desc: "Non-recourse advances for plaintiffs awaiting settlement resolution.",
              href: "/settlement-advances",
            },
            {
              title: "Litigation Financing",
              desc: "Strategic capital solutions to support ongoing legal proceedings.",
              href: "/lawsuit-funding",
            },
            {
              title: "Law Firm Capital",
              desc: "Financing solutions designed to support firm growth and case investment.",
              href: "/law-firm-financing",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="block bg-white border border-gray-200 p-6 rounded-md hover:shadow-sm transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>

              <span className="inline-block mt-4 text-sm text-black font-medium">
                Learn More →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto px-4">
        <div className="bg-white border p-8 rounded-md">
          <h2 className="text-xl font-semibold text-center mb-6">
            Request a Confidential Consultation
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Full Name" required className="w-full border p-3 rounded-md" />
            <input name="email" type="email" placeholder="Email Address" required className="w-full border p-3 rounded-md" />
            <input name="phone" placeholder="Phone Number" required className="w-full border p-3 rounded-md" />

            <select name="service" required className="w-full border p-3 rounded-md">
              <option value="">Select Inquiry Type</option>
              <option>Project Funding</option>
              <option>Business Capital</option>
              <option>Settlement Funding</option>
              <option>Litigation Financing</option>
              <option>Law Firm Capital</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center text-sm">
                Request submitted. Our team will contact you shortly.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-center text-sm">
                Submission failed. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* STICKY BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#contact"
          className="bg-black text-white px-5 py-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          Request Funding
        </a>
      </div>

    </main>
  );
}