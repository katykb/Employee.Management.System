const consoleTable = require("console.table");
const { async } = require("seed/lib/seed");
//const runEMS = require("../index");
const db = require("../dbConnect");
//const index = require("../index");

const viewDepts = (cb) => {
  console.log("running");
  //runEMS();
  db.query("SELECT * from department", (err, data) => {
   if(err) throw err;
    console.table(data);
    cb();
  });
};

module.exports = viewDepts;
