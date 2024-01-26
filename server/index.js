const express = require("express");
const cors = require('cors')
const { PORT } = require("dotenv").config().parsed;
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors({
  
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
require("./config/connection");
const categoryRouter = require("./routers/categoryRouter");
const bookRouter = require("./routers/bookRouter");
const imageRouter= require("./routers/imageRouter");

app.use("/api/categorys", categoryRouter);
app.use("/api/books", bookRouter);
app.use("/api/images", imageRouter);

app.listen(PORT, () => console.log(`server raning in port ${PORT} -_^`));
