import { U as sanitize_props, I as spread_props, T as slot, J as copy_payload, K as assign_payload, y as pop, w as push, M as escape_html, V as maybe_selected } from "../../../../chunks/index2.js";
import { P as PageHeader } from "../../../../chunks/PageHeader.js";
import { C as Card } from "../../../../chunks/card.js";
import { C as Card_content, a as Card_header, b as Card_title } from "../../../../chunks/card-title.js";
import { B as Button } from "../../../../chunks/chevron-right.js";
import { I as Input } from "../../../../chunks/input.js";
import { L as Label } from "../../../../chunks/label.js";
import { B as Badge } from "../../../../chunks/badge.js";
import { S as Square_pen, a as Separator } from "../../../../chunks/square-pen.js";
import { A as Avatar } from "../../../../chunks/avatar.js";
import { U as User, M as Mail, P as Phone, a as Map_pin } from "../../../../chunks/user.js";
import { I as Icon } from "../../../../chunks/Icon.js";
function Building($$payload, $$props) {
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
      {
        "width": "16",
        "height": "20",
        "x": "4",
        "y": "2",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M9 22v-4h6v4" }],
    ["path", { "d": "M8 6h.01" }],
    ["path", { "d": "M16 6h.01" }],
    ["path", { "d": "M12 6h.01" }],
    ["path", { "d": "M12 10h.01" }],
    ["path", { "d": "M12 14h.01" }],
    ["path", { "d": "M16 10h.01" }],
    ["path", { "d": "M16 14h.01" }],
    ["path", { "d": "M8 10h.01" }],
    ["path", { "d": "M8 14h.01" }]
  ];
  Icon($$payload, spread_props([
    { name: "building" },
    $$sanitized_props,
    {
      /**
       * @component @name Building
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHg9IjQiIHk9IjIiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNOSAyMnYtNGg2djQiIC8+CiAgPHBhdGggZD0iTTggNmguMDEiIC8+CiAgPHBhdGggZD0iTTE2IDZoLjAxIiAvPgogIDxwYXRoIGQ9Ik0xMiA2aC4wMSIgLz4KICA8cGF0aCBkPSJNMTIgMTBoLjAxIiAvPgogIDxwYXRoIGQ9Ik0xMiAxNGguMDEiIC8+CiAgPHBhdGggZD0iTTE2IDEwaC4wMSIgLz4KICA8cGF0aCBkPSJNMTYgMTRoLjAxIiAvPgogIDxwYXRoIGQ9Ik04IDEwaC4wMSIgLz4KICA8cGF0aCBkPSJNOCAxNGguMDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/building
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
function Calendar($$payload, $$props) {
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
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M16 2v4" }],
    [
      "rect",
      { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }
    ],
    ["path", { "d": "M3 10h18" }]
  ];
  Icon($$payload, spread_props([
    { name: "calendar" },
    $$sanitized_props,
    {
      /**
       * @component @name Calendar
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOCAydjQiIC8+CiAgPHBhdGggZD0iTTE2IDJ2NCIgLz4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjQiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0zIDEwaDE4IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/calendar
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
  let employeeData = {
    personal: {
      firstName: "John",
      lastName: "Smith",
      preferredName: "John",
      dateOfBirth: "1990-05-15",
      email: "john.smith@company.com",
      phone: "+61 400 123 456",
      mobile: "+61 400 123 456",
      address: {
        street: "123 Collins Street",
        suburb: "Melbourne",
        state: "VIC",
        postcode: "3000",
        country: "Australia"
      }
    },
    employment: {
      employeeId: "EMP001",
      position: "Senior Software Developer",
      department: "Engineering",
      manager: "Sarah Johnson",
      startDate: "2022-03-15",
      employmentType: "Full-time",
      workLocation: "Melbourne Office",
      status: "Active"
    },
    emergency: {
      contactName: "Jane Smith",
      relationship: "Spouse",
      phone: "+61 400 987 654",
      email: "jane.smith@email.com"
    }
  };
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
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="page-container"><div class="page-content"><div class="page-header-with-breadcrumbs">`);
    PageHeader($$payload2, {
      title: "Employee Details",
      subtitle: "View and manage your personal information",
      breadcrumbs: [
        { label: "Employee Hub", href: "/employee" },
        { label: "Details" }
      ]
    });
    $$payload2.out.push(`<!----> `);
    Button($$payload2, {
      onclick: toggleEditMode,
      children: ($$payload3) => {
        Square_pen($$payload3, { class: "w-4 h-4 mr-2" });
        $$payload3.out.push(`<!----> ${escape_html(editMode ? "Cancel" : "Edit Details")}`);
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
            $$payload4.out.push(`<div class="flex items-start gap-6">`);
            Avatar($$payload4, {
              class: "h-20 w-20",
              children: ($$payload5) => {
                $$payload5.out.push(`<div class="h-full w-full bg-primary/10 flex items-center justify-center">`);
                User($$payload5, { class: "h-8 w-8 text-primary" });
                $$payload5.out.push(`<!----></div>`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> <div class="flex-1"><div class="flex items-center gap-3 mb-2"><h1 class="text-2xl font-bold">${escape_html(employeeData.personal.firstName)} ${escape_html(employeeData.personal.lastName)}</h1> `);
            Badge($$payload4, {
              variant: "secondary",
              class: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->${escape_html(employeeData.employment.status)}`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----></div> <p class="text-lg text-muted-foreground mb-2">${escape_html(employeeData.employment.position)}</p> <div class="flex flex-wrap gap-4 text-sm text-muted-foreground"><div class="flex items-center gap-1">`);
            Building($$payload4, { class: "w-4 h-4" });
            $$payload4.out.push(`<!----> ${escape_html(employeeData.employment.department)}</div> <div class="flex items-center gap-1">`);
            Calendar($$payload4, { class: "w-4 h-4" });
            $$payload4.out.push(`<!----> Started ${escape_html(new Date(employeeData.employment.startDate).toLocaleDateString("en-AU"))}</div> <div class="flex items-center gap-1">`);
            User($$payload4, { class: "w-4 h-4" });
            $$payload4.out.push(`<!----> ID: ${escape_html(employeeData.employment.employeeId)}</div></div></div></div>`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div> <div class="two-column-layout"><div class="column-wide"><div class="card-container">`);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_header($$payload3, {
          class: "card-header",
          children: ($$payload4) => {
            Card_title($$payload4, {
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Personal Information`);
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
              for: "firstName",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->First Name`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              Input($$payload4, {
                id: "firstName",
                get value() {
                  return employeeData.personal.firstName;
                },
                set value($$value) {
                  employeeData.personal.firstName = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "firstName",
                value: employeeData.personal.firstName,
                readonly: true
              });
            }
            $$payload4.out.push(`<!--]--></div> <div class="form-field">`);
            Label($$payload4, {
              for: "lastName",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Last Name`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              Input($$payload4, {
                id: "lastName",
                get value() {
                  return employeeData.personal.lastName;
                },
                set value($$value) {
                  employeeData.personal.lastName = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "lastName",
                value: employeeData.personal.lastName,
                readonly: true
              });
            }
            $$payload4.out.push(`<!--]--></div></div> <div class="form-grid-2"><div class="form-field">`);
            Label($$payload4, {
              for: "preferredName",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Preferred Name`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              Input($$payload4, {
                id: "preferredName",
                get value() {
                  return employeeData.personal.preferredName;
                },
                set value($$value) {
                  employeeData.personal.preferredName = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "preferredName",
                value: employeeData.personal.preferredName,
                readonly: true
              });
            }
            $$payload4.out.push(`<!--]--></div> <div class="form-field">`);
            Label($$payload4, {
              for: "dateOfBirth",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Date of Birth`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              Input($$payload4, {
                id: "dateOfBirth",
                type: "date",
                get value() {
                  return employeeData.personal.dateOfBirth;
                },
                set value($$value) {
                  employeeData.personal.dateOfBirth = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "dateOfBirth",
                value: new Date(employeeData.personal.dateOfBirth).toLocaleDateString("en-AU"),
                readonly: true
              });
            }
            $$payload4.out.push(`<!--]--></div></div></div> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              $$payload4.out.push(`<div class="flex justify-end gap-3 pt-4">`);
              Button($$payload4, {
                variant: "outline",
                onclick: cancelEdit,
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Cancel`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----> `);
              Button($$payload4, {
                onclick: saveChanges,
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Save Changes`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----></div>`);
            } else {
              $$payload4.out.push("<!--[!-->");
            }
            $$payload4.out.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_header($$payload3, {
          class: "card-header",
          children: ($$payload4) => {
            Card_title($$payload4, {
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Contact Information`);
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
            $$payload4.out.push(`<div class="form-field-group"><div class="form-field">`);
            Label($$payload4, {
              for: "email",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Email Address`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> <div class="flex items-center gap-2">`);
            Mail($$payload4, { class: "w-4 h-4 text-muted-foreground" });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              Input($$payload4, {
                id: "email",
                type: "email",
                class: "flex-1",
                get value() {
                  return employeeData.personal.email;
                },
                set value($$value) {
                  employeeData.personal.email = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "email",
                value: employeeData.personal.email,
                readonly: true,
                class: "flex-1"
              });
            }
            $$payload4.out.push(`<!--]--></div></div> <div class="form-grid-2"><div class="form-field">`);
            Label($$payload4, {
              for: "phone",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Phone`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> <div class="flex items-center gap-2">`);
            Phone($$payload4, { class: "w-4 h-4 text-muted-foreground" });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              Input($$payload4, {
                id: "phone",
                class: "flex-1",
                get value() {
                  return employeeData.personal.phone;
                },
                set value($$value) {
                  employeeData.personal.phone = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "phone",
                value: employeeData.personal.phone,
                readonly: true,
                class: "flex-1"
              });
            }
            $$payload4.out.push(`<!--]--></div></div> <div class="form-field">`);
            Label($$payload4, {
              for: "mobile",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Mobile`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> <div class="flex items-center gap-2">`);
            Phone($$payload4, { class: "w-4 h-4 text-muted-foreground" });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              Input($$payload4, {
                id: "mobile",
                class: "flex-1",
                get value() {
                  return employeeData.personal.mobile;
                },
                set value($$value) {
                  employeeData.personal.mobile = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "mobile",
                value: employeeData.personal.mobile,
                readonly: true,
                class: "flex-1"
              });
            }
            $$payload4.out.push(`<!--]--></div></div></div></div>`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_header($$payload3, {
          class: "card-header",
          children: ($$payload4) => {
            Card_title($$payload4, {
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Address Information`);
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
            $$payload4.out.push(`<div class="form-field-group"><div class="form-field">`);
            Label($$payload4, {
              for: "street",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Street Address`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> <div class="flex items-center gap-2">`);
            Map_pin($$payload4, { class: "w-4 h-4 text-muted-foreground" });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              Input($$payload4, {
                id: "street",
                class: "flex-1",
                get value() {
                  return employeeData.personal.address.street;
                },
                set value($$value) {
                  employeeData.personal.address.street = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "street",
                value: employeeData.personal.address.street,
                readonly: true,
                class: "flex-1"
              });
            }
            $$payload4.out.push(`<!--]--></div></div> <div class="form-grid-2"><div class="form-field">`);
            Label($$payload4, {
              for: "suburb",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Suburb`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              Input($$payload4, {
                id: "suburb",
                get value() {
                  return employeeData.personal.address.suburb;
                },
                set value($$value) {
                  employeeData.personal.address.suburb = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "suburb",
                value: employeeData.personal.address.suburb,
                readonly: true
              });
            }
            $$payload4.out.push(`<!--]--></div> <div class="form-field">`);
            Label($$payload4, {
              for: "state",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->State`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              $$payload4.out.push(`<select id="state" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>option]:bg-card">`);
              $$payload4.select_value = employeeData.personal.address.state;
              $$payload4.out.push(`<option value="VIC"${maybe_selected($$payload4, "VIC")}>Victoria</option><option value="NSW"${maybe_selected($$payload4, "NSW")}>New South Wales</option><option value="QLD"${maybe_selected($$payload4, "QLD")}>Queensland</option><option value="WA"${maybe_selected($$payload4, "WA")}>Western Australia</option><option value="SA"${maybe_selected($$payload4, "SA")}>South Australia</option><option value="TAS"${maybe_selected($$payload4, "TAS")}>Tasmania</option><option value="ACT"${maybe_selected($$payload4, "ACT")}>Australian Capital Territory</option><option value="NT"${maybe_selected($$payload4, "NT")}>Northern Territory</option>`);
              $$payload4.select_value = void 0;
              $$payload4.out.push(`</select>`);
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "state",
                value: employeeData.personal.address.state,
                readonly: true
              });
            }
            $$payload4.out.push(`<!--]--></div></div> <div class="form-grid-2"><div class="form-field">`);
            Label($$payload4, {
              for: "postcode",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Postcode`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              Input($$payload4, {
                id: "postcode",
                get value() {
                  return employeeData.personal.address.postcode;
                },
                set value($$value) {
                  employeeData.personal.address.postcode = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "postcode",
                value: employeeData.personal.address.postcode,
                readonly: true
              });
            }
            $$payload4.out.push(`<!--]--></div> <div class="form-field">`);
            Label($$payload4, {
              for: "country",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Country`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            if (editMode) {
              $$payload4.out.push("<!--[-->");
              Input($$payload4, {
                id: "country",
                get value() {
                  return employeeData.personal.address.country;
                },
                set value($$value) {
                  employeeData.personal.address.country = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$payload4.out.push("<!--[!-->");
              Input($$payload4, {
                id: "country",
                value: employeeData.personal.address.country,
                readonly: true
              });
            }
            $$payload4.out.push(`<!--]--></div></div></div>`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div></div> <div class="column-sidebar"><div class="card-container">`);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_header($$payload3, {
          class: "card-header",
          children: ($$payload4) => {
            Card_title($$payload4, {
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Employment Details`);
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
            $$payload4.out.push(`<div class="space-y-4 text-sm"><div class="flex justify-between"><span class="text-muted-foreground">Employee ID</span> <span class="font-mono">${escape_html(employeeData.employment.employeeId)}</span></div> <div class="flex justify-between"><span class="text-muted-foreground">Position</span> <span>${escape_html(employeeData.employment.position)}</span></div> <div class="flex justify-between"><span class="text-muted-foreground">Department</span> <span>${escape_html(employeeData.employment.department)}</span></div> <div class="flex justify-between"><span class="text-muted-foreground">Manager</span> <span>${escape_html(employeeData.employment.manager)}</span></div> <div class="flex justify-between"><span class="text-muted-foreground">Start Date</span> <span>${escape_html(new Date(employeeData.employment.startDate).toLocaleDateString("en-AU"))}</span></div> <div class="flex justify-between"><span class="text-muted-foreground">Employment Type</span> <span>${escape_html(employeeData.employment.employmentType)}</span></div> <div class="flex justify-between"><span class="text-muted-foreground">Work Location</span> <span>${escape_html(employeeData.employment.workLocation)}</span></div></div>`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_header($$payload3, {
          class: "card-header",
          children: ($$payload4) => {
            Card_title($$payload4, {
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Emergency Contact`);
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
            $$payload4.out.push(`<div class="space-y-4 text-sm"><div><p class="font-medium">${escape_html(employeeData.emergency.contactName)}</p> <p class="text-muted-foreground">${escape_html(employeeData.emergency.relationship)}</p></div> `);
            Separator($$payload4, {});
            $$payload4.out.push(`<!----> <div class="flex items-center gap-2">`);
            Phone($$payload4, { class: "w-4 h-4 text-muted-foreground" });
            $$payload4.out.push(`<!----> <span>${escape_html(employeeData.emergency.phone)}</span></div> <div class="flex items-center gap-2">`);
            Mail($$payload4, { class: "w-4 h-4 text-muted-foreground" });
            $$payload4.out.push(`<!----> <span>${escape_html(employeeData.emergency.email)}</span></div></div>`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_header($$payload3, {
          class: "card-header",
          children: ($$payload4) => {
            Card_title($$payload4, {
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Quick Actions`);
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
            $$payload4.out.push(`<div class="space-y-3">`);
            Button($$payload4, {
              variant: "outline",
              class: "w-full justify-start",
              children: ($$payload5) => {
                Calendar($$payload5, { class: "w-4 h-4 mr-2" });
                $$payload5.out.push(`<!----> Request Leave`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            Button($$payload4, {
              variant: "outline",
              class: "w-full justify-start",
              children: ($$payload5) => {
                Building($$payload5, { class: "w-4 h-4 mr-2" });
                $$payload5.out.push(`<!----> Change Department`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            Button($$payload4, {
              variant: "outline",
              class: "w-full justify-start",
              children: ($$payload5) => {
                User($$payload5, { class: "w-4 h-4 mr-2" });
                $$payload5.out.push(`<!----> Update Profile Photo`);
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
    $$payload2.out.push(`<!----></div></div></div> <div class="card-container">`);
    Card($$payload2, {
      class: "card",
      children: ($$payload3) => {
        Card_header($$payload3, {
          class: "card-header",
          children: ($$payload4) => {
            Card_title($$payload4, {
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Additional Information`);
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
            $$payload4.out.push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm"><div class="p-4 bg-muted rounded-lg"><p class="font-medium mb-2">Years of Service</p> <p class="text-2xl font-bold text-primary">${escape_html(Math.floor(((/* @__PURE__ */ new Date()).getTime() - new Date(employeeData.employment.startDate).getTime()) / (1e3 * 60 * 60 * 24 * 365.25)))}</p> <p class="text-muted-foreground">Years</p></div> <div class="p-4 bg-muted rounded-lg"><p class="font-medium mb-2">Leave Balance</p> <p class="text-2xl font-bold text-primary">24</p> <p class="text-muted-foreground">Days remaining</p></div> <div class="p-4 bg-muted rounded-lg"><p class="font-medium mb-2">Next Review</p> <p class="text-2xl font-bold text-primary">Mar</p> <p class="text-muted-foreground">2025</p></div></div>`);
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
