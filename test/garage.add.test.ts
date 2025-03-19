import {Garage} from '../src/garage';
import {Vehicle} from '../src/vehicle';

describe('Método add de Garage', () => {
  let garage: Garage;
  const testVehicle = new Vehicle('Toyota', 'ABC123', 2015, 50000 );

  beforeEach(() => {
    garage = new Garage('John Doe');
  });

  test('debe agregar un vehículo nuevo con éxito', () => {
    expect(garage.add(testVehicle)).toBe(true);
    expect(garage['_vehicles'].length).toBe(1);
  });

  test('debe rechazar un vehículo con placa duplicada', () => {
    garage.add(testVehicle);
    const duplicateVehicle = new Vehicle('Honda', 'ABC123', 2018, 40000);
    expect(garage.add(duplicateVehicle)).toBe(false);
    expect(garage['_vehicles'].length).toBe(1);
  });
});

