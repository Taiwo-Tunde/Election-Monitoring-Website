const express = require("express");
const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password@mysql",
  database: "election_results",
});

connection.query(
  "SELECT * FROM announced_lga_results ",
  (err, results, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(results);
    }
  }
);

app.listen(4000, () => {
  console.log("connected successfully");
});