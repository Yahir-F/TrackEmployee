DROP DATABASE IF EXISTS employeeData_db;
CREATE DATABASE employeeData_db;


USE employeeData_db;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(30) NOT NULL
);



CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    pay DECIMAL,
      department_id; INT,
    REFERENCES department(id)
    FOREIGN KEY (department_id)
    ON DELETE SET NULL
);

CREATE TABLE worker (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    worker_name VARCHAR(30) 
    worker_last VARCHAR(30)
    role_id INT,
    FOREIGN KEY(role_id)
REFERENCES role (id) ON DELETE SET NULL,
  REFERENCES emp(id)
  ON DELETE SET NULL
);

