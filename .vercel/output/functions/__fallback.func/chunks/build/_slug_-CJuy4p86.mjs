import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { a as useRoute, g as useUserSession, b as useFetch, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { P as PublicNavbar_default, a as PublicClassCard_default, b as PublicFooter_default } from './PublicFooter-D49ZN3uW.mjs';
import { F as FolderIcon_default } from './FolderIcon-DfDpYGvf.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, E as ssrRenderComponent, u as unref, N as withCtx, X as createTextVNode, Y as ssrInterpolate, _ as toDisplayString, a0 as includeBooleanAttr, Z as ssrRenderStyle, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/classes/[slug].vue?vue&type=script&setup=true&lang.ts
var _slug__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "[slug]",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const route = useRoute();
		const { loggedIn } = useUserSession();
		const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(() => `/api/public/classes/${route.params.slug}`, "$TCEWsyR5c9")), __temp = await __temp, __restore(), __temp);
		const course = computed(() => data.value?.class);
		const modules = computed(() => data.value?.modules || []);
		const testimonials = computed(() => data.value?.testimonials || []);
		const related = computed(() => data.value?.related || []);
		const outcomes = computed(() => course.value?.learningOutcomes || []);
		const prerequisites = computed(() => course.value?.prerequisites || []);
		const audience = computed(() => course.value?.targetAudience || []);
		const tools = computed(() => course.value?.toolsRequired || []);
		const levelLabel = computed(() => {
			return {
				beginner: "Beginner",
				intermediate: "Intermediate",
				advanced: "Advanced"
			}[course.value?.difficulty || ""] || course.value?.difficulty || "";
		});
		const gradients = [
			"linear-gradient(135deg,#38bdf8,#2563eb)",
			"linear-gradient(135deg,#34d399,#059669)",
			"linear-gradient(135deg,#fbbf24,#d97706)"
		];
		function avatarGradient(index) {
			return { background: gradients[index % gradients.length] };
		}
		function initials(name) {
			return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f5f9ff] text-slate-800 font-sans overflow-x-hidden" }, _attrs))}>`);
			_push(ssrRenderComponent(PublicNavbar_default, null, null, _parent));
			if (unref(error)) {
				_push(`<main class="pt-32 pb-24 px-6 text-center"><div class="text-5xl mb-4">📚</div><h1 class="text-2xl font-extrabold text-slate-900">Kelas tidak ditemukan</h1><p class="text-sm text-slate-500 mt-2">Kelas yang kamu cari mungkin tidak tersedia atau sudah diarsipkan.</p>`);
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: "/classes",
					class: "inline-block mt-6 px-6 py-3 rounded-full bg-blue-700 text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-800 transition"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Lihat Semua Kelas `);
						else return [createTextVNode(" Lihat Semua Kelas ")];
					}),
					_: 1
				}, _parent));
				_push(`</main>`);
			} else if (unref(course)) {
				_push(`<main class="pt-20"><section class="relative overflow-hidden text-white pb-20 md:pb-24" style="background:linear-gradient(135deg, #1e3a8a 0%, #2563eb 52%, #0284c7 100%);"><svg class="absolute top-0 right-0 w-[420px] md:w-[620px] h-auto pointer-events-none opacity-80" viewBox="0 0 600 320" fill="none"><path d="M180 0C220 90 310 110 390 155C470 200 520 265 600 280V0H180Z" fill="url(#detailTopWave)"></path><defs><linearGradient id="detailTopWave" x1="180" y1="0" x2="600" y2="280" gradientUnits="userSpaceOnUse"><stop stop-color="#38bdf8" stop-opacity="0.5"></stop><stop offset="1" stop-color="#22d3ee" stop-opacity="0.9"></stop></linearGradient></defs></svg><div class="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-2"><div class="flex items-center gap-2 text-[11px] text-blue-100 mb-8">`);
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: "/",
					class: "hover:text-white transition"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Beranda`);
						else return [createTextVNode("Beranda")];
					}),
					_: 1
				}, _parent));
				_push(`<span>/</span>`);
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: "/classes",
					class: "hover:text-white transition"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Kelas`);
						else return [createTextVNode("Kelas")];
					}),
					_: 1
				}, _parent));
				_push(`<span>/</span><span class="text-white font-semibold">${ssrInterpolate(unref(course).title)}</span></div><div class="grid md:grid-cols-[auto_1fr] gap-8 items-start">`);
				_push(ssrRenderComponent(FolderIcon_default, {
					size: "lg",
					icon: unref(course).icon,
					"back-color": unref(course).backColor,
					"front-gradient": unref(course).frontGradient,
					class: "scale-125 origin-top-left"
				}, null, _parent));
				_push(`<div><div class="flex flex-wrap items-center gap-2 mb-3"><span class="px-3 py-1 rounded-full bg-white/15 border border-white/30 text-[11px] font-bold uppercase tracking-wide">${ssrInterpolate(unref(levelLabel))}</span>`);
				if (unref(course).categoryName) _push(`<span class="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold">${ssrInterpolate(unref(course).categoryName)}</span>`);
				else _push(`<!---->`);
				_push(`</div><h1 class="text-3xl md:text-5xl font-black tracking-tight leading-tight">${ssrInterpolate(unref(course).title)}</h1><p class="text-sm md:text-base text-blue-100 mt-3 max-w-2xl leading-relaxed">${ssrInterpolate(unref(course).shortDescription)}</p><div class="flex flex-wrap gap-x-6 gap-y-3 mt-6 text-xs text-blue-50"><span class="flex items-center gap-1.5">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-clipboard-document-list",
					class: "w-4 h-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(course).totalTasks)} Quest</span><span class="flex items-center gap-1.5">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-clock",
					class: "w-4 h-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(course).estimatedDurationHours)} Jam</span><span class="flex items-center gap-1.5">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-bolt",
					class: "w-4 h-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(course).totalXp)} XP</span><span class="flex items-center gap-1.5">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-user-group",
					class: "w-4 h-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(course).mentors.length)} Mentor</span></div><div class="flex flex-wrap gap-3 mt-7">`);
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: unref(loggedIn) ? "/student/classes" : "/auth/register",
					class: "px-7 py-3 rounded-full bg-white text-blue-700 text-xs font-extrabold uppercase tracking-wider shadow-xl shadow-blue-950/25 hover:bg-cyan-50 transition"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref(loggedIn) ? "Daftar Kelas" : "Daftar Gratis")}`);
						else return [createTextVNode(toDisplayString(unref(loggedIn) ? "Daftar Kelas" : "Daftar Gratis"), 1)];
					}),
					_: 1
				}, _parent));
				_push(`<a href="#kurikulum" class="px-7 py-3 rounded-full border border-white/70 bg-white/10 text-white text-xs font-extrabold uppercase tracking-wider hover:bg-white/20 transition"> Lihat Kurikulum </a></div></div></div></div><svg class="absolute bottom-0 left-0 w-full h-12 md:h-20 pointer-events-none" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none"><path d="M0 40C240 110 480 110 720 65C960 20 1200 10 1440 75V120H0V40Z" fill="#f5f9ff"></path></svg></section><div class="max-w-7xl mx-auto px-6 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div class="lg:col-span-8 space-y-8"><section><h2 class="text-xl font-extrabold text-slate-900 mb-3">Tentang Kelas</h2><p class="text-sm text-slate-600 leading-7 whitespace-pre-line">${ssrInterpolate(unref(course).fullDescription || unref(course).shortDescription)}</p></section>`);
				if (unref(outcomes).length) {
					_push(`<section class="bg-white rounded-3xl border border-blue-100 p-6 shadow-sm"><h2 class="text-xl font-extrabold text-slate-900 mb-4">Yang Akan Kamu Pelajari</h2><div class="grid sm:grid-cols-2 gap-3"><!--[-->`);
					ssrRenderList$2(unref(outcomes), (item, index) => {
						_push(`<div class="flex items-start gap-2.5 text-sm text-slate-600"><div class="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">`);
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-check",
							class: "w-3 h-3"
						}, null, _parent));
						_push(`</div><span class="leading-snug">${ssrInterpolate(item)}</span></div>`);
					});
					_push(`<!--]--></div></section>`);
				} else _push(`<!---->`);
				_push(`<section id="kurikulum" class="scroll-mt-24"><div class="flex flex-wrap items-end justify-between gap-2 mb-4"><div><h2 class="text-xl font-extrabold text-slate-900">Kurikulum Kelas</h2><p class="text-xs text-slate-500 mt-1">${ssrInterpolate(unref(modules).length)} modul · ${ssrInterpolate(unref(course).totalTasks)} quest · ${ssrInterpolate(unref(course).totalXp)} XP</p></div><span class="text-[11px] font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">Sequential Learning</span></div><div class="space-y-3"><!--[-->`);
				ssrRenderList$2(unref(modules), (mod, index) => {
					_push(`<details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden"${includeBooleanAttr(index === 0) ? " open" : ""}><summary class="cursor-pointer list-none px-5 py-4 flex items-center gap-3 hover:bg-slate-50 transition"><span class="h-8 w-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xs font-extrabold flex-shrink-0">${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><span class="flex-1 min-w-0"><span class="block text-sm font-extrabold text-slate-800">${ssrInterpolate(mod.title)}</span><span class="block text-[11px] text-slate-500">${ssrInterpolate(mod.lessons.length)} materi · ${ssrInterpolate(mod.tasks.length)} quest</span></span>`);
					_push(ssrRenderComponent(Icon_default, {
						name: "i-heroicons-chevron-down",
						class: "w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform"
					}, null, _parent));
					_push(`</summary>`);
					if (mod.description) _push(`<div class="px-5 pb-3 text-xs text-slate-500 leading-relaxed">${ssrInterpolate(mod.description)}</div>`);
					else _push(`<!---->`);
					_push(`<div class="px-5 pb-5 space-y-2"><!--[-->`);
					ssrRenderList$2(mod.lessons, (lesson) => {
						_push(`<div class="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 px-3.5 py-2.5">`);
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-document-text",
							class: "w-4 h-4 text-blue-500 flex-shrink-0"
						}, null, _parent));
						_push(`<span class="text-xs font-semibold text-slate-700 flex-1">${ssrInterpolate(lesson.title)}</span><span class="text-[10px] text-slate-400">${ssrInterpolate(lesson.estimatedMinutes)} menit</span></div>`);
					});
					_push(`<!--]--><!--[-->`);
					ssrRenderList$2(mod.tasks, (task, taskIndex) => {
						_push(`<div class="flex items-center gap-3 rounded-xl bg-blue-50/60 border border-blue-100 px-3.5 py-2.5"><span class="h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-extrabold flex-shrink-0">${ssrInterpolate(taskIndex + 1)}</span><span class="min-w-0 flex-1"><span class="block text-xs font-bold text-slate-800">${ssrInterpolate(task.title)}</span>`);
						if (task.description) _push(`<span class="block text-[11px] text-slate-500 truncate">${ssrInterpolate(task.description)}</span>`);
						else _push(`<!---->`);
						_push(`</span><span class="text-[10px] font-bold text-blue-700 whitespace-nowrap">+${ssrInterpolate(task.xpReward)} XP</span></div>`);
					});
					_push(`<!--]--></div></details>`);
				});
				_push(`<!--]--></div></section><section class="grid sm:grid-cols-3 gap-4">`);
				if (unref(prerequisites).length) {
					_push(`<div class="bg-white rounded-2xl border border-slate-200 p-5"><h3 class="text-sm font-extrabold text-slate-900 mb-3">Prasyarat</h3><ul class="space-y-2 text-xs text-slate-600"><!--[-->`);
					ssrRenderList$2(unref(prerequisites), (item, i) => {
						_push(`<li class="flex gap-2"><span class="text-blue-500">•</span>${ssrInterpolate(item)}</li>`);
					});
					_push(`<!--]--></ul></div>`);
				} else _push(`<!---->`);
				if (unref(audience).length) {
					_push(`<div class="bg-white rounded-2xl border border-slate-200 p-5"><h3 class="text-sm font-extrabold text-slate-900 mb-3">Untuk Siapa</h3><ul class="space-y-2 text-xs text-slate-600"><!--[-->`);
					ssrRenderList$2(unref(audience), (item, i) => {
						_push(`<li class="flex gap-2"><span class="text-blue-500">•</span>${ssrInterpolate(item)}</li>`);
					});
					_push(`<!--]--></ul></div>`);
				} else _push(`<!---->`);
				if (unref(tools).length) {
					_push(`<div class="bg-white rounded-2xl border border-slate-200 p-5"><h3 class="text-sm font-extrabold text-slate-900 mb-3">Alat yang Dipakai</h3><ul class="space-y-2 text-xs text-slate-600"><!--[-->`);
					ssrRenderList$2(unref(tools), (item, i) => {
						_push(`<li class="flex gap-2"><span class="text-blue-500">•</span>${ssrInterpolate(item)}</li>`);
					});
					_push(`<!--]--></ul></div>`);
				} else _push(`<!---->`);
				_push(`</section>`);
				if (unref(course).mentors.length) {
					_push(`<section class="bg-white rounded-3xl border border-blue-100 p-6 shadow-sm"><h2 class="text-xl font-extrabold text-slate-900 mb-4">Mentor Kelas</h2><div class="grid sm:grid-cols-2 gap-4"><!--[-->`);
					ssrRenderList$2(unref(course).mentors, (mentor, index) => {
						_push(`<div class="flex items-center gap-3"><div class="h-11 w-11 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 shadow-md" style="${ssrRenderStyle(avatarGradient(index))}">${ssrInterpolate(initials(mentor.name))}</div><div><div class="text-sm font-extrabold text-slate-800">${ssrInterpolate(mentor.name)}</div><div class="text-[11px] text-blue-600 font-semibold">${ssrInterpolate(mentor.headline || "Mentor Uneed Academy")}</div></div></div>`);
					});
					_push(`<!--]--></div></section>`);
				} else _push(`<!---->`);
				if (unref(testimonials).length) {
					_push(`<section class="space-y-3"><h2 class="text-xl font-extrabold text-slate-900">Kata Peserta</h2><!--[-->`);
					ssrRenderList$2(unref(testimonials), (item) => {
						_push(`<div class="rounded-2xl bg-white border border-slate-200 p-5"><div class="flex items-center justify-between gap-3 mb-2"><div><span class="text-sm font-extrabold text-slate-800">${ssrInterpolate(item.name)}</span><span class="text-[11px] text-slate-400 ml-2">${ssrInterpolate(item.headline)}</span></div><span class="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">★ ${ssrInterpolate(item.rating)}.0</span></div><p class="text-xs text-slate-600 leading-relaxed">“${ssrInterpolate(item.quote)}”</p></div>`);
					});
					_push(`<!--]--></section>`);
				} else _push(`<!---->`);
				_push(`</div><aside class="lg:col-span-4 lg:sticky lg:top-28"><div class="bg-white rounded-3xl border border-blue-100 p-6 shadow-lg shadow-blue-500/10"><div class="text-xs text-slate-400 font-semibold">Investasi Kelas</div><div class="text-3xl font-black text-blue-700 mt-1">${ssrInterpolate(unref(course).priceLabel)}</div>`);
				if (unref(course).discountedPrice) _push(`<div class="text-xs text-slate-400 line-through mt-1"> Rp${ssrInterpolate(new Intl.NumberFormat("id-ID").format(unref(course).price))}</div>`);
				else _push(`<!---->`);
				_push(`<div class="space-y-2.5 mt-5 pt-5 border-t border-slate-100 text-xs text-slate-600"><div class="flex items-center gap-2">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-clipboard-document-check",
					class: "w-4 h-4 text-blue-500"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(course).totalTasks)} quest bertahap</div><div class="flex items-center gap-2">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-chat-bubble-left-right",
					class: "w-4 h-4 text-blue-500"
				}, null, _parent));
				_push(` Review langsung dari mentor</div><div class="flex items-center gap-2">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-trophy",
					class: "w-4 h-4 text-blue-500"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(course).totalXp)} XP + sertifikat digital</div><div class="flex items-center gap-2">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-infinity",
					class: "w-4 h-4 text-blue-500"
				}, null, _parent));
				_push(` Akses kelas selamanya</div></div>`);
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: unref(loggedIn) ? "/student/classes" : "/auth/register",
					class: "block w-full mt-6 py-3 rounded-full text-white text-xs font-extrabold text-center uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:opacity-90 transition",
					style: { "background": "linear-gradient(135deg, #22d3ee, #2563eb)" }
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref(loggedIn) ? "Daftar Kelas" : "Daftar Gratis")}`);
						else return [createTextVNode(toDisplayString(unref(loggedIn) ? "Daftar Kelas" : "Daftar Gratis"), 1)];
					}),
					_: 1
				}, _parent));
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: "/classes",
					class: "block text-center text-[11px] font-bold text-slate-500 hover:text-blue-600 mt-3"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Lihat kelas lainnya `);
						else return [createTextVNode(" Lihat kelas lainnya ")];
					}),
					_: 1
				}, _parent));
				_push(`</div></aside></div>`);
				if (unref(related).length) {
					_push(`<section class="max-w-7xl mx-auto px-6 pb-16"><h2 class="text-xl font-extrabold text-slate-900 mb-5">Kelas Lainnya</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"><!--[-->`);
					ssrRenderList$2(unref(related), (cls) => {
						_push(ssrRenderComponent(PublicClassCard_default, {
							key: cls.slug,
							item: cls
						}, null, _parent));
					});
					_push(`<!--]--></div></section>`);
				} else _push(`<!---->`);
				_push(`</main>`);
			} else _push(`<div class="pt-40 pb-24 text-center text-sm text-slate-500">Memuat kelas...</div>`);
			_push(ssrRenderComponent(PublicFooter_default, null, null, _parent));
			_push(`</div>`);
		};
	}
});
// app/pages/classes/[slug].vue
var _sfc_setup = _slug__vue_vue_type_script_setup_true_lang_default.setup;
_slug__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/classes/[slug].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _slug__default = _slug__vue_vue_type_script_setup_true_lang_default;

export { _slug__default as default };
//# sourceMappingURL=_slug_-CJuy4p86.mjs.map
