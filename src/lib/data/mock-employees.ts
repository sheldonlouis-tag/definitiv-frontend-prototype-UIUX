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
export function generateMockEmployees(): Employee[] {
	const firstNames = [
		'Amanda', 'Sonia', 'Ping', 'Selina', 'Ranjeet', 'Xiaoyan', 'Thuy', 'Jeanne',
		'Michael', 'Sarah', 'David', 'Jennifer', 'Robert', 'Lisa', 'James', 'Michelle',
		'John', 'Jessica', 'William', 'Ashley', 'Richard', 'Amanda', 'Joseph', 'Stephanie',
		'Thomas', 'Nicole', 'Christopher', 'Elizabeth', 'Charles', 'Helen', 'Daniel', 'Deborah',
		'Matthew', 'Rachel', 'Anthony', 'Carolyn', 'Mark', 'Janet', 'Donald', 'Catherine',
		'Steven', 'Maria', 'Paul', 'Heather', 'Andrew', 'Diane', 'Joshua', 'Ruth',
		'Kenneth', 'Julie', 'Kevin', 'Joyce', 'Brian', 'Virginia', 'George', 'Victoria',
		'Timothy', 'Kelly', 'Ronald', 'Christine', 'Jason', 'Joan', 'Edward', 'Evelyn',
		'Jeffrey', 'Lauren', 'Ryan', 'Judith', 'Jacob', 'Megan', 'Gary', 'Cheryl',
		'Nicholas', 'Andrea', 'Eric', 'Jacqueline', 'Jonathan', 'Martha', 'Stephen', 'Frances',
		'Larry', 'Gloria', 'Justin', 'Ann', 'Scott', 'Teresa', 'Brandon', 'Kathryn',
		'Benjamin', 'Sandra', 'Gregory', 'Donna', 'Frank', 'Dorothy', 'Raymond', 'Sharon',
		'Samuel', 'Nancy', 'Patrick', 'Karen', 'Alexander', 'Betty', 'Jack', 'Helen',
		'Dennis', 'Deborah', 'Jerry', 'Laura', 'Tyler', 'Lisa', 'Aaron', 'Michelle'
	];

	const lastNames = [
		'Rex', 'Sohail', 'Le', 'Kandiman', 'Kaur', 'Feng', 'Vinh', 'To Choon Kwee',
		'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
		'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas',
		'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White',
		'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young',
		'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
		'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell',
		'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker',
		'Cruz', 'Edwards', 'Collins', 'Reyes', 'Stewart', 'Morris', 'Morales', 'Murphy',
		'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan', 'Cooper', 'Peterson', 'Bailey',
		'Reed', 'Kelly', 'Howard', 'Ramos', 'Kim', 'Cox', 'Ward', 'Torres',
		'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders',
		'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins'
	];

	const employmentStatuses = ['Full Time', 'Part Time', 'Contract', 'Temporary'];
	const genders = ['Female', 'Male', 'Non-binary'];
	const departments = ['Human Resources', 'Engineering', 'Marketing', 'Sales', 'Finance', 'Operations', 'Customer Support', 'Product Management'];
	const positions = ['Manager', 'Senior Developer', 'Marketing Specialist', 'Sales Representative', 'Accountant', 'Operations Coordinator', 'Support Specialist', 'Product Manager'];

	const employees: Employee[] = [];
	
	for (let i = 0; i < 100; i++) {
		const firstName = firstNames[i % firstNames.length];
		const lastName = lastNames[i % lastNames.length];
		const employeeNumber = String(600 + i).padStart(6, '0');
		
		// Generate random dates
		const birthYear = 1950 + Math.floor(Math.random() * 50);
		const birthMonth = Math.floor(Math.random() * 12) + 1;
		const birthDay = Math.floor(Math.random() * 28) + 1;
		const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
		
		const hireYear = 2010 + Math.floor(Math.random() * 14);
		const hireMonth = Math.floor(Math.random() * 12) + 1;
		const hireDay = Math.floor(Math.random() * 28) + 1;
		const hireDate = new Date(hireYear, hireMonth - 1, hireDay);
		
		const age = new Date().getFullYear() - birthYear;
		
		const department = departments[Math.floor(Math.random() * departments.length)];
		const position = positions[Math.floor(Math.random() * positions.length)];
		const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`;
		const phone = `+1 (555) ${String(Math.floor(Math.random() * 900) + 100)}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
		const salary = `$${String(Math.floor(Math.random() * 100) + 50)},${String(Math.floor(Math.random() * 900) + 100)}`;
		const address = `${Math.floor(Math.random() * 9999) + 1} ${['Main', 'Oak', 'Pine', 'Elm', 'Cedar', 'Maple', 'Birch', 'Willow'][Math.floor(Math.random() * 8)]} Street, ${['City', 'Town', 'Village'][Math.floor(Math.random() * 3)]}, ${['State', 'Province'][Math.floor(Math.random() * 2)]} ${String(Math.floor(Math.random() * 90000) + 10000)}`;

		employees.push({
			id: i + 1,
			employeeNumber,
			firstName,
			lastName,
			employmentStatus: employmentStatuses[Math.floor(Math.random() * employmentStatuses.length)],
			dateOfBirth: birthDate,
			age,
			gender: genders[Math.floor(Math.random() * genders.length)],
			hiredDate: hireDate,
			terminationDate: null, // Most employees are active
			avatar: `https://i.pravatar.cc/150?img=${i + 1}`, // Generate unique avatars
			email,
			phone,
			department,
			position,
			salary,
			address
		});
	}

	return employees;
}

/**
 * Pre-generated mock employees data
 */
export const mockEmployees = generateMockEmployees();
