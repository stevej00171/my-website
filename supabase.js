import { createClient } from '@supabase/supabase-js';

export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createClient(supabaseUrl, supabaseKey);
}

export async function uploadFile(file) {
  const supabase = getSupabaseClient();

  const filePath = `uploads/${Date.now()}_${file.name}`;

  // 1. Upload to storage
  const { data, error } = await supabase.storage
    .from('documents')
    .upload(filePath, file);

  if (error) {
    console.error('Upload error:', error);
    return;
  }

  console.log('Upload success:', data);

  // 2. Save to database
  const { error: dbError } = await supabase.from('documents').insert([
    {
      file_name: file.name,
      file_path: filePath,
    },
  ]);

  if (dbError) {
    console.error('DB error:', dbError);
    return;
  }

  console.log('Saved to database');
}