"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Website() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 border-b bg-white sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#0A2540] text-white flex items-center justify-center rounded-lg font-bold text-sm">
            SL
          </div>

          <h1 className="text-lg font-semibold tracking-wide">
            SteveLaw Investments
          </h1>
        </div>

        <div className="space-x-8 text-sm">
          <a href="#services" className="hover:text-[#0A2540] transition duration-300">Services</a>
          <a href="#about" className="hover:text-[#0A2540] transition duration-300">About</a>
          <a href="#contact" className="hover:text-[#0A2540] transition duration-300">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-white text-gray-900">

        <img
          src="/finance.png"
          alt="Finance"
          className="mx-auto mb-10 w-64 md:w-80 object-contain"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
        >
          Private Capital Solutions for Investors and Businesses
        </motion.h2>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-8">
          We help clients secure funding, structure deals, and build long-term wealth through disciplined investment strategies.
        </p>

        <a
          href="#contact"
          className="inline-block bg-[#0A2540] text-white px-8 py-4 rounded-2xl text-sm hover:scale-[1.02] hover:shadow-xl transition duration-300"
        >
          Request Consultation
        </a>

      </section>

      {/* DIVIDER */}
      <div className="w-24 h-1 bg-black mx-auto my-10 rounded-full"></div>

      {/* PREMIUM STRIP */}
      <section className="bg-[#0A2540] text-white py-16 text-center">
        <p className="text-lg tracking-wide">
          Trusted by individuals and businesses seeking smarter financial growth
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-12 text-center tracking-tight">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Investment Strategy & Planning",
              desc: "We design structured investment strategies focused on capital preservation, risk management, and long-term growth.",
            },
            {
              title: "Private Capital & Funding",
              desc: "Access flexible funding solutions for real estate, business expansion, and time-sensitive investment opportunities.",
            },
            {
              title: "Advisory & Financial Structuring",
              desc: "Receive expert guidance on structuring deals, optimizing returns, and making high-impact financial decisions.",
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 border rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 bg-white group"
            >
              <div className="w-10 h-1 bg-[#0A2540] mb-4 group-hover:w-16 transition-all"></div>

              <h4 className="font-semibold text-lg mb-3">
                {service.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST / STATS */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-3xl font-bold">$10M+</h4>
            <p className="text-gray-600">Capital Facilitated</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">500+</h4>
            <p className="text-gray-600">Clients Served</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">10+ Years</h4>
            <p className="text-gray-600">Industry Experience</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-12 tracking-tight">
          What Our Clients Say
        </h3>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "SteveLaw Investments helped us secure funding quickly when timing mattered most.",
              name: "Business Owner",
            },
            {
              quote: "Clear guidance and strong financial insight. They made complex decisions simple.",
              name: "Private Investor",
            },
            {
              quote: "Fast capital and a structured plan for growth. Exactly what we needed.",
              name: "Real Estate Client",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 border rounded-2xl bg-gray-50 hover:shadow-xl transition"
            >
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                “{item.quote}”
              </p>

              <h4 className="font-semibold text-sm text-gray-900">
                — {item.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gray-50 py-24 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">About Us</h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          SteveLaw Investments provides disciplined, transparent, and results-driven financial solutions. We help clients structure investments, access capital, and build long-term wealth.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">
          Start Your Investment Journey
        </h3>

        <p className="mb-8 text-gray-500">
          Speak with our team about your financial goals.
        </p>

        {!submitted ? (
          <>
            <form
              className="max-w-md mx-auto space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;

                const formData = {
                  name: form.name.value,
                  email: form.email.value,
                  phone: form.phone.value,
                  service: form.service.value,
                };

                await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                });

                form.reset();
                setSubmitted(true);
              }}
            >
              <input name="name" type="text" placeholder="Full Name" className="w-full border p-4 rounded-xl" required />
              <input name="email" type="email" placeholder="Email Address" className="w-full border p-4 rounded-xl" required />
              <input name="phone" type="text" placeholder="Phone Number" className="w-full border p-4 rounded-xl" />

             <select name="service" className="w-full border p-4 rounded-xl text-gray-600">
             <option>What are you interested in?</option>
             <option>Investment Planning</option>
             <option>Private Funding</option>
             <option>Financial Consulting</option>
             <option>Legal & Compliance Advisory</option>
             </select>

              <button type="submit" className="bg-[#0A2540] text-white px-6 py-3 rounded-2xl w-full">
                Request Consultation
              </button>
            </form>
          </>
        ) : (
          <p className="text-green-600 text-lg mt-6">
            ✅ Your request has been sent. We’ll contact you shortly.
          </p>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A2540] text-white text-center py-6">
        <p className="mb-2">
          © {new Date().getFullYear()} SteveLaw Investments. All rights reserved.
        </p>

        <div className="space-x-4 text-sm text-gray-400">
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white">Terms of Service</a>
        </div>
      </footer>

    </div>
  );
}