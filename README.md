# Healthcare Dashboard
A clean Healthcare Dashboard built in React.js fetching patient data via API, displaying vitals, diagnosis history, and lab results with modern UI.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

✅ Fetches patient data (Jessica Taylor) securely from a provided API.

✅ Displays Diagnosis History (Blood Pressure trends) using Chart.js.

✅ Shows Patient Profile with Name, DOB, Gender, Contact, Emergency Contact, Insurance.

✅ Displays Vitals: Respiratory Rate, Temperature, and Heart Rate.

✅ Lists Diagnostic Problems and their status (e.g., Under Observation, Cured).

✅ Lists Lab Results with Download icons.

✅ Fully responsive and clean design using custom CSS.

In the project directory, you can run:

### Tech Stack

React.js (Frontend)

Chart.js (Graphs)

Custom CSS (Styling)

API Authentication (Basic Auth)

### API Details

Data is fetched from:

https://fedskillstest.coalitiontechnologies.workers.dev

Authorization: Basic Authentication (Username: coalition, Password: skills-test)

Only Jessica Taylor's data is displayed as per the test instructions.


### `How to Run

Clone this repository:

git clone https://github.com/your-username/healthcare-dashboard.git

Install dependencies:

npm install

Start the application:

npm start

### Folder Structure
/public
   /icons  -> Custom Icons
/src
   /components
      - DiagnosisHistory.js
      - InfoCards.js
      - PatientProfile.js
      - DiagnosticList.js
      - LabResults.js
   /api
      - API call logic
   App.js
   App.css
   README.md


### Full Dashboard View
![Dashboard Screenshot](icons/Dashboard.png)