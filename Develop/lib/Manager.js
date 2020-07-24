// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// import base class to add on to
const Manager = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.export = Manager;