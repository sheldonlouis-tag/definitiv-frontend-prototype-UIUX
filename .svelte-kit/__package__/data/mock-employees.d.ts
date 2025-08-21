export interface Employee {
    id: number;
    employeeNumber: string;
    firstName: string;
    lastName: string;
    employmentStatus: string;
    dateOfBirth: Date;
    age: number;
    gender: string;
    hiredDate: Date;
    terminationDate: Date | null;
    avatar: string;
    email: string;
    phone: string;
    department: string;
    position: string;
    salary: string;
    address: string;
}
/**
 * Generate mock employee data for testing and development
 */
export declare function generateMockEmployees(): Employee[];
/**
 * Pre-generated mock employees data
 */
export declare const mockEmployees: Employee[];
