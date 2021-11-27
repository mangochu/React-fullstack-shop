const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  UserId: { type: String, requied: true },
  products: [
    {
      productId: { type: String },
      quantity: { type: Number, default: 1 }
    }
  ],
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  Status: { type: String, default: "pending" },
},
  { timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
