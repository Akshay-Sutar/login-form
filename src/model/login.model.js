const mongoose = require("mongoose");
const { Schema } = mongoose;

const LoginSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("LoginSchema", LoginSchema, "logins");
