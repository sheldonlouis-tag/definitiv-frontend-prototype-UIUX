import { w as push, I as spread_props, y as pop, J as copy_payload, K as assign_payload, M as escape_html, Q as ensure_array_like } from "../../../../chunks/index2.js";
import { P as PageHeader } from "../../../../chunks/PageHeader.js";
import { C as Card } from "../../../../chunks/card.js";
import { I as Icon, B as Button } from "../../../../chunks/chevron-right.js";
import { I as Input } from "../../../../chunks/input.js";
import { B as Badge } from "../../../../chunks/badge.js";
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from "../../../../chunks/index3.js";
import { S as Settings } from "../../../../chunks/stores.js";
import { P as Plus } from "../../../../chunks/plus2.js";
function Eye($$payload, $$props) {
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
        "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$payload, spread_props([
    { name: "eye" },
    /**
     * @component @name Eye
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi4wNjIgMTIuMzQ4YTEgMSAwIDAgMSAwLS42OTYgMTAuNzUgMTAuNzUgMCAwIDEgMTkuODc2IDAgMSAxIDAgMCAxIDAgLjY5NiAxMC43NSAxMC43NSAwIDAgMS0xOS44NzYgMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/eye
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
  let searchQuery = "";
  let statusFilter = "active";
  const onboardingData = [
    {
      id: "1",
      firstName: "Kevin",
      lastName: "Frazer",
      dateSent: "03 April 2024",
      dateCompleted: null,
      onboardingStatus: "in-progress",
      approvalStatus: "not-approved"
    },
    {
      id: "2",
      firstName: "Natalie",
      lastName: "Howard",
      dateSent: "03 April 2024",
      dateCompleted: "03 April 2024",
      onboardingStatus: "complete",
      approvalStatus: "not-approved"
    }
  ];
  const filteredData = onboardingData.filter((record) => {
    const matchesSearch = searchQuery === "" || `${record.firstName} ${record.lastName}`.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || statusFilter === "active" && record.onboardingStatus !== "complete";
    return matchesSearch && matchesStatus;
  });
  const getStatusVariant = (status) => {
    switch (status) {
      case "in-progress":
        return "default";
      case "complete":
        return "secondary";
      case "not-started":
        return "outline";
      default:
        return "default";
    }
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case "in-progress":
        return "In Progress";
      case "complete":
        return "Complete";
      case "not-started":
        return "Not Started";
      default:
        return status;
    }
  };
  const getApprovalVariant = (status) => {
    switch (status) {
      case "approved":
        return "secondary";
      case "not-approved":
        return "destructive";
      case "pending":
        return "outline";
      default:
        return "default";
    }
  };
  const getApprovalLabel = (status) => {
    switch (status) {
      case "approved":
        return "Approved";
      case "not-approved":
        return "Not Approved";
      case "pending":
        return "Pending";
      default:
        return status;
    }
  };
  const handleViewOnboarding = (id) => {
    console.log("View onboarding:", id);
  };
  const handleSettings = () => {
    console.log("Open settings");
  };
  const handleStartNewOnboarding = () => {
    console.log("Start new onboarding");
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="page-container"><div class="page-content"><div class="page-header">`);
    PageHeader($$payload2, {
      title: "Onboarding",
      breadcrumbs: [
        { label: "App", href: "/app" },
        { label: "My Team", href: "/my-team" },
        { label: "Onboarding" }
      ]
    });
    $$payload2.out.push(`<!----> <div class="flex gap-3">`);
    Button($$payload2, {
      variant: "outline",
      onclick: handleSettings,
      children: ($$payload3) => {
        Settings($$payload3, { class: "w-4 h-4 mr-2" });
        $$payload3.out.push(`<!----> Settings`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Button($$payload2, {
      onclick: handleStartNewOnboarding,
      children: ($$payload3) => {
        Plus($$payload3, { class: "w-4 h-4 mr-2" });
        $$payload3.out.push(`<!----> Start New Onboarding`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div></div> <div class="controls-bar"><div class="control-group"><div class="relative w-full sm:w-80">`);
    Input($$payload2, {
      placeholder: "Search by Name",
      class: "pl-4",
      get value() {
        return searchQuery;
      },
      set value($$value) {
        searchQuery = $$value;
        $$settled = false;
      }
    });
    $$payload2.out.push(`<!----></div> <div class="relative w-full sm:w-60">`);
    Root($$payload2, {
      type: "single",
      get value() {
        return statusFilter;
      },
      set value($$value) {
        statusFilter = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        Select_trigger($$payload3, {
          children: ($$payload4) => {
            $$payload4.out.push(`<!---->${escape_html(statusFilter === "active" ? "Active Onboardings" : statusFilter === "complete" ? "Completed" : "All Statuses")}`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> `);
        Select_content($$payload3, {
          children: ($$payload4) => {
            Select_item($$payload4, {
              value: "active",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Active Onboardings`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            Select_item($$payload4, {
              value: "complete",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Completed`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            Select_item($$payload4, {
              value: "all",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->All Statuses`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div></div></div> <div class="card-container">`);
    Card($$payload2, {
      class: "card-no-padding",
      children: ($$payload3) => {
        const each_array = ensure_array_like(filteredData);
        $$payload3.out.push(`<div class="overflow-x-auto"><table class="w-full"><thead class="border-b border-border/40 bg-muted/20"><tr><th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground svelte-13gkiz0">First Name</th><th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground svelte-13gkiz0">Last Name</th><th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground svelte-13gkiz0">Date Sent</th><th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground svelte-13gkiz0">Date Completed</th><th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground svelte-13gkiz0">Onboarding Status</th><th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground svelte-13gkiz0">Approval Status</th><th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider svelte-13gkiz0">Actions</th></tr></thead><tbody class="bg-card divide-y divide-border/40"><!--[-->`);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let record = each_array[$$index];
          $$payload3.out.push(`<tr class="hover:bg-muted/10 transition-colors"><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">${escape_html(record.firstName)}</td><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">${escape_html(record.lastName)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">${escape_html(record.dateSent)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">${escape_html(record.dateCompleted || "Not Completed Yet")}</td><td class="px-6 py-4 whitespace-nowrap">`);
          Badge($$payload3, {
            variant: getStatusVariant(record.onboardingStatus),
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->${escape_html(getStatusLabel(record.onboardingStatus))}`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----></td><td class="px-6 py-4 whitespace-nowrap">`);
          Badge($$payload3, {
            variant: getApprovalVariant(record.approvalStatus),
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->${escape_html(getApprovalLabel(record.approvalStatus))}`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----></td><td class="px-6 py-4 whitespace-nowrap text-sm">`);
          Button($$payload3, {
            variant: "outline",
            size: "sm",
            onclick: () => handleViewOnboarding(record.id),
            children: ($$payload4) => {
              Eye($$payload4, { class: "w-4 h-4 mr-1" });
              $$payload4.out.push(`<!----> View`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----></td></tr>`);
        }
        $$payload3.out.push(`<!--]-->`);
        if (filteredData.length === 0) {
          $$payload3.out.push("<!--[-->");
          $$payload3.out.push(`<tr><td colspan="7" class="px-6 py-12 text-center text-sm text-muted-foreground">${escape_html(searchQuery ? `No onboarding records found matching "${searchQuery}"` : "No onboarding records found")}</td></tr>`);
        } else {
          $$payload3.out.push("<!--[!-->");
        }
        $$payload3.out.push(`<!--]--></tbody></table></div>`);
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
