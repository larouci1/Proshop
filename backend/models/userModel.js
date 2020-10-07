import { Mongoose } from ("mongoose");


const userSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },

}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema);

export default User;