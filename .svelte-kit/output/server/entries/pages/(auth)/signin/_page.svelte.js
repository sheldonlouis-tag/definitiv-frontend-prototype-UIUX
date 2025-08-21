import { w as push, I as spread_props, y as pop, R as store_get, J as copy_payload, K as assign_payload, S as unsubscribe_stores, M as escape_html } from "../../../../chunks/index2.js";
import { I as Icon, B as Button, C as Chevron_right } from "../../../../chunks/chevron-right.js";
import { I as Input } from "../../../../chunks/input.js";
import { L as Label } from "../../../../chunks/label.js";
import { a as authStore } from "../../../../chunks/auth.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "clsx";
import "../../../../chunks/state.svelte.js";
function Mail($$payload, $$props) {
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
    ["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
    [
      "rect",
      { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "mail" },
    /**
     * @component @name Mail
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjIgNy04Ljk5MSA1LjcyN2EyIDIgMCAwIDEtMi4wMDkgMEwyIDciIC8+CiAgPHJlY3QgeD0iMiIgeT0iNCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/mail
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
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let isLoading, error;
  let email = "";
  let isEmailValid = false;
  let isSubmitting = false;
  isEmailValid = email.includes("@") && email.includes(".") && email.length > 5;
  ({ isLoading, error } = store_get($$store_subs ??= {}, "$authStore", authStore));
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="w-full max-w-[544px]"><div class="bg-white rounded-xl p-6 shadow-[0px_0px_12px_0px_rgba(6,12,19,0.12)] border border-[#dadee3]"><div class="flex flex-col gap-5"><div class="flex flex-col gap-4"><div class="h-[33px] w-36"><img src="/Access_Logo.png" alt="Access" class="h-full w-auto"/></div> <h1 class="text-[28px] font-semibold text-[#2a2e33] leading-[36px] tracking-[-0.24px]">Sign in</h1> <p class="text-[16px] text-[#43484e] leading-[24px]">`);
    {
      $$payload2.out.push("<!--[-->");
      $$payload2.out.push(`Please enter your email address to sign in to your Access products.`);
    }
    $$payload2.out.push(`<!--]--></p></div> `);
    {
      $$payload2.out.push("<!--[-->");
      $$payload2.out.push(`<form class="flex flex-col gap-3"><div class="flex flex-col gap-2">`);
      Label($$payload2, {
        class: "text-[14px] font-semibold text-[#12171b] leading-[16px] tracking-[0.24px]",
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->Email address <span class="text-[#be0000]">*</span>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <div class="relative">`);
      Input($$payload2, {
        type: "email",
        placeholder: "Enter your email address",
        class: "h-10 px-3 py-2 text-[14px] leading-[20px] tracking-[0.18px] border-[#007373] focus:border-[#007373] focus:ring-[#0065b7] focus:ring-4 focus:ring-opacity-50 rounded-lg bg-white",
        get value() {
          return email;
        },
        set value($$value) {
          email = $$value;
          $$settled = false;
        }
      });
      $$payload2.out.push(`<!----> <div class="absolute right-3 top-1/2 transform -translate-y-1/2">`);
      Mail($$payload2, { class: "w-5 h-5 text-[#5e6469]" });
      $$payload2.out.push(`<!----></div></div> `);
      if (email && !isEmailValid) {
        $$payload2.out.push("<!--[-->");
        $$payload2.out.push(`<div class="text-[14px] text-[#be0000] leading-[16px]">Please enter a valid email address.</div>`);
      } else {
        $$payload2.out.push("<!--[!-->");
      }
      $$payload2.out.push(`<!--]--></div> `);
      if (error) {
        $$payload2.out.push("<!--[-->");
        $$payload2.out.push(`<div class="text-[14px] text-[#be0000] leading-[16px]">${escape_html(error)}</div>`);
      } else {
        $$payload2.out.push("<!--[!-->");
      }
      $$payload2.out.push(`<!--]--> <div class="flex items-center justify-between"><div class="text-[0px] text-[#0065b7]">Forgotten your password?</div> `);
      Button($$payload2, {
        type: "submit",
        disabled: !isEmailValid || isLoading || isSubmitting,
        class: "h-9 px-3.5 bg-[#007373] text-white hover:bg-[#005a5a] disabled:bg-[#dadee3] disabled:text-[#999fa5] rounded-lg font-semibold text-[16px] leading-[16px] tracking-[0.24px] transition-colors",
        children: ($$payload3) => {
          if (isLoading || isSubmitting) {
            $$payload3.out.push("<!--[-->");
            $$payload3.out.push(`Signing in...`);
          } else {
            $$payload3.out.push("<!--[!-->");
            $$payload3.out.push(`Next `);
            Chevron_right($$payload3, { class: "w-4 h-4" });
            $$payload3.out.push(`<!---->`);
          }
          $$payload3.out.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></div></form>`);
    }
    $$payload2.out.push(`<!--]--></div></div> <div class="mt-16 px-8"><div class="flex flex-col gap-4"><div class="flex items-start justify-between"><div class="flex items-center gap-2"><img src="/Access_Logo_Tagline.png" alt="Access - freedom to do more" class="h-6 w-auto"/></div> <div class="flex gap-2"><div class="w-6 h-6 bg-[#1877f2] rounded flex items-center justify-center"><span class="text-white text-xs">f</span></div> <div class="w-6 h-6 bg-[#0077b5] rounded flex items-center justify-center"><span class="text-white text-xs">in</span></div> <div class="w-6 h-6 bg-black rounded flex items-center justify-center"><span class="text-white text-xs">𝕏</span></div> <div class="w-6 h-6 bg-red-600 rounded flex items-center justify-center"><span class="text-white text-xs">▶</span></div></div></div> <p class="text-[14px] text-[#43484e] leading-[16px] tracking-[0.18px]">Copyright © 2025 The Access Group. All rights reserved.</p></div></div></div>`);
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
