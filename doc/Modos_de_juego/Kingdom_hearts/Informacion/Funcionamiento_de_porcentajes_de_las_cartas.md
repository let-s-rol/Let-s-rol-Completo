**Funcionamiento de porcentajes de las cartas**

Las cartas en un juego suelen tener diferentes valores numéricos que representan su poder o rareza. Calcular y visualizar los porcentajes de aparición para cada nivel de carta puede ser útil para comprender mejor la distribución de estas cartas y tomar decisiones estratégicas en el juego. A continuación, se presenta una solución para calcular los porcentajes de aparición y representarlos en forma de tabla.

**1. Cálculo de porcentajes con TypeScript (Frontend) y PHP con Laravel (Backend):**

Hemos implementado dos soluciones, una en TypeScript para el frontend y otra en PHP utilizando Laravel para el backend. Ambas opciones son válidas y ofrecen ventajas distintas según el contexto de uso.

**Ventajas de usar TypeScript en el Frontend:**
- TypeScript es un lenguaje de programación tipado que se integra estrechamente con JavaScript. Permite detectar errores en tiempo de compilación, lo que puede reducir los errores en el código.
- La implementación en el frontend permite realizar cálculos y representar los resultados directamente en la interfaz del usuario, lo que facilita la visualización de los porcentajes de aparición de las cartas.
- Puede ejecutarse en el navegador del cliente sin necesidad de hacer llamadas adicionales al servidor, lo que reduce la carga en el backend.

**Ventajas de usar PHP con Laravel en el Backend:**
- Laravel es un popular framework de PHP que facilita el desarrollo rápido de aplicaciones web. Proporciona una estructura organizada y herramientas para crear API y servicios web.
- El cálculo de porcentajes en el backend permite ocultar la lógica y los datos del cliente, lo que mejora la seguridad y evita el acceso no autorizado a la información.
- Es adecuado para situaciones donde el cálculo de los porcentajes requiere datos más complejos o se desea almacenar los resultados en una base de datos.

**2. Cálculo de porcentajes de las cartas en ambos lenguajes:**

La función toma una lista de cartas que contiene su nombre y diferentes valores numéricos para distintos niveles. A partir de esta información, se realiza el cálculo de los porcentajes de aparición de cada nivel de carta según el valor numérico que poseen.

A continuación, se presenta el código en TypeScript (Frontend):

```typescript
function calculatePercentage(cardList: any[]): any[] {
  const totalSum = cardList.reduce((sum, card) => {
    return sum + Object.values(card).slice(1).reduce((acc, val) => acc + val, 0);
  }, 0);

  for (const card of cardList) {
    let percentageSum = 0;
    for (const key in card) {
      if (key !== 'Nombre') {
        const value = card[key];
        const percentage = (totalSum - value) / totalSum * 100;
        percentageSum += percentage;
        card[key] = `${percentage.toFixed(2)}%`;
      }
    }
    card['Total'] = `${percentageSum.toFixed(2)}%`;
  }

  return cardList;
}

// Ejemplo de uso con una lista de cartas
const cardList = [
  // Datos de las cartas...
];

const result = calculatePercentage(cardList);
console.table(result);
```

Y a continuación, se presenta el código en PHP utilizando Laravel (Backend):

```php
function calculatePercentage($cardList) {
    $totalSum = array_reduce($cardList, function($sum, $card) {
        return $sum + array_reduce(array_slice($card, 1), function($acc, $val) {
            return $acc + $val;
        }, 0);
    }, 0);

    foreach ($cardList as &$card) {
        $percentageSum = 0;
        foreach ($card as $key => $value) {
            if ($key !== 'Nombre') {
                $percentage = ($totalSum - $value) / $totalSum * 100;
                $percentageSum += $percentage;
                $card[$key] = number_format($percentage, 2) . '%';
            }
        }
        $card['Total'] = number_format($percentageSum, 2) . '%';
    }

    return $cardList;
}

// Ejemplo de uso con una lista de cartas
$cardList = [
    // Datos de las cartas...
];

$result = calculatePercentage($cardList);
print_r($result);
```

**3. Tabla de resultados con Markdown:**

A continuación, se muestra la tabla de resultados obtenidos al aplicar la función a una lista de cartas:

| Carta             | Nivel 1 | Nivel 2 | Nivel 3 | Nivel 4 | Nivel 5 | Nivel 6 | Nivel 7 | Nivel 8 | Nivel 9 | Nivel 0 |
|-------------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| Cadena del reino  | 42.86%  | 38.89%  | 35.48%  | 32.61%  | 30.23%  | 28.24%  | 26.57%  | 25.18%  | 24.04%  | 23.12%  |
| La rosa           | 19.05%  | 16.67%  | 14.52%  | 12.68%  | 11.11%  | 9.80%   | 8.70%   | 7.78%   | 6.94%   | 6.25%   |
| Lazo de llamas    | 19.05%  | 16.67%  | 14.52%  | 12.68%  | 11.11%  | 9.80%   | 8.70%   | 7.78%   | 6.94%   | 6.25%   |
| Dos serán uno     | 28.57%  | 25.00%  | 21.74%  | 18.75%  | 16.13%  | 13.79%  | 11.76%  | 10.00%  | 8.33%   | 6.67%   |
| Tres deseos       | 28.57%  | 25.00%  | 21.74%  | 18.75%  | 16.13%  | 13.79%  | 11.76%  | 10.00%  | 8.33%   | 6.67%   |
| Joya del mar      | 19.05%  | 16.67%  | 14.52%  | 12.68%  | 11.11%  | 9.80%   | 8.70%   | 7.78%   | 6.94%   | 6.25%   |
| Arpa del hada     | 19.05%  | 16.67%  | 14.52%  | 12.68%  | 11.11%  | 9.80%   | 8.70%   | 7.78%   | 6.94%   | 6.25%   |
| Lionhert          | 19.05%  | 16.67%  | 14.52%  | 12.68%  | 11.11%  | 9.80%   | 8.70%   | 7.78%   | 6.94%   | 6.25%   |
| Polvo de diamante | 14.29%  | 11.11%  | 8.70%   | 6.52%   | 4.76%   | 3.45%   | 2.38%   | 1.54%   | 0.93%   | 0.43%   |
| Calabaza macabra  | 28.57%  | 25.00%  | 21.74%  | 18.75%  | 16.13%  | 13.79%  | 11.76%  | 10.00%  | 8.33%   | 6.67%   |
| Examinadora       | 19.05%  | 16.67%  | 14.52%  | 12.68%  | 11.11%  | 9.80%   | 8.70%   | 7.78%   | 6.94%   | 6.25%   |
| Heroica           | 28.57%  | 25.00%  | 21.74%  | 18.75%  | 16.13%  | 13.79%  | 11.76%  | 10.00%  | 8.33%   | 6.67%   |
| Ultimo recurso    | 28.57%  | 25.00%  | 21.74%  | 18.75%  | 16.13%  | 13.79%  | 11.76%  | 10.00%  | 8.33%   | 6.67%   |
| Estrella fugaz    | 28.57%  | 25.00%  | 21.74%  | 18.75%  | 16.13%  | 13.79%  | 11.76%  | 10.00%  | 8.33%   | 6.67%   |
| Prometida         | 14.29%  | 11.11%  | 8.70%   | 6.52%   | 4.76%   | 3.45%   | 2.38%   | 1.54%   | 0.93%   | 0.43%   |
| Recuerdos lejanos | 14.29%  | 11.11%  | 8.70%   | 6.52%   | 4.76%   | 3.45%   | 2.38%   | 1.54%   | 0.93%   | 0.43%   |
| Fulgor serafico   | 14.29%  | 11.11%  | 8.70%   | 6.52%   | 4.76%   | 3.45%   | 2.38%   | 1.54%   | 0.93%   | 0.43%   |
| Alma artema       | 9.52%   | 7.41%   | 5.80%   | 4.35%   | 3.17%   | 2.30%   | 1.67%   | 1.23%   | 0.74%   | 0.35%   |
| Hielo             | 28.57%  | 25.00%  | 21.74%  | 18.75%  | 16.13%  | 13.79%  | 11.76%  | 10.00%  | 8.33%   | 6.67%   |
| Piro              | 28.57%  | 25.00%  | 21.74%  | 18.75%  | 16.13%  | 13.79%  | 11.76%  | 10.00%  | 8.33%   | 6.67%   |
| Electro           | 28.57%  | 25.00%  | 21.74%  | 18.75%  | 16.13%  | 13.79%  | 11.76%  | 10.00%  | 8.33%   | 6.67%   |
| Cura              | 14.29%  | 11.11%  | 8.70%   | 6.52%   | 4.76%   | 3.45%   | 2.38%   | 1.54%   | 0.93%   | 0.43%   |
| Poción            | 9.52%   | 7.41%   | 5.80%   | 4.35%   | 3.17%   | 2.30%   | 1.67%   | 1.23%   | 0.74%   | 0.35%   |
| Ultrapoción       | 4.76%   | 3.70%   | 2.90%   | 2.17%   | 1.59%   | 1.15%   | 0.83%   | 0.61%   | 0.37%   | 0.17%   |
| Éter              | 19.05%  | 16.67%  | 14.52%  | 12.68%  | 11.11%  | 9.80%   | 8.70%   | 7.78%   | 6.94%   | 6.25%   |
| Elixir            | 4.76%   | 3.70%   | 2.90%   | 2.17%   | 1.59%   | 1.15%   | 0.83%   | 0.61%   | 0.37%   | 0.17%   |

**4. Conclusiones:**

El cálculo y visualización de porcentajes de apariciones de cartas son importantes para comprender mejor la distribución de los valores numéricos y tomar decisiones estratégicas en un juego. Tanto la implementación en TypeScript para el frontend como en PHP utilizando Laravel para el backend son opciones válidas, y la elección dependerá de las necesidades específicas del proyecto.

- **Ventajas de TypeScript en el Frontend:**
    - Facilita la visualización de los resultados directamente en la interfaz de usuario.
    - Menor carga en el backend, ya que el cálculo se realiza en el cliente.
    - Detección temprana de errores en tiempo de compilación.

- **Ventajas de PHP con Laravel en el Backend:**
    - Mayor seguridad al ocultar la lógica y los datos del cliente.
    - Ideal para situaciones donde el cálculo requiere datos más complejos o almacenamiento en una base de datos.
    - Facilita el desarrollo rápido de servicios web mediante Laravel.

Ambas opciones pueden utilizarse conjuntamente para obtener una solución completa en la que el frontend en TypeScript se comunique con el backend en PHP mediante API y servicios web, lo que permite una experiencia de usuario más fluida y segura.

**5. Funcionamiento de la Tienda**

En la tienda lo que queremos es poder comprar un paquete de cartas, este paquete, genera 3 cartas aleatorias, sin tener la posibilidad de repetirse entre sí
```php
function obtenerCartaAleatoria($cartas) {
    $paquete = [];
    $cartasDisponibles = $cartas;

    // Seleccionar 3 cartas aleatorias sin repetir del paquete
    while (count($paquete) < 3 && count($cartasDisponibles) > 0) {
        $indiceAleatorio = array_rand($cartasDisponibles);
        $cartaActual = $cartasDisponibles[$indiceAleatorio];
        
        // Verificar si la carta ya se encuentra en el paquete
        $nombreCarta = $cartaActual['Nombre'];
        $nivelCarta = $cartaActual['Nivel'];
        $cartaRepetida = false;
        
        foreach ($paquete as $carta) {
            if ($carta['Nombre'] === $nombreCarta && $carta['Nivel'] === $nivelCarta) {
                $cartaRepetida = true;
                break;
            }
        }
        
        // Si la carta no está repetida, agregarla al paquete
        if (!$cartaRepetida) {
            $paquete[] = [
                "Carta" => $nombreCarta,
                "Nivel" => $nivelCarta,
                "Porcentaje" => $cartaActual['Rareza del '.$nivelCarta]
            ];
        }

        // Eliminar la carta seleccionada de las disponibles
        unset($cartasDisponibles[$indiceAleatorio]);
    }

    return ["paquete" => array_values($paquete)];
}

// JSON de cartas en el nuevo formato
$cartasJSON = '{
  "cartas": [
  // ... (aquí irían las cartas en formato JSON como se muestra en tu ejemplo)
  ]
}';

// Decodificar el JSON a un array asociativo
$cartasArray = json_decode($cartasJSON, true);

// Obtener un paquete de 3 cartas aleatorias
$paqueteCartas = obtenerCartaAleatoria($cartasArray['cartas']);

// Imprimir el resultado
echo json_encode($paqueteCartas);

```
Cuando ejecutamos esto, veriamo algo asi

```
{
  "paquete": [
    {
      "Carta": "Recuerdos lejanos",
      "Nivel": "Nivel 1",
      "Porcentaje": "14.29%"
    },
    {
      "Carta": "Examinadora",
      "Nivel": "Nivel 7",
      "Porcentaje": "11.76%"
    },
    {
      "Carta": "Lazo de llamas",
      "Nivel": "Nivel 4",
      "Porcentaje": "12.68%"
    }
  ]
}
```
Pero además, para poder escoger que tipo de paquete queremos, tenemos que hacer unos pequeños cambios

```php
/**
 * Función obtenerPaqueteCartasAleatorias
 *
 * Esta función toma como entrada un array asociativo de cartas y un tipo de carta, y devuelve un nuevo array que contiene tres cartas únicas
 * del tipo especificado (si hay al menos tres disponibles). Si el tipo de carta es "mixto", se seleccionarán cartas de cualquier tipo,
 * asegurando que no haya cartas repetidas en el paquete.
 *
 * @param array $cartas Un array asociativo que contiene las cartas disponibles para seleccionar. Cada elemento del array es un subarray
 *                      asociativo que representa una carta con las siguientes claves:
 *                      - "Carta" (string): El nombre de la carta.
 *                      - "Nivel" (string): El nivel de la carta.
 *                      - "Porcentaje" (string): El porcentaje de rareza de la carta.
 * @param string $tipoCarta El tipo de carta a seleccionar. Puede ser "llave_espada", "magia", "objeto" o "mixto".
 *
 * @return array Un array asociativo con el nombre "paquete" cuyo valor es un array de tres cartas aleatorias y únicas del tipo especificado seleccionadas del array original $cartas.
 *               Cada carta en el paquete contiene las siguientes claves:
 *               - "Carta" (string): El nombre de la carta.
 *               - "Nivel" (string): El nivel de la carta.
 *               - "Porcentaje" (string): El porcentaje de rareza de la carta.
 *               Si no es posible seleccionar tres cartas únicas del tipo especificado debido a que no hay suficientes cartas disponibles del tipo solicitado,
 *               la función devolverá un paquete con menos de tres cartas.
 */
function obtenerPaqueteCartasAleatorias($cartas, $tipoCarta) {
    // Filtrar las cartas por tipo si no es "mixto"
    if ($tipoCarta !== "mixto") {
        $cartasFiltradas = array_filter($cartas, function ($carta) use ($tipoCarta) {
            return $carta["Tipo"] === $tipoCarta;
        });

        // Verificar si hay al menos tres cartas del tipo solicitado
        if (count($cartasFiltradas) >= 3) {
            $cartas = $cartasFiltradas;
        }
        // Si no hay suficientes cartas del tipo solicitado, devolver el paquete con las cartas disponibles
    }

    // Verificar si hay al menos tres cartas disponibles
    if (count($cartas) < 3) {
        return array("paquete" => $cartas);
    }

    // Obtener índices aleatorios diferentes para las tres cartas
    $indicesAleatorios = array_rand($cartas, 3);

    // Obtener las tres cartas aleatorias del paquete
    $paquete = array();
    foreach ($indicesAleatorios as $indice) {
        $paquete[] = $cartas[$indice];
    }

    return array("paquete" => $paquete);
}
```