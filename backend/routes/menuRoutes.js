const express = require("express");
const router = express.Router();

const { getAllMenu, addMenu } = require("../controllers/menuController");

router.route("/").get(getAllMenu);
router.route("/").post(addMenu);

module.exports = router;
