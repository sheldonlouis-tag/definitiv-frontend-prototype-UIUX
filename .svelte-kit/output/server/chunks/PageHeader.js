import { B as spread_attributes, D as clsx, E as bind_props, y as pop, w as push, R as store_get, M as escape_html, Q as ensure_array_like, S as unsubscribe_stores } from "./index2.js";
import { a as sidebarConfig, p as page } from "./stores.js";
import { c as cn, C as Chevron_right } from "./chevron-right.js";
function Breadcrumb($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<nav${spread_attributes(
    {
      "data-slot": "breadcrumb",
      class: clsx(className),
      "aria-label": "breadcrumb",
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></nav>`);
  bind_props($$props, { ref });
  pop();
}
function Breadcrumb_item($$payload, $$props) {
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
      "data-slot": "breadcrumb-item",
      class: clsx(cn("inline-flex items-center gap-1.5", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></li>`);
  bind_props($$props, { ref });
  pop();
}
function Breadcrumb_separator($$payload, $$props) {
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
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      class: clsx(cn("[&>svg]:size-3.5", className)),
      ...restProps
    }
  )}>`);
  if (children) {
    $$payload.out.push("<!--[-->");
    children?.($$payload);
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    Chevron_right($$payload, {});
  }
  $$payload.out.push(`<!--]--></li>`);
  bind_props($$props, { ref });
  pop();
}
function Breadcrumb_link($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    href = void 0,
    child,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const attrs = {
    "data-slot": "breadcrumb-link",
    class: cn("hover:text-foreground transition-colors", className),
    href,
    ...restProps
  };
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: attrs });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<a${spread_attributes({ ...attrs })}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></a>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Breadcrumb_list($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<ol${spread_attributes(
    {
      "data-slot": "breadcrumb-list",
      class: clsx(cn("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></ol>`);
  bind_props($$props, { ref });
  pop();
}
function Breadcrumb_page($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<span${spread_attributes(
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: clsx(cn("font-normal text-foreground", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></span>`);
  bind_props($$props, { ref });
  pop();
}
function PageHeader($$payload, $$props) {
  push();
  var $$store_subs;
  let { title, subtitle, breadcrumbs = [], showBreadcrumbs = true } = $$props;
  const currentBreadcrumbs = breadcrumbs.length > 0 ? breadcrumbs : generateBreadcrumbsFromRoute(store_get($$store_subs ??= {}, "$page", page).url.pathname);
  function generateBreadcrumbsFromRoute(pathname) {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbs2 = [];
    if (pathSegments[0] === "app") {
      breadcrumbs2.push({ label: "App", href: "/app" });
    }
    for (const item of sidebarConfig.content.items) {
      if (item.href && pathname.startsWith(item.href)) {
        breadcrumbs2.push({ label: item.label, href: item.href });
        if (item.subItems) {
          for (const subItem of item.subItems) {
            if (subItem.href && pathname.startsWith(subItem.href)) {
              breadcrumbs2.push({ label: subItem.label, href: subItem.href });
              break;
            }
          }
        }
        break;
      }
    }
    if (breadcrumbs2.length <= 1) {
      for (let i = 1; i < pathSegments.length; i++) {
        const segment = pathSegments[i];
        const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
        const href = "/" + pathSegments.slice(0, i + 1).join("/");
        breadcrumbs2.push({ label, href });
      }
    }
    return breadcrumbs2;
  }
  $$payload.out.push(`<div class="flex flex-col gap-1"><div class="flex items-center gap-2 text-[28px] tracking-[-0.24px] leading-[36px]">`);
  if (title) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<span class="font-extralight text-[#43484e]">${escape_html(title)}:</span>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (subtitle) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<span class="font-extrabold text-[#12171b]">${escape_html(subtitle)}</span>`);
  } else {
    $$payload.out.push("<!--[!-->");
    if (title) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="font-extrabold text-[#12171b]">${escape_html(title)}</span>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></div> `);
  if (showBreadcrumbs && currentBreadcrumbs.length > 0) {
    $$payload.out.push("<!--[-->");
    Breadcrumb($$payload, {
      class: "text-[12px] text-[#1e2227] tracking-[0.24px]",
      children: ($$payload2) => {
        Breadcrumb_list($$payload2, {
          children: ($$payload3) => {
            const each_array = ensure_array_like(currentBreadcrumbs);
            $$payload3.out.push(`<!--[-->`);
            for (let index = 0, $$length = each_array.length; index < $$length; index++) {
              let breadcrumb = each_array[index];
              Breadcrumb_item($$payload3, {
                children: ($$payload4) => {
                  if (breadcrumb.href && index < currentBreadcrumbs.length - 1) {
                    $$payload4.out.push("<!--[-->");
                    Breadcrumb_link($$payload4, {
                      href: breadcrumb.href,
                      children: ($$payload5) => {
                        $$payload5.out.push(`<!---->${escape_html(breadcrumb.label)}`);
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$payload4.out.push("<!--[!-->");
                    Breadcrumb_page($$payload4, {
                      children: ($$payload5) => {
                        $$payload5.out.push(`<!---->${escape_html(breadcrumb.label)}`);
                      },
                      $$slots: { default: true }
                    });
                  }
                  $$payload4.out.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$payload3.out.push(`<!----> `);
              if (index < currentBreadcrumbs.length - 1) {
                $$payload3.out.push("<!--[-->");
                Breadcrumb_separator($$payload3, {});
              } else {
                $$payload3.out.push("<!--[!-->");
              }
              $$payload3.out.push(`<!--]-->`);
            }
            $$payload3.out.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  PageHeader as P
};
