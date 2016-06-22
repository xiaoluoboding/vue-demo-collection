import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cartSchema = new Schema({
  _id: Number,
  type: String,
  count: Number,
  price: Number
})

const Cart = mongoose.model('vue_cart', cartSchema)

export default Cart
