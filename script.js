let slideIndex = 1;
showSlide(slideIndex);

let intervalId;

function startSlider() {
  intervalId = setInterval(() => {
    changeSlide(1);
  }, 3000); // Change image every 3 seconds (adjust as needed)
}

function stopSlider() {
  clearInterval(intervalId);
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

startSlider(); // Start the automatic image change



    // Sample historical water level data (replace this with your actual data)
const waterLevelData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Water Levels",
      data: [50, 55, 60, 58, 62, 57], // Example data, replace with your actual data
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.1)",
      borderWidth: 1
    }]
  };

  // Get the canvas element
  const ctx = document.getElementById("waterLevelChart").getContext("2d");

  // Create the chart
  const waterLevelChart = new Chart(ctx, {
    type: "line",
    data: waterLevelData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



 
  