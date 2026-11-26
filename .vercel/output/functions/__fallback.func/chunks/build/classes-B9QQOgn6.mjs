import { b as useFetch } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { P as PublicNavbar_default, a as PublicClassCard_default, b as PublicFooter_default } from './PublicFooter-D49ZN3uW.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, E as ssrRenderComponent, a1 as ssrRenderAttr, u as unref, a0 as includeBooleanAttr, a3 as ssrLooseContain, a4 as ssrLooseEqual, q as ref, m as computed, L as useSSRContext } from '../_/vue.mjs';
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
import './nuxt-link-ssr-render-B7NVepUh.mjs';
import './FolderIcon-DfDpYGvf.mjs';
import './components-CSp8KrgW.mjs';
import '@iconify/utils/lib/css/icon';

// app/pages/classes/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const search = ref("");
		const selectedLevel = ref("ALL");
		const { data: classData } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/public/classes", "$9a4vosP3B8")), __temp = await __temp, __restore(), __temp);
		const classes = computed(() => classData.value?.classes || []);
		const filteredClasses = computed(() => {
			const keyword = search.value.trim().toLowerCase();
			return classes.value.filter((cls) => {
				const matchLevel = selectedLevel.value === "ALL" || cls.difficulty === selectedLevel.value;
				const matchSearch = !keyword || cls.title.toLowerCase().includes(keyword) || (cls.shortDescription || "").toLowerCase().includes(keyword);
				return matchLevel && matchSearch;
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f5f9ff] text-slate-800 font-sans" }, _attrs))}>`);
			_push(ssrRenderComponent(PublicNavbar_default, null, null, _parent));
			_push(`<main class="pt-20"><div class="max-w-7xl mx-auto px-5 pt-12 pb-6"><div class="flex flex-col md:flex-row md:items-end justify-between gap-6"><div><span class="text-xs font-bold uppercase tracking-widest text-blue-600">Katalog Kurikulum</span><h1 class="text-3xl font-extrabold text-slate-900 mt-1">Jelajahi Semua Kelas</h1><p class="text-sm text-slate-500 mt-1">Pilih jalur belajar berbasis project nyata dengan bimbingan mentor.</p></div><div class="flex flex-wrap items-center gap-3"><div class="relative">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-magnifying-glass",
				class: "w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
			}, null, _parent));
			_push(`<input${ssrRenderAttr("value", unref(search))} type="text" placeholder="Cari kelas..." class="pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 w-56"></div><select class="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 outline-none focus:border-blue-400"><option value="ALL"${includeBooleanAttr(Array.isArray(unref(selectedLevel)) ? ssrLooseContain(unref(selectedLevel), "ALL") : ssrLooseEqual(unref(selectedLevel), "ALL")) ? " selected" : ""}>Semua Level</option><option value="beginner"${includeBooleanAttr(Array.isArray(unref(selectedLevel)) ? ssrLooseContain(unref(selectedLevel), "beginner") : ssrLooseEqual(unref(selectedLevel), "beginner")) ? " selected" : ""}>Beginner</option><option value="intermediate"${includeBooleanAttr(Array.isArray(unref(selectedLevel)) ? ssrLooseContain(unref(selectedLevel), "intermediate") : ssrLooseEqual(unref(selectedLevel), "intermediate")) ? " selected" : ""}>Intermediate</option><option value="advanced"${includeBooleanAttr(Array.isArray(unref(selectedLevel)) ? ssrLooseContain(unref(selectedLevel), "advanced") : ssrLooseEqual(unref(selectedLevel), "advanced")) ? " selected" : ""}>Advanced</option></select></div></div></div><div class="max-w-7xl mx-auto px-5 pb-16">`);
			if (unref(filteredClasses).length === 0) _push(`<div class="text-center py-16 bg-white border border-slate-200 rounded-2xl"><div class="text-4xl mb-3">🔍</div><div class="font-bold text-slate-800">Kelas tidak ditemukan</div><p class="text-xs text-slate-500 mt-1">Coba kata kunci atau filter level yang lain.</p></div>`);
			else {
				_push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"><!--[-->`);
				ssrRenderList$2(unref(filteredClasses), (cls) => {
					_push(ssrRenderComponent(PublicClassCard_default, {
						key: cls.slug,
						item: cls
					}, null, _parent));
				});
				_push(`<!--]--></div>`);
			}
			_push(`</div></main>`);
			_push(ssrRenderComponent(PublicFooter_default, null, null, _parent));
			_push(`</div>`);
		};
	}
});
// app/pages/classes/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/classes/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var classes_default = index_vue_vue_type_script_setup_true_lang_default;

export { classes_default as default };
//# sourceMappingURL=classes-B9QQOgn6.mjs.map
