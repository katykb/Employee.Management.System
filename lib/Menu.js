class Menu {
  constructor(department, role, employee, salary) {
    this.department = department;
    this.role = role;
    this.employee = employee;
    
  }
  getDepartment() {
    return this.department;
  }
  getRole() {
    return this.role;
  }
  getEmployee() {
    return this.employee;
  }

  getSalary() {
    return this.salary;
  }
}

module.exports = Menu;
