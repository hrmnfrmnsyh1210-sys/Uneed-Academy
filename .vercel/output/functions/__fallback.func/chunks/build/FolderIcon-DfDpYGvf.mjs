import { I as Icon_default } from './Icon-Baou6rEu.mjs';
import { k as defineComponent, W as ssrRenderAttrs, J as mergeProps, $ as ssrRenderClass, Z as ssrRenderStyle, E as ssrRenderComponent, L as useSSRContext } from '../_/vue.mjs';

// app/components/student/FolderIcon.vue?vue&type=script&setup=true&lang.ts
var FolderIcon_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "FolderIcon",
	__ssrInlineRender: true,
	props: {
		backColor: {},
		frontGradient: {},
		icon: {},
		size: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["relative flex-shrink-0 select-none", __props.size === "lg" ? "w-20 h-[72px]" : "w-11 h-10"] }, _attrs))}><div class="${ssrRenderClass([__props.size === "lg" ? "w-9 h-3.5 rounded-tl-xl" : "w-5 h-2 rounded-tl-md", "absolute top-0 left-0 rounded-t-lg shadow-sm"])}" style="${ssrRenderStyle(`background: ${__props.backColor}`)}"></div><div class="${ssrRenderClass([__props.size === "lg" ? "top-2 rounded-2xl rounded-tl-none" : "top-1 rounded-xl rounded-tl-none", "absolute inset-x-0 bottom-0 shadow-inner"])}" style="${ssrRenderStyle(`background: ${__props.backColor}`)}"></div><div class="${ssrRenderClass([__props.size === "lg" ? "left-2.5 right-2.5 top-3 h-4" : "left-1.5 right-1.5 top-1.5 h-2", "absolute bg-white/85 rounded-md shadow-sm"])}"></div><div class="${ssrRenderClass([__props.size === "lg" ? "top-4 rounded-2xl" : "top-2 rounded-xl", "absolute inset-x-0 bottom-0 border-t border-white/60 shadow-md flex items-center justify-center"])}" style="${ssrRenderStyle(`background: ${__props.frontGradient}`)}"><div class="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/25 via-transparent to-black/5"></div>`);
			if (__props.icon) _push(ssrRenderComponent(Icon_default, {
				name: __props.icon,
				class: ["relative z-10 text-white/95 drop-shadow-sm", __props.size === "lg" ? "w-7 h-7" : "w-4 h-4"]
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</div></div>`);
		};
	}
});
// app/components/student/FolderIcon.vue
var _sfc_setup = FolderIcon_vue_vue_type_script_setup_true_lang_default.setup;
FolderIcon_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/FolderIcon.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var FolderIcon_default = Object.assign(FolderIcon_vue_vue_type_script_setup_true_lang_default, { __name: "StudentFolderIcon" });

export { FolderIcon_default as F };
//# sourceMappingURL=FolderIcon-DfDpYGvf.mjs.map
