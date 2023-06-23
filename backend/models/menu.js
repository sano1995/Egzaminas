const mongoose = require("mongoose");

const menuSchema = mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: 20,
      trim: true,
      required: true,
      unique: true,
    },
    meals: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("menu", menuSchema);
