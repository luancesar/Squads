const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  description:{
    type: String,
    require: true
  },
  value: {
    type: String
  },
});
mongoose.model('Product', ProductSchema);