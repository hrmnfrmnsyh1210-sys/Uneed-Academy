import { b as useFetch } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, Y as ssrInterpolate, u as unref, a1 as ssrRenderAttr, Z as ssrRenderStyle, q as ref, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/admin/students.vue?vue&type=script&setup=true&lang.ts
var students_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "students",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const search = ref("");
		const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/students", "$p4rVebFPyE")), __temp = await __temp, __restore(), __temp);
		const students = computed(() => data.value?.students || []);
		const filteredStudents = computed(() => {
			const keyword = search.value.trim().toLowerCase();
			if (!keyword) return students.value;
			return students.value.filter((s) => s.name.toLowerCase().includes(keyword) || s.email.toLowerCase().includes(keyword));
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h1 class="text-xl md:text-2xl font-extrabold text-slate-900">Student Monitoring</h1><p class="text-xs text-slate-500 mt-1">Pantau progres belajar dan keaktifan siswa</p></div><div class="text-xs font-bold text-slate-600">${ssrInterpolate(unref(students).length)} siswa terdaftar</div></div><div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"><div class="p-4 border-b border-slate-100"><input${ssrRenderAttr("value", unref(search))} type="text" placeholder="Cari nama atau email siswa..." class="w-full sm:w-72 pl-3.5 pr-4 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-teal-400"></div><div class="overflow-x-auto"><table class="w-full text-left text-sm min-w-[760px]"><thead class="text-[10px] uppercase text-slate-400 border-b border-slate-100 bg-slate-50"><tr><th class="py-3 px-5">Nama Siswa</th><th class="py-3 px-5">Kelas Aktif</th><th class="py-3 px-5">Kelas Terakhir</th><th class="py-3 px-5">Progress Rata-rata</th><th class="py-3 px-5">Total XP</th><th class="py-3 px-5">Sertifikat</th></tr></thead><tbody class="divide-y divide-slate-100 text-slate-700"><!--[-->`);
			ssrRenderList$2(unref(filteredStudents), (s) => {
				_push(`<tr class="hover:bg-slate-50 transition"><td class="py-3.5 px-5"><div class="font-semibold text-slate-800">${ssrInterpolate(s.name)}</div><div class="text-xs text-slate-400">${ssrInterpolate(s.email)}</div></td><td class="py-3.5 px-5">${ssrInterpolate(s.activeClasses)}</td><td class="py-3.5 px-5 text-xs">${ssrInterpolate(s.latestClass || "—")}</td><td class="py-3.5 px-5"><div class="flex items-center gap-2"><div class="h-1.5 w-20 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-teal-500 rounded-full" style="${ssrRenderStyle({ width: `${Math.min(100, s.averageProgress)}%` })}"></div></div><span class="text-xs font-semibold text-teal-600">${ssrInterpolate(s.averageProgress)}%</span></div></td><td class="py-3.5 px-5 font-bold">${ssrInterpolate(s.totalXp)} XP</td><td class="py-3.5 px-5">${ssrInterpolate(s.certificates)}</td></tr>`);
			});
			_push(`<!--]-->`);
			if (!unref(filteredStudents).length) _push(`<tr><td colspan="6" class="py-10 text-center text-xs text-slate-400">Belum ada siswa terdaftar.</td></tr>`);
			else _push(`<!---->`);
			_push(`</tbody></table></div></div></div>`);
		};
	}
});
// app/pages/admin/students.vue
var _sfc_setup = students_vue_vue_type_script_setup_true_lang_default.setup;
students_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/students.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var students_default = students_vue_vue_type_script_setup_true_lang_default;

export { students_default as default };
//# sourceMappingURL=students-BWlr21Ef.mjs.map
