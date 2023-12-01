import mongoose from "mongoose";

// connects to the mongoDB database.
export default async function mongodbConnecter() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    // console.log("Connection Successful");
  } catch (error) {
    console.log(error);
  }
}
