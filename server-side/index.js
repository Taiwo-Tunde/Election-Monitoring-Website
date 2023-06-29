const express = require("express");
const app = express();
const cors = require("cors");
const { getLocalGovermentVotes, announced_pu_results } = require("./Database");
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", async (req, res) => {
  res.send("Home Page");
});

app.get("/Local_Government", async (req, res) => {
  const lGVotes = await getLocalGovermentVotes();
  res.send(lGVotes);
});

app.get("/PU_votes", async (req, res) => {
  const pUVotes = await announced_pu_results();
  res.send(pUVotes);
});

app.listen(4000, () => {
  console.log("connected successfully");
});
