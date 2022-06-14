const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const viewDepts = require("./lib/department");
const viewPositions = require("./lib/positions");
const viewEmployees = require("./lib/employee");
const { connect, query } = require("./dbConnect");

function runEMS() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments?",
          "View all positions?",
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
      switch (answer.mainMenu) {
        case "View all departments?":
          console.log("hello world");
          viewDepts();
          break;

        case "View all positions?":
          console.log("position");
          viewPositions();
          break;

        case "View All Employees":
          console.log(employees);
          viewEmployees();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Add Position":
          addPosition();
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

  const addEmployee = () => {
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "What is the employee's first name?",
        },
        {
          name: "last_name",
          type: "input",
          message: "What is the employee's last name?",
        },
        {
          name: "role_id",
          type: "input",
          message: "What is the employee's role ID?",
        },
        {
          name: "manager_id",
          type: "input",
          message: "What is the employee's manager's ID?",
        },
      ])
      .then(function (answer) {
        const query =
          "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)";
        connect.query(
          query,
          [
            answer.first_name,
            answer.last_name,
            answer.role_id,
            answer.manager_id,
          ],
          function (err, res) {
            if (err) throw err;
            console.log(
              `You have added ${answer.first_name} ${answer.last_name} to employee table.`
            );
          }
        );
      });
  };
  const addPosition = () => {
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "What is the title of the position you are adding?",
        },
        {
          name: "salary",
          type: "input",
          message: "What is the salary of the new position?",
        },
        {
          name: "department_id",
          type: "list",
          message:
            "Please choose 1(Sales), 2(Engineering), 3(Finance), 4(Legal)",
          choices: [1, 2, 3, 4],
        },
      ])
      .then(function (answer) {
        const query =
          "INSERT INTO position (title, salary, department_id) VALUES (?, ?, ?, ?)";
        connect.query =
          (query,
          [answer.title, answer.salary, answer.department_id],
          function (err, res) {
            if (err) throw err;
            console.log(
              `You have added ${answer.title} to the position table.`
            );
          });
      });
  };
  function addDepartment() {
    inquirer.prompt([
      {
        name: "departmentName",
        type: "input",
        message: "What is the name of the new department?",
      }.then(function (answer) {
        const query = "INSERT INTO department (name) VALUE (?)";
        connect.query(query, anser.departmentName, function (err, res) {
          if (err) throw err;
          console.log(
            `You have successfully added ${departmentName} to the department table.`
          );
        });
      }),
    ]);
  }
  function updateEmployeeRole() {
    inquirer
      .prompt([
        {
          name: "currentEmployeeID",
          type: "input",
          message: "What is the ID of the employee you would like to update?",
        },
        {
          name: "newPositionTitle",
          type: "input",
          message: "What is the title of the employee's new position?",
        },
        {
          name: "newPositionSalary",
          type: "input",
          message: "What is the new salary?",
        },
        {
          name: "newPositionDepartmentID",
          type: "input",
          message:
            "What will the new department be: please choose 1(Sales), 2(Engineering), 3(Finance), 4(Legal)",
          choices: [1, 2, 3, 4],
        },
      ])
      .then(function (answer) {
        const query =
          "UPDATE position SET title = ?, department_id =?, WHERE id =?";
        connect.query(
          query,
          [
            answer.newPositionTitle,
            answer.newPositionSalary,
            answer.NewPositionDepartmentID,
            parseInt(answer.currentEmployeeID),
          ],
          function (err, res) {
            if (err) throw err;
            console.log(
              `You have successfully updated ${currentEmployeeID} to the position of ${newPositionTitle}!`
            );
          }
        );
      });

      const exit = () => {
        process.exit();
      }
  }
}
