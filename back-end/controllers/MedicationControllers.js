const db = require("../models/index");
const Product = db.Medication;
exports.createProduct = (req, res) => {
  Product.create({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    PharmacyId: req.body.PharmacyId,
  })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
};
exports.getAllProducts = (req, res) => {
  Product.findAll()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
};

exports.updateProduct = (req, res) => {
  Product.update(
    {
      description: req.body.description,
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      PharmacienId: req.body.PharmacienId,
    },
    { where: { id: req.params.id } }
  )
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
};

exports.deleteProduct = (req, res) => {
  Product.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
};

exports.getAllProductForOne = (req, res) => {
  const PharmacyId = req.params.id;
  db.Pharmacy.findByPk(PharmacyId, {
    include: [{ model: Product }],
  })
    .then((response) => res.status(201).json(response.Medications))
    .catch((err) => res.status(400).json(err));
};
