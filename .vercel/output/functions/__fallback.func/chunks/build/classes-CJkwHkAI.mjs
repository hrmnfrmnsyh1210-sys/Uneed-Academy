import { b as useFetch } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, E as ssrRenderComponent, u as unref, $ as ssrRenderClass, Y as ssrInterpolate, a1 as ssrRenderAttr, a0 as includeBooleanAttr, a3 as ssrLooseContain, a4 as ssrLooseEqual, q as ref, b as reactive, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/admin/classes.vue?vue&type=script&setup=true&lang.ts
var classes_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "classes",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const search = ref("");
		const showModal = ref(false);
		const saving = ref(false);
		const savingId = ref("");
		const message = ref("");
		const form = reactive({
			title: "",
			shortDescription: "",
			difficulty: "beginner",
			price: 0,
			estimatedDurationHours: 10,
			status: "draft"
		});
		const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/classes", "$8OOUu9mPrQ")), __temp = await __temp, __restore(), __temp);
		const classes = computed(() => data.value?.classes || []);
		const filteredClasses = computed(() => {
			const keyword = search.value.trim().toLowerCase();
			if (!keyword) return classes.value;
			return classes.value.filter((cls) => cls.title.toLowerCase().includes(keyword) || cls.slug.includes(keyword));
		});
		function money(value) {
			return value ? `Rp${new Intl.NumberFormat("id-ID").format(Number(value))}` : "Gratis";
		}
		function statusClass(status) {
			if (status === "published") return "border-emerald-200 bg-emerald-50 text-emerald-700";
			if (status === "draft") return "border-amber-200 bg-amber-50 text-amber-700";
			return "border-slate-200 bg-slate-100 text-slate-600";
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h1 class="text-xl md:text-2xl font-extrabold text-slate-900">Class Management</h1><p class="text-xs text-slate-500 mt-1">Kelola daftar kelas, harga, dan status publikasi</p></div><button class="px-4 py-2.5 rounded-xl text-white text-xs font-bold transition hover:opacity-90 inline-flex items-center justify-center gap-1.5" style="background:linear-gradient(135deg,#14b8a6,#0ea5e9);">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-plus",
				class: "w-4 h-4"
			}, null, _parent));
			_push(` Buat Kelas Baru </button></div>`);
			if (unref(message)) _push(`<div class="${ssrRenderClass([unref(message).startsWith("✓") ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700", "rounded-xl border px-4 py-3 text-xs font-semibold"])}">${ssrInterpolate(unref(message))}</div>`);
			else _push(`<!---->`);
			_push(`<div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"><div class="p-4 border-b border-slate-100 flex flex-wrap gap-3 items-center justify-between"><div class="text-xs font-bold text-slate-700">${ssrInterpolate(unref(filteredClasses).length)} kelas</div><input${ssrRenderAttr("value", unref(search))} type="text" placeholder="Cari kelas..." class="pl-3.5 pr-4 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-teal-400 w-full sm:w-56"></div><div class="overflow-x-auto"><table class="w-full text-left text-sm min-w-[720px]"><thead class="text-[10px] uppercase text-slate-400 border-b border-slate-100 bg-slate-50"><tr><th class="py-3 px-5">Nama Kelas</th><th class="py-3 px-5">Level</th><th class="py-3 px-5">Harga</th><th class="py-3 px-5">Modul / Quest</th><th class="py-3 px-5">Siswa</th><th class="py-3 px-5">Status</th><th class="py-3 px-5 text-right">Aksi</th></tr></thead><tbody class="divide-y divide-slate-100 text-slate-700"><!--[-->`);
			ssrRenderList$2(unref(filteredClasses), (cls) => {
				_push(`<tr class="hover:bg-slate-50 transition"><td class="py-3.5 px-5"><div class="font-semibold text-slate-800">${ssrInterpolate(cls.title)}</div><div class="text-[11px] text-slate-400">/${ssrInterpolate(cls.slug)}</div></td><td class="py-3.5 px-5 capitalize">${ssrInterpolate(cls.difficulty)}</td><td class="py-3.5 px-5 font-semibold">${ssrInterpolate(money(cls.price))}</td><td class="py-3.5 px-5">${ssrInterpolate(cls.moduleCount)} / ${ssrInterpolate(cls.taskCount)}</td><td class="py-3.5 px-5">${ssrInterpolate(cls.enrollmentCount)}</td><td class="py-3.5 px-5"><select${ssrRenderAttr("value", cls.status)}${includeBooleanAttr(unref(savingId) === cls.id) ? " disabled" : ""} class="${ssrRenderClass([statusClass(cls.status), "px-2.5 py-1 rounded-lg border text-[11px] font-bold outline-none"])}"><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select></td><td class="py-3.5 px-5 text-right"><button${includeBooleanAttr(unref(savingId) === cls.id) ? " disabled" : ""} class="text-[11px] font-bold text-rose-600 hover:underline disabled:opacity-40"> Arsipkan </button></td></tr>`);
			});
			_push(`<!--]-->`);
			if (!unref(filteredClasses).length) _push(`<tr><td colspan="7" class="py-10 text-center text-xs text-slate-400">Tidak ada kelas yang cocok.</td></tr>`);
			else _push(`<!---->`);
			_push(`</tbody></table></div></div>`);
			if (unref(showModal)) {
				_push(`<div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"><div class="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto"><div class="flex items-center justify-between"><h3 class="font-bold text-slate-900 text-base">Tambah Kelas Baru</h3><button class="text-slate-400 hover:text-slate-600">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-x-mark",
					class: "w-5 h-5"
				}, null, _parent));
				_push(`</button></div><form class="space-y-3"><label class="block"><span class="text-[11px] font-bold text-slate-600">Nama Kelas</span><input${ssrRenderAttr("value", unref(form).title)} type="text" required placeholder="Misal: Dasar JavaScript" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Deskripsi Singkat</span><textarea rows="2" placeholder="Ringkasan kelas untuk kartu katalog" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400">${ssrInterpolate(unref(form).shortDescription)}</textarea></label><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><label class="block"><span class="text-[11px] font-bold text-slate-600">Level</span><select class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none"><option value="beginner"${includeBooleanAttr(Array.isArray(unref(form).difficulty) ? ssrLooseContain(unref(form).difficulty, "beginner") : ssrLooseEqual(unref(form).difficulty, "beginner")) ? " selected" : ""}>Beginner</option><option value="intermediate"${includeBooleanAttr(Array.isArray(unref(form).difficulty) ? ssrLooseContain(unref(form).difficulty, "intermediate") : ssrLooseEqual(unref(form).difficulty, "intermediate")) ? " selected" : ""}>Intermediate</option><option value="advanced"${includeBooleanAttr(Array.isArray(unref(form).difficulty) ? ssrLooseContain(unref(form).difficulty, "advanced") : ssrLooseEqual(unref(form).difficulty, "advanced")) ? " selected" : ""}>Advanced</option></select></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Harga (Rp)</span><input${ssrRenderAttr("value", unref(form).price)} type="number" min="0" step="1000" placeholder="0 untuk gratis" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><label class="block"><span class="text-[11px] font-bold text-slate-600">Durasi (jam)</span><input${ssrRenderAttr("value", unref(form).estimatedDurationHours)} type="number" min="1" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Status</span><select class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none"><option value="draft"${includeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "draft") : ssrLooseEqual(unref(form).status, "draft")) ? " selected" : ""}>Draft</option><option value="published"${includeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "published") : ssrLooseEqual(unref(form).status, "published")) ? " selected" : ""}>Published</option></select></label></div><div class="flex justify-end gap-2 pt-2"><button type="button" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button><button type="submit"${includeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-4 py-2 rounded-xl text-white text-xs font-bold disabled:opacity-50" style="background:linear-gradient(135deg,#14b8a6,#0ea5e9);">${ssrInterpolate(unref(saving) ? "Menyimpan..." : "Simpan Kelas")}</button></div></form></div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
// app/pages/admin/classes.vue
var _sfc_setup = classes_vue_vue_type_script_setup_true_lang_default.setup;
classes_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/classes.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var classes_default = classes_vue_vue_type_script_setup_true_lang_default;

export { classes_default as default };
//# sourceMappingURL=classes-CJkwHkAI.mjs.map
