

import { createClient } from '@/lib/supabase/server'

export async function getCases() {
  const supabase = await createClient()

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    throw new Error('You must be signed in to view cases')
  }

  const { data, error } = await supabase
    .from('cases')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching cases:', error.message)
    throw new Error('Could not fetch cases')
  }

  return data
}

