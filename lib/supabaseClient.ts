import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uwmbktxpsvibsmlxrsps.supabase.co";
const supabaseKey = "sb_publishable_exMP7qXCNtZ00iFp50yRrw_uXMNsyw3";

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function uploadFile(file: File): Promise<string | null> {
  try {
    const filePath = `uploads/${Date.now()}_${file.name}`;

    // 📤 Upload to storage
    const { error: uploadError } = await supabase.storage
      .from("documents")
      .upload(filePath, file);

    if (uploadError) {
      console.error("Upload error:", uploadError);
      return null;
    }

    // 🔗 Get public URL
    const { data: urlData } = supabase.storage
      .from("documents")
      .getPublicUrl(filePath);

    const publicUrl = urlData.publicUrl;

    // 💾 Save to database
    const { error: dbError } = await supabase.from("documents").insert([
      {
        file_name: file.name,
        file_path: filePath,
      },
    ]);

    if (dbError) {
      console.error("DB error:", dbError);
      return null;
    }

    console.log("Upload + DB save successful");

    return publicUrl;

  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}