type DynamicRoutes = {
	"/my-team/employees/[id]": { id: string }
};

type Layouts = {
	"/(auth)": undefined;
	"/": { id?: string };
	"/admin": undefined;
	"/admin/payroll": undefined;
	"/admin/payroll/accrual-types": undefined;
	"/admin/payroll/pay-calendars": undefined;
	"/admin/payroll/pay-items": undefined;
	"/employee": undefined;
	"/employee/cost-centers": undefined;
	"/employee/cost-centers/projects": undefined;
	"/employee/details": undefined;
	"/employee/employee": undefined;
	"/employee/employee/my-details": undefined;
	"/employee/finance": undefined;
	"/employee/finance/banking": undefined;
	"/employee/financial": undefined;
	"/employee/financial/bank-accounts": undefined;
	"/employee/leave": undefined;
	"/my-team": { id?: string };
	"/my-team/employees": { id?: string };
	"/my-team/employees/[id]": { id: string };
	"/my-team/onboarding": undefined;
	"/my-team/timesheets": undefined;
	"/(auth)/signin": undefined
};

export type RouteId = "/(auth)" | "/" | "/admin" | "/admin/payroll" | "/admin/payroll/accrual-types" | "/admin/payroll/pay-calendars" | "/admin/payroll/pay-items" | "/employee" | "/employee/cost-centers" | "/employee/cost-centers/projects" | "/employee/details" | "/employee/employee" | "/employee/employee/my-details" | "/employee/finance" | "/employee/finance/banking" | "/employee/financial" | "/employee/financial/bank-accounts" | "/employee/leave" | "/my-team" | "/my-team/employees" | "/my-team/employees/[id]" | "/my-team/onboarding" | "/my-team/timesheets" | "/(auth)/signin";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/admin" | "/admin/payroll" | "/admin/payroll/accrual-types" | "/admin/payroll/pay-calendars" | "/admin/payroll/pay-items" | "/employee" | "/employee/cost-centers" | "/employee/cost-centers/projects" | "/employee/details" | "/employee/employee" | "/employee/employee/my-details" | "/employee/finance" | "/employee/finance/banking" | "/employee/financial" | "/employee/financial/bank-accounts" | "/employee/leave" | "/my-team" | "/my-team/employees" | `/my-team/employees/${string}` & {} | "/my-team/onboarding" | "/my-team/timesheets" | "/signin";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/Access_Logo.png" | "/Access_Logo_Tagline.png" | "/auth-hero.jpg" | "/favicon.svg";