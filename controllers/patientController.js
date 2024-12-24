import Patient from "../model/patientModel.js";

// Add a new patient
export const addPatient = async (req, res) => {
  try {
    const { patientName, age, problem, gender, mobileNumber, tokenNumber } =
      req.body;

    // Check if a patient with the same token number or mobile exists
    const existingPatient = await Patient.findOne({
      $or: [{ mobileNumber }, { tokenNumber }],
    });
    if (existingPatient) {
      return res.status(400).json({
        message: "Patient with this mobile number or token already exists",
      });
    }

    const newPatient = new Patient({
      patientName,
      age,
      problem,
      gender,
      mobileNumber,
      tokenNumber,
    });
    const savedPatient = await newPatient.save();

    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all patients
export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a patient by ID
export const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPatient = await Patient.findByIdAndDelete(id);

    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
