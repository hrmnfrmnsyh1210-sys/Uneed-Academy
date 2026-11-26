import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { N as NuxtLink } from '../virtual/entry.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, N as withCtx, E as ssrRenderComponent, G as createVNode, X as createTextVNode, L as useSSRContext } from '../_/vue.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'bcryptjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'consola';
import 'node:fs';
import 'node:path';
import 'unhead/utils';
import 'pinia';
import 'fnv1a-64';
import 'object-identity';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import './components-CSp8KrgW.mjs';
import '@iconify/utils/lib/css/icon';

// app/pages/[...404].vue?vue&type=script&setup=true&lang.ts
var ____404__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "[...404]",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 text-center" }, _attrs))}><div class="max-w-md"><div class="text-6xl mb-4">🔍</div><h1 class="text-2xl font-extrabold text-slate-900 mb-2">Halaman Tidak Ditemukan</h1><p class="text-sm text-slate-500 mb-8">Halaman yang kamu cari tidak ada atau telah dipindahkan.</p>`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/",
				class: "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold transition hover:opacity-90",
				style: { "background": "linear-gradient(135deg,#14b8a6,#0ea5e9)" }
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-home",
							class: "w-4 h-4"
						}, null, _parent, _scopeId));
						_push(` Kembali ke Beranda `);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-home",
						class: "w-4 h-4"
					}), createTextVNode(" Kembali ke Beranda ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div>`);
		};
	}
});
// app/pages/[...404].vue
var _sfc_setup = ____404__vue_vue_type_script_setup_true_lang_default.setup;
____404__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...404].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ____404__default = ____404__vue_vue_type_script_setup_true_lang_default;

export { ____404__default as default };
//# sourceMappingURL=_...404_-BG_p1SUM.mjs.map
