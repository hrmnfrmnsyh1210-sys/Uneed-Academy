import { b as useFetch } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, E as ssrRenderComponent, u as unref, $ as ssrRenderClass, Y as ssrInterpolate, a0 as includeBooleanAttr, a3 as ssrLooseContain, a4 as ssrLooseEqual, a1 as ssrRenderAttr, q as ref, b as reactive, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/admin/testimonials.vue?vue&type=script&setup=true&lang.ts
var testimonials_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "testimonials",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const showModal = ref(false);
		const saving = ref(false);
		const busyId = ref("");
		const editingId = ref("");
		const message = ref("");
		const form = reactive({
			role: "mentor",
			name: "",
			headline: "",
			quote: "",
			avatarUrl: "",
			classSlug: "",
			rating: 5,
			isActive: true
		});
		const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/testimonials", "$iWJr6zgnob")), __temp = await __temp, __restore(), __temp);
		const testimonials = computed(() => data.value?.testimonials || []);
		const groups = computed(() => [{
			role: "mentor",
			label: "Mentor",
			rows: testimonials.value.filter((item) => item.role === "mentor")
		}, {
			role: "alumni",
			label: "Alumni",
			rows: testimonials.value.filter((item) => item.role === "alumni")
		}]);
		function initials(name) {
			return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h1 class="text-xl md:text-2xl font-extrabold text-slate-900">Mentor &amp; Alumni</h1><p class="text-xs text-slate-500 mt-1">Kelola testimoni yang tampil di halaman landing</p></div><button class="px-4 py-2.5 rounded-xl text-white text-xs font-bold hover:opacity-90 inline-flex items-center gap-1.5" style="background:linear-gradient(135deg,#14b8a6,#0ea5e9);">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-plus",
				class: "w-4 h-4"
			}, null, _parent));
			_push(` Tambah Testimoni </button></div>`);
			if (unref(message)) _push(`<div class="${ssrRenderClass([unref(message).startsWith("✓") ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700", "rounded-xl border px-4 py-3 text-xs font-semibold"])}">${ssrInterpolate(unref(message))}</div>`);
			else _push(`<!---->`);
			_push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-5"><!--[-->`);
			ssrRenderList$2(unref(groups), (group) => {
				_push(`<div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm min-w-0"><div class="flex items-center justify-between mb-4"><h3 class="font-bold text-slate-800 text-sm">${ssrInterpolate(group.label)}</h3><span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700">${ssrInterpolate(group.rows.length)} data</span></div><div class="space-y-2.5"><!--[-->`);
				ssrRenderList$2(group.rows, (item) => {
					_push(`<div class="rounded-xl border border-slate-100 p-3.5 bg-slate-50/60"><div class="flex items-start gap-3"><div class="h-9 w-9 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">${ssrInterpolate(initials(item.name))}</div><div class="min-w-0 flex-1"><div class="flex flex-wrap items-center gap-2"><span class="text-xs font-bold text-slate-800">${ssrInterpolate(item.name)}</span><span class="text-[10px] font-semibold text-amber-600">★ ${ssrInterpolate(item.rating)}.0</span>`);
					if (!item.isActive) _push(`<span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-slate-200 text-slate-600">Nonaktif</span>`);
					else _push(`<!---->`);
					_push(`</div><div class="text-[10px] text-teal-600 font-semibold">${ssrInterpolate(item.headline || "—")}</div><p class="text-[11px] text-slate-500 mt-1 leading-relaxed">“${ssrInterpolate(item.quote)}”</p></div></div><div class="flex flex-wrap gap-2 mt-3 pt-3 border-t border-slate-100"><button class="text-[11px] font-bold text-slate-600 hover:text-teal-700">Edit</button><button${includeBooleanAttr(unref(busyId) === item.id) ? " disabled" : ""} class="text-[11px] font-bold text-slate-600 hover:text-teal-700 disabled:opacity-40">${ssrInterpolate(item.isActive ? "Nonaktifkan" : "Aktifkan")}</button><button${includeBooleanAttr(unref(busyId) === item.id) ? " disabled" : ""} class="text-[11px] font-bold text-rose-600 hover:underline disabled:opacity-40">Hapus</button></div></div>`);
				});
				_push(`<!--]-->`);
				if (!group.rows.length) _push(`<div class="py-8 text-center text-[11px] text-slate-400">Belum ada data.</div>`);
				else _push(`<!---->`);
				_push(`</div></div>`);
			});
			_push(`<!--]--></div>`);
			if (unref(showModal)) {
				_push(`<div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"><div class="bg-white rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto"><h3 class="font-bold text-slate-900">${ssrInterpolate(unref(editingId) ? "Edit Testimoni" : "Tambah Testimoni")}</h3><form class="space-y-3"><div class="grid grid-cols-2 gap-3"><label class="block"><span class="text-[11px] font-bold text-slate-600">Role</span><select class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none"><option value="mentor"${includeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "mentor") : ssrLooseEqual(unref(form).role, "mentor")) ? " selected" : ""}>Mentor</option><option value="alumni"${includeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "alumni") : ssrLooseEqual(unref(form).role, "alumni")) ? " selected" : ""}>Alumni</option></select></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Rating</span><select class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none"><!--[-->`);
				ssrRenderList$2(5, (n) => {
					_push(`<option${ssrRenderAttr("value", n)}${includeBooleanAttr(Array.isArray(unref(form).rating) ? ssrLooseContain(unref(form).rating, n) : ssrLooseEqual(unref(form).rating, n)) ? " selected" : ""}>${ssrInterpolate(n)}</option>`);
				});
				_push(`<!--]--></select></label></div><label class="block"><span class="text-[11px] font-bold text-slate-600">Nama</span><input${ssrRenderAttr("value", unref(form).name)} required type="text" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Headline / Jabatan</span><input${ssrRenderAttr("value", unref(form).headline)} type="text" placeholder="Misal: Lead Frontend Developer" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Testimoni</span><textarea required rows="3" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400">${ssrInterpolate(unref(form).quote)}</textarea></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Slug Kelas Terkait (opsional)</span><input${ssrRenderAttr("value", unref(form).classSlug)} type="text" placeholder="basic-web-development" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label><label class="block"><span class="text-[11px] font-bold text-slate-600">URL Foto (opsional)</span><input${ssrRenderAttr("value", unref(form).avatarUrl)} type="text" placeholder="https://..." class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label><label class="flex items-center gap-2 text-xs font-semibold text-slate-600"><input${includeBooleanAttr(Array.isArray(unref(form).isActive) ? ssrLooseContain(unref(form).isActive, null) : unref(form).isActive) ? " checked" : ""} type="checkbox" class="rounded border-slate-300 text-teal-600"> Tampilkan di landing page </label><div class="flex justify-end gap-2 pt-2"><button type="button" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button><button type="submit"${includeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold disabled:opacity-50">Simpan</button></div></form></div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
// app/pages/admin/testimonials.vue
var _sfc_setup = testimonials_vue_vue_type_script_setup_true_lang_default.setup;
testimonials_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/testimonials.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var testimonials_default = testimonials_vue_vue_type_script_setup_true_lang_default;

export { testimonials_default as default };
//# sourceMappingURL=testimonials-Dp2n6kCc.mjs.map
