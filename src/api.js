export const getPatientData = async () => {
    try {
      const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
          'Authorization': 'Basic ' + btoa('coalition:skills-test')
        }
      });
  
      const data = await response.json();
      const jessica = data.find(patient => patient.name === "Jessica Taylor");
      return jessica;
  
    } catch (error) {
      console.error('Error fetching patient data:', error);
      return null;
    }
  };
  