/*
## :one: La clase Vehicle

### Atributos

> [!NOTE]
> Deberás agregar los métodos que consideres necesarios para que la clase funcione correctamente, incluyendo métodos de acceso de lectura y escritura.

| Tipo   | Nombre     | Descripción                     |
| ------ | ---------- | ------------------------------- |
| string | brand      | Marca del vehículo              |
| string | plate      | Placa del vehículo              |
| number | year       | Año de fabricación del vehículo |
| number | kilometers | Kilometraje del vehículo        |

### Métodos

#### Constructor

```typescript
constructor(brand: string, plate:string, year: number, mileage: number)
```

*/

export class Vehicle {
  private _brand: string;
  private _plate: string;
  private _year: number;
  private _kilometers: number;

  constructor(brand: string, plate: string, year: number, kilometers: number) {
    this._brand = brand;
    this._plate = plate;
    this._year = year;
    this._kilometers = kilometers;
  }

  getAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this._year;
  }

  get year(): number {
    return this._year;
  }

  get brand(): string {
    return this._brand;
  }

  get plate(): string {
    return this._plate;
  }

  get kilometers(): number {
    return this._kilometers;
  }

  isPlate(plate: string): boolean {
    return this._plate === plate;
  }

  isOlderThan(year: number): boolean {
    return this._year < year;
  }

  hasMoreThan(kilometers: number): boolean {
    return this._kilometers > kilometers;
  }
}