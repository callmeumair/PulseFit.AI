// Workout Form Submission
document.getElementById("workoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const workoutType = document.getElementById("workoutType").value;
    const duration = document.getElementById("duration").value;
    alert(`Workout Plan Saved!\nType: ${workoutType}\nDuration: ${duration} minutes`);
  });
  
  // Nutrition Form Submission
  document.getElementById("nutritionForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const mealType = document.getElementById("mealType").value;
    const calories = document.getElementById("calories").value;
    alert(`Nutrition Plan Saved!\nMeal: ${mealType}\nCalories: ${calories}`);
  });
  
  // Progress Chart
  const ctx = document.getElementById("progressChart").getContext("2d");
  const progressChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [{
        label: "Weight (kg)",
        data: [70, 68, 67, 66],
        borderColor: "#007BFF",
        fill: false,
      }],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });