const consoleTable = require("console.table");
const connect = require("../dbConnect");
const getDepts = () => {
    console.log('running')
  connect.query("SELECT * from department", (err, data) => {
    console.log(err)
    console.log(data);
  });
};

module.exports = getDepts;
