import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { _ as _plugin_vue_export_helper_default, N as NuxtLink } from '../virtual/entry.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, E as ssrRenderComponent, a8 as ssrRenderSlot, N as withCtx, G as createVNode, X as createTextVNode, L as useSSRContext } from '../_/vue.mjs';
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

// app/components/common/AppNavbar.vue
var _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/80 shadow-sm transition-colors" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">`);
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/",
		class: "flex items-center gap-3 group"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="h-11 w-11 rounded-2xl bg-gradient-to-tr from-[#042533] to-teal-500 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-900/20 group-hover:scale-105 transition-transform"${_scopeId}> U </div><div${_scopeId}><span class="font-extrabold text-xl tracking-tight text-slate-900"${_scopeId}>Uneed Academy</span><div class="text-[11px] font-bold text-teal-600"${_scopeId}>Learn. Build. Achieve.</div></div>`);
			else return [createVNode("div", { class: "h-11 w-11 rounded-2xl bg-gradient-to-tr from-[#042533] to-teal-500 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-900/20 group-hover:scale-105 transition-transform" }, " U "), createVNode("div", null, [createVNode("span", { class: "font-extrabold text-xl tracking-tight text-slate-900" }, "Uneed Academy"), createVNode("div", { class: "text-[11px] font-bold text-teal-600" }, "Learn. Build. Achieve.")])];
		}),
		_: 1
	}, _parent));
	_push(`<nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">`);
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/classes",
		class: "hover:text-teal-700 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Jelajahi Kelas`);
			else return [createTextVNode("Jelajahi Kelas")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/#method",
		class: "hover:text-teal-700 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Sequential Engine`);
			else return [createTextVNode("Sequential Engine")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/#mentors",
		class: "hover:text-teal-700 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Mentor`);
			else return [createTextVNode("Mentor")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/verify/UA-2026-DEMO001",
		class: "hover:text-teal-700 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Verifikasi Sertifikat`);
			else return [createTextVNode("Verifikasi Sertifikat")];
		}),
		_: 1
	}, _parent));
	_push(`</nav><div class="flex items-center gap-3">`);
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/auth/login",
		class: "px-5 py-2.5 rounded-full text-xs font-bold text-slate-700 hover:text-teal-800 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(` Masuk `);
			else return [createTextVNode(" Masuk ")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/auth/register",
		class: "px-6 py-2.5 rounded-full bg-[#042533] hover:bg-[#063548] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-teal-950/20 transition transform hover:-translate-y-0.5"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(` Daftar Gratis `);
			else return [createTextVNode(" Daftar Gratis ")];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></header>`);
}
var _sfc_setup$2 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/AppNavbar.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var AppNavbar_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "CommonAppNavbar" });
// app/components/common/AppFooter.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] text-slate-500 dark:text-slate-400 text-sm py-12" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8"><div class="space-y-4"><div class="flex items-center gap-3"><div class="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg"> U </div><span class="font-bold text-base text-slate-900 dark:text-white">Uneed Academy</span></div><p class="text-xs leading-relaxed"> Platform pembelajaran teknologi &amp; rekayasa perangkat lunak modern dengan pendekatan Project-Based Learning dan Sequential Learning Engine. </p><p class="text-xs font-semibold text-indigo-500">Powered by Uneed Developer</p></div><div><h3 class="font-semibold text-slate-900 dark:text-white text-sm mb-3">Program Belajar</h3><ul class="space-y-2 text-xs"><li>`);
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/classes",
		class: "hover:text-indigo-400 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Basic Web Development`);
			else return [createTextVNode("Basic Web Development")];
		}),
		_: 1
	}, _parent));
	_push(`</li><li>`);
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/classes",
		class: "hover:text-indigo-400 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Vibe Coding with AI`);
			else return [createTextVNode("Vibe Coding with AI")];
		}),
		_: 1
	}, _parent));
	_push(`</li><li>`);
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/classes",
		class: "hover:text-indigo-400 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Fullstack Web Development`);
			else return [createTextVNode("Fullstack Web Development")];
		}),
		_: 1
	}, _parent));
	_push(`</li></ul></div><div><h3 class="font-semibold text-slate-900 dark:text-white text-sm mb-3">Validasi &amp; Portofolio</h3><ul class="space-y-2 text-xs"><li>`);
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/verify/UA-2026-DEMO001",
		class: "hover:text-indigo-400 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Verifikasi Sertifikat Digital`);
			else return [createTextVNode("Verifikasi Sertifikat Digital")];
		}),
		_: 1
	}, _parent));
	_push(`</li><li>`);
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/portfolio/budiraharjo",
		class: "hover:text-indigo-400 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Contoh Student Portfolio`);
			else return [createTextVNode("Contoh Student Portfolio")];
		}),
		_: 1
	}, _parent));
	_push(`</li><li>`);
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/terms",
		class: "hover:text-indigo-400 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Syarat &amp; Ketentuan`);
			else return [createTextVNode("Syarat & Ketentuan")];
		}),
		_: 1
	}, _parent));
	_push(`</li></ul></div><div><h3 class="font-semibold text-slate-900 dark:text-white text-sm mb-3">Kontak &amp; Bantuan</h3><p class="text-xs leading-relaxed mb-2">Punya pertanyaan seputar kurikulum atau registrasi kelas?</p><span class="text-xs font-medium text-slate-700 dark:text-slate-300">support@uneed.id</span></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-200 dark:border-slate-800/80 text-xs text-center flex flex-col sm:flex-row items-center justify-between gap-4"><p>© 2026 Uneed Academy. All rights reserved.</p><div class="flex items-center gap-4"><span>Jakarta, Indonesia (WIB)</span><span>•</span><span>IDR Currency</span></div></div></footer>`);
}
var _sfc_setup$1 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/AppFooter.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var AppFooter_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "CommonAppFooter" });
// app/layouts/default.vue?vue&type=script&setup=true&lang.ts
var default_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "default",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200" }, _attrs))}>`);
			_push(ssrRenderComponent(AppNavbar_default, null, null, _parent));
			_push(`<main class="flex-1">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main>`);
			_push(ssrRenderComponent(AppFooter_default, null, null, _parent));
			_push(`</div>`);
		};
	}
});
// app/layouts/default.vue
var _sfc_setup = default_vue_vue_type_script_setup_true_lang_default.setup;
default_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = default_vue_vue_type_script_setup_true_lang_default;

export { default_default as default };
//# sourceMappingURL=default-CnxqaZOn.mjs.map
