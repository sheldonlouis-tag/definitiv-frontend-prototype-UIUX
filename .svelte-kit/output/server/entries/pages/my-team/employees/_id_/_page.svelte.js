import { I as spread_props, y as pop, w as push, R as store_get, M as escape_html, S as unsubscribe_stores } from "../../../../../chunks/index2.js";
import { C as Calendar, F as File_text, b as Clock, D as Dollar_sign, B as Building, p as page } from "../../../../../chunks/stores.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "clsx";
import "../../../../../chunks/state.svelte.js";
import { I as Icon, B as Button, C as Chevron_right } from "../../../../../chunks/chevron-right.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { I as Input } from "../../../../../chunks/input.js";
import { L as Label } from "../../../../../chunks/label.js";
import { C as Card } from "../../../../../chunks/card.js";
import { a as Card_header, b as Card_title, C as Card_content } from "../../../../../chunks/card-title.js";
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from "../../../../../chunks/index3.js";
import { B as Badge } from "../../../../../chunks/badge.js";
import { A as Avatar } from "../../../../../chunks/avatar.js";
import { m as mockEmployees, A as Avatar_image, a as Avatar_fallback } from "../../../../../chunks/mock-employees.js";
function Map($$payload, $$props) {
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
      "path",
      {
        "d": "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
      }
    ],
    ["path", { "d": "M15 5.764v15" }],
    ["path", { "d": "M9 3.236v15" }]
  ];
  Icon($$payload, spread_props([
    { name: "map" },
    /**
     * @component @name Map
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQuMTA2IDUuNTUzYTIgMiAwIDAgMCAxLjc4OCAwbDMuNjU5LTEuODNBMSAxIDAgMCAxIDIxIDQuNjE5djEyLjc2NGExIDEgMCAwIDEtLjU1My44OTRsLTQuNTUzIDIuMjc3YTIgMiAwIDAgMS0xLjc4OCAwbC00LjIxMi0yLjEwNmEyIDIgMCAwIDAtMS43ODggMGwtMy42NTkgMS44M0ExIDEgMCAwIDEgMyAxOS4zODFWNi42MThhMSAxIDAgMCAxIC41NTMtLjg5NGw0LjU1My0yLjI3N2EyIDIgMCAwIDEgMS43ODggMHoiIC8+CiAgPHBhdGggZD0iTTE1IDUuNzY0djE1IiAvPgogIDxwYXRoIGQ9Ik05IDMuMjM2djE1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/map
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
  let employeeId, mockEmployee;
  function formatDate(date) {
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "2-digit" });
  }
  employeeId = store_get($$store_subs ??= {}, "$page", page).params.id;
  mockEmployee = mockEmployees.find((emp) => emp.employeeNumber === employeeId);
  $$payload.out.push(`<div class="page-container"><div class="page-content"><div class="page-header-with-breadcrumbs">`);
  PageHeader($$payload, {
    title: "Employee Details",
    subtitle: mockEmployee?.firstName + " " + mockEmployee?.lastName,
    breadcrumbs: [
      { label: "My Team", href: "/my-team/" },
      { label: "Employees", href: "/my-team/employees" },
      {
        label: mockEmployee ? mockEmployee.firstName + " " + mockEmployee.lastName : "Employee"
      }
    ]
  });
  $$payload.out.push(`<!----></div> <div class="two-column-layout"><div class="column-wide"><div class="card-container">`);
  Card($$payload, {
    class: "card",
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "card-header",
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "text-xl font-semibold text-gray-900",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Employee details`);
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
          if (mockEmployee) {
            $$payload3.out.push("<!--[-->");
            $$payload3.out.push(`<div class="form-grid-2"><div class="form-row"><div class="form-field flex-1">`);
            Label($$payload3, {
              for: "employeeId",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Employee ID`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Input($$payload3, {
              id: "employeeId",
              value: mockEmployee.employeeNumber,
              readonly: true
            });
            $$payload3.out.push(`<!----></div> <div class="form-field flex-1">`);
            Label($$payload3, {
              for: "title",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Title`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Root($$payload3, {
              type: "single",
              value: "Ms",
              children: ($$payload4) => {
                Select_trigger($$payload4, {
                  class: "w-full",
                  children: ($$payload5) => {
                    $$payload5.out.push(`<!---->Ms`);
                  },
                  $$slots: { default: true }
                });
                $$payload4.out.push(`<!----> `);
                Select_content($$payload4, {
                  children: ($$payload5) => {
                    Select_item($$payload5, {
                      value: "Mr",
                      children: ($$payload6) => {
                        $$payload6.out.push(`<!---->Mr`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out.push(`<!----> `);
                    Select_item($$payload5, {
                      value: "Ms",
                      children: ($$payload6) => {
                        $$payload6.out.push(`<!---->Ms`);
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
            $$payload3.out.push(`<!----></div></div> <div class="form-field">`);
            Label($$payload3, {
              for: "firstName",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->First name`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Input($$payload3, { id: "firstName", value: mockEmployee.firstName });
            $$payload3.out.push(`<!----></div> <div class="form-field">`);
            Label($$payload3, {
              for: "middleName",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Middle name`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Input($$payload3, { id: "middleName", placeholder: " " });
            $$payload3.out.push(`<!----></div> <div class="form-field">`);
            Label($$payload3, {
              for: "surname",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Surname`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Input($$payload3, { id: "surname", value: mockEmployee.lastName });
            $$payload3.out.push(`<!----></div> <div class="form-field">`);
            Label($$payload3, {
              for: "preferredName",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Preferred name`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Input($$payload3, { id: "preferredName", placeholder: " " });
            $$payload3.out.push(`<!----></div> <div class="form-field">`);
            Label($$payload3, {
              for: "dob",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Date of birth`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Input($$payload3, {
              id: "dob",
              type: "date",
              value: formatDate(mockEmployee.dateOfBirth)
            });
            $$payload3.out.push(`<!----></div> <div class="form-field">`);
            Label($$payload3, {
              for: "gender",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Gender`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Root($$payload3, {
              type: "single",
              value: mockEmployee.gender,
              children: ($$payload4) => {
                Select_trigger($$payload4, {
                  class: "w-full",
                  children: ($$payload5) => {
                    $$payload5.out.push(`<!---->${escape_html(mockEmployee.gender)}`);
                  },
                  $$slots: { default: true }
                });
                $$payload4.out.push(`<!----> `);
                Select_content($$payload4, {
                  children: ($$payload5) => {
                    Select_item($$payload5, {
                      value: "Male",
                      children: ($$payload6) => {
                        $$payload6.out.push(`<!---->Male`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out.push(`<!----> `);
                    Select_item($$payload5, {
                      value: "Female",
                      children: ($$payload6) => {
                        $$payload6.out.push(`<!---->Female`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out.push(`<!----> `);
                    Select_item($$payload5, {
                      value: "Other",
                      children: ($$payload6) => {
                        $$payload6.out.push(`<!---->Other`);
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out.push(`<!----> `);
                    Select_item($$payload5, {
                      value: "Prefer not to say",
                      children: ($$payload6) => {
                        $$payload6.out.push(`<!---->Prefer not to say`);
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
            $$payload3.out.push(`<!----></div> <div></div></div>`);
          } else {
            $$payload3.out.push("<!--[!-->");
          }
          $$payload3.out.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "card",
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "card-header",
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "text-xl font-semibold text-gray-900",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Home address`);
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
          if (mockEmployee) {
            $$payload3.out.push("<!--[-->");
            $$payload3.out.push(`<div class="flex-col bg-gray-200 rounded-xl h-60 flex items-center justify-center">`);
            Map($$payload3, { class: "w-6 h-6" });
            $$payload3.out.push(`<!----> <p class="text-sm text-gray-500">Map placeholder</p> `);
            Button($$payload3, {
              variant: "link",
              class: "text-blue-600 p-0 h-auto",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->View on map`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----></div> <div class="form-row flex gap-2 items-end"><div class="form-field flex-1">`);
            Label($$payload3, {
              for: "address",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Home Address`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Input($$payload3, { id: "address", value: mockEmployee.address });
            $$payload3.out.push(`<!----></div> `);
            Button($$payload3, {
              class: "",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Enter`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----></div>`);
          } else {
            $$payload3.out.push("<!--[!-->");
          }
          $$payload3.out.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div></div> <div class="column-sidebar"><div class="card-container">`);
  if (mockEmployee) {
    $$payload.out.push("<!--[-->");
    Card($$payload, {
      class: "card",
      children: ($$payload2) => {
        $$payload2.out.push(`<div class="flex flex-col items-center text-center space-y-4 p-6"><div class="relative">`);
        Avatar($$payload2, {
          class: "w-30 h-30 border-2 border-[#007373]",
          children: ($$payload3) => {
            Avatar_image($$payload3, {
              src: mockEmployee.avatar,
              alt: `${mockEmployee.firstName} ${mockEmployee.lastName}`
            });
            $$payload3.out.push(`<!----> `);
            Avatar_fallback($$payload3, {
              class: "text-2xl",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->${escape_html(mockEmployee.firstName[0])}${escape_html(mockEmployee.lastName[0])}`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$payload2.out.push(`<!----></div> <div><h2 class="text-2xl font-normal text-[#1b232a] leading-9 tracking-tight">${escape_html(mockEmployee.firstName)} ${escape_html(mockEmployee.lastName)}</h2></div> <div class="flex gap-4 text-[#1b232a] text-base"><div><span>Employee ID:</span> <span class="font-extrabold">${escape_html(mockEmployee.employeeNumber)}</span></div> <div><span>Started:</span> <span class="font-extrabold">${escape_html(formatDate(mockEmployee.hiredDate))}</span></div></div> <div class="flex gap-3">`);
        Badge($$payload2, {
          class: "bg-[#007086] text-white px-2 py-1 rounded-full text-xs",
          children: ($$payload3) => {
            $$payload3.out.push(`<!---->Project`);
          },
          $$slots: { default: true }
        });
        $$payload2.out.push(`<!----> `);
        Badge($$payload2, {
          class: "bg-[#49702b] text-white px-2 py-1 rounded-full text-xs",
          children: ($$payload3) => {
            $$payload3.out.push(`<!---->Role`);
          },
          $$slots: { default: true }
        });
        $$payload2.out.push(`<!----> `);
        Badge($$payload2, {
          class: "bg-[#a00001] text-white px-2 py-1 rounded-full text-xs",
          children: ($$payload3) => {
            $$payload3.out.push(`<!---->Location`);
          },
          $$slots: { default: true }
        });
        $$payload2.out.push(`<!----></div> <div class="w-full space-y-0.5"><div class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer"><div class="flex items-center gap-2">`);
        Calendar($$payload2, { class: "w-4 h-4 text-[#5b646e]" });
        $$payload2.out.push(`<!----> <span class="text-sm text-[#1b232a]">View accrual balances</span></div> `);
        Chevron_right($$payload2, { class: "w-4 h-4 text-[#5b646e]" });
        $$payload2.out.push(`<!----></div> <div class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer"><div class="flex items-center gap-2">`);
        File_text($$payload2, { class: "w-4 h-4 text-[#5b646e]" });
        $$payload2.out.push(`<!----> <span class="text-sm text-[#1b232a]">View payslips</span></div> `);
        Chevron_right($$payload2, { class: "w-4 h-4 text-[#5b646e]" });
        $$payload2.out.push(`<!----></div> <div class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer"><div class="flex items-center gap-2">`);
        Clock($$payload2, { class: "w-4 h-4 text-[#5b646e]" });
        $$payload2.out.push(`<!----> <span class="text-sm text-[#1b232a]">View work schedule</span></div> `);
        Chevron_right($$payload2, { class: "w-4 h-4 text-[#5b646e]" });
        $$payload2.out.push(`<!----></div> <div class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer"><div class="flex items-center gap-2">`);
        Dollar_sign($$payload2, { class: "w-4 h-4 text-[#5b646e]" });
        $$payload2.out.push(`<!----> <span class="text-sm text-[#1b232a]">View pay calendar</span></div> `);
        Chevron_right($$payload2, { class: "w-4 h-4 text-[#5b646e]" });
        $$payload2.out.push(`<!----></div> <div class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer"><div class="flex items-center gap-2">`);
        Building($$payload2, { class: "w-4 h-4 text-[#5b646e]" });
        $$payload2.out.push(`<!----> <span class="text-sm text-[#1b232a]">View cost centres</span></div> `);
        Chevron_right($$payload2, { class: "w-4 h-4 text-[#5b646e]" });
        $$payload2.out.push(`<!----></div></div></div>`);
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  Card($$payload, {
    class: "card",
    children: ($$payload2) => {
      Card_content($$payload2, {
        class: "card-no-padding",
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="p-4"><div class="flex items-center justify-between mb-4">`);
          Card_title($$payload3, {
            class: "text-xl font-semibold text-gray-900",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Contact details`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----> `);
          Button($$payload3, {
            variant: "ghost",
            size: "icon",
            class: "h-11 w-11",
            children: ($$payload4) => {
              $$payload4.out.push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----></div> `);
          if (mockEmployee) {
            $$payload3.out.push("<!--[-->");
            $$payload3.out.push(`<div class="form-field-group"><div class="form-field">`);
            Label($$payload3, {
              for: "email",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Email address`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Input($$payload3, { id: "email", value: mockEmployee.email, readonly: true });
            $$payload3.out.push(`<!----></div> <div class="form-field">`);
            Label($$payload3, {
              for: "mobile",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Mobile phone`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Input($$payload3, { id: "mobile", value: mockEmployee.phone, readonly: true });
            $$payload3.out.push(`<!----></div> <div class="form-field">`);
            Label($$payload3, {
              for: "homePhone",
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->Home phone`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            Input($$payload3, { id: "homePhone", value: "08 9876 5432", readonly: true });
            $$payload3.out.push(`<!----></div></div>`);
          } else {
            $$payload3.out.push("<!--[!-->");
          }
          $$payload3.out.push(`<!--]--></div> <div class="bg-gray-50 p-8"><div class="flex items-center justify-between mb-4">`);
          Card_title($$payload3, {
            class: "text-xl font-semibold text-gray-900",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Emergency contacts`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----> `);
          Button($$payload3, {
            variant: "ghost",
            size: "icon",
            class: "h-11 w-11",
            children: ($$payload4) => {
              $$payload4.out.push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----></div> <div class="space-y-2">`);
          Badge($$payload3, {
            variant: "secondary",
            class: "bg-teal-600 text-white px-4 py-2 rounded-full",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Johnny Boyd, Father 01345 875 342`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----> `);
          Badge($$payload3, {
            variant: "secondary",
            class: "bg-teal-600 text-white px-4 py-2 rounded-full",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Laura Boyd, Mother 01345 875 342`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----></div></div>`);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div></div></div></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
