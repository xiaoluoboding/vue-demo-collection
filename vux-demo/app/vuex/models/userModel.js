import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  id: Number,
  userid: String,
  username: String,
  password: String,
  online_stat: Boolean,
  login_time: String,
  last_login_time: String,
  socket_id: String
})

const User = mongoose.model('Mb_user', userSchema)

export default User
