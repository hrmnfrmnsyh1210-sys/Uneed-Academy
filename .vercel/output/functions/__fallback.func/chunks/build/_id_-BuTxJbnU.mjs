import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { u as useHead, a as useRoute, b as useFetch, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { F as FolderIcon_default } from './FolderIcon-DfDpYGvf.mjs';
import { k as defineComponent, I as withAsyncContext, O as watch, W as ssrRenderAttrs, J as mergeProps, N as withCtx, E as ssrRenderComponent, G as createVNode, X as createTextVNode, Y as ssrInterpolate, u as unref, Z as ssrRenderStyle, _ as toDisplayString, $ as ssrRenderClass, a0 as includeBooleanAttr, a1 as ssrRenderAttr, m as computed, q as ref, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/student/classroom/[id].vue?vue&type=script&setup=true&lang.ts
var _id__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "[id]",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useHead({ bodyAttrs: { class: "overflow-hidden" } });
		const route = useRoute();
		const slug = computed(() => String(route.params.id || "basic-web-development"));
		const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(() => `/api/student/classroom/${slug.value}`, "$uxJKuof7ZW")), __temp = await __temp, __restore(), __temp);
		const tasks = computed(() => data.value?.tasks || []);
		const activeTaskId = ref("");
		watch(tasks, (list) => {
			if (!activeTaskId.value && list.length > 0) {
				const firstAvail = list.find((t) => t.status === "available" || t.status === "submitted" || t.status === "revision_required");
				activeTaskId.value = firstAvail?.id || list[0].id;
			}
		}, { immediate: true });
		const lockNotice = ref("");
		const submitting = ref(false);
		const submissionError = ref("");
		const doneCount = computed(() => tasks.value.filter((t) => t.status === "completed").length);
		const progressPercent = computed(() => tasks.value.length ? Math.round(doneCount.value / tasks.value.length * 100) : 0);
		const activeTask = computed(() => tasks.value.find((t) => t.id === activeTaskId.value) || tasks.value[0]);
		const submission = ref({
			title: "",
			githubUrl: "",
			liveUrl: "",
			description: ""
		});
		function statusLabel(status, order) {
			if (status === "completed") return "Disetujui Mentor";
			if (status === "submitted") return "Menunggu Review";
			if (status === "available") return "Tersedia · Kerjakan";
			if (status === "revision_required") return "Perlu Revisi";
			return `Terkunci (Selesaikan Task ${order - 1})`;
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 flex flex-col bg-[#f5f9ff] text-slate-800 font-sans overflow-hidden" }, _attrs))}><header class="flex-shrink-0 h-16 border-b border-blue-100 px-6 flex items-center justify-between bg-white/90 backdrop-blur-md z-20"><div class="flex items-center gap-4 min-w-0">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/student",
				class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-xs font-bold text-blue-700 transition flex-shrink-0"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-arrow-left",
							class: "w-3.5 h-3.5"
						}, null, _parent, _scopeId));
						_push(` Kembali `);
					} else return [createVNode(Icon_default, {
						name: "i-heroicons-arrow-left",
						class: "w-3.5 h-3.5"
					}), createTextVNode(" Kembali ")];
				}),
				_: 1
			}, _parent));
			_push(`<div class="flex items-center gap-2.5 min-w-0"><div class="h-8 w-8 rounded-full flex items-center justify-center text-white font-black text-xs shadow-sm flex-shrink-0" style="background:linear-gradient(135deg, #22d3ee, #2563eb);"> U </div><div class="min-w-0"><h1 class="text-sm font-extrabold text-slate-900 truncate">${ssrInterpolate(unref(data)?.classInfo?.title || "Classroom")}</h1><div class="text-[10px] text-slate-400 font-medium">Uneed Classroom · Sequential Learning</div></div></div></div>`);
			if (unref(data)?.enrolled) _push(`<div class="flex items-center gap-4 flex-shrink-0"><div class="hidden sm:flex items-center gap-2.5"><div class="w-28 h-2 bg-slate-100 rounded-full overflow-hidden"><div class="h-full rounded-full transition-all duration-300" style="${ssrRenderStyle(`width:${unref(progressPercent)}%; background: linear-gradient(90deg, #22d3ee, #2563eb);`)}"></div></div><span class="text-xs font-extrabold text-blue-700">${ssrInterpolate(unref(doneCount))}/${ssrInterpolate(unref(tasks).length)} (${ssrInterpolate(unref(progressPercent))}%)</span></div></div>`);
			else _push(`<!---->`);
			_push(`</header>`);
			if (unref(data) && !unref(data).enrolled) {
				_push(`<div class="flex-1 flex items-center justify-center p-6"><div class="max-w-md w-full bg-white rounded-3xl border border-blue-100 p-8 text-center shadow-xl space-y-4"><div class="mx-auto w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-lock-closed",
					class: "w-8 h-8"
				}, null, _parent));
				_push(`</div><h2 class="text-xl font-extrabold text-slate-900">${ssrInterpolate(unref(data).classInfo.title)}</h2><p class="text-xs text-slate-500 leading-relaxed">${ssrInterpolate(unref(data).enrollmentStatus === "pending" ? "Pembelian kelas Anda sedang menunggu verifikasi pembayaran oleh Admin." : "Anda belum membeli atau mendaftar kelas ini. Silakan daftar atau beli kelas terlebih dahulu untuk membuka Quest 1.")}</p><div class="pt-2 flex justify-center gap-3">`);
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: "/student/classes",
					class: "px-6 py-2.5 rounded-full text-white text-xs font-extrabold uppercase tracking-wider shadow-md",
					style: { "background": "linear-gradient(135deg, #22d3ee, #2563eb)" }
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref(data).enrollmentStatus === "pending" ? "Cek Status Pembayaran" : "Beli / Daftar Kelas")}`);
						else return [createTextVNode(toDisplayString(unref(data).enrollmentStatus === "pending" ? "Cek Status Pembayaran" : "Beli / Daftar Kelas"), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div></div></div>`);
			} else if (unref(data)?.enrolled) {
				_push(`<div class="flex-1 flex overflow-hidden"><aside class="w-72 lg:w-80 flex-shrink-0 border-r border-blue-100 bg-white overflow-y-auto p-4 space-y-4 custom-scroll"><div class="p-3.5 rounded-2xl text-white flex items-center gap-3 shadow-md shadow-blue-500/15" style="background:linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #06b6d4 100%);">`);
				_push(ssrRenderComponent(FolderIcon_default, {
					size: "sm",
					icon: "i-heroicons-academic-cap",
					"back-color": "#0284c7",
					"front-gradient": "linear-gradient(135deg,#67e8f9,#38bdf8)"
				}, null, _parent));
				_push(`<div class="min-w-0"><div class="text-[10px] text-cyan-200 font-bold uppercase tracking-wider">Kelas Aktif</div><div class="text-xs font-extrabold truncate">${ssrInterpolate(unref(data).classInfo.title)}</div></div></div><div class="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 px-1 pt-1"> Alur Pembelajaran </div><div class="space-y-2"><!--[-->`);
				ssrRenderList$2(unref(tasks), (task) => {
					_push(`<button class="${ssrRenderClass([[task.status === "locked" ? "border border-slate-100 bg-slate-50/70 opacity-60 cursor-not-allowed" : unref(activeTaskId) === task.id ? "border-2 border-blue-500 bg-blue-50/70 shadow-sm cursor-pointer" : task.status === "completed" ? "border border-emerald-200/80 bg-emerald-50/40 cursor-pointer hover:bg-emerald-50/80" : "border border-slate-200 bg-white cursor-pointer hover:border-blue-300"], "w-full text-left p-3 rounded-2xl flex items-center gap-3 transition relative"])}"><div class="${ssrRenderClass([task.status === "completed" ? "bg-emerald-500 text-white" : task.status === "submitted" ? "bg-amber-400 text-white" : unref(activeTaskId) === task.id ? "bg-blue-600 text-white shadow-sm" : "bg-slate-200 text-slate-500", "h-7 w-7 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0"])}">`);
					if (task.status === "completed") _push(ssrRenderComponent(Icon_default, {
						name: "i-heroicons-check",
						class: "w-4 h-4"
					}, null, _parent));
					else if (task.status === "locked") _push(ssrRenderComponent(Icon_default, {
						name: "i-heroicons-lock-closed",
						class: "w-3.5 h-3.5"
					}, null, _parent));
					else _push(`<span>${ssrInterpolate(task.order)}</span>`);
					_push(`</div><div class="min-w-0 flex-1"><div class="${ssrRenderClass([task.status === "completed" ? "text-emerald-900" : unref(activeTaskId) === task.id ? "text-blue-900" : "text-slate-700", "text-xs font-bold truncate"])}">${ssrInterpolate(task.title)}</div><div class="${ssrRenderClass([task.status === "completed" ? "text-emerald-600 font-semibold" : task.status === "submitted" ? "text-amber-600 font-semibold" : unref(activeTaskId) === task.id ? "text-blue-600 font-semibold" : "text-slate-400", "text-[10px] truncate"])}">${ssrInterpolate(statusLabel(task.status, task.order))}</div></div>`);
					if (task.status === "available") _push(`<span class="h-2 w-2 rounded-full bg-cyan-500 animate-pulse flex-shrink-0"></span>`);
					else _push(`<!---->`);
					_push(`</button>`);
				});
				_push(`<!--]--></div>`);
				if (unref(lockNotice)) _push(`<div class="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-medium"> 🔒 ${ssrInterpolate(unref(lockNotice))}</div>`);
				else _push(`<!---->`);
				_push(`</aside><main class="flex-1 overflow-y-auto p-6 lg:p-8 custom-scroll">`);
				if (unref(activeTask)) {
					_push(`<div class="max-w-3xl mx-auto space-y-6"><div class="bg-white rounded-3xl border border-blue-100 p-6 shadow-sm"><div class="flex flex-wrap items-center justify-between gap-2 mb-3"><span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-extrabold uppercase tracking-wider"> Uneed Quest · Task ${ssrInterpolate(unref(activeTask).order)}</span><span class="text-xs font-bold text-cyan-600 flex items-center gap-1">`);
					_push(ssrRenderComponent(Icon_default, {
						name: "i-heroicons-sparkles",
						class: "w-4 h-4"
					}, null, _parent));
					_push(` +${ssrInterpolate(unref(activeTask).xpReward)} XP </span></div><h2 class="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">${ssrInterpolate(unref(activeTask).title)}</h2><p class="text-sm text-slate-600 leading-relaxed">${ssrInterpolate(unref(activeTask).description)}</p></div><div class="bg-white rounded-3xl border border-blue-100 p-6 shadow-sm space-y-3"><h3 class="text-sm font-extrabold text-slate-800 flex items-center gap-2">`);
					_push(ssrRenderComponent(Icon_default, {
						name: "i-heroicons-clipboard-document-check",
						class: "w-4 h-4 text-blue-600"
					}, null, _parent));
					_push(` Kriteria Kelulusan Quest </h3><div class="space-y-2"><!--[-->`);
					ssrRenderList$2(unref(activeTask).criteria, (item, idx) => {
						_push(`<label class="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80 hover:bg-blue-50/50 border border-slate-100 cursor-pointer transition"><input type="checkbox"${includeBooleanAttr(unref(activeTask).status === "completed") ? " checked" : ""} class="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"><span class="text-xs text-slate-700 leading-relaxed">${ssrInterpolate(item)}</span></label>`);
					});
					_push(`<!--]--></div></div>`);
					if (unref(activeTask).status === "submitted") {
						_push(`<div class="p-6 rounded-3xl border border-amber-200 bg-amber-50/70 space-y-2"><div class="flex items-center gap-2 text-amber-800 font-extrabold text-sm">`);
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-clock",
							class: "w-5 h-5 text-amber-600"
						}, null, _parent));
						_push(` Menunggu Review Mentor </div><p class="text-xs text-amber-700 leading-relaxed"> Submission kamu (<strong>${ssrInterpolate(unref(activeTask).submissionTitle)}</strong>) sudah diterima dan sedang diperiksa mentor. Task ${ssrInterpolate(unref(activeTask).order + 1)} akan terbuka setelah disetujui. </p></div>`);
					} else if (unref(activeTask).status === "completed") {
						_push(`<div class="p-6 rounded-3xl border border-emerald-200 bg-emerald-50/70 space-y-2"><div class="flex items-center gap-2 text-emerald-800 font-extrabold text-sm">`);
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-check-badge",
							class: "w-5 h-5 text-emerald-600"
						}, null, _parent));
						_push(` Tugas Telah Disetujui Mentor (${ssrInterpolate(unref(activeTask).score)}/100) </div><p class="text-xs text-emerald-700 leading-relaxed">${ssrInterpolate(unref(activeTask).mentorFeedback || "Selamat! Kamu lulus quest ini.")}</p></div>`);
					} else {
						_push(`<div class="bg-white rounded-3xl border border-blue-100 p-6 shadow-sm space-y-4"><div class="flex items-center justify-between"><h3 class="text-sm font-extrabold text-slate-800 flex items-center gap-2">`);
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-arrow-up-tray",
							class: "w-4 h-4 text-blue-600"
						}, null, _parent));
						_push(` Pengumpulan Tugas (Submission) </h3><span class="text-[11px] text-slate-400">Wajib untuk membuka Task ${ssrInterpolate(unref(activeTask).order + 1)}</span></div>`);
						if (unref(submissionError)) _push(`<div class="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">${ssrInterpolate(unref(submissionError))}</div>`);
						else _push(`<!---->`);
						_push(`<form class="space-y-3.5"><div><label class="block text-xs font-bold text-slate-700 mb-1">Judul Pengerjaan</label><input${ssrRenderAttr("value", unref(submission).title)} type="text" required placeholder="Contoh: Solusi Task 1" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition"></div><div class="grid grid-cols-1 md:grid-cols-2 gap-3.5"><div><label class="block text-xs font-bold text-slate-700 mb-1">URL GitHub Repository</label><input${ssrRenderAttr("value", unref(submission).githubUrl)} type="url" placeholder="https://github.com/username/repo" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition"></div><div><label class="block text-xs font-bold text-slate-700 mb-1">URL Live Deployment</label><input${ssrRenderAttr("value", unref(submission).liveUrl)} type="url" placeholder="https://myproject.vercel.app" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition"></div></div><div><label class="block text-xs font-bold text-slate-700 mb-1">Catatan untuk Mentor</label><textarea rows="3" required placeholder="Jelaskan hasil pengerjaanmu..." class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition">${ssrInterpolate(unref(submission).description)}</textarea></div><div class="pt-1 flex justify-end"><button type="submit"${includeBooleanAttr(unref(submitting)) ? " disabled" : ""} class="px-7 py-3 rounded-full text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 hover:opacity-90 transition disabled:opacity-50" style="background:linear-gradient(135deg, #22d3ee, #2563eb);">${ssrInterpolate(unref(submitting) ? "Mengirim Tugas..." : "Kumpulkan Tugas ke Mentor")}</button></div></form></div>`);
					}
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`</main><aside class="w-72 flex-shrink-0 border-l border-blue-100 bg-white p-5 space-y-5 hidden xl:block overflow-y-auto custom-scroll"><div><div class="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2.5">Reward Quest Ini</div><div class="p-4 rounded-2xl text-white flex items-center gap-3 shadow-md shadow-blue-500/15" style="background:linear-gradient(135deg, #38bdf8, #2563eb);"><div class="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-trophy",
					class: "w-6 h-6 text-white"
				}, null, _parent));
				_push(`</div><div><div class="text-sm font-black">+${ssrInterpolate(unref(activeTask)?.xpReward || 100)} XP</div><div class="text-[11px] text-cyan-100 font-semibold">Progress Menuju Sertifikat</div></div></div></div><div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3"><div class="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Mentor Pemeriksa</div><div class="flex items-center gap-3"><div class="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">UA</div><div><div class="text-xs font-bold text-slate-800">Tim Mentor Uneed</div><div class="text-[11px] text-slate-500">Code Reviewer</div></div></div><div class="text-[11px] text-slate-500 pt-2 border-t border-slate-200/70 flex items-center justify-between"><span>Estimasi Review</span><span class="font-bold text-blue-700">&lt; 24 Jam</span></div></div></aside></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
// app/pages/student/classroom/[id].vue
var _sfc_setup = _id__vue_vue_type_script_setup_true_lang_default.setup;
_id__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/classroom/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = _id__vue_vue_type_script_setup_true_lang_default;

export { _id__default as default };
//# sourceMappingURL=_id_-BuTxJbnU.mjs.map
