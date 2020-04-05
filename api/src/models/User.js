import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const dto = {
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  enable: {
    type: Boolean,
    required: false,
  },
  token: {
    type: String,
    required: false
  },
  Roles: {
    type: {
      type: String, // admin, owner and client
      required: false
    },
  },
  Preferences: {
    img: {
      type: String,
      required: false
    },
    location:{
      type: String,
      required: false
    }
  }
}
class User {

  initSchema() {
    const schema = new Schema(dto, { timestamps: true });
    schema.pre(
      "save",
      function(next) {        
        return next();
      },
      function(err) {
        next(err);
      }
    );
    schema.plugin(uniqueValidator);
    mongoose.model('users', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('users');
  }
}

export default User;