const Menu = require("../models/menu");

exports.getAllMenu = async (req, res) => {
  try {
    const allMenu = await Menu.find()
      .sort({ date: -1 })
      .populate({ path: "meals", model: "meal" });

    res.status(200).json({
      status: "success",
      results: allMenu.length,
      data: {
        menu: allMenu,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
exports.addMenu = async (req, res) => {
  try {
    const newMenu = await Menu.create({
      title: req.body.title,
    });
    res.status(201).json(newMenu);
  } catch (err) {
    console.log(err);
    res.status(500).json({ mess: err });
  }
};
// exports.getIncome = async (req, res) => {
//   try {
//     const GetIncome = await Income.findById(req.params.id);
//     if (!GetIncome) {
//       return res.status(404).json({ msg: `Pajamos nr: ${id} neegzistuoja` });
//     } else {
//       if (GetIncome.user_id == req.userInfo.id) {
//         res.status(200).json(GetIncome);
//       }
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.deleteIncome = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const Delete_Income = await Income.findById(id);
//     if (!Delete_Income) {
//       return res.status(404).json({ msg: `Pajamos nr: ${id} neegzistuoja` });
//     } else {
//       if (Delete_Income.user_id == req.userInfo.id) {
//         console.log("true");
//         try {
//           await Income.findByIdAndDelete(id);
//           await saveAction(req.userInfo.id, "income_delete", Delete_Income);
//           res.status(200).json({
//             status: "success",
//             message: `Pajamos nr: ${id} sėkmingai pašalintas.`,
//             income: Delete_Income,
//           });
//         } catch (error) {
//           res.status(500).json({ error: error.message });
//         }
//       }
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.editIncome = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const Edit_Income = await Income.findById(id);
//     if (!Edit_Income) {
//       return res.status(404).json({ msg: `Pajamos nr: ${id} neegzistuoja` });
//     } else {
//       if (Edit_Income.user_id == req.userInfo.id) {
//         try {
//           const Updated_Income = await Income.findOneAndUpdate(
//             {
//               _id: id,
//             },
//             {
//               user_id: req.userInfo.id,
//               title: req.body.title,
//               sum: req.body.sum,
//               date: addTime(req.body.date),
//             }
//           );
//           await saveAction(req.userInfo.id, "income_edit", Updated_Income);
//           res.json({
//             status: "success",
//             data: Updated_Income,
//           });
//         } catch (error) {
//           res.status(500).json({ error: error.message });
//         }
//       }
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
