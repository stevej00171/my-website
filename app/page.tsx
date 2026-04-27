import Image from "next/image";
export default function Page() {
  return (
    <main className="p-6 max-w-5xl mx-auto space-y-16">

   <nav className="flex justify-between items-center py-4 border-b mb-8">
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

        <div>
          <h3 className="font-bold">Settlement Advances</h3>
          <p className="text-gray-700">
            Receive funding based on your pending legal claim. Use the funds for living expenses, medical bills, or any immediate financial needs while your case progresses.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Lawsuit Funding</h3>
          <p className="text-gray-700">
            We provide financing for ongoing legal cases, helping reduce financial pressure so you can focus on your recovery and legal outcome.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Law Firm Financing</h3>
          <p className="text-gray-700">
            Flexible capital solutions for law firms to manage case expenses, improve cash flow, and scale operations efficiently.
          </p>
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
      "Real Estate Investors",
      "Construction Companies",
      "Transportation & Logistics",
      "Law Firms",
      "Small & Medium Businesses",
      "Individual Claimants",
    ].map((item) => (
      <div
        key={item}
        className="border p-4 rounded-lg shadow-sm bg-white"
      >
        {item}
      </div>
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

      {/* CTA */}
      <section id="contact" className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          Apply for Funding Today
        </h2>
        <p className="text-gray-700">
          Tell us about your case and funding needs. Our team will review your request and respond promptly. All inquiries are handled with strict confidentiality.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded">
          Apply for funding
        </button>
      </section>

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

      {/* DISCLAIMER */}
      <section className="text-sm text-gray-500 border-t pt-6">
        <p>
          SteveLaw Investments is not a law firm and does not provide legal advice. All funding is subject to review and approval. Terms and conditions apply.
        </p>
      </section>

    </main>
  );
}