import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MongoDB_URI = process.env.MongoDB_URI;
    if (!MongoDB_URI) {
      throw new Error("MONGODB_URL is not set");
    }

    await mongoose.connect(MongoDB_URI);
    console.log("Connected to the database...");
  } catch (error) {
    console.log("Error connecting to the database...");
    console.log(error);
  }
};

export default connectDB;
