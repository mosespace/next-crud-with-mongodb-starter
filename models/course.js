// importing Mongoose from 'mongoose';
import { Schema, model, models } from "mongoose";

// Creating a Schema
const courseSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// Creating a module:
const Course = models.Course || model("Course", courseSchema);
export default Course;
