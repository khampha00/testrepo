const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      { id: 4, name: 'Charlie Brown', age: 32, department: 'IT', salary: 55000 },
      { id: 5, name: 'Diana Prince', age: 29, department: 'HR', salary: 48000 },
      { id: 6, name: 'Ethan Hunt', age: 40, department: 'Finance', salary: 70000 },
      { id: 7, name: 'Fiona Gallagher', age: 27, department: 'IT', salary: 52000 },
      { id: 8, name: 'George Costanza', age: 33, department: 'HR', salary: 46000 },
      { id: 9, name: 'Hannah Baker', age: 31, department: 'Finance', salary: 62000 },
      { id: 10, name: 'Ian Malcolm', age: 38, department: 'IT', salary: 58000 },
      //... More employee records can be added here
    ];

 // Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
  
function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }

function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
       }
   }

