const express = require("express");
const app = express();
const cors = require("cors");
const { getLocalGovermentVotes, announced_pu_results } = require("./Database");
app.use(express.json());

app.use(
  cors({
    origin: "http://127.0.0.1:3000",
  })
);

app.get("/", async (req, res) => {
  res.send("Home Page");
});

app.get("/Local_Government", async (req, res) => {
  const votes = await getLocalGovermentVotes();
  res.send(votes);
});

app.get("/PU_votes", async (req, res) => {
  const votes = await announced_pu_results();
  res.send(votes);
});

app.listen(4000, () => {
  console.log("connected successfully");
});
