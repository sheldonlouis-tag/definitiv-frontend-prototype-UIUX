export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22')
];

export const server_loads = [];

export const dictionary = {
		"/": [4],
		"/admin/payroll": [6],
		"/admin/payroll/accrual-types": [7],
		"/admin/payroll/pay-items": [8],
		"/employee/cost-centers": [9,[3]],
		"/employee/cost-centers/projects": [10,[3]],
		"/employee/details": [11,[3]],
		"/employee/employee": [12,[3]],
		"/employee/employee/my-details": [13,[3]],
		"/employee/finance": [14,[3]],
		"/employee/finance/banking": [15,[3]],
		"/employee/financial": [16,[3]],
		"/employee/financial/bank-accounts": [17,[3]],
		"/employee/leave": [18,[3]],
		"/my-team/employees": [19],
		"/my-team/employees/[id]": [20],
		"/my-team/onboarding": [21],
		"/my-team/timesheets": [22],
		"/(auth)/signin": [5,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';