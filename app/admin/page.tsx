"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch leads
  async function fetchLeads() {
    try {
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      setLeads(data);
      console.log("FETCHED LEADS:", data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  // update status
  async function updateStatus(id: number, status: string) {
    console.log("CLICKED:", id, status);

    try {
      const res = await fetch("/api/admin/update-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status }),
      });

      const result = await res.json();
      console.log("API RESPONSE:", result);

      if (!res.ok) {
        alert("Update failed");
        return;
      }

      // 🔥 refetch from DB (guaranteed sync)
      fetchLeads();
    } catch (err) {
      console.error("Update error:", err);
      alert("Something went wrong");
    }
  }

  // status badge styles
  function getStatusStyle(status: string) {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700";
      case "reviewing":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  }

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : leads.length === 0 ? (
        <p>No leads found.</p>
      ) : (
        <div className="space-y-4">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="border p-5 rounded-lg flex justify-between items-center shadow-sm"
            >
              {/* LEFT SIDE */}
              <div>
                <p className="font-semibold text-lg">{lead.name}</p>
                <p className="text-sm text-gray-500">{lead.email}</p>
                {lead.phone && (
                  <p className="text-sm text-gray-600">📞 {lead.phone}</p>
                )}
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-4">
                {/* STATUS BADGE */}
                <span
                  className={`px-3 py-1 text-xs rounded-full capitalize ${getStatusStyle(
                    lead.status || "new"
                  )}`}
                >
                  {lead.status || "new"}
                </span>

                {/* ACTION BUTTONS */}
                <div className="flex gap-2">
                  {lead.status !== "reviewing" &&
                    lead.status !== "approved" && (
                      <button
                        onClick={() =>
                          updateStatus(lead.id, "reviewing")
                        }
                        className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:opacity-90"
                      >
                        Reviewing
                      </button>
                    )}

                  {lead.status !== "approved" && (
                    <button
                      onClick={() =>
                        updateStatus(lead.id, "approved")
                      }
                      className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:opacity-90"
                    >
                      Approve
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}