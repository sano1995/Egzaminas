const express = require("express");
const router = express.Router();

const { getAllMeal, addMeal } = require("../controllers/mealController");

router.route("/").get(getAllMeal);
router.route("/").post(addMeal);

module.exports = router;
