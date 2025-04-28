import React from 'react';

function DiagnosticList({ patient }) {
  return (
    <div className="diagnostic-list">
      <h2>Diagnostic List</h2>
      <table>
        <thead>
          <tr>
            <th>Problem</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {patient.diagnostic_list && patient.diagnostic_list.length > 0 ? (
            patient.diagnostic_list.map((diagnosis, index) => (
              <tr key={index}>
                <td>{diagnosis.name}</td>
                <td>{diagnosis.description}</td>
                <td>{diagnosis.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No diagnostic information available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DiagnosticList;
