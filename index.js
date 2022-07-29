const mysql = require('mysql2');
const inquirer = require('inquirer');
const conTable = require('console.table')
const path = require('path')

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"password",
    database: "employeeData_db"
}, 
console.log('succesfully connected to employeeData_db')
);


const options = ["View All Employees", "Add Employee", "Add Department", "Add Role"]




addEmp = () => {
    inquirer.prompt([
        {
           type: 'input',
           name: 'empFirst',
           message: 'Please Enter the Employees First name',

        },
        {
        type: 'input',
        name: 'empLast',
        message: 'Please Enter the Employees Last name',
        },
        {
            type: 'input',
            name: 'empRole',
            message: 'Please Enter the Employees Role',
        },
    ])
}
// addDepart
let addDepart = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'depname',
            message: 'Please enter the name of the department you wish to add.'
        },
    ])
}
{
addEmp();
}
// addDepart();