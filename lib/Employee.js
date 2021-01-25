// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');

// new employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

// creating new employee
const matt = new Employee("Matt", 123, "matt@email.com")

matt.getName();
matt.getId();
matt.getEmail();

// inquirer to enter new employee data through command line
// const employeeData = () => inquirer.prompt([
//     {
//         type: "input",
//         name: "name",
//         message: "What is the employee's name?"
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is the employee's ID number?"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is the employee's email?"
//     }
// ]);
// employeeData();

module.exports = Employee;