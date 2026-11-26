import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { u as useHead, g as useUserSession, N as NuxtLink } from '../virtual/entry.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, N as withCtx, X as createTextVNode, E as ssrRenderComponent, G as createVNode, Y as ssrInterpolate, u as unref, _ as toDisplayString, a1 as ssrRenderAttr, a8 as ssrRenderSlot, m as computed, q as ref, L as useSSRContext } from '../_/vue.mjs';
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

// app/layouts/student.vue?vue&type=script&setup=true&lang.ts
var student_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "student",
	__ssrInlineRender: true,
	setup(__props) {
		useHead({ bodyAttrs: { class: "overflow-hidden" } });
		const { user } = useUserSession();
		const initials = computed(() => {
			return (user.value?.name || "SU").split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
		});
		const showSearch = ref(false);
		const showNotifs = ref(false);
		const searchQuery = ref("");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 flex overflow-hidden bg-[#f5f9ff]" }, _attrs))}><aside class="w-24 md:w-28 h-full flex-shrink-0 flex flex-col items-center py-7 select-none z-20" style="background:linear-gradient(180deg, #1e3a8a 0%, #1d4ed8 58%, #0284c7 100%);box-shadow:4px 0 24px rgba(30,58,138,0.16);">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/student",
				class: "h-11 w-11 rounded-full bg-white flex items-center justify-center text-blue-700 font-black text-xl shadow-lg mb-8 hover:scale-105 transition"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` U `);
					else return [createTextVNode(" U ")];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="flex-1 flex flex-col items-center gap-2 w-full px-3">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/student",
				class: "w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/65 hover:text-white hover:bg-white/15 transition-all text-center",
				"exact-active-class": "bg-white !text-blue-700 shadow-lg"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-squares-2x2",
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-bold"${_scopeId}>Dashboard</span>`);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-squares-2x2",
						class: "w-5 h-5"
					}), createVNode("span", { class: "text-[10px] font-bold" }, "Dashboard")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/student/classes",
				class: "w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/65 hover:text-white hover:bg-white/15 transition-all text-center",
				"active-class": "bg-white !text-blue-700 shadow-lg"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-academic-cap",
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-bold"${_scopeId}>Classes</span>`);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-academic-cap",
						class: "w-5 h-5"
					}), createVNode("span", { class: "text-[10px] font-bold" }, "Classes")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/student/quests",
				class: "w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/65 hover:text-white hover:bg-white/15 transition-all text-center",
				"active-class": "bg-white !text-blue-700 shadow-lg"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-clipboard-document-check",
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-bold"${_scopeId}>Quests</span>`);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-clipboard-document-check",
						class: "w-5 h-5"
					}), createVNode("span", { class: "text-[10px] font-bold" }, "Quests")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/student/achievements",
				class: "w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/65 hover:text-white hover:bg-white/15 transition-all text-center",
				"active-class": "bg-white !text-blue-700 shadow-lg"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-trophy",
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-bold"${_scopeId}>Badges</span>`);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-trophy",
						class: "w-5 h-5"
					}), createVNode("span", { class: "text-[10px] font-bold" }, "Badges")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/student/certificates",
				class: "w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/65 hover:text-white hover:bg-white/15 transition-all text-center",
				"active-class": "bg-white !text-blue-700 shadow-lg"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-document-check",
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-bold"${_scopeId}>Certs</span>`);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-document-check",
						class: "w-5 h-5"
					}), createVNode("span", { class: "text-[10px] font-bold" }, "Certs")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/student/transactions",
				class: "w-full flex flex-col items-center gap-1 py-2.5 px-2 rounded-2xl text-white/65 hover:text-white hover:bg-white/15 transition-all text-center",
				"active-class": "bg-white !text-blue-700 shadow-lg"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-credit-card",
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-bold"${_scopeId}>Billing</span>`);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-credit-card",
						class: "w-5 h-5"
					}), createVNode("span", { class: "text-[10px] font-bold" }, "Billing")];
				}),
				_: 1
			}, _parent));
			_push(`</nav><button title="Keluar" class="p-3 rounded-2xl text-white/50 hover:text-rose-200 hover:bg-white/15 transition mt-4">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-arrow-right-on-rectangle",
				class: "w-5 h-5"
			}, null, _parent));
			_push(`</button></aside><div class="flex-1 flex flex-col h-full min-w-0 overflow-hidden"><header class="flex-shrink-0 h-16 flex items-center justify-between px-8 bg-white/90 backdrop-blur border-b border-blue-100 relative z-30"><div class="flex items-center gap-2.5"><div class="h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-black shadow-sm" style="background:linear-gradient(135deg, #22d3ee, #2563eb);"> U </div><div><span class="font-extrabold text-sm text-slate-900 leading-none">Uneed Academy</span><div class="text-[10px] text-blue-600 font-semibold">Uneed E-Learning</div></div></div><div class="flex items-center gap-3 relative"><button title="Cari kelas" class="h-9 w-9 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-700 transition">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-magnifying-glass",
				class: "w-4 h-4"
			}, null, _parent));
			_push(`</button><button title="Notifikasi" class="relative h-9 w-9 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-700 transition">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-bell",
				class: "w-4 h-4"
			}, null, _parent));
			_push(`<span class="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-cyan-500"></span></button><div class="w-px h-6 bg-slate-200"></div>`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/student/achievements",
				class: "flex items-center gap-2.5"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold ring-2 ring-cyan-200" style="background:linear-gradient(135deg, #22d3ee, #2563eb);"${_scopeId}>${ssrInterpolate(unref(initials))}</div><div class="hidden md:block"${_scopeId}><div class="text-xs font-bold text-slate-800 leading-tight"${_scopeId}>${ssrInterpolate(unref(user)?.name || "Siswa Uneed")}</div><div class="text-[10px] text-blue-600 font-semibold"${_scopeId}>Student · Level ${ssrInterpolate(unref(user)?.currentLevel || 1)}</div></div>`);
					else return [createVNode("div", {
						class: "h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold ring-2 ring-cyan-200",
						style: { "background": "linear-gradient(135deg, #22d3ee, #2563eb)" }
					}, toDisplayString(unref(initials)), 1), createVNode("div", { class: "hidden md:block" }, [createVNode("div", { class: "text-xs font-bold text-slate-800 leading-tight" }, toDisplayString(unref(user)?.name || "Siswa Uneed"), 1), createVNode("div", { class: "text-[10px] text-blue-600 font-semibold" }, "Student · Level " + toDisplayString(unref(user)?.currentLevel || 1), 1)])];
				}),
				_: 1
			}, _parent));
			if (unref(showSearch)) _push(`<div class="absolute right-0 top-12 w-72 bg-white border border-blue-100 rounded-2xl shadow-xl p-3 z-50"><form><input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Cari kelas atau quest..." class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-blue-500"></form></div>`);
			else _push(`<!---->`);
			if (unref(showNotifs)) _push(`<div class="absolute right-0 top-12 w-72 bg-white border border-blue-100 rounded-2xl shadow-xl p-4 z-50 space-y-2.5"><div class="text-xs font-bold text-slate-800">Notifikasi</div><div class="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-[11px] text-slate-700"><strong class="text-blue-700">Task 2 Disetujui!</strong> Kamu mendapatkan +100 XP. </div><div class="p-2.5 rounded-xl bg-cyan-50 border border-cyan-100 text-[11px] text-slate-600"> Quest 3: CSS Fundamentals sekarang terbuka untuk dikerjakan. </div></div>`);
			else _push(`<!---->`);
			_push(`</div></header><main class="flex-1 overflow-y-auto p-6 md:p-8 custom-scroll">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main></div></div>`);
		};
	}
});
// app/layouts/student.vue
var _sfc_setup = student_vue_vue_type_script_setup_true_lang_default.setup;
student_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/student.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var student_default = student_vue_vue_type_script_setup_true_lang_default;

export { student_default as default };
//# sourceMappingURL=student-Bg1SCrxS.mjs.map
