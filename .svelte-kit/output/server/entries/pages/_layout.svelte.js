import "clsx";
/* empty css               */
import { x as setContext, z as getContext, A as derived, B as spread_attributes, D as clsx, E as bind_props, y as pop, w as push, F as props_id, G as attr, I as spread_props, J as copy_payload, K as assign_payload, M as escape_html, N as stringify, O as attr_class, P as head, Q as ensure_array_like, R as store_get, S as unsubscribe_stores } from "../../chunks/index2.js";
import { c as cn, I as Icon, B as Button, C as Chevron_right } from "../../chunks/chevron-right.js";
import { M as MediaQuery, b as box, c as createBitsAttrs, a as attachRef, w as watch, g as getDataOpenClosed, d as createId, m as mergeProps, e as executeCallbacks, f as getDataDisabled } from "../../chunks/create-id.js";
import "style-to-object";
import { C as Context, g as getWindow, a as getDocument, D as DOMContext } from "../../chunks/dom-context.svelte.js";
import { O as OpenChangeComplete, P as Presence_layer, u as useId, F as FloatingArrowState, b as boxAutoReset, i as isHTMLElement, a as isElement, c as Focus_scope, d as afterSleep, E as Escape_layer, D as Dismissible_layer, T as Text_selection_layer, S as Scroll_lock, e as isFocusVisible, f as Floating_layer, g as Popper_layer_force_mount, h as Popper_layer, j as getFloatingContentCSSVars, k as Floating_layer_anchor, l as Portal, C as Chevron_down } from "../../chunks/chevron-down.js";
import { B as BROWSER } from "../../chunks/false.js";
import { o as on } from "../../chunks/events.js";
import { n as noop } from "../../chunks/noop.js";
import { tv } from "tailwind-variants";
import { S as SPACE, E as ENTER } from "../../chunks/kbd-constants.js";
import { p as page, s as settingsContextMenu, e as employeeLevel3Menu, l as leaveLevel3Menu, f as financialLevel3Menu, c as costCentersLevel3Menu, a as sidebarConfig } from "../../chunks/stores.js";
import { g as goto } from "../../chunks/client.js";
import { S as Search } from "../../chunks/search.js";
const DEFAULT_MOBILE_BREAKPOINT = 768;
class IsMobile extends MediaQuery {
  constructor(breakpoint = DEFAULT_MOBILE_BREAKPOINT) {
    super(`max-width: ${breakpoint - 1}px`);
  }
}
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
class SidebarState {
  props;
  #open = derived(() => this.props.open());
  get open() {
    return this.#open();
  }
  set open($$value) {
    return this.#open($$value);
  }
  openMobile = false;
  setOpen;
  #isMobile;
  #state = derived(() => this.open ? "expanded" : "collapsed");
  get state() {
    return this.#state();
  }
  set state($$value) {
    return this.#state($$value);
  }
  constructor(props) {
    this.setOpen = props.setOpen;
    this.#isMobile = new IsMobile();
    this.props = props;
  }
  // Convenience getter for checking if the sidebar is mobile
  // without this, we would need to use `sidebar.isMobile.current` everywhere
  get isMobile() {
    return this.#isMobile.current;
  }
  // Event handler to apply to the `<svelte:window>`
  handleShortcutKeydown = (e) => {
    if (e.key === SIDEBAR_KEYBOARD_SHORTCUT && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      this.toggle();
    }
  };
  setOpenMobile = (value) => {
    this.openMobile = value;
  };
  toggle = () => {
    return this.#isMobile.current ? this.openMobile = !this.openMobile : this.setOpen(!this.open);
  };
}
const SYMBOL_KEY = "scn-sidebar";
function setSidebar(props) {
  return setContext(Symbol.for(SYMBOL_KEY), new SidebarState(props));
}
function useSidebar() {
  return getContext(Symbol.for(SYMBOL_KEY));
}
function Sidebar_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<div${spread_attributes(
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: clsx(cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></div>`);
  bind_props($$props, { ref });
  pop();
}
function Sidebar_footer($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<div${spread_attributes(
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: clsx(cn("flex flex-col gap-2 p-2", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></div>`);
  bind_props($$props, { ref });
  pop();
}
function Sidebar_header($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<div${spread_attributes(
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: clsx(cn("flex flex-col gap-2 p-2", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></div>`);
  bind_props($$props, { ref });
  pop();
}
function onDestroyEffect(fn) {
}
const dialogAttrs = createBitsAttrs({
  component: "dialog",
  parts: [
    "content",
    "trigger",
    "overlay",
    "title",
    "description",
    "close",
    "cancel",
    "action"
  ]
});
const DialogRootContext = new Context("Dialog.Root | AlertDialog.Root");
class DialogRootState {
  static create(opts) {
    return DialogRootContext.set(new DialogRootState(opts));
  }
  opts;
  triggerNode = null;
  contentNode = null;
  descriptionNode = null;
  contentId = void 0;
  titleId = void 0;
  triggerId = void 0;
  descriptionId = void 0;
  cancelNode = null;
  constructor(opts) {
    this.opts = opts;
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    new OpenChangeComplete({
      ref: box.with(() => this.contentNode),
      open: this.opts.open,
      enabled: true,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
  }
  handleOpen() {
    if (this.opts.open.current) return;
    this.opts.open.current = true;
  }
  handleClose() {
    if (!this.opts.open.current) return;
    this.opts.open.current = false;
  }
  getBitsAttr = (part) => {
    return dialogAttrs.getAttr(part, this.opts.variant.current);
  };
  #sharedProps = derived(() => ({ "data-state": getDataOpenClosed(this.opts.open.current) }));
  get sharedProps() {
    return this.#sharedProps();
  }
  set sharedProps($$value) {
    return this.#sharedProps($$value);
  }
}
class DialogCloseState {
  static create(opts) {
    return new DialogCloseState(opts, DialogRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button > 0) return;
    this.root.handleClose();
  }
  onkeydown(e) {
    if (this.opts.disabled.current) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.root.handleClose();
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [this.root.getBitsAttr(this.opts.variant.current)]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    disabled: this.opts.disabled.current ? true : void 0,
    tabindex: 0,
    ...this.root.sharedProps,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class DialogTitleState {
  static create(opts) {
    return new DialogTitleState(opts, DialogRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.root.titleId = this.opts.id.current;
    this.attachment = attachRef(this.opts.ref);
    watch.pre(() => this.opts.id.current, (id) => {
      this.root.titleId = id;
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "heading",
    "aria-level": this.opts.level.current,
    [this.root.getBitsAttr("title")]: "",
    ...this.root.sharedProps,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class DialogDescriptionState {
  static create(opts) {
    return new DialogDescriptionState(opts, DialogRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.root.descriptionId = this.opts.id.current;
    this.attachment = attachRef(this.opts.ref, (v) => {
      this.root.descriptionNode = v;
    });
    watch.pre(() => this.opts.id.current, (id) => {
      this.root.descriptionId = id;
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [this.root.getBitsAttr("description")]: "",
    ...this.root.sharedProps,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class DialogContentState {
  static create(opts) {
    return new DialogContentState(opts, DialogRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => {
      this.root.contentNode = v;
      this.root.contentId = v?.id;
    });
  }
  #snippetProps = derived(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: this.root.opts.variant.current === "alert-dialog" ? "alertdialog" : "dialog",
    "aria-modal": "true",
    "aria-describedby": this.root.descriptionId,
    "aria-labelledby": this.root.titleId,
    [this.root.getBitsAttr("content")]: "",
    style: {
      pointerEvents: "auto",
      outline: this.root.opts.variant.current === "alert-dialog" ? "none" : void 0
    },
    tabindex: this.root.opts.variant.current === "alert-dialog" ? -1 : void 0,
    ...this.root.sharedProps,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class DialogOverlayState {
  static create(opts) {
    return new DialogOverlayState(opts, DialogRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
  }
  #snippetProps = derived(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [this.root.getBitsAttr("overlay")]: "",
    style: { pointerEvents: "auto" },
    ...this.root.sharedProps,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Dialog_title($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    ref = null,
    child,
    children,
    level = 2,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const titleState = DialogTitleState.create({
    id: box.with(() => id),
    level: box.with(() => level),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, titleState.props);
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
function shouldEnableFocusTrap({ forceMount, present, open }) {
  if (forceMount)
    return open;
  return present && open;
}
function Dialog_overlay($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    forceMount = false,
    child,
    children,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const overlayState = DialogOverlayState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, overlayState.props);
  {
    let presence = function($$payload2) {
      if (child) {
        $$payload2.out.push("<!--[-->");
        child($$payload2, { props: mergeProps(mergedProps), ...overlayState.snippetProps });
        $$payload2.out.push(`<!---->`);
      } else {
        $$payload2.out.push("<!--[!-->");
        $$payload2.out.push(`<div${spread_attributes({ ...mergeProps(mergedProps) })}>`);
        children?.($$payload2, overlayState.snippetProps);
        $$payload2.out.push(`<!----></div>`);
      }
      $$payload2.out.push(`<!--]-->`);
    };
    Presence_layer($$payload, {
      open: overlayState.root.opts.open.current || forceMount,
      ref: overlayState.opts.ref,
      presence
    });
  }
  bind_props($$props, { ref });
  pop();
}
function Dialog_description($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    children,
    child,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const descriptionState = DialogDescriptionState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, descriptionState.props);
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
function Arrow($$payload, $$props) {
  push();
  let {
    id = useId(),
    children,
    child,
    width = 10,
    height = 5,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const mergedProps = mergeProps(restProps, { id });
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<span${spread_attributes({ ...mergedProps })}>`);
    if (children) {
      $$payload.out.push("<!--[-->");
      children?.($$payload);
      $$payload.out.push(`<!---->`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<svg${attr("width", width)}${attr("height", height)} viewBox="0 0 30 10" preserveAspectRatio="none" data-arrow=""><polygon points="0,0 30,0 15,10" fill="currentColor"></polygon></svg>`);
    }
    $$payload.out.push(`<!--]--></span>`);
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
function Floating_layer_arrow($$payload, $$props) {
  push();
  let { id = useId(), ref = null, $$slots, $$events, ...restProps } = $$props;
  const arrowState = FloatingArrowState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, arrowState.props);
  Arrow($$payload, spread_props([mergedProps]));
  bind_props($$props, { ref });
  pop();
}
class GraceArea {
  #opts;
  #enabled;
  #isPointerInTransit;
  #pointerGraceArea = null;
  constructor(opts) {
    this.#opts = opts;
    this.#enabled = derived(() => this.#opts.enabled());
    this.#isPointerInTransit = boxAutoReset(false, {
      afterMs: opts.transitTimeout ?? 300,
      onChange: (value) => {
        if (!this.#enabled()) return;
        this.#opts.setIsPointerInTransit?.(value);
      },
      getWindow: () => getWindow(this.#opts.triggerNode())
    });
    watch([opts.triggerNode, opts.contentNode, opts.enabled], ([triggerNode, contentNode, enabled]) => {
      if (!triggerNode || !contentNode || !enabled) return;
      const handleTriggerLeave = (e) => {
        this.#createGraceArea(e, contentNode);
      };
      const handleContentLeave = (e) => {
        this.#createGraceArea(e, triggerNode);
      };
      return executeCallbacks(on(triggerNode, "pointerleave", handleTriggerLeave), on(contentNode, "pointerleave", handleContentLeave));
    });
    watch(() => this.#pointerGraceArea, () => {
      const handleTrackPointerGrace = (e) => {
        if (!this.#pointerGraceArea) return;
        const target = e.target;
        if (!isElement(target)) return;
        const pointerPosition = { x: e.clientX, y: e.clientY };
        const hasEnteredTarget = opts.triggerNode()?.contains(target) || opts.contentNode()?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, this.#pointerGraceArea);
        if (hasEnteredTarget) {
          this.#removeGraceArea();
        } else if (isPointerOutsideGraceArea) {
          this.#removeGraceArea();
          opts.onPointerExit();
        }
      };
      const doc = getDocument(opts.triggerNode() ?? opts.contentNode());
      if (!doc) return;
      return on(doc, "pointermove", handleTrackPointerGrace);
    });
  }
  #removeGraceArea() {
    this.#pointerGraceArea = null;
    this.#isPointerInTransit.current = false;
  }
  #createGraceArea(e, hoverTarget) {
    const currentTarget = e.currentTarget;
    if (!isHTMLElement(currentTarget)) return;
    const exitPoint = { x: e.clientX, y: e.clientY };
    const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
    const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
    this.#pointerGraceArea = graceArea;
    this.#isPointerInTransit.current = true;
  }
}
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const tipPadding = padding * 1.5;
  switch (exitSide) {
    case "top":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x, y: exitPoint.y - tipPadding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      ];
    case "bottom":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x, y: exitPoint.y + tipPadding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      ];
    case "left":
      return [
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x - tipPadding, y: exitPoint.y },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      ];
    case "right":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + tipPadding, y: exitPoint.y },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      ];
  }
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
function Dialog($$payload, $$props) {
  push();
  let {
    open = false,
    onOpenChange = noop,
    onOpenChangeComplete = noop,
    children
  } = $$props;
  DialogRootState.create({
    variant: box.with(() => "dialog"),
    open: box.with(() => open, (v) => {
      open = v;
      onOpenChange(v);
    }),
    onOpenChangeComplete: box.with(() => onOpenChangeComplete)
  });
  children?.($$payload);
  $$payload.out.push(`<!---->`);
  bind_props($$props, { open });
  pop();
}
function Dialog_close($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    id = createId(uid),
    ref = null,
    disabled = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const closeState = DialogCloseState.create({
    variant: box.with(() => "close"),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    disabled: box.with(() => Boolean(disabled))
  });
  const mergedProps = mergeProps(restProps, closeState.props);
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
function Dialog_content($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    children,
    child,
    ref = null,
    forceMount = false,
    onCloseAutoFocus = noop,
    onOpenAutoFocus = noop,
    onEscapeKeydown = noop,
    onInteractOutside = noop,
    trapFocus = true,
    preventScroll = true,
    restoreScrollDelay = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const contentState = DialogContentState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, contentState.props);
  {
    let presence = function($$payload2) {
      {
        let focusScope = function($$payload3, { props: focusScopeProps }) {
          Escape_layer($$payload3, spread_props([
            mergedProps,
            {
              enabled: contentState.root.opts.open.current,
              ref: contentState.opts.ref,
              onEscapeKeydown: (e) => {
                onEscapeKeydown(e);
                if (e.defaultPrevented) return;
                contentState.root.handleClose();
              },
              children: ($$payload4) => {
                Dismissible_layer($$payload4, spread_props([
                  mergedProps,
                  {
                    ref: contentState.opts.ref,
                    enabled: contentState.root.opts.open.current,
                    onInteractOutside: (e) => {
                      onInteractOutside(e);
                      if (e.defaultPrevented) return;
                      contentState.root.handleClose();
                    },
                    children: ($$payload5) => {
                      Text_selection_layer($$payload5, spread_props([
                        mergedProps,
                        {
                          ref: contentState.opts.ref,
                          enabled: contentState.root.opts.open.current,
                          children: ($$payload6) => {
                            if (child) {
                              $$payload6.out.push("<!--[-->");
                              if (contentState.root.opts.open.current) {
                                $$payload6.out.push("<!--[-->");
                                Scroll_lock($$payload6, { preventScroll, restoreScrollDelay });
                              } else {
                                $$payload6.out.push("<!--[!-->");
                              }
                              $$payload6.out.push(`<!--]--> `);
                              child($$payload6, {
                                props: mergeProps(mergedProps, focusScopeProps),
                                ...contentState.snippetProps
                              });
                              $$payload6.out.push(`<!---->`);
                            } else {
                              $$payload6.out.push("<!--[!-->");
                              Scroll_lock($$payload6, { preventScroll });
                              $$payload6.out.push(`<!----> <div${spread_attributes({ ...mergeProps(mergedProps, focusScopeProps) })}>`);
                              children?.($$payload6);
                              $$payload6.out.push(`<!----></div>`);
                            }
                            $$payload6.out.push(`<!--]-->`);
                          },
                          $$slots: { default: true }
                        }
                      ]));
                    },
                    $$slots: { default: true }
                  }
                ]));
              },
              $$slots: { default: true }
            }
          ]));
        };
        Focus_scope($$payload2, {
          ref: contentState.opts.ref,
          loop: true,
          trapFocus,
          enabled: shouldEnableFocusTrap({
            forceMount,
            present: contentState.root.opts.open.current,
            open: contentState.root.opts.open.current
          }),
          onOpenAutoFocus,
          onCloseAutoFocus: (e) => {
            onCloseAutoFocus(e);
            if (e.defaultPrevented) return;
            afterSleep(1, () => contentState.root.triggerNode?.focus());
          },
          focusScope
        });
      }
    };
    Presence_layer($$payload, spread_props([
      mergedProps,
      {
        forceMount,
        open: contentState.root.opts.open.current || forceMount,
        ref: contentState.opts.ref,
        presence,
        $$slots: { presence: true }
      }
    ]));
  }
  bind_props($$props, { ref });
  pop();
}
const defaultOpts = {
  immediate: true
};
class TimeoutFn {
  #opts;
  #interval;
  #cb;
  #timer = null;
  constructor(cb, interval, opts = {}) {
    this.#cb = cb;
    this.#interval = interval;
    this.#opts = { ...defaultOpts, ...opts };
    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
    if (this.#opts.immediate && BROWSER) ;
    onDestroyEffect(this.stop);
  }
  #clear() {
    if (this.#timer !== null) {
      window.clearTimeout(this.#timer);
      this.#timer = null;
    }
  }
  stop() {
    this.#clear();
  }
  start(...args) {
    this.#clear();
    this.#timer = window.setTimeout(() => {
      this.#timer = null;
      this.#cb(...args);
    }, this.#interval);
  }
}
const tooltipAttrs = createBitsAttrs({ component: "tooltip", parts: ["content", "trigger"] });
const TooltipProviderContext = new Context("Tooltip.Provider");
const TooltipRootContext = new Context("Tooltip.Root");
class TooltipProviderState {
  static create(opts) {
    return TooltipProviderContext.set(new TooltipProviderState(opts));
  }
  opts;
  isOpenDelayed = true;
  isPointerInTransit = box(false);
  #timerFn;
  #openTooltip = null;
  constructor(opts) {
    this.opts = opts;
    this.#timerFn = new TimeoutFn(
      () => {
        this.isOpenDelayed = true;
      },
      this.opts.skipDelayDuration.current,
      { immediate: false }
    );
  }
  #startTimer = () => {
    const skipDuration = this.opts.skipDelayDuration.current;
    if (skipDuration === 0) {
      return;
    } else {
      this.#timerFn.start();
    }
  };
  #clearTimer = () => {
    this.#timerFn.stop();
  };
  onOpen = (tooltip) => {
    if (this.#openTooltip && this.#openTooltip !== tooltip) {
      this.#openTooltip.handleClose();
    }
    this.#clearTimer();
    this.isOpenDelayed = false;
    this.#openTooltip = tooltip;
  };
  onClose = (tooltip) => {
    if (this.#openTooltip === tooltip) {
      this.#openTooltip = null;
    }
    this.#startTimer();
  };
  isTooltipOpen = (tooltip) => {
    return this.#openTooltip === tooltip;
  };
}
class TooltipRootState {
  static create(opts) {
    return TooltipRootContext.set(new TooltipRootState(opts, TooltipProviderContext.get()));
  }
  opts;
  provider;
  #delayDuration = derived(() => this.opts.delayDuration.current ?? this.provider.opts.delayDuration.current);
  get delayDuration() {
    return this.#delayDuration();
  }
  set delayDuration($$value) {
    return this.#delayDuration($$value);
  }
  #disableHoverableContent = derived(() => this.opts.disableHoverableContent.current ?? this.provider.opts.disableHoverableContent.current);
  get disableHoverableContent() {
    return this.#disableHoverableContent();
  }
  set disableHoverableContent($$value) {
    return this.#disableHoverableContent($$value);
  }
  #disableCloseOnTriggerClick = derived(() => this.opts.disableCloseOnTriggerClick.current ?? this.provider.opts.disableCloseOnTriggerClick.current);
  get disableCloseOnTriggerClick() {
    return this.#disableCloseOnTriggerClick();
  }
  set disableCloseOnTriggerClick($$value) {
    return this.#disableCloseOnTriggerClick($$value);
  }
  #disabled = derived(() => this.opts.disabled.current ?? this.provider.opts.disabled.current);
  get disabled() {
    return this.#disabled();
  }
  set disabled($$value) {
    return this.#disabled($$value);
  }
  #ignoreNonKeyboardFocus = derived(() => this.opts.ignoreNonKeyboardFocus.current ?? this.provider.opts.ignoreNonKeyboardFocus.current);
  get ignoreNonKeyboardFocus() {
    return this.#ignoreNonKeyboardFocus();
  }
  set ignoreNonKeyboardFocus($$value) {
    return this.#ignoreNonKeyboardFocus($$value);
  }
  contentNode = null;
  triggerNode = null;
  #wasOpenDelayed = false;
  #timerFn;
  #stateAttr = derived(() => {
    if (!this.opts.open.current) return "closed";
    return this.#wasOpenDelayed ? "delayed-open" : "instant-open";
  });
  get stateAttr() {
    return this.#stateAttr();
  }
  set stateAttr($$value) {
    return this.#stateAttr($$value);
  }
  constructor(opts, provider) {
    this.opts = opts;
    this.provider = provider;
    this.#timerFn = new TimeoutFn(
      () => {
        this.#wasOpenDelayed = true;
        this.opts.open.current = true;
      },
      this.delayDuration ?? 0,
      { immediate: false }
    );
    new OpenChangeComplete({
      open: this.opts.open,
      ref: box.with(() => this.contentNode),
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
    watch(() => this.delayDuration, () => {
      if (this.delayDuration === void 0) return;
      this.#timerFn = new TimeoutFn(
        () => {
          this.#wasOpenDelayed = true;
          this.opts.open.current = true;
        },
        this.delayDuration,
        { immediate: false }
      );
    });
    watch(() => this.opts.open.current, (isOpen) => {
      if (isOpen) {
        this.provider.onOpen(this);
      } else {
        this.provider.onClose(this);
      }
    });
  }
  handleOpen = () => {
    this.#timerFn.stop();
    this.#wasOpenDelayed = false;
    this.opts.open.current = true;
  };
  handleClose = () => {
    this.#timerFn.stop();
    this.opts.open.current = false;
  };
  #handleDelayedOpen = () => {
    this.#timerFn.stop();
    const shouldSkipDelay = !this.provider.isOpenDelayed;
    const delayDuration = this.delayDuration ?? 0;
    if (shouldSkipDelay || delayDuration === 0) {
      this.#wasOpenDelayed = delayDuration > 0 && shouldSkipDelay;
      this.opts.open.current = true;
    } else {
      this.#timerFn.start();
    }
  };
  onTriggerEnter = () => {
    this.#handleDelayedOpen();
  };
  onTriggerLeave = () => {
    if (this.disableHoverableContent) {
      this.handleClose();
    } else {
      this.#timerFn.stop();
    }
  };
}
class TooltipTriggerState {
  static create(opts) {
    return new TooltipTriggerState(opts, TooltipRootContext.get());
  }
  opts;
  root;
  attachment;
  #isPointerDown = box(false);
  #hasPointerMoveOpened = false;
  #isDisabled = derived(() => this.opts.disabled.current || this.root.disabled);
  domContext;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.domContext = new DOMContext(opts.ref);
    this.attachment = attachRef(this.opts.ref, (v) => this.root.triggerNode = v);
  }
  handlePointerUp = () => {
    this.#isPointerDown.current = false;
  };
  #onpointerup = () => {
    if (this.#isDisabled()) return;
    this.#isPointerDown.current = false;
  };
  #onpointerdown = () => {
    if (this.#isDisabled()) return;
    this.#isPointerDown.current = true;
    this.domContext.getDocument().addEventListener(
      "pointerup",
      () => {
        this.handlePointerUp();
      },
      { once: true }
    );
  };
  #onpointermove = (e) => {
    if (this.#isDisabled()) return;
    if (e.pointerType === "touch") return;
    if (this.#hasPointerMoveOpened) return;
    if (this.root.provider.isPointerInTransit.current) return;
    this.root.onTriggerEnter();
    this.#hasPointerMoveOpened = true;
  };
  #onpointerleave = () => {
    if (this.#isDisabled()) return;
    this.root.onTriggerLeave();
    this.#hasPointerMoveOpened = false;
  };
  #onfocus = (e) => {
    if (this.#isPointerDown.current || this.#isDisabled()) return;
    if (this.root.ignoreNonKeyboardFocus && !isFocusVisible(e.currentTarget)) return;
    this.root.handleOpen();
  };
  #onblur = () => {
    if (this.#isDisabled()) return;
    this.root.handleClose();
  };
  #onclick = () => {
    if (this.root.disableCloseOnTriggerClick || this.#isDisabled()) return;
    this.root.handleClose();
  };
  #props = derived(() => ({
    id: this.opts.id.current,
    "aria-describedby": this.root.opts.open.current ? this.root.contentNode?.id : void 0,
    "data-state": this.root.stateAttr,
    "data-disabled": getDataDisabled(this.#isDisabled()),
    "data-delay-duration": `${this.root.delayDuration}`,
    [tooltipAttrs.trigger]: "",
    tabindex: this.#isDisabled() ? void 0 : 0,
    disabled: this.opts.disabled.current,
    onpointerup: this.#onpointerup,
    onpointerdown: this.#onpointerdown,
    onpointermove: this.#onpointermove,
    onpointerleave: this.#onpointerleave,
    onfocus: this.#onfocus,
    onblur: this.#onblur,
    onclick: this.#onclick,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class TooltipContentState {
  static create(opts) {
    return new TooltipContentState(opts, TooltipRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
    new GraceArea({
      triggerNode: () => this.root.triggerNode,
      contentNode: () => this.root.contentNode,
      enabled: () => this.root.opts.open.current && !this.root.disableHoverableContent,
      onPointerExit: () => {
        if (this.root.provider.isTooltipOpen(this.root)) {
          this.root.handleClose();
        }
      },
      setIsPointerInTransit: (value) => {
        this.root.provider.isPointerInTransit.current = value;
      },
      transitTimeout: this.root.provider.opts.skipDelayDuration.current
    });
  }
  onInteractOutside = (e) => {
    if (isElement(e.target) && this.root.triggerNode?.contains(e.target) && this.root.disableCloseOnTriggerClick) {
      e.preventDefault();
      return;
    }
    this.opts.onInteractOutside.current(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  onEscapeKeydown = (e) => {
    this.opts.onEscapeKeydown.current?.(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  onOpenAutoFocus = (e) => {
    e.preventDefault();
  };
  onCloseAutoFocus = (e) => {
    e.preventDefault();
  };
  #snippetProps = derived(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-state": this.root.stateAttr,
    "data-disabled": getDataDisabled(this.root.disabled),
    style: { pointerEvents: "auto", outline: "none" },
    [tooltipAttrs.content]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  popperProps = {
    onInteractOutside: this.onInteractOutside,
    onEscapeKeydown: this.onEscapeKeydown,
    onOpenAutoFocus: this.onOpenAutoFocus,
    onCloseAutoFocus: this.onCloseAutoFocus
  };
}
function Tooltip($$payload, $$props) {
  push();
  let {
    open = false,
    onOpenChange = noop,
    onOpenChangeComplete = noop,
    disabled,
    delayDuration,
    disableCloseOnTriggerClick,
    disableHoverableContent,
    ignoreNonKeyboardFocus,
    children
  } = $$props;
  TooltipRootState.create({
    open: box.with(() => open, (v) => {
      open = v;
      onOpenChange(v);
    }),
    delayDuration: box.with(() => delayDuration),
    disableCloseOnTriggerClick: box.with(() => disableCloseOnTriggerClick),
    disableHoverableContent: box.with(() => disableHoverableContent),
    ignoreNonKeyboardFocus: box.with(() => ignoreNonKeyboardFocus),
    disabled: box.with(() => disabled),
    onOpenChangeComplete: box.with(() => onOpenChangeComplete)
  });
  Floating_layer($$payload, {
    tooltip: true,
    children: ($$payload2) => {
      children?.($$payload2);
      $$payload2.out.push(`<!---->`);
    }
  });
  bind_props($$props, { open });
  pop();
}
function Tooltip_content$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    id = createId(uid),
    ref = null,
    side = "top",
    sideOffset = 0,
    align = "center",
    avoidCollisions = true,
    arrowPadding = 0,
    sticky = "partial",
    hideWhenDetached = false,
    collisionPadding = 0,
    onInteractOutside = noop,
    onEscapeKeydown = noop,
    forceMount = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const contentState = TooltipContentState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    onInteractOutside: box.with(() => onInteractOutside),
    onEscapeKeydown: box.with(() => onEscapeKeydown)
  });
  const floatingProps = {
    side,
    sideOffset,
    align,
    avoidCollisions,
    arrowPadding,
    sticky,
    hideWhenDetached,
    collisionPadding
  };
  const mergedProps = mergeProps(restProps, floatingProps, contentState.props);
  if (forceMount) {
    $$payload.out.push("<!--[-->");
    {
      let popper = function($$payload2, { props, wrapperProps }) {
        const mergedProps2 = mergeProps(props, { style: getFloatingContentCSSVars("tooltip") });
        if (child) {
          $$payload2.out.push("<!--[-->");
          child($$payload2, {
            props: mergedProps2,
            wrapperProps,
            ...contentState.snippetProps
          });
          $$payload2.out.push(`<!---->`);
        } else {
          $$payload2.out.push("<!--[!-->");
          $$payload2.out.push(`<div${spread_attributes({ ...wrapperProps })}><div${spread_attributes({ ...mergedProps2 })}>`);
          children?.($$payload2);
          $$payload2.out.push(`<!----></div></div>`);
        }
        $$payload2.out.push(`<!--]-->`);
      };
      Popper_layer_force_mount($$payload, spread_props([
        mergedProps,
        contentState.popperProps,
        {
          enabled: contentState.root.opts.open.current,
          id,
          trapFocus: false,
          loop: false,
          preventScroll: false,
          forceMount: true,
          ref: contentState.opts.ref,
          tooltip: true,
          popper,
          $$slots: { popper: true }
        }
      ]));
    }
  } else {
    $$payload.out.push("<!--[!-->");
    if (!forceMount) {
      $$payload.out.push("<!--[-->");
      {
        let popper = function($$payload2, { props, wrapperProps }) {
          const mergedProps2 = mergeProps(props, { style: getFloatingContentCSSVars("tooltip") });
          if (child) {
            $$payload2.out.push("<!--[-->");
            child($$payload2, {
              props: mergedProps2,
              wrapperProps,
              ...contentState.snippetProps
            });
            $$payload2.out.push(`<!---->`);
          } else {
            $$payload2.out.push("<!--[!-->");
            $$payload2.out.push(`<div${spread_attributes({ ...wrapperProps })}><div${spread_attributes({ ...mergedProps2 })}>`);
            children?.($$payload2);
            $$payload2.out.push(`<!----></div></div>`);
          }
          $$payload2.out.push(`<!--]-->`);
        };
        Popper_layer($$payload, spread_props([
          mergedProps,
          contentState.popperProps,
          {
            open: contentState.root.opts.open.current,
            id,
            trapFocus: false,
            loop: false,
            preventScroll: false,
            forceMount: false,
            ref: contentState.opts.ref,
            tooltip: true,
            popper,
            $$slots: { popper: true }
          }
        ]));
      }
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Tooltip_trigger$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    id = createId(uid),
    disabled = false,
    type = "button",
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const triggerState = TooltipTriggerState.create({
    id: box.with(() => id),
    disabled: box.with(() => disabled ?? false),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, triggerState.props, { type });
  Floating_layer_anchor($$payload, {
    id,
    ref: triggerState.opts.ref,
    tooltip: true,
    children: ($$payload2) => {
      if (child) {
        $$payload2.out.push("<!--[-->");
        child($$payload2, { props: mergedProps });
        $$payload2.out.push(`<!---->`);
      } else {
        $$payload2.out.push("<!--[!-->");
        $$payload2.out.push(`<button${spread_attributes({ ...mergedProps })}>`);
        children?.($$payload2);
        $$payload2.out.push(`<!----></button>`);
      }
      $$payload2.out.push(`<!--]-->`);
    }
  });
  bind_props($$props, { ref });
  pop();
}
function Tooltip_arrow($$payload, $$props) {
  push();
  let { ref = null, $$slots, $$events, ...restProps } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Floating_layer_arrow($$payload2, spread_props([
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
function Tooltip_provider($$payload, $$props) {
  push();
  let {
    children,
    delayDuration = 700,
    disableCloseOnTriggerClick = false,
    disableHoverableContent = false,
    disabled = false,
    ignoreNonKeyboardFocus = false,
    skipDelayDuration = 300
  } = $$props;
  TooltipProviderState.create({
    delayDuration: box.with(() => delayDuration),
    disableCloseOnTriggerClick: box.with(() => disableCloseOnTriggerClick),
    disableHoverableContent: box.with(() => disableHoverableContent),
    disabled: box.with(() => disabled),
    ignoreNonKeyboardFocus: box.with(() => ignoreNonKeyboardFocus),
    skipDelayDuration: box.with(() => skipDelayDuration)
  });
  children?.($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
function Tooltip_trigger($$payload, $$props) {
  push();
  let { ref = null, $$slots, $$events, ...restProps } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Tooltip_trigger$1($$payload2, spread_props([
      { "data-slot": "tooltip-trigger" },
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
function Tooltip_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    sideOffset = 0,
    side = "top",
    children,
    arrowClasses,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Portal($$payload2, {
      children: ($$payload3) => {
        $$payload3.out.push(`<!---->`);
        Tooltip_content$1($$payload3, spread_props([
          {
            "data-slot": "tooltip-content",
            sideOffset,
            side,
            class: cn("z-50 w-fit origin-(--bits-tooltip-content-transform-origin) animate-in rounded-md bg-primary px-3 py-1.5 text-xs text-balance text-primary-foreground fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", className)
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
            children: ($$payload4) => {
              children?.($$payload4);
              $$payload4.out.push(`<!----> <!---->`);
              {
                let child = function($$payload5, { props }) {
                  $$payload5.out.push(`<div${spread_attributes(
                    {
                      class: clsx(cn("z-50 size-2.5 rotate-45 rounded-[2px] bg-primary", "data-[side=top]:translate-x-1/2 data-[side=top]:translate-y-[calc(-50%_+_2px)]", "data-[side=bottom]:-translate-x-1/2 data-[side=bottom]:-translate-y-[calc(-50%_+_1px)]", "data-[side=right]:translate-x-[calc(50%_+_2px)] data-[side=right]:translate-y-1/2", "data-[side=left]:-translate-y-[calc(50%_-_3px)]", arrowClasses)),
                      ...props
                    }
                  )}></div>`);
                };
                Tooltip_arrow($$payload4, { child, $$slots: { child: true } });
              }
              $$payload4.out.push(`<!---->`);
            },
            $$slots: { default: true }
          }
        ]));
        $$payload3.out.push(`<!---->`);
      }
    });
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
const Root$1 = Tooltip;
const Provider = Tooltip_provider;
const sidebarMenuButtonVariants = tv({
  base: "peer/menu-button outline-hidden ring-sidebar-ring hover:bg-hover hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground group-has-data-[sidebar=menu-action]/menu-item:pr-8 data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-hover data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  variants: {
    variant: {
      default: "hover:bg-hover hover:text-sidebar-accent-foreground",
      outline: "bg-background hover:bg-hover hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_var(--sidebar-border)] hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "group-data-[collapsible=icon]:p-0! h-12 text-sm"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Sidebar_menu_button($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    child,
    variant = "default",
    size = "default",
    isActive = false,
    tooltipContent,
    tooltipContentProps,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const sidebar = useSidebar();
  const buttonProps = {
    class: cn(sidebarMenuButtonVariants({ variant, size }), className),
    "data-slot": "sidebar-menu-button",
    "data-sidebar": "menu-button",
    "data-size": size,
    "data-active": isActive,
    ...restProps
  };
  function Button2($$payload2, { props }) {
    const mergedProps = mergeProps(buttonProps, props);
    if (child) {
      $$payload2.out.push("<!--[-->");
      child($$payload2, { props: mergedProps });
      $$payload2.out.push(`<!---->`);
    } else {
      $$payload2.out.push("<!--[!-->");
      $$payload2.out.push(`<button${spread_attributes({ ...mergedProps })}>`);
      children?.($$payload2);
      $$payload2.out.push(`<!----></button>`);
    }
    $$payload2.out.push(`<!--]-->`);
  }
  if (!tooltipContent) {
    $$payload.out.push("<!--[-->");
    Button2($$payload, {});
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<!---->`);
    Root$1($$payload, {
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        {
          let child2 = function($$payload3, { props }) {
            Button2($$payload3, { props });
          };
          Tooltip_trigger($$payload2, { child: child2, $$slots: { child: true } });
        }
        $$payload2.out.push(`<!----> <!---->`);
        Tooltip_content($$payload2, spread_props([
          {
            side: "right",
            align: "center",
            hidden: sidebar.state !== "collapsed" || sidebar.isMobile
          },
          tooltipContentProps,
          {
            children: ($$payload3) => {
              if (typeof tooltipContent === "string") {
                $$payload3.out.push("<!--[-->");
                $$payload3.out.push(`${escape_html(tooltipContent)}`);
              } else {
                $$payload3.out.push("<!--[!-->");
                if (tooltipContent) {
                  $$payload3.out.push("<!--[-->");
                  tooltipContent($$payload3);
                  $$payload3.out.push(`<!---->`);
                } else {
                  $$payload3.out.push("<!--[!-->");
                }
                $$payload3.out.push(`<!--]-->`);
              }
              $$payload3.out.push(`<!--]-->`);
            },
            $$slots: { default: true }
          }
        ]));
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$payload.out.push(`<!---->`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Sidebar_menu_item($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<li${spread_attributes(
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: clsx(cn("group/menu-item relative", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></li>`);
  bind_props($$props, { ref });
  pop();
}
function Sidebar_menu_sub_button($$payload, $$props) {
  push();
  let {
    ref = null,
    children,
    child,
    class: className,
    size = "md",
    isActive = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const mergedProps = {
    class: cn("text-sidebar-foreground ring-sidebar-ring hover:bg-hover hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground outline-hidden flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 whitespace-nowrap [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
    "data-slot": "sidebar-menu-sub-button",
    "data-sidebar": "menu-sub-button",
    "data-size": size,
    "data-active": isActive,
    ...restProps
  };
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<a${spread_attributes({ ...mergedProps })}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></a>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Sidebar_menu_sub_item($$payload, $$props) {
  push();
  let {
    ref = null,
    children,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<li${spread_attributes(
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: clsx(cn("group/menu-sub-item relative", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></li>`);
  bind_props($$props, { ref });
  pop();
}
function Sidebar_menu_sub($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<ul${spread_attributes(
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      class: clsx(cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></ul>`);
  bind_props($$props, { ref });
  pop();
}
function Sidebar_menu($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<ul${spread_attributes(
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: clsx(cn("flex w-full min-w-0 flex-col gap-1", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></ul>`);
  bind_props($$props, { ref });
  pop();
}
function Sidebar_provider($$payload, $$props) {
  push();
  let {
    ref = null,
    open = true,
    onOpenChange = () => {
    },
    class: className,
    style,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  setSidebar({
    open: () => open,
    setOpen: (value) => {
      open = value;
      onOpenChange(value);
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }
  });
  $$payload.out.push(`<!---->`);
  Provider($$payload, {
    delayDuration: 0,
    children: ($$payload2) => {
      $$payload2.out.push(`<div${spread_attributes(
        {
          "data-slot": "sidebar-wrapper",
          style: `--sidebar-width: ${stringify(SIDEBAR_WIDTH)}; --sidebar-width-icon: ${stringify(SIDEBAR_WIDTH_ICON)}; ${stringify(style)}`,
          class: clsx(cn("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className)),
          ...restProps
        }
      )}>`);
      children?.($$payload2);
      $$payload2.out.push(`<!----></div>`);
    }
  });
  $$payload.out.push(`<!---->`);
  bind_props($$props, { ref, open });
  pop();
}
function Panel_left($$payload, $$props) {
  push();
  /**
   * @license @lucide/svelte v0.515.0 - ISC
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
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "rect",
      { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }
    ],
    ["path", { "d": "M9 3v18" }]
  ];
  Icon($$payload, spread_props([
    { name: "panel-left" },
    /**
     * @component @name PanelLeft
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik05IDN2MTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/panel-left
     * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
     *
     * @param {Object} props - Lucide icons props and any valid SVG attribute
     * @returns {FunctionalComponent} Svelte component
     *
     */
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Sidebar_trigger($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    onclick,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const sidebar = useSidebar();
  Button($$payload, spread_props([
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: cn("size-7", className),
      type: "button",
      onclick: (e) => {
        onclick?.(e);
        sidebar.toggle();
      }
    },
    restProps,
    {
      children: ($$payload2) => {
        Panel_left($$payload2, {});
        $$payload2.out.push(`<!----> <span class="sr-only">Toggle Sidebar</span>`);
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { ref });
  pop();
}
function Sheet_overlay($$payload, $$props) {
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
    Dialog_overlay($$payload2, spread_props([
      {
        "data-slot": "sheet-overlay",
        class: cn("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", className)
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
function X($$payload, $$props) {
  push();
  /**
   * @license @lucide/svelte v0.515.0 - ISC
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
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$payload, spread_props([
    { name: "x" },
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
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
const sheetVariants = tv({
  base: "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  variants: {
    side: {
      top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
      bottom: "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
      left: "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
      right: "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm"
    }
  },
  defaultVariants: { side: "right" }
});
function Sheet_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    side = "right",
    portalProps,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Portal($$payload2, spread_props([
      portalProps,
      {
        children: ($$payload3) => {
          Sheet_overlay($$payload3, {});
          $$payload3.out.push(`<!----> <!---->`);
          Dialog_content($$payload3, spread_props([
            {
              "data-slot": "sheet-content",
              class: cn(sheetVariants({ side }), className)
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
              children: ($$payload4) => {
                children?.($$payload4);
                $$payload4.out.push(`<!----> <!---->`);
                Dialog_close($$payload4, {
                  class: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none",
                  children: ($$payload5) => {
                    X($$payload5, { class: "size-4" });
                    $$payload5.out.push(`<!----> <span class="sr-only">Close</span>`);
                  },
                  $$slots: { default: true }
                });
                $$payload4.out.push(`<!---->`);
              },
              $$slots: { default: true }
            }
          ]));
          $$payload3.out.push(`<!---->`);
        },
        $$slots: { default: true }
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
function Sheet_header($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<div${spread_attributes(
    {
      "data-slot": "sheet-header",
      class: clsx(cn("flex flex-col gap-1.5 p-4", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></div>`);
  bind_props($$props, { ref });
  pop();
}
function Sheet_title($$payload, $$props) {
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
    Dialog_title($$payload2, spread_props([
      {
        "data-slot": "sheet-title",
        class: cn("font-semibold text-foreground", className)
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
function Sheet_description($$payload, $$props) {
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
    Dialog_description($$payload2, spread_props([
      {
        "data-slot": "sheet-description",
        class: cn("text-sm text-muted-foreground", className)
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
const Root = Dialog;
function Sidebar($$payload, $$props) {
  push();
  let {
    ref = null,
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const sidebar = useSidebar();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (collapsible === "none") {
      $$payload2.out.push("<!--[-->");
      $$payload2.out.push(`<div${spread_attributes(
        {
          class: clsx(cn("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className)),
          ...restProps
        }
      )}>`);
      children?.($$payload2);
      $$payload2.out.push(`<!----></div>`);
    } else {
      $$payload2.out.push("<!--[!-->");
      if (sidebar.isMobile) {
        $$payload2.out.push("<!--[-->");
        var bind_get = () => sidebar.openMobile;
        var bind_set = (v) => sidebar.setOpenMobile(v);
        $$payload2.out.push(`<!---->`);
        Root($$payload2, spread_props([
          {
            get open() {
              return bind_get();
            },
            set open($$value) {
              bind_set($$value);
            }
          },
          restProps,
          {
            children: ($$payload3) => {
              $$payload3.out.push(`<!---->`);
              Sheet_content($$payload3, {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar",
                "data-mobile": "true",
                class: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: `--sidebar-width: ${stringify(SIDEBAR_WIDTH_MOBILE)};`,
                side,
                children: ($$payload4) => {
                  $$payload4.out.push(`<!---->`);
                  Sheet_header($$payload4, {
                    class: "sr-only",
                    children: ($$payload5) => {
                      $$payload5.out.push(`<!---->`);
                      Sheet_title($$payload5, {
                        children: ($$payload6) => {
                          $$payload6.out.push(`<!---->Sidebar`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload5.out.push(`<!----> <!---->`);
                      Sheet_description($$payload5, {
                        children: ($$payload6) => {
                          $$payload6.out.push(`<!---->Displays the mobile sidebar.`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload5.out.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out.push(`<!----> <div class="flex h-full w-full flex-col">`);
                  children?.($$payload4);
                  $$payload4.out.push(`<!----></div>`);
                },
                $$slots: { default: true }
              });
              $$payload3.out.push(`<!---->`);
            },
            $$slots: { default: true }
          }
        ]));
        $$payload2.out.push(`<!---->`);
      } else {
        $$payload2.out.push("<!--[!-->");
        $$payload2.out.push(`<div class="group peer hidden text-sidebar-foreground md:block"${attr("data-state", sidebar.state)}${attr("data-collapsible", sidebar.state === "collapsed" ? collapsible : "")}${attr("data-variant", variant)}${attr("data-side", side)} data-slot="sidebar"><div data-slot="sidebar-gap"${attr_class(clsx(cn("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")))}></div> <div${spread_attributes(
          {
            "data-slot": "sidebar-container",
            class: clsx(cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            )),
            ...restProps
          }
        )}><div data-sidebar="sidebar" data-slot="sidebar-inner" class="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm">`);
        children?.($$payload2);
        $$payload2.out.push(`<!----></div></div></div>`);
      }
      $$payload2.out.push(`<!--]-->`);
    }
    $$payload2.out.push(`<!--]-->`);
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
function Arrow_left($$payload, $$props) {
  push();
  /**
   * @license @lucide/svelte v0.515.0 - ISC
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
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "m12 19-7-7 7-7" }],
    ["path", { "d": "M19 12H5" }]
  ];
  Icon($$payload, spread_props([
    { name: "arrow-left" },
    /**
     * @component @name ArrowLeft
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIgMTktNy03IDctNyIgLz4KICA8cGF0aCBkPSJNMTkgMTJINSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-left
     * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
     *
     * @param {Object} props - Lucide icons props and any valid SVG attribute
     * @returns {FunctionalComponent} Svelte component
     *
     */
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function CustomSidebar($$payload, $$props) {
  push();
  var $$store_subs;
  let {
    config,
    open = true,
    variant = "floating",
    side = "left",
    collapsible = "icon",
    children,
    class: className,
    pageTitle,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  function isMenuItemActive(item) {
    if (!item.href) return false;
    const currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    const itemPath = item.href;
    if (currentPath === itemPath) return true;
    if (itemPath !== "/" && currentPath.startsWith(itemPath)) {
      const nextChar = currentPath.charAt(itemPath.length);
      return nextChar === "" || nextChar === "/";
    }
    return false;
  }
  let expandedItems = /* @__PURE__ */ new Set();
  let showSettingsMenu = false;
  let level3Navigation = null;
  function toggleExpansion(itemLabel) {
    if (expandedItems.has(itemLabel)) {
      expandedItems.delete(itemLabel);
    } else {
      expandedItems.add(itemLabel);
    }
    expandedItems = new Set(expandedItems);
  }
  function isSubMenuItemActive(subItem) {
    if (!subItem.href) return false;
    const currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    return currentPath === subItem.href;
  }
  async function handleMenuClick(item) {
    if (item.hasContextMenu) {
      showSettingsMenu = !showSettingsMenu;
    } else if (item.subItems && item.subItems.length > 0) {
      toggleExpansion(item.label);
    } else if (item.href) {
      await goto(item.href);
    } else if (item.onclick) {
      item.onclick();
    }
  }
  function showLevel3(parentLabel, itemLabel) {
    let level3Items;
    switch (itemLabel) {
      case "Employee":
        level3Items = employeeLevel3Menu;
        break;
      case "Cost Centers":
        level3Items = costCentersLevel3Menu;
        break;
      case "Financial":
        level3Items = financialLevel3Menu;
        break;
      case "Leave":
        level3Items = leaveLevel3Menu;
        break;
      default:
        level3Items = employeeLevel3Menu;
    }
    level3Navigation = {
      show: true,
      title: itemLabel,
      breadcrumb: `${parentLabel} / ${itemLabel}`,
      items: level3Items
    };
  }
  async function handleLevel3Click(item) {
    if (item.href) {
      await goto(item.href);
    } else if (item.onclick) {
      item.onclick();
    }
  }
  async function handleSubMenuClick(subItem, parentItem) {
    if (subItem.hasLevel3) {
      showLevel3(parentItem.label, subItem.label);
    } else if (subItem.href) {
      await goto(subItem.href);
    } else if (subItem.onclick) {
      subItem.onclick();
    }
  }
  function renderMenuSection(section) {
    return section?.items || [];
  }
  function getActiveMenuItemLabel() {
    for (const item of config.content?.items || []) {
      if (isMenuItemActive(item)) {
        return item.label;
      }
      for (const subItem of item.subItems || []) {
        if (isSubMenuItemActive(subItem)) {
          return `${item.label} - ${subItem.label}`;
        }
      }
    }
    for (const item of config.header?.items || []) {
      if (isMenuItemActive(item)) {
        return item.label;
      }
      for (const subItem of item.subItems || []) {
        if (isSubMenuItemActive(subItem)) {
          return `${item.label} - ${subItem.label}`;
        }
      }
    }
    for (const item of config.footer?.items || []) {
      if (isMenuItemActive(item)) {
        return item.label;
      }
    }
    return void 0;
  }
  const effectivePageTitle = pageTitle || getActiveMenuItemLabel();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      if (effectivePageTitle) {
        $$payload3.out.push("<!--[-->");
        $$payload3.title = `<title>${escape_html(effectivePageTitle)} - Definitiv</title>`;
      } else {
        $$payload3.out.push("<!--[!-->");
      }
      $$payload3.out.push(`<!--]-->`);
    });
    $$payload2.out.push(`<div${spread_attributes({ class: clsx(cn("flex p-2 gap-2", className)), ...restProps })}>`);
    if (level3Navigation?.show) {
      $$payload2.out.push("<!--[-->");
      $$payload2.out.push(`<!---->`);
      Sidebar_provider($$payload2, {
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->`);
          Sidebar($$payload3, {
            variant,
            side,
            collapsible,
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->`);
              Sidebar_header($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out.push(`<div class="group-data-[collapsible=icon]:hidden"><div class="flex items-center justify-between px-3 py-2 border-b border-sidebar-border"><div class="flex items-center gap-3"><button type="button" class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary">`);
                  Arrow_left($$payload5, { class: "h-4 w-4" });
                  $$payload5.out.push(`<!----></button> <span class="font-medium text-sidebar-foreground">${escape_html(level3Navigation.title)}</span></div> <button type="button" class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary">`);
                  Search($$payload5, { class: "h-4 w-4" });
                  $$payload5.out.push(`<!----></button></div> <div class="px-3 py-2 border-b border-sidebar-border"><span class="text-xs text-muted-foreground">${escape_html(level3Navigation.breadcrumb)}</span></div> `);
                  {
                    $$payload5.out.push("<!--[!-->");
                  }
                  $$payload5.out.push(`<!--]--></div> <div class="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:border-b group-data-[collapsible=icon]:border-sidebar-border hidden"><button type="button" class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary">`);
                  Arrow_left($$payload5, { class: "h-6 w-6" });
                  $$payload5.out.push(`<!----></button> <button type="button" class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary">`);
                  Search($$payload5, { class: "h-4 w-4" });
                  $$payload5.out.push(`<!----></button> `);
                  {
                    $$payload5.out.push("<!--[!-->");
                  }
                  $$payload5.out.push(`<!--]--></div>`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----> <!---->`);
              Sidebar_content($$payload4, {
                class: "p-3",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->`);
                  Sidebar_menu($$payload5, {
                    children: ($$payload6) => {
                      const each_array = ensure_array_like(level3Navigation.items);
                      $$payload6.out.push(`<!--[-->`);
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let item = each_array[$$index];
                        $$payload6.out.push(`<!---->`);
                        Sidebar_menu_item($$payload6, {
                          children: ($$payload7) => {
                            $$payload7.out.push(`<!---->`);
                            Sidebar_menu_button($$payload7, {
                              tooltipContent: item.label,
                              isActive: store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href,
                              class: store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href ? "bg-selected text-white hover:bg-selected hover:text-white" : "",
                              onclick: () => handleLevel3Click(item),
                              children: ($$payload8) => {
                                if (item.icon) {
                                  $$payload8.out.push("<!--[-->");
                                  const IconComponent = item.icon;
                                  $$payload8.out.push(`<!---->`);
                                  IconComponent($$payload8, {});
                                  $$payload8.out.push(`<!---->`);
                                } else {
                                  $$payload8.out.push("<!--[!-->");
                                }
                                $$payload8.out.push(`<!--]--> <span>${escape_html(item.label)}</span>`);
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out.push(`<!---->`);
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out.push(`<!---->`);
                      }
                      $$payload6.out.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----> <div class="flex gap-4 bg-card border rounded-xl w-full p-4">`);
          children?.($$payload3);
          $$payload3.out.push(`<!----></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    } else {
      $$payload2.out.push("<!--[!-->");
      $$payload2.out.push(`<!---->`);
      Sidebar_provider($$payload2, {
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->`);
          Sidebar($$payload3, {
            variant,
            side,
            collapsible,
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->`);
              Sidebar_header($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out.push(`<div class="group-data-[collapsible=icon]:hidden"><div class="flex items-center justify-between px-3 py-2 border-b border-sidebar-border"><div class="flex items-center gap-3"><!---->`);
                  Sidebar_trigger($$payload5, { class: "h-4 w-4 text-primary" });
                  $$payload5.out.push(`<!----> <span class="font-medium text-sidebar-foreground">Menu</span></div> <button type="button" class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary">`);
                  Search($$payload5, { class: "h-4 w-4" });
                  $$payload5.out.push(`<!----></button></div> `);
                  {
                    $$payload5.out.push("<!--[!-->");
                  }
                  $$payload5.out.push(`<!--]--></div> <div class="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:border-b group-data-[collapsible=icon]:border-sidebar-border hidden"><!---->`);
                  Sidebar_trigger($$payload5, { class: "h-6 w-6 text-primary" });
                  $$payload5.out.push(`<!----> <button type="button" class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary">`);
                  Search($$payload5, { class: "h-4 w-4" });
                  $$payload5.out.push(`<!----></button> `);
                  {
                    $$payload5.out.push("<!--[!-->");
                  }
                  $$payload5.out.push(`<!--]--></div> `);
                  if (config.header && config.header.items.length > 0) {
                    $$payload5.out.push("<!--[-->");
                    $$payload5.out.push(`<!---->`);
                    Sidebar_menu($$payload5, {
                      children: ($$payload6) => {
                        const each_array_1 = ensure_array_like(renderMenuSection(config.header));
                        $$payload6.out.push(`<!--[-->`);
                        for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
                          let item = each_array_1[$$index_2];
                          $$payload6.out.push(`<!---->`);
                          Sidebar_menu_item($$payload6, {
                            children: ($$payload7) => {
                              $$payload7.out.push(`<!---->`);
                              Sidebar_menu_button($$payload7, {
                                tooltipContent: item.tooltipContent,
                                isActive: isMenuItemActive(item),
                                onclick: () => handleMenuClick(item),
                                class: cn(
                                  isMenuItemActive(item) ? "bg-selected text-white hover:bg-selected hover:text-white" : "",
                                  "group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:text-sidebar-foreground",
                                  item.subItems && item.subItems.some((subItem) => isSubMenuItemActive(subItem)) ? "group-data-[collapsible=icon]:bg-selected group-data-[collapsible=icon]:text-white group-data-[collapsible=icon]:hover:bg-selected" : "",
                                  item.subItems && item.subItems.some((subItem) => isSubMenuItemActive(subItem)) && expandedItems.has(item.label) ? "font-semibold" : "",
                                  "group-data-[collapsible=icon]:font-normal"
                                ),
                                children: ($$payload8) => {
                                  if (item.icon) {
                                    $$payload8.out.push("<!--[-->");
                                    const IconComponent = item.icon;
                                    $$payload8.out.push(`<!---->`);
                                    IconComponent($$payload8, {});
                                    $$payload8.out.push(`<!---->`);
                                  } else {
                                    $$payload8.out.push("<!--[!-->");
                                  }
                                  $$payload8.out.push(`<!--]--> <span>${escape_html(item.label)}</span> `);
                                  if (item.hasNotification && item.notificationCount && item.subItems && item.subItems.length > 0) {
                                    $$payload8.out.push("<!--[-->");
                                    $$payload8.out.push(`<span class="ml-auto flex items-center gap-2"><span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">${escape_html(item.notificationCount)}</span> `);
                                    Chevron_down($$payload8, {
                                      class: `h-4 w-4 transition-transform duration-200 ${stringify(expandedItems.has(item.label) ? "rotate-180" : "rotate-0")}`
                                    });
                                    $$payload8.out.push(`<!----></span>`);
                                  } else {
                                    $$payload8.out.push("<!--[!-->");
                                    if (item.hasNotification && item.notificationCount) {
                                      $$payload8.out.push("<!--[-->");
                                      $$payload8.out.push(`<span class="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">${escape_html(item.notificationCount)}</span>`);
                                    } else {
                                      $$payload8.out.push("<!--[!-->");
                                      if (item.subItems && item.subItems.length > 0) {
                                        $$payload8.out.push("<!--[-->");
                                        Chevron_down($$payload8, {
                                          class: `ml-auto h-4 w-4 transition-transform duration-200 ${stringify(expandedItems.has(item.label) ? "rotate-180" : "rotate-0")}`
                                        });
                                      } else {
                                        $$payload8.out.push("<!--[!-->");
                                      }
                                      $$payload8.out.push(`<!--]-->`);
                                    }
                                    $$payload8.out.push(`<!--]-->`);
                                  }
                                  $$payload8.out.push(`<!--]-->`);
                                },
                                $$slots: { default: true }
                              });
                              $$payload7.out.push(`<!----> `);
                              if (item.subItems && item.subItems.length > 0 && expandedItems.has(item.label)) {
                                $$payload7.out.push("<!--[-->");
                                $$payload7.out.push(`<!---->`);
                                Sidebar_menu_sub($$payload7, {
                                  children: ($$payload8) => {
                                    const each_array_2 = ensure_array_like(item.subItems);
                                    $$payload8.out.push(`<!--[-->`);
                                    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
                                      let subItem = each_array_2[$$index_1];
                                      $$payload8.out.push(`<!---->`);
                                      Sidebar_menu_sub_item($$payload8, {
                                        children: ($$payload9) => {
                                          if (subItem.href) {
                                            $$payload9.out.push("<!--[-->");
                                            $$payload9.out.push(`<!---->`);
                                            Sidebar_menu_sub_button($$payload9, {
                                              href: subItem.hasLevel3 ? void 0 : subItem.href,
                                              isActive: isSubMenuItemActive(subItem),
                                              class: cn(
                                                isSubMenuItemActive(subItem) ? "bg-selected text-white hover:bg-selected hover:text-white" : "",
                                                subItem.hasLevel3 ? "flex justify-between items-center" : ""
                                              ),
                                              onclick: subItem.hasLevel3 ? () => handleSubMenuClick(subItem, item) : void 0,
                                              children: ($$payload10) => {
                                                $$payload10.out.push(`<span>${escape_html(subItem.label)}</span> `);
                                                if (subItem.hasLevel3) {
                                                  $$payload10.out.push("<!--[-->");
                                                  Chevron_right($$payload10, { class: "h-4 w-4 ml-auto text-muted-foreground" });
                                                } else {
                                                  $$payload10.out.push("<!--[!-->");
                                                }
                                                $$payload10.out.push(`<!--]-->`);
                                              },
                                              $$slots: { default: true }
                                            });
                                            $$payload9.out.push(`<!---->`);
                                          } else {
                                            $$payload9.out.push("<!--[!-->");
                                            $$payload9.out.push(`<button type="button" class="text-sidebar-foreground ring-sidebar-ring hover:bg-hover hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&amp;>svg]:text-sidebar-accent-foreground outline-hidden flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 whitespace-nowrap [&amp;>span:last-child]:truncate [&amp;>svg]:size-4 [&amp;>svg]:shrink-0 data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"${attr("disabled", subItem.disabled, true)}>${escape_html(subItem.label)}</button>`);
                                          }
                                          $$payload9.out.push(`<!--]-->`);
                                        },
                                        $$slots: { default: true }
                                      });
                                      $$payload8.out.push(`<!---->`);
                                    }
                                    $$payload8.out.push(`<!--]-->`);
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload7.out.push(`<!---->`);
                              } else {
                                $$payload7.out.push("<!--[!-->");
                              }
                              $$payload7.out.push(`<!--]-->`);
                            },
                            $$slots: { default: true }
                          });
                          $$payload6.out.push(`<!---->`);
                        }
                        $$payload6.out.push(`<!--]-->`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out.push(`<!---->`);
                  } else {
                    $$payload5.out.push("<!--[!-->");
                  }
                  $$payload5.out.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----> <!---->`);
              Sidebar_content($$payload4, {
                class: "p-3",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->`);
                  Sidebar_menu($$payload5, {
                    children: ($$payload6) => {
                      const each_array_3 = ensure_array_like(renderMenuSection(config.content));
                      $$payload6.out.push(`<!--[-->`);
                      for (let $$index_4 = 0, $$length = each_array_3.length; $$index_4 < $$length; $$index_4++) {
                        let item = each_array_3[$$index_4];
                        $$payload6.out.push(`<!---->`);
                        Sidebar_menu_item($$payload6, {
                          children: ($$payload7) => {
                            $$payload7.out.push(`<!---->`);
                            Sidebar_menu_button($$payload7, {
                              tooltipContent: item.tooltipContent,
                              isActive: isMenuItemActive(item),
                              onclick: () => handleMenuClick(item),
                              class: cn(
                                isMenuItemActive(item) ? "bg-selected text-white hover:bg-selected hover:text-white" : "",
                                "group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:text-sidebar-foreground",
                                item.subItems && item.subItems.some((subItem) => isSubMenuItemActive(subItem)) ? "group-data-[collapsible=icon]:bg-selected group-data-[collapsible=icon]:text-white group-data-[collapsible=icon]:hover:bg-selected" : "",
                                item.subItems && item.subItems.some((subItem) => isSubMenuItemActive(subItem)) && expandedItems.has(item.label) ? "font-semibold" : "",
                                "group-data-[collapsible=icon]:font-normal"
                              ),
                              children: ($$payload8) => {
                                if (item.icon) {
                                  $$payload8.out.push("<!--[-->");
                                  const IconComponent = item.icon;
                                  $$payload8.out.push(`<!---->`);
                                  IconComponent($$payload8, {});
                                  $$payload8.out.push(`<!---->`);
                                } else {
                                  $$payload8.out.push("<!--[!-->");
                                }
                                $$payload8.out.push(`<!--]--> <span>${escape_html(item.label)}</span> `);
                                if (item.hasNotification && item.notificationCount && item.subItems && item.subItems.length > 0) {
                                  $$payload8.out.push("<!--[-->");
                                  $$payload8.out.push(`<span class="ml-auto flex items-center gap-2"><span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">${escape_html(item.notificationCount)}</span> `);
                                  Chevron_down($$payload8, {
                                    class: `h-4 w-4 transition-transform duration-200 ${stringify(expandedItems.has(item.label) ? "rotate-180" : "rotate-0")}`
                                  });
                                  $$payload8.out.push(`<!----></span>`);
                                } else {
                                  $$payload8.out.push("<!--[!-->");
                                  if (item.hasNotification && item.notificationCount) {
                                    $$payload8.out.push("<!--[-->");
                                    $$payload8.out.push(`<span class="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">${escape_html(item.notificationCount)}</span>`);
                                  } else {
                                    $$payload8.out.push("<!--[!-->");
                                    if (item.subItems && item.subItems.length > 0) {
                                      $$payload8.out.push("<!--[-->");
                                      Chevron_down($$payload8, {
                                        class: `ml-auto h-4 w-4 transition-transform duration-200 ${stringify(expandedItems.has(item.label) ? "rotate-180" : "rotate-0")}`
                                      });
                                    } else {
                                      $$payload8.out.push("<!--[!-->");
                                    }
                                    $$payload8.out.push(`<!--]-->`);
                                  }
                                  $$payload8.out.push(`<!--]-->`);
                                }
                                $$payload8.out.push(`<!--]-->`);
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out.push(`<!----> `);
                            if (item.subItems && item.subItems.length > 0 && expandedItems.has(item.label)) {
                              $$payload7.out.push("<!--[-->");
                              $$payload7.out.push(`<!---->`);
                              Sidebar_menu_sub($$payload7, {
                                children: ($$payload8) => {
                                  const each_array_4 = ensure_array_like(item.subItems);
                                  $$payload8.out.push(`<!--[-->`);
                                  for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
                                    let subItem = each_array_4[$$index_3];
                                    $$payload8.out.push(`<!---->`);
                                    Sidebar_menu_sub_item($$payload8, {
                                      children: ($$payload9) => {
                                        if (subItem.href) {
                                          $$payload9.out.push("<!--[-->");
                                          $$payload9.out.push(`<!---->`);
                                          Sidebar_menu_sub_button($$payload9, {
                                            href: subItem.hasLevel3 ? void 0 : subItem.href,
                                            isActive: isSubMenuItemActive(subItem),
                                            class: cn(
                                              isSubMenuItemActive(subItem) ? "bg-selected text-white hover:bg-selected hover:text-white" : "",
                                              subItem.hasLevel3 ? "flex justify-between items-center" : ""
                                            ),
                                            onclick: subItem.hasLevel3 ? () => handleSubMenuClick(subItem, item) : void 0,
                                            children: ($$payload10) => {
                                              $$payload10.out.push(`<span>${escape_html(subItem.label)}</span> `);
                                              if (subItem.hasLevel3) {
                                                $$payload10.out.push("<!--[-->");
                                                Chevron_right($$payload10, { class: "h-4 w-4 ml-auto text-muted-foreground" });
                                              } else {
                                                $$payload10.out.push("<!--[!-->");
                                              }
                                              $$payload10.out.push(`<!--]-->`);
                                            },
                                            $$slots: { default: true }
                                          });
                                          $$payload9.out.push(`<!---->`);
                                        } else {
                                          $$payload9.out.push("<!--[!-->");
                                          $$payload9.out.push(`<button type="button" class="text-sidebar-foreground ring-sidebar-ring hover:bg-hover hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&amp;>svg]:text-sidebar-accent-foreground outline-hidden flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 whitespace-nowrap [&amp;>span:last-child]:truncate [&amp;>svg]:size-4 [&amp;>svg]:shrink-0 data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"${attr("disabled", subItem.disabled, true)}>${escape_html(subItem.label)}</button>`);
                                        }
                                        $$payload9.out.push(`<!--]-->`);
                                      },
                                      $$slots: { default: true }
                                    });
                                    $$payload8.out.push(`<!---->`);
                                  }
                                  $$payload8.out.push(`<!--]-->`);
                                },
                                $$slots: { default: true }
                              });
                              $$payload7.out.push(`<!---->`);
                            } else {
                              $$payload7.out.push("<!--[!-->");
                            }
                            $$payload7.out.push(`<!--]-->`);
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out.push(`<!---->`);
                      }
                      $$payload6.out.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----> `);
              if (config.footer && config.footer.items.length > 0) {
                $$payload4.out.push("<!--[-->");
                $$payload4.out.push(`<!---->`);
                Sidebar_footer($$payload4, {
                  class: "relative",
                  children: ($$payload5) => {
                    $$payload5.out.push(`<div class="border-t border-sidebar-border"></div> <!---->`);
                    Sidebar_menu($$payload5, {
                      children: ($$payload6) => {
                        const each_array_5 = ensure_array_like(renderMenuSection(config.footer));
                        $$payload6.out.push(`<!--[-->`);
                        for (let $$index_6 = 0, $$length = each_array_5.length; $$index_6 < $$length; $$index_6++) {
                          let item = each_array_5[$$index_6];
                          $$payload6.out.push(`<!---->`);
                          Sidebar_menu_item($$payload6, {
                            children: ($$payload7) => {
                              if (item.hasContextMenu) {
                                $$payload7.out.push("<!--[-->");
                                $$payload7.out.push(`<div class="relative settings-menu-container"><!---->`);
                                Sidebar_menu_button($$payload7, {
                                  tooltipContent: item.tooltipContent,
                                  onclick: () => handleMenuClick(item),
                                  class: "w-full",
                                  children: ($$payload8) => {
                                    if (item.icon) {
                                      $$payload8.out.push("<!--[-->");
                                      const IconComponent = item.icon;
                                      $$payload8.out.push(`<!---->`);
                                      IconComponent($$payload8, {});
                                      $$payload8.out.push(`<!---->`);
                                    } else {
                                      $$payload8.out.push("<!--[!-->");
                                    }
                                    $$payload8.out.push(`<!--]--> <span>${escape_html(item.label)}</span>`);
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload7.out.push(`<!----> `);
                                if (showSettingsMenu) {
                                  $$payload7.out.push("<!--[-->");
                                  const each_array_6 = ensure_array_like(settingsContextMenu);
                                  $$payload7.out.push(`<div class="absolute bottom-full right-0 mb-2 w-64 bg-card border border-border rounded-lg shadow-lg p-2 z-50"><div class="space-y-1"><!--[-->`);
                                  for (let $$index_5 = 0, $$length2 = each_array_6.length; $$index_5 < $$length2; $$index_5++) {
                                    let contextItem = each_array_6[$$index_5];
                                    $$payload7.out.push(`<button type="button" class="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-hover hover:text-accent-foreground focus:bg-hover focus:text-accent-foreground text-left">`);
                                    if (contextItem.icon) {
                                      $$payload7.out.push("<!--[-->");
                                      const IconComponent = contextItem.icon;
                                      $$payload7.out.push(`<!---->`);
                                      IconComponent($$payload7, { class: "h-4 w-4 text-muted-foreground" });
                                      $$payload7.out.push(`<!---->`);
                                    } else {
                                      $$payload7.out.push("<!--[!-->");
                                    }
                                    $$payload7.out.push(`<!--]--> <span>${escape_html(contextItem.label)}</span></button>`);
                                  }
                                  $$payload7.out.push(`<!--]--></div></div>`);
                                } else {
                                  $$payload7.out.push("<!--[!-->");
                                }
                                $$payload7.out.push(`<!--]--></div>`);
                              } else {
                                $$payload7.out.push("<!--[!-->");
                                $$payload7.out.push(`<!---->`);
                                Sidebar_menu_button($$payload7, {
                                  tooltipContent: item.tooltipContent,
                                  isActive: isMenuItemActive(item),
                                  onclick: () => handleMenuClick(item),
                                  children: ($$payload8) => {
                                    if (item.icon) {
                                      $$payload8.out.push("<!--[-->");
                                      const IconComponent = item.icon;
                                      $$payload8.out.push(`<!---->`);
                                      IconComponent($$payload8, {});
                                      $$payload8.out.push(`<!---->`);
                                    } else {
                                      $$payload8.out.push("<!--[!-->");
                                    }
                                    $$payload8.out.push(`<!--]--> <span>${escape_html(item.label)}</span>`);
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload7.out.push(`<!---->`);
                              }
                              $$payload7.out.push(`<!--]-->`);
                            },
                            $$slots: { default: true }
                          });
                          $$payload6.out.push(`<!---->`);
                        }
                        $$payload6.out.push(`<!--]-->`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$payload4.out.push(`<!---->`);
              } else {
                $$payload4.out.push("<!--[!-->");
              }
              $$payload4.out.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----> <div class="flex gap-4 bg-card border rounded-xl w-full p-4">`);
          children?.($$payload3);
          $$payload3.out.push(`<!----></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    }
    $$payload2.out.push(`<!--]--></div>`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  CustomSidebar($$payload, {
    config: sidebarConfig,
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out.push(`<!---->`);
    },
    $$slots: { default: true }
  });
}
export {
  _layout as default
};
