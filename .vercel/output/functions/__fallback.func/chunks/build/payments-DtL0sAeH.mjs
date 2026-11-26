import { b as useFetch } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, u as unref, $ as ssrRenderClass, Y as ssrInterpolate, a0 as includeBooleanAttr, a1 as ssrRenderAttr, q as ref, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/admin/payments.vue?vue&type=script&setup=true&lang.ts
var payments_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "payments",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const busyId = ref("");
		const message = ref("");
		const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/payments", "$wKk-EQwudn")), __temp = await __temp, __restore(), __temp);
		const payments = computed(() => data.value?.payments || []);
		function money(value) {
			return `Rp${new Intl.NumberFormat("id-ID").format(Number(value || 0))}`;
		}
		function formatDate(value) {
			if (!value) return "";
			return new Date(value).toLocaleDateString("id-ID", {
				day: "numeric",
				month: "short",
				year: "numeric"
			});
		}
		function statusLabel(status) {
			return {
				paid: "Lunas",
				pending: "Pending",
				waiting_verification: "Menunggu Verifikasi",
				rejected: "Ditolak",
				failed: "Gagal",
				expired: "Kedaluwarsa",
				cancelled: "Dibatalkan",
				free: "Gratis"
			}[status] || status;
		}
		function statusClass(status) {
			if (status === "paid" || status === "free") return "bg-emerald-50 text-emerald-700";
			if (["waiting_verification", "pending"].includes(status)) return "bg-amber-50 text-amber-700";
			return "bg-slate-100 text-slate-600";
		}
		function isVerifiable(status) {
			return ["pending", "waiting_verification"].includes(status);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div><h1 class="text-xl md:text-2xl font-extrabold text-slate-900">Payment Verification</h1><p class="text-xs text-slate-500 mt-1">Verifikasi transaksi Midtrans dan transfer manual</p></div>`);
			if (unref(message)) _push(`<div class="${ssrRenderClass([unref(message).startsWith("✓") ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700", "rounded-xl border px-4 py-3 text-xs font-semibold"])}">${ssrInterpolate(unref(message))}</div>`);
			else _push(`<!---->`);
			_push(`<div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"><div class="overflow-x-auto"><table class="w-full text-left text-sm min-w-[840px]"><thead class="text-[10px] uppercase text-slate-400 border-b border-slate-100 bg-slate-50"><tr><th class="py-3 px-5">Invoice</th><th class="py-3 px-5">Siswa</th><th class="py-3 px-5">Kelas</th><th class="py-3 px-5">Metode</th><th class="py-3 px-5">Nominal</th><th class="py-3 px-5">Status / Aksi</th></tr></thead><tbody class="divide-y divide-slate-100 text-slate-700"><!--[-->`);
			ssrRenderList$2(unref(payments), (p) => {
				_push(`<tr class="hover:bg-slate-50 transition"><td class="py-3.5 px-5"><div class="font-mono text-[11px] font-semibold">${ssrInterpolate(p.orderId)}</div><div class="text-[10px] text-slate-400">${ssrInterpolate(formatDate(p.createdAt))}</div></td><td class="py-3.5 px-5"><div class="font-semibold text-slate-800">${ssrInterpolate(p.studentName)}</div><div class="text-[11px] text-slate-400">${ssrInterpolate(p.studentEmail)}</div></td><td class="py-3.5 px-5">${ssrInterpolate(p.className)}</td><td class="py-3.5 px-5 capitalize">${ssrInterpolate(p.paymentMethod.replace("_", " "))}</td><td class="py-3.5 px-5 font-bold">${ssrInterpolate(money(p.amount))}</td><td class="py-3.5 px-5"><div class="flex flex-wrap items-center gap-2"><span class="${ssrRenderClass([statusClass(p.status), "px-2.5 py-0.5 rounded-full text-[11px] font-semibold"])}">${ssrInterpolate(statusLabel(p.status))}</span>`);
				if (isVerifiable(p.status)) _push(`<!--[--><button${includeBooleanAttr(unref(busyId) === p.id) ? " disabled" : ""} class="px-2.5 py-1 rounded-lg bg-teal-600 text-white text-[11px] font-bold hover:bg-teal-700 disabled:opacity-40"> Setujui </button><button${includeBooleanAttr(unref(busyId) === p.id) ? " disabled" : ""} class="px-2.5 py-1 rounded-lg border border-rose-200 text-rose-600 text-[11px] font-bold hover:bg-rose-50 disabled:opacity-40"> Tolak </button><!--]-->`);
				else _push(`<!---->`);
				if (p.paymentProofUrl) _push(`<a${ssrRenderAttr("href", p.paymentProofUrl)} target="_blank" rel="noopener" class="text-[11px] font-bold text-teal-600 hover:underline">Bukti</a>`);
				else _push(`<!---->`);
				_push(`</div>`);
				if (p.rejectionReason) _push(`<div class="mt-1 text-[10px] text-rose-500">${ssrInterpolate(p.rejectionReason)}</div>`);
				else _push(`<!---->`);
				_push(`</td></tr>`);
			});
			_push(`<!--]-->`);
			if (!unref(payments).length) _push(`<tr><td colspan="6" class="py-10 text-center text-xs text-slate-400">Belum ada transaksi.</td></tr>`);
			else _push(`<!---->`);
			_push(`</tbody></table></div></div></div>`);
		};
	}
});
// app/pages/admin/payments.vue
var _sfc_setup = payments_vue_vue_type_script_setup_true_lang_default.setup;
payments_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/payments.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var payments_default = payments_vue_vue_type_script_setup_true_lang_default;

export { payments_default as default };
//# sourceMappingURL=payments-DtL0sAeH.mjs.map
