import express from "express";
const app = express();
const port = 3022;

app.get("/", (req, res) => {
  res.send("hallo");
});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
