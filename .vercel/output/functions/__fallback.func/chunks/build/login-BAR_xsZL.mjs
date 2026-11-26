import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { g as useUserSession, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { _ as _virtual_public__2Fimages_2Fhero_character_default } from './_virtual_public-BDoCyNyV.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, N as withCtx, G as createVNode, a1 as ssrRenderAttr, $ as ssrRenderClass, Y as ssrInterpolate, u as unref, E as ssrRenderComponent, X as createTextVNode, a5 as ssrRenderDynamicModel, a0 as includeBooleanAttr, q as ref, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/auth/login.vue?vue&type=script&setup=true&lang.ts
var login_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "login",
	__ssrInlineRender: true,
	setup(__props) {
		useUserSession();
		const form = ref({
			emailOrUsername: "",
			password: ""
		});
		const loading = ref(false);
		const errorMessage = ref("");
		const showPassword = ref(false);
		const tasks = [
			{
				num: 1,
				title: "Introduction to Web Development",
				status: "done"
			},
			{
				num: 2,
				title: "HTML Fundamentals",
				status: "done"
			},
			{
				num: 3,
				title: "CSS Fundamentals & Layout",
				status: "active"
			},
			{
				num: 4,
				title: "Responsive Design",
				status: "locked"
			},
			{
				num: 5,
				title: "JavaScript Basics",
				status: "locked"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 flex overflow-hidden bg-[#f5f9ff]" }, _attrs))}><div class="hidden lg:flex lg:w-5/12 flex-col justify-between px-10 py-7 relative overflow-hidden flex-shrink-0 text-white" style="background:linear-gradient(145deg, #1e3a8a 0%, #2563eb 55%, #0284c7 100%);"><svg class="absolute top-0 right-0 w-72 h-auto pointer-events-none opacity-80" viewBox="0 0 320 180" fill="none"><path d="M90 0C120 60 190 75 240 110C280 138 300 160 320 175V0H90Z" fill="#22d3ee" fill-opacity="0.35"></path></svg><svg class="absolute bottom-0 left-0 w-80 h-auto pointer-events-none opacity-80" viewBox="0 0 320 160" fill="none"><path d="M0 70C70 50 120 105 185 115C245 125 280 95 320 160H0V70Z" fill="#22d3ee" fill-opacity="0.3"></path></svg>`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/",
				class: "flex items-center gap-3 relative z-10"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="h-9 w-9 rounded-full bg-white text-blue-700 flex items-center justify-center font-black text-lg shadow-lg"${_scopeId}>U</div><div${_scopeId}><div class="font-extrabold text-white text-sm leading-none"${_scopeId}>Uneed Academy</div><div class="text-cyan-200 text-[11px] font-semibold mt-0.5"${_scopeId}>Powered by Uneed Developer</div></div>`);
					else return [createVNode("div", { class: "h-9 w-9 rounded-full bg-white text-blue-700 flex items-center justify-center font-black text-lg shadow-lg" }, "U"), createVNode("div", null, [createVNode("div", { class: "font-extrabold text-white text-sm leading-none" }, "Uneed Academy"), createVNode("div", { class: "text-cyan-200 text-[11px] font-semibold mt-0.5" }, "Powered by Uneed Developer")])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="relative z-10 flex-1 flex flex-col justify-center py-4"><div class="flex items-center gap-4 mb-5"><img${ssrRenderAttr("src", _virtual_public__2Fimages_2Fhero_character_default)} alt="Uneed Academy Mascot" class="w-24 h-24 rounded-full object-cover flex-shrink-0 shadow-[0_0_25px_rgba(34,211,238,0.45)] border-2 border-cyan-300/60"><div><div class="text-[10px] font-bold uppercase tracking-widest text-cyan-200 mb-1">Sequential Learning</div><h2 class="text-xl font-extrabold text-white leading-snug"> Setiap tugas harus dibuktikan. <span class="text-cyan-200 block">Bukan sekadar submit.</span></h2></div></div><div class="space-y-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4"><!--[-->`);
			ssrRenderList$2(tasks, (task, i) => {
				_push(`<div class="flex items-center gap-3 text-xs"><div class="${ssrRenderClass([task.status === "done" ? "bg-cyan-400 text-slate-900" : task.status === "active" ? "bg-white text-blue-700" : "bg-white/15 text-white/50", "h-5 w-5 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[9px]"])}">${ssrInterpolate(task.status === "done" ? "✓" : task.num)}</div><span class="${ssrRenderClass(task.status === "done" ? "text-cyan-200 text-xs" : task.status === "active" ? "text-white font-semibold text-xs" : "text-white/45 text-xs")}">${ssrInterpolate(task.title)}</span>`);
				if (task.status === "active") _push(`<span class="ml-auto px-2 py-0.5 rounded-full bg-cyan-400/25 text-cyan-100 font-bold text-[9px]">Aktif</span>`);
				else if (task.status === "locked") _push(`<span class="ml-auto text-white/35 text-[10px]">🔒</span>`);
				else _push(`<!---->`);
				_push(`</div>`);
			});
			_push(`<!--]--></div></div><div class="relative z-10 border-t border-white/15 pt-4"><p class="text-[11px] text-blue-100 italic leading-relaxed mb-2"> &quot;Materinya jelas, tugasnya menantang, dan saya berhasil membangun portfolio pertama saya.&quot; </p><div class="flex items-center gap-2"><div class="h-6 w-6 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center text-[9px] font-bold">RP</div><div><div class="text-[11px] font-bold text-white">Rizky Pratama</div><div class="text-[10px] text-cyan-200">Web Developer, Jakarta</div></div></div></div></div><div class="flex-1 flex items-center justify-center px-6 overflow-hidden bg-[#f5f9ff]"><div class="w-full max-w-sm bg-white rounded-3xl border border-blue-100 shadow-xl shadow-blue-900/5 p-7">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/",
				class: "flex items-center gap-2.5 mb-5 lg:hidden"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="h-8 w-8 rounded-full flex items-center justify-center text-white font-black text-sm" style="background:linear-gradient(135deg,#22d3ee,#2563eb);"${_scopeId}>U</div><span class="font-extrabold text-slate-900 text-sm"${_scopeId}>Uneed Academy</span>`);
					else return [createVNode("div", {
						class: "h-8 w-8 rounded-full flex items-center justify-center text-white font-black text-sm",
						style: { "background": "linear-gradient(135deg,#22d3ee,#2563eb)" }
					}, "U"), createVNode("span", { class: "font-extrabold text-slate-900 text-sm" }, "Uneed Academy")];
				}),
				_: 1
			}, _parent));
			_push(`<div class="mb-5"><h1 class="text-xl font-extrabold text-slate-900 mb-1">Selamat datang kembali</h1><p class="text-xs text-slate-500">Masuk untuk melanjutkan quest belajarmu.</p></div>`);
			if (unref(errorMessage)) {
				_push(`<div class="flex items-start gap-2.5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium mb-4">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-exclamation-circle",
					class: "w-4 h-4 flex-shrink-0 mt-0.5"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(errorMessage))}</div>`);
			} else _push(`<!---->`);
			_push(`<form class="space-y-3.5"><div><label class="block text-xs font-bold text-slate-700 mb-1">Email atau Username</label><input${ssrRenderAttr("value", unref(form).emailOrUsername)} type="text" required autocomplete="username" placeholder="email@domain.com atau username" class="${ssrRenderClass([unref(errorMessage) ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100" : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white", "w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50/70 text-slate-800 placeholder-slate-400 outline-none transition"])}"></div><div><div class="flex items-center justify-between mb-1"><label class="text-xs font-bold text-slate-700">Password</label>`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/auth/forgot-password",
				class: "text-xs text-blue-600 hover:text-blue-800 font-semibold transition"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Lupa password?`);
					else return [createTextVNode("Lupa password?")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="relative"><input${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} required autocomplete="current-password" placeholder="Masukkan password" class="${ssrRenderClass([unref(errorMessage) ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100" : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white", "w-full px-4 py-2.5 pr-11 rounded-xl border text-sm bg-slate-50/70 text-slate-800 placeholder-slate-400 outline-none transition"])}"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition">`);
			_push(ssrRenderComponent(Icon_default, {
				name: unref(showPassword) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
				class: "w-4 h-4"
			}, null, _parent));
			_push(`</button></div></div><button type="submit"${includeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full py-3 rounded-full text-white text-xs font-extrabold uppercase tracking-wider transition hover:opacity-90 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed" style="background:linear-gradient(135deg, #22d3ee, #2563eb);">`);
			if (unref(loading)) _push(`<span class="flex items-center justify-center gap-2"><svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg> Memverifikasi... </span>`);
			else _push(`<span>Masuk Sekarang</span>`);
			_push(`</button></form><p class="text-center text-xs text-slate-500 mt-5"> Belum punya akun? `);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/auth/register",
				class: "text-blue-600 font-bold hover:text-blue-800 transition ml-1"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Daftar Gratis`);
					else return [createTextVNode("Daftar Gratis")];
				}),
				_: 1
			}, _parent));
			_push(`</p></div></div></div>`);
		};
	}
});
// app/pages/auth/login.vue
var _sfc_setup = login_vue_vue_type_script_setup_true_lang_default.setup;
login_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var login_default = login_vue_vue_type_script_setup_true_lang_default;

export { login_default as default };
//# sourceMappingURL=login-BAR_xsZL.mjs.map
