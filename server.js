const express = require("express");

require("dotenv").config();

const app = express();

app.use(require("cors")());
app.use(express.json());

app.use("/api/tasks", require("./routes/taskRoutes"));

require("./config/db")();

app.listen(process.env.PORT, ()=>console.log("Server is running on port",process.env.PORT));