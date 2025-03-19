<p></p>
<img src="img/logo.png" height="140">

 <img alt="calificación" align="right" height="28" src="../../blob/badges/.github/badges/points-label0.svg" />
  
# 😱 Examen: el principio de encapsulamiento

Este ejercicio tiene como objetivo evaluar el nivel de entendimiento y uso del principio de encapsulación en la programación orientada a objetos. Algunos de los conceptos que se abordan en este ejercicio son:

- **Métodos y Atributos Públicos:** Se trata la exposición directa de métodos y atributos, accesibles desde cualquier parte del programa.
- **Métodos y Atributos Privados:** Se destaca la importancia de limitar el acceso directo a ciertos elementos solo al interior de la clase, reforzando la encapsulación.
- **Métodos de Acceso de Lectura:** Se enfoca en la creación de métodos para obtener información de atributos sin alterar el estado interno del objeto.
- **Métodos de Acceso de Escritura:** Explora la implementación de métodos específicos para modificar atributos, asegurando validaciones antes de afectar el estado del objeto.

La encapsulación es clave para crear clases seguras y modulares, permitiendo un control preciso en sistemas orientados a objetos.

# 📋 Instrucciones

1. Utilizando `typescript` codifica las clases que se indican en la sección `requerimientos funcionales` de este documento.
2. Los nombres de los métodos, clases y parámetros deberán ser los mismos que los que se indican en cada caso
3. En el archivo `demo.ts` se debe incluir código que muestre el funcionamiento correcto de cada clase y método
4. Cada clase se debe codificar en un archivo propio. NO puede haber dos o más clases en un mismo archivo
5. El programa debe funcionar en consola
6. El ejercicio se resuelve de manera individual

# 📥 Entregables

- Código fuente de la solución a los requerimientos planteados en la sección `requerimientos funcionales` en este repositorio

# :star: Evaluación

- Para que el ejercicio sea considerada como válido, el repositorio deberá tener por lo menos 1 commit por cada función.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y obtendrán cero como calificación.
- Los ejercicios deben pasar las pruebas automatizadas

# 💯 Calificación

| Num | Función             | Puntos                                                                              |
| --- | ------------------- | ----------------------------------------------------------------------------------- |
| 01  | Garage.add          | <img alt="calificación" src="../../blob/badges/.github/badges/points-label1.svg" /> |
| 02  | Garage.remove       | <img alt="calificación" src="../../blob/badges/.github/badges/points-label2.svg" /> |
| 03  | Garage.getVehicles  | <img alt="calificación" src="../../blob/badges/.github/badges/points-label3.svg" /> |
| 04  | Garage.getOlderThan | <img alt="calificación" src="../../blob/badges/.github/badges/points-label4.svg" /> |
| 05  | Garage.getMostUsed  | <img alt="calificación" src="../../blob/badges/.github/badges/points-label5.svg" /> |
|     |                     | <img alt="calificación" src="../../blob/badges/.github/badges/points-label0.svg" /> |

# 👨‍💻 Requerimientos funcionales

> [!IMPORTANT]  
> Todas las clases deben estar encapsuladas

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

## :two: La clase Garage

### Atributos

| Tipo      | Nombre    | Descripción            |
| --------- | --------- | ---------------------- |
| string    | ownerName | Nombre del dueño       |
| Vehicle[] | vehicles  | Vehículos en el garaje |

### Método constructor

```typescript
constructor(ownerName);
```

#### 01 Garage.add

Método que agrega un vehículo al garaje. No debe permitir agregar vehículos duplicados, es decir, con la misma placa. Regresa `true` si se agregó el vehículo y `false` si no se agregó.

```typescript
add(vehicle: Vehicle): boolean
```

#### 02 Garage.remove

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

#### 05 Garage.getMostUsed

Método que regresa la placa del vehículo que tiene más kilómetros recorridos. Si no hay vehículos, regresa `null`.

```typescript
getMostUsed(): string | null
```

# 🪲 Depurar

Para habilitar la ejecución del depurador ejecutar

```

npm install ts-node --save-dev

```

# 🚀 Ejecutar

Para ejecutar un programa utilizar:

```

npx ts-node nombre-archivo

```

Por ejemplo:

```

npx ts-node demo

```

# 🚦 Pruebas unitarias

Para ejecutar una prueba unitaria utilizar:

```

npm test clase.metodo

```

Por ejemplo:

```

npm test student.getInitials

```

# :octocat: Git flow

<details>
 <summary>Ver comandos para actualizar el repositorio</summary>

## Actualizacón del repositorio local

Cada vez que se terminó e actualizar uno o más archivo utilizar, pasar los cambios a `staging` utilizando:

```

git add archivo.ext

```

Un `git add` por cada archivo que se actualizó

---

Una vez que se agregaron los archivo para la nueva versión, confirmar la nueva versión utilizando:

```

git commit -m "mensaje"

```

> Si al hacer `commit` el linter detecta errores: 1. Corregir los errores, 2. Volver a hacer git add por cada archivo corregido 3. Volver a hacer el commit. Repetir estos 3 pasos hasta que no se obtengan errores por el linter.

## Actualización del repositorio remoto

Para enviar las actualizaciones al repositorio remoto utilizar:

```

git push origin

```

</details>

Shield: [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

Esta obra está bajo una
[Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

```

```

```

```
