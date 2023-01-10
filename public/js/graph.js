const workoutData = fetch("/api/workout", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
});

console.log(workoutData);

workoutData
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);

    const ctx = document.getElementById("workoutChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [data[0].name, data[1].name, data[2].name],
        datasets: [
          {
            label: "Reps",
            data: [data[0].reps, data[1].reps, data[2].reps],
            borderColor: "white",
            backgroundColor: "white",
            pointBackgroundColor: "#55bae7",
            pointBorderColor: "#55bae7",
            pointHoverBackgroundColor: "#55bae7",
            pointHoverBorderColor: "#55bae7",
          },
          {
            label: "Sets",
            data: [data[0].sets, data[1].sets, data[2].sets],
            borderColor: "green",
            backgroundColor: "green",
            pointBackgroundColor: "#green",
            pointBorderColor: "#green",
            pointHoverBackgroundColor: "#green",
            pointHoverBorderColor: "#green",
          },

          {
            label: "Weight",
            data: [data[0].weight, data[1].weight, data[2].weight],
            borderColor: "yellow",
            backgroundColor: "yellow",
            pointBackgroundColor: "#yellow",
            pointBorderColor: "#yellow",
            pointHoverBackgroundColor: "#yellow",
            pointHoverBorderColor: "#yellow",
          },
        ],
      },
    });
  });
