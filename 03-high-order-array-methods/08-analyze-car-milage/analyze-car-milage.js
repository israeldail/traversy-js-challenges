const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
    { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
    { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
    { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
];

function analyzeCarMileage(cars) {
    // Get the total mileage of all cars by adding the mileage of each car to the sum
    const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);
    // Get the average mileage by dividing the total mileage by the number of cars
    const averageMileage = totalMileage / cars.length;
    // Get the car with the highest mileage by comparing the mileage of each car to the highest mileage so far
    const highestMileageCar = cars.reduce(
        (highest, car) => (car.mileage > highest.mileage ? car : highest),
        cars[0]
    );
    // Get the car with the lowest mileage by comparing the mileage of each car to the lowest mileage so far
    const lowestMileageCar = cars.reduce(
        (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
        cars[0]
    );

    // Return an object with the average mileage, the car with the highest mileage, the car with the lowest mileage, and the total mileage
    return {
        averageMileage: parseFloat(averageMileage.toFixed(2)),
        highestMileageCar,
        lowestMileageCar,
        totalMileage,
    };
}

module.exports = analyzeCarMileage;
