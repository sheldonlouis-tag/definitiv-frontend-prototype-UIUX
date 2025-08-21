import { B as spread_attributes, D as clsx, E as bind_props, y as pop, w as push } from "./index2.js";
import { c as cn } from "./chevron-right.js";
function Input($$payload, $$props) {
  push();
  let {
    ref = null,
    value = void 0,
    type,
    files = void 0,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  if (type === "file") {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<input${spread_attributes(
      {
        "data-slot": "input",
        class: clsx(cn("flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 pt-1.5 text-sm font-medium shadow-xs ring-offset-background transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", className)),
        type: "file",
        ...restProps
      }
    )}/>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<input${spread_attributes(
      {
        "data-slot": "input",
        class: clsx(cn("flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 text-base shadow-xs ring-offset-background transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", className)),
        type,
        value,
        ...restProps
      }
    )}/>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref, value, files });
  pop();
}
export {
  Input as I
};
