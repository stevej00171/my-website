import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uwmbktxpsvibsmlxrsps.supabase.co'
const supabaseKey = 'sb_publishable_exMP7qXCNtZ00iFp50yRrw_uXMNsyw3'

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function uploadFile(file) {
  const filePath = `uploads/${Date.now()}_${file.name}`

  // 1. Upload to storage
  const { data, error } = await supabase.storage
    .from('documents')
    .upload(filePath, file)

  if (error) {
    console.error('Upload error:', error)
    return
  }

  console.log('Upload success:', data)

  // 2. Save to database
  const { error: dbError } = await supabase.from('documents').insert([
    {
      file_name: file.name,
      file_path: filePath,
    }
  ])

  if (dbError) {
    console.error('DB error:', dbError)
    return
  }

  console.log('Saved to database')
}
