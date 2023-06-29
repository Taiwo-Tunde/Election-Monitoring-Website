const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();

// fucntion to get individual local goverment results
async function getLocalGovermentVotes() {
  const localResults = await connection.query(
    "SELECT * FROM announced_lga_results "
  );
  return localResults[0];
}

const localVotes = getLocalGovermentVotes();
localVotes.then(function (results) {
  console.log(results);
});

// function to individual polling unit result   from database
async function announced_pu_results() {
  const puResults = await connection.query(
    "SELECT * FROM announced_pu_results "
  );
  return puResults[0];
}

const votes = announced_pu_results();
votes.then(function (results) {
  console.log(results);
});

module.exports = { getLocalGovermentVotes, announced_pu_results };
