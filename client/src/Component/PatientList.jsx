import React, { useContext } from 'react';
import { PatientContext } from '../context/PatientContext';

function PatientList() {
  const { patients } = useContext(PatientContext);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Patient List</h2>
      {patients.length === 0 ? (
        <p>No patients registered yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone Number</th>
                <th>Token Number</th>
                <th>Problem</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.phoneNumber}</td>
                  <td>{patient.tokenNumber}</td>
                  <td>{patient.problem}</td>
                  <td>{patient.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PatientList;

