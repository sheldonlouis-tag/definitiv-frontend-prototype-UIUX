import { T as slot } from "../../../chunks/index2.js";
/* empty css                  */
function _layout($$payload, $$props) {
  $$payload.out.push(`<div class="flex min-h-screen bg-gray-50 p-2"><div class="flex-1 flex flex-col items-center justify-center px-2 py-16"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></div> <div class="flex-1 relative overflow-hidden rounded-lg"><div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/auth-hero.jpg');"></div> <div class="absolute bottom-14 right-14"><div class="flex items-center gap-2.5 h-[46px] w-[200px]"><img src="/Access_Logo.png" alt="Access" class="h-full w-auto filter brightness-0 invert"/></div></div></div></div>`);
}
export {
  _layout as default
};
