const categoryRouter = require("express").Router();
const { getAll } = require("../controllers/categoryController");
categoryRouter.get("/", getAll);

module.exports = categoryRouter;
