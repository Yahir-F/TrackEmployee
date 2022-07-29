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
