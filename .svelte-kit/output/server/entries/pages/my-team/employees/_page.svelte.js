import { Z as is_array, _ as get_prototype_of, $ as object_prototype, A as derived, w as push, I as spread_props, y as pop, F as props_id, B as spread_attributes, E as bind_props, J as copy_payload, K as assign_payload, R as store_get, S as unsubscribe_stores, a0 as store_set, Q as ensure_array_like, M as escape_html, G as attr, N as stringify, O as attr_class } from "../../../../chunks/index2.js";
import { w as writable } from "../../../../chunks/index.js";
import { P as PageHeader } from "../../../../chunks/PageHeader.js";
import { I as Icon, c as cn, B as Button } from "../../../../chunks/chevron-right.js";
import { a as attachRef, w as watch, c as createBitsAttrs, o as getDataReadonly, f as getDataDisabled, p as getAriaReadonly, q as getAriaRequired, r as getAriaChecked, d as createId, b as box, m as mergeProps } from "../../../../chunks/create-id.js";
import "style-to-object";
import "clsx";
import { C as Context } from "../../../../chunks/dom-context.svelte.js";
import { E as ENTER, S as SPACE } from "../../../../chunks/kbd-constants.js";
import { H as Hidden_input, C as Check } from "../../../../chunks/check.js";
import { I as Input } from "../../../../chunks/input.js";
import { L as Label } from "../../../../chunks/label.js";
import { A as Avatar } from "../../../../chunks/avatar.js";
import { m as mockEmployees, A as Avatar_image, a as Avatar_fallback } from "../../../../chunks/mock-employees.js";
import { T as Table, a as Table_header, b as Table_row, c as Table_head, d as Table_body, e as Table_cell, f as Table_footer, P as Pagination_content, g as Pagination_item } from "../../../../chunks/pagination-item.js";
import { P as Plus } from "../../../../chunks/plus2.js";
import { S as Search } from "../../../../chunks/search.js";
const empty = [];
function snapshot(value, skip_warning = false) {
  return clone(value, /* @__PURE__ */ new Map(), "", empty);
}
function clone(value, cloned, path, paths, original = null) {
  if (typeof value === "object" && value !== null) {
    var unwrapped = cloned.get(value);
    if (unwrapped !== void 0) return unwrapped;
    if (value instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(value)
    );
    if (value instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(value)
    );
    if (is_array(value)) {
      var copy = (
        /** @type {Snapshot<any>} */
        Array(value.length)
      );
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var i = 0; i < value.length; i += 1) {
        var element = value[i];
        if (i in value) {
          copy[i] = clone(element, cloned, path, paths);
        }
      }
      return copy;
    }
    if (get_prototype_of(value) === object_prototype) {
      copy = {};
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var key in value) {
        copy[key] = clone(value[key], cloned, path, paths);
      }
      return copy;
    }
    if (value instanceof Date) {
      return (
        /** @type {Snapshot<T>} */
        structuredClone(value)
      );
    }
    if (typeof /** @type {T & { toJSON?: any } } */
    value.toJSON === "function") {
      return clone(
        /** @type {T & { toJSON(): any } } */
        value.toJSON(),
        cloned,
        path,
        paths,
        // Associate the instance with the toJSON clone
        value
      );
    }
  }
  if (value instanceof EventTarget) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(value)
    );
  } catch (e) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
}
const checkboxAttrs = createBitsAttrs({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
});
const CheckboxGroupContext = new Context("Checkbox.Group");
const CheckboxRootContext = new Context("Checkbox.Root");
class CheckboxRootState {
  static create(opts, group = null) {
    return CheckboxRootContext.set(new CheckboxRootState(opts, group));
  }
  opts;
  group;
  #trueName = derived(() => {
    if (this.group && this.group.opts.name.current) return this.group.opts.name.current;
    return this.opts.name.current;
  });
  get trueName() {
    return this.#trueName();
  }
  set trueName($$value) {
    return this.#trueName($$value);
  }
  #trueRequired = derived(() => {
    if (this.group && this.group.opts.required.current) return true;
    return this.opts.required.current;
  });
  get trueRequired() {
    return this.#trueRequired();
  }
  set trueRequired($$value) {
    return this.#trueRequired($$value);
  }
  #trueDisabled = derived(() => {
    if (this.group && this.group.opts.disabled.current) return true;
    return this.opts.disabled.current;
  });
  get trueDisabled() {
    return this.#trueDisabled();
  }
  set trueDisabled($$value) {
    return this.#trueDisabled($$value);
  }
  #trueReadonly = derived(() => {
    if (this.group && this.group.opts.readonly.current) return true;
    return this.opts.readonly.current;
  });
  get trueReadonly() {
    return this.#trueReadonly();
  }
  set trueReadonly($$value) {
    return this.#trueReadonly($$value);
  }
  attachment;
  constructor(opts, group) {
    this.opts = opts;
    this.group = group;
    this.attachment = attachRef(this.opts.ref);
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
    watch.pre(
      [
        () => snapshot(this.group?.opts.value.current),
        () => this.opts.value.current
      ],
      ([groupValue, value]) => {
        if (!groupValue || !value) return;
        this.opts.checked.current = groupValue.includes(value);
      }
    );
    watch.pre(() => this.opts.checked.current, (checked) => {
      if (!this.group) return;
      if (checked) {
        this.group?.addValue(this.opts.value.current);
      } else {
        this.group?.removeValue(this.opts.value.current);
      }
    });
  }
  onkeydown(e) {
    if (this.trueDisabled || this.trueReadonly) return;
    if (e.key === ENTER) e.preventDefault();
    if (e.key === SPACE) {
      e.preventDefault();
      this.#toggle();
    }
  }
  #toggle() {
    if (this.opts.indeterminate.current) {
      this.opts.indeterminate.current = false;
      this.opts.checked.current = true;
    } else {
      this.opts.checked.current = !this.opts.checked.current;
    }
  }
  onclick(e) {
    if (this.trueDisabled || this.trueReadonly) return;
    if (this.opts.type.current === "submit") {
      this.#toggle();
      return;
    }
    e.preventDefault();
    this.#toggle();
  }
  #snippetProps = derived(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": getAriaChecked(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": getAriaRequired(this.trueRequired),
    "aria-readonly": getAriaReadonly(this.trueReadonly),
    "data-disabled": getDataDisabled(this.trueDisabled),
    "data-readonly": getDataReadonly(this.trueReadonly),
    "data-state": getCheckboxDataState(this.opts.checked.current, this.opts.indeterminate.current),
    [checkboxAttrs.root]: "",
    onclick: this.onclick,
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
class CheckboxInputState {
  static create() {
    return new CheckboxInputState(CheckboxRootContext.get());
  }
  root;
  #trueChecked = derived(() => {
    if (!this.root.group) return this.root.opts.checked.current;
    if (this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) {
      return true;
    }
    return false;
  });
  get trueChecked() {
    return this.#trueChecked();
  }
  set trueChecked($$value) {
    return this.#trueChecked($$value);
  }
  #shouldRender = derived(() => Boolean(this.root.trueName));
  get shouldRender() {
    return this.#shouldRender();
  }
  set shouldRender($$value) {
    return this.#shouldRender($$value);
  }
  constructor(root) {
    this.root = root;
  }
  #props = derived(() => ({
    type: "checkbox",
    checked: this.root.opts.checked.current === true,
    disabled: this.root.trueDisabled,
    required: this.root.trueRequired,
    name: this.root.trueName,
    value: this.root.opts.value.current,
    readonly: this.root.trueReadonly
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function getCheckboxDataState(checked, indeterminate) {
  if (indeterminate) return "indeterminate";
  return checked ? "checked" : "unchecked";
}
function Checkbox_input($$payload, $$props) {
  push();
  const inputState = CheckboxInputState.create();
  if (inputState.shouldRender) {
    $$payload.out.push("<!--[-->");
    Hidden_input($$payload, spread_props([inputState.props]));
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
function Checkbox$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    checked = false,
    ref = null,
    onCheckedChange,
    children,
    disabled = false,
    required = false,
    name = void 0,
    value = "on",
    id = createId(uid),
    indeterminate = false,
    onIndeterminateChange,
    child,
    type = "button",
    readonly,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const group = CheckboxGroupContext.getOr(null);
  if (group && value) {
    if (group.opts.value.current.includes(value)) {
      checked = true;
    } else {
      checked = false;
    }
  }
  watch.pre(() => value, () => {
    if (group && value) {
      if (group.opts.value.current.includes(value)) {
        checked = true;
      } else {
        checked = false;
      }
    }
  });
  const rootState = CheckboxRootState.create(
    {
      checked: box.with(() => checked, (v) => {
        checked = v;
        onCheckedChange?.(v);
      }),
      disabled: box.with(() => disabled ?? false),
      required: box.with(() => required),
      name: box.with(() => name),
      value: box.with(() => value),
      id: box.with(() => id),
      ref: box.with(() => ref, (v) => ref = v),
      indeterminate: box.with(() => indeterminate, (v) => {
        indeterminate = v;
        onIndeterminateChange?.(v);
      }),
      type: box.with(() => type),
      readonly: box.with(() => Boolean(readonly))
    },
    group
  );
  const mergedProps = mergeProps({ ...restProps }, rootState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps, ...rootState.snippetProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<button${spread_attributes({ ...mergedProps })}>`);
    children?.($$payload, rootState.snippetProps);
    $$payload.out.push(`<!----></button>`);
  }
  $$payload.out.push(`<!--]--> `);
  Checkbox_input($$payload);
  $$payload.out.push(`<!---->`);
  bind_props($$props, { checked, ref, indeterminate });
  pop();
}
function Minus($$payload, $$props) {
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
  const iconNode = [["path", { "d": "M5 12h14" }]];
  Icon($$payload, spread_props([
    { name: "minus" },
    /**
     * @component @name Minus
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/minus
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
function Checkbox($$payload, $$props) {
  push();
  let {
    ref = null,
    checked = false,
    indeterminate = false,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    {
      let children = function($$payload3, { checked: checked2, indeterminate: indeterminate2 }) {
        $$payload3.out.push(`<div data-slot="checkbox-indicator" class="text-current transition-none">`);
        if (checked2) {
          $$payload3.out.push("<!--[-->");
          Check($$payload3, { class: "size-3.5" });
        } else {
          $$payload3.out.push("<!--[!-->");
          if (indeterminate2) {
            $$payload3.out.push("<!--[-->");
            Minus($$payload3, { class: "size-3.5" });
          } else {
            $$payload3.out.push("<!--[!-->");
          }
          $$payload3.out.push(`<!--]-->`);
        }
        $$payload3.out.push(`<!--]--></div>`);
      };
      Checkbox$1($$payload2, spread_props([
        {
          "data-slot": "checkbox",
          class: cn("peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary", className)
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
          get checked() {
            return checked;
          },
          set checked($$value) {
            checked = $$value;
            $$settled = false;
          },
          get indeterminate() {
            return indeterminate;
          },
          set indeterminate($$value) {
            indeterminate = $$value;
            $$settled = false;
          },
          children,
          $$slots: { default: true }
        }
      ]));
    }
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref, checked, indeterminate });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const allEmployees = mockEmployees;
  const searchTerm = writable("");
  const includeTerminated = writable(false);
  const currentPage = writable(1);
  const rowsPerPage = 25;
  const filteredEmployees = allEmployees.filter((employee) => {
    const matchesSearch = !store_get($$store_subs ??= {}, "$searchTerm", searchTerm) || employee.firstName.toLowerCase().includes(store_get($$store_subs ??= {}, "$searchTerm", searchTerm).toLowerCase()) || employee.lastName.toLowerCase().includes(store_get($$store_subs ??= {}, "$searchTerm", searchTerm).toLowerCase()) || employee.employeeNumber.includes(store_get($$store_subs ??= {}, "$searchTerm", searchTerm));
    const matchesTerminated = store_get($$store_subs ??= {}, "$includeTerminated", includeTerminated) || !employee.terminationDate;
    return matchesSearch && matchesTerminated;
  });
  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
  const startIndex = (store_get($$store_subs ??= {}, "$currentPage", currentPage) - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentEmployees = filteredEmployees.slice(startIndex, endIndex);
  function getPageNumbers() {
    const pages = [];
    const maxVisible = 5;
    const start = Math.max(1, store_get($$store_subs ??= {}, "$currentPage", currentPage) - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  function formatDate(date) {
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="page-container"><div class="page-content"><div class="page-header">`);
    PageHeader($$payload2, {
      title: "My Team",
      subtitle: "Employees",
      breadcrumbs: [
        { label: "My Team", href: "/my-team/employees" },
        { label: "Employees" }
      ]
    });
    $$payload2.out.push(`<!----> `);
    Button($$payload2, {
      children: ($$payload3) => {
        Plus($$payload3, { class: "h-4 w-4" });
        $$payload3.out.push(`<!----> Add Employee`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div> <div class="controls-bar"><div class="flex gap-2">`);
    Checkbox($$payload2, {
      id: "include-terminated",
      get checked() {
        return store_get($$store_subs ??= {}, "$includeTerminated", includeTerminated);
      },
      set checked($$value) {
        store_set(includeTerminated, $$value);
        $$settled = false;
      }
    });
    $$payload2.out.push(`<!----> `);
    Label($$payload2, {
      for: "include-terminated",
      children: ($$payload3) => {
        $$payload3.out.push(`<!---->Include Terminated Employees`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div> <div class="relative w-full sm:w-64">`);
    Search($$payload2, {
      class: "pointer-events-none absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 transform text-gray-400"
    });
    $$payload2.out.push(`<!----> `);
    Input($$payload2, {
      type: "text",
      placeholder: "Search...",
      class: "pl-10",
      get value() {
        return store_get($$store_subs ??= {}, "$searchTerm", searchTerm);
      },
      set value($$value) {
        store_set(searchTerm, $$value);
        $$settled = false;
      }
    });
    $$payload2.out.push(`<!----></div></div> <div class="table-card">`);
    Table($$payload2, {
      class: "table-no-padding",
      children: ($$payload3) => {
        Table_header($$payload3, {
          children: ($$payload4) => {
            Table_row($$payload4, {
              children: ($$payload5) => {
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Employee Number`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->First Name`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Surname`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Employment Status`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Date of Birth`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  class: "text-center",
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Age`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Gender`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Hired Date`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Termination Date`);
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
        $$payload3.out.push(`<!----> `);
        Table_body($$payload3, {
          children: ($$payload4) => {
            const each_array = ensure_array_like(currentEmployees);
            $$payload4.out.push(`<!--[-->`);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let employee = each_array[$$index];
              Table_row($$payload4, {
                children: ($$payload5) => {
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out.push(`<div class="flex items-center">`);
                      Avatar($$payload6, {
                        class: "mr-3 h-8 w-8",
                        children: ($$payload7) => {
                          Avatar_image($$payload7, {
                            src: employee.avatar,
                            alt: `${employee.firstName} ${employee.lastName}`
                          });
                          $$payload7.out.push(`<!----> `);
                          Avatar_fallback($$payload7, {
                            children: ($$payload8) => {
                              $$payload8.out.push(`<!---->${escape_html(employee.firstName[0])}${escape_html(employee.lastName[0])}`);
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out.push(`<!---->`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out.push(`<!----> ${escape_html(employee.employeeNumber)}</div>`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out.push(`<a${attr("href", `/my-team/employees/${stringify(employee.employeeNumber)}`)} class="text-sm text-blue-600 underline hover:text-blue-800">${escape_html(employee.firstName)}</a>`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out.push(`<a${attr("href", `/my-team/employees/${stringify(employee.employeeNumber)}`)} class="text-sm text-blue-600 underline hover:text-blue-800">${escape_html(employee.lastName)}</a>`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(employee.employmentStatus)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(formatDate(employee.dateOfBirth))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    class: "text-center",
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(employee.age)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(employee.gender)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(formatDate(employee.hiredDate))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(employee.terminationDate ? formatDate(employee.terminationDate) : "-")}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!---->`);
                },
                $$slots: { default: true }
              });
            }
            $$payload4.out.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> `);
        if (totalPages > 1) {
          $$payload3.out.push("<!--[-->");
          Table_footer($$payload3, {
            children: ($$payload4) => {
              Table_row($$payload4, {
                children: ($$payload5) => {
                  Table_cell($$payload5, {
                    colspan: 9,
                    class: "p-4",
                    children: ($$payload6) => {
                      $$payload6.out.push(`<div class="flex items-center justify-between">`);
                      Pagination_content($$payload6, {
                        children: ($$payload7) => {
                          const each_array_1 = ensure_array_like(getPageNumbers());
                          Pagination_item($$payload7, {
                            children: ($$payload8) => {
                              $$payload8.out.push(`<button class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"${attr("disabled", store_get($$store_subs ??= {}, "$currentPage", currentPage) === 1, true)}>Previous</button>`);
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out.push(`<!----> <!--[-->`);
                          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                            let pageNum = each_array_1[$$index_1];
                            Pagination_item($$payload7, {
                              children: ($$payload8) => {
                                $$payload8.out.push(`<button${attr_class(`inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${stringify(pageNum === store_get($$store_subs ??= {}, "$currentPage", currentPage) ? "bg-primary text-primary-foreground shadow" : "")}`)}>${escape_html(pageNum)}</button>`);
                              },
                              $$slots: { default: true }
                            });
                          }
                          $$payload7.out.push(`<!--]--> `);
                          if (totalPages > 5 && store_get($$store_subs ??= {}, "$currentPage", currentPage) < totalPages - 2) {
                            $$payload7.out.push("<!--[-->");
                            Pagination_item($$payload7, {
                              children: ($$payload8) => {
                                $$payload8.out.push(`<span class="inline-flex h-10 items-center justify-center px-4 text-sm text-muted-foreground">...</span>`);
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out.push(`<!----> `);
                            Pagination_item($$payload7, {
                              children: ($$payload8) => {
                                $$payload8.out.push(`<button class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">${escape_html(totalPages)}</button>`);
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out.push(`<!---->`);
                          } else {
                            $$payload7.out.push("<!--[!-->");
                          }
                          $$payload7.out.push(`<!--]--> `);
                          Pagination_item($$payload7, {
                            children: ($$payload8) => {
                              $$payload8.out.push(`<button class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"${attr("disabled", store_get($$store_subs ??= {}, "$currentPage", currentPage) === totalPages, true)}>Next</button>`);
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out.push(`<!---->`);
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out.push(`<!----> <div class="text-sm text-muted-foreground">Page ${escape_html(store_get($$store_subs ??= {}, "$currentPage", currentPage))} of ${escape_html(totalPages)}</div></div>`);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
        } else {
          $$payload3.out.push("<!--[!-->");
        }
        $$payload3.out.push(`<!--]-->`);
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
