// TODO: Write code to define and export the Employee class

//employee is the "base class" everything inherits this class then adds on to it
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.export = Employee;