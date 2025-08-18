const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Software Development' },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'java developer' },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Financial Analysis' },
  { id: 4, name: 'Charlie Brown', age: 32, department: 'IT', salary: 55000, specialization: 'Data Science' },
  { id: 5, name: 'Diana Prince', age: 29, department: 'HR', salary: 48000, specialization: 'Recruitment' },
  { id: 6, name: 'Ethan Hunt', age: 40, department: 'Finance', salary: 70000, specialization: 'Investment Banking' },
  { id: 7, name: 'Fiona Gallagher', age: 27, department: 'IT', salary: 52000, specialization: 'Web Development' },
  { id: 8, name: 'George Costanza', age: 33, department: 'HR', salary: 46000, specialization: 'Employee Relations' },
  { id: 9, name: 'Hannah Baker', age: 31, department: 'Finance', salary: 62000, specialization: 'Accounting' },
  { id: 10, name: 'Ian Malcolm', age: 38, department: 'IT', salary: 58000, specialization: 'Cybersecurity' },
];

// simplified template function
function renderEmployees(list) {
  return list.map(e => `<p>${e.id}: ${e.name} - ${e.department} - $${e.salary}</p>`).join('');
}

// display all employees (used by the button)
function displayEmployees() {
  document.getElementById('employeesDetails').innerHTML = renderEmployees(employees);
}

// initial render
displayEmployees();

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
  alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
  const hrEmployees = employees.filter(employee => employee.department === 'HR');
  document.getElementById('employeesDetails').innerHTML = renderEmployees(hrEmployees);
}

function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(employee => employee.id === employeeId);
  if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
  }
}

function displayITEmployees() {
  const itEmployees = employees.filter(employee => employee.department === 'IT');
  // fixed id to 'employeesDetails'
  document.getElementById('employeesDetails').innerHTML = renderEmployees(itEmployees);
}
