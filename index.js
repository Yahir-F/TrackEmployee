const mysql = require('mysql2');
const inquirer = require('inquirer');
const conTable = require('console.table')
const path = require('path');
const { response } = require('express');
const { start } = require('repl');

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
.then((response) => {
    console.log(response.Reply)
    db.query('select * from worker', (err, res) => {
        db.query(`insert into worker (worker_name, worker_last, role_id) values ('${response.empFirst}', '${response.empLast}', '${response.empRole}')`, (err, res) => {
     console.table(response)
    })
         });
        start();
    });
}


// addDepart
 addDepart = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'depname',
            message: 'Please enter the name of the department you wish to add.'
        },
    ])
}

newRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'Please enter the role you want to add.'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please enter the salary for the entered role.'
        }
    ])
.then ((response) => {
    console.log(response.Reply)
    db.query('select * from role', (err, res) => {
console.table(response)
    })
    start();
})
}
addEmp();
// addDepart();