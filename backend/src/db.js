import mongoose from "mongoose";

async function connectDB () {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:g0ssiX5T97zRKfRT@book-hub.h5hdwgj.mongodb.net/book-hub?retryWrites=true&w=majority&appName=book-hub"
    );
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // exit app if DB fails
  }
};

export default connectDB;