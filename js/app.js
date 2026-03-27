async function getPatientData() {
  const response = await fetch('https://coalitiontechnologiespatientdataapi.com/patients');
  const data = await response.json();
  const jessica = data.find(p => p.name === "Jessica Taylor");
  updateUI(jessica);
  renderChart(jessica);
}

function updateUI(patient) {
  document.getElementById('patient-name').textContent = patient.name;
  document.getElementById('patient-age').textContent = `Age: ${patient.age}`;
}

function renderChart(patient) {
  const ctx = document.getElementById('bpChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: patient.bloodPressure.map(bp => bp.year),
      datasets: [{
        label: 'Blood Pressure',
        data: patient.bloodPressure.map(bp => bp.value),
        borderColor: '#4A90E2',
        fill: false
      }]
    },
    options: { responsive: true }
  });
}

getPatientData();
document.getElementById('patient-name').textContent = patient.name;
document.getElementById('patient-age').textContent = `Age: ${patient.age}`;

