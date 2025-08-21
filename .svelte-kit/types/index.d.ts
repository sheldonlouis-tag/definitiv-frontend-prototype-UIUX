type DynamicRoutes = {
	"/my-team/employees/[id]": { id: string }
};

type Layouts = {
	"/(auth)": undefined;
	"/": { id?: string };
	"/employee": undefined;
	"/employee/details": undefined;
	"/employee/employee": undefined;
	"/employee/employee/my-details": undefined;
	"/employee/finance": undefined;
	"/employee/finance/banking": undefined;
	"/my-team": { id?: string };
	"/my-team/employees": { id?: string };
	"/my-team/employees/[id]": { id: string };
	"/my-team/onboarding": undefined;
	"/my-team/timesheets": undefined;
	"/(auth)/signin": undefined
};

export type RouteId = "/(auth)" | "/" | "/employee" | "/employee/details" | "/employee/employee" | "/employee/employee/my-details" | "/employee/finance" | "/employee/finance/banking" | "/my-team" | "/my-team/employees" | "/my-team/employees/[id]" | "/my-team/onboarding" | "/my-team/timesheets" | "/(auth)/signin";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/employee" | "/employee/details" | "/employee/employee" | "/employee/employee/my-details" | "/employee/finance" | "/employee/finance/banking" | "/my-team" | "/my-team/employees" | `/my-team/employees/${string}` & {} | "/my-team/onboarding" | "/my-team/timesheets" | "/signin";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/Access_Logo.png" | "/Access_Logo_Tagline.png" | "/auth-hero.jpg" | "/favicon.svg";