//* arrow functions (anonymous) assiged to a variable (named)
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  a - b;
};

//* named functions
function divide(a: number, b: number) {
  a / b;
}

//* anonymous functions assigned to a variable (named)
const multiply = function (a: number, b: number) {
  a * b;
};

//* void
const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

//* destructuring
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
