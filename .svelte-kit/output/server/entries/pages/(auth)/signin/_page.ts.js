import { redirect } from "@sveltejs/kit";
const prerender = false;
const ssr = true;
const csr = true;
const load = async ({ url }) => {
  const isAuthenticated = url.searchParams.get("auth") === "true";
  if (isAuthenticated) {
    throw redirect(302, "/");
  }
  return {};
};
export {
  csr,
  load,
  prerender,
  ssr
};
