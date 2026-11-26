import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { N as NuxtLink } from '../virtual/entry.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, u as unref, a1 as ssrRenderAttr, a0 as includeBooleanAttr, Y as ssrInterpolate, N as withCtx, X as createTextVNode, q as ref, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/auth/forgot-password.vue?vue&type=script&setup=true&lang.ts
var forgot_password_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "forgot-password",
	__ssrInlineRender: true,
	setup(__props) {
		const email = ref("");
		const loading = ref(false);
		const sent = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 flex overflow-hidden bg-[#f5f9ff] items-center justify-center" }, _attrs))}><div class="w-full max-w-sm px-6"><div class="flex items-center gap-2.5 mb-8 justify-center"><div class="h-10 w-10 rounded-xl flex items-center justify-center text-white font-black text-base" style="background:linear-gradient(135deg,#14b8a6,#0ea5e9);">U</div><span class="font-extrabold text-slate-900 text-lg">Uneed Academy</span></div><div class="mb-6 text-center"><h1 class="text-xl font-extrabold text-slate-900 mb-1">Lupa Password?</h1><p class="text-xs text-slate-500">Masukkan emailmu dan kami akan kirimkan link reset password.</p></div>`);
			if (unref(sent)) _push(`<div class="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 text-sm text-center mb-5"> ✅ Email reset password telah dikirim. Periksa inbox kamu. </div>`);
			else _push(`<form class="space-y-4"><div><label class="block text-xs font-bold text-slate-700 mb-1">Alamat Email</label><input${ssrRenderAttr("value", unref(email))} type="email" required placeholder="nama@email.com" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white text-slate-800 placeholder-slate-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition"></div><button type="submit"${includeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full py-3 rounded-xl text-white text-sm font-bold transition hover:opacity-90 disabled:opacity-50" style="background:linear-gradient(135deg,#14b8a6,#0ea5e9);">${ssrInterpolate(unref(loading) ? "Mengirim..." : "Kirim Link Reset")}</button></form>`);
			_push(`<p class="text-center text-xs text-slate-500 mt-5">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/auth/login",
				class: "text-teal-600 font-bold hover:text-teal-800 transition"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`← Kembali ke Login`);
					else return [createTextVNode("← Kembali ke Login")];
				}),
				_: 1
			}, _parent));
			_push(`</p></div></div>`);
		};
	}
});
// app/pages/auth/forgot-password.vue
var _sfc_setup = forgot_password_vue_vue_type_script_setup_true_lang_default.setup;
forgot_password_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/forgot-password.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var forgot_password_default = forgot_password_vue_vue_type_script_setup_true_lang_default;

export { forgot_password_default as default };
//# sourceMappingURL=forgot-password-BuK5V8J2.mjs.map
