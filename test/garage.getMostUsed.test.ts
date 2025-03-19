import {Garage} from '../src/garage';
import {Vehicle} from '../src/vehicle';

describe('Método getMostUsed de Garage', () => {
  let garage: Garage;
  const vehicles = [
    new Vehicle('Subaru', 'HIGHKM1', 2018, 120000),
    new Vehicle('Mazda', 'MIDKM1', 2019, 80000),
    new Vehicle('Volkswagen', 'LOWKM1', 2020, 30000)];

  beforeEach(() => {
    garage = new Garage('Emily Davis');
    vehicles.forEach((v) => garage.add(v));
  });

  test('debe devolver la placa del vehículo más usado', () => {
    expect(garage.getMostUsed()).toBe('HIGHKM1');
  });

  test('debe devolver null para un garaje vacío', () => {
    const emptyGarage = new Garage('Dueño de prueba');
    expect(emptyGarage.getMostUsed()).toBeNull();
  });

  test('debe devolver la placa del vehículo más usado', () => {
    garage.add(new Vehicle('Toyota', 'HIGHKM2', 2018, 150000));
    expect(garage.getMostUsed()).toBe('HIGHKM2');
  });
});
