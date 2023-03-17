import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      requried: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = Mongoose.model("User", userSchema);

export default User;
