import React from 'react';

function Sidebar({ patient }) {
  return (
    <div className="sidebar">
      <h2>Patients</h2>
      <div className="patient-list">
        <div className="patient-card selected">
          <p>{patient.name}</p>
          <p>{patient.gender}, {patient.age}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
