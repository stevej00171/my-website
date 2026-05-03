"use client";

export default function ProjectFundingPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-24 border-b text-center space-y-6 px-4">
        <p className="text-sm tracking-wide text-gray-500 uppercase">
          Institutional Capital Solutions
        </p>

        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Project Funding for Large-Scale, Shovel-Ready Opportunities
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide structured capital solutions for qualified projects across
          infrastructure, energy, real estate, and private enterprise—designed for
          long-term execution and disciplined growth.
        </p>

        <div className="pt-6">
          {/* ✅ FIXED CTA */}
          <a
            href="/apply"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Request Funding Review
          </a>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center space-y-6">
        <h2 className="text-2xl font-semibold">Overview</h2>

        <p className="text-gray-600 leading-relaxed">
          Our project funding program is designed to support large-scale,
          capital-intensive initiatives with strong fundamentals and clear
          execution pathways. We work closely with sponsors, developers, and
          advisory teams to structure financing aligned with project timelines
          and risk profiles.
        </p>
      </section>

      {/* KEY TERMS */}
      <section className="bg-gray-50 border-y py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <h2 className="text-2xl font-semibold text-center">
            Key Funding Parameters
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-6 border rounded-md">
              <h3 className="font-semibold mb-2">Capital Deployment</h3>
              <p className="text-gray-600">
                $5 million to $500 million+ depending on project scope and structure.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-md">
              <h3 className="font-semibold mb-2">Interest Structure</h3>
              <p className="text-gray-600">
                Principal rates starting from 2.5% annually, structured based on risk and duration.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-md">
              <h3 className="font-semibold mb-2">Term Length</h3>
              <p className="text-gray-600">
                Flexible repayment structures ranging from 10 to 15 years.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-md">
              <h3 className="font-semibold mb-2">Grace Period</h3>
              <p className="text-gray-600">
                Up to 24 months before repayment commencement.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-md">
              <h3 className="font-semibold mb-2">Collateral Structure</h3>
              <p className="text-gray-600">
                Structured on a case-by-case basis depending on project and jurisdiction.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-md">
              <h3 className="font-semibold mb-2">Approval</h3>
              <p className="text-gray-600">
                All funding subject to underwriting, due diligence, and investment committee approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Ideal Project Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
          <ul className="space-y-2">
            <li>• Shovel-ready or late-stage development</li>
            <li>• Clearly defined capital requirements</li>
            <li>• Experienced management or sponsor team</li>
          </ul>

          <ul className="space-y-2">
            <li>• Strong financial projections and feasibility</li>
            <li>• Legal and regulatory clarity</li>
            <li>• Exit or repayment strategy identified</li>
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 border-y py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-10 text-center">
          <h2 className="text-2xl font-semibold">Funding Process</h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">
                Initial Assessment
              </h3>
              <p>
                Review of project fundamentals, capital needs, and sponsor profile.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-1">
                Structuring & Underwriting
              </h3>
              <p>
                Detailed due diligence, financial modeling, and term structuring.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-1">
                Approval & Funding
              </h3>
              <p>
                Final approval followed by capital deployment aligned with milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center space-y-6 px-4">
        <h2 className="text-2xl font-semibold">
          Submit Your Project for Review
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto">
          Our team evaluates each opportunity with a disciplined and confidential
          approach. Qualified projects move quickly through our review process.
        </p>

        {/* ✅ FIXED CTA */}
        <a
          href="/apply"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Start a Funding Request
        </a>

        <p className="text-xs text-gray-400 pt-4">
          Subject to underwriting, due diligence, and final approval.
        </p>
      </section>

    </main>
  );
}