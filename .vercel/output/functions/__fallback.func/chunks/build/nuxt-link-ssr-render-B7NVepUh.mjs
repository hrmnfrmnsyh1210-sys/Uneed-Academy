import { E as ssrRenderComponent, W as ssrRenderAttrs, F as renderVNode, l as h, d as getCurrentInstance } from '../_/vue.mjs';

// node_modules/nuxt/dist/app/components/nuxt-link-ssr-render.js
/**
* Renders a template `<NuxtLink>` straight into the parent's SSR buffer, without a component
* instance, when the link resolves to a static anchor.
*/
function ssrRenderNuxtLink(comp, props, slots, parent, slotScopeId) {
	const state = props && slots && comp.__ssrLink?.(props, parent);
	if (!state || !slots) return ssrRenderComponent(comp, props, slots, parent, slotScopeId);
	let html = (state.openTag ?? `<a${ssrRenderAttrs(state.attrs())}`) + ssrScopeIds() + ">";
	let buffer;
	const push = (item) => {
		if (buffer) buffer.push(item);
		else if (typeof item === "string") html += item;
		else {
			buffer = [html, item];
			buffer.hasAsync = true;
		}
	};
	const ret = slots.default?.(state.link, push, parent, "");
	if (ret !== void 0) {
		html = "";
		buffer = void 0;
		renderVNode(push, h("a", state.attrs(), ret), parent, slotScopeId);
		return buffer ?? html;
	}
	if (buffer) {
		buffer.push("</a>");
		return buffer;
	}
	return html + "</a>";
}
function ssrScopeIds(slotScopeId) {
	const scopeId = (getCurrentInstance()?.type)?.__scopeId;
	let ids = scopeId ? " " + scopeId : "";
	return ids;
}

export { ssrRenderNuxtLink as s };
//# sourceMappingURL=nuxt-link-ssr-render-B7NVepUh.mjs.map
