import { R as store_get, M as escape_html, S as unsubscribe_stores } from "../../chunks/index2.js";
import { a as authStore } from "../../chunks/auth.js";
function _page($$payload) {
  var $$store_subs;
  let user;
  ({ user } = store_get($$store_subs ??= {}, "$authStore", authStore));
  $$payload.out.push(`<div class="flex flex-col items-center justify-center min-h-screen"><div class="text-center max-w-2xl mx-auto p-8"><h1 class="text-3xl font-bold mb-6 text-gray-900">Welcome to Employee Hub</h1> `);
  if (user) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-6"><h2 class="text-xl font-semibold text-green-800 mb-2">Welcome back, ${escape_html(user.name || user.email)}!</h2> <p class="text-green-700">You are successfully signed in to your Access account.</p></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"><h3 class="text-lg font-semibold mb-3 text-gray-900">Employee Details</h3> <p class="text-gray-600 mb-4">View and manage your employee information, including personal details and work preferences.</p> <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">View Details</button></div> <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"><h3 class="text-lg font-semibold mb-3 text-gray-900">Leave Management</h3> <p class="text-gray-600 mb-4">Request time off, view your leave balance, and track your vacation days.</p> <button class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">Manage Leave</button></div> <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"><h3 class="text-lg font-semibold mb-3 text-gray-900">Financial Information</h3> <p class="text-gray-600 mb-4">Access your payslips, tax documents, and other financial information.</p> <button class="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">View Financials</button></div> <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"><h3 class="text-lg font-semibold mb-3 text-gray-900">Documents</h3> <p class="text-gray-600 mb-4">Access important documents, contracts, and company policies.</p> <button class="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">Browse Documents</button></div></div></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
