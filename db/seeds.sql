USE employees_db

INSERT INTO department (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");


INSERT INTO job_role (title, salary, id)
VALUES
        ("Salesperson", 120000),
        ("Sales Lead", 130000),
        ("Lead Engineer", 90000),
        ("Software Engineer", 80000),
        ("Account Manager", 125000),
        ("Accountant", 85000),
        ("Legal Team Lead", 45000),
        ("Lawyer", 150000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Ethan", "Brown", 1),
    ("Henry", "Brown", 2,1);

