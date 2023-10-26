import express, { Application } from "express";
const PORT = 8000;
// Create a new express app instance
const app: Application = express();
app.get("/", function (req, res) {
 res.send("Hello World!");
});
app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}!`);
});