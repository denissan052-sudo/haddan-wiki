# Haddan Wiki — Энциклопедия мира Хаддан (Supabase Edition)

Неофициальная энциклопедия браузерной MMORPG Haddan с CMS на Supabase.

## 🚀 Быстрый старт

```bash
npm install
npm run dev
```

## 📁 Структура

```
src/
├── components/      # UI-компоненты
├── layouts/         # Шаблоны страниц
├── pages/           # Страницы
│   ├── index.astro       # Главная
│   ├── [section].astro   # Раздел (список статей)
│   └── article/
│       └── [slug].astro  # Отдельная статья
├── lib/
│   └── supabase.js  # API для работы с Supabase
└── islands/         # Интерактивные компоненты
```

## 📝 Как добавить статью

### Для редакторов (через сайт):
1. Войди в аккаунт
2. Перейди в нужный раздел
3. Нажми "+ Добавить статью"
4. Заполни форму и сохрани

### Для администраторов (через Supabase):
1. Открой Supabase → Table Editor → articles
2. Нажми "Insert row"
3. Заполни поля:
   - `title`: Название
   - `slug`: URL-имя (латиница, через дефис)
   - `description`: Краткое описание
   - `section`: Раздел (mechanics, magic, events, dungeons, items, classes)
   - `content`: Текст в Markdown
   - `tags`: Массив тегов
   - `status`: `published` или `draft`

## 🔐 Роли пользователей

| Роль | Возможности |
|------|-------------|
| `user` | Чтение статей |
| `editor` | Добавление, редактирование, удаление статей |
| `admin` | Полный доступ |

## 🛠️ Технологии

- Astro + Tailwind CSS
- Supabase (Auth + Database)

## 📦 Деплой

GitHub Pages + Supabase (бесплатно)
