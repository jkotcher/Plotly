var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey"
};

Plotly.newPlot("plotArea", [trace], layout);



Plotly.newPlot("plotArea2", [{x: [5, 10, 15], y: [10, 20, 30]}]);