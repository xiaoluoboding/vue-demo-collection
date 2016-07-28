import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  _id: Number,
  username: String,
  password: String
})

const User = mongoose.model('user', userSchema)

export default User
