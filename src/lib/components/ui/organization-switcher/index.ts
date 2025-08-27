export { default as OrganizationSwitcher } from './organization-switcher.svelte';

export interface Organization {
	id: string;
	name: string;
	plan?: string;
	logo?: string;
	initials?: string;
}
