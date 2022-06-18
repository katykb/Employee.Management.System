const express = require("express");
const mysql = require("mysql2");
const promise = require("mysql2-promise");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const viewDepts = require("./lib/department");
const viewJobRoles = require("./lib/jobRoles");
const viewEmployees = require("./lib/employee");
const db = require("./dbConnect");
const { exit } = require("process");

function runEMS() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments?",
          "View all job roles?",
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
    .then(async function (answer) {
      switch (answer.mainMenu) {
        case "View all departments?":
          console.log("hello world");
          viewDepts(runEMS);
          break;

        case "View all job roles?":
          console.log("job roles");
          viewJobRoles(runEMS);

          break;

        case "View all employees?":
          console.log("employees");
          viewEmployees(runEMS);
          break;

        case "Add an employee?":
          addEmployee(runEMS);
          break;

        case "Add a role?":
          addJobRole(runEMS);
          break;

        case "Add a department?":
          addDepartment(runEMS);
          break;

        case "Update an employee role?":
          updateEmployeeRole(runEMS);
          break;

        case "Exit":
          exit();
      }
    });
}

function addEmployee() {
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
      db.query(
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
          runEMS();
        }
      );
    });
}

const addJobRole = () => {
  db.query("SELECT * from department", (err, rows) => {
    const depts = rows.map((row) => {
      return {
        name: row.name,
        value: row.id,
      };
    });

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
          message: "Choose department",
          choices: depts,
        },
      ])
      .then(function (answer) {
        const query =
          "INSERT INTO job_role (title, salary, department_id) VALUES (?, ?, ?)";
        db.query(
          query,
          [answer.title, answer.salary, answer.department_id],
          function (err, res) {
            if (err) throw err;
            console.log(
              `You have added ${answer.title} to the position table.`
            );
            runEMS();
          }
        );
      });
  });
};
function addDepartment() {
  inquirer
    .prompt({
      name: "departmentName",
      type: "input",
      message: "What is the name of the new department?",
    })
    .then(function (answer) {
      const query = "INSERT INTO department (name) VALUE (?)";
      db.query(query, answer.departmentName, function (err, res) {
        if (err) throw err;
        console.log(
          `You have successfully added ${answer.departmentName} to the department table.`
        );
        runEMS();
      });
    });
}
function updateEmployeeRole() {
  db.query("SELECT * from employee", (err, rows) => {
    db.query("SELECT * from job_role", (err, jobRows) => {
      const name = rows.map((row) => {
        return {
          name: `${row.first_name} ${row.last_name}`,
          value: row.id,
        };
      });
      const jobRoles = jobRows.map((row) => {
        return {
          name: row.title,
          value: row.id,
        };
      });
      inquirer
        .prompt([
          {
            name: "currentEmployeeID",
            type: "list",
            message: "Select the name of the employee?",
            choices: name,
          },
          {
            name: "newRoleID",
            type: "list",
            message: "What is the title of the employee's new position?",
            choices: jobRoles,
          },
        ])
        .then(function (answer) {
          const query = "UPDATE employee SET role_id = ? WHERE id =?";
          db.query(
            query,
            [answer.newRoleID, parseInt(answer.currentEmployeeID)],
            function (err, res) {
              if (err) throw err;
              console.log(
                `You have successfully updated ${answer.currentEmployeeID} to the position of ${answer.newRoleID}!`
              );
              runEMS();
            }
          );
        });
    });
  });

  const exit = () => {
    process.exit();
  };
}

runEMS();
module.exports = runEMS;
