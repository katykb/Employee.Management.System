const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const getDepts = require("./lib/department");



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
    switch (answer.mainMenu) {
      case "View all departments?":
        console.log('hello world');
        getDepts();
        break;

      case "View all roles?":
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



