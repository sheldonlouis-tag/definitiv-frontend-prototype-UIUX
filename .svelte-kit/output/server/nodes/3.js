import * as universal from '../entries/pages/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/3.DVZ72s7e.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DCReaiq7.js","_app/immutable/chunks/Be_f48sb.js","_app/immutable/chunks/m8c6eoRv.js","_app/immutable/chunks/Jn131pyZ.js","_app/immutable/chunks/BWcr5KKI.js"];
export const stylesheets = [];
export const fonts = [];
