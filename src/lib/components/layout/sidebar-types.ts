// Use the most compatible type approach for icon components
// This will accept any Svelte component including Lucide icons
export type IconComponent = typeof import('svelte').SvelteComponent;

export interface SidebarSubMenuItem {
	label: string;
	href?: string;
	onclick?: () => void;
	disabled?: boolean;
	isActive?: boolean;
	hasLevel3?: boolean;
	subItems?: SidebarSubMenuItem[]; // Allow nested sub-items
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
