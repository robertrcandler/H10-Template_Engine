// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//all jobs require employee as base
const Employee = require("./Employee");

class Engineer {
    constructor(id,name,email,Github) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.Github = Github
    }
    getId() {return this.id}
    getName() {return this.name}
    getEmail() {return this.email}
    getGithub() {return this.Github}
    getRole() {return "Engineer"}
}

module.exports = Engineer;