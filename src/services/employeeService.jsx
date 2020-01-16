import ReadData from "./readData";

const Employees = ReadData();

export function getEmployees() {
  return Employees;
}

export function getEmployee(id) {
  return Employees.find(m => m.id === id);
}

export function saveEmployee(employee) {
  let employeeInDb = Employees.find(m => m.id === employee.id) || {};
  employeeInDb.first_name = employee.first_name;
  employeeInDb.last_name = employee.last_name;
  employeeInDb.gender = employee.gender;
  employeeInDb.email = employee.email;
  employeeInDb.status = JSON.parse(employee.status);

  if (!employeeInDb.id) {
    const maxID =
      Math.max.apply(
        Math,
        Employees.map(function(e) {
          return e.id;
        })
      ) + 1;
    employeeInDb.id = maxID;
    Employees.push(employeeInDb);
  }

  return employeeInDb;
}

export function deleteEmployee(id) {
  let employeeInDb = Employees.find(m => m.id === id);
  Employees.splice(Employees.indexOf(employeeInDb), 1);
  return employeeInDb;
}
