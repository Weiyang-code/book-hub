import user from "../../models/user.model.js";

export async function getUser(req, res) {
  try {
    const users = await user.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function registerUser(req, res) {
  try {
    const newUser = await user.create(req.body);
    res.status(200).json(newUser);
    console.log("Succesfully sent data");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
