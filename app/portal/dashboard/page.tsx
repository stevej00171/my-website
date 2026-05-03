"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      window.location.href = "/"; // 🔒 redirect if not logged in
      return;
    }

    setUser(data.user);
    setLoading(false);
  };

  if (loading) {
    return <p className="p-8">Checking access...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Client Dashboard</h1>

      <p className="text-sm text-gray-600 mt-2">
        Logged in as: {user.email}
      </p>
    </div>
  );
}