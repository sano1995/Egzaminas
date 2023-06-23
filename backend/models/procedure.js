const mongoose = require("mongoose");

const procedureSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      minLength: 1,
      maxLength: 50,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      minLength: 1,
      maxLength: 50,
      trim: true,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("procedure", procedureSchema);
