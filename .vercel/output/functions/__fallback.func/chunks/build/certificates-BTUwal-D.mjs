import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { b as useFetch, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, Y as ssrInterpolate, u as unref, a1 as ssrRenderAttr, $ as ssrRenderClass, N as withCtx, X as createTextVNode, q as ref, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/admin/certificates.vue?vue&type=script&setup=true&lang.ts
var certificates_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "certificates",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const search = ref("");
		const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/certificates", "$Kv592zVJM6")), __temp = await __temp, __restore(), __temp);
		const certificates = computed(() => data.value?.certificates || []);
		const filteredCertificates = computed(() => {
			const keyword = search.value.trim().toLowerCase();
			if (!keyword) return certificates.value;
			return certificates.value.filter((cert) => cert.certificateNumber.toLowerCase().includes(keyword) || cert.recipientName.toLowerCase().includes(keyword));
		});
		function formatDate(value) {
			if (!value) return "—";
			return new Date(value).toLocaleDateString("id-ID", {
				day: "numeric",
				month: "short",
				year: "numeric"
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div><h1 class="text-xl md:text-2xl font-extrabold text-slate-900">Certificates</h1><p class="text-xs text-slate-500 mt-1">Daftar sertifikat kelulusan resmi yang diterbitkan</p></div><div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"><div class="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3"><div class="text-xs font-bold text-slate-700">${ssrInterpolate(unref(certificates).length)} sertifikat</div><input${ssrRenderAttr("value", unref(search))} type="text" placeholder="Cari nomor atau penerima..." class="w-full sm:w-64 pl-3.5 pr-4 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-teal-400"></div><div class="overflow-x-auto"><table class="w-full text-left text-sm min-w-[720px]"><thead class="text-[10px] uppercase text-slate-400 border-b border-slate-100 bg-slate-50"><tr><th class="py-3 px-5">Nomor Sertifikat</th><th class="py-3 px-5">Penerima</th><th class="py-3 px-5">Kelas</th><th class="py-3 px-5">Nilai</th><th class="py-3 px-5">Diterbitkan</th><th class="py-3 px-5">Verifikasi</th></tr></thead><tbody class="divide-y divide-slate-100 text-slate-700"><!--[-->`);
			ssrRenderList$2(unref(filteredCertificates), (cert) => {
				_push(`<tr class="hover:bg-slate-50 transition"><td class="py-3.5 px-5 font-mono text-[11px] font-bold text-teal-700">${ssrInterpolate(cert.certificateNumber)}</td><td class="py-3.5 px-5"><div class="font-semibold">${ssrInterpolate(cert.recipientName)}</div><div class="text-[11px] text-slate-400">${ssrInterpolate(cert.recipientEmail)}</div></td><td class="py-3.5 px-5">${ssrInterpolate(cert.className)}</td><td class="py-3.5 px-5 font-bold">${ssrInterpolate(cert.finalScore)}</td><td class="py-3.5 px-5 text-xs">${ssrInterpolate(formatDate(cert.issuedAt))}</td><td class="py-3.5 px-5"><div class="flex items-center gap-2"><span class="${ssrRenderClass([cert.status === "valid" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700", "px-2 py-0.5 rounded-full text-[10px] font-bold"])}">${ssrInterpolate(cert.status === "valid" ? "Valid" : "Dicabut")}</span>`);
				_push(ssrRenderNuxtLink(NuxtLink, {
					to: `/verify/${cert.certificateNumber}`,
					class: "text-[11px] font-bold text-teal-600 hover:underline whitespace-nowrap"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Lihat → `);
						else return [createTextVNode(" Lihat → ")];
					}),
					_: 2
				}, _parent));
				_push(`</div></td></tr>`);
			});
			_push(`<!--]-->`);
			if (!unref(filteredCertificates).length) _push(`<tr><td colspan="6" class="py-10 text-center text-xs text-slate-400">Belum ada sertifikat diterbitkan.</td></tr>`);
			else _push(`<!---->`);
			_push(`</tbody></table></div></div></div>`);
		};
	}
});
// app/pages/admin/certificates.vue
var _sfc_setup = certificates_vue_vue_type_script_setup_true_lang_default.setup;
certificates_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/certificates.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var certificates_default = certificates_vue_vue_type_script_setup_true_lang_default;

export { certificates_default as default };
//# sourceMappingURL=certificates-BTUwal-D.mjs.map
