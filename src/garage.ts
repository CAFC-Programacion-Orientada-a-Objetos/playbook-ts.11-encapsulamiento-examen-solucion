/*
## :two: La clase Garage

### Atributos

| Tipo      | Nombre    | Descripción            |
| --------- | --------- | ---------------------- |
| string    | ownerName | Nombre del dueño       |
| Vehicle[] | vehicles  | Vehículos en el garaje |

### Método constructor

```typescript
constructor(ownerName: string)
```

#### 01 Garage.addVehicle

Método que agrega un vehículo al garaje. No debe permitir agregar vehículos duplicados, es decir, con la misma placa. Regresa `true` si se agregó el vehículo y `false` si no se agregó.

```typescript
add(vehicle: Vehicle): boolean
```

#### 02 Garage.removeVehicle

Método que elimina un vehículo del garaje. El vehículo se identifica por su placa. Regresa el número de vehículos restantes en el garaje después de eliminar el vehículo. Si no se encuentra el vehículo, regresa `-1`.

```typescript
remove(plate: string): number
```

#### 03 Garage.getVehicles

Método que regresa una lista de vehículos del garaje que son del año indicado. Si no hay vehículos, regresa un arreglo vacío.

```typescript
getVehicles(year: number): Vehicle[]
```

#### 04 Garage.getOlderThan

Método que regresa el número total de vehículos que son más viejos que el año indicado. Si no hay vehículos, regresa `0`.

```typescript
getOlderThan(year: number): number
```

#### 03 Garage.getMostUsed

Método que regresa la placa del vehículo que tiene más kilómetros recorridos. Si no hay vehículos, regresa `null`.

```typescript
getMostUsed(): string | null
```
*/

import {Vehicle} from './vehicle';

export class Garage {
  private _ownerName: string;
  private _vehicles: Vehicle[];

  constructor(ownerName: string) {
    this._ownerName = ownerName;
    this._vehicles = [];
  }

  add(vehicle: Vehicle): boolean {
    if (this._vehicles.some((v) => v.isPlate(vehicle.plate))) {
      return false; // Vehicle with the same plate already exists
    }
    this._vehicles.push(vehicle);
    return true;
  }

  remove(plate: string): number {
    const index = this._vehicles.findIndex((v) => v.isPlate(plate));
    if (index === -1) {
      return -1; // Vehicle not found
    }
    this._vehicles.splice(index, 1);
    return this._vehicles.length;
  }

  // Método que regresa una lista de vehículos del garaje que son del año indicado. Si no hay vehículos, regresa un arreglo vacío.
  getVehicles(year: number): Vehicle[] {
    const vehicles = this._vehicles.filter((v) => v.year === year);
    return vehicles.length > 0 ? vehicles : [];
  }

  // Método que regresa el número total de vehículos que son más viejos que el año indicado. Si no hay vehículos, regresa `0`.
  getOlderThan(year: number): number {
    const vehicles = this._vehicles.filter((v) => v.isOlderThan(year));
    return vehicles.length > 0 ? vehicles.length : 0;
  }

  getMostUsed(): string | null {
    if (this._vehicles.length === 0) {
      return null; // No vehicles in the garage
    }
    const mostUsedVehicle = this._vehicles.reduce((prev, curr) =>
      prev.hasMoreThan(curr.kilometers) ? prev : curr);
    return mostUsedVehicle.plate;
  }

  get ownerName(): string {
    return this._ownerName;
  }
}