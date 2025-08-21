declare const SidebarInput: import("svelte").Component<(Omit<import("svelte/elements").HTMLInputAttributes, "type"> & ({
    type: "file";
    files?: FileList;
} | {
    type?: "number" | "hidden" | "color" | (string & {}) | "button" | "checkbox" | "radio" | "text" | "reset" | "range" | "submit" | "search" | "tel" | "url" | "email" | "date" | "time" | "datetime-local" | "image" | "month" | "password" | "week";
    files?: undefined;
})) & {
    ref?: HTMLElement | null | undefined;
}, {}, "value" | "ref">;
type SidebarInput = ReturnType<typeof SidebarInput>;
export default SidebarInput;
