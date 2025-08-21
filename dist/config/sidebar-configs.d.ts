import type { SidebarConfig } from '../components/layout/sidebar-types.js';
/**
 * Level 3 navigation data for Employee section
 */
export declare const employeeLevel3Menu: {
    label: string;
    icon: any;
    href: string;
}[];
/**
 * Level 3 navigation data for Pending Actions section
 */
export declare const pendingActionsLevel3Menu: {
    label: string;
    icon: any;
    href: string;
}[];
/**
 * Level 3 navigation data for Leave section
 */
export declare const leaveLevel3Menu: {
    label: string;
    icon: any;
    href: string;
}[];
/**
 * Level 3 navigation data for Financial section
 */
export declare const financialLevel3Menu: {
    label: string;
    icon: any;
    href: string;
}[];
/**
 * Level 3 navigation data for Cost Centers section
 */
export declare const costCentersLevel3Menu: {
    label: string;
    icon: any;
    href: string;
}[];
/**
 * Settings context menu items
 */
export declare const settingsContextMenu: ({
    label: string;
    icon: any;
    href: string;
    onclick?: undefined;
} | {
    label: string;
    icon: any;
    onclick: typeof handleSignOut;
    href?: undefined;
})[];
/**
 * Sign out handler - navigates to sign in page after clearing auth
 */
declare function handleSignOut(): Promise<void>;
/**
 * Main application sidebar configuration for employee hub
 */
export declare const sidebarConfig: SidebarConfig;
/**
 * Admin sidebar configuration with additional management options
 */
export declare const adminSidebarConfig: SidebarConfig;
/**
 * Manager sidebar configuration with team-focused options
 */
export declare const managerSidebarConfig: SidebarConfig;
export {};
