import React from 'react';

const LabResults = ({ patient }) => {
  return (
    <div className="lab-results">
      <h2>Lab Results</h2>
      <ul>
        {patient.lab_results.map((result, index) => (
          <li key={index} className="lab-result-item">
            <div className="lab-result-content">
              <span>{result}</span>
             <span> <img src="/icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg" alt="Download" className="download-icon" /></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
