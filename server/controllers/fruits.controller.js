const Fruit = require('../models/Fruit.model');

module.exports = {
  getAll(_,res){
    Fruit.find()
    .then(fruits => res.json(fruits));
  },

	create(req, res) {
    Fruit.create(req.body)
      .then(fruit => res.json(fruit))
      .catch((err) => res.json(err));
  },
  
  getOne(req, res) {
    const fruitId = req.params.id;
    Fruit.findById(fruitId)
      .then(fruit => res.json(fruit))
      .catch(err => res.json(err));
  },

  update(req, res) {
    const fruitId = req.params.id;
    Fruit.findByIdAndUpdate(
      fruitId,
      req.body,
      {
        new: true,
        runValidators: true
      }
    )
      .then(fruit => res.json(fruit))
      .catch(err => res.json(err));
  },

  delete(req, res) {
    const fruitId = req.params.id;
    Fruit.findByIdAndDelete(fruitId)
      .then(() => res.json({ status: "success" }))
      .catch((err) => res.json(err));
  }
};
