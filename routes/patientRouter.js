import express from "express";
import {
  addPatient,
  getAllPatients,
  deletePatient,
} from "../controllers/patientController.js";

const router = express.Router();

// Define routes for patients
router.post("/", addPatient); // Add a patient
router.get("/", getAllPatients); // Get all patients
router.delete("/:id", deletePatient); // Delete a patient by ID

export default router;
