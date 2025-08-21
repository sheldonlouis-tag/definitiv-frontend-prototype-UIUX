export type IconComponent = typeof import('svelte').SvelteComponent;
export interface SidebarSubMenuItem {
    label: string;
    href?: string;
    onclick?: () => void;
    disabled?: boolean;
    isActive?: boolean;
    hasLevel3?: boolean;
    subItems?: SidebarSubMenuItem[];
}
export interface SidebarMenuItem {
    label: string;
    icon?: IconComponent;
    href?: string;
    onclick?: () => void;
    tooltipContent?: string;
    isActive?: boolean;
    disabled?: boolean;
    hasNotification?: boolean;
    notificationCount?: number;
    hasContextMenu?: boolean;
    subItems?: SidebarSubMenuItem[];
}
export interface SidebarSection {
    items: SidebarMenuItem[];
}
export interface SidebarConfig {
    header?: SidebarSection;
    content: SidebarSection;
    footer?: SidebarSection;
}
