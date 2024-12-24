import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    problem: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
      match: /^\d{10}$/, // Validates 10-digit phone number
    },
    tokenNumber: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
  }
);

// Export the model
const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
