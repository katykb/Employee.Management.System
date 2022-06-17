const consoleTable = require("console.table");
const db = require("../dbConnect");

const jobRoles = (cb) => {
  console.log("running");
  db.query("SELECT * from job_role", (err, data) => {
    if(err) throw err;
    console.table(data);
    cb();
  });
};

module.exports = jobRoles;
