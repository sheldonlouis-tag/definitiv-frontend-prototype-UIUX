import { B as spread_attributes, D as clsx$1, E as bind_props, y as pop, w as push, Q as ensure_array_like, Y as element, I as spread_props } from "./index2.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = tv({
  base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      destructive: "bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white",
      outline: "bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border",
      secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Button($$payload, $$props) {
  push();
  let {
    class: className,
    variant = "default",
    size = "default",
    ref = null,
    href = void 0,
    type = "button",
    disabled,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  if (href) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<a${spread_attributes(
      {
        "data-slot": "button",
        class: clsx$1(cn(buttonVariants({ variant, size }), className)),
        href: disabled ? void 0 : href,
        "aria-disabled": disabled,
        role: disabled ? "link" : void 0,
        tabindex: disabled ? -1 : void 0,
        ...restProps
      }
    )}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></a>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<button${spread_attributes(
      {
        "data-slot": "button",
        class: clsx$1(cn(buttonVariants({ variant, size }), className)),
        type,
        disabled,
        ...restProps
      }
    )}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></button>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
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
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  push();
  const {
    name,
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    children,
    $$slots,
    $$events,
    ...props
  } = $$props;
  const each_array = ensure_array_like(iconNode);
  $$payload.out.push(`<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...props,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx$1(["lucide-icon lucide", name && `lucide-${name}`, props.class])
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out.push(`${spread_attributes({ ...attrs }, null, void 0, void 0, 3)}`);
    });
  }
  $$payload.out.push(`<!--]-->`);
  children?.($$payload);
  $$payload.out.push(`<!----></svg>`);
  pop();
}
function Chevron_right($$payload, $$props) {
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
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-right" },
    /**
     * @component @name ChevronRight
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOSAxOCA2LTYtNi02IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/chevron-right
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
export {
  Button as B,
  Chevron_right as C,
  Icon as I,
  cn as c
};
