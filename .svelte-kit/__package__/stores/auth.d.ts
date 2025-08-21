export interface User {
    id: string;
    email: string;
    name?: string;
    role?: string;
}
export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}
export declare const authStore: import("svelte/store").Writable<AuthState>;
export declare const authActions: {
    signIn(email: string): Promise<boolean>;
    signOut(): void;
    clearError(): void;
};
