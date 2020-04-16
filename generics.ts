class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<number>([1, 2, 3]);
new ArrayOfAnything<string>(['a', 'b', 'c']);

//* Example generics with functions

function printStrings(arr: string[]): void {
  arr.map((item) => console.log(item));
}

function printNumbers(arr: number[]): void {
  arr.map((item) => console.log(item));
}

function printAnything<T>(arr: T[]) {
  arr.map((item) => console.log(item));
}

printAnything<string>(['a', 'b', 'c']);

//* Generic constraints

class Car {
  print() {
    console.log('I am a car.');
  }
}

class House {
  print() {
    console.log('I am a house.');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car | House>([
  new Car(),
  new House(),
  new House(),
  new Car(),
]);
printHousesOrCars<number[]>([1, 2, 3, 4]);
printHousesOrCars<string[]>(['a', 'b', 'c']);
