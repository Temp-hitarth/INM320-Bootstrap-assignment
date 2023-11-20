var originalData = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
    datasets: [{
      label: 'Today',
      data: [25, 22, 30, 18, 35, 40, 32, 50, 45, 48, 38, 42, 28, 35, 40, 45, 50, 45, 40, 35, 30, 25, 20],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
      fill: false,
      pointRadius: 4,
    },
    {
      label: 'Tomorrow',
      data: [30, 35, 40, 45, 50, 45, 40, 38, 32, 28, 22, 18, 25, 30, 35, 40, 45, 50, 45, 40, 35, 30, 28],
      borderColor: 'green',
      backgroundColor: 'rgba(0, 255, 0, 0.1)',
      fill: false,
      pointRadius: 4, 
    }]
  };

  // Options for the line chart
  var options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 0,
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        position: 'right',
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
      }
    },
    elements: {
      point: {
        radius: 0, // Set point radius to 0 to hide the data points
      },
      line: {
        borderWidth: 2,
        tension: 0.5,
        borderCapStyle: 'round',
      }
    }
  };

  // Get the canvas element
  var ctx = document.getElementById('chart').getContext('2d');

  // Create the line chart with original data
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: originalData,
    options: options
  });