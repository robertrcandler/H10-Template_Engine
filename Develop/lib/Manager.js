// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//all jobs require employee as base
const Employee = require("./Employee");

class Manager {
    constructor(id,name,email,office_num) {
        Employee.id = id,
        Employee.name = name,
        Employee.email = email,
        this.office_num = office_num
    }
    getId() {return this.id}
    getName() {return this.name}
    getEmail() {return this.email}
    getOfficeNum() {return this.office_num}
    getJob() {return "Manager"}
}

module.exports = Manager;