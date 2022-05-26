const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Ethanhenry01!",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

inquirer.prompt([
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
]);

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server is running 🏃 on ${PORT}`);
});
