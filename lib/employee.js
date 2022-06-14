const consoleTable = require("console.table");
const connect = require("../dbConnect");

const viewEmployees = () => {
    console.log('running')
  connect.query("SELECT * from employee", (err, data) => {
    console.log(err)
    console.log(data);
  });
};

module.exports = viewEmployees;
