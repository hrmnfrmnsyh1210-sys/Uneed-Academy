import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { N as NuxtLink } from '../virtual/entry.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, N as withCtx, X as createTextVNode, Y as ssrInterpolate, E as ssrRenderComponent, G as createVNode, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/student/certificates.vue?vue&type=script&setup=true&lang.ts
var certificates_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "certificates",
	__ssrInlineRender: true,
	setup(__props) {
		const certificates = [];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8" }, _attrs))}><div class="mb-6"><h1 class="text-2xl font-extrabold text-slate-900">Sertifikat Saya</h1><p class="text-sm text-slate-500 mt-1">Sertifikat digital yang telah kamu dapatkan.</p></div>`);
			if (certificates.length === 0) {
				_push(`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="text-6xl mb-4">📜</div><h3 class="text-lg font-bold text-slate-700 mb-2">Belum ada sertifikat</h3><p class="text-sm text-slate-400 mb-6 max-w-xs">Selesaikan semua quest dalam sebuah kelas untuk mendapatkan sertifikat.</p>`);
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: "/student/classes",
					class: "px-6 py-3 rounded-xl text-white text-sm font-bold transition hover:opacity-90",
					style: { "background": "linear-gradient(135deg,#14b8a6,#0ea5e9)" }
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Lihat Kelas `);
						else return [createTextVNode(" Lihat Kelas ")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else {
				_push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
				ssrRenderList$2(certificates, (cert) => {
					_push(`<div class="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition"><div class="flex items-start gap-4"><div class="h-14 w-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0" style="background:linear-gradient(135deg,#f3e8ff,#e0e7ff);">📜</div><div class="flex-1"><div class="font-bold text-slate-800 mb-1">${ssrInterpolate(cert.class)}</div><div class="text-xs text-slate-500 mb-3">Diterbitkan: ${ssrInterpolate(cert.date)}</div>`);
					_push(ssrRenderNuxtLink(NuxtLink, {
						to: `/verify/${cert.code}`,
						class: "text-xs font-bold text-teal-600 hover:text-teal-800 flex items-center gap-1 transition"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(` Lihat Sertifikat `);
								_push(ssrRenderComponent(Icon_default, {
									name: "i-heroicons-arrow-right",
									class: "w-3.5 h-3.5"
								}, null, _parent, _scopeId));
							} else return [createTextVNode(" Lihat Sertifikat "), createVNode(Icon_default, {
								name: "i-heroicons-arrow-right",
								class: "w-3.5 h-3.5"
							})];
						}),
						_: 2
					}, _parent));
					_push(`</div></div></div>`);
				});
				_push(`<!--]--></div>`);
			}
			_push(`</div>`);
		};
	}
});
// app/pages/student/certificates.vue
var _sfc_setup = certificates_vue_vue_type_script_setup_true_lang_default.setup;
certificates_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/certificates.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var certificates_default = certificates_vue_vue_type_script_setup_true_lang_default;

export { certificates_default as default };
//# sourceMappingURL=certificates-1Ie1E8mI.mjs.map
