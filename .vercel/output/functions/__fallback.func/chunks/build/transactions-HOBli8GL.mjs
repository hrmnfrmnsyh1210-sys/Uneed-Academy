import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { b as useFetch, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, Y as ssrInterpolate, u as unref, N as withCtx, X as createTextVNode, $ as ssrRenderClass, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/student/transactions.vue?vue&type=script&setup=true&lang.ts
var transactions_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "transactions",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/student/transactions", "$306ywjNltr")), __temp = await __temp, __restore(), __temp);
		const transactions = computed(() => data.value?.transactions || []);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div><h1 class="text-2xl font-extrabold text-slate-900">Riwayat Transaksi</h1><p class="text-sm text-slate-500 mt-1">Daftar pembayaran dan pembelian kelas kamu.</p></div><div class="bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-sm"><div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between"><h2 class="font-bold text-slate-800 text-sm">Semua Transaksi</h2><span class="text-xs text-slate-400">${ssrInterpolate(unref(transactions).length)} transaksi</span></div>`);
			if (unref(transactions).length === 0) {
				_push(`<div class="flex flex-col items-center justify-center py-16 text-center px-6"><div class="text-5xl mb-3">💳</div><h3 class="text-base font-bold text-slate-700 mb-1">Belum ada transaksi</h3><p class="text-xs text-slate-400 mb-5 max-w-xs">Pembelian atau pendaftaran kelas kamu akan muncul di sini.</p>`);
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: "/student/classes",
					class: "px-6 py-2.5 rounded-full text-white text-xs font-extrabold uppercase tracking-wider transition hover:opacity-90",
					style: { "background": "linear-gradient(135deg, #22d3ee, #2563eb)" }
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Beli / Daftar Kelas `);
						else return [createTextVNode(" Beli / Daftar Kelas ")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else {
				_push(`<div class="divide-y divide-slate-100"><!--[-->`);
				ssrRenderList$2(unref(transactions), (tx) => {
					_push(`<div class="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div><div class="text-xs font-mono text-slate-400">${ssrInterpolate(tx.orderId)}</div><div class="text-sm font-bold text-slate-800">${ssrInterpolate(tx.classTitle)}</div><div class="text-xs text-slate-500 capitalize">Metode: ${ssrInterpolate(tx.paymentMethod.replace("_", " "))}</div></div><div class="flex items-center gap-4"><div class="font-extrabold text-sm text-slate-800">${ssrInterpolate(Number(tx.amount) === 0 ? "Gratis" : "Rp" + Number(tx.amount).toLocaleString("id-ID"))}</div><span class="${ssrRenderClass([tx.status === "paid" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700", "px-3 py-1 rounded-full text-xs font-bold"])}">${ssrInterpolate(tx.status === "paid" ? "Lunas" : "Menunggu Verifikasi")}</span></div></div>`);
				});
				_push(`<!--]--></div>`);
			}
			_push(`</div></div>`);
		};
	}
});
// app/pages/student/transactions.vue
var _sfc_setup = transactions_vue_vue_type_script_setup_true_lang_default.setup;
transactions_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/transactions.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var transactions_default = transactions_vue_vue_type_script_setup_true_lang_default;

export { transactions_default as default };
//# sourceMappingURL=transactions-HOBli8GL.mjs.map
