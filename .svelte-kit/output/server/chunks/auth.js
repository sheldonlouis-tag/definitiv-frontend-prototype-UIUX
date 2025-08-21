import { w as writable } from "./index.js";
const getInitialState = () => {
  return {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
  };
};
const authStore = writable(getInitialState());
const authActions = {
  // Sign in with email
  async signIn(email) {
    authStore.update((state) => ({ ...state, isLoading: true, error: null }));
    try {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      const user = {
        id: "1",
        email,
        name: email.split("@")[0],
        role: "user"
      };
      authStore.update((state) => ({
        ...state,
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null
      }));
      return true;
    } catch (error) {
      authStore.update((state) => ({
        ...state,
        isLoading: false,
        error: error instanceof Error ? error.message : "Authentication failed"
      }));
      return false;
    }
  },
  // Sign out
  signOut() {
    authStore.update((state) => ({
      ...state,
      user: null,
      isAuthenticated: false,
      error: null
    }));
  },
  // Clear error
  clearError() {
    authStore.update((state) => ({ ...state, error: null }));
  }
};
export {
  authStore as a,
  authActions as b
};
