console.log(cityGrowths);

// 1. Sort the cities in descending order
var sortedCities = cityGrowths.sort((a,b) => 
a.Increase_from_2016 - b.Increase_from_2016).reverse();

// 2. Select the top five cities in terms of growth
var topFiveCities = sortedCities.slice(0,5);

// 3. Create arrays for city names and population growth
var topFiveCityNames = cityGrowths.map(city => city.City);

var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// 4. Create bar chart with the arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};

var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};

Plotly.newPlot("bar-plot", data, layout);