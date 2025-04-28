import React, { useEffect, useState } from 'react';
import { getPatientData } from './api';
import Sidebar from './components/Sidebar';
import DiagnosisHistory from './components/DiagnosisHistory';
import PatientProfile from './components/PatientProfile';
import DiagnosticList from './components/DiagnosticList';
import LabResults from './components/LabResults'; 

import './App.css';

function App() {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPatientData();
      setPatientData(data);
    }
    fetchData();
  }, []);

  if (!patientData) return <div>Loading...</div>;

  return (
    <div className="container">
  <div className="sidebar">
    <Sidebar patient={patientData} />
  </div>
  <div className="main-content">
    <div className="top-section">
      <div className="diagnosis-history">
        <DiagnosisHistory patient={patientData} />
      </div>
      <div className="patient-profile">
        <PatientProfile patient={patientData} />
      </div>
    </div>
    <div className="below-section">
    <div className="diagnostic-list">
      <DiagnosticList patient={patientData} />
    </div>
    <div className="lab-results">
      <LabResults patient={patientData} />
    </div>
    </div>
  </div>
</div>

  );
}

export default App;
