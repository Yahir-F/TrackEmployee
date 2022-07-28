const mysql = require('mysql')
const inquirer = require('inquirer')
const conTable = require('console.table')


const connection = mysql.createConnection({
    host:"local",
    port: 3306,
    user: "root",
    password:"password",
    database: "employeeData_db"
});

connection.connect(function(err) {
    if(err){
    console.error("There was an errr connecting to " + err.stack);
    return
}
});

getrole();

function getrole(){
inquirer.prompt(
{

    name: 'role',
    type: 'list',
    message: 'Which of the following options would you like to do?',
    choices: ['add', 'display', 'change', 'quit'],
}
).then(function({role}) {
    switch (role) {
        case 'add':
            add();
            break;
    case 'display':
        display();
        break;
    case 'change':
    change();
    break;
 case 'quit':
 connection.end()
 return;
    }
    })
}