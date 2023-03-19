import mongoose, { Mongoose } from "mongoose";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

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

userSchema.pre("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(9);
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

userSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.genJWT = function generate() {
  return JWT.sign(
    { id: this._id, email: this.email },
    "dkjfwu45843rhih34853hnft",
    {
      expiresIn: "1h",
    }
  );
};

const User = mongoose.model("User", userSchema);

export default User;
