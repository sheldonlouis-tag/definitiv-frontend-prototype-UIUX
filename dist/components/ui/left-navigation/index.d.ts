import Root from './left-navigation-menu.svelte';
import Group from './left-navigation-group.svelte';
import Item from './left-navigation-item.svelte';
import Link from './left-navigation-link.svelte';
import List from './left-navigation-list.svelte';
export { Root, Group, Item, Link, List, Root as LeftNavigationMenu, Group as LeftNavigationGroup, Item as LeftNavigationItem, Link as LeftNavigationLink, List as LeftNavigationList };
export type LeftNavigationData = {
    id: string;
    label: string;
    href?: string;
    icon?: import('svelte').Component;
    active?: boolean;
    children?: LeftNavigationData[];
};
