import { Y as element, E as bind_props, y as pop, w as push, B as spread_attributes, D as clsx } from "./index2.js";
import { c as cn } from "./chevron-right.js";
import { tv } from "tailwind-variants";
const badgeVariants = tv({
  base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent",
      secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 border-transparent",
      destructive: "bg-destructive [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70 border-transparent text-white",
      outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
    }
  },
  defaultVariants: { variant: "default" }
});
function Badge($$payload, $$props) {
  push();
  let {
    ref = null,
    href,
    class: className,
    variant = "default",
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  element(
    $$payload,
    href ? "a" : "span",
    () => {
      $$payload.out.push(`${spread_attributes(
        {
          "data-slot": "badge",
          href,
          class: clsx(cn(badgeVariants({ variant }), className)),
          ...restProps
        }
      )}`);
    },
    () => {
      children?.($$payload);
      $$payload.out.push(`<!---->`);
    }
  );
  bind_props($$props, { ref });
  pop();
}
export {
  Badge as B
};
