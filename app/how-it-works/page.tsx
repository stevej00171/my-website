export default function HowItWorks() {
  return (
    <main className="bg-gray-50 text-gray-900 space-y-16 pb-24">

      {/* HERO */}
      <section className="text-center space-y-6 py-24 bg-white border-b">
        <p className="text-sm tracking-wide text-gray-500 uppercase">
          Our Process
        </p>

        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          How Our Funding Process Works
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide a structured, transparent approach to funding—designed to deliver
          speed, clarity, and confidence at every stage.
        </p>
      </section>

      {/* STEPS */}
      <section className="max-w-5xl mx-auto px-4 space-y-12">

        {/* STEP 1 */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="text-3xl font-bold text-gray-300">01</div>

          <div className="md:col-span-2 space-y-2">
            <h2 className="text-xl font-semibold">Initial Consultation</h2>
            <p className="text-gray-600">
              Submit your request online or speak with our team. We gather basic
              information about your case, firm, or business funding needs.
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="text-3xl font-bold text-gray-300">02</div>

          <div className="md:col-span-2 space-y-2">
            <h2 className="text-xl font-semibold">Case & Risk Review</h2>
            <p className="text-gray-600">
              Our underwriting team evaluates the merits of your case or financial
              profile. We may coordinate directly with your legal counsel where required.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="text-3xl font-bold text-gray-300">03</div>

          <div className="md:col-span-2 space-y-2">
            <h2 className="text-xl font-semibold">Approval & Offer</h2>
            <p className="text-gray-600">
              Once approved, we present clear funding terms with no hidden fees.
              Our solutions are structured to align with your outcome.
            </p>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="text-3xl font-bold text-gray-300">04</div>

          <div className="md:col-span-2 space-y-2">
            <h2 className="text-xl font-semibold">Funding Disbursement</h2>
            <p className="text-gray-600">
              Upon acceptance, funds are released quickly—often within 24–48 hours.
            </p>
          </div>
        </div>

        {/* STEP 5 */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="text-3xl font-bold text-gray-300">05</div>

          <div className="md:col-span-2 space-y-2">
            <h2 className="text-xl font-semibold">Repayment Upon Resolution</h2>
            <p className="text-gray-600">
              Repayment occurs only if your case is successful. If there is no recovery,
              you owe nothing—ensuring zero financial risk to you.
            </p>
          </div>
        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="bg-white border-t border-b py-12">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            Designed for Speed, Transparency, and Confidence
          </h2>

          <p className="text-gray-600">
            Our process is built to minimize delays while maintaining rigorous
            underwriting standards. We prioritize confidentiality, efficiency,
            and alignment with your legal and financial goals.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 pt-4">
            <span>✔ No Upfront Fees</span>
            <span>✔ No Repayment Unless You Win</span>
            <span>✔ Fast Turnaround</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl font-semibold">
          Ready to Get Started?
        </h2>

        <p className="text-gray-600">
          Speak with our team or submit your request to begin the process.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/#contact"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Request Consultation
          </a>

          <a
            href="/settlement-advances"
            className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            View Funding Options
          </a>
        </div>
      </section>

    </main>
  );
}