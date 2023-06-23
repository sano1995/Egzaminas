const Menu = require("../models/menu");
const Meal = require("../models/meal");

exports.getAllMeal = async (req, res) => {
  try {
    const allMeal = await Meal.find().sort({ date: -1 });

    res.status(200).json({
      status: "success",
      results: allMeal.length,
      data: {
        meal: allMeal,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
exports.addMeal = async (req, res) => {
  const { menu_id, title, description, image, price } = req.body;
  try {
    const newMeal = await Meal.create({
      menu_id,
      title,
      description,
      image,
      price,
    });
    const menu = await Menu.findById(menu_id);
    menu.meals.push(newMeal._id);
    await menu.save();
    res.status(201).json(newMeal);
  } catch (err) {
    console.log(err);
    res.status(500).json({ mess: err });
  }
};
