import {Garage} from '../src/garage';
import {Vehicle} from '../src/vehicle';

describe('Método getOlderThan de Garage', () => {
  let garage: Garage;
  const vehicles = [
    new Vehicle('Chevrolet', 'CRUZE1', 2016, 50000),
    new Vehicle('Hyundai', 'ELANTRA1', 2019, 30000),
    new Vehicle('Kia', 'OPTIMA1', 2017, 45000),
    new Vehicle('Toyota', 'COROLLA1', 2018, 60000)];

  beforeEach(() => {
    garage = new Garage('Sarah Wilson');
    vehicles.forEach((v) => garage.add(v));
  });

  test('debe contar correctamente los vehículos más antiguos', () => {
    expect(garage.getOlderThan(2018)).toBe(2);
  });

  test('debe devolver 0 si no hay vehículos más viejos que el año indicado', () => {
    expect(garage.getOlderThan(2016)).toBe(0);
  });
});
