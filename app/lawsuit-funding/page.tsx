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
            style={{ height: "auto" }}
            loading="eager"
          />
        </section>

      </div> {/* ✅ THIS WAS MISSING */}
    </main>
  );
}
          