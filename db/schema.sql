DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE  employees_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE position (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)

 );

 CREATE TABLE employee (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     first_name VARCHAR(30),
     last_name VARCHAR(30),
     position_id INT,
     manager_id INT
    --  FOREIGN KEY (position_id)
    --  REFERENCES position(id)
    --  FOREIGN KEY (manager_id)
    --  REFERENCES employee(id)
    -- ON DELETE CASCADE
 );