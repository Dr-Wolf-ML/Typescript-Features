const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// help with preventing adding incompatible values
carMakers.push(100);

// help with map, forEach, reduce functions
carMakers.map(
  (car: string): string => {
    return car;
  }
);

// flexible types (multiple)
const importantDates: (Date | string)[] = [new Date()];
importantDates.push(new Date());
importantDates.push('2019-10-10');
importantDates.push(100);
