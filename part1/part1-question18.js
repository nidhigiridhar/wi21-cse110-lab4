let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let key in statistics) {
    // print out value of property is value is odd or property starts with letter r 
    if ((statistics[key] % 2 != 0) || key.charAt(0) == 'r') {
        console.log(statistics[key]);
    }
}