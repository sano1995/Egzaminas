const express = require("express");
const router = express.Router();

const { isAuthorized, isAdmin } = require("../middlewares/auth");
const {
  getAllProcedures,
  getOneProcedure,
  addProcedure,
  deleteProcedure,
  editProcedure,
} = require("../controllers/procedureController.js");

router.route("/").get(isAuthorized, getAllProcedures);
router.route("/:id").get(isAuthorized, getOneProcedure);
router.route("/").post(isAuthorized, isAdmin, addProcedure);
router.route("/:id").delete(isAuthorized, isAdmin, deleteProcedure);
router.route("/:id").patch(isAuthorized, isAdmin, editProcedure);

module.exports = router;
