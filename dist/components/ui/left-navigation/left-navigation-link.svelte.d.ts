import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
type $$ComponentProps = NavigationMenuPrimitive.LinkProps & {
    level?: number;
    expanded?: boolean;
    hasChildren?: boolean;
    icon?: import('svelte').Component;
    label: string;
    active?: boolean;
};
declare const LeftNavigationLink: import("svelte").Component<$$ComponentProps, {}, "ref">;
type LeftNavigationLink = ReturnType<typeof LeftNavigationLink>;
export default LeftNavigationLink;
