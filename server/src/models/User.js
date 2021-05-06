const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    minLength: 2,
    maxLength: 30,
    trim: true,
    match: /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/,
  },
  lastName: {
    type: String,
    minLength: 2,
    maxLength: 30,
    trim: true,
    match: /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/,
  },
  username: {
    type: String,
    minLength: 4,
    maxLength: 30,
    trim: true,
    match: /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    maxLength: 40,
    trim: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minLength: 6,
    trim: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    minLength: 10,
    maxLength: 10,
    trim: true,
    unique: true,
    required: true,
  },
  avatar: {
    type: String,
    default: "person.png",
  },
  activityStatus: {
    type: String,
    default: "offline",
  },
  activated: {
    type: Boolean,
    default: process.env.SERVER_ENABLE_SEND_EMAIL === "true" ? false : true,
  },
});

UserSchema.index({ username: "text" });
module.exports = mongoose.model("User", UserSchema);
