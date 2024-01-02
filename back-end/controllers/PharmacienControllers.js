const db = require("../models/index");
const Pharmacien = db.Pharmacien;

exports.signupPhar = async (req, res, next) => {
  try {
    const { email, UserName, password, role, image, adress } = req.body;

    const pharmacien = await Pharmacien.create({
      UserName,
      email,
      password,
      role,
      image,
      adress,
    });

    res.status(201).json({
      success: true,
      pharmacien,
    });
  } catch (error) {
    console.error("Sequelize Validation Errors:", error.errors);
  }
};

exports.updateProfilePhar = async (req, res) => {
  try {
    const updatedPharmacien = await Pharmacien.update(
      {
        UserName: req.body.UserName,
        email: req.body.email,
        image: req.body.image,
        password: req.body.password,
        role: req.body.role,
        adress: req.body.adress,
      },
      { where: { id: req.params.id } }
    );

    res.status(201).json(updatedPharmacien);
  } catch (err) {
    console.error("Error updating pharmacien:", err);
    res.status(400).json(err);
  }
};

exports.getAllPharmacien = async (req, res) => {
  try {
    const pharmacien = await Pharmacien.findAll();
    res.json(pharmacien);
  } catch (error) {
    console.error("Error getting pharmacien:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
