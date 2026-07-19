/* empty css                                        */
import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_CzcP1_xN.mjs';
import 'piccolore';
import { c as getArticleBySlug, i as isEditor, $ as $$Layout, a as $$Header, b as $$Footer } from '../../chunks/supabase_BDe7DXET.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let article = null;
  let error = null;
  let editor = false;
  try {
    article = await getArticleBySlug(slug);
    try {
      editor = await isEditor();
    } catch (e) {
      editor = false;
    }
  } catch (e) {
    error = e.message;
  }
  const sectionNames = {
    mechanics: "\u041C\u0435\u0445\u0430\u043D\u0438\u043A\u0430",
    magic: "\u041C\u0430\u0433\u0438\u044F",
    events: "\u0418\u0432\u0435\u043D\u0442\u044B",
    dungeons: "\u041F\u043E\u0434\u0437\u0435\u043C\u0435\u043B\u044C\u044F",
    items: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B",
    classes: "\u041A\u043B\u0430\u0441\u0441\u044B"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": article?.title || "\u0421\u0442\u0430\u0442\u044C\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<article class="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"> ${error || !article ? renderTemplate`<div class="text-center py-20"> <div class="w-20 h-20 rounded-full bg-haddan-card border border-haddan-border flex items-center justify-center text-4xl mx-auto mb-4">😕</div> <h2 class="font-cinzel text-xl font-semibold text-haddan-text mb-2">Статья не найдена</h2> <p class="text-haddan-text-secondary">${error || "\u0421\u0442\u0430\u0442\u044C\u044F \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0438\u043B\u0438 \u0435\u0449\u0451 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0430."}</p> <a href="/haddan-wiki/" class="btn-primary mt-6">На главную</a> </div>` : renderTemplate`<div> <!-- Breadcrumbs --> <div class="flex items-center gap-3 mb-8 text-sm"> <a href="/haddan-wiki/" class="text-haddan-muted hover:text-haddan-gold-light transition-colors">Главная</a> <span class="text-haddan-muted">/</span> <a${addAttribute(`/haddan-wiki/${article.section}`, "href")} class="text-haddan-muted hover:text-haddan-gold-light transition-colors">${sectionNames[article.section] || article.section}</a> <span class="text-haddan-muted">/</span> <span class="text-haddan-gold">${article.title}</span> </div> <!-- Admin Panel --> ${editor && renderTemplate`<div class="admin-bar mb-8"> <span class="admin-bar-text">👑 Режим редактора</span> <button id="edit-article-btn" class="btn-success text-sm py-2 px-4">✏️ Редактировать</button> <button id="delete-article-btn" class="btn-danger text-sm py-2 px-4">🗑️ Удалить</button> </div>`} <!-- Article Header --> <div class="mb-10"> <div class="flex flex-wrap items-center gap-3 mb-4"> ${article.tags?.map((tag) => renderTemplate`<span class="px-3 py-1 rounded-full text-xs font-medium border bg-haddan-gold/10 text-haddan-gold border-haddan-gold/20">${tag}</span>`)} </div> <h1 class="font-cinzel text-3xl md:text-4xl font-bold text-haddan-text mb-4">${article.title}</h1> ${article.description && renderTemplate`<p class="text-lg text-haddan-text-secondary">${article.description}</p>`} <div class="flex items-center gap-4 mt-4 text-sm text-haddan-muted"> <span>📅 ${new Date(article.updated_at).toLocaleDateString("ru-RU")}</span> ${article.status === "draft" && renderTemplate`<span class="px-2 py-1 rounded bg-haddan-orange/10 text-haddan-orange text-xs">Черновик</span>`} </div> </div> <!-- Article Content --> <div class="prose max-w-none" id="article-content-display"> <div class="text-haddan-text-secondary">${article.content}</div> </div> <!-- Article Footer --> <div class="mt-16 pt-8 border-t border-haddan-border"> <div class="flex items-center justify-between"> <a${addAttribute(`/haddan-wiki/${article.section}`, "href")} class="btn-outline text-sm py-2 px-4">← Назад в раздел</a> <a href="https://forum.haddan.ru" target="_blank" class="text-sm text-haddan-muted hover:text-haddan-gold-light transition-colors">Обсудить на форуме →</a> </div> </div> </div>`} </article>  ${editor && article && renderTemplate`<div id="edit-modal" class="modal-overlay hidden"> <div class="modal-content" style="max-width: 900px;"> <div class="modal-header"> <h2 class="modal-title">Редактировать статью</h2> <button id="close-edit-modal" class="modal-close">×</button> </div> <form id="edit-form" class="space-y-4"> <input type="hidden" id="edit-id"${addAttribute(article.id, "value")}> <div class="form-group"> <label class="form-label">Название</label> <input type="text" id="edit-title" class="form-input"${addAttribute(article.title, "value")} required> </div> <div class="form-group"> <label class="form-label">URL (slug)</label> <input type="text" id="edit-slug" class="form-input"${addAttribute(article.slug, "value")} required> </div> <div class="form-group"> <label class="form-label">Описание</label> <input type="text" id="edit-description" class="form-input"${addAttribute(article.description, "value")}> </div> <div class="form-group"> <label class="form-label">Раздел</label> <select id="edit-section" class="form-select"> <option value="mechanics"${addAttribute(article.section === "mechanics", "selected")}>Механика</option> <option value="magic"${addAttribute(article.section === "magic", "selected")}>Магия</option> <option value="events"${addAttribute(article.section === "events", "selected")}>Ивенты</option> <option value="dungeons"${addAttribute(article.section === "dungeons", "selected")}>Подземелья</option> <option value="items"${addAttribute(article.section === "items", "selected")}>Предметы</option> <option value="classes"${addAttribute(article.section === "classes", "selected")}>Классы</option> </select> </div> <div class="form-group"> <label class="form-label">Теги (через запятую)</label> <input type="text" id="edit-tags" class="form-input"${addAttribute(article.tags?.join(", ") || "", "value")}> </div> <div class="form-group"> <label class="form-label">Статус</label> <select id="edit-status" class="form-select"> <option value="draft"${addAttribute(article.status === "draft", "selected")}>Черновик</option> <option value="published"${addAttribute(article.status === "published", "selected")}>Опубликовано</option> </select> </div> <div class="form-group"> <label class="form-label">Контент (Markdown)</label> <textarea id="edit-content" class="form-textarea" style="min-height: 300px;" required>${article.content}</textarea> </div> <div class="flex gap-3"> <button type="submit" class="btn-primary">Сохранить изменения</button> <button type="button" id="cancel-edit" class="btn-outline">Отмена</button> </div> </form> <div id="edit-error" class="mt-4 p-3 bg-haddan-red/10 border border-haddan-red/30 rounded-lg text-haddan-red text-sm hidden"></div> </div> </div>`}${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${editor && article && renderTemplate`${renderScript($$result, "C:/Users/Admin/Downloads/haddan-wiki-supabase/src/pages/article/[slug].astro?astro&type=script&index=0&lang.ts")}`}`;
}, "C:/Users/Admin/Downloads/haddan-wiki-supabase/src/pages/article/[slug].astro", void 0);

const $$file = "C:/Users/Admin/Downloads/haddan-wiki-supabase/src/pages/article/[slug].astro";
const $$url = "/article/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
