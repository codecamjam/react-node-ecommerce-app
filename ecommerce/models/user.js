const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    hashed_password: {
      type: String,
      required: true
    },
    about: {
      type: String,
      trim: true
    },
    salt: String, //unique string used later to generate hashed password
    role: {
      type: Number, // 0 reg user, 1 admin
      default: 0
    },
    history: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);
