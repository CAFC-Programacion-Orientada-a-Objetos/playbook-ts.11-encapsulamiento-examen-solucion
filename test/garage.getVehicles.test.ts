import {Garage} from '../src/garage';
import {Vehicle} from '../src/vehicle';

describe('Método getVehicles de Garage', () => {
  let garage: Garage;
  const vehicles = [
    new Vehicle('Toyota', 'PLATE1', 2015, 80000),
    new Vehicle('Honda', 'PLATE2', 2019, 40000),
    new Vehicle('Nissan', 'PLATE3', 2015, 60000),
    new Vehicle('Ford', 'PLATE4', 2020, 20000),
    new Vehicle('Chevrolet', 'PLATE5', 2016, 30000),
    new Vehicle('Mazda', 'PLATE6', 2018, 50000),
  ];

  beforeEach(() => {
    garage = new Garage('Mike Johnson');
    vehicles.forEach((v) => garage.add(v));
  });

  test('debe filtrar vehículos por año', () => {
    const result = garage.getVehicles(2015);
    expect(result.length).toBe(2);
  });

  test('debe devolver un array vacío si no hay vehículos mayores al año indicado', () => {
    const result = garage.getVehicles(2021);
    expect(result.length).toBe(0);
  });
});
