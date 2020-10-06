const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async list(req, res) {

    product = await Product.find();
    return res.json(product);
  },

  async show(req,  res) {

    const product = await Product.findById(req.params.id);
    return res.json(product)
  },

  async create(req, res) {

    const product = await Product.create(req.body);
    return res.json(product);
  },

  async update(req, res) {
    
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(product);
  },

  async delete(req, res) {

    await Product.findByIdAndDelete(req.params.id);
    return res.send();
  }
}