import mongoose from 'mongoose'
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

const User = mongoose.model('user', UserSchema)
export default User
