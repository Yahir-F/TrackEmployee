DROP DATABASE IF EXISTS employeeData_db;


CREATE DATABASE employeeData_db;


USE employeeData_db;

CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    department_id; INT NOT NULL,
    pay DECIMAL NOT NULL,
    PRIMARY KEY (id)
)