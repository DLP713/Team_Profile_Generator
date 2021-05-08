// Imports employee class
const Employee = require('./Employee');

// Creates Manager Class with Employee data
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){

    }
}

// Exports Manager class
module.exports = Manager;

/**
 * if the user wants to create a manager 
 *  new Manager()
 * if the user wants to create an engineer
 *  new Engineer()
 * 
 */