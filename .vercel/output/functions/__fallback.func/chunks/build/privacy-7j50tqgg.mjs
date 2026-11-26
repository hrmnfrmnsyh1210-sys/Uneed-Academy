import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { N as NuxtLink } from '../virtual/entry.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, N as withCtx, G as createVNode, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/privacy.vue?vue&type=script&setup=true&lang.ts
var privacy_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "privacy",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 flex flex-col" }, _attrs))}><nav class="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-3">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/",
				class: "flex items-center gap-2.5"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="h-8 w-8 rounded-xl bg-gradient-to-br from-teal-400 to-sky-500 flex items-center justify-center text-white font-black text-sm"${_scopeId}>U</div><span class="font-extrabold text-slate-900 text-sm"${_scopeId}>Uneed Academy</span>`);
					else return [createVNode("div", { class: "h-8 w-8 rounded-xl bg-gradient-to-br from-teal-400 to-sky-500 flex items-center justify-center text-white font-black text-sm" }, "U"), createVNode("span", { class: "font-extrabold text-slate-900 text-sm" }, "Uneed Academy")];
				}),
				_: 1
			}, _parent));
			_push(`<span class="text-slate-300 text-sm">/</span><span class="text-sm text-slate-500">Kebijakan Privasi</span></nav><div class="max-w-3xl mx-auto px-6 py-12"><h1 class="text-3xl font-extrabold text-slate-900 mb-2">Kebijakan Privasi</h1><p class="text-sm text-slate-500 mb-8">Terakhir diperbarui: 1 Januari 2026</p><div class="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 text-sm text-slate-600 leading-relaxed"><div><h2 class="font-bold text-slate-800 text-base mb-2">1. Data yang Dikumpulkan</h2><p>Kami mengumpulkan nama, email, nomor telepon, dan data aktivitas pembelajaran untuk meningkatkan layanan kami.</p></div><div><h2 class="font-bold text-slate-800 text-base mb-2">2. Penggunaan Data</h2><p>Data digunakan untuk autentikasi, komunikasi, dan perbaikan pengalaman belajar. Kami tidak menjual data kepada pihak ketiga.</p></div><div><h2 class="font-bold text-slate-800 text-base mb-2">3. Keamanan Data</h2><p>Data disimpan dengan enkripsi standar industri. Password disimpan dalam bentuk hash menggunakan bcrypt.</p></div><div><h2 class="font-bold text-slate-800 text-base mb-2">4. Hak Pengguna</h2><p>Anda berhak meminta penghapusan akun dan data pribadi kapan saja dengan menghubungi kami.</p></div><div><h2 class="font-bold text-slate-800 text-base mb-2">5. Hubungi Kami</h2><p>Pertanyaan privasi dapat dikirim ke <a href="mailto:privacy@uneed.id" class="text-teal-600 font-semibold hover:underline">privacy@uneed.id</a></p></div></div></div></div>`);
		};
	}
});
// app/pages/privacy.vue
var _sfc_setup = privacy_vue_vue_type_script_setup_true_lang_default.setup;
privacy_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var privacy_default = privacy_vue_vue_type_script_setup_true_lang_default;

export { privacy_default as default };
//# sourceMappingURL=privacy-7j50tqgg.mjs.map
