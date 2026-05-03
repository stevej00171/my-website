"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase, uploadFile } from "../../lib/supabaseClient";

export default function PortalPage() {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // 🔒 AUTH CHECK (FIXED)
  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/portal/login"); // ✅ correct path
      } else {
        fetchDocuments();
      }

      setCheckingAuth(false);
    }

    checkUser();
  }, []);

  // 📄 FETCH DOCUMENTS
  async function fetchDocuments() {
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch error:", error);
      return;
    }

    setDocuments(data || []);
  }

  // 📤 UPLOAD FILE
  async function handleUpload() {
    if (!file) {
      alert("Select a file first");
      return;
    }

    setLoading(true);

    const url = await uploadFile(file);

    if (url) {
      alert("✅ Uploaded successfully");
      setFile(null);
      fetchDocuments();
    }

    setLoading(false);
  }

  // 🗑 DELETE FILE
  async function handleDelete(doc: any) {
    const confirmDelete = confirm("Delete this document?");
    if (!confirmDelete) return;

    // delete from storage
    await supabase.storage
      .from("documents")
      .remove([doc.file_path]);

    // delete from database
    await supabase
      .from("documents")
      .delete()
      .eq("id", doc.id);

    fetchDocuments();
  }

  // ⬇ DOWNLOAD FILE
  function handleDownload(url: string) {
    window.open(url, "_blank");
  }

  // 🔒 loading screen
  if (checkingAuth) {
    return (
      <div className="p-10 text-center text-gray-500">
        Checking access...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Client Portal</h1>

      {/* UPLOAD */}
      <div className="bg-white p-6 border rounded space-y-4">
        <h2 className="font-medium">Upload Document</h2>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full border p-2 rounded"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* DOCUMENT LIST */}
      <div className="bg-white p-6 border rounded">
        <h2 className="font-medium mb-4">Your Documents</h2>

        {documents.length === 0 ? (
          <p className="text-gray-500 text-sm">No documents yet</p>
        ) : (
          <ul className="space-y-4">
            {documents.map((doc) => {
              const fileUrl = `https://uwmbktxpsvibsmlxrsps.supabase.co/storage/v1/object/public/documents/${doc.file_path}`;

              return (
                <li key={doc.id} className="border p-4 rounded space-y-2">
                  <p className="text-sm font-medium">{doc.file_name}</p>

                  <div className="flex gap-4 text-sm">
                    <button
                      onClick={() => handleDownload(fileUrl)}
                      className="text-blue-600 underline"
                    >
                      Download
                    </button>

                    <button
                      onClick={() => handleDelete(doc)}
                      className="text-red-600 underline"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}