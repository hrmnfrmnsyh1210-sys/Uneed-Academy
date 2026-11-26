import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { N as NuxtLink } from '../virtual/entry.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, N as withCtx, E as ssrRenderComponent, G as createVNode, Y as ssrInterpolate, X as createTextVNode, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/mentor/classes.vue?vue&type=script&setup=true&lang.ts
var classes_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "classes",
	__ssrInlineRender: true,
	setup(__props) {
		const classes = [
			{
				title: "Basic Web Development",
				level: "Beginner",
				students: 24,
				quests: 8
			},
			{
				title: "Vibe Coding with AI",
				level: "Beginner",
				students: 15,
				quests: 10
			},
			{
				title: "Fullstack Web Development",
				level: "Intermediate",
				students: 9,
				quests: 15
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen w-screen flex overflow-hidden bg-[#F0F5FA]" }, _attrs))}><aside class="w-24 md:w-28 h-full flex-shrink-0 flex flex-col items-center py-8 select-none z-20" style="background:linear-gradient(180deg, #042533 0%, #063548 100%);box-shadow:4px 0 24px rgba(4,37,51,0.12);"><div class="h-11 w-11 rounded-2xl flex items-center justify-center text-slate-900 font-black text-xl shadow-lg mb-10" style="background:linear-gradient(135deg, #5eead4, #38bdf8);">M</div><nav class="flex-1 flex flex-col items-center gap-2 w-full px-3">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/mentor",
				class: "w-full flex flex-col items-center gap-1 py-3 px-2 rounded-2xl text-white/50 hover:text-white hover:bg-white/10 transition-all text-center",
				"exact-active-class": "bg-white !text-teal-800 shadow-md"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-squares-2x2",
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-semibold"${_scopeId}>Dashboard</span>`);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-squares-2x2",
						class: "w-5 h-5"
					}), createVNode("span", { class: "text-[10px] font-semibold" }, "Dashboard")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/mentor/classes",
				class: "w-full flex flex-col items-center gap-1 py-3 px-2 rounded-2xl text-white/50 hover:text-white hover:bg-white/10 transition-all text-center",
				"active-class": "bg-white !text-teal-800 shadow-md"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-academic-cap",
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-semibold"${_scopeId}>Kelas</span>`);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-academic-cap",
						class: "w-5 h-5"
					}), createVNode("span", { class: "text-[10px] font-semibold" }, "Kelas")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/mentor/submissions",
				class: "w-full flex flex-col items-center gap-1 py-3 px-2 rounded-2xl text-white/50 hover:text-white hover:bg-white/10 transition-all text-center",
				"active-class": "bg-white !text-teal-800 shadow-md"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-clipboard-document-check",
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-semibold"${_scopeId}>Review</span>`);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-clipboard-document-check",
						class: "w-5 h-5"
					}), createVNode("span", { class: "text-[10px] font-semibold" }, "Review")];
				}),
				_: 1
			}, _parent));
			_push(`</nav><button class="p-3 rounded-2xl text-white/30 hover:text-rose-400 hover:bg-white/10 transition mt-4">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-arrow-right-on-rectangle",
				class: "w-5 h-5"
			}, null, _parent));
			_push(`</button></aside><div class="flex-1 flex flex-col h-full min-w-0 overflow-hidden"><header class="flex-shrink-0 h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur border-b border-slate-200/60"><div class="text-lg font-extrabold text-slate-900">Kelas Diampu</div><div class="flex items-center gap-2.5"><div class="h-9 w-9 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-bold">M</div><div class="text-xs font-bold text-slate-800">Mentor</div></div></header><main class="flex-1 overflow-y-auto p-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-5"><!--[-->`);
			ssrRenderList$2(classes, (c) => {
				_push(`<div class="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:shadow-md transition"><div class="text-xs font-bold text-teal-600 uppercase">${ssrInterpolate(c.level)}</div><h3 class="font-bold text-slate-800 text-base">${ssrInterpolate(c.title)}</h3><p class="text-xs text-slate-500">${ssrInterpolate(c.students)} Siswa Aktif · ${ssrInterpolate(c.quests)} Quest</p>`);
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: "/mentor/submissions",
					class: "inline-block text-xs font-bold text-teal-600 hover:underline"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Lihat Antrean Review → `);
						else return [createTextVNode(" Lihat Antrean Review → ")];
					}),
					_: 2
				}, _parent));
				_push(`</div>`);
			});
			_push(`<!--]--></div></main></div></div>`);
		};
	}
});
// app/pages/mentor/classes.vue
var _sfc_setup = classes_vue_vue_type_script_setup_true_lang_default.setup;
classes_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mentor/classes.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var classes_default = classes_vue_vue_type_script_setup_true_lang_default;

export { classes_default as default };
//# sourceMappingURL=classes-xxCuiduq.mjs.map
