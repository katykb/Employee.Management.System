const Menu = require ('./Menu');


class department extends Menu {
    constructor (department, role, employee, departmentName) {
        super (department, role, employee);
        this.departmentName = departmentName;
    }
        getDepartment() {
        return 'Department';
    }
    getDepartmentName() {
        return this.departmentName;
    };
    };
   
        module.exports = Department;