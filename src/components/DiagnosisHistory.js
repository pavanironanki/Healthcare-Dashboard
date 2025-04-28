import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function DiagnosisHistory({ patient }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (!patient || !patient.diagnosis_history) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: patient.diagnosis_history.map(item => item.month),
        datasets: [
          {
            label: 'Systolic',
            data: patient.diagnosis_history.map(item => item.blood_pressure.systolic.value),
            borderColor: 'purple',
            backgroundColor: 'purple',
          },
          {
            label: 'Diastolic',
            data: patient.diagnosis_history.map(item => item.blood_pressure.diastolic.value),
            borderColor: 'pink',
            backgroundColor: 'pink',
          }
        ]
      },
      options: {
        responsive: true,
      }
    });
  }, [patient]);

  return (
    <div className="diagnosis-history">
      <h2>Diagnosis History</h2>
      <canvas ref={chartRef}></canvas>

      {/* ➡️ ADD INFO CARDS HERE (after Chart) */}
      <div className="info-cards">
        <div className="info-card blue-card">
          <img src="/icons/respiratory_rate.png" alt="Respiratory Rate" className="info-icon" />
          <h3>Respiratory Rate</h3>
          <p className="info-value">20 bpm</p>
          <p className="info-status">Normal</p>
        </div>

        <div className="info-card pink-card">
          <img src="/icons/temperature.png" alt="Temperature" className="info-icon" />
          <h3>Temperature</h3>
          <p className="info-value">98.6°F</p>
          <p className="info-status">Normal</p>
        </div>

        <div className="info-card red-card">
          <img src="/icons/HeartBPM.png" alt="Heart Rate" className="info-icon" />
          <h3>Heart Rate</h3>
          <p className="info-value">78 bpm</p>
          <p className="info-status lower">Lower than Average</p>
        </div>
      </div>

    </div>
  );
}

export default DiagnosisHistory;
