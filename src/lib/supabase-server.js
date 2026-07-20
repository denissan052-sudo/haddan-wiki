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
    'Content-Type': 'application/json'
  };
  
  if (method === 'POST') headers['Prefer'] = 'return=representation';
  if (method === 'PATCH') headers['Prefer'] = 'return=representation';
  
  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);
  
  const response = await fetch(url, options);
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Supabase error');
  }
  
  return data;
}

export async function getArticles(section = null) {
  let query = { select: '*', status: 'eq.published', order: 'created_at.desc' };
  if (section) query.section = `eq.${section}`;
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
export async function isEditor() {
  // На сервере без сессии не проверить роль
  // Возвращаем false, проверка будет на клиенте
  return false;
}