const express = require("express");
const { PORT } = require("dotenv").config().parsed;
const app = express();
app.use(express.json());
require("./config/connection");
const categoryRouter = require("./routers/categoryRouter");

app.use("/api/category", categoryRouter);

app.listen(PORT, () => console.log(`server raning in port ${PORT} -_^`));
