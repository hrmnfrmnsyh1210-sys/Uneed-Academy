import { t as components_default } from './components-CSp8KrgW.mjs';
import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { E as ssrRenderComponent, J as mergeProps, k as defineComponent, L as useSSRContext } from '../_/vue.mjs';

// node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue
var _sfc_main = defineComponent({ props: {
	name: {
		type: String,
		required: true
	},
	mode: {
		type: String,
		required: false,
		default: null
	},
	size: {
		type: [Number, String],
		required: false,
		default: null
	},
	customize: {
		type: Function,
		required: false,
		default: null
	}
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(ssrRenderComponent(components_default, mergeProps(_ctx.$props, _attrs), null, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Icon_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "UIcon" });

export { Icon_default as I };
//# sourceMappingURL=Icon-Baou6rEu.mjs.map
