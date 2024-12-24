import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import PatientForm from './Component/PatientForm';
import PatientList from './Component/PatientList';
import { PatientProvider } from './context/PatientContext';
import './App.css';

function App() {
  return (
    <Router>
      <PatientProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PatientForm />} />
            <Route path="list" element={<PatientList />} />
          </Route>
        </Routes>
      </PatientProvider>
    </Router>
  );
}

export default App;

