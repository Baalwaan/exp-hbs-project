const dbConnection = require("./db_connection");
const path = require("path");
const { readFileSync } = require("fs");

let sqlPath = path.join(__dirname, "dbuild.sql");

const sqlString = readFileSync(sqlPath).toString();
console.log("this is ........", sqlString);

const runDbBuild = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(sqlString, (err, res) => {
      if (err) reject(err);
      console.log("database being built");
      resolve(true);
    });
  });

runDbBuild()
  .then(res => {
    process.stdout.write("build success");
  })
  .catch(err => {
    process.stdout.write("build failed");
  });
