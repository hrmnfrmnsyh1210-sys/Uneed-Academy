import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { b as useFetch, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, u as unref, N as withCtx, X as createTextVNode, Z as ssrRenderStyle, E as ssrRenderComponent, Y as ssrInterpolate, $ as ssrRenderClass, G as createVNode, _ as toDisplayString, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/student/quests.vue?vue&type=script&setup=true&lang.ts
var quests_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "quests",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/student/quests", "$zytUp9VM9U")), __temp = await __temp, __restore(), __temp);
		const quests = computed(() => data.value?.quests || []);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div><h1 class="text-2xl font-extrabold text-slate-900">Quest Saya</h1><p class="text-sm text-slate-500 mt-1">Progress tugas dari kelas yang kamu ikuti.</p></div>`);
			if (unref(quests).length === 0) {
				_push(`<div class="bg-white border border-blue-100 rounded-3xl p-10 text-center space-y-3"><div class="text-4xl">🎯</div><div class="font-extrabold text-slate-800">Belum Ada Quest Aktif</div><p class="text-xs text-slate-500 max-w-sm mx-auto">Daftar atau beli kelas terlebih dahulu agar quest pembelajaranmu muncul di sini.</p>`);
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: "/student/classes",
					class: "inline-block px-6 py-2.5 rounded-full text-white text-xs font-extrabold uppercase tracking-wider",
					style: { "background": "linear-gradient(135deg, #22d3ee, #2563eb)" }
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Pilih Kelas `);
						else return [createTextVNode(" Pilih Kelas ")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else {
				_push(`<div class="space-y-3"><!--[-->`);
				ssrRenderList$2(unref(quests), (q) => {
					_push(ssrRenderNuxtLink(NuxtLink, {
						key: q.id,
						to: `/student/classroom/${q.classSlug}`,
						class: "bg-white border border-blue-100 rounded-2xl p-5 flex items-center gap-4 hover:shadow-sm transition"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="h-10 w-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style="${ssrRenderStyle(q.status === "completed" ? "background:#10b981" : q.status === "available" ? "background:linear-gradient(135deg,#22d3ee,#2563eb)" : q.status === "submitted" ? "background:#f59e0b" : "background:#cbd5e1")}"${_scopeId}>`);
								_push(ssrRenderComponent(Icon_default, {
									name: q.status === "completed" ? "i-heroicons-check" : q.status === "available" ? "i-heroicons-play" : q.status === "submitted" ? "i-heroicons-clock" : "i-heroicons-lock-closed",
									class: "w-5 h-5"
								}, null, _parent, _scopeId));
								_push(`</div><div class="flex-1 min-w-0"${_scopeId}><div class="text-sm font-bold text-slate-800"${_scopeId}>${ssrInterpolate(q.title)}</div><div class="text-xs text-slate-500 mt-0.5"${_scopeId}>${ssrInterpolate(q.classTitle)} · +${ssrInterpolate(q.xpReward)} XP</div></div><span class="${ssrRenderClass([q.status === "completed" ? "bg-emerald-100 text-emerald-700" : q.status === "available" ? "bg-blue-100 text-blue-700" : q.status === "submitted" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500", "text-xs font-bold px-3 py-1 rounded-full"])}"${_scopeId}>${ssrInterpolate(q.status === "completed" ? "Selesai" : q.status === "available" ? "Tersedia" : q.status === "submitted" ? "Menunggu Review" : "Terkunci")}</span>`);
							} else return [
								createVNode("div", {
									class: "h-10 w-10 rounded-xl flex items-center justify-center text-white flex-shrink-0",
									style: q.status === "completed" ? "background:#10b981" : q.status === "available" ? "background:linear-gradient(135deg,#22d3ee,#2563eb)" : q.status === "submitted" ? "background:#f59e0b" : "background:#cbd5e1"
								}, [createVNode(Icon_default, {
									name: q.status === "completed" ? "i-heroicons-check" : q.status === "available" ? "i-heroicons-play" : q.status === "submitted" ? "i-heroicons-clock" : "i-heroicons-lock-closed",
									class: "w-5 h-5"
								}, null, 8, ["name"])], 4),
								createVNode("div", { class: "flex-1 min-w-0" }, [createVNode("div", { class: "text-sm font-bold text-slate-800" }, toDisplayString(q.title), 1), createVNode("div", { class: "text-xs text-slate-500 mt-0.5" }, toDisplayString(q.classTitle) + " · +" + toDisplayString(q.xpReward) + " XP", 1)]),
								createVNode("span", { class: ["text-xs font-bold px-3 py-1 rounded-full", q.status === "completed" ? "bg-emerald-100 text-emerald-700" : q.status === "available" ? "bg-blue-100 text-blue-700" : q.status === "submitted" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"] }, toDisplayString(q.status === "completed" ? "Selesai" : q.status === "available" ? "Tersedia" : q.status === "submitted" ? "Menunggu Review" : "Terkunci"), 3)
							];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div>`);
			}
			_push(`</div>`);
		};
	}
});
// app/pages/student/quests.vue
var _sfc_setup = quests_vue_vue_type_script_setup_true_lang_default.setup;
quests_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/quests.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var quests_default = quests_vue_vue_type_script_setup_true_lang_default;

export { quests_default as default };
//# sourceMappingURL=quests-BTmgmqD1.mjs.map
