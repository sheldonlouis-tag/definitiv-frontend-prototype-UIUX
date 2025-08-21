import type { SidebarConfig } from './sidebar-types.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
    config: SidebarConfig;
    open?: boolean;
    variant?: 'sidebar' | 'floating' | 'inset';
    side?: 'left' | 'right';
    collapsible?: 'offcanvas' | 'icon' | 'none';
    children?: Snippet;
    class?: string;
    pageTitle?: string;
}
declare const CustomSidebar: import("svelte").Component<Props, {}, "">;
type CustomSidebar = ReturnType<typeof CustomSidebar>;
export default CustomSidebar;
