// TODO: Write code to define and export the Employee class
//employee needs name, id, email, everyone is employee so only
//the shared stuff goes here
class Employee {
    constructor(id,name,email) {
        this.id = id,
        this.name = name,
        this.email = email
    }
    getId() {return this.id}
    getName() {return this.name}
    getEmail() {return this.email}
    //current job not specified so returns employee if not 
    //specified later
    getJob() {return "Employee"}
};

module.exports = Employee;