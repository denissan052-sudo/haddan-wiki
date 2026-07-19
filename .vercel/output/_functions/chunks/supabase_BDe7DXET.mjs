import { e as createComponent, g as addAttribute, n as renderHead, o as renderSlot, r as renderTemplate, h as createAstro, m as maybeRenderHead, l as renderScript } from './astro/server_CzcP1_xN.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */
import { createClient } from '@supabase/supabase-js';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "\u042D\u043D\u0446\u0438\u043A\u043B\u043E\u043F\u0435\u0434\u0438\u044F \u043C\u0438\u0440\u0430 \u0425\u0430\u0434\u0434\u0430\u043D" } = Astro2.props;
  return renderTemplate`<html lang="ru"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} — Haddan Wiki</title><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Noto+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Admin/Downloads/haddan-wiki-supabase/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", href: "/haddan-wiki/" },
    { label: "\u041C\u0435\u0445\u0430\u043D\u0438\u043A\u0430", href: "/haddan-wiki/mechanics" },
    { label: "\u041C\u0430\u0433\u0438\u044F", href: "/haddan-wiki/magic" },
    { label: "\u0418\u0432\u0435\u043D\u0442\u044B", href: "/haddan-wiki/events" },
    { label: "\u041F\u043E\u0434\u0437\u0435\u043C\u0435\u043B\u044C\u044F", href: "/haddan-wiki/dungeons" },
    { label: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B", href: "/haddan-wiki/items" },
    { label: "\u041A\u043B\u0430\u0441\u0441\u044B", href: "/haddan-wiki/classes" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 bg-haddan-bg/95 backdrop-blur-xl border-b border-haddan-border"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16 md:h-[72px]"> <a href="/haddan-wiki/" class="flex items-center gap-3"> <div class="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-haddan-gold-dark to-haddan-gold rounded-lg flex items-center justify-center font-cinzel font-black text-lg text-haddan-bg">H</div> <div class="hidden sm:block"> <div class="font-cinzel font-bold text-lg text-haddan-gold-light tracking-wide">Haddan</div> <div class="text-[10px] text-haddan-muted uppercase tracking-[0.2em] -mt-1">Энциклопедия мира</div> </div> </a> <nav class="hidden lg:flex items-center gap-1"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentPath === item.href || currentPath.startsWith(item.href + "/") ? "text-haddan-gold-light bg-haddan-gold/10" : "text-haddan-text-secondary hover:text-haddan-gold-light hover:bg-haddan-gold/5"}`, "class")}> ${item.label} </a>`)} </nav> <div class="flex items-center gap-3"> <button id="auth-btn" class="w-10 h-10 rounded-lg bg-haddan-card border border-haddan-border flex items-center justify-center text-haddan-text-secondary hover:text-haddan-gold-light transition-all" title="Войти"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> </button> <a href="https://ru.haddan.ru" target="_blank" class="hidden md:inline-flex btn-outline text-sm py-2 px-4">Играть</a> <a href="https://forum.haddan.ru" target="_blank" class="hidden md:inline-flex btn-primary text-sm py-2 px-4">Форум</a> </div> </div> </div> </header> <!-- Auth Modal (скрыта по умолчанию) --> <div id="auth-modal" class="modal-overlay" style="display: none;"> <div class="modal-content"> <div class="modal-header"> <h2 class="modal-title">Вход в аккаунт</h2> <button id="close-auth" class="modal-close">×</button> </div> <div id="auth-forms"> <!-- Login Form --> <form id="login-form" class="space-y-4"> <div class="form-group"> <label class="form-label">Email</label> <input type="email" id="login-email" class="form-input" placeholder="your@email.com" required> </div> <div class="form-group"> <label class="form-label">Пароль</label> <input type="password" id="login-password" class="form-input" placeholder="••••••••" required> </div> <button type="submit" class="btn-primary w-full justify-center">Войти</button> <p class="text-center text-sm text-haddan-muted mt-4">
Нет аккаунта? <button type="button" id="show-register" class="text-haddan-gold hover:underline">Зарегистрироваться</button> </p> </form> <!-- Register Form (hidden by default) --> <form id="register-form" class="space-y-4 hidden"> <div class="form-group"> <label class="form-label">Никнейм</label> <input type="text" id="reg-username" class="form-input" placeholder="Ваш ник" required> </div> <div class="form-group"> <label class="form-label">Email</label> <input type="email" id="reg-email" class="form-input" placeholder="your@email.com" required> </div> <div class="form-group"> <label class="form-label">Пароль</label> <input type="password" id="reg-password" class="form-input" placeholder="Минимум 6 символов" required> </div> <button type="submit" class="btn-primary w-full justify-center">Зарегистрироваться</button> <p class="text-center text-sm text-haddan-muted mt-4">
Уже есть аккаунт? <button type="button" id="show-login" class="text-haddan-gold hover:underline">Войти</button> </p> </form> </div> <div id="auth-error" class="mt-4 p-3 bg-haddan-red/10 border border-haddan-red/30 rounded-lg text-haddan-red text-sm hidden"></div> </div> </div> ${renderScript($$result, "C:/Users/Admin/Downloads/haddan-wiki-supabase/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Admin/Downloads/haddan-wiki-supabase/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-haddan-bg-secondary border-t border-haddan-border"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12"> <div> <h3 class="font-cinzel text-sm font-semibold text-haddan-text uppercase tracking-wider mb-4">Игра</h3> <ul class="space-y-2"> <li><a href="https://ru.haddan.ru" target="_blank" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">Официальный сайт</a></li> <li><a href="https://forum.haddan.ru" target="_blank" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">Форум</a></li> <li><a href="https://vk.com/haddangame" target="_blank" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">VK-группа</a></li> </ul> </div> <div> <h3 class="font-cinzel text-sm font-semibold text-haddan-text uppercase tracking-wider mb-4">Разделы</h3> <ul class="space-y-2"> <li><a href="/haddan-wiki/mechanics" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">Механика</a></li> <li><a href="/haddan-wiki/magic" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">Магия</a></li> <li><a href="/haddan-wiki/events" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">Ивенты</a></li> <li><a href="/haddan-wiki/dungeons" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">Подземелья</a></li> </ul> </div> <div> <h3 class="font-cinzel text-sm font-semibold text-haddan-text uppercase tracking-wider mb-4">Сообщество</h3> <ul class="space-y-2"> <li><a href="https://forum.haddan.ru" target="_blank" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">Форум</a></li> <li><a href="https://vk.com/haddangame" target="_blank" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">ВКонтакте</a></li> <li><a href="#" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">Discord</a></li> </ul> </div> <div> <h3 class="font-cinzel text-sm font-semibold text-haddan-text uppercase tracking-wider mb-4">О проекте</h3> <ul class="space-y-2"> <li><a href="#" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">О нас</a></li> <li><a href="#" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">Контакты</a></li> <li><a href="#" class="text-sm text-haddan-text-secondary hover:text-haddan-gold-light transition-colors">Правила</a></li> </ul> </div> </div> <div class="border-t border-haddan-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4"> <p class="text-sm text-haddan-muted text-center md:text-left">© 2026 Haddan Wiki. Неофициальная энциклопедия игроков.</p> <div class="flex items-center gap-3"> <a href="https://vk.com/haddangame" target="_blank" class="w-10 h-10 rounded-lg bg-haddan-card border border-haddan-border flex items-center justify-center text-haddan-text-secondary hover:text-haddan-gold-light hover:border-haddan-gold transition-all">VK</a> <a href="https://forum.haddan.ru" target="_blank" class="w-10 h-10 rounded-lg bg-haddan-card border border-haddan-border flex items-center justify-center text-haddan-text-secondary hover:text-haddan-gold-light hover:border-haddan-gold transition-all">F</a> </div> </div> </div> </footer>`;
}, "C:/Users/Admin/Downloads/haddan-wiki-supabase/src/components/Footer.astro", void 0);

const supabaseUrl = 'https://hnxqzwngtvjdeiuinxnv.supabase.co';
const supabaseKey = 'sb_publishable_lWrCmmU8HO9u0KqoLCf0MA_bPuv-lEP';

const supabase = createClient(supabaseUrl, supabaseKey);

// Функции для работы со статьями
async function getArticles(section = null) {
  let query = supabase.from('articles').select('*');
  if (section) {
    query = query.eq('section', section);
  }
  query = query.eq('status', 'published').order('created_at', { ascending: false });
  const { data, error } = await query;
  if (error) throw error;
  return data;
}

async function getArticleBySlug(slug) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
  if (error) throw error;
  return data;
}

async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return { ...user, profile };
}

async function isEditor() {
  const user = await getCurrentUser();
  return user?.profile?.role === 'editor' || user?.profile?.role === 'admin';
}

export { $$Layout as $, $$Header as a, $$Footer as b, getArticleBySlug as c, getArticles as g, isEditor as i };
