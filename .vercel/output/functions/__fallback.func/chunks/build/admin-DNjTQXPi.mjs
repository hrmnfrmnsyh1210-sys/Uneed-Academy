import { g as useUserSession, u as useHead, $ as $fetch$1, n as navigateTo, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, E as ssrRenderComponent, u as unref, Y as ssrInterpolate, a8 as ssrRenderSlot, q as ref, m as computed, N as withCtx, G as createVNode, X as createTextVNode, _ as toDisplayString, L as useSSRContext } from '../_/vue.mjs';
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

// app/components/admin/SidebarContent.vue?vue&type=script&setup=true&lang.ts
var SidebarContent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarContent",
	__ssrInlineRender: true,
	emits: ["logout", "navigate"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const items = [
			{
				to: "/admin",
				label: "Dashboard & Analytics",
				icon: "i-heroicons-chart-bar",
				exact: true
			},
			{
				to: "/admin/classes",
				label: "Class Management",
				icon: "i-heroicons-academic-cap"
			},
			{
				to: "/admin/curriculum",
				label: "Curriculum Builder",
				icon: "i-heroicons-queue-list"
			},
			{
				to: "/admin/students",
				label: "Student Monitoring",
				icon: "i-heroicons-users"
			},
			{
				to: "/admin/payments",
				label: "Payment Verification",
				icon: "i-heroicons-banknotes"
			},
			{
				to: "/admin/testimonials",
				label: "Mentor & Alumni",
				icon: "i-heroicons-chat-bubble-left-right"
			},
			{
				to: "/admin/badges",
				label: "Badges & XP",
				icon: "i-heroicons-trophy"
			},
			{
				to: "/admin/certificates",
				label: "Certificates",
				icon: "i-heroicons-document-check"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><div class="p-6 border-b border-white/10 flex items-center gap-3"><div class="h-9 w-9 rounded-xl flex items-center justify-center text-slate-900 font-black text-lg shadow-lg flex-shrink-0" style="background:linear-gradient(135deg, #5eead4, #38bdf8);"> U </div><div class="min-w-0"><h1 class="font-bold text-sm text-white leading-tight truncate">Uneed Console</h1><p class="text-[11px] text-teal-300 font-medium">Super Admin</p></div></div><nav class="flex-1 p-4 space-y-1 text-xs overflow-y-auto"><!--[-->`);
			ssrRenderList$2(items, (item) => {
				_push(ssrRenderNuxtLink(NuxtLink, {
					key: item.to,
					to: item.to,
					class: "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-white/65 hover:text-white hover:bg-white/10 transition font-semibold",
					"active-class": item.exact ? "" : "bg-white !text-teal-800 shadow-md",
					"exact-active-class": "bg-white !text-teal-800 shadow-md",
					onClick: ($event) => emit("navigate")
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(Icon_default, {
								name: item.icon,
								class: "w-4 h-4 flex-shrink-0"
							}, null, _parent, _scopeId));
							_push(` ${ssrInterpolate(item.label)}`);
						} else return [createVNode(Icon_default, {
							name: item.icon,
							class: "w-4 h-4 flex-shrink-0"
						}, null, 8, ["name"]), createTextVNode(" " + toDisplayString(item.label), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></nav><div class="p-4 border-t border-white/10"><button class="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-rose-300 hover:bg-white/10 text-xs font-semibold transition">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-arrow-right-on-rectangle",
				class: "w-4 h-4"
			}, null, _parent));
			_push(` Sign Out </button></div><!--]-->`);
		};
	}
});
// app/components/admin/SidebarContent.vue
var _sfc_setup$1 = SidebarContent_vue_vue_type_script_setup_true_lang_default.setup;
SidebarContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/SidebarContent.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var SidebarContent_default = Object.assign(SidebarContent_vue_vue_type_script_setup_true_lang_default, { __name: "AdminSidebarContent" });
// app/layouts/admin.vue?vue&type=script&setup=true&lang.ts
var admin_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "admin",
	__ssrInlineRender: true,
	setup(__props) {
		const sidebarOpen = ref(false);
		const { user } = useUserSession();
		const displayName = computed(() => user.value?.name || "Super Admin");
		const roleLabel = computed(() => {
			const role = user.value?.role;
			return role === "super_admin" ? "Super Admin" : role || "Admin";
		});
		const initials = computed(() => displayName.value.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join(""));
		useHead({ bodyAttrs: { class: "overflow-hidden" } });
		async function logout() {
			await $fetch$1("/api/auth/logout", { method: "POST" });
			await navigateTo("/auth/login");
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen overflow-hidden bg-[#F0F5FA] text-slate-800" }, _attrs))}><aside class="hidden md:flex w-60 h-full flex-shrink-0 flex-col select-none z-20" style="background:linear-gradient(180deg, #042533 0%, #063548 100%);box-shadow:4px 0 24px rgba(4,37,51,0.12);">`);
			_push(ssrRenderComponent(SidebarContent_default, { onLogout: logout }, null, _parent));
			_push(`</aside>`);
			if (unref(sidebarOpen)) {
				_push(`<!--[--><div class="fixed inset-0 z-30 bg-slate-900/50 md:hidden"></div><aside class="fixed inset-y-0 left-0 z-40 w-64 flex flex-col select-none md:hidden" style="background:linear-gradient(180deg, #042533 0%, #063548 100%);">`);
				_push(ssrRenderComponent(SidebarContent_default, {
					onLogout: logout,
					onNavigate: ($event) => sidebarOpen.value = false
				}, null, _parent));
				_push(`</aside><!--]-->`);
			} else _push(`<!---->`);
			_push(`<div class="flex-1 flex flex-col h-full min-w-0 overflow-hidden"><header class="flex-shrink-0 min-h-16 border-b border-slate-200/70 bg-white/90 backdrop-blur px-4 md:px-8 py-3 flex items-center justify-between gap-3"><div class="flex items-center gap-3 min-w-0"><button class="md:hidden h-9 w-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 flex-shrink-0" aria-label="Buka menu">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-bars-3",
				class: "w-5 h-5"
			}, null, _parent));
			_push(`</button><span class="text-[11px] md:text-xs font-bold uppercase tracking-wider text-teal-700 truncate">Console Control Panel</span></div><div class="flex items-center gap-2 md:gap-3 flex-shrink-0"><div class="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold">${ssrInterpolate(unref(initials))}</div><div class="hidden sm:block text-right"><div class="text-xs font-bold text-slate-700">${ssrInterpolate(unref(displayName))}</div><div class="text-[10px] text-teal-600 font-semibold uppercase">${ssrInterpolate(unref(roleLabel))}</div></div></div></header><main class="flex-1 overflow-y-auto p-4 md:p-8 custom-scroll">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main></div></div>`);
		};
	}
});
// app/layouts/admin.vue
var _sfc_setup = admin_vue_vue_type_script_setup_true_lang_default.setup;
admin_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var admin_default = admin_vue_vue_type_script_setup_true_lang_default;

export { admin_default as default };
//# sourceMappingURL=admin-DNjTQXPi.mjs.map
