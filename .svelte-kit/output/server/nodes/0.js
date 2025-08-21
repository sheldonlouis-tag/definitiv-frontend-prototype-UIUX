import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C0yU7rSz.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Be_f48sb.js","_app/immutable/chunks/DENQibGw.js","_app/immutable/chunks/m8c6eoRv.js","_app/immutable/chunks/Jn131pyZ.js","_app/immutable/chunks/9iBd7ymg.js","_app/immutable/chunks/DGH7gkaV.js","_app/immutable/chunks/D5pQJlvA.js","_app/immutable/chunks/BHt2la1_.js","_app/immutable/chunks/CQOABTuN.js","_app/immutable/chunks/-EuDmbQp.js","_app/immutable/chunks/m0cH-Lix.js","_app/immutable/chunks/CNOOnq3x.js","_app/immutable/chunks/BWcr5KKI.js","_app/immutable/chunks/CHSmPbPW.js","_app/immutable/chunks/BDGiTIHj.js","_app/immutable/chunks/BnMzGbGU.js"];
export const stylesheets = ["_app/immutable/assets/app._-mpR_yl.css"];
export const fonts = [];
