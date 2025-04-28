import React from 'react';

function PatientProfile({ patient }) {
  return (
    <div className="patient-profile">
  <img src={patient.profile_picture} alt={patient.name} />
  <h2>{patient.name}</h2>

  <div className="profile-details">
    <div className="detail-item">
   
      <span><span className="detail-label">Date Of Birth:</span> <span className="detail-value">{patient.date_of_birth}</span></span>
    </div>

    <div className="detail-item">
  
      <span><span className="detail-label">Gender:</span> <span className="detail-value">{patient.gender}</span></span>
    </div>

    <div className="detail-item">
   
      <span><span className="detail-label">Contact:</span> <span className="detail-value">{patient.phone_number}</span></span>
    </div>

    <div className="detail-item">
    
      <span><span className="detail-label">Emergency Contact:</span> <span className="detail-value">{patient.emergency_contact}</span></span>
    </div>

    <div className="detail-item">
    
      <span><span className="detail-label">Insurance:</span> <span className="detail-value">{patient.insurance_type}</span></span>
    </div>
  </div>

  <button className="info-button">Show All Information</button>
</div>

    
    
  );
}

export default PatientProfile;
