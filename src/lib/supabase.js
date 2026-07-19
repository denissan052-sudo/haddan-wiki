import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hnxqzwngtvjdeiuinxnv.supabase.co';
const supabaseKey = 'sb_publishable_lWrCmmU8HO9u0KqoLCf0MA_bPuv-lEP';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Функции для работы со статьями
export async function getArticles(section = null) {
  let query = supabase.from('articles').select('*');
  if (section) {
    query = query.eq('section', section);
  }
  query = query.eq('status', 'published').order('created_at', { ascending: false });
  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function getArticleBySlug(slug) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
  if (error) throw error;
  return data;
}

export async function getAllArticlesAdmin() {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function createArticle(article) {
  const { data, error } = await supabase
    .from('articles')
    .insert(article)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateArticle(id, article) {
  const { data, error } = await supabase
    .from('articles')
    .update(article)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteArticle(id) {
  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

// Функции для авторизации
export async function signUp(email, password, username) {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });
  if (authError) throw authError;

  // Создаём профиль
  if (authData.user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: authData.user.id,
        username,
        role: 'user'
      });
    if (profileError) throw profileError;
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
