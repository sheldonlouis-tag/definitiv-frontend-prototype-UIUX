import type { SidebarConfig } from '$lib/components/layout/sidebar-types.js';
import { authActions } from '$lib/stores/auth.js';
import { goto } from '$app/navigation';
import HomeIcon from '@lucide/svelte/icons/home';
import SettingsIcon from '@lucide/svelte/icons/settings';
import UsersIcon from '@lucide/svelte/icons/users';
import FileTextIcon from '@lucide/svelte/icons/file-text';
import BarChart3Icon from '@lucide/svelte/icons/bar-chart-3';
import LogOutIcon from '@lucide/svelte/icons/log-out';
import UserIcon from '@lucide/svelte/icons/user';
import BellIcon from '@lucide/svelte/icons/bell';
import CalendarIcon from '@lucide/svelte/icons/calendar';
import DollarSignIcon from '@lucide/svelte/icons/dollar-sign';
import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
import MegaphoneIcon from '@lucide/svelte/icons/megaphone';
import ShieldIcon from '@lucide/svelte/icons/shield';
import Users2Icon from '@lucide/svelte/icons/users-2';
import KeyIcon from '@lucide/svelte/icons/key';
import PaletteIcon from '@lucide/svelte/icons/palette';
import SmartphoneIcon from '@lucide/svelte/icons/smartphone';
import UserCheckIcon from '@lucide/svelte/icons/user-check';
import UserCogIcon from '@lucide/svelte/icons/user-cog';
import ClockIcon from '@lucide/svelte/icons/clock';
import CogIcon from '@lucide/svelte/icons/cog';
import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
import IdCardIcon from '@lucide/svelte/icons/id-card';
import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
import FolderIcon from '@lucide/svelte/icons/folder';
import SettingsIcon2 from '@lucide/svelte/icons/settings-2';
import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';
import FileIcon from '@lucide/svelte/icons/file';
import WrenchIcon from '@lucide/svelte/icons/wrench';
import MapPinIcon from '@lucide/svelte/icons/map-pin';
import FolderTreeIcon from '@lucide/svelte/icons/folder-tree';
import UserCog2Icon from '@lucide/svelte/icons/user-cog-2';
import BuildingIcon from '@lucide/svelte/icons/building';
import CreditCardIcon from '@lucide/svelte/icons/credit-card';
import ReceiptIcon from '@lucide/svelte/icons/receipt';
import PiggyBankIcon from '@lucide/svelte/icons/piggy-bank';
import CalculatorIcon from '@lucide/svelte/icons/calculator';
import PlusCircleIcon from '@lucide/svelte/icons/plus-circle';
import FileSpreadsheetIcon from '@lucide/svelte/icons/file-spreadsheet';
import ScrollTextIcon from '@lucide/svelte/icons/scroll-text';
import CoinsIcon from '@lucide/svelte/icons/coins';
import GiftIcon from '@lucide/svelte/icons/gift';
import HistoryIcon from '@lucide/svelte/icons/history';
import SendIcon from '@lucide/svelte/icons/send';
import CheckSquareIcon from '@lucide/svelte/icons/check-square';
import CheckCircleIcon from '@lucide/svelte/icons/check-circle';
import ClipboardListIcon from '@lucide/svelte/icons/clipboard-list';
import ShieldAlertIcon from '@lucide/svelte/icons/shield-alert';
import ClockIcon2 from '@lucide/svelte/icons/clock-2';
import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
import DatabaseIcon from '@lucide/svelte/icons/database';
import ClockIcon3 from '@lucide/svelte/icons/clock-3';
import BriefcaseWorkIcon from '@lucide/svelte/icons/briefcase';
import ScrollIcon from '@lucide/svelte/icons/scroll';

/**
 * Level 3 navigation data for Reporting section
 */
export const reportingLevel3Menu = {
	employeeReporting: [
		{ label: 'Employee Listing', icon: UsersIcon, href: '/reporting/employee-reporting/employee-listing' },
		{ label: 'Employee Role Assignments', icon: UserCogIcon, href: '/reporting/employee-reporting/role-assignments' },
		{ label: 'Compliance Records', icon: ShieldCheckIcon, href: '/reporting/employee-reporting/compliance-records' },
		{ label: 'Tax Declarations', icon: CalculatorIcon, href: '/reporting/employee-reporting/tax-declarations' },
		{ label: 'Additions & Deductions', icon: PlusCircleIcon, href: '/reporting/employee-reporting/additions-deductions' },
		{ label: 'Pay Policies', icon: ScrollTextIcon, href: '/reporting/employee-reporting/pay-policies' },
		{ label: 'Superannuation', icon: PiggyBankIcon, href: '/reporting/employee-reporting/superannuation' },
		{ label: 'Emergency Contacts', icon: UserCheckIcon, href: '/reporting/employee-reporting/emergency-contacts' },
		{ label: 'Documents', icon: FileIcon, href: '/reporting/employee-reporting/documents' },
		{ label: 'Compliance Requirements', icon: ShieldAlertIcon, href: '/reporting/employee-reporting/compliance-requirements' },
		{ label: 'Work Restrictions Policies', icon: ShieldIcon, href: '/reporting/employee-reporting/work-restrictions-policies' },
		{ label: 'Cost Splitting', icon: CoinsIcon, href: '/reporting/employee-reporting/cost-splitting' },
		{ label: 'Asset Assignment', icon: WrenchIcon, href: '/reporting/employee-reporting/asset-assignment' },
		{ label: 'Pay Methods Summary', icon: CreditCardIcon, href: '/reporting/employee-reporting/pay-methods-summary' },
		{ label: 'Entitlements', icon: GiftIcon, href: '/reporting/employee-reporting/entitlements' },
		{ label: 'General Ledger', icon: FileSpreadsheetIcon, href: '/reporting/employee-reporting/general-ledger' },
		{ label: 'Audit Summary', icon: ClipboardListIcon, href: '/reporting/employee-reporting/audit-summary' },
		{ label: 'Roster by Employee', icon: CalendarIcon, href: '/reporting/employee-reporting/roster-by-employee' },
		{ label: 'Roster by Role', icon: BriefcaseIcon, href: '/reporting/employee-reporting/roster-by-role' }
	],
	payrollReporting: [
		{ label: 'Payroll Summary', icon: BarChart3Icon, href: '/reporting/payroll-reporting/summary' },
		{ label: 'Payroll Details', icon: FileTextIcon, href: '/reporting/payroll-reporting/details' }
	],
	leaveReporting: [
		{ label: 'Leave Summary', icon: BarChart3Icon, href: '/reporting/leave-reporting/summary' },
		{ label: 'Leave Details', icon: FileTextIcon, href: '/reporting/leave-reporting/details' }
	],
	accrualReporting: [
		{ label: 'Accrual Summary', icon: BarChart3Icon, href: '/reporting/accrual-reporting/summary' },
		{ label: 'Accrual Details', icon: FileTextIcon, href: '/reporting/accrual-reporting/details' }
	],
	timeAttendanceReporting: [
		{ label: 'Attendance Summary', icon: BarChart3Icon, href: '/reporting/time-attendance-reporting/summary' },
		{ label: 'Attendance Details', icon: FileTextIcon, href: '/reporting/time-attendance-reporting/details' }
	],
	timeClockReporting: [
		{ label: 'TimeClock Summary', icon: BarChart3Icon, href: '/reporting/timeclock-reporting/summary' },
		{ label: 'TimeClock Details', icon: FileTextIcon, href: '/reporting/timeclock-reporting/details' }
	],
	rosteringReporting: [
		{ label: 'Rostering Summary', icon: BarChart3Icon, href: '/reporting/rostering-reporting/summary' },
		{ label: 'Rostering Details', icon: FileTextIcon, href: '/reporting/rostering-reporting/details' }
	],
	companyReporting: [
		{ label: 'Company Summary', icon: BarChart3Icon, href: '/reporting/company-reporting/summary' },
		{ label: 'Company Details', icon: FileTextIcon, href: '/reporting/company-reporting/details' }
	],
	pdfReporting: [
		{ label: 'Generate PDF Reports', icon: FileSpreadsheetIcon, href: '/reporting/pdf-reporting/generate' },
		{ label: 'PDF Templates', icon: FileTextIcon, href: '/reporting/pdf-reporting/templates' }
	]
};

/**
 * Level 3 navigation data for Employee section
 */
export const employeeLevel3Menu = [
	{ label: 'My Details', icon: IdCardIcon, href: '/employee/employee/my-details' },
	{ label: 'Work Schedules', icon: CalendarIcon, href: '/employee/employee/work-schedules' },
	{ label: 'Documents', icon: FolderIcon, href: '/employee/employee/documents' },
	{ label: 'Custom Fields', icon: SettingsIcon2, href: '/employee/employee/custom-fields' },
	{ label: 'Work Restrictions', icon: ShieldCheckIcon, href: '/employee/employee/work-restrictions' },
	{ label: 'Compliance Records', icon: FileIcon, href: '/employee/employee/compliance-records' },
	{ label: 'Plant & Equipment', icon: WrenchIcon, href: '/employee/employee/plant-equipment' },
	{ label: 'Availability', icon: ClockIcon, href: '/employee/employee/availability' },
	{ label: 'Positions', icon: MapPinIcon, href: '/employee/employee/positions' }
];

/**
 * Level 3 navigation data for Pending Actions section
 */
export const pendingActionsLevel3Menu = [
	{ label: 'Timesheet Approvals', icon: CheckSquareIcon, href: '/pending-actions/timesheet-approvals' },
	{ label: 'Leave Approvals', icon: CheckCircleIcon, href: '/pending-actions/leave-approvals' },
	{ label: 'Pending Rosters', icon: ClipboardListIcon, href: '/pending-actions/pending-rosters' },
	{ label: 'Compliance Records', icon: ShieldAlertIcon, href: '/pending-actions/compliance-records' },
	{ label: 'Shift Offers', icon: ClockIcon2, href: '/pending-actions/shift-offers' }
];

/**
 * Level 3 navigation data for Leave section
 */
export const leaveLevel3Menu = [
	{ label: 'Leave Policies', icon: ScrollTextIcon, href: '/employee/leave/leave-policies' },
	{ label: 'Accrual Balances', icon: CoinsIcon, href: '/employee/leave/accrual-balances' },
	{ label: 'Accrual Entitlements', icon: GiftIcon, href: '/employee/leave/accrual-entitlements' },
	{ label: 'Accrual History', icon: HistoryIcon, href: '/employee/leave/accrual-history' },
	{ label: 'Leave Submission', icon: SendIcon, href: '/employee/leave/leave-submission' }
];

/**
 * Level 3 navigation data for Financial section
 */
export const financialLevel3Menu = [
	{ label: 'Bank Accounts', icon: CreditCardIcon, href: '/employee/financial/bank-accounts' },
	{ label: 'Tax Information', icon: CalculatorIcon, href: '/employee/financial/tax-information' },
	{ label: 'Superannuation', icon: PiggyBankIcon, href: '/employee/financial/superannuation' },
	{ label: 'Payroll', icon: DollarSignIcon, href: '/employee/financial/payroll' },
	{ label: 'Additions & Deductions', icon: PlusCircleIcon, href: '/employee/financial/additions-deductions' },
	{ label: 'Payslips', icon: ReceiptIcon, href: '/employee/financial/payslips' },
	{ label: 'Annual Statements', icon: FileSpreadsheetIcon, href: '/employee/financial/annual-statements' }
];

/**
 * Level 3 navigation data for Admin Cost Centers section
 */
export const adminCostCentersLevel3Menu = [
	{ label: 'Projects', icon: FolderTreeIcon, href: '/admin/cost-centers/projects' },
	{ label: 'Roles', icon: UserCog2Icon, href: '/admin/cost-centers/roles' },
	{ label: 'Locations', icon: MapPinIcon, href: '/admin/cost-centers/locations' },
	{ label: 'Departments', icon: BuildingIcon, href: '/admin/cost-centers/departments' }
];

/**
 * Level 3 navigation data for Cost Centers section
 */
export const costCentersLevel3Menu = [
	{ label: 'Projects', icon: FolderTreeIcon, href: '/employee/cost-centers/projects' },
	{ label: 'Roles', icon: UserCog2Icon, href: '/employee/cost-centers/roles' },
	{ label: 'Locations', icon: MapPinIcon, href: '/employee/cost-centers/locations' },
	{ label: 'Departments', icon: BuildingIcon, href: '/employee/cost-centers/departments' }
];

/**
 * Settings context menu items
 */
export const settingsContextMenu = [
	{ label: 'API Key', icon: KeyIcon, href: '/settings/api-key' },
	{ label: 'Branding', icon: PaletteIcon, href: '/settings/branding' },
	{ label: 'Teams', icon: Users2Icon, href: '/settings/teams' },
	{ label: 'TimeClock Device Listing', icon: SmartphoneIcon, href: '/settings/timeclock-devices' },
	{ label: 'User Listing', icon: UserCheckIcon, href: '/settings/user-listing' },
	{ label: 'User Roles', icon: UserCogIcon, href: '/settings/user-roles' },
	{ label: 'Application Settings', icon: CogIcon, href: '/settings/application' },
	{ label: 'Terms and Conditions', icon: FileTextIcon, href: '/settings/terms' },
	{ label: 'Log out', icon: LogOutIcon, onclick: handleSignOut }
];

/**
 * Sign out handler - navigates to sign in page after clearing auth
 */
async function handleSignOut() {
	authActions.signOut();
	await goto('/signin');
}

/**
 * Main application sidebar configuration for employee hub
 */
export const sidebarConfig: SidebarConfig = {
	content: {
		items: [
			{
				label: 'Employee Hub',
				icon: UserIcon,
				tooltipContent: 'Employee Hub',
				isActive: true,
				subItems: [
					{ label: 'Employee', href: '/employee/employee', hasLevel3: true },
					{ label: 'Cost Centers', href: '/employee/cost-centers', hasLevel3: true },
					{ label: 'Financial', href: '/employee/financial', hasLevel3: true },
					{ label: 'Leave', href: '/employee/leave', hasLevel3: true }
				]
			},
			{
				label: 'Admin',
				icon: SettingsIcon2,
				tooltipContent: 'Administration',
				subItems: [
					{ 
						label: 'Cost Centers', 
						href: '/admin/cost-centers',
						hasLevel3: true
					},
					{ label: 'Organisation', href: '/admin/organisation' },
					{ label: 'Data Import/Export', href: '/admin/data-import-export' },
					{ label: 'Time & Attendance', href: '/admin/time-attendance' },
					{ label: 'Payroll', href: '/admin/payroll' },
					{ label: 'Employment', href: '/admin/employment' },
					{ label: 'Policies', href: '/admin/policies' },
					{ label: 'Announcements', href: '/admin/announcements' }
				]
			},
			{
				label: 'Team Hub',
				icon: Users2Icon,
				tooltipContent: 'Team Management',
				subItems: [
					{ 
						label: 'Dashboard', 
						href: '/team-hub/dashboard'
					},
					{
						label: 'My Team',
						href: '/team-hub/my-team'
					},
					{
						label: 'Leave Calendar',
						href: '/team-hub/leave-calendar'
					},
					{
						label: 'Team Timesheets',
						href: '/team-hub/team-timesheets'
					},
					{
						label: 'Team Variance',
						href: '/team-hub/team-variance'
					},
					{
						label: 'Team Compliance',
						href: '/team-hub/team-compliance'
					},
					{
						label: 'Team Availability',
						href: '/team-hub/team-availability'
					},
					{
						label: 'Onboarding',
						href: '/team-hub/onboarding'
					}
				]
			},
			{
				label: 'Rostering',
				icon: CalendarIcon,
				tooltipContent: 'Rostering',
				subItems: [
					{ 
						label: 'Rostering', 
						href: '/rostering/rostering'
					},
					{
						label: 'Team Rosters',
						href: '/rostering/team-rosters'
					},
					{
						label: 'Team Roster Templates',
						href: '/rostering/team-roster-templates'
					},
					{
						label: 'Roster Vacancies',
						href: '/rostering/roster-vacancies'
					}
				]
			},
			{
				label: 'Payroll',
				icon: DollarSignIcon,
				tooltipContent: 'Payroll Management',
				subItems: [
					{ 
						label: 'Pay Run', 
						href: '/payroll/pay-run'
					},
					{
						label: 'STP Update Event',
						href: '/payroll/stp-update-event'
					},
					{
						label: 'STP Audit',
						href: '/payroll/stp-audit'
					},
					{
						label: 'Superannuation',
						href: '/payroll/superannuation'
					},
					{
						label: '3rd Party Payment',
						href: '/payroll/3rd-party-payment'
					},
					{
						label: 'Accrual Cash Out',
						href: '/payroll/accrual-cash-out'
					},
					{
						label: 'Update Accrual Liability',
						href: '/payroll/update-accrual-liability'
					},
					{
						label: 'End of Year',
						href: '/payroll/end-of-year'
					}
				]
			},
			{
				label: 'Reporting',
				icon: TrendingUpIcon,
				tooltipContent: 'Reports and Analytics',
				subItems: [
					{ label: 'Employee Reporting', href: '/reporting/employee-reporting', hasLevel3: true },
					{ label: 'Payroll Reporting', href: '/reporting/payroll-reporting', hasLevel3: true },
					{ label: 'Leave Reporting', href: '/reporting/leave-reporting', hasLevel3: true },
					{ label: 'Accrual Reporting', href: '/reporting/accrual-reporting', hasLevel3: true },
					{ label: 'Time Attendance Reporting', href: '/reporting/time-attendance-reporting', hasLevel3: true },
					{ label: 'TimeClock Reporting', href: '/reporting/timeclock-reporting', hasLevel3: true },
					{ label: 'Rostering Reporting', href: '/reporting/rostering-reporting', hasLevel3: true },
					{ label: 'Company Reporting', href: '/reporting/company-reporting', hasLevel3: true },
					{ label: 'PDF Reporting', href: '/reporting/pdf-reporting', hasLevel3: true }
				]
			},
			{
				label: 'Pending Actions',
				icon: ClockIcon,
				tooltipContent: 'Pending Actions',
				hasNotification: true,
				notificationCount: 1,
				subItems: [
					{ label: 'Timesheet Approvals', href: '/pending-actions/timesheet-approvals' },
					{ label: 'Leave Approvals', href: '/pending-actions/leave-approvals' },
					{ label: 'Pending Rosters', href: '/pending-actions/pending-rosters' },
					{ label: 'Compliance Records', href: '/pending-actions/compliance-records' },
					{ label: 'Shift Offers', href: '/pending-actions/shift-offers' }
				]
			}
		]
	},
	footer: {
		items: [
			{
				label: 'Settings',
				icon: SettingsIcon,
				tooltipContent: 'Settings',
				hasContextMenu: true
			}
		]
	}
};

/**
 * Admin sidebar configuration with additional management options
 */
export const adminSidebarConfig: SidebarConfig = {
	content: {
		items: [
			{
				label: 'Admin Dashboard',
				icon: BarChart3Icon,
				tooltipContent: 'Admin Dashboard',
				href: '/admin/dashboard',
				isActive: true
			},
			{
				label: 'User Management',
				icon: UsersIcon,
				tooltipContent: 'Manage Users',
				subItems: [
					{ label: 'All Users', href: '/admin/users' },
					{ label: 'Roles & Permissions', href: '/admin/roles' },
					{ label: 'Access Control', href: '/admin/access' }
				]
			},
			{
				label: 'System',
				icon: SettingsIcon,
				tooltipContent: 'System Management',
				subItems: [
					{ label: 'Configuration', href: '/admin/config' },
					{ label: 'Logs', href: '/admin/logs' },
					{ label: 'Monitoring', href: '/admin/monitoring' }
				]
			}
		]
	},
	footer: {
		items: [
			{
				label: 'Settings',
				icon: SettingsIcon,
				tooltipContent: 'Admin Settings',
				href: '/admin/settings'
			},
			{
				label: 'Sign Out',
				icon: LogOutIcon,
				tooltipContent: 'Sign Out',
				onclick: handleSignOut
			}
		]
	}
};

/**
 * Manager sidebar configuration with team-focused options
 */
export const managerSidebarConfig: SidebarConfig = {
	content: {
		items: [
			{
				label: 'Team Overview',
				icon: HomeIcon,
				tooltipContent: 'Team Overview',
				href: '/manager/overview',
				isActive: true
			},
			{
				label: 'My Team',
				icon: UsersIcon,
				tooltipContent: 'Team Management',
				subItems: [
					{ label: 'Team Members', href: '/manager/team' },
					{ label: 'Performance', href: '/manager/performance' },
					{ label: 'Leave Requests', href: '/manager/leave-requests' }
				]
			},
			{
				label: 'Reports',
				icon: FileTextIcon,
				tooltipContent: 'Team Reports',
				subItems: [
					{ label: 'Attendance', href: '/manager/reports/attendance' },
					{ label: 'Performance', href: '/manager/reports/performance' }
				]
			}
		]
	},
	footer: {
		items: [
			{
				label: 'Settings',
				icon: SettingsIcon,
				tooltipContent: 'Settings',
				href: '/manager/settings'
			},
			{
				label: 'Sign Out',
				icon: LogOutIcon,
				tooltipContent: 'Sign Out',
				onclick: handleSignOut
			}
		]
	}
};
