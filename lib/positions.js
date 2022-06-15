const consoleTable = require("console.table");
const connect = require("../dbConnect");

const viewPositions = () => {
    console.log('running')
  connect.query("SELECT * from job_role", (err, data) => {
    console.log(err)
    console.log(data);
  });
};

module.exports = viewPositions;