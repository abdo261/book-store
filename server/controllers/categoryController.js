const Category = require("../models/category");
const joi = require("joi");
const getAll = async (req, res) => {
  try {
    const categorys = await Category.find();
    res.status(200).json(categorys);
  } catch (err) {
    console.log(err);
    res.tatus(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category)
      return res.status(404).json({ message: "category note found" });
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.tatus(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  const schema = joi.object({
    name: joi.string().required(),
    color: joi
      .string()
      .pattern(
        /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$|^rgba\(\d{1,3},\s?\d{1,3},\s?\d{1,3},\s?(0(\.\d{1,2})?|1(\.0{1,2})?)\)$/
      )
      .required(),
  });

  try {
    const { error, value } = schema.validate({
      name: req.body.name,
      color: req.body.color,
    });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const newCategory = new Category(value);
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.status(204).json({message:"category"+category.name+" removed successefely"})
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  const schema = joi.object({
    name: joi.string(),
    color: joi
      .string()
      .pattern(
        /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$|^rgba\(\d{1,3},\s?\d{1,3},\s?\d{1,3},\s?(0(\.\d{1,2})?|1(\.0{1,2})?)\)$/
      ),
  });

  try {
    const { id } = req.params;
    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const updatedCategory = await Category.findByIdAndUpdate(id, value, {
      new: true,
    });

    if (!updatedCategory)
      return res.status(404).json({ message: "Category not found" });

    res
      .status(200)
      .json({
        Category: updatedCategory,
        message: "category "+updatedCategory.name+" update avec success ^_^",
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getById, create,update,remove };
