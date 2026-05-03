import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/supabase";

export async function POST(req: Request) {
  const supabase = getSupabaseClient();

  const body = await req.json();

  const { data, error } = await supabase
    .from("leads")
    .insert([body]);

  if (error) {
    console.error("Insert error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, data });
}