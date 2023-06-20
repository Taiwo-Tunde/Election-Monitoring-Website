const express = require("express");
const app = express();
const cors = require("cors");
// const { getLocalGovermentVots } = require("./Database");
app.use(express.json());

app.use(
  cors({
    origin: "http://127.0.0.1:3000",
  })
);

// app.get("/", async (req, res) => {
//   const votes = await getLocalGovermentVots();
//   console.log(votes);
// });

app.listen(4000, () => {
  console.log("connected successfully");
});
