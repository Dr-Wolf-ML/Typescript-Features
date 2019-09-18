import 'reflect-metadata';

// Basics

const plane = {
  color: 'red'
  // airline: 'Virgin'
  // wingspan: 55
  // color[type]: 'metallic'
};

Reflect.defineMetadata('airline', 'Virgin', plane); // adds 'invisible' prop to plane
Reflect.defineMetadata('wingspan', 55, plane); // adds 'invisible' prop to plane
Reflect.defineMetadata('type', 'metallic', plane, 'color'); // adds 'invisible' prop to plane

const airline = Reflect.getMetadata('airline', plane);
const wingspan = Reflect.getMetadata('wingspan', plane);
const type = Reflect.getMetadata('type', plane, 'color');

// console.log(airline);
// console.log(wingspan);
// console.log(type);

// Practical

@printMetadata
class Jet {
  color: string = 'red';

  @markFunction('Top Secret')
  fly(): void {
    console.log('vrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function(target: Jet, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata('secret', Jet.prototype, 'fly');

console.log('From @markFunction: ', secret);

function printMetadata(target: typeof Jet) {
  for (let key in target.prototype) {
    const secret2 = Reflect.getMetadata('secret', target.prototype, key);
    console.log('From @printMetadata: ', secret2);
  }
}
