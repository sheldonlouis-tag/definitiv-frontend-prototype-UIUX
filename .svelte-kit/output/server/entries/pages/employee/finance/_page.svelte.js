import { U as sanitize_props, I as spread_props, T as slot, Q as ensure_array_like, N as stringify, M as escape_html, y as pop, w as push } from "../../../../chunks/index2.js";
import { P as PageHeader } from "../../../../chunks/PageHeader.js";
import { C as Card } from "../../../../chunks/card.js";
import { a as Card_header, b as Card_title, C as Card_content } from "../../../../chunks/card-title.js";
import { B as Button } from "../../../../chunks/chevron-right.js";
import { g as goto } from "../../../../chunks/client.js";
import { I as Icon } from "../../../../chunks/Icon.js";
function Arrow_right($$payload, $$props) {
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
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "m12 5 7 7-7 7" }]
  ];
  Icon($$payload, spread_props([
    { name: "arrow-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
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
function Credit_card($$payload, $$props) {
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
      "rect",
      { "width": "20", "height": "14", "x": "2", "y": "5", "rx": "2" }
    ],
    ["line", { "x1": "2", "x2": "22", "y1": "10", "y2": "10" }]
  ];
  Icon($$payload, spread_props([
    { name: "credit-card" },
    $$sanitized_props,
    {
      /**
       * @component @name CreditCard
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjUiIHJ4PSIyIiAvPgogIDxsaW5lIHgxPSIyIiB4Mj0iMjIiIHkxPSIxMCIgeTI9IjEwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/credit-card
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
function Gift($$payload, $$props) {
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
      "rect",
      { "x": "3", "y": "8", "width": "18", "height": "4", "rx": "1" }
    ],
    ["path", { "d": "M12 8v13" }],
    ["path", { "d": "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }],
    [
      "path",
      {
        "d": "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "gift" },
    $$sanitized_props,
    {
      /**
       * @component @name Gift
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB4PSIzIiB5PSI4IiB3aWR0aD0iMTgiIGhlaWdodD0iNCIgcng9IjEiIC8+CiAgPHBhdGggZD0iTTEyIDh2MTMiIC8+CiAgPHBhdGggZD0iTTE5IDEydjdhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJ2LTciIC8+CiAgPHBhdGggZD0iTTcuNSA4YTIuNSAyLjUgMCAwIDEgMC01QTQuOCA4IDAgMCAxIDEyIDhhNC44IDggMCAwIDEgNC41LTUgMi41IDIuNSAwIDAgMSAwIDUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/gift
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
function Receipt($$payload, $$props) {
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
        "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
      }
    ],
    ["path", { "d": "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
    ["path", { "d": "M12 17.5v-11" }]
  ];
  Icon($$payload, spread_props([
    { name: "receipt" },
    $$sanitized_props,
    {
      /**
       * @component @name Receipt
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAydjIwbDItMSAyIDEgMi0xIDIgMSAyLTEgMiAxIDItMSAyIDFWMmwtMiAxLTItMS0yIDEtMi0xLTIgMS0yLTEtMiAxWiIgLz4KICA8cGF0aCBkPSJNMTYgOGgtNmEyIDIgMCAxIDAgMCA0aDRhMiAyIDAgMSAxIDAgNEg4IiAvPgogIDxwYXRoIGQ9Ik0xMiAxNy41di0xMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/receipt
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
function _page($$payload, $$props) {
  push();
  const financeOptions = [
    {
      title: "Banking Details",
      description: "Manage your bank accounts and payment preferences",
      icon: Credit_card,
      href: "/employee/finance/banking",
      available: true
    },
    {
      title: "Payslips",
      description: "View and download your salary payslips",
      icon: Receipt,
      href: "/employee/finance/payslips",
      available: false
    },
    {
      title: "Benefits",
      description: "Manage your employee benefits and perks",
      icon: Gift,
      href: "/employee/finance/benefits",
      available: false
    }
  ];
  function navigateTo(href, available) {
    if (available) {
      goto();
    }
  }
  const each_array = ensure_array_like(financeOptions);
  $$payload.out.push(`<div class="page-container"><div class="page-content"><div class="page-header-with-breadcrumbs">`);
  PageHeader($$payload, {
    title: "Finance",
    subtitle: "Manage your financial information and preferences",
    breadcrumbs: [
      { label: "Employee Hub", href: "/employee" },
      { label: "Finance" }
    ]
  });
  $$payload.out.push(`<!----></div> <div class="card-container"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let option = each_array[$$index];
    Card($$payload, {
      class: `card cursor-pointer hover:shadow-md transition-shadow ${stringify(option.available ? "" : "opacity-60")}`,
      onclick: () => navigateTo(option.href, option.available),
      children: ($$payload2) => {
        Card_header($$payload2, {
          class: "card-header",
          children: ($$payload3) => {
            $$payload3.out.push(`<div class="flex items-center gap-3"><div class="p-2 bg-primary/10 rounded-lg"><!---->`);
            option.icon?.($$payload3, { class: "w-6 h-6 text-primary" });
            $$payload3.out.push(`<!----></div> `);
            Card_title($$payload3, {
              class: "text-lg",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->${escape_html(option.title)}`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----></div>`);
          },
          $$slots: { default: true }
        });
        $$payload2.out.push(`<!----> `);
        Card_content($$payload2, {
          class: "card-content",
          children: ($$payload3) => {
            $$payload3.out.push(`<p class="text-muted-foreground mb-4">${escape_html(option.description)}</p> <div class="flex items-center justify-between">`);
            if (option.available) {
              $$payload3.out.push("<!--[-->");
              Button($$payload3, {
                variant: "outline",
                size: "sm",
                class: "w-full",
                children: ($$payload4) => {
                  $$payload4.out.push(`<!---->View Details `);
                  Arrow_right($$payload4, { class: "w-4 h-4 ml-2" });
                  $$payload4.out.push(`<!---->`);
                },
                $$slots: { default: true }
              });
            } else {
              $$payload3.out.push("<!--[!-->");
              Button($$payload3, {
                variant: "outline",
                size: "sm",
                class: "w-full",
                disabled: true,
                children: ($$payload4) => {
                  $$payload4.out.push(`<!---->Coming Soon`);
                },
                $$slots: { default: true }
              });
            }
            $$payload3.out.push(`<!--]--></div>`);
          },
          $$slots: { default: true }
        });
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
  }
  $$payload.out.push(`<!--]--></div></div> <div class="card-container">`);
  Card($$payload, {
    class: "card",
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "card-header",
        children: ($$payload3) => {
          Card_title($$payload3, {
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Financial Overview`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      Card_content($$payload2, {
        class: "card-content",
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="text-center p-4 bg-muted rounded-lg"><p class="text-2xl font-bold text-primary">1</p> <p class="text-sm text-muted-foreground">Active Bank Account</p></div> <div class="text-center p-4 bg-muted rounded-lg"><p class="text-2xl font-bold text-primary">£3,500</p> <p class="text-sm text-muted-foreground">Last Payment</p></div> <div class="text-center p-4 bg-muted rounded-lg"><p class="text-2xl font-bold text-primary">25th</p> <p class="text-sm text-muted-foreground">Next Payment Date</p></div></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div></div></div>`);
  pop();
}
export {
  _page as default
};
