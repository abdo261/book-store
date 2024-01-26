const { Schema, model } = require("mongoose");
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique:true
    },
    color: {
      type: String,
      required: true,
      unique:true
    },
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: 'book',  // Reference to the 'book' model
        default: [],
      },
    ],
     },
  { timestamps: true, versionKey: false }
);

module.exports = model('category',CategorySchema)