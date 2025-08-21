import * as universal from '../entries/pages/(auth)/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(auth)/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(auth)/+layout.ts";
export const imports = ["_app/immutable/nodes/2.D7DPTbzs.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DCReaiq7.js","_app/immutable/chunks/Be_f48sb.js","_app/immutable/chunks/Dt96SmUw.js"];
export const stylesheets = ["_app/immutable/assets/app._-mpR_yl.css"];
export const fonts = [];
