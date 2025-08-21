import { U as sanitize_props, I as spread_props, T as slot, w as push, B as spread_attributes, D as clsx, E as bind_props, y as pop, J as copy_payload, K as assign_payload, Q as ensure_array_like, M as escape_html, V as maybe_selected } from "../../../../../chunks/index2.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { C as Card } from "../../../../../chunks/card.js";
import { a as Card_header, b as Card_title, C as Card_content } from "../../../../../chunks/card-title.js";
import { c as cn, B as Button } from "../../../../../chunks/chevron-right.js";
import { I as Input } from "../../../../../chunks/input.js";
import { L as Label } from "../../../../../chunks/label.js";
import { B as Badge } from "../../../../../chunks/badge.js";
import { S as Square_pen, a as Separator } from "../../../../../chunks/square-pen.js";
import { tv } from "tailwind-variants";
import { P as Plus } from "../../../../../chunks/plus.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
function Check($$payload, $$props) {
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
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  Icon($$payload, spread_props([
    { name: "check" },
    $$sanitized_props,
    {
      /**
       * @component @name Check
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/check
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
function Circle_alert($$payload, $$props) {
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
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }],
    [
      "line",
      { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "circle-alert" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleAlert
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjgiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMi4wMSIgeTE9IjE2IiB5Mj0iMTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/circle-alert
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
function Trash_2($$payload, $$props) {
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
    ["path", { "d": "M10 11v6" }],
    ["path", { "d": "M14 11v6" }],
    ["path", { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
  ];
  Icon($$payload, spread_props([
    { name: "trash-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Trash2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTQgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2IiAvPgogIDxwYXRoIGQ9Ik0zIDZoMTgiIC8+CiAgPHBhdGggZD0iTTggNlY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/trash-2
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
const alertVariants = tv({
  base: "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      destructive: "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current"
    }
  },
  defaultVariants: { variant: "default" }
});
function Alert($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    variant = "default",
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<div${spread_attributes(
    {
      "data-slot": "alert",
      class: clsx(cn(alertVariants({ variant }), className)),
      ...restProps,
      role: "alert"
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></div>`);
  bind_props($$props, { ref });
  pop();
}
function Alert_description($$payload, $$props) {
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
      "data-slot": "alert-description",
      class: clsx(cn("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></div>`);
  bind_props($$props, { ref });
  pop();
}
function _page($$payload, $$props) {
  push();
  let bankingDetails = {
    accounts: [
      {
        id: "1",
        accountName: "Primary Salary Account",
        accountNumber: "****1234",
        sortCode: "12-34-56",
        bankName: "Example Bank PLC",
        accountType: "Current Account",
        status: "active",
        isDefault: true,
        verified: true
      },
      {
        id: "2",
        accountName: "Savings Account",
        accountNumber: "****5678",
        sortCode: "78-90-12",
        bankName: "Another Bank Ltd",
        accountType: "Savings Account",
        status: "active",
        isDefault: false,
        verified: false
      }
    ],
    paymentMethods: [
      {
        id: "1",
        method: "BACS",
        frequency: "Monthly",
        description: "Standard bank transfer"
      }
    ]
  };
  let showAddAccountForm = false;
  let newAccount = {
    accountName: "",
    accountNumber: "",
    sortCode: "",
    bankName: "",
    accountType: "Current Account"
  };
  function toggleAddForm() {
    showAddAccountForm = !showAddAccountForm;
    if (!showAddAccountForm) {
      resetForm();
    }
  }
  function resetForm() {
    newAccount = {
      accountName: "",
      accountNumber: "",
      sortCode: "",
      bankName: "",
      accountType: "Current Account"
    };
  }
  function addAccount() {
    const account = {
      id: Date.now().toString(),
      ...newAccount,
      status: "pending",
      isDefault: bankingDetails.accounts.length === 0,
      verified: false
    };
    bankingDetails.accounts = [...bankingDetails.accounts, account];
    toggleAddForm();
  }
  function deleteAccount(id) {
    bankingDetails.accounts = bankingDetails.accounts.filter((acc) => acc.id !== id);
  }
  function setAsDefault(id) {
    bankingDetails.accounts = bankingDetails.accounts.map((acc) => ({ ...acc, isDefault: acc.id === id }));
  }
  function formatSortCode(value) {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length >= 6) {
      return `${numbers.slice(0, 2)}-${numbers.slice(2, 4)}-${numbers.slice(4, 6)}`;
    } else if (numbers.length >= 4) {
      return `${numbers.slice(0, 2)}-${numbers.slice(2, 4)}-${numbers.slice(4)}`;
    } else if (numbers.length >= 2) {
      return `${numbers.slice(0, 2)}-${numbers.slice(2)}`;
    }
    return numbers;
  }
  function handleSortCodeInput(event) {
    const input = event.target;
    const formatted = formatSortCode(input.value);
    newAccount.sortCode = formatted;
    input.value = formatted;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="page-container"><div class="page-content"><div class="page-header-with-breadcrumbs">`);
    PageHeader($$payload2, {
      title: "Banking Details",
      subtitle: "Manage your payment accounts and preferences",
      breadcrumbs: [
        { label: "Employee Hub", href: "/employee" },
        { label: "Finance", href: "/employee/finance" },
        { label: "Banking" }
      ]
    });
    $$payload2.out.push(`<!----> `);
    Button($$payload2, {
      onclick: toggleAddForm,
      children: ($$payload3) => {
        Plus($$payload3, { class: "w-4 h-4 mr-2" });
        $$payload3.out.push(`<!----> Add Account`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div> `);
    Alert($$payload2, {
      class: "mb-6",
      children: ($$payload3) => {
        Circle_alert($$payload3, { class: "h-4 w-4" });
        $$payload3.out.push(`<!----> `);
        Alert_description($$payload3, {
          children: ($$payload4) => {
            $$payload4.out.push(`<!---->Banking details are encrypted and securely stored. Changes may take 1-2 business days to process and will require verification.`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    if (showAddAccountForm) {
      $$payload2.out.push("<!--[-->");
      $$payload2.out.push(`<div class="card-container">`);
      Card($$payload2, {
        class: "card",
        children: ($$payload3) => {
          Card_header($$payload3, {
            class: "card-header",
            children: ($$payload4) => {
              Card_title($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Add New Bank Account`);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----> `);
          Card_content($$payload3, {
            class: "card-content",
            children: ($$payload4) => {
              $$payload4.out.push(`<div class="form-field-group"><div class="form-grid-2"><div class="form-field">`);
              Label($$payload4, {
                for: "accountName",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Account Name`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----> `);
              Input($$payload4, {
                id: "accountName",
                placeholder: "e.g. Main Salary Account",
                get value() {
                  return newAccount.accountName;
                },
                set value($$value) {
                  newAccount.accountName = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out.push(`<!----></div> <div class="form-field">`);
              Label($$payload4, {
                for: "bankName",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Bank Name`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----> `);
              Input($$payload4, {
                id: "bankName",
                placeholder: "e.g. Example Bank PLC",
                get value() {
                  return newAccount.bankName;
                },
                set value($$value) {
                  newAccount.bankName = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out.push(`<!----></div></div> <div class="form-grid-2"><div class="form-field">`);
              Label($$payload4, {
                for: "accountNumber",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Account Number`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----> `);
              Input($$payload4, {
                id: "accountNumber",
                placeholder: "12345678",
                maxlength: "8",
                get value() {
                  return newAccount.accountNumber;
                },
                set value($$value) {
                  newAccount.accountNumber = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out.push(`<!----></div> <div class="form-field">`);
              Label($$payload4, {
                for: "sortCode",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Sort Code`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----> `);
              Input($$payload4, {
                id: "sortCode",
                placeholder: "12-34-56",
                maxlength: "8",
                oninput: handleSortCodeInput
              });
              $$payload4.out.push(`<!----></div></div> <div class="form-field">`);
              Label($$payload4, {
                for: "accountType",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Account Type`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----> <select id="accountType" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>option]:bg-card">`);
              $$payload4.select_value = newAccount.accountType;
              $$payload4.out.push(`<option value="Current Account"${maybe_selected($$payload4, "Current Account")}>Current Account</option><option value="Savings Account"${maybe_selected($$payload4, "Savings Account")}>Savings Account</option><option value="Business Account"${maybe_selected($$payload4, "Business Account")}>Business Account</option>`);
              $$payload4.select_value = void 0;
              $$payload4.out.push(`</select></div></div> <div class="flex justify-end gap-3 pt-4">`);
              Button($$payload4, {
                variant: "outline",
                onclick: toggleAddForm,
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Cancel`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----> `);
              Button($$payload4, {
                onclick: addAccount,
                disabled: !newAccount.accountName || !newAccount.accountNumber || !newAccount.sortCode || !newAccount.bankName,
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Add Account`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----></div>`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></div>`);
    } else {
      $$payload2.out.push("<!--[!-->");
    }
    $$payload2.out.push(`<!--]--> <div class="card-container">`);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_header($$payload3, {
          class: "card-header",
          children: ($$payload4) => {
            Card_title($$payload4, {
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Bank Accounts`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> `);
        Card_content($$payload3, {
          class: "card-content",
          children: ($$payload4) => {
            if (bankingDetails.accounts.length === 0) {
              $$payload4.out.push("<!--[-->");
              $$payload4.out.push(`<div class="text-center py-12 text-muted-foreground">`);
              Circle_alert($$payload4, { class: "w-12 h-12 mx-auto mb-4 opacity-50" });
              $$payload4.out.push(`<!----> <p class="text-lg font-medium mb-2">No bank accounts added</p> <p>Add your first bank account to receive salary payments.</p> `);
              Button($$payload4, {
                class: "mt-4",
                onclick: toggleAddForm,
                children: ($$payload5) => {
                  Plus($$payload5, { class: "w-4 h-4 mr-2" });
                  $$payload5.out.push(`<!----> Add Your First Account`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----></div>`);
            } else {
              $$payload4.out.push("<!--[!-->");
              const each_array = ensure_array_like(bankingDetails.accounts);
              $$payload4.out.push(`<div class="space-y-4"><!--[-->`);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let account = each_array[$$index];
                $$payload4.out.push(`<div class="border rounded-lg p-4"><div class="flex items-start justify-between mb-3"><div class="flex items-center gap-3"><div><h3 class="font-semibold text-lg">${escape_html(account.accountName)}</h3> <p class="text-sm text-muted-foreground">${escape_html(account.bankName)}</p></div> <div class="flex gap-2">`);
                if (account.isDefault) {
                  $$payload4.out.push("<!--[-->");
                  Badge($$payload4, {
                    variant: "default",
                    children: ($$payload5) => {
                      $$payload5.out.push(`<!---->Default`);
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$payload4.out.push("<!--[!-->");
                }
                $$payload4.out.push(`<!--]--> `);
                if (account.verified) {
                  $$payload4.out.push("<!--[-->");
                  Badge($$payload4, {
                    variant: "secondary",
                    class: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                    children: ($$payload5) => {
                      Check($$payload5, { class: "w-3 h-3 mr-1" });
                      $$payload5.out.push(`<!----> Verified`);
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$payload4.out.push("<!--[!-->");
                  Badge($$payload4, {
                    variant: "secondary",
                    class: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
                    children: ($$payload5) => {
                      $$payload5.out.push(`<!---->Pending Verification`);
                    },
                    $$slots: { default: true }
                  });
                }
                $$payload4.out.push(`<!--]--></div></div> <div class="flex gap-2">`);
                if (!account.isDefault) {
                  $$payload4.out.push("<!--[-->");
                  Button($$payload4, {
                    variant: "outline",
                    size: "sm",
                    onclick: () => setAsDefault(account.id),
                    children: ($$payload5) => {
                      $$payload5.out.push(`<!---->Set as Default`);
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$payload4.out.push("<!--[!-->");
                }
                $$payload4.out.push(`<!--]--> `);
                Button($$payload4, {
                  variant: "outline",
                  size: "sm",
                  children: ($$payload5) => {
                    Square_pen($$payload5, { class: "w-4 h-4" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out.push(`<!----> `);
                Button($$payload4, {
                  variant: "outline",
                  size: "sm",
                  onclick: () => deleteAccount(account.id),
                  class: "text-red-600 hover:text-red-700",
                  children: ($$payload5) => {
                    Trash_2($$payload5, { class: "w-4 h-4" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out.push(`<!----></div></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"><div><p class="text-muted-foreground mb-1">Account Number</p> <p class="font-mono">${escape_html(account.accountNumber)}</p></div> <div><p class="text-muted-foreground mb-1">Sort Code</p> <p class="font-mono">${escape_html(account.sortCode)}</p></div> <div><p class="text-muted-foreground mb-1">Account Type</p> <p>${escape_html(account.accountType)}</p></div> <div><p class="text-muted-foreground mb-1">Status</p> `);
                Badge($$payload4, {
                  variant: account.status === "active" ? "secondary" : "outline",
                  class: account.status === "active" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "",
                  children: ($$payload5) => {
                    $$payload5.out.push(`<!---->${escape_html(account.status === "active" ? "Active" : "Pending")}`);
                  },
                  $$slots: { default: true }
                });
                $$payload4.out.push(`<!----></div></div></div>`);
              }
              $$payload4.out.push(`<!--]--></div>`);
            }
            $$payload4.out.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div> <div class="card-container">`);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_header($$payload3, {
          class: "card-header",
          children: ($$payload4) => {
            Card_title($$payload4, {
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Payment Method`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> `);
        Card_content($$payload3, {
          class: "card-content",
          children: ($$payload4) => {
            const each_array_1 = ensure_array_like(bankingDetails.paymentMethods);
            $$payload4.out.push(`<div class="space-y-4"><!--[-->`);
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let method = each_array_1[$$index_1];
              $$payload4.out.push(`<div class="flex items-center justify-between p-4 border rounded-lg"><div><h3 class="font-medium">${escape_html(method.method)}</h3> <p class="text-sm text-muted-foreground">${escape_html(method.description)}</p></div> <div class="text-right"><p class="text-sm font-medium">${escape_html(method.frequency)}</p> `);
              Badge($$payload4, {
                variant: "secondary",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Current Method`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----></div></div>`);
            }
            $$payload4.out.push(`<!--]--></div> `);
            Separator($$payload4, { class: "my-6" });
            $$payload4.out.push(`<!----> <div class="space-y-4"><h4 class="font-medium">Payment Schedule</h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div class="p-4 bg-muted rounded-lg"><p class="font-medium mb-2">Next Payment</p> <p class="text-2xl font-bold">25th March 2025</p> <p class="text-muted-foreground">Monthly salary payment</p></div> <div class="p-4 bg-muted rounded-lg"><p class="font-medium mb-2">Payment Day</p> <p class="text-2xl font-bold">25th</p> <p class="text-muted-foreground">of each month</p></div></div></div>`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div> <div class="card-container">`);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_header($$payload3, {
          class: "card-header",
          children: ($$payload4) => {
            Card_title($$payload4, {
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Important Information`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> `);
        Card_content($$payload3, {
          class: "card-content",
          children: ($$payload4) => {
            $$payload4.out.push(`<div class="space-y-4 text-sm"><div><h4 class="font-medium mb-2">Security</h4> <ul class="space-y-1 text-muted-foreground list-disc list-inside"><li>All banking details are encrypted and stored securely</li> <li>We never store your full account number - only masked versions are displayed</li> <li>Changes require email verification before processing</li></ul></div> `);
            Separator($$payload4, {});
            $$payload4.out.push(`<!----> <div><h4 class="font-medium mb-2">Processing Times</h4> <ul class="space-y-1 text-muted-foreground list-disc list-inside"><li>New account verification: 1-2 business days</li> <li>Account changes: 1-2 business days</li> <li>Payment method changes: Up to 5 business days</li></ul></div> `);
            Separator($$payload4, {});
            $$payload4.out.push(`<!----> <div><h4 class="font-medium mb-2">Need Help?</h4> <p class="text-muted-foreground">Contact HR or Finance team if you experience any issues with your banking details or payments.</p></div></div>`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
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
