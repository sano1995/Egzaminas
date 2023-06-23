const mongoose = require("mongoose");

const mealsSchema = mongoose.Schema(
  {
    menu_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "menu",
      required: true,
    },
    title: {
      type: String,
      minLength: 2,
      maxLength: 30,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      minLength: 2,
      maxLength: 120,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0.01,
      max: 30,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("meal", mealsSchema);
