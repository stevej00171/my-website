import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ✅ THIS is what was missing (POST handler)
export async function POST(req: Request) {
  try {
    const { id, status } = await req.json();

    console.log("Updating:", id, status);

    if (!id || !status) {
      return NextResponse.json(
        { error: "Missing id or status" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Update error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}