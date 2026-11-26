import { g as useUserSession } from '../virtual/entry.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, Y as ssrInterpolate, u as unref, Z as ssrRenderStyle, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/student/achievements.vue?vue&type=script&setup=true&lang.ts
var achievements_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "achievements",
	__ssrInlineRender: true,
	setup(__props) {
		const { user } = useUserSession();
		const totalXp = computed(() => user.value?.totalXp || 0);
		const currentLevel = computed(() => user.value?.currentLevel || 1);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div><h1 class="text-2xl font-extrabold text-slate-900">Badge &amp; Pencapaian</h1><p class="text-sm text-slate-500 mt-1">Koleksi badge dan XP yang telah kamu raih.</p></div><div class="rounded-3xl p-6 text-white shadow-lg shadow-blue-500/20" style="background:linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #06b6d4 100%);"><div class="flex items-center justify-between"><div><div class="text-xs font-semibold opacity-80 mb-1">Total XP</div><div class="text-4xl font-black">${ssrInterpolate(unref(totalXp))} XP</div><div class="text-xs text-cyan-200 mt-1 font-semibold">Level ${ssrInterpolate(unref(currentLevel))}</div></div><div class="h-16 w-16 rounded-2xl bg-white/15 flex items-center justify-center text-4xl">🏆</div></div><div class="mt-4"><div class="flex justify-between text-xs opacity-80 mb-1"><span>Progress ke Level ${ssrInterpolate(unref(currentLevel) + 1)}</span><span>${ssrInterpolate(unref(totalXp) % 500)} / 500 XP</span></div><div class="h-2 bg-white/20 rounded-full"><div class="h-full bg-cyan-300 rounded-full transition-all" style="${ssrRenderStyle(`width: ${unref(totalXp) % 500 / 500 * 100}%`)}"></div></div></div></div><div class="bg-white border border-blue-100 rounded-3xl p-10 text-center space-y-2"><div class="text-4xl">✨</div><div class="font-bold text-slate-800 text-sm">Belum Ada Badge Diraih</div><p class="text-xs text-slate-500 max-w-sm mx-auto">Selesaikan quest pertamamu dan dapatkan persetujuan mentor untuk mengumpulkan badge dan XP.</p></div></div>`);
		};
	}
});
// app/pages/student/achievements.vue
var _sfc_setup = achievements_vue_vue_type_script_setup_true_lang_default.setup;
achievements_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/achievements.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var achievements_default = achievements_vue_vue_type_script_setup_true_lang_default;

export { achievements_default as default };
//# sourceMappingURL=achievements-PZ4w589p.mjs.map
