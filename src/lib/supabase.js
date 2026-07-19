const supabaseUrl = 'https://hnxqzwngtvjdeiuinxnv.supabase.co';
const supabaseKey = 'sb_publishable_lWrCmmU8HO9u0KqoLCf0MA_bPuv-lEP';

async function supabaseRequest(table, method = 'GET', body = null, query = null) {
  let url = `${supabaseUrl}/rest/v1/${table}`;
  if (query) {
    url += '?' + new URLSearchParams(query).toString();
  }
  
  const headers = {
    'apikey': supabaseKey,
    'Authorization': `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
    'Prefer': method === 'POST' ? 'return=representation' : method === 'PATCH' ? 'return=representation' : ''
  };

  const options = {
    method,
    headers
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Supabase error');
  }
  
  return data;
}

// Функции для работы со статьями
export async function getArticles(section = null) {
  let query = { select: '*', status: 'eq.published', order: 'created_at.desc' };
  if (section) {
    query.section = `eq.${section}`;
  }
  return await supabaseRequest('articles', 'GET', null, query);
}

export async function getArticleBySlug(slug) {
  const data = await supabaseRequest('articles', 'GET', null, {
    select: '*',
    slug: `eq.${slug}`,
    status: 'eq.published',
    limit: 1
  });
  return data[0] || null;
}

export async function getAllArticlesAdmin() {
  return await supabaseRequest('articles', 'GET', null, {
    select: '*',
    order: 'created_at.desc'
  });
}

export async function createArticle(article) {
  return await supabaseRequest('articles', 'POST', article);
}

export async function updateArticle(id, article) {
  return await supabaseRequest('articles', 'PATCH', article, { id: `eq.${id}` });
}

export async function deleteArticle(id) {
  await supabaseRequest('articles', 'DELETE', null, { id: `eq.${id}` });
  return true;
}

// Функции для авторизации
export async function signUp(email, password, username) {
  const response = await fetch(`${supabaseUrl}/auth/v1/signup`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  const authData = await response.json();
  if (!response.ok) throw new Error(authData.message || 'Auth error');

  if (authData.user) {
    await supabaseRequest('profiles', 'POST', {
      id: authData.user.id,
      username,
      role: 'user'
    });
  }

  return authData;
}

export async function signIn(email, password) {
  const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Auth error');
  return data;
}

export async function signOut() {
  // Просто очищаем локальное состояние
  return true;
}

export async function getCurrentUser() {
  // Для SSR сложно получить текущего пользователя без cookies
  // Возвращаем null, пользователь будет проверяться на клиенте
  return null;
}

export async function isEditor() {
  const user = await getCurrentUser();
  return user?.profile?.role === 'editor' || user?.profile?.role === 'admin';
}