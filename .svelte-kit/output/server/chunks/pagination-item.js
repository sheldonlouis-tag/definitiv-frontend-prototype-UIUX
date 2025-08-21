import { w as push, B as spread_attributes, D as clsx, E as bind_props, y as pop } from "./index2.js";
import { c as cn } from "./chevron-right.js";
function Table($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<div data-slot="table-container" class="relative w-full overflow-x-auto"><table${spread_attributes(
    {
      "data-slot": "table",
      class: clsx(cn("w-full caption-bottom text-sm", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></table></div>`);
  bind_props($$props, { ref });
  pop();
}
function Table_body($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<tbody${spread_attributes(
    {
      "data-slot": "table-body",
      class: clsx(cn("[&_tr:last-child]:border-0", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></tbody>`);
  bind_props($$props, { ref });
  pop();
}
function Table_cell($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<td${spread_attributes(
    {
      "data-slot": "table-cell",
      class: clsx(cn("bg-clip-padding p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></td>`);
  bind_props($$props, { ref });
  pop();
}
function Table_footer($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<tfoot${spread_attributes(
    {
      "data-slot": "table-footer",
      class: clsx(cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></tfoot>`);
  bind_props($$props, { ref });
  pop();
}
function Table_head($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<th${spread_attributes(
    {
      "data-slot": "table-head",
      class: clsx(cn("h-10 bg-clip-padding px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></th>`);
  bind_props($$props, { ref });
  pop();
}
function Table_header($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<thead${spread_attributes(
    {
      "data-slot": "table-header",
      class: clsx(cn("[&_tr]:border-b", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></thead>`);
  bind_props($$props, { ref });
  pop();
}
function Table_row($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<tr${spread_attributes(
    {
      "data-slot": "table-row",
      class: clsx(cn("border-b transition-colors data-[state=selected]:bg-muted hover:[&,&>svelte-css-wrapper]:[&>th,td]:bg-muted/50", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></tr>`);
  bind_props($$props, { ref });
  pop();
}
function Pagination_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<ul${spread_attributes(
    {
      "data-slot": "pagination-content",
      class: clsx(cn("flex flex-row items-center gap-1", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></ul>`);
  bind_props($$props, { ref });
  pop();
}
function Pagination_item($$payload, $$props) {
  push();
  let { ref = null, children, $$slots, $$events, ...restProps } = $$props;
  $$payload.out.push(`<li${spread_attributes({ "data-slot": "pagination-item", ...restProps })}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></li>`);
  bind_props($$props, { ref });
  pop();
}
export {
  Pagination_content as P,
  Table as T,
  Table_header as a,
  Table_row as b,
  Table_head as c,
  Table_body as d,
  Table_cell as e,
  Table_footer as f,
  Pagination_item as g
};
