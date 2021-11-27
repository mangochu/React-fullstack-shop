const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  title: { type: String, requied: true, unique: true },
  desc: { type: String, requied: true },
  img: { type: String, requied: true },
  categories: { type: Array },
  size: { type: Array },
  color: { type: Array },
  price: { type: Number, requied: true },
  inStock: { type: Boolean, default: true }
},
  { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)
