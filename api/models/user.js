import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required :true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

UserSchema.pre('save', async function (next) {

  if(!this.isModified('password')){
    next()
  }
  
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// UserSchema.virtual('emailConfirmation')
// .get(function () {
//   return this._emailConfirmation;
// })
// .set(function (value) {
//   this._emailConfirmation = value;
// });

// UserSchema.virtual('password')
// .get(function () {
//   return this._password;
// })
// .set(function (value) {
//   console.log(value, this.passwordConfirmation, this);
//   if (value !== this.passwordConfirmation) {
//     this.invalidate('password', 'Password and password confirmation must match');
//   }
//   this._password = value;
// });

// UserSchema.virtual('passwordConfirmation')
// .get(function () {
//   return this._passwordConfirmation;
// })
// .set(function (value) {
//   this._passwordConfirmation = value;
// });

// UserSchema.plugin(passportLocalMongoose, {
//   usernameField: 'email'
// });

const User = mongoose.model('User', UserSchema)
export default User
