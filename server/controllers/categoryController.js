const Category = require("../models/category");

const getAll = async (req, res) => {
  try {
    const categorys = await Category.find();
    res.status(200).json(categorys);
  } catch (err) {
    console.log(err);
    res.tatus(500).json({ message: err.message });
  }
};



module.exports = {getAll}