import mongoose, { model } from "mongoose";
import bcrypt from "bcryptjs";

// const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique:true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },
    isAdmin:{
      type:Boolean,
      required:[true, 'Is admin field is required'],
      default:false
    },
    full_name:{
      type:String,
      required:[true, 'Fullname field is required'],
    },
    avatar:{
      type:String,
      required:false,
      default:""
    },
    resetToken: {
      type:String,
      required:false,
      default:""
    },
    resetTokenExpiration: {
      type: Date,
      required:false,
     
    }
    
    
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.models.user || mongoose.model("user", UserSchema);
// module.exports = mongoose.model("user", UserSchema);