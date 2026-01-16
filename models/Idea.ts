import mongoose, { Schema, models, model } from "mongoose";

const IdeaSchema = new Schema({
  fullName: String,
  degree: String,
  department: String,
  year: String,
  rollNumber: String,
  collegeEmail: String,
  personalEmail: String,
  ideaDescription: String,
  createdAt: { type: Date, default: Date.now },
});

const Idea = models.Idea || model("Idea", IdeaSchema);
export default Idea;