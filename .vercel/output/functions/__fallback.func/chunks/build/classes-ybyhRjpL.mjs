import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { b as useFetch, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { F as FolderIcon_default } from './FolderIcon-DfDpYGvf.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, E as ssrRenderComponent, a1 as ssrRenderAttr, u as unref, a0 as includeBooleanAttr, a3 as ssrLooseContain, a4 as ssrLooseEqual, $ as ssrRenderClass, Y as ssrInterpolate, N as withCtx, X as createTextVNode, q as ref, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/student/classes.vue?vue&type=script&setup=true&lang.ts
var classes_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "classes",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const search = ref("");
		const levelFilter = ref("ALL");
		const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/student/classes", "$nSRU0ft_A8")), __temp = await __temp, __restore(), __temp);
		const catalog = computed(() => data.value?.catalog || []);
		const checkoutClass = ref(null);
		const paymentMethod = ref("qris");
		const processingCheckout = ref(false);
		const checkoutMsg = ref("");
		const styleMap = {
			"basic-web-development": {
				icon: "i-heroicons-code-bracket",
				backColor: "#db2777",
				frontGradient: "linear-gradient(135deg,#f472b6,#ec4899)"
			},
			"vibe-coding-ai": {
				icon: "i-heroicons-cpu-chip",
				backColor: "#059669",
				frontGradient: "linear-gradient(135deg,#34d399,#10b981)"
			},
			"fullstack-web-development": {
				icon: "i-heroicons-server-stack",
				backColor: "#0284c7",
				frontGradient: "linear-gradient(135deg,#38bdf8,#2563eb)"
			},
			"database-engineering": {
				icon: "i-heroicons-circle-stack",
				backColor: "#d97706",
				frontGradient: "linear-gradient(135deg,#fbbf24,#f59e0b)"
			},
			"ui-ux-fundamentals": {
				icon: "i-heroicons-paint-brush",
				backColor: "#e11d48",
				frontGradient: "linear-gradient(135deg,#fb7185,#f43f5e)"
			},
			"react-nextjs": {
				icon: "i-heroicons-bolt",
				backColor: "#7c3aed",
				frontGradient: "linear-gradient(135deg,#a78bfa,#6366f1)"
			}
		};
		function styleOf(slug) {
			return styleMap[slug] || {
				icon: "i-heroicons-academic-cap",
				backColor: "#2563eb",
				frontGradient: "linear-gradient(135deg,#60a5fa,#3b82f6)"
			};
		}
		function formatRp(val) {
			return "Rp" + val.toLocaleString("id-ID");
		}
		const filteredClasses = computed(() => {
			return catalog.value.filter((c) => {
				const matchLevel = levelFilter.value === "ALL" || c.difficulty === levelFilter.value;
				const matchSearch = !search.value.trim() || c.title.toLowerCase().includes(search.value.toLowerCase()) || (c.shortDescription || "").toLowerCase().includes(search.value.toLowerCase());
				return matchLevel && matchSearch;
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><div class="text-xs text-slate-400 font-semibold">Menu Kelas</div><h1 class="text-2xl font-extrabold text-slate-900 mt-0.5">Katalog &amp; Pembelian Kelas</h1></div><div class="flex flex-wrap items-center gap-3"><div class="relative">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-magnifying-glass",
				class: "w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
			}, null, _parent));
			_push(`<input${ssrRenderAttr("value", unref(search))} type="text" placeholder="Cari kelas..." class="pl-10 pr-4 py-2 rounded-xl border border-blue-100 bg-white text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-blue-400 w-52"></div><select class="px-3.5 py-2 rounded-xl border border-blue-100 bg-white text-xs font-semibold text-slate-700 outline-none focus:border-blue-400"><option value="ALL"${includeBooleanAttr(Array.isArray(unref(levelFilter)) ? ssrLooseContain(unref(levelFilter), "ALL") : ssrLooseEqual(unref(levelFilter), "ALL")) ? " selected" : ""}>Semua Level</option><option value="beginner"${includeBooleanAttr(Array.isArray(unref(levelFilter)) ? ssrLooseContain(unref(levelFilter), "beginner") : ssrLooseEqual(unref(levelFilter), "beginner")) ? " selected" : ""}>Beginner</option><option value="intermediate"${includeBooleanAttr(Array.isArray(unref(levelFilter)) ? ssrLooseContain(unref(levelFilter), "intermediate") : ssrLooseEqual(unref(levelFilter), "intermediate")) ? " selected" : ""}>Intermediate</option></select></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"><!--[-->`);
			ssrRenderList$2(unref(filteredClasses), (cls) => {
				_push(`<div class="bg-white/95 rounded-3xl border border-blue-100 p-5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10 transition duration-200 flex flex-col justify-between"><div><div class="flex items-start justify-between gap-3 mb-4">`);
				_push(ssrRenderComponent(FolderIcon_default, {
					size: "lg",
					icon: styleOf(cls.slug).icon,
					"back-color": styleOf(cls.slug).backColor,
					"front-gradient": styleOf(cls.slug).frontGradient
				}, null, _parent));
				_push(`<div class="text-right"><span class="${ssrRenderClass([cls.difficulty === "beginner" ? "bg-cyan-50 text-cyan-700" : "bg-blue-50 text-blue-700", "text-[10px] font-bold px-2.5 py-1 rounded-full uppercase"])}">${ssrInterpolate(cls.difficulty)}</span><div class="${ssrRenderClass([cls.price === 0 ? "text-emerald-600" : "text-blue-700", "mt-2 font-extrabold text-sm"])}">${ssrInterpolate(cls.price === 0 ? "Gratis" : formatRp(cls.price))}</div></div></div><div class="text-[10px] text-slate-400 mb-0.5">${ssrInterpolate(cls.totalTasks)} Quest · ${ssrInterpolate(cls.estimatedDurationHours)} Jam</div><h3 class="font-extrabold text-slate-800 text-base mb-1.5">${ssrInterpolate(cls.title)}</h3><p class="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">${ssrInterpolate(cls.shortDescription)}</p></div><div class="border-t border-slate-100 pt-3 flex items-center justify-between"><div><div class="text-[10px] text-slate-400 mb-1">Status</div><span class="${ssrRenderClass([cls.enrollmentStatus === "active" ? "text-emerald-600" : cls.enrollmentStatus === "pending" ? "text-amber-600" : "text-slate-500", "text-xs font-bold"])}">${ssrInterpolate(cls.enrollmentStatus === "active" ? "Terdaftar" : cls.enrollmentStatus === "pending" ? "Menunggu Bayar" : "Belum Dibeli")}</span></div>`);
				if (cls.enrollmentStatus === "active" || cls.enrollmentStatus === "completed") _push(ssrRenderNuxtLink(NuxtLink, {
					to: `/student/classroom/${cls.slug}`,
					class: "px-4 py-2 rounded-full text-[11px] font-bold text-white shadow-sm bg-emerald-500 hover:bg-emerald-600 transition"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Buka Kelas `);
						else return [createTextVNode(" Buka Kelas ")];
					}),
					_: 2
				}, _parent));
				else if (cls.enrollmentStatus === "pending") _push(ssrRenderNuxtLink(NuxtLink, {
					to: "/student/transactions",
					class: "px-4 py-2 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Lihat Tagihan `);
						else return [createTextVNode(" Lihat Tagihan ")];
					}),
					_: 2
				}, _parent));
				else _push(`<button class="px-4 py-2 rounded-full text-[11px] font-bold text-white shadow-sm hover:opacity-90 transition" style="background:linear-gradient(135deg, #22d3ee, #2563eb);">${ssrInterpolate(cls.price === 0 ? "Daftar Gratis" : "Beli Kelas")}</button>`);
				_push(`</div></div>`);
			});
			_push(`<!--]--></div>`);
			if (unref(checkoutClass)) {
				_push(`<div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"><div class="bg-white rounded-3xl border border-blue-100 max-w-md w-full p-6 space-y-5 shadow-2xl"><div class="flex items-start justify-between"><div><span class="text-[10px] font-bold uppercase tracking-widest text-blue-600">Checkout Kelas</span><h3 class="text-lg font-extrabold text-slate-900 mt-0.5">${ssrInterpolate(unref(checkoutClass).title)}</h3></div><button class="text-slate-400 hover:text-slate-600">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-x-mark",
					class: "w-5 h-5"
				}, null, _parent));
				_push(`</button></div><div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-between"><span class="text-xs font-semibold text-slate-600">Total Pembayaran</span><span class="text-lg font-black text-blue-700">${ssrInterpolate(unref(checkoutClass).price === 0 ? "Gratis (Rp 0)" : formatRp(unref(checkoutClass).price))}</span></div>`);
				if (unref(checkoutClass).price > 0) _push(`<div class="space-y-2"><label class="block text-xs font-bold text-slate-700">Pilih Metode Pembayaran</label><label class="${ssrRenderClass([unref(paymentMethod) === "qris" ? "border-blue-500 bg-blue-50/60" : "border-slate-200", "flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition"])}"><input type="radio"${includeBooleanAttr(ssrLooseEqual(unref(paymentMethod), "qris")) ? " checked" : ""} value="qris" class="text-blue-600"><div><div class="text-xs font-bold text-slate-800">QRIS / Virtual Account Instan</div><div class="text-[11px] text-slate-500">Akses kelas langsung terbuka otomatis</div></div></label><label class="${ssrRenderClass([unref(paymentMethod) === "manual_transfer" ? "border-blue-500 bg-blue-50/60" : "border-slate-200", "flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition"])}"><input type="radio"${includeBooleanAttr(ssrLooseEqual(unref(paymentMethod), "manual_transfer")) ? " checked" : ""} value="manual_transfer" class="text-blue-600"><div><div class="text-xs font-bold text-slate-800">Transfer Bank Manual</div><div class="text-[11px] text-slate-500">Diverifikasi oleh Admin (BCA / Mandiri)</div></div></label></div>`);
				else _push(`<!---->`);
				if (unref(checkoutMsg)) _push(`<div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">${ssrInterpolate(unref(checkoutMsg))}</div>`);
				else _push(`<!---->`);
				_push(`<div class="flex justify-end gap-2 pt-1"><button class="px-4 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button><button${includeBooleanAttr(unref(processingCheckout)) ? " disabled" : ""} class="px-6 py-2.5 rounded-full text-white text-xs font-extrabold uppercase tracking-wider shadow-md disabled:opacity-50" style="background:linear-gradient(135deg, #22d3ee, #2563eb);">${ssrInterpolate(unref(processingCheckout) ? "Memproses..." : unref(checkoutClass).price === 0 ? "Daftar Sekarang" : "Bayar Sekarang")}</button></div></div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
// app/pages/student/classes.vue
var _sfc_setup = classes_vue_vue_type_script_setup_true_lang_default.setup;
classes_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/classes.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var classes_default = classes_vue_vue_type_script_setup_true_lang_default;

export { classes_default as default };
//# sourceMappingURL=classes-ybyhRjpL.mjs.map
