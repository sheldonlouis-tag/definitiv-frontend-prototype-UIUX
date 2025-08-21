import { writable } from 'svelte/store';
import { browser } from '$app/environment';
// Initialize auth state from localStorage if available
const getInitialState = () => {
    if (browser) {
        const stored = localStorage.getItem('auth');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                return {
                    user: parsed.user,
                    isAuthenticated: !!parsed.user,
                    isLoading: false,
                    error: null
                };
            }
            catch {
                // Invalid stored data, start fresh
            }
        }
    }
    return {
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
    };
};
export const authStore = writable(getInitialState());
// Subscribe to store changes and persist to localStorage
if (browser) {
    authStore.subscribe((state) => {
        localStorage.setItem('auth', JSON.stringify({
            user: state.user,
            isAuthenticated: state.isAuthenticated
        }));
    });
}
// Auth actions
export const authActions = {
    // Sign in with email
    async signIn(email) {
        authStore.update(state => ({ ...state, isLoading: true, error: null }));
        try {
            // Simulate API call - replace with actual authentication
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Mock successful authentication
            const user = {
                id: '1',
                email,
                name: email.split('@')[0],
                role: 'user'
            };
            authStore.update(state => ({
                ...state,
                user,
                isAuthenticated: true,
                isLoading: false,
                error: null
            }));
            return true;
        }
        catch (error) {
            authStore.update(state => ({
                ...state,
                isLoading: false,
                error: error instanceof Error ? error.message : 'Authentication failed'
            }));
            return false;
        }
    },
    // Sign out
    signOut() {
        authStore.update(state => ({
            ...state,
            user: null,
            isAuthenticated: false,
            error: null
        }));
        if (browser) {
            localStorage.removeItem('auth');
        }
    },
    // Clear error
    clearError() {
        authStore.update(state => ({ ...state, error: null }));
    }
};
