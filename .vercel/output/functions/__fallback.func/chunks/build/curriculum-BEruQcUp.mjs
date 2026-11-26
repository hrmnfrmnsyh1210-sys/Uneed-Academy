import { b as useFetch } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, I as withAsyncContext, O as watch, W as ssrRenderAttrs, J as mergeProps, a0 as includeBooleanAttr, u as unref, a3 as ssrLooseContain, a4 as ssrLooseEqual, a1 as ssrRenderAttr, Y as ssrInterpolate, $ as ssrRenderClass, E as ssrRenderComponent, q as ref, b as reactive, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/admin/curriculum.vue?vue&type=script&setup=true&lang.ts
var curriculum_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "curriculum",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const showModule = ref(false);
		const showTask = ref(false);
		const saving = ref(false);
		const message = ref("");
		const selectedClassId = ref("");
		const moduleForm = reactive({
			title: "",
			description: ""
		});
		const taskForm = reactive({
			title: "",
			description: "",
			instructions: "",
			taskType: "coding",
			xpReward: 100
		});
		const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/curriculum", "$w4KeyoR8aj")), __temp = await __temp, __restore(), __temp);
		const curriculum = computed(() => data.value?.curriculum || []);
		const selectedClass = computed(() => curriculum.value.find((cls) => cls.id === selectedClassId.value) || null);
		watch(curriculum, (list) => {
			if (!selectedClassId.value && list.length) selectedClassId.value = list[0].id;
		}, { immediate: true });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h1 class="text-xl md:text-2xl font-extrabold text-slate-900">Curriculum Builder</h1><p class="text-xs text-slate-500 mt-1">Susun modul dan quest berurutan (Sequential Learning Engine)</p></div><select class="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold outline-none focus:border-teal-400 w-full sm:w-64"><option value=""${includeBooleanAttr(Array.isArray(unref(selectedClassId)) ? ssrLooseContain(unref(selectedClassId), "") : ssrLooseEqual(unref(selectedClassId), "")) ? " selected" : ""}>Pilih kelas...</option><!--[-->`);
			ssrRenderList$2(unref(curriculum), (cls) => {
				_push(`<option${ssrRenderAttr("value", cls.id)}${includeBooleanAttr(Array.isArray(unref(selectedClassId)) ? ssrLooseContain(unref(selectedClassId), cls.id) : ssrLooseEqual(unref(selectedClassId), cls.id)) ? " selected" : ""}>${ssrInterpolate(cls.title)}</option>`);
			});
			_push(`<!--]--></select></div>`);
			if (unref(message)) _push(`<div class="${ssrRenderClass([unref(message).startsWith("✓") ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700", "rounded-xl border px-4 py-3 text-xs font-semibold"])}">${ssrInterpolate(unref(message))}</div>`);
			else _push(`<!---->`);
			if (unref(selectedClass)) {
				_push(`<!--[--><div class="grid grid-cols-2 sm:grid-cols-4 gap-3"><div class="bg-white rounded-2xl border border-slate-200 p-4"><div class="text-[10px] uppercase font-bold text-slate-400">Modul</div><div class="text-xl font-black text-slate-800 mt-1">${ssrInterpolate(unref(selectedClass).modules.length)}</div></div><div class="bg-white rounded-2xl border border-slate-200 p-4"><div class="text-[10px] uppercase font-bold text-slate-400">Quest</div><div class="text-xl font-black text-slate-800 mt-1">${ssrInterpolate(unref(selectedClass).totalTasks)}</div></div><div class="bg-white rounded-2xl border border-slate-200 p-4"><div class="text-[10px] uppercase font-bold text-slate-400">Total XP</div><div class="text-xl font-black text-slate-800 mt-1">${ssrInterpolate(unref(selectedClass).totalXp)}</div></div><div class="bg-white rounded-2xl border border-slate-200 p-4"><div class="text-[10px] uppercase font-bold text-slate-400">Status Kelas</div><div class="${ssrRenderClass([unref(selectedClass).status === "published" ? "text-emerald-600" : "text-amber-600", "text-sm font-black capitalize mt-2"])}">${ssrInterpolate(unref(selectedClass).status)}</div></div></div><div class="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 space-y-4 shadow-sm"><div class="flex flex-wrap items-center justify-between gap-3"><div><div class="font-bold text-slate-800 text-sm">${ssrInterpolate(unref(selectedClass).title)}</div><div class="text-[11px] text-slate-500">Modul dan quest ditampilkan berurutan sesuai urutan dibuat.</div></div><button class="px-3.5 py-2 rounded-xl bg-teal-600 text-white text-[11px] font-bold hover:bg-teal-700 inline-flex items-center gap-1.5">`);
				_push(ssrRenderComponent(Icon_default, {
					name: "i-heroicons-plus",
					class: "w-3.5 h-3.5"
				}, null, _parent));
				_push(` Tambah Modul </button></div>`);
				if (!unref(selectedClass).modules.length) _push(`<div class="py-10 text-center text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl"> Belum ada modul. Tambah modul pertama untuk mulai menyusun kurikulum. </div>`);
				else _push(`<!---->`);
				_push(`<!--[-->`);
				ssrRenderList$2(unref(selectedClass).modules, (mod, index) => {
					_push(`<div class="rounded-2xl border border-slate-200 overflow-hidden"><div class="p-4 bg-slate-50/70 flex flex-wrap items-center gap-3 border-b border-slate-100"><span class="h-7 w-7 rounded-lg bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">${ssrInterpolate(index + 1)}</span><div class="min-w-0 flex-1"><div class="text-sm font-bold text-slate-800">${ssrInterpolate(mod.title)}</div><div class="text-[11px] text-slate-500">${ssrInterpolate(mod.lessons.length)} materi · ${ssrInterpolate(mod.tasks.length)} quest</div></div><button class="px-3 py-1.5 rounded-lg border border-teal-200 text-teal-700 text-[11px] font-bold hover:bg-teal-50"> + Quest </button></div>`);
					if (mod.description) _push(`<div class="px-4 pt-3 text-[11px] text-slate-500">${ssrInterpolate(mod.description)}</div>`);
					else _push(`<!---->`);
					_push(`<div class="p-4 space-y-2"><!--[-->`);
					ssrRenderList$2(mod.tasks, (task, taskIndex) => {
						_push(`<div class="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3.5 py-2.5"><span class="h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">${ssrInterpolate(taskIndex + 1)}</span><div class="min-w-0 flex-1"><div class="text-xs font-bold text-slate-800 truncate">${ssrInterpolate(task.title)}</div><div class="text-[10px] text-slate-400 capitalize">${ssrInterpolate(task.taskType.replace("_", " "))}</div></div><span class="text-[11px] font-bold text-blue-700 whitespace-nowrap">+${ssrInterpolate(task.xpReward)} XP</span><span class="${ssrRenderClass([task.status === "published" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500", "text-[10px] font-semibold px-2 py-0.5 rounded-full"])}">${ssrInterpolate(task.status)}</span></div>`);
					});
					_push(`<!--]-->`);
					if (!mod.tasks.length) _push(`<div class="py-3 text-center text-[11px] text-slate-400">Belum ada quest di modul ini.</div>`);
					else _push(`<!---->`);
					_push(`</div></div>`);
				});
				_push(`<!--]--></div><!--]-->`);
			} else _push(`<div class="bg-white border border-slate-200 rounded-2xl py-16 text-center text-xs text-slate-400"> Pilih kelas untuk melihat dan menyusun kurikulum. </div>`);
			if (unref(showModule)) _push(`<div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"><div class="bg-white rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl"><h3 class="font-bold text-slate-900">Tambah Modul</h3><form class="space-y-3"><label class="block"><span class="text-[11px] font-bold text-slate-600">Judul Modul</span><input${ssrRenderAttr("value", unref(moduleForm).title)} required type="text" placeholder="Misal: HTML Semantik" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Deskripsi (opsional)</span><textarea rows="2" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400">${ssrInterpolate(unref(moduleForm).description)}</textarea></label><div class="flex justify-end gap-2 pt-2"><button type="button" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button><button type="submit"${includeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold disabled:opacity-50">Simpan</button></div></form></div></div>`);
			else _push(`<!---->`);
			if (unref(showTask)) _push(`<div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"><div class="bg-white rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto"><h3 class="font-bold text-slate-900">Tambah Quest</h3><form class="space-y-3"><label class="block"><span class="text-[11px] font-bold text-slate-600">Judul Quest</span><input${ssrRenderAttr("value", unref(taskForm).title)} required type="text" placeholder="Misal: Buat halaman profil" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label><div class="grid grid-cols-2 gap-3"><label class="block"><span class="text-[11px] font-bold text-slate-600">Tipe</span><select class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none"><option value="coding"${includeBooleanAttr(Array.isArray(unref(taskForm).taskType) ? ssrLooseContain(unref(taskForm).taskType, "coding") : ssrLooseEqual(unref(taskForm).taskType, "coding")) ? " selected" : ""}>Coding</option><option value="reading"${includeBooleanAttr(Array.isArray(unref(taskForm).taskType) ? ssrLooseContain(unref(taskForm).taskType, "reading") : ssrLooseEqual(unref(taskForm).taskType, "reading")) ? " selected" : ""}>Reading</option><option value="project"${includeBooleanAttr(Array.isArray(unref(taskForm).taskType) ? ssrLooseContain(unref(taskForm).taskType, "project") : ssrLooseEqual(unref(taskForm).taskType, "project")) ? " selected" : ""}>Project</option><option value="quiz"${includeBooleanAttr(Array.isArray(unref(taskForm).taskType) ? ssrLooseContain(unref(taskForm).taskType, "quiz") : ssrLooseEqual(unref(taskForm).taskType, "quiz")) ? " selected" : ""}>Quiz</option><option value="deployment"${includeBooleanAttr(Array.isArray(unref(taskForm).taskType) ? ssrLooseContain(unref(taskForm).taskType, "deployment") : ssrLooseEqual(unref(taskForm).taskType, "deployment")) ? " selected" : ""}>Deployment</option><option value="final_project"${includeBooleanAttr(Array.isArray(unref(taskForm).taskType) ? ssrLooseContain(unref(taskForm).taskType, "final_project") : ssrLooseEqual(unref(taskForm).taskType, "final_project")) ? " selected" : ""}>Final Project</option></select></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Reward XP</span><input${ssrRenderAttr("value", unref(taskForm).xpReward)} type="number" min="0" step="10" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label></div><label class="block"><span class="text-[11px] font-bold text-slate-600">Deskripsi Singkat</span><textarea rows="2" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400">${ssrInterpolate(unref(taskForm).description)}</textarea></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Instruksi untuk Siswa</span><textarea rows="3" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400">${ssrInterpolate(unref(taskForm).instructions)}</textarea></label><div class="flex justify-end gap-2 pt-2"><button type="button" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button><button type="submit"${includeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold disabled:opacity-50">Simpan</button></div></form></div></div>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
// app/pages/admin/curriculum.vue
var _sfc_setup = curriculum_vue_vue_type_script_setup_true_lang_default.setup;
curriculum_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/curriculum.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var curriculum_default = curriculum_vue_vue_type_script_setup_true_lang_default;

export { curriculum_default as default };
//# sourceMappingURL=curriculum-BEruQcUp.mjs.map
