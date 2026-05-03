"use client";

import "./globals.css";
import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";

export default function RootLayout({ children }: { children: ReactNode }) {
  console.log("LAYOUT UPDATED");
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/portal/login");
  }

  const linkClass = (path: string) =>
    `relative group ${
      pathname === path ? "text-teal-600" : "text-gray-700"
    }`;

  return (
    <html lang="en">
      <body className="bg-[linear-gradient(to_right,#e6f4f3_0%,#ffffff_12%,#ffffff_88%,#e6f4f3_100%)]">

        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">

            {/* TOP BAR */}
            <div className="flex justify-end items-center text-xs md:text-sm text-gray-700 gap-4">
              <a
                href="tel:+16476933330"
                className="font-semibold tracking-wide hover:text-teal-600 transition"
              >
                (647) 693-3330
              </a>

              <span className="text-gray-300">|</span>

              {user ? (
                <button
                  onClick={handleLogout}
                  className="hover:text-red-600 transition font-medium"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/portal/login"
                  className="hover:text-teal-600 transition font-medium"
                >
                  Client Portal Access
                </Link>
              )}

              <span className="text-gray-300">|</span>

              <div className="flex items-center gap-3">
                <FaFacebook size={16} className="hover:text-teal-600 cursor-pointer transition" />
                <FaTwitter size={16} className="hover:text-teal-600 cursor-pointer transition" />
                <FaLinkedin size={16} className="hover:text-teal-600 cursor-pointer transition" />
              </div>
            </div>

            {/* MAIN NAV */}
            <div className="flex justify-between items-center">

              {/* LOGO */}
              <Link href="/" className="font-bold text-lg tracking-tight">
                McCowan, Jeffrey & Fich{" "}
                <span className="text-teal-600">Structured Finance</span>
              </Link>

              {/* DESKTOP NAV */}
              <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">

                <Link href="/" className={linkClass("/")}>Home</Link>

                <Link href="/how-it-works" className={linkClass("/how-it-works")}>
                  How It Works
                </Link>

                <Link href="/settlement-advances" className={linkClass("/settlement-advances")}>
                  Settlement Advances
                </Link>

                <Link href="/lawsuit-funding" className={linkClass("/lawsuit-funding")}>
                  Litigation Financing
                </Link>

                <Link href="/law-firm-financing" className={linkClass("/law-firm-financing")}>
                  Law Firm Capital
                </Link>

                <Link href="/business-funding" className={linkClass("/business-funding")}>
                  Business Capital
                </Link>

                <Link href="/project-funding" className={linkClass("/project-funding")}>
                  Project Funding
                </Link>

                {user ? (
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-red-600 ml-4"
                  >
                    Logout
                  </button>
                ) : (
                  <Link href="/portal/login" className="text-gray-700 hover:text-teal-600 ml-4">
                    Login
                  </Link>
                )}

                <button
                  onClick={() => router.push("/contact")}
                  className="text-gray-700 hover:text-teal-600"
                >
                  Contact
                </button>

              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-2xl"
              >
                ☰
              </button>

            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
              <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium">

                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
                <Link href="/settlement-advances" onClick={() => setMenuOpen(false)}>Settlement Advances</Link>
                <Link href="/lawsuit-funding" onClick={() => setMenuOpen(false)}>Litigation Financing</Link>
                <Link href="/law-firm-financing" onClick={() => setMenuOpen(false)}>Law Firm Capital</Link>
                <Link href="/business-funding" onClick={() => setMenuOpen(false)}>Business Capital</Link>
                <Link href="/project-funding" onClick={() => setMenuOpen(false)}>Project Funding</Link>

                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <Link href="/portal/login" onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                )}

                <button
                  onClick={() => {
                    router.push("/contact");
                    setMenuOpen(false);
                  }}
                >
                  Contact
                </button>

              </div>
            )}

          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
          {children}
        </main>

        {/* FOOTER (UPGRADED) */}
        <footer className="mt-20 border-t pt-10 pb-12 text-center text-sm text-gray-600">
          <div className="max-w-4xl mx-auto px-4 space-y-3">

            <div className="font-semibold text-gray-900">
              MJF Capital
            </div>

            <div>
              Structured Finance Solutions
            </div>

            <div className="pt-2">
              First Canadian Place<br />
              100 King St W #5600<br />
              Toronto, ON M5X 1C9<br />
              Canada
            </div>

            <div className="pt-2 font-medium">
              Tel:{" "}
              <a
                href="tel:+16476933330"
                className="hover:text-teal-600 transition"
              >
                (647) 693-3330
              </a>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <Link href="/privacy" className="hover:text-black transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-black transition">
                Terms of Service
              </Link>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <FaFacebook size={16} className="hover:text-teal-600 cursor-pointer transition" />
              <FaTwitter size={16} className="hover:text-teal-600 cursor-pointer transition" />
              <FaLinkedin size={16} className="hover:text-teal-600 cursor-pointer transition" />
            </div>

          </div>
        </footer>

        {/* CALL BUTTON (mobile only) */}
        <a
          href="tel:+16476933330"
          className="fixed bottom-6 left-6 z-50 bg-black text-white px-6 py-3 rounded-md shadow-lg hover:bg-gray-800 transition text-sm font-medium md:hidden"
        >
          📞 Call Now
        </a>

        {/* APPLY BUTTON */}
        <Link
          href="/apply"
          className="fixed bottom-6 right-6 z-50 bg-black text-white px-6 py-3 rounded-md shadow-lg hover:bg-gray-800 transition text-sm font-medium"
        >
          Apply Now
        </Link>

      </body>
    </html>
  );
}