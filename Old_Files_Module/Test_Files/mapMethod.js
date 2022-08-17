var numbers = [0,2,4,6,8];

var addFive = numbers.map(function(integer) {
    return integer + 5;
});

console.log(addFive);


var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(city){
    return city.population;
});
console.log(cityPop);


var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sWords = words.filter(function(word){
    return word.startsWith('s');
});

var firstThree = words.slice(0,2);
console.log(firstThree);