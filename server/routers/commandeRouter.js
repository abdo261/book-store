const router = require("express").Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../controllers/commandeController");

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.delete("/:id", remove);
router.put("/:id", update);

module.exports = router;
