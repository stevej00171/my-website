import Link from "next/link";
import "./globals.css";
import { ReactNode } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "SteveLaw Investments",
  description: "Litigation funding solutions across Canada",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">

            {/* TOP BAR */}
            <div className="flex justify-end items-center text-xs md:text-sm text-gray-700 gap-4">
              <span className="font-semibold tracking-wide">1-888-800-4966</span>

              <span className="text-gray-300">|</span>

              <a href="#" className="hover:text-teal-600 transition font-medium">
                Log In
              </a>

              <span className="text-gray-300">|</span>

              <div className="flex items-center gap-3">
                <FaFacebook size={16} className="hover:text-teal-600 cursor-pointer transition" />
                <FaTwitter size={16} className="hover:text-teal-600 cursor-pointer transition" />
                <FaLinkedin size={16} className="hover:text-teal-600 cursor-pointer transition" />
              </div>
            </div>

            {/* MAIN NAV */}
            <div className="flex justify-between items-center">

              <div className="font-bold text-lg tracking-tight">
                SteveLaw Investments
              </div>

              <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
                <a href="/" className="hover:text-teal-600">Home</a>
                <a href="/settlement-advances" className="hover:text-teal-600">Settlement Advances</a>
                <a href="/lawsuit-funding" className="hover:text-teal-600">Lawsuit Funding</a>
                <a href="/law-firm-financing" className="hover:text-teal-600">Law Firm Financing</a>
                <a href="/business-funding" className="hover:text-teal-600">Business Funding</a>
                <a href="/#contact" className="hover:text-teal-600">Contact</a>
              </div>

            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6">
          <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
            <p className="text-sm text-gray-500">© 2026 SteveLaw Investments</p>

            <div className="flex items-center gap-3">
              <FaFacebook size={16} className="hover:text-teal-600 cursor-pointer transition" />
              <FaTwitter size={16} className="hover:text-teal-600 cursor-pointer transition" />
              <FaLinkedin size={16} className="hover:text-teal-600 cursor-pointer transition" />
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}