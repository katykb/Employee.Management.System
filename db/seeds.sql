USE employees_db

INSERT INTO department (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");


INSERT INTO position (title, salary, department_id)
VALUES
        ("Salesperson", 120000, 1),
        ("Sales Lead", 130000, 1),
        ("Lead Engineer", 90000, 2),
        ("Software Engineer", 80000, 2),
        ("Account Manager", 125000, 3),
        ("Accountant", 85000, 3),
        ("Legal Team Lead", 45000, 4),
        ("Lawyer", 150000, 4);

INSERT INTO employee (first_name, last_name)
VALUES
    ("Ethan", "Brown"),
    ("Henry", "Brown");

