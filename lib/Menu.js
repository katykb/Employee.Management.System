class Menu {
  constructor(department, role, employee) {
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
}

module.exports = Menu;
