import Image from "next/image";
export default function Page() {
  return (
    <main className="p-6 max-w-5xl mx-auto space-y-16">

  <nav className="sticky top-0 bg-white z-50 flex justify-between items-center py-4 border-b mb-8">
  <div className="font-bold text-lg">
    SteveLaw Investments
  </div>

  <div className="space-x-6 text-sm">
    <a href="#services" className="hover:underline">Services</a>
    <a href="#contact" className="hover:underline">Contact</a>
  </div>
</nav>

      {/* HERO */}
    <section className="text-center space-y-6 py-16 bg-gradient-to-b from-gray-50 to-white rounded-lg">

  <Image
    src="/badges.png"
    alt="Awards and recognition"
    width={420}
    height={130}
    className="mx-auto object-contain"
  />

  <h1 className="text-4xl font-bold">
    Canada’s Leading Litigation Funding Solutions
  </h1>

  <p className="text-lg text-gray-600">
    We provide fast, confidential settlement advances to individuals awaiting legal settlements—helping you access the funds you need today, without waiting months or years.
  </p>
   
 <a
  href="#contact"
  className="bg-black text-white px-6 py-3 rounded inline-block"
>
  Apply for Funding 
</a>

</section>

      {/* WHAT WE DO */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Access Your Settlement Before Your Case Ends
        </h2>
        <p className="text-gray-700">
          Legal cases can take time—but your financial needs cannot wait. We offer settlement advances to plaintiffs across Canada, giving you access to a portion of your expected settlement before your case is resolved.
        </p>
        <p className="text-gray-700">
          There are no upfront fees, and repayment is only required if your case is successful.
        </p>
      </section>

      {/* SERVICES */}
<section id="services" className="space-y-6">
  <h2 className="text-2xl font-semibold">Our Services</h2>

  <div className="space-y-6">

    <details className="border p-5 rounded-lg shadow-sm bg-white cursor-pointer">
      <summary className="font-semibold text-lg">
        Settlement Advances
      </summary>

      <p className="text-gray-700 mt-3">
        We provide plaintiffs with early access to a portion of their expected settlement, helping cover living expenses, medical bills, and financial obligations while their case progresses.
      </p>

      <ul className="list-disc pl-5 text-gray-700 mt-3 space-y-1">
        <li>No upfront fees</li>
        <li>Non-recourse in many cases</li>
        <li>Fast approvals and funding</li>
      </ul>
    </details>

    <details className="border p-5 rounded-lg shadow-sm bg-white cursor-pointer">
      <summary className="font-semibold text-lg">
        Lawsuit Funding
      </summary>

      <p className="text-gray-700 mt-3">
        We offer funding solutions for ongoing legal cases, helping reduce financial pressure so clients can focus on their recovery and legal outcomes without settling early due to financial stress.
      </p>

      <ul className="list-disc pl-5 text-gray-700 mt-3 space-y-1">
        <li>Support throughout the duration of your case</li>
        <li>Flexible funding structures</li>
        <li>Confidential and fast process</li>
      </ul>
    </details>

    <details className="border p-5 rounded-lg shadow-sm bg-white cursor-pointer">
      <summary className="font-semibold text-lg">
        Law Firm Financing
      </summary>

      <p className="text-gray-700 mt-3">
        We help law firms manage cash flow and finance case-related expenses, allowing them to take on more cases and operate efficiently without financial constraints.
      </p>

      <ul className="list-disc pl-5 text-gray-700 mt-3 space-y-1">
        <li>Case cost financing</li>
        <li>Improved operational cash flow</li>
        <li>Scale your practice with confidence</li>
      </ul>
    </details>

    <details className="border p-5 rounded-lg shadow-sm bg-white cursor-pointer">
      <summary className="font-semibold text-lg">
        Business & Loan Funding
      </summary>

      <p className="text-gray-700 mt-3">
        Through our network of private lenders, we provide funding solutions for businesses that may not qualify for traditional bank financing, including real estate, construction, and transportation sectors.
      </p>

      <ul className="list-disc pl-5 text-gray-700 mt-3 space-y-1">
        <li>Access to private capital</li>
        <li>Fast approvals and flexible terms</li>
        <li>Funding from $50K to $100M</li>
      </ul>
    </details>

  </div>
</section>

     {/* CASE TYPES */}
      <section className="space-y-6">
  <h2 className="text-2xl font-semibold">Case Types We Fund</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
    <div>• Personal Injury</div>
    <div>• Motor Vehicle Accidents</div>
    <div>• Medical Malpractice</div>
    <div>• Slip and Fall Claims</div>
    <div>• Wrongful Death</div>
    <div>• Employment Disputes</div>
    <div>• Class Action Lawsuits</div>
    <div>• Other Civil Litigation</div>
  </div>
</section>

{/* INDUSTRIES */}
<section className="space-y-6">
  <h2 className="text-2xl font-semibold">Industries We Serve</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {[
      {
        title: "Real Estate Investors",
        desc: "We provide access to private capital for acquisitions, bridge financing, and property improvements. Whether you’re closing quickly or stabilizing a project, our funding helps you move without delays.",
        points: [
          "Fast closings when banks cannot move in time",
          "Flexible structures tailored to your deal",
          "Funding for purchase, refinance, or renovation",
        ],
      },
      {
        title: "Construction Companies",
        desc: "Construction projects require consistent cash flow. We help cover material costs, labor, and operational expenses so your projects stay on track and on schedule.",
        points: [
          "Working capital for ongoing projects",
          "Support for payroll and materials",
          "Flexible repayment structures",
        ],
      },
      {
        title: "Transportation & Logistics",
        desc: "We support transportation companies with funding for fleet expansion, maintenance, and operational costs so you can keep your business moving.",
        points: [
          "Fleet expansion financing",
          "Coverage for fuel and maintenance",
          "Capital to scale operations quickly",
        ],
      },
      {
        title: "Law Firms",
        desc: "We provide law firms with financing to manage case expenses and improve cash flow while waiting for settlements or contingency outcomes.",
        points: [
          "Case cost financing",
          "Improved cash flow stability",
          "Scale your practice with confidence",
        ],
      },
      {
        title: "Small & Medium Businesses",
        desc: "When traditional financing is not available, we connect businesses with private capital solutions to support growth and stability.",
        points: [
          "Quick access to working capital",
          "Flexible approval criteria",
          "Funding for expansion or operations",
        ],
      },
      {
        title: "Individual Claimants",
        desc: "We help individuals access a portion of their expected settlement early, reducing financial stress while their case progresses.",
        points: [
          "No upfront costs",
          "Non-recourse in many cases",
          "Fast and confidential approvals",
        ],
      },
    ].map((item, index) => (
      <details
        key={index}
        className="border p-5 rounded-lg shadow-sm bg-white cursor-pointer"
      >
        <summary className="font-semibold text-lg">
          {item.title}
        </summary>

        <p className="text-gray-700 mt-3">
          {item.desc}
        </p>

        <ul className="list-disc pl-5 text-gray-700 mt-3 space-y-1">
          {item.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </details>
    ))}

  </div>
</section>

      {/* WHY CHOOSE US */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Why Clients Trust Our Funding Solutions
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>No upfront costs</li>
          <li>No repayment unless you win</li>
          <li>Fast and confidential approvals</li>
          <li>Access to private capital networks</li>
          <li>Serving clients across Canada</li>
          <li>Flexible funding from $50K to $100M</li>
        </ul>
      </section>

    {/* HOW IT WORKS */}
<section className="space-y-6">
  <h2 className="text-2xl font-semibold text-center">
    How It Works
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

    <div className="border p-6 rounded-lg shadow-sm bg-white">
      <div className="text-3xl font-bold mb-2">1</div>
      <h3 className="font-semibold text-lg">Submit Your Request</h3>
      <p className="text-gray-700 mt-2">
        Complete our simple form with your details and funding needs. The process takes only a few minutes.
      </p>
    </div>

    <div className="border p-6 rounded-lg shadow-sm bg-white">
      <div className="text-3xl font-bold mb-2">2</div>
      <h3 className="font-semibold text-lg">We Review Your Case</h3>
      <p className="text-gray-700 mt-2">
        Our team evaluates your case or business opportunity and structures a funding solution tailored to your needs.
      </p>
    </div>

    <div className="border p-6 rounded-lg shadow-sm bg-white">
      <div className="text-3xl font-bold mb-2">3</div>
      <h3 className="font-semibold text-lg">Receive Your Funding</h3>
      <p className="text-gray-700 mt-2">
        Once approved, funds are released quickly so you can move forward without financial delay.
      </p>
    </div>

   </div>
   </section>

      {/* CTA */}
      <a
      href="#contact"
      className="bg-black text-white px-8 py-4 rounded-lg inline-block font-semibold hover:bg-gray-800 transition"
>
      Apply for Funding
      </a>

      {/* BUSINESS FINANCING */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Additional Financing Solutions
        </h2>
        <p className="text-gray-700">
          In addition to legal funding, we provide access to private capital for real estate investors, construction firms, and transportation companies that may not qualify for traditional bank financing.
        </p>
        <p className="text-gray-700">
          Funding is structured through our network of experienced private lenders.
        </p>
      </section>
     
     {/* CONTACT */}
<section id="contact" className="space-y-6">
  <h2 className="text-2xl font-semibold text-center">
    Apply for Funding
  </h2>

  <form
    action="/api/contact"
    method="POST"
    className="max-w-xl mx-auto space-y-4"
  >
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      required
      className="w-full border p-3 rounded"
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      className="w-full border p-3 rounded"
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      required
      className="w-full border p-3 rounded"
    />

    <select
      name="service"
      required
      className="w-full border p-3 rounded"
    >
      <option value="">Select Service</option>
      <option>Settlement Advance</option>
      <option>Lawsuit Funding</option>
      <option>Law Firm Financing</option>
      <option>Business / Loan Funding</option>
    </select>

    <button
      type="submit"
      className="bg-black text-white px-6 py-3 rounded w-full"
    >
      Submit Request
    </button>
  </form>
</section>

      {/* DISCLAIMER */}
<section className="text-sm text-gray-500 border-t pt-6">
  <p>
    SteveLaw Investments is not a law firm and does not provide legal advice. All funding is subject to review and approval. Terms and conditions apply.
  </p>
</section>

{/* FOOTER */}
<footer className="border-t pt-8 mt-12 text-sm text-gray-600 space-y-4">

  <div className="font-semibold text-black">
    SteveLaw Investments
  </div>

  <p>
    Providing fast, confidential funding solutions across Canada for individuals, law firms, and businesses.
  </p>

  <div className="space-y-1">
    <div>Phone: <a href="tel:14162220000" className="hover:underline">1-416-222-0000</a></div>
    <div>Email: <a href="mailto:stevej00171@gmail.com" className="hover:underline">stevej00171@gmail.com</a></div>
    <div>
      First Canadian Place, 100 King St W #5600, Toronto, ON M5X 1C9
    </div>
  </div>

  <div className="flex flex-wrap gap-4">
    <a href="/privacy" className="hover:underline">Privacy Policy</a>
    <a href="/terms" className="hover:underline">Terms of Service</a>
  </div>

  <p className="text-xs text-gray-500">
    © {new Date().getFullYear()} SteveLaw Investments. All rights reserved.
  </p>

</footer>

</main>
);
}