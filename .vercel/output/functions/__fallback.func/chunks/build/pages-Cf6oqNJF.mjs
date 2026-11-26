import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { b as useFetch, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { P as PublicNavbar_default, a as PublicClassCard_default, b as PublicFooter_default } from './PublicFooter-D49ZN3uW.mjs';
import { _ as _virtual_public__2Fimages_2Fhero_character_default } from './_virtual_public-BDoCyNyV.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, E as ssrRenderComponent, a1 as ssrRenderAttr, N as withCtx, X as createTextVNode, G as createVNode, u as unref, Y as ssrInterpolate, Z as ssrRenderStyle, m as computed, L as useSSRContext } from '../_/vue.mjs';
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
import './FolderIcon-DfDpYGvf.mjs';
import './components-CSp8KrgW.mjs';
import '@iconify/utils/lib/css/icon';

// app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { data: classData } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/public/classes", "$QD8d9NkvSp")), __temp = await __temp, __restore(), __temp);
		const { data: testimonialData } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/public/testimonials", "$36R8oiM1IC")), __temp = await __temp, __restore(), __temp);
		const featuredClasses = computed(() => (classData.value?.classes || []).slice(0, 3));
		const mentors = computed(() => testimonialData.value?.mentors || []);
		const alumni = computed(() => testimonialData.value?.alumni || []);
		const gradients = [
			"linear-gradient(135deg,#38bdf8,#2563eb)",
			"linear-gradient(135deg,#34d399,#059669)",
			"linear-gradient(135deg,#fbbf24,#d97706)",
			"linear-gradient(135deg,#f472b6,#db2777)"
		];
		function avatarGradient(index) {
			return { background: gradients[index % gradients.length] };
		}
		function initials(name) {
			return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
		}
		const faqs = [
			{
				q: "Apakah pemula tanpa pengalaman coding bisa ikut?",
				a: "Bisa. Kelas Basic Web Development dirancang khusus dari nol dengan panduan bertahap."
			},
			{
				q: "Bagaimana cara kerja Sequential Learning?",
				a: "Setiap tugas akan diperiksa mentor terlebih dahulu. Tugas berikutnya otomatis terbuka setelah disetujui."
			},
			{
				q: "Apakah sertifikat bisa diverifikasi?",
				a: "Ya, setiap sertifikat kelulusan memiliki kode unik dan QR code yang dapat dicek langsung secara online."
			},
			{
				q: "Berapa lama akses kelas berlaku?",
				a: "Akses kelas berlaku selamanya (lifetime) setelah pendaftaran atau pembayaran berhasil."
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f5f9ff] text-slate-800 font-sans overflow-x-hidden" }, _attrs))}>`);
			_push(ssrRenderComponent(PublicNavbar_default, { overlay: "" }, null, _parent));
			_push(`<section class="relative overflow-hidden text-white pt-20 pb-24 md:pb-32" style="background:linear-gradient(135deg, #1e3a8a 0%, #2563eb 52%, #0284c7 100%);"><svg class="absolute top-0 right-0 w-[480px] md:w-[680px] h-auto pointer-events-none opacity-85" viewBox="0 0 600 320" fill="none"><path d="M180 0C220 90 310 110 390 155C470 200 520 265 600 280V0H180Z" fill="url(#topCyan)"></path><defs><linearGradient id="topCyan" x1="180" y1="0" x2="600" y2="280" gradientUnits="userSpaceOnUse"><stop stop-color="#38bdf8" stop-opacity="0.55"></stop><stop offset="1" stop-color="#22d3ee" stop-opacity="0.95"></stop></linearGradient></defs></svg><svg class="absolute bottom-0 left-0 w-[340px] md:w-[520px] h-auto pointer-events-none" viewBox="0 0 500 260" fill="none"><path d="M0 110C90 85 155 155 245 170C335 185 415 130 480 260H0V110Z" fill="url(#leftCyan)"></path><defs><linearGradient id="leftCyan" x1="0" y1="110" x2="480" y2="260" gradientUnits="userSpaceOnUse"><stop stop-color="#22d3ee"></stop><stop offset="1" stop-color="#2563eb" stop-opacity="0.7"></stop></linearGradient></defs></svg><svg class="absolute bottom-4 right-0 w-[260px] md:w-[380px] h-auto pointer-events-none opacity-80" viewBox="0 0 400 280" fill="none"><path d="M400 40C310 60 280 150 200 185C120 220 60 220 20 280H400V40Z" fill="url(#rightBlue)"></path><defs><linearGradient id="rightBlue" x1="20" y1="0" x2="400" y2="280" gradientUnits="userSpaceOnUse"><stop stop-color="#38bdf8" stop-opacity="0.4"></stop><stop offset="1" stop-color="#1d4ed8" stop-opacity="0.9"></stop></linearGradient></defs></svg><div class="hidden md:block absolute top-28 left-12 w-5 h-5 rounded-full bg-cyan-300/60 blur-[0.5px]"></div><div class="hidden md:block absolute bottom-20 left-[40%] w-14 h-14 rounded-full shadow-xl" style="background:radial-gradient(circle at 30% 30%, #67e8f9, #2563eb);"></div><div class="hidden md:block absolute bottom-28 right-[33%] w-9 h-9 rounded-full shadow-lg" style="background:radial-gradient(circle at 30% 30%, #7dd3fc, #1d4ed8);"></div><div class="hidden md:block absolute bottom-20 right-[25%] w-5 h-5 rounded-full bg-cyan-300/70"></div><div class="relative z-10 max-w-7xl mx-auto px-6 pt-6 md:pt-10 grid md:grid-cols-2 gap-10 items-center"><div class="relative flex items-center justify-center py-2"><div class="relative w-80 sm:w-96 md:w-[430px] aspect-square flex items-center justify-center"><img${ssrRenderAttr("src", _virtual_public__2Fimages_2Fhero_character_default)} alt="Maskot Uneed Academy" class="w-full h-full object-contain rounded-full shadow-[0_0_60px_rgba(56,189,248,0.35)]" style="mask-image:radial-gradient(circle, black 62%, transparent 98%);-webkit-mask-image:radial-gradient(circle, black 62%, transparent 98%);"></div></div><div class="text-center md:text-left space-y-6"><div><span class="inline-block px-3.5 py-1 rounded-full bg-white/15 border border-white/30 text-cyan-100 text-xs font-bold tracking-wide mb-4"> Powered by Uneed Developer </span><h1 class="text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-white"> Uneed E-Learning </h1><p class="text-sm md:text-base text-blue-100 mt-3 max-w-md mx-auto md:mx-0 leading-relaxed"> Belajar teknologi terstruktur lewat quest bertahap, review mentor langsung, dan sertifikat digital terverifikasi. </p></div><div class="flex items-start justify-center md:justify-start gap-7 pt-1"><div class="flex flex-col items-center text-center w-24"><div class="h-12 w-12 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-device-phone-mobile",
				class: "w-5 h-5 text-white"
			}, null, _parent));
			_push(`</div><span class="text-[11px] font-semibold text-blue-100 leading-tight">Beginner – Advanced</span></div><div class="flex flex-col items-center text-center w-24"><div class="h-12 w-12 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-shield-check",
				class: "w-5 h-5 text-white"
			}, null, _parent));
			_push(`</div><span class="text-[11px] font-semibold text-blue-100 leading-tight">Mentor Review</span></div><div class="flex flex-col items-center text-center w-24"><div class="h-12 w-12 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-document-arrow-down",
				class: "w-5 h-5 text-white"
			}, null, _parent));
			_push(`</div><span class="text-[11px] font-semibold text-blue-100 leading-tight">Sertifikat Resmi</span></div></div><div class="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/classes",
				class: "px-7 py-3 rounded-full bg-white text-blue-700 text-xs font-extrabold uppercase tracking-wider shadow-xl shadow-blue-950/25 hover:bg-cyan-50 transition"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Jelajahi Kelas `);
					else return [createTextVNode(" Jelajahi Kelas ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/auth/register",
				class: "px-7 py-3 rounded-full border border-white/70 bg-white/10 text-white text-xs font-extrabold uppercase tracking-wider hover:bg-white/20 transition"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Mulai Gratis `);
					else return [createTextVNode(" Mulai Gratis ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div><svg class="absolute bottom-0 left-0 w-full h-14 md:h-24 pointer-events-none" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none"><path d="M0 40C240 110 480 110 720 65C960 20 1200 10 1440 75V120H0V40Z" fill="#f5f9ff"></path></svg></section><section id="kelas" class="scroll-mt-24 max-w-7xl mx-auto px-6 py-14 md:py-16"><div class="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8"><div><span class="text-xs font-bold uppercase tracking-widest text-blue-600">Katalog Kurikulum</span><h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Kelas Unggulan</h2><p class="text-xs md:text-sm text-slate-500 mt-1">Pilih jalur belajar berbasis project nyata dengan bimbingan mentor.</p></div>`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/classes",
				class: "text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(` Lihat semua kelas `);
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-arrow-right",
							class: "w-3.5 h-3.5"
						}, null, _parent, _scopeId));
					} else return [createTextVNode(" Lihat semua kelas "), createVNode(Icon_default, {
						name: "i-heroicons-arrow-right",
						class: "w-3.5 h-3.5"
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			if (unref(featuredClasses).length) {
				_push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"><!--[-->`);
				ssrRenderList$2(unref(featuredClasses), (cls) => {
					_push(ssrRenderComponent(PublicClassCard_default, {
						key: cls.slug,
						item: cls
					}, null, _parent));
				});
				_push(`<!--]--></div>`);
			} else _push(`<div class="rounded-3xl border border-dashed border-slate-300 bg-white/60 p-10 text-center text-sm text-slate-500"> Kelas belum tersedia. </div>`);
			_push(`</section><section id="mentor" class="scroll-mt-24 relative max-w-7xl mx-auto px-6 py-12 md:py-16"><div class="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8"><div><span class="text-xs font-bold uppercase tracking-widest text-blue-600">Orang di Balik Proses</span><h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Mentor &amp; Alumni</h2><p class="text-xs md:text-sm text-slate-500 mt-1">Masukan jujur dari pendamping dan mereka yang sudah menjalani kelas.</p></div>`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/classes",
				class: "text-xs font-bold text-blue-600 hover:underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Mulai belajar →`);
					else return [createTextVNode("Mulai belajar →")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="grid lg:grid-cols-2 gap-6"><div class="rounded-3xl bg-white border border-blue-100 p-6 shadow-sm"><div class="flex items-center justify-between mb-5"><h3 class="font-extrabold text-slate-900">Mentor Kami</h3><span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">${ssrInterpolate(unref(mentors).length)} mentor</span></div><div class="space-y-4"><!--[-->`);
			ssrRenderList$2(unref(mentors).slice(0, 3), (person, index) => {
				_push(`<div class="flex items-start gap-3.5"><div class="h-11 w-11 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 shadow-md" style="${ssrRenderStyle(avatarGradient(index))}">${ssrInterpolate(initials(person.name))}</div><div class="min-w-0"><div class="text-sm font-extrabold text-slate-800">${ssrInterpolate(person.name)}</div><div class="text-[11px] text-blue-600 font-semibold">${ssrInterpolate(person.headline)}</div><p class="text-xs text-slate-500 leading-relaxed mt-1">${ssrInterpolate(person.quote)}</p></div></div>`);
			});
			_push(`<!--]--></div></div><div class="rounded-3xl p-6 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden" style="background:linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);"><div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div><div class="relative flex items-center justify-between mb-5"><h3 class="font-extrabold">Kata Alumni</h3><span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/20">Dari peserta nyata</span></div><div class="relative space-y-3"><!--[-->`);
			ssrRenderList$2(unref(alumni).slice(0, 3), (person, index) => {
				_push(`<div class="rounded-2xl bg-white/10 border border-white/20 p-3.5 backdrop-blur-sm"><div class="flex items-center gap-2.5 mb-1.5"><div class="h-8 w-8 rounded-full bg-white/25 flex items-center justify-center font-extrabold text-[11px] flex-shrink-0">${ssrInterpolate(initials(person.name))}</div><div class="min-w-0"><div class="text-xs font-extrabold truncate">${ssrInterpolate(person.name)}</div><div class="text-[10px] text-cyan-100 truncate">${ssrInterpolate(person.headline)}</div></div><span class="ml-auto text-[10px] font-bold text-amber-200 whitespace-nowrap">★ ${ssrInterpolate(person.rating)}.0</span></div><p class="text-[11px] text-blue-50/90 leading-relaxed">“${ssrInterpolate(person.quote)}”</p></div>`);
			});
			_push(`<!--]--></div></div></div></section><section class="relative max-w-7xl mx-auto px-6 py-6 md:py-10"><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div class="lg:col-span-5 space-y-6"><div><h2 class="text-lg font-extrabold text-slate-900 mb-4">Sequential Engine &amp; Support</h2><div class="rounded-3xl p-6 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden" style="background:linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);"><div class="text-xl font-extrabold mb-1">Live Mentor Support</div><p class="text-xs text-cyan-100 mb-5">Tugas berikutnya terbuka otomatis setelah disetujui mentor.</p><div class="flex flex-wrap gap-2 mb-5"><span class="px-3 py-1 rounded-full bg-white/20 text-[10px] font-bold">Sequential Quest</span><span class="px-3 py-1 rounded-full bg-white/20 text-[10px] font-bold">Badge &amp; XP</span><span class="px-3 py-1 rounded-full bg-white/20 text-[10px] font-bold">QR Cert</span></div><div class="flex justify-end">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/verify/UA-2026-DEMO001",
				class: "px-4 py-1.5 rounded-full border border-white/70 bg-white/10 text-[11px] font-bold hover:bg-white hover:text-blue-700 transition"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Cek Sertifikat `);
					else return [createTextVNode(" Cek Sertifikat ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div><div class="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm"><h3 class="text-base font-extrabold text-slate-900 mb-3">Mulai Belajar Sekarang</h3><div class="flex items-center gap-3 mb-4"><div class="h-10 w-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 flex-shrink-0">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-user-circle",
				class: "w-6 h-6"
			}, null, _parent));
			_push(`</div><p class="text-[11px] text-slate-500 leading-relaxed"> Daftar gratis untuk mengakses kelas Basic Web Development dan kumpulkan badge pertamamu. </p></div><div class="flex items-center gap-3">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/classes",
				class: "flex-1 py-2.5 rounded-full text-white text-xs font-extrabold text-center uppercase tracking-wider shadow-md shadow-cyan-500/20 hover:opacity-90 transition",
				style: { "background": "linear-gradient(135deg, #22d3ee, #2563eb)" }
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Lihat Kelas `);
					else return [createTextVNode(" Lihat Kelas ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/auth/register",
				class: "flex-1 py-2.5 rounded-full border border-slate-300 bg-white text-slate-700 text-xs font-extrabold text-center uppercase tracking-wider hover:border-blue-500 hover:text-blue-700 transition"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Daftar `);
					else return [createTextVNode(" Daftar ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div><div class="lg:col-span-7 flex items-center justify-center gap-4 pt-2"><div class="w-40 sm:w-44 rounded-[28px] bg-slate-900 p-2 shadow-2xl border-2 border-slate-800"><div class="bg-white rounded-[22px] overflow-hidden"><div class="h-24 p-3 text-white flex flex-col justify-between" style="background:linear-gradient(135deg, #38bdf8, #2563eb);"><div class="flex justify-between items-center text-[8px] font-bold opacity-80"><span>9:41</span><span>Uneed</span></div><div><div class="text-[9px] opacity-85">Quest Aktif</div><div class="text-[11px] font-extrabold leading-tight">Basic Web Dev</div></div></div><div class="p-3 space-y-2"><div class="p-2 rounded-xl bg-blue-50 border border-blue-100"><div class="text-[9px] font-bold text-blue-900">Task 3: CSS Layout</div><div class="h-1.5 bg-blue-200 rounded-full mt-1.5"><div class="h-full w-2/3 bg-blue-600 rounded-full"></div></div></div><div class="p-2 rounded-xl bg-slate-50 border border-slate-100 text-[9px] text-slate-600 font-semibold">✓ Task 2 Disetujui</div><div class="p-2 rounded-xl bg-slate-50 border border-slate-100 text-[9px] text-slate-400">🔒 Task 4 Terkunci</div></div></div></div><div class="w-40 sm:w-44 rounded-[28px] bg-slate-900 p-2 shadow-2xl border-2 border-slate-800 mt-6"><div class="bg-white rounded-[22px] overflow-hidden"><div class="p-3 border-b border-slate-100 flex items-center justify-between"><span class="text-[9px] font-bold text-slate-800">Profil Siswa</span><span class="h-2 w-2 rounded-full bg-emerald-400"></span></div><div class="p-3 space-y-2.5"><div class="p-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center gap-2"><div class="h-8 w-8 rounded-full bg-white/25 flex items-center justify-center font-bold text-[10px]">BR</div><div><div class="text-[10px] font-bold">Budi Raharjo</div><div class="text-[8px] text-cyan-100">1.250 XP · Level 3</div></div></div><div class="grid grid-cols-2 gap-1.5 text-center"><div class="p-2 rounded-xl bg-slate-50 border border-slate-100"><div class="text-xs font-black text-blue-600">12</div><div class="text-[8px] text-slate-500">Badge</div></div><div class="p-2 rounded-xl bg-slate-50 border border-slate-100"><div class="text-xs font-black text-cyan-600">2</div><div class="text-[8px] text-slate-500">Sertifikat</div></div></div><div class="p-2 rounded-xl bg-emerald-50 border border-emerald-100 text-[9px] font-bold text-emerald-700 text-center">Terverifikasi QR</div></div></div></div></div></div><svg class="hidden md:block absolute -bottom-8 -right-10 w-72 h-auto pointer-events-none opacity-85" viewBox="0 0 320 200" fill="none"><path d="M320 10C220 35 190 120 110 145C40 165 15 180 0 200H320V10Z" fill="url(#bottomWave)"></path><defs><linearGradient id="bottomWave" x1="0" y1="10" x2="320" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#22d3ee"></stop><stop offset="1" stop-color="#2563eb"></stop></linearGradient></defs></svg></section><section id="faq" class="scroll-mt-24 max-w-7xl mx-auto px-6 py-12 border-t border-slate-200/70"><div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2"><div><h2 class="text-xl font-extrabold text-slate-900">Pertanyaan Umum</h2><p class="text-xs text-slate-500 mt-1">Informasi singkat seputar sistem belajar di Uneed Academy.</p></div>`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/classes",
				class: "text-xs font-bold text-blue-600 hover:underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Lihat semua kelas →`);
					else return [createTextVNode("Lihat semua kelas →")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="grid md:grid-cols-2 gap-4"><!--[-->`);
			ssrRenderList$2(faqs, (q) => {
				_push(`<div class="bg-white border border-slate-200 rounded-2xl p-5"><div class="font-bold text-slate-800 text-sm mb-1.5">${ssrInterpolate(q.q)}</div><div class="text-xs text-slate-500 leading-relaxed">${ssrInterpolate(q.a)}</div></div>`);
			});
			_push(`<!--]--></div></section>`);
			_push(ssrRenderComponent(PublicFooter_default, null, null, _parent));
			_push(`</div>`);
		};
	}
});
// app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-Cf6oqNJF.mjs.map
