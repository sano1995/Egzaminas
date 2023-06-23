const Procedure = require("../models/procedure");
const { isValidObjectId } = require("mongoose");

exports.getAllProcedures = async (req, res) => {
  try {
    const procedures = await Procedure.find();
    res.status(200).json({
      status: "success",
      data: {
        procedures: procedures,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getOneProcedure = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(404).json({ status: "error", mess: `Neteisingas id` });
  }
  try {
    const procedure = await Procedure.findById(id);
    if (!procedure) {
      return res
        .status(404)
        .json({ status: "error", mess: `Procedūra nerasta` });
    } else {
      res.status(200).json(procedure);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", mess: err.message });
  }
};

exports.addProcedure = async (req, res) => {
  try {
    const { title, category, price, duration, image } = req.body;
    const findProcedure = await Procedure.findOne({ title });
    if (findProcedure) {
      return res.status(400).json({
        status: "error",
        mess: "Procedūra su tokiu pavadinimu jau egzistuoja",
      });
    }
    const newProcedure = await Procedure.create({
      title,
      category,
      price,
      duration,
      image,
    });
    res.status(201).json(newProcedure);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", mess: err });
  }
};

exports.editProcedure = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, price, duration, image } = req.body;

    const findProcedure = await Procedure.findOne({ _id: id });
    if (!findProcedure) {
      return res.status(400).json({
        status: "error",
        mess: "Procedūra nerasta",
      });
    }
    try {
      const updated_procedure = await Procedure.findOneAndUpdate(
        {
          _id: id,
        },
        {
          title,
          category,
          price,
          duration,
          image,
        }
      );
      res.json({
        status: "success",
        data: updated_procedure,
      });
    } catch (err) {
      res.status(500).json({ status: "error", mess: err });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", mess: err });
  }
};

exports.deleteProcedure = async (req, res) => {
  try {
    const { id } = req.params;
    const delete_procedure = await Procedure.findById(id);
    if (!delete_procedure) {
      return res
        .status(404)
        .json({ status: "error", mess: `Procedūra nerasta` });
    } else {
      try {
        await Procedure.findByIdAndDelete(id);
        res.status(200).json({
          status: "success",
          message: `Sėkmingai ištrinta.`,
          procedure: delete_procedure,
        });
      } catch (error) {
        res.status(500).json({ status: "error", mess: err });
      }
    }
  } catch (err) {
    res.status(500).json({ status: "error", mess: err });
  }
};
