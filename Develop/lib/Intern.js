// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

//all jobs require employee as base
const Employee = require("./Employee");

class Intern {
    constructor(id,name,email,School) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.School = School
    }
    getId() {return this.id}
    getName() {return this.name}
    getEmail() {return this.email}
    getSchool() {return this.School}
    getRole() {return "Intern"}
}

module.exports = Intern;