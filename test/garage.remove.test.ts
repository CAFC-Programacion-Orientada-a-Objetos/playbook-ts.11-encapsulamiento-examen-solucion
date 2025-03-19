import {Garage} from '../src/garage';
import {Vehicle} from '../src/vehicle';

describe('Método remove de Garage', () => {
  let garage: Garage;
  const testVehicle = new Vehicle('Ford', 'XYZ789', 2020, 30000);

  beforeEach(() => {
    garage = new Garage('Jane Smith');
    garage.add(testVehicle);
  });

  test('debe eliminar un vehículo existente', () => {
    expect(garage.remove('XYZ789')).toBe(0);
    expect(garage['_vehicles'].length).toBe(0);
  });

  test('debe devolver -1 para una placa no existente', () => {
    expect(garage.remove('NOEXISTENT')).toBe(-1);
  });
});
