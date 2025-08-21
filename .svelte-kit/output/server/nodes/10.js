

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/my-team/employees/_id_/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false,
  "csr": true
};
export const universal_id = "src/routes/my-team/employees/[id]/+page.ts";
export const imports = ["_app/immutable/nodes/10.5HpoMzQ3.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DCReaiq7.js","_app/immutable/chunks/Be_f48sb.js","_app/immutable/chunks/m8c6eoRv.js","_app/immutable/chunks/Jn131pyZ.js","_app/immutable/chunks/D1RsDFyx.js","_app/immutable/chunks/CNOOnq3x.js","_app/immutable/chunks/BWcr5KKI.js","_app/immutable/chunks/CHSmPbPW.js","_app/immutable/chunks/DENQibGw.js","_app/immutable/chunks/DGH7gkaV.js","_app/immutable/chunks/9iBd7ymg.js","_app/immutable/chunks/DdQMaN7A.js","_app/immutable/chunks/D5pQJlvA.js","_app/immutable/chunks/BpAs8nCf.js","_app/immutable/chunks/DGDPYILA.js","_app/immutable/chunks/BqXSgWCX.js","_app/immutable/chunks/eqxU4gVQ.js","_app/immutable/chunks/-EuDmbQp.js","_app/immutable/chunks/BfY5vClM.js","_app/immutable/chunks/CQOABTuN.js","_app/immutable/chunks/BHt2la1_.js","_app/immutable/chunks/m0cH-Lix.js","_app/immutable/chunks/BztLPaYk.js","_app/immutable/chunks/1TdPtKr3.js","_app/immutable/chunks/B964owKb.js"];
export const stylesheets = ["_app/immutable/assets/index.CV-KWLNP.css"];
export const fonts = [];
