import express from "express";
import mongoose from "mongoose";
import user from "./models/user.model.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://admin:g0ssiX5T97zRKfRT@book-hub.h5hdwgj.mongodb.net/book-hub?retryWrites=true&w=majority&appName=book-hub"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/register", async (req, res) => {
  try {
    const users = await user.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/register", async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(200).json(newUser);
    console.log("Succesfully sent data");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
