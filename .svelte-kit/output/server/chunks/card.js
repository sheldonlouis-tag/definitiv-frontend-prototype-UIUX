import { B as spread_attributes, D as clsx, E as bind_props, y as pop, w as push } from "./index2.js";
import { c as cn } from "./chevron-right.js";
function Card($$payload, $$props) {
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
      "data-slot": "card",
      class: clsx(cn("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", className)),
      ...restProps
    }
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></div>`);
  bind_props($$props, { ref });
  pop();
}
export {
  Card as C
};
