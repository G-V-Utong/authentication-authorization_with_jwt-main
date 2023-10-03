const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: { type: String },
  password: { type: String, unique: true },
  email: { type: String, unique: true },
  phone_number: { type: String },
  gender: { type: String, value: ["male", "female"] },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

module.exports = mongoose.model("users", UserSchema);
