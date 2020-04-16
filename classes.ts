class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class CarMaker extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vrooom');
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const aNewCar = new CarMaker(4, 'red');
aNewCar.startDrivingProcess();
