"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: any) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("❌ Login failed: " + error.message);
      setLoading(false);
      return;
    }

    alert("✅ Login successful");
    router.push("/portal"); // 🔥 redirect after login
  }

  return (
    <main className="max-w-md mx-auto px-4 py-24">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Client Portal Login
      </h1>

      <form
        onSubmit={handleLogin}
        className="space-y-4 bg-white p-6 border rounded"
      >
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </main>
  );
}