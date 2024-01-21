const categoryRouter = require("express").Router();
const { getAll ,getById,create,update,remove } = require("../controllers/categoryController");
categoryRouter.get("/", getAll);
categoryRouter.get("/:id", getById);
categoryRouter.post("/", create);
categoryRouter.delete("/:id", remove);
categoryRouter.put("/:id", update);

module.exports = categoryRouter;
