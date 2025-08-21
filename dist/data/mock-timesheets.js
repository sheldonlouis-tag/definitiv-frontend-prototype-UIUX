/**
 * Generate mock timesheet data for testing and development
 */
export function generateMockTimesheets() {
    const employees = [
        { id: 1, name: 'Amanda Rex', number: '000600', department: 'Human Resources' },
        { id: 2, name: 'Sonia Sohail', number: '000601', department: 'Engineering' },
        { id: 3, name: 'Ping Le', number: '000602', department: 'Marketing' },
        { id: 4, name: 'Selina Kandiman', number: '000603', department: 'Sales' },
        { id: 5, name: 'Ranjeet Kaur', number: '000604', department: 'Finance' },
        { id: 6, name: 'Xiaoyan Feng', number: '000605', department: 'Operations' },
        { id: 7, name: 'Thuy Vinh', number: '000606', department: 'Customer Support' },
        { id: 8, name: 'Jeanne Kwee', number: '000607', department: 'Product Management' },
        { id: 9, name: 'Michael Smith', number: '000608', department: 'Engineering' },
        { id: 10, name: 'Sarah Johnson', number: '000609', department: 'Marketing' },
        { id: 11, name: 'David Williams', number: '000610', department: 'Sales' },
        { id: 12, name: 'Jennifer Brown', number: '000611', department: 'Finance' },
        { id: 13, name: 'Robert Jones', number: '000612', department: 'Operations' },
        { id: 14, name: 'Lisa Garcia', number: '000613', department: 'Human Resources' },
        { id: 15, name: 'James Miller', number: '000614', department: 'Engineering' }
    ];
    const statuses = ['Draft', 'Submitted', 'Approved', 'Rejected'];
    const timesheets = [];
    // Generate timesheets for the last 8 weeks
    for (let weekOffset = 0; weekOffset < 8; weekOffset++) {
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay() - (weekOffset * 7)); // Get Monday of the week
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekEnd.getDate() + 6); // Sunday of the same week
        // Generate timesheets for random employees each week
        const selectedEmployees = employees.slice(0, Math.floor(Math.random() * 10) + 5); // 5-15 employees per week
        selectedEmployees.forEach((employee, index) => {
            const regularHours = 35 + Math.floor(Math.random() * 10); // 35-44 hours
            const overtimeHours = Math.floor(Math.random() * 6); // 0-5 overtime hours
            const totalHours = regularHours + overtimeHours;
            const status = statuses[Math.floor(Math.random() * statuses.length)];
            const lastModified = new Date(weekStart);
            lastModified.setDate(lastModified.getDate() + Math.floor(Math.random() * 7));
            let submittedDate = null;
            let approvedDate = null;
            if (status === 'Submitted' || status === 'Approved' || status === 'Rejected') {
                submittedDate = new Date(lastModified);
                submittedDate.setHours(submittedDate.getHours() + Math.floor(Math.random() * 48));
            }
            if (status === 'Approved') {
                approvedDate = new Date(submittedDate || lastModified);
                approvedDate.setHours(approvedDate.getHours() + Math.floor(Math.random() * 24));
            }
            timesheets.push({
                id: (weekOffset * 20) + index + 1,
                employeeId: employee.id,
                employeeName: employee.name,
                employeeNumber: employee.number,
                weekStarting: weekStart,
                weekEnding: weekEnd,
                status,
                totalHours,
                regularHours,
                overtimeHours,
                department: employee.department,
                lastModified,
                submittedDate,
                approvedDate
            });
        });
    }
    return timesheets.sort((a, b) => b.weekStarting.getTime() - a.weekStarting.getTime());
}
/**
 * Pre-generated mock timesheets data
 */
export const mockTimesheets = generateMockTimesheets();
