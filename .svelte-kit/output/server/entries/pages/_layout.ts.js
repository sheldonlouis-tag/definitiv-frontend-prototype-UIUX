const prerender = "auto";
const ssr = true;
const csr = true;
const load = async ({ url }) => {
  return {
    isAuthenticated: true
    // Always return true for development
  };
};
export {
  csr,
  load,
  prerender,
  ssr
};
