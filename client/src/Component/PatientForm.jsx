import React, { useState, useContext } from 'react';
import { PatientContext } from '../context/PatientContext';
import Image from '../assets/image.webp';

function PatientForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phoneNumber: '',
    tokenNumber: '',
    problem: '',
    gender: ''
  });

  const { addPatient } = useContext(PatientContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient(formData);
    setFormData({
      name: '',
      age: '',
      phoneNumber: '',
      tokenNumber: '',
      problem: '',
      gender: ''
    });
  };

  return (
    <div className="max-w-6xl mx-auto my-12 bg-white shadow-2xl rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">New Patient Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="tokenNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Token Number
                </label>
                <input
                  id="tokenNumber"
                  name="tokenNumber"
                  type="text"
                  required
                  value={formData.tokenNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
                Medical Problem
              </label>
              <textarea
                id="problem"
                name="problem"
                required
                value={formData.problem}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Register Patient
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-2/5 ">
          <div className="h-full flex items-center justify-center p-8">
            <img src={Image} alt="Hospital Logo" className="max-w-full max-h-full object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientForm;

