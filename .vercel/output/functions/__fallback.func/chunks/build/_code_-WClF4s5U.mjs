import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { a as useRoute, N as NuxtLink } from '../virtual/entry.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, E as ssrRenderComponent, Y as ssrInterpolate, u as unref, N as withCtx, X as createTextVNode, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/verify/[code].vue?vue&type=script&setup=true&lang.ts
var _code__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "[code]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const code = computed(() => String(route.params.code || "UA-2026-DEMO001"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen overflow-hidden px-4 bg-[#F0F5FA] text-slate-800 flex items-center justify-center" }, _attrs))}><div class="max-w-xl w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl"><div class="text-center pb-6 border-b border-slate-100"><div class="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-teal-50 text-teal-600 mb-3 border border-teal-200">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-check-badge",
				class: "w-8 h-8"
			}, null, _parent));
			_push(`</div><div><span class="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider"> Sertifikat Digital Terverifikasi </span></div><h1 class="text-2xl font-extrabold text-slate-900 mt-3">Validasi Sertifikat Resmi</h1><p class="text-xs text-slate-500 mt-1">Diterbitkan oleh Uneed Academy di bawah naungan Uneed Developer</p></div><div class="py-5 space-y-3 text-sm"><div class="flex justify-between py-2 border-b border-slate-100"><span class="text-slate-500">Nomor Sertifikat</span><span class="font-mono font-bold text-teal-600">${ssrInterpolate(unref(code))}</span></div><div class="flex justify-between py-2 border-b border-slate-100"><span class="text-slate-500">Penerima Sertifikat</span><span class="font-semibold text-slate-900">Budi Raharjo</span></div><div class="flex justify-between py-2 border-b border-slate-100"><span class="text-slate-500">Program Kelas</span><span class="font-semibold text-slate-900">Basic Web Development</span></div><div class="flex justify-between py-2 border-b border-slate-100"><span class="text-slate-500">Tanggal Kelulusan</span><span class="font-semibold text-slate-900">25 November 2026</span></div><div class="flex justify-between py-2 border-b border-slate-100"><span class="text-slate-500">Total Jam Pembelajaran</span><span class="font-semibold text-slate-900">10 Jam Praktek Terstruktur</span></div></div><div class="pt-3 flex gap-3">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/",
				class: "w-full py-3 rounded-xl text-white font-bold text-center text-xs uppercase tracking-wider shadow-lg shadow-teal-500/20 hover:opacity-90 transition",
				style: { "background": "linear-gradient(135deg,#14b8a6,#0ea5e9)" }
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Kunjungi Uneed Academy `);
					else return [createTextVNode(" Kunjungi Uneed Academy ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div>`);
		};
	}
});
// app/pages/verify/[code].vue
var _sfc_setup = _code__vue_vue_type_script_setup_true_lang_default.setup;
_code__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verify/[code].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _code__default = _code__vue_vue_type_script_setup_true_lang_default;

export { _code__default as default };
//# sourceMappingURL=_code_-WClF4s5U.mjs.map
