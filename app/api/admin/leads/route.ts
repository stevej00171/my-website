import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/supabase";

export async function GET() {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}