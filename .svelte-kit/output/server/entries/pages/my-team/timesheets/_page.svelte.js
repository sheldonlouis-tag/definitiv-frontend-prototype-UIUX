import { w as push, I as spread_props, y as pop, R as store_get, J as copy_payload, K as assign_payload, S as unsubscribe_stores, M as escape_html, a0 as store_set, Q as ensure_array_like, G as attr, N as stringify, O as attr_class } from "../../../../chunks/index2.js";
import { w as writable } from "../../../../chunks/index.js";
import { P as PageHeader } from "../../../../chunks/PageHeader.js";
import { I as Icon, B as Button } from "../../../../chunks/chevron-right.js";
import { I as Input } from "../../../../chunks/input.js";
import { L as Label } from "../../../../chunks/label.js";
import { B as Badge } from "../../../../chunks/badge.js";
import { T as Table, a as Table_header, b as Table_row, c as Table_head, d as Table_body, e as Table_cell, f as Table_footer, P as Pagination_content, g as Pagination_item } from "../../../../chunks/pagination-item.js";
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from "../../../../chunks/index3.js";
import { P as Plus } from "../../../../chunks/plus2.js";
import { S as Search } from "../../../../chunks/search.js";
function generateMockTimesheets() {
  const employees = [
    { id: 1, name: "Amanda Rex", number: "000600", department: "Human Resources" },
    { id: 2, name: "Sonia Sohail", number: "000601", department: "Engineering" },
    { id: 3, name: "Ping Le", number: "000602", department: "Marketing" },
    { id: 4, name: "Selina Kandiman", number: "000603", department: "Sales" },
    { id: 5, name: "Ranjeet Kaur", number: "000604", department: "Finance" },
    { id: 6, name: "Xiaoyan Feng", number: "000605", department: "Operations" },
    { id: 7, name: "Thuy Vinh", number: "000606", department: "Customer Support" },
    { id: 8, name: "Jeanne Kwee", number: "000607", department: "Product Management" },
    { id: 9, name: "Michael Smith", number: "000608", department: "Engineering" },
    { id: 10, name: "Sarah Johnson", number: "000609", department: "Marketing" },
    { id: 11, name: "David Williams", number: "000610", department: "Sales" },
    { id: 12, name: "Jennifer Brown", number: "000611", department: "Finance" },
    { id: 13, name: "Robert Jones", number: "000612", department: "Operations" },
    { id: 14, name: "Lisa Garcia", number: "000613", department: "Human Resources" },
    { id: 15, name: "James Miller", number: "000614", department: "Engineering" }
  ];
  const statuses = ["Draft", "Submitted", "Approved", "Rejected"];
  const timesheets = [];
  for (let weekOffset = 0; weekOffset < 8; weekOffset++) {
    const weekStart = /* @__PURE__ */ new Date();
    weekStart.setDate(weekStart.getDate() - weekStart.getDay() - weekOffset * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    const selectedEmployees = employees.slice(0, Math.floor(Math.random() * 10) + 5);
    selectedEmployees.forEach((employee, index) => {
      const regularHours = 35 + Math.floor(Math.random() * 10);
      const overtimeHours = Math.floor(Math.random() * 6);
      const totalHours = regularHours + overtimeHours;
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const lastModified = new Date(weekStart);
      lastModified.setDate(lastModified.getDate() + Math.floor(Math.random() * 7));
      let submittedDate = null;
      let approvedDate = null;
      if (status === "Submitted" || status === "Approved" || status === "Rejected") {
        submittedDate = new Date(lastModified);
        submittedDate.setHours(submittedDate.getHours() + Math.floor(Math.random() * 48));
      }
      if (status === "Approved") {
        approvedDate = new Date(submittedDate || lastModified);
        approvedDate.setHours(approvedDate.getHours() + Math.floor(Math.random() * 24));
      }
      timesheets.push({
        id: weekOffset * 20 + index + 1,
        employeeId: employee.id,
        employeeName: employee.name,
        employeeNumber: employee.number,
        weekStarting: weekStart,
        weekEnding: weekEnd,
        status,
        totalHours,
        regularHours,
        overtimeHours,
        department: employee.department,
        lastModified,
        submittedDate,
        approvedDate
      });
    });
  }
  return timesheets.sort((a, b) => b.weekStarting.getTime() - a.weekStarting.getTime());
}
const mockTimesheets = generateMockTimesheets();
function Download($$payload, $$props) {
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
    ["path", { "d": "M12 15V3" }],
    ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["path", { "d": "m7 10 5 5 5-5" }]
  ];
  Icon($$payload, spread_props([
    { name: "download" },
    /**
     * @component @name Download
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTVWMyIgLz4KICA8cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIgLz4KICA8cGF0aCBkPSJtNyAxMCA1IDUgNS01IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/download
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
  const allTimesheets = mockTimesheets;
  const searchTerm = writable("");
  const statusFilter = writable("all");
  const currentPage = writable(1);
  const rowsPerPage = 25;
  const filteredTimesheets = allTimesheets.filter((timesheet) => {
    const matchesSearch = !store_get($$store_subs ??= {}, "$searchTerm", searchTerm) || timesheet.employeeName.toLowerCase().includes(store_get($$store_subs ??= {}, "$searchTerm", searchTerm).toLowerCase()) || timesheet.employeeNumber.includes(store_get($$store_subs ??= {}, "$searchTerm", searchTerm)) || timesheet.department.toLowerCase().includes(store_get($$store_subs ??= {}, "$searchTerm", searchTerm).toLowerCase());
    const matchesStatus = store_get($$store_subs ??= {}, "$statusFilter", statusFilter) === "all" || timesheet.status === store_get($$store_subs ??= {}, "$statusFilter", statusFilter);
    return matchesSearch && matchesStatus;
  });
  const totalPages = Math.ceil(filteredTimesheets.length / rowsPerPage);
  const startIndex = (store_get($$store_subs ??= {}, "$currentPage", currentPage) - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentTimesheets = filteredTimesheets.slice(startIndex, endIndex);
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
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  function formatWeekRange(startDate, endDate) {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  }
  function getStatusVariant(status) {
    switch (status) {
      case "Approved":
        return "default";
      case // Green-ish primary color for approved
      "Submitted":
        return "outline";
      case "Draft":
        return "secondary";
      case "Rejected":
        return "destructive";
      default:
        return "default";
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="page-container"><div class="page-content"><div class="page-header">`);
    PageHeader($$payload2, {
      title: "My Team",
      subtitle: "Timesheets",
      breadcrumbs: [
        { label: "My Team", href: "/my-team" },
        { label: "Timesheets" }
      ]
    });
    $$payload2.out.push(`<!----> <div class="control-group">`);
    Button($$payload2, {
      variant: "outline",
      children: ($$payload3) => {
        Download($$payload3, { class: "h-4 w-4" });
        $$payload3.out.push(`<!----> Export`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Button($$payload2, {
      children: ($$payload3) => {
        Plus($$payload3, { class: "h-4 w-4" });
        $$payload3.out.push(`<!----> Add Timesheet`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div></div> <div class="controls-bar"><div class="control-group"><div class="flex items-center space-x-2">`);
    Label($$payload2, {
      for: "status-filter",
      class: "text-sm",
      children: ($$payload3) => {
        $$payload3.out.push(`<!---->Filter by Status:`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Root($$payload2, {
      type: "single",
      get value() {
        return store_get($$store_subs ??= {}, "$statusFilter", statusFilter);
      },
      set value($$value) {
        store_set(statusFilter, $$value);
        $$settled = false;
      },
      children: ($$payload3) => {
        Select_trigger($$payload3, {
          id: "status-filter",
          class: "w-40",
          children: ($$payload4) => {
            $$payload4.out.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$statusFilter", statusFilter) === "all" ? "All Statuses" : store_get($$store_subs ??= {}, "$statusFilter", statusFilter) || "All Statuses")}`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> `);
        Select_content($$payload3, {
          children: ($$payload4) => {
            Select_item($$payload4, {
              value: "all",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->All Statuses`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            Select_item($$payload4, {
              value: "Draft",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Draft`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            Select_item($$payload4, {
              value: "Submitted",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Submitted`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            Select_item($$payload4, {
              value: "Approved",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Approved`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> `);
            Select_item($$payload4, {
              value: "Rejected",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Rejected`);
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
    $$payload2.out.push(`<!----></div></div> <div class="relative w-full sm:w-64">`);
    Search($$payload2, {
      class: "pointer-events-none absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 transform text-gray-400"
    });
    $$payload2.out.push(`<!----> `);
    Input($$payload2, {
      type: "text",
      placeholder: "Search timesheets...",
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
                    $$payload6.out.push(`<!---->Employee`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Employee Number`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Department`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Week Period`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  class: "text-center",
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Regular Hours`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  class: "text-center",
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Overtime Hours`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  class: "text-center",
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Total Hours`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Status`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Last Modified`);
                  },
                  $$slots: { default: true }
                });
                $$payload5.out.push(`<!----> `);
                Table_head($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out.push(`<!---->Actions`);
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
            const each_array = ensure_array_like(currentTimesheets);
            $$payload4.out.push(`<!--[-->`);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let timesheet = each_array[$$index];
              Table_row($$payload4, {
                children: ($$payload5) => {
                  Table_cell($$payload5, {
                    class: "font-medium",
                    children: ($$payload6) => {
                      $$payload6.out.push(`<a${attr("href", `/my-team/employees/${stringify(timesheet.employeeId)}`)} class="text-sm text-blue-600 underline hover:text-blue-800">${escape_html(timesheet.employeeName)}</a>`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(timesheet.employeeNumber)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(timesheet.department)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    class: "font-mono text-sm",
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(formatWeekRange(timesheet.weekStarting, timesheet.weekEnding))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    class: "text-center font-mono",
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(timesheet.regularHours)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    class: "text-center font-mono",
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(timesheet.overtimeHours > 0 ? timesheet.overtimeHours : "-")}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    class: "text-center font-mono font-semibold",
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(timesheet.totalHours)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      Badge($$payload6, {
                        variant: getStatusVariant(timesheet.status),
                        children: ($$payload7) => {
                          $$payload7.out.push(`<!---->${escape_html(timesheet.status)}`);
                        },
                        $$slots: { default: true }
                      });
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    class: "text-sm text-muted-foreground",
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->${escape_html(formatDate(timesheet.lastModified))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Table_cell($$payload5, {
                    children: ($$payload6) => {
                      Button($$payload6, {
                        variant: "ghost",
                        size: "sm",
                        children: ($$payload7) => {
                          $$payload7.out.push(`<!---->View`);
                        },
                        $$slots: { default: true }
                      });
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
                    colspan: 10,
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
