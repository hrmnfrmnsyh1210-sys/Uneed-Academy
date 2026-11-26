import { _ as _plugin_vue_export_helper_default, a as useRoute, N as NuxtLink } from '../virtual/entry.mjs';
import { s as ssrRenderNuxtLink } from './nuxt-link-ssr-render-B7NVepUh.mjs';
import { s as ssrRenderList$2 } from './render-list-BXV-8FZ7.mjs';
import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { F as FolderIcon_default } from './FolderIcon-DfDpYGvf.mjs';
import { k as defineComponent, O as watch, W as ssrRenderAttrs, J as mergeProps, u as unref, N as withCtx, $ as ssrRenderClass, G as createVNode, X as createTextVNode, a1 as ssrRenderAttr, E as ssrRenderComponent, Y as ssrInterpolate, _ as toDisplayString, q as ref, m as computed, a6 as openBlock, a7 as createBlock, Q as createCommentVNode, L as useSSRContext } from '../_/vue.mjs';

// app/components/public/PublicNavbar.vue?vue&type=script&setup=true&lang.ts
var PublicNavbar_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "PublicNavbar",
	__ssrInlineRender: true,
	props: { overlay: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const props = __props;
		const scrolled = ref(false);
		const menuOpen = ref(false);
		const route = useRoute();
		const solid = computed(() => !props.overlay || scrolled.value || menuOpen.value);
		const links = [
			{
				label: "Beranda",
				to: "/"
			},
			{
				label: "Kelas",
				to: "/classes"
			},
			{
				label: "Mentor",
				to: "/#mentor"
			},
			{
				label: "FAQ",
				to: "/#faq"
			},
			{
				label: "Masuk",
				to: "/auth/login"
			}
		];
		watch(() => route.fullPath, () => {
			menuOpen.value = false;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<header${ssrRenderAttrs(mergeProps({ class: ["fixed inset-x-0 top-0 z-50 transition-all duration-300", unref(solid) ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm" : "bg-transparent border-b border-white/15"] }, _attrs))}><div class="max-w-7xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between gap-4">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/",
				class: "flex items-center gap-3 flex-shrink-0 group"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="${ssrRenderClass([unref(solid) ? "bg-blue-700 text-white group-hover:bg-blue-800" : "bg-white text-blue-700", "h-10 w-10 rounded-full flex items-center justify-center font-black text-lg shadow-lg transition-colors"])}"${_scopeId}> U </div><span class="${ssrRenderClass([unref(solid) ? "text-slate-900" : "text-white", "font-extrabold text-lg sm:text-xl tracking-tight transition-colors"])}"${_scopeId}> Uneed Academy </span>`);
					else return [createVNode("div", { class: ["h-10 w-10 rounded-full flex items-center justify-center font-black text-lg shadow-lg transition-colors", unref(solid) ? "bg-blue-700 text-white group-hover:bg-blue-800" : "bg-white text-blue-700"] }, " U ", 2), createVNode("span", { class: ["font-extrabold text-lg sm:text-xl tracking-tight transition-colors", unref(solid) ? "text-slate-900" : "text-white"] }, " Uneed Academy ", 2)];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="${ssrRenderClass([unref(solid) ? "text-slate-600" : "text-white/90", "hidden md:flex items-center gap-8 text-sm font-semibold"])}">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/",
				class: unref(solid) ? "hover:text-blue-700" : "hover:text-cyan-200"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Beranda`);
					else return [createTextVNode("Beranda")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/classes",
				class: unref(solid) ? "hover:text-blue-700" : "hover:text-cyan-200"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Kelas`);
					else return [createTextVNode("Kelas")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/#mentor",
				class: unref(solid) ? "hover:text-blue-700" : "hover:text-cyan-200"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Mentor`);
					else return [createTextVNode("Mentor")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/#faq",
				class: unref(solid) ? "hover:text-blue-700" : "hover:text-cyan-200"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`FAQ`);
					else return [createTextVNode("FAQ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/auth/login",
				class: unref(solid) ? "hover:text-blue-700" : "hover:text-cyan-200"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Masuk`);
					else return [createTextVNode("Masuk")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/auth/register",
				class: ["px-5 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition", unref(solid) ? "border-blue-700 bg-blue-700 text-white hover:bg-blue-800" : "border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-700"]
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Daftar Gratis `);
					else return [createTextVNode(" Daftar Gratis ")];
				}),
				_: 1
			}, _parent));
			_push(`</nav><div class="flex md:hidden items-center gap-1.5">`);
			_push(ssrRenderNuxtLink(NuxtLink, {
				to: "/auth/register",
				class: ["px-3 py-1.5 rounded-full border text-[11px] font-bold transition-colors whitespace-nowrap", unref(solid) ? "border-blue-700 bg-blue-700 text-white" : "border-white/70 bg-white/15 text-white"]
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Daftar `);
					else return [createTextVNode(" Daftar ")];
				}),
				_: 1
			}, _parent));
			_push(`<button type="button" class="${ssrRenderClass([unref(solid) ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/15", "h-9 w-9 rounded-full flex items-center justify-center transition-colors"])}"${ssrRenderAttr("aria-label", unref(menuOpen) ? "Tutup menu" : "Buka menu")}${ssrRenderAttr("aria-expanded", unref(menuOpen))}>`);
			_push(ssrRenderComponent(Icon_default, {
				name: unref(menuOpen) ? "i-heroicons-x-mark" : "i-heroicons-bars-3",
				class: "w-5 h-5"
			}, null, _parent));
			_push(`</button></div></div>`);
			if (unref(menuOpen)) {
				_push(`<nav class="md:hidden bg-white backdrop-blur-md border-t border-slate-200 px-5 py-3 shadow-lg"><!--[-->`);
				ssrRenderList$2(links, (link) => {
					_push(ssrRenderNuxtLink(NuxtLink, {
						key: link.to,
						to: link.to,
						class: "block py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors",
						onClick: ($event) => menuOpen.value = false
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(link.label)}`);
							else return [createTextVNode(toDisplayString(link.label), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></nav>`);
			} else _push(`<!---->`);
			_push(`</header>`);
		};
	}
});
// app/components/public/PublicNavbar.vue
var _sfc_setup$2 = PublicNavbar_vue_vue_type_script_setup_true_lang_default.setup;
PublicNavbar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/PublicNavbar.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var PublicNavbar_default = Object.assign(PublicNavbar_vue_vue_type_script_setup_true_lang_default, { __name: "PublicNavbar" });
// app/components/public/PublicClassCard.vue?vue&type=script&setup=true&lang.ts
var PublicClassCard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "PublicClassCard",
	__ssrInlineRender: true,
	props: { item: {} },
	setup(__props) {
		const props = __props;
		const levelLabel = computed(() => {
			return {
				beginner: "Beginner",
				intermediate: "Intermediate",
				advanced: "Advanced"
			}[props.item.difficulty] || props.item.difficulty;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderNuxtLink(NuxtLink, mergeProps({
				to: `/classes/${__props.item.slug}`,
				class: "group bg-white border border-blue-100 rounded-3xl p-5 hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-300 transition duration-200 flex flex-col justify-between h-full"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div${_scopeId}><div class="flex items-start justify-between gap-3 mb-4"${_scopeId}>`);
						_push(ssrRenderComponent(FolderIcon_default, {
							size: "lg",
							icon: __props.item.icon,
							"back-color": __props.item.backColor,
							"front-gradient": __props.item.frontGradient
						}, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 uppercase tracking-wide"${_scopeId}>${ssrInterpolate(unref(levelLabel))}</span></div><h3 class="font-extrabold text-slate-800 text-base mb-1 leading-snug group-hover:text-blue-700 transition-colors"${_scopeId}>${ssrInterpolate(__props.item.title)}</h3><p class="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2"${_scopeId}>${ssrInterpolate(__props.item.shortDescription)}</p></div><div${_scopeId}><div class="flex items-center gap-3 text-[10px] text-slate-400 mb-3"${_scopeId}><span class="flex items-center gap-1"${_scopeId}>`);
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-clipboard-document-list",
							class: "w-3.5 h-3.5"
						}, null, _parent, _scopeId));
						_push(` ${ssrInterpolate(__props.item.totalTasks)} Quest </span><span class="flex items-center gap-1"${_scopeId}>`);
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-clock",
							class: "w-3.5 h-3.5"
						}, null, _parent, _scopeId));
						_push(` ${ssrInterpolate(__props.item.estimatedDurationHours)} Jam </span>`);
						if (__props.item.totalXp) {
							_push(`<span class="flex items-center gap-1"${_scopeId}>`);
							_push(ssrRenderComponent(Icon_default, {
								name: "i-heroicons-bolt",
								class: "w-3.5 h-3.5"
							}, null, _parent, _scopeId));
							_push(` ${ssrInterpolate(__props.item.totalXp)} XP </span>`);
						} else _push(`<!---->`);
						_push(`</div><div class="flex items-center justify-between pt-3 border-t border-slate-100"${_scopeId}><div class="${ssrRenderClass([__props.item.price === 0 ? "text-emerald-600" : "text-blue-700", "font-extrabold text-sm"])}"${_scopeId}>${ssrInterpolate(__props.item.priceLabel)}</div><span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-bold transition hover:opacity-85 shadow-sm" style="background:linear-gradient(135deg, #22d3ee, #2563eb);"${_scopeId}> Detail Kelas `);
						_push(ssrRenderComponent(Icon_default, {
							name: "i-heroicons-arrow-right",
							class: "w-3.5 h-3.5"
						}, null, _parent, _scopeId));
						_push(`</span></div></div>`);
					} else return [createVNode("div", null, [
						createVNode("div", { class: "flex items-start justify-between gap-3 mb-4" }, [createVNode(FolderIcon_default, {
							size: "lg",
							icon: __props.item.icon,
							"back-color": __props.item.backColor,
							"front-gradient": __props.item.frontGradient
						}, null, 8, [
							"icon",
							"back-color",
							"front-gradient"
						]), createVNode("span", { class: "text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 uppercase tracking-wide" }, toDisplayString(unref(levelLabel)), 1)]),
						createVNode("h3", { class: "font-extrabold text-slate-800 text-base mb-1 leading-snug group-hover:text-blue-700 transition-colors" }, toDisplayString(__props.item.title), 1),
						createVNode("p", { class: "text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2" }, toDisplayString(__props.item.shortDescription), 1)
					]), createVNode("div", null, [createVNode("div", { class: "flex items-center gap-3 text-[10px] text-slate-400 mb-3" }, [
						createVNode("span", { class: "flex items-center gap-1" }, [createVNode(Icon_default, {
							name: "i-heroicons-clipboard-document-list",
							class: "w-3.5 h-3.5"
						}), createTextVNode(" " + toDisplayString(__props.item.totalTasks) + " Quest ", 1)]),
						createVNode("span", { class: "flex items-center gap-1" }, [createVNode(Icon_default, {
							name: "i-heroicons-clock",
							class: "w-3.5 h-3.5"
						}), createTextVNode(" " + toDisplayString(__props.item.estimatedDurationHours) + " Jam ", 1)]),
						__props.item.totalXp ? (openBlock(), createBlock("span", {
							key: 0,
							class: "flex items-center gap-1"
						}, [createVNode(Icon_default, {
							name: "i-heroicons-bolt",
							class: "w-3.5 h-3.5"
						}), createTextVNode(" " + toDisplayString(__props.item.totalXp) + " XP ", 1)])) : createCommentVNode("", true)
					]), createVNode("div", { class: "flex items-center justify-between pt-3 border-t border-slate-100" }, [createVNode("div", { class: ["font-extrabold text-sm", __props.item.price === 0 ? "text-emerald-600" : "text-blue-700"] }, toDisplayString(__props.item.priceLabel), 3), createVNode("span", {
						class: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-bold transition hover:opacity-85 shadow-sm",
						style: { "background": "linear-gradient(135deg, #22d3ee, #2563eb)" }
					}, [createTextVNode(" Detail Kelas "), createVNode(Icon_default, {
						name: "i-heroicons-arrow-right",
						class: "w-3.5 h-3.5"
					})])])])];
				}),
				_: 1
			}, _parent));
		};
	}
});
// app/components/public/PublicClassCard.vue
var _sfc_setup$1 = PublicClassCard_vue_vue_type_script_setup_true_lang_default.setup;
PublicClassCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/PublicClassCard.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var PublicClassCard_default = Object.assign(PublicClassCard_vue_vue_type_script_setup_true_lang_default, { __name: "PublicClassCard" });
// app/components/public/PublicFooter.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white border-t border-slate-200 py-8 px-6" }, _attrs))}><div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"><div class="flex items-center gap-2.5"><div class="h-7 w-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs">U</div><span class="font-bold text-slate-800">Uneed Academy</span><span class="text-slate-300">·</span><span>© 2026 Uneed Developer</span></div><div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">`);
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/classes",
		class: "hover:text-blue-600 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Kelas`);
			else return [createTextVNode("Kelas")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/verify/UA-2026-DEMO001",
		class: "hover:text-blue-600 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Verifikasi Sertifikat`);
			else return [createTextVNode("Verifikasi Sertifikat")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/terms",
		class: "hover:text-blue-600 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Syarat &amp; Ketentuan`);
			else return [createTextVNode("Syarat & Ketentuan")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderNuxtLink(NuxtLink, {
		to: "/privacy",
		class: "hover:text-blue-600 transition"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Privasi`);
			else return [createTextVNode("Privasi")];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></footer>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/PublicFooter.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PublicFooter_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "PublicFooter" });

export { PublicNavbar_default as P, PublicClassCard_default as a, PublicFooter_default as b };
//# sourceMappingURL=PublicFooter-D49ZN3uW.mjs.map
