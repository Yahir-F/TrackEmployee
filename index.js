const mysql = require('mysql2');
const inquirer = require('inquirer');
const conTable = require('console.table')


const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"password",
    database: "employeeData_db"
}, 
console.log('succesfully connected to employeeData_db')
);


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