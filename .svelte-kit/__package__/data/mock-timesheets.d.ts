export interface Timesheet {
    id: number;
    employeeId: number;
    employeeName: string;
    employeeNumber: string;
    weekStarting: Date;
    weekEnding: Date;
    status: 'Draft' | 'Submitted' | 'Approved' | 'Rejected';
    totalHours: number;
    regularHours: number;
    overtimeHours: number;
    department: string;
    lastModified: Date;
    submittedDate: Date | null;
    approvedDate: Date | null;
}
/**
 * Generate mock timesheet data for testing and development
 */
export declare function generateMockTimesheets(): Timesheet[];
/**
 * Pre-generated mock timesheets data
 */
export declare const mockTimesheets: Timesheet[];
