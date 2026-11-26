import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { b as useFetch, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { F as FolderIcon_default } from './FolderIcon-DfDpYGvf.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, $ as ssrRenderClass, u as unref, E as ssrRenderComponent, N as withCtx, G as createVNode, X as createTextVNode, Y as ssrInterpolate, _ as toDisplayString, a0 as includeBooleanAttr, a4 as ssrLooseEqual, q as ref, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/student/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const viewMode = ref("grid");
		const { data, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/student/classes", "$eH3688CtjT")), __temp = await __temp, __restore(), __temp);
		const enrolledClasses = computed(() => data.value?.enrolledClasses || []);
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
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-7" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><div class="text-xs text-slate-400 font-semibold">Dashboard</div><h1 class="text-2xl font-extrabold text-slate-800 tracking-tight mt-0.5">Classes</h1></div><div class="flex items-center gap-3"><div class="flex items-center bg-white border border-blue-100 rounded-xl p-1 shadow-sm"><button class="${ssrRenderClass([unref(viewMode) === "grid" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-600", "p-1.5 rounded-lg transition"])}">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-squares-2x2",
				class: "w-4 h-4"
			}, null, _parent));
			_push(`</button><button class="${ssrRenderClass([unref(viewMode) === "list" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-600", "p-1.5 rounded-lg transition"])}">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-bars-3",
				class: "w-4 h-4"
			}, null, _parent));
			_push(`</button></div>`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/student/classes",
				class: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-500/20 hover:opacity-90 transition",
				style: { "background": "linear-gradient(135deg, #1e3a8a, #2563eb)" }
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-shopping-bag",
							class: "w-4 h-4"
						}, null, _parent, _scopeId));
						_push(` Katalog &amp; Beli Kelas `);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-shopping-bag",
						class: "w-4 h-4"
					}), createTextVNode(" Katalog & Beli Kelas ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div>`);
			if (unref(pending)) {
				_push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-5"><!--[-->`);
				ssrRenderList$2(2, (i) => {
					_push(`<div class="h-44 rounded-3xl bg-white/70 border border-blue-100 animate-pulse"></div>`);
				});
				_push(`<!--]--></div>`);
			} else {
				_push(`<div>`);
				if (unref(enrolledClasses).length === 0) {
					_push(`<div class="bg-white/95 rounded-3xl border border-blue-100 p-8 text-center shadow-sm space-y-3"><div class="mx-auto w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">`);
					_push(ssrRenderComponent(Icon_default, {
						name: "i-heroicons-academic-cap",
						class: "w-8 h-8"
					}, null, _parent));
					_push(`</div><h2 class="text-lg font-extrabold text-slate-800">Belum Ada Kelas Aktif</h2><p class="text-xs text-slate-500 max-w-md mx-auto leading-relaxed"> Kamu belum mendaftar atau membeli kelas. Pilih kelas gratis <strong>Basic Web Development</strong> atau beli kelas premium di katalog di bawah untuk mulai mengerjakan quest. </p><div class="pt-2">`);
					_push(ssrRenderNuxtLink(NuxtLink, {
						to: "/student/classes",
						class: "inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:opacity-90 transition",
						style: { "background": "linear-gradient(135deg, #22d3ee, #2563eb)" }
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Jelajahi Katalog Kelas `);
							else return [createTextVNode(" Jelajahi Katalog Kelas ")];
						}),
						_: 1
					}, _parent));
					_push(`</div></div>`);
				} else {
					_push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-5"><!--[-->`);
					ssrRenderList$2(unref(enrolledClasses), (cls) => {
						_push(ssrRenderNuxtLink(NuxtLink, {
							key: cls.id,
							to: `/student/classroom/${cls.slug}`,
							class: "block bg-white/90 backdrop-blur rounded-3xl border border-blue-100/80 p-6 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition group"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<div class="flex gap-5 items-start"${_scopeId}>`);
									_push(ssrRenderComponent(FolderIcon_default, {
										size: "lg",
										icon: styleOf(cls.slug).icon,
										"back-color": styleOf(cls.slug).backColor,
										"front-gradient": styleOf(cls.slug).frontGradient
									}, null, _parent, _scopeId));
									_push(`<div class="flex-1 min-w-0"${_scopeId}><div class="flex items-center justify-between mb-1"${_scopeId}><span class="text-[11px] text-slate-400 font-medium"${_scopeId}>${ssrInterpolate(cls.totalTasks)} Quest · ${ssrInterpolate(cls.estimatedDurationHours)} Jam</span><span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold"${_scopeId}>Aktif</span></div><h3 class="font-extrabold text-slate-800 text-base group-hover:text-blue-700 transition"${_scopeId}>${ssrInterpolate(cls.title)}</h3><p class="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed"${_scopeId}>${ssrInterpolate(cls.shortDescription)}</p></div></div><div class="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs"${_scopeId}><div${_scopeId}><div class="text-[10px] font-bold text-slate-400 mb-1.5"${_scopeId}>Class Progress</div><div class="flex items-center"${_scopeId}><span class="h-6 w-6 rounded-full border-2 border-emerald-400 bg-emerald-50 text-emerald-700 text-[10px] font-bold flex items-center justify-center"${_scopeId}>${ssrInterpolate(cls.done)}</span><span class="w-5 h-0.5 bg-emerald-300"${_scopeId}></span><span class="h-6 w-6 rounded-full border-2 border-amber-400 bg-amber-50 text-amber-700 text-[10px] font-bold flex items-center justify-center"${_scopeId}>${ssrInterpolate(cls.review)}</span><span class="w-5 h-0.5 bg-slate-200"${_scopeId}></span><span class="h-6 w-6 rounded-full border-2 border-slate-300 bg-slate-50 text-slate-500 text-[10px] font-bold flex items-center justify-center"${_scopeId}>${ssrInterpolate(cls.locked)}</span></div></div><span class="px-4 py-2 rounded-full text-[11px] font-bold text-white shadow-sm" style="background:linear-gradient(135deg, #22d3ee, #2563eb);"${_scopeId}> Lanjutkan Belajar → </span></div>`);
								} else return [createVNode("div", { class: "flex gap-5 items-start" }, [createVNode(FolderIcon_default, {
									size: "lg",
									icon: styleOf(cls.slug).icon,
									"back-color": styleOf(cls.slug).backColor,
									"front-gradient": styleOf(cls.slug).frontGradient
								}, null, 8, [
									"icon",
									"back-color",
									"front-gradient"
								]), createVNode("div", { class: "flex-1 min-w-0" }, [
									createVNode("div", { class: "flex items-center justify-between mb-1" }, [createVNode("span", { class: "text-[11px] text-slate-400 font-medium" }, toDisplayString(cls.totalTasks) + " Quest · " + toDisplayString(cls.estimatedDurationHours) + " Jam", 1), createVNode("span", { class: "px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold" }, "Aktif")]),
									createVNode("h3", { class: "font-extrabold text-slate-800 text-base group-hover:text-blue-700 transition" }, toDisplayString(cls.title), 1),
									createVNode("p", { class: "text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed" }, toDisplayString(cls.shortDescription), 1)
								])]), createVNode("div", { class: "mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs" }, [createVNode("div", null, [createVNode("div", { class: "text-[10px] font-bold text-slate-400 mb-1.5" }, "Class Progress"), createVNode("div", { class: "flex items-center" }, [
									createVNode("span", { class: "h-6 w-6 rounded-full border-2 border-emerald-400 bg-emerald-50 text-emerald-700 text-[10px] font-bold flex items-center justify-center" }, toDisplayString(cls.done), 1),
									createVNode("span", { class: "w-5 h-0.5 bg-emerald-300" }),
									createVNode("span", { class: "h-6 w-6 rounded-full border-2 border-amber-400 bg-amber-50 text-amber-700 text-[10px] font-bold flex items-center justify-center" }, toDisplayString(cls.review), 1),
									createVNode("span", { class: "w-5 h-0.5 bg-slate-200" }),
									createVNode("span", { class: "h-6 w-6 rounded-full border-2 border-slate-300 bg-slate-50 text-slate-500 text-[10px] font-bold flex items-center justify-center" }, toDisplayString(cls.locked), 1)
								])]), createVNode("span", {
									class: "px-4 py-2 rounded-full text-[11px] font-bold text-white shadow-sm",
									style: { "background": "linear-gradient(135deg, #22d3ee, #2563eb)" }
								}, " Lanjutkan Belajar → ")])];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></div>`);
				}
				_push(`</div>`);
			}
			_push(`<div><h2 class="text-base font-extrabold text-slate-800 mb-4">Katalog Semua Kelas</h2><div class="${ssrRenderClass(unref(viewMode) === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-3")}"><!--[-->`);
			ssrRenderList$2(unref(catalog), (cls) => {
				_push(`<div class="bg-white/95 rounded-2xl border border-blue-100/90 p-5 hover:shadow-md transition duration-200 flex flex-col justify-between gap-4"><div class="flex items-center gap-3.5">`);
				_push(ssrRenderComponent(FolderIcon_default, {
					size: "sm",
					icon: styleOf(cls.slug).icon,
					"back-color": styleOf(cls.slug).backColor,
					"front-gradient": styleOf(cls.slug).frontGradient
				}, null, _parent));
				_push(`<div class="min-w-0 flex-1"><div class="text-[10px] text-slate-400">${ssrInterpolate(cls.totalTasks)} Quest · ${ssrInterpolate(cls.estimatedDurationHours)} Jam</div><div class="text-sm font-bold text-slate-800 truncate">${ssrInterpolate(cls.title)}</div></div><span class="${ssrRenderClass([cls.price === 0 ? "text-emerald-600" : "text-blue-700", "text-xs font-extrabold"])}">${ssrInterpolate(cls.price === 0 ? "Gratis" : formatRp(cls.price))}</span></div><div class="border-t border-slate-100 pt-3 flex items-center justify-between gap-2"><span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">${ssrInterpolate(cls.difficulty)}</span>`);
				if (cls.enrollmentStatus === "active" || cls.enrollmentStatus === "completed") _push(ssrRenderNuxtLink(NuxtLink, {
					to: `/student/classroom/${cls.slug}`,
					class: "px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold hover:bg-emerald-100 transition"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Buka Kelas `);
						else return [createTextVNode(" Buka Kelas ")];
					}),
					_: 2
				}, _parent));
				else if (cls.enrollmentStatus === "pending") _push(ssrRenderNuxtLink(NuxtLink, {
					to: "/student/transactions",
					class: "px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-700 text-[11px] font-bold"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Menunggu Verifikasi `);
						else return [createTextVNode(" Menunggu Verifikasi ")];
					}),
					_: 2
				}, _parent));
				else _push(`<button class="px-4 py-1.5 rounded-full text-white text-[11px] font-bold shadow-sm hover:opacity-90 transition" style="background:linear-gradient(135deg, #22d3ee, #2563eb);">${ssrInterpolate(cls.price === 0 ? "Daftar Gratis" : "Beli Kelas")}</button>`);
				_push(`</div></div>`);
			});
			_push(`<!--]--></div></div>`);
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
// app/pages/student/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var student_default = index_vue_vue_type_script_setup_true_lang_default;

export { student_default as default };
//# sourceMappingURL=student-Bv8xv_8A.mjs.map
