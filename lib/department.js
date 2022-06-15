const consoleTable = require("console.table");
const { async } = require("seed/lib/seed");
const connect = require("../dbConnect");

const viewDepts =  () => {
  console.log("running");
  connect.query("SELECT * from department", (err, data) => {
    console.log(err);
    console.log(data);
  });
};

module.exports = viewDepts;
