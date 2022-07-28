DROP DATABASE IF EXISTS employeeData_db;


CREATE DATABASE employeeData_db;


USE employeeData_db;

CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    department_id; INT NOT NULL,
    pay DECIMAL NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE worker (
    id INT NOT NULL AUTO_INCREMENT
    worker_name VARCHAR(30) NOT NULL
    worker_last VARCHAR(30)NOT NULL
    role_id INT NOT NULL,
    PRIMARY KEY(id)
);



CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
   name VARCHAR(30) AUTO_INCREMENT
    PRIMARY KEY (id)
)

