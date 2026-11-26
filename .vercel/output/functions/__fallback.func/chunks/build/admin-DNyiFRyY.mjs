import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { b as useFetch, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, N as withCtx, E as ssrRenderComponent, G as createVNode, X as createTextVNode, Y as ssrInterpolate, u as unref, _ as toDisplayString, $ as ssrRenderClass, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/admin/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/overview", "$VDG7u31OJo")), __temp = await __temp, __restore(), __temp);
		const stats = computed(() => data.value?.stats || {
			revenue: 0,
			students: 0,
			activeEnrollments: 0,
			pendingReviews: 0,
			pendingPayments: 0,
			certificates: 0,
			classes: 0,
			modules: 0,
			tasks: 0
		});
		const recentClasses = computed(() => data.value?.recentClasses || []);
		const recentTransactions = computed(() => data.value?.recentTransactions || []);
		const quickLinks = [
			{
				to: "/admin/classes",
				label: "Kelola Kelas",
				hint: "Harga & publikasi",
				icon: "i-heroicons-academic-cap"
			},
			{
				to: "/admin/curriculum",
				label: "Kurikulum",
				hint: "Modul & quest",
				icon: "i-heroicons-queue-list"
			},
			{
				to: "/admin/payments",
				label: "Pembayaran",
				hint: "Verifikasi transfer",
				icon: "i-heroicons-banknotes"
			},
			{
				to: "/admin/testimonials",
				label: "Mentor & Alumni",
				hint: "Konten landing page",
				icon: "i-heroicons-chat-bubble-left-right"
			}
		];
		function money(value, short = false) {
			if (short && !value) return "Gratis";
			return `Rp${new Intl.NumberFormat("id-ID").format(Number(value || 0))}`;
		}
		function statusLabel(status) {
			return {
				paid: "Lunas",
				pending: "Pending",
				waiting_verification: "Menunggu Verifikasi",
				rejected: "Ditolak",
				published: "Published",
				draft: "Draft",
				archived: "Arsip"
			}[status] || status;
		}
		function statusClass(status) {
			if (["paid", "published"].includes(status)) return "bg-emerald-50 text-emerald-700";
			if ([
				"waiting_verification",
				"pending",
				"draft"
			].includes(status)) return "bg-amber-50 text-amber-700";
			return "bg-slate-100 text-slate-600";
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6 md:space-y-8" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h1 class="text-xl md:text-2xl font-extrabold text-slate-900">Console Overview &amp; Analytics</h1><p class="text-xs text-slate-500 mt-1">Pemantauan real-time peserta, pendapatan, dan efektivitas kurikulum</p></div>`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/admin/classes",
				class: "px-4 py-2.5 rounded-xl text-white text-xs font-bold transition hover:opacity-90 inline-flex items-center justify-center gap-1.5",
				style: { "background": "linear-gradient(135deg,#14b8a6,#0ea5e9)" }
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-plus",
							class: "w-4 h-4"
						}, null, _parent, _scopeId));
						_push(` Kelola Kelas `);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-plus",
						class: "w-4 h-4"
					}), createTextVNode(" Kelola Kelas ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"><div class="p-5 md:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"><div class="text-[11px] text-slate-400 font-semibold uppercase tracking-wide">Total Pendapatan (IDR)</div><div class="text-2xl font-black text-emerald-600 mt-2">${ssrInterpolate(money(unref(stats).revenue))}</div><div class="text-[11px] text-slate-500 mt-1">Dari transaksi lunas</div></div><div class="p-5 md:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"><div class="text-[11px] text-slate-400 font-semibold uppercase tracking-wide">Total Siswa</div><div class="text-2xl font-black text-slate-900 mt-2">${ssrInterpolate(unref(stats).students)}</div><div class="text-[11px] text-teal-600 mt-1">${ssrInterpolate(unref(stats).activeEnrollments)} pendaftaran aktif</div></div><div class="p-5 md:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"><div class="text-[11px] text-slate-400 font-semibold uppercase tracking-wide">Menunggu Review</div><div class="text-2xl font-black text-amber-500 mt-2">${ssrInterpolate(unref(stats).pendingReviews)}</div><div class="text-[11px] text-slate-500 mt-1">${ssrInterpolate(unref(stats).pendingPayments)} pembayaran perlu verifikasi</div></div><div class="p-5 md:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"><div class="text-[11px] text-slate-400 font-semibold uppercase tracking-wide">Sertifikat Diterbitkan</div><div class="text-2xl font-black text-sky-600 mt-2">${ssrInterpolate(unref(stats).certificates)}</div><div class="text-[11px] text-slate-500 mt-1">${ssrInterpolate(unref(stats).classes)} kelas · ${ssrInterpolate(unref(stats).modules)} modul · ${ssrInterpolate(unref(stats).tasks)} quest</div></div></div><div class="grid grid-cols-2 lg:grid-cols-4 gap-3"><!--[-->`);
			ssrRenderList$2(quickLinks, (link) => {
				_push(ssrRenderNuxtLink(NuxtLink, {
					key: link.to,
					to: link.to,
					class: "flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-300 hover:shadow-sm transition"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<span class="h-9 w-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0"${_scopeId}>`);
							_push(ssrRenderComponent(Icon_default, {
								name: link.icon,
								class: "w-4 h-4"
							}, null, _parent, _scopeId));
							_push(`</span><span class="min-w-0"${_scopeId}><span class="block text-xs font-bold text-slate-800 truncate"${_scopeId}>${ssrInterpolate(link.label)}</span><span class="block text-[10px] text-slate-500 truncate"${_scopeId}>${ssrInterpolate(link.hint)}</span></span>`);
						} else return [createVNode("span", { class: "h-9 w-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0" }, [createVNode(Icon_default, {
							name: link.icon,
							class: "w-4 h-4"
						}, null, 8, ["name"])]), createVNode("span", { class: "min-w-0" }, [createVNode("span", { class: "block text-xs font-bold text-slate-800 truncate" }, toDisplayString(link.label), 1), createVNode("span", { class: "block text-[10px] text-slate-500 truncate" }, toDisplayString(link.hint), 1)])];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div><div class="grid grid-cols-1 xl:grid-cols-2 gap-5"><div class="p-5 md:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm min-w-0"><div class="flex items-center justify-between mb-4 gap-3"><h3 class="text-base font-bold text-slate-800">Kelas Terbaru</h3>`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/admin/classes",
				class: "text-[11px] font-bold text-teal-600 hover:underline whitespace-nowrap"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Semua kelas →`);
					else return [createTextVNode("Semua kelas →")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="overflow-x-auto"><table class="w-full text-left text-sm min-w-[420px]"><thead class="text-[10px] uppercase text-slate-400 border-b border-slate-100"><tr><th class="py-3 px-3">Nama Kelas</th><th class="py-3 px-3">Level</th><th class="py-3 px-3">Harga</th><th class="py-3 px-3">Status</th></tr></thead><tbody class="divide-y divide-slate-100 text-slate-600"><!--[-->`);
			ssrRenderList$2(unref(recentClasses), (cls) => {
				_push(`<tr class="hover:bg-slate-50 transition"><td class="py-3 px-3 font-semibold text-slate-800">${ssrInterpolate(cls.title)}</td><td class="py-3 px-3 capitalize">${ssrInterpolate(cls.difficulty)}</td><td class="py-3 px-3 font-semibold">${ssrInterpolate(money(cls.price, true))}</td><td class="py-3 px-3"><span class="${ssrRenderClass([statusClass(cls.status), "px-2.5 py-0.5 rounded-full text-[11px] font-semibold"])}">${ssrInterpolate(statusLabel(cls.status))}</span></td></tr>`);
			});
			_push(`<!--]-->`);
			if (!unref(recentClasses).length) _push(`<tr><td colspan="4" class="py-8 text-center text-xs text-slate-400">Belum ada kelas.</td></tr>`);
			else _push(`<!---->`);
			_push(`</tbody></table></div></div><div class="p-5 md:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm min-w-0"><div class="flex items-center justify-between mb-4 gap-3"><h3 class="text-base font-bold text-slate-800">Transaksi Terbaru</h3>`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/admin/payments",
				class: "text-[11px] font-bold text-teal-600 hover:underline whitespace-nowrap"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Verifikasi →`);
					else return [createTextVNode("Verifikasi →")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="space-y-2.5"><!--[-->`);
			ssrRenderList$2(unref(recentTransactions), (trx) => {
				_push(`<div class="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/60"><div class="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-teal-600 flex-shrink-0">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-banknotes",
					class: "w-4 h-4"
				}, null, _parent));
				_push(`</div><div class="min-w-0 flex-1"><div class="text-xs font-bold text-slate-800 truncate">${ssrInterpolate(trx.studentName)} · ${ssrInterpolate(trx.className)}</div><div class="text-[10px] text-slate-400 truncate">${ssrInterpolate(trx.orderId)} · ${ssrInterpolate(trx.paymentMethod)}</div></div><div class="text-right flex-shrink-0"><div class="text-xs font-bold text-slate-800">${ssrInterpolate(money(trx.amount))}</div><div class="${ssrRenderClass([trx.status === "paid" ? "text-emerald-600" : "text-amber-600", "text-[10px] font-semibold"])}">${ssrInterpolate(statusLabel(trx.status))}</div></div></div>`);
			});
			_push(`<!--]-->`);
			if (!unref(recentTransactions).length) _push(`<div class="py-8 text-center text-xs text-slate-400">Belum ada transaksi.</div>`);
			else _push(`<!---->`);
			_push(`</div></div></div></div>`);
		};
	}
});
// app/pages/admin/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var admin_default = index_vue_vue_type_script_setup_true_lang_default;

export { admin_default as default };
//# sourceMappingURL=admin-DNyiFRyY.mjs.map
