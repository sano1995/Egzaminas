const express = require("express");
const router = express.Router();
const {
  authRegister,
  authLogin,
  authMe,
  getAllUsers,
  getUser,
} = require("../controllers/authController");
const {
  isAuthorized,
  isAdmin,
  validateRegister,
} = require("../middlewares/auth");

router.route("/register").post(validateRegister, authRegister);
router.route("/login").post(authLogin);
router.route("/me").get(isAuthorized, authMe);

module.exports = router;
