const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3000;

// requerimiento del .env
require("dotenv").config();


app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:5173" }));

//Conecxion con el mongoDB

const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWORD +
  "@" +
  process.env.DB_SERVER +
  "/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority";
async function main() {
    console.log(mongoDB)
  await mongoose.connect(mongoDB);
}
main().catch((err) => console.log(err));



//importacion de routes
const taskRouter = require("./Routes/taskRouter");
const usersRouter = require("./Routes/usersRouter");



//routes
app.use("/tasks", taskRouter);
app.use("/user", usersRouter);


const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("usuario de la base de datos es", process.env.DB_USER);
});

module.exports = { app, server };
