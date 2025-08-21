import { A as derived, w as push, F as props_id, B as spread_attributes, E as bind_props, y as pop, U as sanitize_props, I as spread_props, T as slot, J as copy_payload, K as assign_payload, M as escape_html, Q as ensure_array_like, N as stringify, V as maybe_selected } from "../../../../../chunks/index2.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { C as Card } from "../../../../../chunks/card.js";
import { C as Card_content, a as Card_header, b as Card_title } from "../../../../../chunks/card-title.js";
import { c as cn, B as Button } from "../../../../../chunks/chevron-right.js";
import { I as Input } from "../../../../../chunks/input.js";
import { L as Label } from "../../../../../chunks/label.js";
import { b as box, S as SvelteMap, a as attachRef, c as createBitsAttrs, w as watch, h as getDataOrientation, f as getDataDisabled, i as getAriaOrientation, j as getDisabled, k as getAriaSelected, l as getHidden, d as createId, m as mergeProps } from "../../../../../chunks/create-id.js";
import "style-to-object";
import "clsx";
import { C as Context } from "../../../../../chunks/dom-context.svelte.js";
import { A as ARROW_UP, a as ARROW_RIGHT, b as ARROW_LEFT, c as ARROW_DOWN, d as END, H as HOME, S as SPACE, E as ENTER } from "../../../../../chunks/kbd-constants.js";
import { n as noop } from "../../../../../chunks/noop.js";
import { B as Badge } from "../../../../../chunks/badge.js";
import { S as Square_pen, a as Separator } from "../../../../../chunks/square-pen.js";
import { A as Avatar } from "../../../../../chunks/avatar.js";
import { U as User, M as Mail, P as Phone, a as Map_pin } from "../../../../../chunks/user.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
import { P as Plus } from "../../../../../chunks/plus.js";
function getElemDirection(elem) {
  const style = window.getComputedStyle(elem);
  const direction = style.getPropertyValue("direction");
  return direction;
}
function getNextKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
    vertical: ARROW_DOWN
  }[orientation];
}
function getPrevKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
    vertical: ARROW_UP
  }[orientation];
}
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
  if (!["ltr", "rtl"].includes(dir))
    dir = "ltr";
  if (!["horizontal", "vertical"].includes(orientation))
    orientation = "horizontal";
  return {
    nextKey: getNextKey(dir, orientation),
    prevKey: getPrevKey(dir, orientation)
  };
}
class RovingFocusGroup {
  #opts;
  #currentTabStopId = box(null);
  constructor(opts) {
    this.#opts = opts;
  }
  getCandidateNodes() {
    return [];
  }
  focusFirstCandidate() {
    const items = this.getCandidateNodes();
    if (!items.length)
      return;
    items[0]?.focus();
  }
  handleKeydown(node, e, both = false) {
    const rootNode = this.#opts.rootNode.current;
    if (!rootNode || !node)
      return;
    const items = this.getCandidateNodes();
    if (!items.length)
      return;
    const currentIndex = items.indexOf(node);
    const dir = getElemDirection(rootNode);
    const { nextKey, prevKey } = getDirectionalKeys(dir, this.#opts.orientation.current);
    const loop = this.#opts.loop.current;
    const keyToIndex = {
      [nextKey]: currentIndex + 1,
      [prevKey]: currentIndex - 1,
      [HOME]: 0,
      [END]: items.length - 1
    };
    if (both) {
      const altNextKey = nextKey === ARROW_DOWN ? ARROW_RIGHT : ARROW_DOWN;
      const altPrevKey = prevKey === ARROW_UP ? ARROW_LEFT : ARROW_UP;
      keyToIndex[altNextKey] = currentIndex + 1;
      keyToIndex[altPrevKey] = currentIndex - 1;
    }
    let itemIndex = keyToIndex[e.key];
    if (itemIndex === void 0)
      return;
    e.preventDefault();
    if (itemIndex < 0 && loop) {
      itemIndex = items.length - 1;
    } else if (itemIndex === items.length && loop) {
      itemIndex = 0;
    }
    const itemToFocus = items[itemIndex];
    if (!itemToFocus)
      return;
    itemToFocus.focus();
    this.#currentTabStopId.current = itemToFocus.id;
    this.#opts.onCandidateFocus?.(itemToFocus);
    return itemToFocus;
  }
  getTabIndex(node) {
    const items = this.getCandidateNodes();
    const anyActive = this.#currentTabStopId.current !== null;
    if (node && !anyActive && items[0] === node) {
      this.#currentTabStopId.current = node.id;
      return 0;
    } else if (node?.id === this.#currentTabStopId.current) {
      return 0;
    }
    return -1;
  }
  setCurrentTabStopId(id) {
    this.#currentTabStopId.current = id;
  }
}
const tabsAttrs = createBitsAttrs({
  component: "tabs",
  parts: ["root", "list", "trigger", "content"]
});
const TabsRootContext = new Context("Tabs.Root");
class TabsRootState {
  static create(opts) {
    return TabsRootContext.set(new TabsRootState(opts));
  }
  opts;
  attachment;
  rovingFocusGroup;
  triggerIds = [];
  // holds the trigger ID for each value to associate it with the content
  valueToTriggerId = new SvelteMap();
  // holds the content ID for each value to associate it with the trigger
  valueToContentId = new SvelteMap();
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(opts.ref);
    this.rovingFocusGroup = new RovingFocusGroup({
      candidateAttr: tabsAttrs.trigger,
      rootNode: this.opts.ref,
      loop: this.opts.loop,
      orientation: this.opts.orientation
    });
  }
  registerTrigger(id, value) {
    this.triggerIds.push(id);
    this.valueToTriggerId.set(value, id);
    return () => {
      this.triggerIds = this.triggerIds.filter((triggerId) => triggerId !== id);
      this.valueToTriggerId.delete(value);
    };
  }
  registerContent(id, value) {
    this.valueToContentId.set(value, id);
    return () => {
      this.valueToContentId.delete(value);
    };
  }
  setValue(v) {
    this.opts.value.current = v;
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-orientation": getDataOrientation(this.opts.orientation.current),
    [tabsAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class TabsListState {
  static create(opts) {
    return new TabsListState(opts, TabsRootContext.get());
  }
  opts;
  root;
  attachment;
  #isDisabled = derived(() => this.root.opts.disabled.current);
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "tablist",
    "aria-orientation": getAriaOrientation(this.root.opts.orientation.current),
    "data-orientation": getDataOrientation(this.root.opts.orientation.current),
    [tabsAttrs.list]: "",
    "data-disabled": getDataDisabled(this.#isDisabled()),
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class TabsTriggerState {
  static create(opts) {
    return new TabsTriggerState(opts, TabsRootContext.get());
  }
  opts;
  root;
  attachment;
  #tabIndex = 0;
  #isActive = derived(() => this.root.opts.value.current === this.opts.value.current);
  #isDisabled = derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
  #ariaControls = derived(() => this.root.valueToContentId.get(this.opts.value.current));
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
    watch([() => this.opts.id.current, () => this.opts.value.current], ([id, value]) => {
      return this.root.registerTrigger(id, value);
    });
    this.onfocus = this.onfocus.bind(this);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  #activate() {
    if (this.root.opts.value.current === this.opts.value.current) return;
    this.root.setValue(this.opts.value.current);
  }
  onfocus(_) {
    if (this.root.opts.activationMode.current !== "automatic" || this.#isDisabled()) return;
    this.#activate();
  }
  onclick(_) {
    if (this.#isDisabled()) return;
    this.#activate();
  }
  onkeydown(e) {
    if (this.#isDisabled()) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.#activate();
      return;
    }
    this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "tab",
    "data-state": getTabDataState(this.#isActive()),
    "data-value": this.opts.value.current,
    "data-orientation": getDataOrientation(this.root.opts.orientation.current),
    "data-disabled": getDataDisabled(this.#isDisabled()),
    "aria-selected": getAriaSelected(this.#isActive()),
    "aria-controls": this.#ariaControls(),
    [tabsAttrs.trigger]: "",
    disabled: getDisabled(this.#isDisabled()),
    tabindex: this.#tabIndex,
    //
    onclick: this.onclick,
    onfocus: this.onfocus,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class TabsContentState {
  static create(opts) {
    return new TabsContentState(opts, TabsRootContext.get());
  }
  opts;
  root;
  attachment;
  #isActive = derived(() => this.root.opts.value.current === this.opts.value.current);
  #ariaLabelledBy = derived(() => this.root.valueToTriggerId.get(this.opts.value.current));
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
    watch([() => this.opts.id.current, () => this.opts.value.current], ([id, value]) => {
      return this.root.registerContent(id, value);
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "tabpanel",
    hidden: getHidden(!this.#isActive()),
    tabindex: 0,
    "data-value": this.opts.value.current,
    "data-state": getTabDataState(this.#isActive()),
    "aria-labelledby": this.#ariaLabelledBy(),
    "data-orientation": getDataOrientation(this.root.opts.orientation.current),
    [tabsAttrs.content]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function getTabDataState(condition) {
  return condition ? "active" : "inactive";
}
function Tabs$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    ref = null,
    value = "",
    onValueChange = noop,
    orientation = "horizontal",
    loop = true,
    activationMode = "automatic",
    disabled = false,
    children,
    child,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const rootState = TabsRootState.create({
    id: box.with(() => id),
    value: box.with(() => value, (v) => {
      value = v;
      onValueChange(v);
    }),
    orientation: box.with(() => orientation),
    loop: box.with(() => loop),
    activationMode: box.with(() => activationMode),
    disabled: box.with(() => disabled),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, rootState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div${spread_attributes({ ...mergedProps })}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref, value });
  pop();
}
function Tabs_content$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    id = createId(uid),
    ref = null,
    value,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const contentState = TabsContentState.create({
    value: box.with(() => value),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, contentState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div${spread_attributes({ ...mergedProps })}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Tabs_list$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    child,
    children,
    id = createId(uid),
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const listState = TabsListState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, listState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div${spread_attributes({ ...mergedProps })}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Tabs_trigger$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    child,
    children,
    disabled = false,
    id = createId(uid),
    type = "button",
    value,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const triggerState = TabsTriggerState.create({
    id: box.with(() => id),
    disabled: box.with(() => disabled ?? false),
    value: box.with(() => value),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, triggerState.props, { type });
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<button${spread_attributes({ ...mergedProps })}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></button>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Save($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.536.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      }
    ],
    ["path", { "d": "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
    ["path", { "d": "M7 3v4a1 1 0 0 0 1 1h7" }]
  ];
  Icon($$payload, spread_props([
    { name: "save" },
    $$sanitized_props,
    {
      /**
       * @component @name Save
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUuMiAzYTIgMiAwIDAgMSAxLjQuNmwzLjggMy44YTIgMiAwIDAgMSAuNiAxLjRWMTlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yeiIgLz4KICA8cGF0aCBkPSJNMTcgMjF2LTdhMSAxIDAgMCAwLTEtMUg4YTEgMSAwIDAgMC0xIDF2NyIgLz4KICA8cGF0aCBkPSJNNyAzdjRhMSAxIDAgMCAwIDEgMWg3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/save
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function X($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.536.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$payload, spread_props([
    { name: "x" },
    $$sanitized_props,
    {
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Tabs($$payload, $$props) {
  push();
  let {
    ref = null,
    value = "",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Tabs$1($$payload2, spread_props([
      {
        "data-slot": "tabs",
        class: cn("flex flex-col gap-2", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref, value });
  pop();
}
function Tabs_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Tabs_content$1($$payload2, spread_props([
      {
        "data-slot": "tabs-content",
        class: cn("flex-1 outline-none", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Tabs_list($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Tabs_list$1($$payload2, spread_props([
      {
        "data-slot": "tabs-list",
        class: cn("inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Tabs_trigger($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Tabs_trigger$1($$payload2, spread_props([
      {
        "data-slot": "tabs-trigger",
        class: cn("inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function _page($$payload, $$props) {
  push();
  let employeeData = {
    primaryDetails: {
      employeeNumber: "000513",
      title: "Mr",
      firstName: "Adrian",
      middleName: "",
      surname: "Glencross",
      preferredName: "Adrian",
      dateOfBirth: "15/12/1962",
      gender: "Male"
    },
    contactDetails: {
      primaryEmail: "sheldon.louis@theaccessgroup.com",
      mobilePhone: "0412 521 062",
      homeAddress: {
        street: "50 Kings Park Road",
        suburb: "West Perth",
        postcode: "6005",
        state: "Western Australia",
        country: "Australia"
      }
    },
    accountDetails: {
      username: "adrian.glencross",
      lastLogin: "2025-01-15 09:30",
      accountStatus: "Active",
      permissions: ["Employee Self Service", "Leave Management"]
    },
    emergencyContacts: [
      {
        id: "1",
        name: "Sarah Glencross",
        relationship: "Spouse",
        phone: "0412 987 654",
        email: "sarah.glencross@email.com",
        isPrimary: true
      },
      {
        id: "2",
        name: "John Glencross",
        relationship: "Brother",
        phone: "0412 555 123",
        email: "john.glencross@email.com",
        isPrimary: false
      }
    ]
  };
  let activeTab = "primary-details";
  let editMode = false;
  function toggleEditMode() {
    editMode = !editMode;
  }
  function saveChanges() {
    editMode = false;
  }
  function cancelEdit() {
    editMode = false;
  }
  function addEmergencyContact() {
    const newContact = {
      id: Date.now().toString(),
      name: "",
      relationship: "",
      phone: "",
      email: "",
      isPrimary: false
    };
    employeeData.emergencyContacts = [...employeeData.emergencyContacts, newContact];
    newContact.id;
  }
  function deleteEmergencyContact(id) {
    employeeData.emergencyContacts = employeeData.emergencyContacts.filter((contact) => contact.id !== id);
  }
  function setPrimaryContact(id) {
    employeeData.emergencyContacts = employeeData.emergencyContacts.map((contact) => ({ ...contact, isPrimary: contact.id === id }));
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="page-container"><div class="page-content"><div class="page-header-with-breadcrumbs">`);
    PageHeader($$payload2, {
      title: "My Details",
      subtitle: "View and manage your personal information",
      breadcrumbs: [
        { label: "Employee Hub", href: "/employee" },
        { label: "Employee", href: "/employee/employee" },
        { label: "My Details" }
      ]
    });
    $$payload2.out.push(`<!----> `);
    Button($$payload2, {
      onclick: toggleEditMode,
      variant: editMode ? "outline" : "default",
      children: ($$payload3) => {
        if (editMode) {
          $$payload3.out.push("<!--[-->");
          X($$payload3, { class: "w-4 h-4 mr-2" });
          $$payload3.out.push(`<!----> Cancel`);
        } else {
          $$payload3.out.push("<!--[!-->");
          Square_pen($$payload3, { class: "w-4 h-4 mr-2" });
          $$payload3.out.push(`<!----> Edit Details`);
        }
        $$payload3.out.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div> <div class="card-container">`);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_content($$payload3, {
          class: "card-content",
          children: ($$payload4) => {
            $$payload4.out.push(`<div class="flex items-center gap-4">`);
            Avatar($$payload4, {
              class: "h-16 w-16",
              children: ($$payload5) => {
                $$payload5.out.push(`<div class="h-full w-full bg-primary/10 flex items-center justify-center">`);
                User($$payload5, { class: "h-8 w-8 text-primary" });
                $$payload5.out.push(`<!----></div>`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> <div class="flex-1"><div class="flex items-center gap-3 mb-1"><h1 class="text-xl font-bold">${escape_html(employeeData.primaryDetails.firstName)} ${escape_html(employeeData.primaryDetails.surname)}</h1> `);
            Badge($$payload4, {
              variant: "secondary",
              class: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Active Employee`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----></div> <div class="flex flex-wrap gap-4 text-sm text-muted-foreground"><div class="flex items-center gap-1">`);
            User($$payload4, { class: "w-4 h-4" });
            $$payload4.out.push(`<!----> Employee #${escape_html(employeeData.primaryDetails.employeeNumber)}</div> <div class="flex items-center gap-1">`);
            Mail($$payload4, { class: "w-4 h-4" });
            $$payload4.out.push(`<!----> ${escape_html(employeeData.contactDetails.primaryEmail)}</div> <div class="flex items-center gap-1">`);
            Phone($$payload4, { class: "w-4 h-4" });
            $$payload4.out.push(`<!----> ${escape_html(employeeData.contactDetails.mobilePhone)}</div></div></div></div>`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div> <div class="card-container">`);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_content($$payload3, {
          class: "card-content",
          children: ($$payload4) => {
            Tabs($$payload4, {
              get value() {
                return activeTab;
              },
              set value($$value) {
                activeTab = $$value;
                $$settled = false;
              },
              children: ($$payload5) => {
                Tabs_list($$payload5, {
                  class: "grid w-full grid-cols-4 bg-transparent border-b border-border p-0 h-auto rounded-none",
                  children: ($$payload6) => {
                    Tabs_trigger($$payload6, {
                      value: "primary-details",
                      class: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary bg-transparent shadow-none px-4 py-3 font-medium",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Primary Details`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    Tabs_trigger($$payload6, {
                      value: "contact-details",
                      class: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary bg-transparent shadow-none px-4 py-3 font-medium",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Contact Details`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    Tabs_trigger($$payload6, {
                      value: "account-details",
                      class: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary bg-transparent shadow-none px-4 py-3 font-medium",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Account Details`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    Tabs_trigger($$payload6, {
                      value: "emergency-contacts",
                      class: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary bg-transparent shadow-none px-4 py-3 font-medium",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Emergency Contacts`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Tabs_content($$payload5, {
                  value: "primary-details",
                  class: "space-y-6 mt-6",
                  children: ($$payload6) => {
                    $$payload6.out.push(`<div class="form-field-group"><div class="form-grid-2"><div class="form-field">`);
                    Label($$payload6, {
                      for: "employeeNumber",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Employee Number`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> <div class="flex gap-2">`);
                    Input($$payload6, {
                      id: "employeeNumber",
                      value: employeeData.primaryDetails.employeeNumber,
                      readonly: true,
                      class: "flex-1"
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Button($$payload6, {
                        variant: "outline",
                        size: "sm",
                        children: ($$payload7) => {
                          Square_pen($$payload7, { class: "w-4 h-4" });
                        },
                        $$slots: { default: true }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                    }
                    $$payload6.out.push(`<!--]--></div></div> <div class="form-field">`);
                    Label($$payload6, {
                      for: "title",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Title`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      $$payload6.out.push(`<select id="title" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>option]:bg-card">`);
                      $$payload6.select_value = employeeData.primaryDetails.title;
                      $$payload6.out.push(`<option value=""${maybe_selected($$payload6, "")}>- Select -</option><option value="Mr"${maybe_selected($$payload6, "Mr")}>Mr</option><option value="Mrs"${maybe_selected($$payload6, "Mrs")}>Mrs</option><option value="Ms"${maybe_selected($$payload6, "Ms")}>Ms</option><option value="Dr"${maybe_selected($$payload6, "Dr")}>Dr</option><option value="Prof"${maybe_selected($$payload6, "Prof")}>Prof</option>`);
                      $$payload6.select_value = void 0;
                      $$payload6.out.push(`</select>`);
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "title",
                        value: employeeData.primaryDetails.title,
                        readonly: true
                      });
                    }
                    $$payload6.out.push(`<!--]--></div></div> <div class="form-grid-2"><div class="form-field">`);
                    Label($$payload6, {
                      for: "firstName",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->First Name`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "firstName",
                        get value() {
                          return employeeData.primaryDetails.firstName;
                        },
                        set value($$value) {
                          employeeData.primaryDetails.firstName = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "firstName",
                        value: employeeData.primaryDetails.firstName,
                        readonly: true
                      });
                    }
                    $$payload6.out.push(`<!--]--></div> <div class="form-field">`);
                    Label($$payload6, {
                      for: "middleName",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Middle Name`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "middleName",
                        get value() {
                          return employeeData.primaryDetails.middleName;
                        },
                        set value($$value) {
                          employeeData.primaryDetails.middleName = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "middleName",
                        value: employeeData.primaryDetails.middleName || "Not specified",
                        readonly: true
                      });
                    }
                    $$payload6.out.push(`<!--]--></div></div> <div class="form-grid-2"><div class="form-field">`);
                    Label($$payload6, {
                      for: "surname",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Surname`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "surname",
                        get value() {
                          return employeeData.primaryDetails.surname;
                        },
                        set value($$value) {
                          employeeData.primaryDetails.surname = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "surname",
                        value: employeeData.primaryDetails.surname,
                        readonly: true
                      });
                    }
                    $$payload6.out.push(`<!--]--></div> <div class="form-field">`);
                    Label($$payload6, {
                      for: "preferredName",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Preferred Name`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "preferredName",
                        get value() {
                          return employeeData.primaryDetails.preferredName;
                        },
                        set value($$value) {
                          employeeData.primaryDetails.preferredName = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "preferredName",
                        value: employeeData.primaryDetails.preferredName,
                        readonly: true
                      });
                    }
                    $$payload6.out.push(`<!--]--></div></div> <div class="form-grid-2"><div class="form-field">`);
                    Label($$payload6, {
                      for: "dateOfBirth",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Date of Birth (DD/MM/YYYY)`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "dateOfBirth",
                        placeholder: "DD/MM/YYYY",
                        get value() {
                          return employeeData.primaryDetails.dateOfBirth;
                        },
                        set value($$value) {
                          employeeData.primaryDetails.dateOfBirth = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "dateOfBirth",
                        value: employeeData.primaryDetails.dateOfBirth,
                        readonly: true
                      });
                    }
                    $$payload6.out.push(`<!--]--></div> <div class="form-field">`);
                    Label($$payload6, {
                      for: "gender",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Gender`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      $$payload6.out.push(`<select id="gender" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>option]:bg-card">`);
                      $$payload6.select_value = employeeData.primaryDetails.gender;
                      $$payload6.out.push(`<option value=""${maybe_selected($$payload6, "")}>- Select -</option><option value="Male"${maybe_selected($$payload6, "Male")}>Male</option><option value="Female"${maybe_selected($$payload6, "Female")}>Female</option><option value="Other"${maybe_selected($$payload6, "Other")}>Other</option><option value="Prefer not to say"${maybe_selected($$payload6, "Prefer not to say")}>Prefer not to say</option>`);
                      $$payload6.select_value = void 0;
                      $$payload6.out.push(`</select>`);
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "gender",
                        value: employeeData.primaryDetails.gender,
                        readonly: true
                      });
                    }
                    $$payload6.out.push(`<!--]--></div></div></div> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      $$payload6.out.push(`<div class="flex justify-end gap-3 pt-4">`);
                      Button($$payload6, {
                        variant: "outline",
                        onclick: cancelEdit,
                        children: ($$payload7) => {
                          X($$payload7, { class: "w-4 h-4 mr-2" });
                          $$payload7.out.push(`<!----> Cancel`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out.push(`<!----> `);
                      Button($$payload6, {
                        onclick: saveChanges,
                        children: ($$payload7) => {
                          Save($$payload7, { class: "w-4 h-4 mr-2" });
                          $$payload7.out.push(`<!----> Save Changes`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out.push(`<!----></div>`);
                    } else {
                      $$payload6.out.push("<!--[!-->");
                    }
                    $$payload6.out.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Tabs_content($$payload5, {
                  value: "contact-details",
                  class: "space-y-6 mt-6",
                  children: ($$payload6) => {
                    $$payload6.out.push(`<div class="two-column-layout"><div class="column-wide"><div class="card-container"><div class="form-field-group"><div class="form-field">`);
                    Label($$payload6, {
                      for: "primaryEmail",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Primary Email`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> <div class="flex items-center gap-2">`);
                    Mail($$payload6, { class: "w-4 h-4 text-muted-foreground" });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "primaryEmail",
                        type: "email",
                        class: "flex-1",
                        get value() {
                          return employeeData.contactDetails.primaryEmail;
                        },
                        set value($$value) {
                          employeeData.contactDetails.primaryEmail = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "primaryEmail",
                        value: employeeData.contactDetails.primaryEmail,
                        readonly: true,
                        class: "flex-1"
                      });
                    }
                    $$payload6.out.push(`<!--]--></div></div> <div class="form-field">`);
                    Label($$payload6, {
                      for: "mobilePhone",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Mobile Phone`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> <div class="flex items-center gap-2">`);
                    Phone($$payload6, { class: "w-4 h-4 text-muted-foreground" });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "mobilePhone",
                        class: "flex-1",
                        get value() {
                          return employeeData.contactDetails.mobilePhone;
                        },
                        set value($$value) {
                          employeeData.contactDetails.mobilePhone = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "mobilePhone",
                        value: employeeData.contactDetails.mobilePhone,
                        readonly: true,
                        class: "flex-1"
                      });
                    }
                    $$payload6.out.push(`<!--]--></div></div> `);
                    Separator($$payload6, { class: "my-6" });
                    $$payload6.out.push(`<!----> <h3 class="font-semibold text-lg mb-4">Home Address</h3> <div class="form-field">`);
                    Label($$payload6, {
                      for: "homeAddress",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Home Street Address`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> <div class="flex items-center gap-2">`);
                    Map_pin($$payload6, { class: "w-4 h-4 text-muted-foreground" });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "homeAddress",
                        class: "flex-1",
                        get value() {
                          return employeeData.contactDetails.homeAddress.street;
                        },
                        set value($$value) {
                          employeeData.contactDetails.homeAddress.street = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "homeAddress",
                        value: employeeData.contactDetails.homeAddress.street,
                        readonly: true,
                        class: "flex-1"
                      });
                    }
                    $$payload6.out.push(`<!--]--></div></div> <div class="form-grid-2"><div class="form-field">`);
                    Label($$payload6, {
                      for: "suburb",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Suburb`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "suburb",
                        get value() {
                          return employeeData.contactDetails.homeAddress.suburb;
                        },
                        set value($$value) {
                          employeeData.contactDetails.homeAddress.suburb = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "suburb",
                        value: employeeData.contactDetails.homeAddress.suburb,
                        readonly: true
                      });
                    }
                    $$payload6.out.push(`<!--]--></div> <div class="form-field">`);
                    Label($$payload6, {
                      for: "postcode",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Postcode`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "postcode",
                        get value() {
                          return employeeData.contactDetails.homeAddress.postcode;
                        },
                        set value($$value) {
                          employeeData.contactDetails.homeAddress.postcode = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "postcode",
                        value: employeeData.contactDetails.homeAddress.postcode,
                        readonly: true
                      });
                    }
                    $$payload6.out.push(`<!--]--></div></div> <div class="form-grid-2"><div class="form-field">`);
                    Label($$payload6, {
                      for: "state",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->State`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "state",
                        get value() {
                          return employeeData.contactDetails.homeAddress.state;
                        },
                        set value($$value) {
                          employeeData.contactDetails.homeAddress.state = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "state",
                        value: employeeData.contactDetails.homeAddress.state,
                        readonly: true
                      });
                    }
                    $$payload6.out.push(`<!--]--></div> <div class="form-field">`);
                    Label($$payload6, {
                      for: "country",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Country`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Input($$payload6, {
                        id: "country",
                        get value() {
                          return employeeData.contactDetails.homeAddress.country;
                        },
                        set value($$value) {
                          employeeData.contactDetails.homeAddress.country = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                      Input($$payload6, {
                        id: "country",
                        value: employeeData.contactDetails.homeAddress.country,
                        readonly: true
                      });
                    }
                    $$payload6.out.push(`<!--]--></div></div></div></div></div> <div class="column-sidebar"><div class="card-container">`);
                    Card($$payload6, {
                      class: "card",
                      children: ($$payload7) => {
                        Card_header($$payload7, {
                          class: "card-header",
                          children: ($$payload8) => {
                            Card_title($$payload8, {
                              children: ($$payload9) => {
                                $$payload9.out.push(`<!---->Profile Photo`);
                              },
                              $$slots: { default: true }
                            });
                          },
                          $$slots: { default: true }
                        });
                        $$payload7.out.push(`<!----> `);
                        Card_content($$payload7, {
                          class: "card-content",
                          children: ($$payload8) => {
                            $$payload8.out.push(`<div class="text-center">`);
                            Avatar($$payload8, {
                              class: "h-32 w-32 mx-auto mb-4",
                              children: ($$payload9) => {
                                $$payload9.out.push(`<div class="h-full w-full bg-primary/10 flex items-center justify-center">`);
                                User($$payload9, { class: "h-16 w-16 text-primary" });
                                $$payload9.out.push(`<!----></div>`);
                              },
                              $$slots: { default: true }
                            });
                            $$payload8.out.push(`<!----> `);
                            if (editMode) {
                              $$payload8.out.push("<!--[-->");
                              Button($$payload8, {
                                variant: "outline",
                                class: "w-full",
                                children: ($$payload9) => {
                                  $$payload9.out.push(`<!---->Upload Photo`);
                                },
                                $$slots: { default: true }
                              });
                            } else {
                              $$payload8.out.push("<!--[!-->");
                            }
                            $$payload8.out.push(`<!--]--></div>`);
                          },
                          $$slots: { default: true }
                        });
                        $$payload7.out.push(`<!---->`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----></div></div></div> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      $$payload6.out.push(`<div class="flex justify-end gap-3 pt-4">`);
                      Button($$payload6, {
                        variant: "outline",
                        onclick: cancelEdit,
                        children: ($$payload7) => {
                          X($$payload7, { class: "w-4 h-4 mr-2" });
                          $$payload7.out.push(`<!----> Cancel`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out.push(`<!----> `);
                      Button($$payload6, {
                        onclick: saveChanges,
                        children: ($$payload7) => {
                          Save($$payload7, { class: "w-4 h-4 mr-2" });
                          $$payload7.out.push(`<!----> Save Changes`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out.push(`<!----></div>`);
                    } else {
                      $$payload6.out.push("<!--[!-->");
                    }
                    $$payload6.out.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Tabs_content($$payload5, {
                  value: "account-details",
                  class: "space-y-6 mt-6",
                  children: ($$payload6) => {
                    const each_array = ensure_array_like(employeeData.accountDetails.permissions);
                    $$payload6.out.push(`<div class="form-field-group"><div class="form-field">`);
                    Label($$payload6, {
                      for: "username",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Username`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    Input($$payload6, {
                      id: "username",
                      value: employeeData.accountDetails.username,
                      readonly: true
                    });
                    $$payload6.out.push(`<!----></div> <div class="form-grid-2"><div class="form-field">`);
                    Label($$payload6, {
                      for: "lastLogin",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Last Login`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    Input($$payload6, {
                      id: "lastLogin",
                      value: employeeData.accountDetails.lastLogin,
                      readonly: true
                    });
                    $$payload6.out.push(`<!----></div> <div class="form-field">`);
                    Label($$payload6, {
                      for: "accountStatus",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Account Status`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> <div class="flex items-center gap-2">`);
                    Input($$payload6, {
                      id: "accountStatus",
                      value: employeeData.accountDetails.accountStatus,
                      readonly: true,
                      class: "flex-1"
                    });
                    $$payload6.out.push(`<!----> `);
                    Badge($$payload6, {
                      variant: "secondary",
                      class: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Active`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----></div></div></div> <div class="form-field">`);
                    Label($$payload6, {
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Permissions`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> <div class="flex flex-wrap gap-2 mt-2"><!--[-->`);
                    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                      let permission = each_array[$$index];
                      Badge($$payload6, {
                        variant: "outline",
                        children: ($$payload7) => {
                          $$payload7.out.push(`<!---->${escape_html(permission)}`);
                        },
                        $$slots: { default: true }
                      });
                    }
                    $$payload6.out.push(`<!--]--></div></div> <div class="form-field">`);
                    Label($$payload6, {
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->Two-Factor Authentication`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> <div class="flex items-center gap-3 mt-2">`);
                    Badge($$payload6, {
                      variant: "secondary",
                      class: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                      children: ($$payload7) => {
                        $$payload7.out.push(`<!---->${escape_html("Enabled")}`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out.push(`<!----> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Button($$payload6, {
                        variant: "outline",
                        size: "sm",
                        children: ($$payload7) => {
                          $$payload7.out.push(`<!---->${escape_html("Disable")} 2FA`);
                        },
                        $$slots: { default: true }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                    }
                    $$payload6.out.push(`<!--]--></div></div></div> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      $$payload6.out.push(`<div class="flex justify-end gap-3 pt-4">`);
                      Button($$payload6, {
                        variant: "outline",
                        onclick: cancelEdit,
                        children: ($$payload7) => {
                          X($$payload7, { class: "w-4 h-4 mr-2" });
                          $$payload7.out.push(`<!----> Cancel`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out.push(`<!----> `);
                      Button($$payload6, {
                        onclick: saveChanges,
                        children: ($$payload7) => {
                          Save($$payload7, { class: "w-4 h-4 mr-2" });
                          $$payload7.out.push(`<!----> Save Changes`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out.push(`<!----></div>`);
                    } else {
                      $$payload6.out.push("<!--[!-->");
                    }
                    $$payload6.out.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Tabs_content($$payload5, {
                  value: "emergency-contacts",
                  class: "space-y-6 mt-6",
                  children: ($$payload6) => {
                    const each_array_1 = ensure_array_like(employeeData.emergencyContacts);
                    $$payload6.out.push(`<div class="flex items-center justify-between mb-4"><h3 class="font-semibold text-lg">Emergency Contacts</h3> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      Button($$payload6, {
                        onclick: addEmergencyContact,
                        children: ($$payload7) => {
                          Plus($$payload7, { class: "w-4 h-4 mr-2" });
                          $$payload7.out.push(`<!----> Add Contact`);
                        },
                        $$slots: { default: true }
                      });
                    } else {
                      $$payload6.out.push("<!--[!-->");
                    }
                    $$payload6.out.push(`<!--]--></div> <div class="space-y-4"><!--[-->`);
                    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                      let contact = each_array_1[$$index_1];
                      Card($$payload6, {
                        class: "card",
                        children: ($$payload7) => {
                          Card_content($$payload7, {
                            class: "card-content",
                            children: ($$payload8) => {
                              $$payload8.out.push(`<div class="flex items-start justify-between mb-4"><div class="flex items-center gap-3">`);
                              Avatar($$payload8, {
                                class: "h-12 w-12",
                                children: ($$payload9) => {
                                  $$payload9.out.push(`<div class="h-full w-full bg-primary/10 flex items-center justify-center">`);
                                  User($$payload9, { class: "h-6 w-6 text-primary" });
                                  $$payload9.out.push(`<!----></div>`);
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out.push(`<!----> <div><h4 class="font-semibold">${escape_html(contact.name || "New Contact")}</h4> <p class="text-sm text-muted-foreground">${escape_html(contact.relationship)}</p></div></div> <div class="flex items-center gap-2">`);
                              if (contact.isPrimary) {
                                $$payload8.out.push("<!--[-->");
                                Badge($$payload8, {
                                  variant: "default",
                                  children: ($$payload9) => {
                                    $$payload9.out.push(`<!---->Primary`);
                                  },
                                  $$slots: { default: true }
                                });
                              } else {
                                $$payload8.out.push("<!--[!-->");
                              }
                              $$payload8.out.push(`<!--]--> `);
                              if (editMode) {
                                $$payload8.out.push("<!--[-->");
                                Button($$payload8, {
                                  variant: "outline",
                                  size: "sm",
                                  onclick: () => setPrimaryContact(contact.id),
                                  children: ($$payload9) => {
                                    $$payload9.out.push(`<!---->Set Primary`);
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload8.out.push(`<!----> `);
                                Button($$payload8, {
                                  variant: "outline",
                                  size: "sm",
                                  onclick: () => deleteEmergencyContact(contact.id),
                                  class: "text-red-600 hover:text-red-700",
                                  children: ($$payload9) => {
                                    $$payload9.out.push(`<!---->Delete`);
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload8.out.push(`<!---->`);
                              } else {
                                $$payload8.out.push("<!--[!-->");
                              }
                              $$payload8.out.push(`<!--]--></div></div> <div class="form-grid-2"><div class="form-field">`);
                              Label($$payload8, {
                                for: `contactName_${stringify(contact.id)}`,
                                children: ($$payload9) => {
                                  $$payload9.out.push(`<!---->Name`);
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out.push(`<!----> `);
                              if (editMode) {
                                $$payload8.out.push("<!--[-->");
                                Input($$payload8, {
                                  id: `contactName_${stringify(contact.id)}`,
                                  get value() {
                                    return contact.name;
                                  },
                                  set value($$value) {
                                    contact.name = $$value;
                                    $$settled = false;
                                  }
                                });
                              } else {
                                $$payload8.out.push("<!--[!-->");
                                Input($$payload8, {
                                  id: `contactName_${stringify(contact.id)}`,
                                  value: contact.name,
                                  readonly: true
                                });
                              }
                              $$payload8.out.push(`<!--]--></div> <div class="form-field">`);
                              Label($$payload8, {
                                for: `relationship_${stringify(contact.id)}`,
                                children: ($$payload9) => {
                                  $$payload9.out.push(`<!---->Relationship`);
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out.push(`<!----> `);
                              if (editMode) {
                                $$payload8.out.push("<!--[-->");
                                Input($$payload8, {
                                  id: `relationship_${stringify(contact.id)}`,
                                  get value() {
                                    return contact.relationship;
                                  },
                                  set value($$value) {
                                    contact.relationship = $$value;
                                    $$settled = false;
                                  }
                                });
                              } else {
                                $$payload8.out.push("<!--[!-->");
                                Input($$payload8, {
                                  id: `relationship_${stringify(contact.id)}`,
                                  value: contact.relationship,
                                  readonly: true
                                });
                              }
                              $$payload8.out.push(`<!--]--></div></div> <div class="form-grid-2"><div class="form-field">`);
                              Label($$payload8, {
                                for: `contactPhone_${stringify(contact.id)}`,
                                children: ($$payload9) => {
                                  $$payload9.out.push(`<!---->Phone`);
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out.push(`<!----> <div class="flex items-center gap-2">`);
                              Phone($$payload8, { class: "w-4 h-4 text-muted-foreground" });
                              $$payload8.out.push(`<!----> `);
                              if (editMode) {
                                $$payload8.out.push("<!--[-->");
                                Input($$payload8, {
                                  id: `contactPhone_${stringify(contact.id)}`,
                                  class: "flex-1",
                                  get value() {
                                    return contact.phone;
                                  },
                                  set value($$value) {
                                    contact.phone = $$value;
                                    $$settled = false;
                                  }
                                });
                              } else {
                                $$payload8.out.push("<!--[!-->");
                                Input($$payload8, {
                                  id: `contactPhone_${stringify(contact.id)}`,
                                  value: contact.phone,
                                  readonly: true,
                                  class: "flex-1"
                                });
                              }
                              $$payload8.out.push(`<!--]--></div></div> <div class="form-field">`);
                              Label($$payload8, {
                                for: `contactEmail_${stringify(contact.id)}`,
                                children: ($$payload9) => {
                                  $$payload9.out.push(`<!---->Email`);
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out.push(`<!----> <div class="flex items-center gap-2">`);
                              Mail($$payload8, { class: "w-4 h-4 text-muted-foreground" });
                              $$payload8.out.push(`<!----> `);
                              if (editMode) {
                                $$payload8.out.push("<!--[-->");
                                Input($$payload8, {
                                  id: `contactEmail_${stringify(contact.id)}`,
                                  type: "email",
                                  class: "flex-1",
                                  get value() {
                                    return contact.email;
                                  },
                                  set value($$value) {
                                    contact.email = $$value;
                                    $$settled = false;
                                  }
                                });
                              } else {
                                $$payload8.out.push("<!--[!-->");
                                Input($$payload8, {
                                  id: `contactEmail_${stringify(contact.id)}`,
                                  value: contact.email,
                                  readonly: true,
                                  class: "flex-1"
                                });
                              }
                              $$payload8.out.push(`<!--]--></div></div></div>`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                    }
                    $$payload6.out.push(`<!--]--></div> `);
                    if (editMode) {
                      $$payload6.out.push("<!--[-->");
                      $$payload6.out.push(`<div class="flex justify-end gap-3 pt-4">`);
                      Button($$payload6, {
                        variant: "outline",
                        onclick: cancelEdit,
                        children: ($$payload7) => {
                          X($$payload7, { class: "w-4 h-4 mr-2" });
                          $$payload7.out.push(`<!----> Cancel`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out.push(`<!----> `);
                      Button($$payload6, {
                        onclick: saveChanges,
                        children: ($$payload7) => {
                          Save($$payload7, { class: "w-4 h-4 mr-2" });
                          $$payload7.out.push(`<!----> Save Changes`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out.push(`<!----></div>`);
                    } else {
                      $$payload6.out.push("<!--[!-->");
                    }
                    $$payload6.out.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!---->`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div></div></div>`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
