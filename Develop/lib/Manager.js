// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//all jobs require employee as base
const Employee = require("./Employee");

class Manager {
    constructor(id,name,email,OfficeNumber) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.OfficeNumber = OfficeNumber
    }
    getId() {return this.id}
    getName() {return this.name}
    getEmail() {return this.email}
    getOfficeNumber() {return this.OfficeNumber}
    getRole() {return "Manager"}
}

module.exports = Manager;