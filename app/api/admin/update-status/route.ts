import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/supabase";

export async function POST(req: Request) {
  const supabase = getSupabaseClient();

  const { id, status } = await req.json();

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
}