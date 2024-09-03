//import "dotenv/config";
// console.log(process.env)
import express from "express";
import router from "./routes.js";

const port = 3000;
const app = express();

app.use(express.json());
app.use(router);

// app.listen(process.env.PORT, () => {
//   console.log("Server work at port: " + process.env.PORT);

app.listen(port, () => {
  console.log("Server work at port: " + port);

});
