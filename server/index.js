const express = require("express");
const cors = require('cors')
const { PORT } = require("dotenv").config().parsed;
const app = express();
app.use(express.json());
app.use(cors());
require("./config/connection");
const categoryRouter = require("./routers/categoryRouter");

app.use("/api/categorys", categoryRouter);

app.listen(PORT, () => console.log(`server raning in port ${PORT} -_^`));
