import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hnxqzwngtvjdeiuinxnv.supabase.co';
const supabaseKey = 'sb_publishable_lWrCmmU8HO9u0KqoLCf0MA_bPuv-lEP';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

export async function signUp(email, password, username) {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });
  if (authError) throw authError;

  if (authData.user) {
    await supabase.from('profiles').insert({
      id: authData.user.id,
      username,
      role: 'user'
    });
  }

  return authData;
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return { ...user, profile };
}

export async function isEditor() {
  const user = await getCurrentUser();
  return user?.profile?.role === 'editor' || user?.profile?.role === 'admin';
}