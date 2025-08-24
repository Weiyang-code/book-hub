import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
},
{
    timestamps:true,
}
);

const user = mongoose.model("user", userSchema)

export default user;