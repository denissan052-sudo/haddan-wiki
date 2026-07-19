import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_M3r2tmA-.mjs';
import { manifest } from './manifest_D6zKNql2.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/article/_slug_.astro.mjs');
const _page2 = () => import('./pages/_section_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/article/[slug].astro", _page1],
    ["src/pages/[section].astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0f6d74bc-5a65-42d1-9c3f-58de86e90053"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
