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

// app/pages/terms.vue?vue&type=script&setup=true&lang.ts
var terms_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "terms",
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
			_push(`<span class="text-slate-300 text-sm">/</span><span class="text-sm text-slate-500">Syarat &amp; Ketentuan</span></nav><div class="max-w-3xl mx-auto px-6 py-12"><h1 class="text-3xl font-extrabold text-slate-900 mb-2">Syarat &amp; Ketentuan</h1><p class="text-sm text-slate-500 mb-8">Terakhir diperbarui: 1 Januari 2026</p><div class="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 text-sm text-slate-600 leading-relaxed"><div><h2 class="font-bold text-slate-800 text-base mb-2">1. Penerimaan Syarat</h2><p>Dengan mengakses atau menggunakan platform Uneed Academy, Anda menyetujui syarat dan ketentuan ini.</p></div><div><h2 class="font-bold text-slate-800 text-base mb-2">2. Penggunaan Platform</h2><p>Platform Uneed Academy hanya boleh digunakan untuk tujuan pembelajaran yang sah. Dilarang menyalahgunakan, mendistribusikan, atau memperbanyak konten tanpa izin.</p></div><div><h2 class="font-bold text-slate-800 text-base mb-2">3. Pembayaran &amp; Refund</h2><p>Pembayaran kelas bersifat final. Refund dapat diajukan dalam 7 hari setelah pembelian jika kelas belum dimulai.</p></div><div><h2 class="font-bold text-slate-800 text-base mb-2">4. Sertifikat</h2><p>Sertifikat diterbitkan setelah seluruh quest dalam kelas berhasil diselesaikan dan disetujui oleh mentor.</p></div><div><h2 class="font-bold text-slate-800 text-base mb-2">5. Hubungi Kami</h2><p>Pertanyaan lebih lanjut dapat dikirim ke <a href="mailto:hello@uneed.id" class="text-teal-600 font-semibold hover:underline">hello@uneed.id</a></p></div></div></div></div>`);
		};
	}
});
// app/pages/terms.vue
var _sfc_setup = terms_vue_vue_type_script_setup_true_lang_default.setup;
terms_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var terms_default = terms_vue_vue_type_script_setup_true_lang_default;

export { terms_default as default };
//# sourceMappingURL=terms-_T7LztHO.mjs.map
