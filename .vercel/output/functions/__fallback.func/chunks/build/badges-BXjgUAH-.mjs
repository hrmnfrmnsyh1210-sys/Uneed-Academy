import { b as useFetch } from '../virtual/entry.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, I as withAsyncContext, W as ssrRenderAttrs, J as mergeProps, E as ssrRenderComponent, u as unref, $ as ssrRenderClass, Y as ssrInterpolate, Z as ssrRenderStyle, a1 as ssrRenderAttr, a0 as includeBooleanAttr, a3 as ssrLooseContain, a4 as ssrLooseEqual, q as ref, b as reactive, m as computed, L as useSSRContext } from '../_/vue.mjs';
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

// app/pages/admin/badges.vue?vue&type=script&setup=true&lang.ts
var badges_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "badges",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const showModal = ref(false);
		const saving = ref(false);
		const message = ref("");
		const form = reactive({
			name: "",
			description: "",
			rarity: "common",
			xpReward: 100,
			colorHex: "#6366F1"
		});
		const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/badges", "$j-mWCITbpY")), __temp = await __temp, __restore(), __temp);
		const badges = computed(() => data.value?.badges || []);
		function rarityEmoji(rarity) {
			return {
				common: "⭐",
				rare: "💎",
				epic: "🏆",
				legendary: "👑"
			}[rarity] || "⭐";
		}
		function rarityClass(rarity) {
			return {
				common: "bg-slate-100 text-slate-600",
				rare: "bg-blue-50 text-blue-700",
				epic: "bg-purple-50 text-purple-700",
				legendary: "bg-amber-50 text-amber-700"
			}[rarity] || "bg-slate-100 text-slate-600";
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h1 class="text-xl md:text-2xl font-extrabold text-slate-900">Badges &amp; XP</h1><p class="text-xs text-slate-500 mt-1">Atur pencapaian gamifikasi dan reward XP siswa</p></div><button class="px-4 py-2.5 rounded-xl text-white text-xs font-bold hover:opacity-90 inline-flex items-center gap-1.5" style="background:linear-gradient(135deg,#14b8a6,#0ea5e9);">`);
			_push(ssrRenderComponent(Icon_default, {
				name: "i-heroicons-plus",
				class: "w-4 h-4"
			}, null, _parent));
			_push(` Tambah Badge </button></div>`);
			if (unref(message)) _push(`<div class="${ssrRenderClass([unref(message).startsWith("✓") ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700", "rounded-xl border px-4 py-3 text-xs font-semibold"])}">${ssrInterpolate(unref(message))}</div>`);
			else _push(`<!---->`);
			_push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
			ssrRenderList$2(unref(badges), (b) => {
				_push(`<div class="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 shadow-sm"><div class="h-12 w-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style="${ssrRenderStyle({
					background: `${b.colorHex}18`,
					border: `1px solid ${b.colorHex}40`
				})}">${ssrInterpolate(rarityEmoji(b.rarity))}</div><div class="min-w-0"><div class="font-bold text-slate-800 text-sm truncate">${ssrInterpolate(b.name)}</div><div class="text-xs text-slate-500">+${ssrInterpolate(b.xpReward)} XP · ${ssrInterpolate(b.description || "Tanpa deskripsi")}</div><div class="mt-1 flex items-center gap-2"><span class="${ssrRenderClass([rarityClass(b.rarity), "text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"])}">${ssrInterpolate(b.rarity)}</span><span class="text-[10px] text-slate-400">${ssrInterpolate(b.earnedCount)} diraih</span></div></div></div>`);
			});
			_push(`<!--]-->`);
			if (!unref(badges).length) _push(`<div class="sm:col-span-2 lg:col-span-3 py-12 text-center text-xs text-slate-400 bg-white border border-slate-200 rounded-2xl"> Belum ada badge. Tambah badge pertama untuk memotivasi siswa. </div>`);
			else _push(`<!---->`);
			_push(`</div>`);
			if (unref(showModal)) _push(`<div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"><div class="bg-white rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl"><h3 class="font-bold text-slate-900">Tambah Badge</h3><form class="space-y-3"><label class="block"><span class="text-[11px] font-bold text-slate-600">Nama Badge</span><input${ssrRenderAttr("value", unref(form).name)} required type="text" placeholder="Misal: JavaScript Ninja" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Deskripsi</span><textarea rows="2" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400">${ssrInterpolate(unref(form).description)}</textarea></label><div class="grid grid-cols-2 gap-3"><label class="block"><span class="text-[11px] font-bold text-slate-600">Rarity</span><select class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none"><option value="common"${includeBooleanAttr(Array.isArray(unref(form).rarity) ? ssrLooseContain(unref(form).rarity, "common") : ssrLooseEqual(unref(form).rarity, "common")) ? " selected" : ""}>Common</option><option value="rare"${includeBooleanAttr(Array.isArray(unref(form).rarity) ? ssrLooseContain(unref(form).rarity, "rare") : ssrLooseEqual(unref(form).rarity, "rare")) ? " selected" : ""}>Rare</option><option value="epic"${includeBooleanAttr(Array.isArray(unref(form).rarity) ? ssrLooseContain(unref(form).rarity, "epic") : ssrLooseEqual(unref(form).rarity, "epic")) ? " selected" : ""}>Epic</option><option value="legendary"${includeBooleanAttr(Array.isArray(unref(form).rarity) ? ssrLooseContain(unref(form).rarity, "legendary") : ssrLooseEqual(unref(form).rarity, "legendary")) ? " selected" : ""}>Legendary</option></select></label><label class="block"><span class="text-[11px] font-bold text-slate-600">Reward XP</span><input${ssrRenderAttr("value", unref(form).xpReward)} type="number" min="0" step="10" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label></div><label class="block"><span class="text-[11px] font-bold text-slate-600">Warna (hex)</span><input${ssrRenderAttr("value", unref(form).colorHex)} type="text" placeholder="#6366F1" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-teal-400"></label><div class="flex justify-end gap-2 pt-2"><button type="button" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100">Batal</button><button type="submit"${includeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold disabled:opacity-50">Simpan</button></div></form></div></div>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
// app/pages/admin/badges.vue
var _sfc_setup = badges_vue_vue_type_script_setup_true_lang_default.setup;
badges_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/badges.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var badges_default = badges_vue_vue_type_script_setup_true_lang_default;

export { badges_default as default };
//# sourceMappingURL=badges-BXjgUAH-.mjs.map
