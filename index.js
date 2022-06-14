const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

pp.post("/api/new-employee", ({ body }, res) => {
  const sql = `INSERT INTO employee (first_name)
      VALUES (?)`;
  const params = [body.first_name];
});

inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments?",
        "View all roles?",
        "View all employees?",
        "Add a department?",
        "Add a role?",
        "Add an employee?",
        "Update an employee role?",
        "Exit",
      ],
      name: "mainMenu",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter a selection to continue.";
        }
      },
    },
  ])
  .then(function (answer) {
    switch (answer.action) {
      case "View All Departments":
        viewDepts();
        break;

      case "View All Roles":
        viewRoles();
        break;

      case "View All Employees":
        viewEmployees();
        break;

      case "Add Employee":
        addEmployee();
        break;

      case "Add Role":
        addRole();
        break;

      case "Add Deapartment":
        addDepartment();
        break;

      case "Update Employee Role":
        updateEmployeeRole();
        break;

      case "Exit":
        exit();
        break;
    }
  });
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server is running 🏃 on ${PORT}`);
});
