const consoleTable = require("console.table");
const db = require("../dbConnect");

const viewEmployees = (cb) => {
  console.log("running");
  db.query("SELECT * from employee", (err, data) => {
    if(err) throw err;
    console.table(data);
    cb();
  });
};

module.exports = viewEmployees;
