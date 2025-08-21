interface Props {
    title?: string;
    subtitle?: string;
    breadcrumbs?: Array<{
        label: string;
        href?: string;
    }>;
    showBreadcrumbs?: boolean;
}
declare const PageHeader: import("svelte").Component<Props, {}, "">;
type PageHeader = ReturnType<typeof PageHeader>;
export default PageHeader;
