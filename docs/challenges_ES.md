# 🚀 PyMission Control — Casos de Prueba de Desafíos (Español)

> Comportamiento esperado en lenguaje natural para cada desafío de lección en los 10 capítulos.
> Usa estas descripciones para escribir las entradas `testCode` y `expectedOutput` en la base de datos.

---

## Capítulo 1 — Reinicio del Sistema

### Lección 1 · ¡Hola, Espacio!

**Desafío:** Imprimir el mensaje de socorro del astronauta en la consola.

**Comportamiento Esperado:**
- El programa debe llamar a `print()` al menos una vez.
- La salida debe contener la frase `"señal de socorro"` (sin distinguir mayúsculas/minúsculas).
- La salida debe ser una cadena no vacía.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
Señal de socorro del Comandante Orion. ¿Me reciben?
```

---

### Lección 2 · Nombrando la Misión

**Desafío:** Declarar variables para el nombre de la nave, el número de tripulantes y el nivel de combustible, luego imprimirlas.

**Comportamiento Esperado:**
- Se deben declarar al menos tres variables: una cadena (nombre de la nave), un entero (número de tripulantes) y un número (nivel de combustible).
- Cada variable debe imprimirse o incluirse en una salida impresa.
- Los nombres de las variables deben ser descriptivos (no letras sueltas como `a`, `b`, `c`).
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
Nave: Ares VII
Tripulación: 1
Combustible: 80.5
```

---

### Lección 3 · Datos en el Cosmos

**Desafío:** Declarar una variable de cada tipo (`int`, `float`, `str`, `bool`) e imprimir cada valor junto con su tipo usando `type()`.

**Comportamiento Esperado:**
- Deben declararse exactamente cuatro variables, una de cada tipo.
- Cada variable debe imprimirse junto con su tipo usando `type()`.
- La salida debe mostrar `<class 'int'>`, `<class 'float'>`, `<class 'str'>`, `<class 'bool'>` para las variables correspondientes.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
42 <class 'int'>
3.7 <class 'float'>
Ares VII <class 'str'>
True <class 'bool'>
```

---

### Lección 4 · Reportes de Estado

**Desafío:** Dadas variables pre-declaradas para el nombre de la nave, el nivel de oxígeno y el combustible, construir e imprimir un reporte de estado usando un f-string.

**Comportamiento Esperado:**
- La salida debe ser una cadena formateada construida con un f-string (no concatenación simple).
- La salida debe incluir el nombre de la nave, el nivel de oxígeno y el nivel de combustible interpolados desde variables.
- El mensaje debe leerse naturalmente como un reporte de estado.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
NAVE: Ares VII | Oxígeno: 72% | Combustible: 80.5 unidades
```

---

### Lección 5 · Anotar los Registros

**Desafío:** Escribir un script con al menos tres comentarios que expliquen qué hace cada sección del código, más una sentencia `print` para una entrada del registro de misión.

**Comportamiento Esperado:**
- El código fuente debe contener al menos tres comentarios de una línea (`#`).
- Los comentarios deben ser no vacíos y significativos (no solo `# comentario`).
- El programa debe producir al menos una línea de salida impresa.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
Entrada del registro de misión registrada.
```

---

## Capítulo 2 — Calculando el Reingreso

### Lección 1 · Matemáticas del Propulsor

**Desafío:** Dadas la distancia de la nave a una órbita segura (km) y la velocidad de empuje (km/s) como variables pre-declaradas, calcular e imprimir el tiempo de encendido en segundos.

**Comportamiento Esperado:**
- El programa debe calcular `tiempo_encendido = distancia / velocidad` usando el operador de división.
- El resultado debe imprimirse con una etiqueta clara.
- La salida debe ser un número positivo.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
Tiempo de encendido: 45.0 segundos
```

---

### Lección 2 · Ratios de Combustible

**Desafío:** Dadas las unidades totales de combustible y la tasa de consumo por encendido, calcular cuántos encendidos completos son posibles y cuántas unidades quedan, usando `//` y `%`.

**Comportamiento Esperado:**
- El programa debe usar `//` (división entera) para calcular el número de encendidos completos.
- El programa debe usar `%` (módulo) para calcular el combustible restante.
- Ambos resultados deben imprimirse con etiquetas claras.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
Encendidos completos posibles: 4
Combustible restante: 3 unidades
```

---

### Lección 3 · Orden de Operaciones

**Desafío:** Calcular la velocidad de escape de la nave usando una fórmula que requiere la precedencia correcta de operadores: `v = (2 * masa * gravedad) / arrastre ** 2`. Se proporcionan variables pre-declaradas.

**Comportamiento Esperado:**
- La fórmula debe usar al menos tres operadores diferentes (`*`, `/`, `**`).
- El resultado debe usar paréntesis para garantizar el orden de cálculo correcto.
- El valor final de velocidad debe imprimirse y coincidir con el resultado esperado para las entradas dadas.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
Velocidad de escape: 12.25 m/s
```

---

### Lección 4 · Entrada de Sensores

**Desafío:** Pedir al usuario que ingrese el nivel actual de oxígeno y la lectura de temperatura, luego imprimir ambos valores con etiquetas.

**Comportamiento Esperado:**
- El programa debe llamar a `input()` exactamente dos veces, con un indicador descriptivo cada vez.
- Ambos valores deben guardarse en variables.
- Ambos valores deben imprimirse de vuelta con etiquetas claras.
- La salida debe coincidir con los valores ingresados por el usuario.

**Ejemplo de salida válida (dados los valores `72` y `-40`):**
```
Nivel de oxígeno: 72
Temperatura: -40
```

---

### Lección 5 · Interpretando las Lecturas

**Desafío:** Pedir al usuario una distancia (km) y una velocidad (km/s), convertir ambas a flotantes, calcular el tiempo de viaje e imprimir el resultado redondeado a dos decimales.

**Comportamiento Esperado:**
- El programa debe llamar a `input()` dos veces.
- Ambas entradas deben convertirse a `float` usando `float()`.
- El tiempo de viaje debe calcularse como `distancia / velocidad`.
- El resultado debe imprimirse redondeado a dos decimales usando `round()` o un especificador de formato en f-string.
- Si se ingresa un valor no numérico, el programa no está obligado a manejarlo (el manejo de errores se cubre en el Capítulo 8).

**Ejemplo de salida válida (dados los valores `1500` y `33`):**
```
Tiempo de viaje: 45.45 segundos
```

---

## Capítulo 3 — Protocolos de Decisión

### Lección 1 · Detección de Peligros

**Desafío:** Dada una variable de nivel de oxígeno, imprimir un mensaje de estado seguro o de peligro usando `if`/`else`.

**Comportamiento Esperado:**
- Si el nivel de oxígeno es 21 o más, la salida debe contener una palabra que indique seguridad (p. ej. `"Seguro"`, `"Normal"`).
- Si el nivel de oxígeno es menor a 21, la salida debe contener una palabra que indique peligro (p. ej. `"Peligro"`, `"Crítico"`).
- El programa debe usar una sentencia `if`/`else` (no un operador ternario ni un diccionario).
- No se requiere entrada del usuario.

**Casos de prueba:**
| `nivel_oxigeno` | La salida debe contener |
|---|---|
| `25` | `"Seguro"` o `"Normal"` |
| `15` | `"Peligro"` o `"Crítico"` |
| `21` | `"Seguro"` o `"Normal"` |

---

### Lección 2 · Interruptor de Tres Vías

**Desafío:** Dada una variable de nivel de combustible, clasificarlo como `"Lleno"` (≥ 75%), `"Bajo"` (25–74%) o `"Crítico"` (< 25%) usando `if`/`elif`/`else`.

**Comportamiento Esperado:**
- Deben estar presentes tres ramas distintas usando `if`, `elif` y `else`.
- La salida debe coincidir con la categoría correcta para cualquier nivel de combustible dado.
- No se requiere entrada del usuario.

**Casos de prueba:**
| `nivel_combustible` | La salida debe contener |
|---|---|
| `90` | `"Lleno"` |
| `50` | `"Bajo"` |
| `10` | `"Crítico"` |
| `75` | `"Lleno"` |
| `25` | `"Bajo"` |

---

### Lección 3 · Alertas Combinadas

**Desafío:** Dadas las variables `nivel_oxigeno` e `integridad_casco`, imprimir una alerta solo si el oxígeno está por debajo de 21 Y la integridad del casco está por debajo de 50. De lo contrario, imprimir `"Todos los sistemas nominales"`.

**Comportamiento Esperado:**
- La condición debe usar el operador lógico `and`.
- La salida debe contener un mensaje de alerta solo cuando ambas condiciones sean verdaderas simultáneamente.
- La salida debe contener `"nominal"` o equivalente cuando cualquiera de las condiciones sea segura.
- No se requiere entrada del usuario.

**Casos de prueba:**
| `nivel_oxigeno` | `integridad_casco` | La salida debe contener |
|---|---|---|
| `18` | `40` | Mensaje de alerta |
| `18` | `60` | `"nominal"` |
| `25` | `40` | `"nominal"` |
| `25` | `60` | `"nominal"` |

---

### Lección 4 · Decisiones Anidadas

**Desafío:** Enrutar la nave usando condicionales anidados. Si la radiación es alta, verificar la resistencia del casco: si el casco es fuerte, continuar con blindaje; si no, retroceder. Si la radiación es baja, continuar normalmente.

**Comportamiento Esperado:**
- Debe usarse al menos un `if` anidado dentro de otro `if`.
- Deben ser alcanzables tres mensajes de salida distintos (continuar con blindaje / retroceder / continuar normalmente).
- No se requiere entrada del usuario.

**Casos de prueba:**
| `radiacion_alta` | `casco_resistente` | Salida esperada |
|---|---|---|
| `True` | `True` | Contiene `"blindaje"` o `"continuar"` |
| `True` | `False` | Contiene `"retroceder"` |
| `False` | (cualquiera) | Contiene `"normal"` o `"continuar"` |

---

### Lección 5 · Atajos de Veracidad

**Desafío:** Dada una variable `lista_tripulacion` (una lista) y `nombre_nave` (una cadena), usar la evaluación de veracidad (no `len()` ni `== ""`) para imprimir si cada una tiene un valor o está vacía.

**Comportamiento Esperado:**
- La sentencia `if` para `lista_tripulacion` no debe usar `len(lista_tripulacion) > 0` — debe basarse en la veracidad propia de la lista.
- La sentencia `if` para `nombre_nave` no debe usar `nombre_nave != ""` — debe basarse en la veracidad propia de la cadena.
- La salida debe identificar correctamente los valores poblados frente a los vacíos.

**Casos de prueba:**
| `lista_tripulacion` | `nombre_nave` | Salida esperada |
|---|---|---|
| `["Orion"]` | `"Ares VII"` | Ambos mensajes "tiene valor" |
| `[]` | `"Ares VII"` | Tripulación vacía, nombre tiene valor |
| `["Orion"]` | `""` | Tripulación tiene valor, nombre vacío |
| `[]` | `""` | Ambos mensajes de vacío |

---

## Capítulo 4 — Bucles Orbitales

### Lección 1 · Mientras Esperamos

**Desafío:** Partiendo de `nivel_oxigeno = 15`, usar un bucle `while` para simular el depurador aumentando el oxígeno en 2 unidades por ciclo e imprimir el nivel en cada ciclo hasta que alcance 21 o más.

**Comportamiento Esperado:**
- El bucle debe usar la palabra clave `while` con la condición verificando contra 21.
- El nivel de oxígeno debe aumentar en 2 en cada iteración.
- Cada iteración debe imprimir el nivel actual de oxígeno.
- El bucle debe terminar una vez que el oxígeno alcance 21 o más (sin bucle infinito).
- El valor final impreso debe ser ≥ 21.

**Ejemplo de salida válida:**
```
Oxígeno: 15
Oxígeno: 17
Oxígeno: 19
Oxígeno: 21
Sistemas estables.
```

---

### Lección 2 · Para Cada Módulo

**Desafío:** Dada una lista pre-declarada de nombres de sistemas de la nave, usar un bucle `for` para imprimir una línea de estado de verificación para cada uno.

**Comportamiento Esperado:**
- Debe usarse un bucle `for` para iterar sobre la lista.
- Cada elemento de la lista debe aparecer en la salida.
- Cada línea de salida debe incluir tanto el nombre del sistema como una palabra de estado (p. ej. `"OK"`, `"Verificado"`).
- No se requiere entrada del usuario.

**Ejemplo de salida válida (lista: `["Oxígeno", "Propulsores", "Navegación", "Comunicaciones"]`):**
```
Oxígeno: OK
Propulsores: OK
Navegación: OK
Comunicaciones: OK
```

---

### Lección 3 · Cuenta Regresiva

**Desafío:** Usar `range()` para imprimir una cuenta regresiva de lanzamiento de 10 a 1, luego imprimir `"¡Despegue!"`.

**Comportamiento Esperado:**
- Debe usarse `range()` con los argumentos adecuados para contar hacia atrás de 10 a 1.
- Los números deben aparecer en orden descendente (10, 9, 8 … 1).
- La palabra `"Despegue"` (o equivalente) debe imprimirse al final de la cuenta regresiva.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
10
9
8
7
6
5
4
3
2
1
¡Despegue!
```

---

### Lección 4 · Break y Continue

**Desafío:** Dada una lista pre-declarada de lecturas de sensores que contiene algunos valores `-1` (lecturas malas) y un valor `0` (señal de apagado del sistema), recorrer la lista, omitir las lecturas `-1` con `continue` y detener el bucle completamente cuando se encuentre `0` con `break`. Imprimir todas las lecturas válidas.

**Comportamiento Esperado:**
- Debe usarse `continue` para omitir cualquier lectura igual a `-1`.
- Debe usarse `break` para salir del bucle cuando la lectura sea `0`.
- Solo las lecturas válidas (ni `-1` ni `0`) deben aparecer en la salida.
- Las lecturas posteriores al `0` no deben procesarse ni imprimirse.

**Ejemplo (lista: `[72, -1, 68, -1, 71, 0, 65, 70]`):**
```
Lectura: 72
Lectura: 68
Lectura: 71
Bucle terminado.
```

---

### Lección 5 · Barrido de Cuadrícula

**Desafío:** Dada una lista anidada de 3×3 que representa una cuadrícula de escombros (cada celda es `0` para libre o `1` para escombros), usar bucles `for` anidados para imprimir las coordenadas y el estado de cada celda.

**Comportamiento Esperado:**
- Deben usarse dos bucles `for` anidados (o `for` con `enumerate`).
- Cada celda de la cuadrícula debe ser visitada.
- La salida de cada celda debe incluir su fila, columna y si está `"Libre"` o tiene `"Escombros"`.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
[0][0]: Libre
[0][1]: Escombros
[0][2]: Libre
[1][0]: Libre
...
```

---

## Capítulo 5 — Funciones de Misión

### Lección 1 · Primera Función

**Desafío:** Definir una función llamada `reporte_estado()` que imprima un mensaje fijo de estado de misión al ser llamada. Llamar a la función una vez.

**Comportamiento Esperado:**
- Una función llamada `reporte_estado` debe definirse usando `def`.
- La función debe llamarse al menos una vez.
- La función debe producir al menos una línea de salida impresa al ser llamada.
- La función no debe requerir argumentos.

**Ejemplo de salida válida:**
```
Estado de misión: Todos los sistemas operativos.
```

---

### Lección 2 · Pasando Datos

**Desafío:** Definir una función `verificar_oxigeno(nivel, umbral)` que imprima si el nivel de oxígeno es seguro o crítico basándose en el umbral. Llamarla con al menos dos conjuntos de argumentos diferentes.

**Comportamiento Esperado:**
- La función debe aceptar exactamente dos parámetros: `nivel` y `umbral`.
- Si `nivel >= umbral`, la salida debe contener un mensaje de seguridad.
- Si `nivel < umbral`, la salida debe contener un mensaje crítico.
- La función debe llamarse al menos dos veces con argumentos diferentes, produciendo salidas distintas.

**Casos de prueba:**
| `nivel` | `umbral` | La salida debe contener |
|---|---|---|
| `25` | `21` | Mensaje de seguridad |
| `18` | `21` | Mensaje crítico |

---

### Lección 3 · Obteniendo Resultados

**Desafío:** Definir una función `calcular_eta(distancia, velocidad)` que devuelva el tiempo de viaje (sin imprimirlo). Llamar a la función e imprimir el valor devuelto.

**Comportamiento Esperado:**
- La función debe usar `return` para enviar de vuelta un valor calculado.
- La función NO debe usar `print()` internamente.
- El valor devuelto debe imprimirse fuera de la función.
- `eta = distancia / velocidad` debe ser el cálculo central.
- La salida debe ser correcta para las entradas dadas.

**Casos de prueba:**
| `distancia` | `velocidad` | Valor de retorno esperado |
|---|---|---|
| `1000` | `50` | `20.0` |
| `750` | `25` | `30.0` |

---

### Lección 4 · Valores por Defecto Seguros

**Desafío:** Definir una función `escanear_modulo(nombre, estado="OK")` que imprima el nombre del módulo y su estado. Llamarla una vez sin proporcionar un estado (usa el valor por defecto) y una vez con un estado personalizado.

**Comportamiento Esperado:**
- La función debe definir `estado` con un valor por defecto de `"OK"`.
- Cuando se llama solo con `nombre`, la salida debe mostrar `"OK"` como estado.
- Cuando se llama con ambos argumentos, la salida debe mostrar el estado proporcionado.
- La función debe llamarse al menos dos veces.

**Ejemplo de salida válida:**
```
Propulsores: OK
Navegación: FALLO
```

---

### Lección 5 · Scope y Globales

**Desafío:** Una variable global `contador_misiones = 0` está declarada. Definir una función `registrar_mision()` que la incremente usando la palabra clave `global` e imprima el contador actualizado. Llamar a la función tres veces.

**Comportamiento Esperado:**
- `contador_misiones` debe declararse en el nivel del módulo (global).
- La función debe usar la palabra clave `global` para modificarla.
- Cada llamada debe incrementar el contador en 1.
- Después de tres llamadas, el contador impreso debe ser igual a 3.

**Ejemplo de salida válida:**
```
Contador de misiones: 1
Contador de misiones: 2
Contador de misiones: 3
```

---

### Lección 6 · Documentar el Kit

**Desafío:** Escribir una función `verificar_combustible(actual, maximo)` con un docstring completo que describa su propósito, parámetros y valor de retorno. La función devuelve el porcentaje de combustible. Llamarla e imprimir el resultado.

**Comportamiento Esperado:**
- La función debe tener un docstring como primera sentencia (cadena entre comillas triples).
- El docstring debe mencionar el propósito de la función, ambos parámetros y lo que devuelve.
- La función debe retornar `(actual / maximo) * 100`.
- El porcentaje devuelto debe imprimirse con el símbolo `%`.
- `help(verificar_combustible)` debe mostrar el docstring sin errores.

**Ejemplo de salida válida:**
```
Nivel de combustible: 62.5%
```

---

## Capítulo 6 — Manifiesto de la Tripulación

### Lección 1 · Lista de la Tripulación

**Desafío:** Crear una lista de al menos cuatro nombres de astronautas e imprimir cada uno en su propia línea usando un bucle.

**Comportamiento Esperado:**
- Debe declararse una lista que contenga al menos cuatro elementos de cadena.
- Cada nombre debe imprimirse individualmente (no toda la lista a la vez).
- Debe usarse un bucle `for`.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
Comandante Orion
Dra. Vega
Teniente Park
Ingeniero Reyes
```

---

### Lección 2 · Accediendo al Manifiesto

**Desafío:** Dada una lista pre-declarada de cinco nombres de tripulantes, imprimir: el primer tripulante, el último tripulante y un slice de los tres del medio.

**Comportamiento Esperado:**
- El primer elemento debe accederse usando el índice `0`.
- El último elemento debe accederse usando el índice `-1` o `len(lista) - 1`.
- Los tres del medio deben accederse usando un slice `[1:4]`.
- Los tres resultados deben imprimirse con etiquetas.

**Ejemplo de salida válida:**
```
Primero: Comandante Orion
Último: Ingeniero Reyes
Tripulación intermedia: ['Dra. Vega', 'Tte. Park', 'Sgto. Kim']
```

---

### Lección 3 · Actualizando la Lista

**Desafío:** Comenzar con una lista de tres nombres de tripulación. Agregar un nuevo tripulante con `append()`, eliminar uno por nombre con `remove()` y ordenar la lista alfabéticamente con `sort()`. Imprimir la lista después de cada operación.

**Comportamiento Esperado:**
- Debe usarse `append()` para agregar un elemento; el nuevo nombre debe aparecer en la salida.
- Debe usarse `remove()` para eliminar un elemento específico; ese nombre no debe aparecer después.
- Debe usarse `sort()`; la lista final debe estar en orden alfabético.
- La lista debe imprimirse tres veces: después de append, después de remove, después de sort.

---

### Lección 4 · Coordenadas Fijas

**Desafío:** Declarar una tupla de tres puntos de navegación GPS (cada uno un par de flotantes). Imprimir cada punto. Luego intentar modificar una coordenada y mostrar que genera un `TypeError`.

**Comportamiento Esperado:**
- Debe declararse una tupla que contenga tres tuplas de dos elementos.
- Todos los puntos de navegación deben imprimirse.
- Un intento de reasignar un elemento (p. ej. `puntos[0] = (0, 0)`) debe hacerse dentro de un bloque `try`/`except TypeError`.
- El `TypeError` debe capturarse e imprimirse un mensaje confirmando que las tuplas son inmutables.

**Ejemplo de salida válida:**
```
Punto 1: (12.5, -34.7)
Punto 2: (45.0, 20.1)
Punto 3: (-5.3, 88.0)
No se pueden modificar los puntos: las tuplas son inmutables.
```

---

### Lección 5 · Filtrando Suministros

**Desafío:** Dada una lista pre-declarada de cantidades de suministros (enteros), usar una comprensión de lista para producir una nueva lista que contenga solo los suministros con cantidad mayor a 0. Imprimir la lista filtrada.

**Comportamiento Esperado:**
- Debe usarse una comprensión de lista (no un bucle `for` con `append`).
- La lista resultante debe contener solo valores positivos.
- Los valores cero y negativos deben excluirse.
- Deben imprimirse tanto la lista original como la filtrada.

**Casos de prueba:**
| Lista de entrada | Lista filtrada esperada |
|---|---|
| `[5, 0, 3, -1, 8, 0, 2]` | `[5, 3, 8, 2]` |
| `[0, 0, 1]` | `[1]` |

---

### Lección 6 · Cuadrícula de Almacenamiento

**Desafío:** Declarar una lista anidada de 3×3 que representa el compartimento de carga de la nave (cada celda es un nombre de artículo o `None` para vacío). Imprimir la cuadrícula fila por fila, con el valor de cada celda separado por `|`.

**Comportamiento Esperado:**
- Debe declararse una lista anidada con exactamente 3 filas y 3 columnas.
- Cada fila debe imprimirse como una sola línea con `|` separando las celdas.
- Las celdas `None` deben mostrarse como `"Vacío"`.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
Tanque de Oxígeno | Vacío | Ración
Vacío | Botiquín | Vacío
Caja de Herramientas | Vacío | Celda de Combustible
```

---

## Capítulo 7 — Base de Datos de Misión

### Lección 1 · Perfiles de Tripulación

**Desafío:** Crear un diccionario para un miembro de la tripulación que contenga al menos cuatro claves: `nombre`, `rol`, `uso_oxigeno` y `salud`. Imprimir cada par clave-valor.

**Comportamiento Esperado:**
- Debe declararse un diccionario con al menos cuatro pares clave-valor.
- Las cuatro claves requeridas deben estar presentes.
- Cada par clave-valor debe imprimirse con una etiqueta.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
Nombre: Comandante Orion
Rol: Piloto
Uso de oxígeno: 0.5 L/min
Salud: 95
```

---

### Lección 2 · Leyendo los Datos

**Desafío:** Dado un diccionario de tripulante pre-declarado, acceder al valor de `salud` y actualizarlo restando 10 (evento de lesión). Imprimir la salud antes y después.

**Comportamiento Esperado:**
- `salud` debe accederse usando su clave.
- El valor debe actualizarse en el lugar (`dict["salud"] -= 10` o equivalente).
- Deben imprimirse tanto el valor original como el actualizado.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
Salud antes: 95
Salud después: 85
```

---

### Lección 3 · Métodos de Dict

**Desafío:** Dado un diccionario de tripulante, imprimir todas las claves usando `.keys()`, todos los valores usando `.values()` y recuperar de forma segura una clave que puede no existir (`"rango"`) usando `.get()` con un valor por defecto de `"Desconocido"`.

**Comportamiento Esperado:**
- Debe llamarse `.keys()` y su salida imprimirse.
- Debe llamarse `.values()` y su salida imprimirse.
- Debe usarse `.get("rango", "Desconocido")`; `"Desconocido"` debe aparecer en la salida si la clave no existe.
- No debe generarse ningún `KeyError`.

---

### Lección 4 · Perfiles Anidados

**Desafío:** Construir un diccionario donde cada clave sea el nombre de un tripulante y cada valor sea un diccionario anidado que contenga `rol`, `salud` y `uso_oxigeno`. Imprimir el nombre y el valor de salud de cada miembro.

**Comportamiento Esperado:**
- El diccionario externo debe tener al menos tres tripulantes como claves.
- Cada valor debe ser a su vez un diccionario con al menos `rol`, `salud` y `uso_oxigeno`.
- El programa debe acceder a los valores anidados usando acceso encadenado de claves (p. ej. `tripulacion["Orion"]["salud"]`).
- Deben imprimirse el nombre y la salud de cada tripulante.

**Ejemplo de salida válida:**
```
Orion — Salud: 95
Vega — Salud: 88
Park — Salud: 100
```

---

### Lección 5 · Recorriendo la Base de Datos

**Desafío:** Usando el diccionario anidado de tripulación de la lección anterior, recorrer todos los tripulantes usando `.items()` e imprimir una advertencia para cualquier miembro cuya salud sea inferior a 80.

**Comportamiento Esperado:**
- Debe usarse `.items()` en el bucle `for`.
- Solo los tripulantes con `salud < 80` deben activar el mensaje de advertencia.
- Los tripulantes en 80 o más deben producir una línea de estado "normal" u "OK".
- Todos los tripulantes deben ser visitados por el bucle.

**Casos de prueba:**
| Tripulante | Salud | Salida esperada |
|---|---|---|
| Orion | 95 | Mensaje OK / normal |
| Vega | 75 | Mensaje de advertencia |
| Park | 100 | Mensaje OK / normal |

---

### Lección 6 · Puntos de Ruta Únicos

**Desafío:** Dada una lista de identificadores de puntos de ruta visitados que contiene duplicados, convertirla a un conjunto para eliminar duplicados, luego imprimir el número de puntos únicos y el contenido del conjunto.

**Comportamiento Esperado:**
- Debe usarse `set()` (no deduplicación manual con bucles).
- La longitud del conjunto debe ser menor que la de la lista original (demostrando que la deduplicación funcionó).
- Deben imprimirse tanto `len(puntos_unicos)` como el conjunto en sí.
- No se requiere entrada del usuario.

**Casos de prueba:**
| Lista de entrada | Cantidad única esperada |
|---|---|
| `["PR1", "PR2", "PR1", "PR3", "PR2"]` | `3` |
| `["A", "A", "A"]` | `1` |

---

## Capítulo 8 — Protocolos de Error

### Lección 1 · Capturando Fallos

**Desafío:** Envolver una operación de división `combustible / cantidad_encendidos` en un bloque `try`/`except`. El programa debe manejar el caso en que `cantidad_encendidos` sea `0` sin fallar, imprimiendo un mensaje de error en su lugar.

**Comportamiento Esperado:**
- Un bloque `try` debe contener la operación de división.
- Un bloque `except ZeroDivisionError` debe capturar el error cuando `cantidad_encendidos = 0`.
- Cuando `cantidad_encendidos = 0`, el programa debe imprimir un mensaje de error y no fallar.
- Cuando `cantidad_encendidos` es válido, el resultado debe imprimirse correctamente.

**Casos de prueba:**
| `combustible` | `cantidad_encendidos` | Comportamiento esperado |
|---|---|---|
| `100` | `4` | Imprime el resultado: `25.0` |
| `100` | `0` | Imprime error, no falla |

---

### Lección 2 · Manejadores Específicos

**Desafío:** Escribir una función `analizar_sensor(valor)` que convierta una cadena proporcionada por el usuario a flotante. Manejar `ValueError` (entrada no numérica) y `ZeroDivisionError` (si se divide por el valor analizado) con bloques `except` separados.

**Comportamiento Esperado:**
- Deben estar presentes dos bloques `except` separados: uno para `ValueError` y otro para `ZeroDivisionError`.
- Debe capturarse un `ValueError` cuando la entrada no es numérica (p. ej. `"abc"`).
- Debe capturarse un `ZeroDivisionError` cuando el valor analizado es `0`.
- Cada tipo de error debe producir un mensaje distinto.
- Una entrada válida debe producir la salida correcta.

**Casos de prueba:**
| Entrada | Comportamiento esperado |
|---|---|
| `"42.5"` | Convierte e imprime `42.5` |
| `"abc"` | Imprime mensaje de ValueError |
| `"0"` | Imprime mensaje de ZeroDivisionError |

---

### Lección 3 · Siempre Limpia

**Desafío:** Simular la apertura de una conexión al sistema de la nave. Usar `try`/`except`/`else`/`finally`. El bloque `else` debe ejecutar una verificación de estado solo cuando no ocurra ningún error. El bloque `finally` siempre debe imprimir `"Conexión cerrada."`.

**Comportamiento Esperado:**
- El bloque `else` debe ejecutarse solo cuando no se lance ninguna excepción.
- El bloque `finally` debe ejecutarse en todos los casos (con o sin error).
- `"Conexión cerrada."` debe aparecer siempre al final de la salida.
- El mensaje de `else` debe aparecer solo cuando no se lanza ningún error.

**Casos de prueba:**
| Escenario | Salida esperada |
|---|---|
| Sin error | Mensaje de else + `"Conexión cerrada."` |
| Excepción lanzada | Mensaje de except + `"Conexión cerrada."` |

---

### Lección 4 · Disparar la Alarma

**Desafío:** Escribir una función `establecer_oxigeno(nivel)` que lance un `ValueError` con un mensaje descriptivo si `nivel` es menor a 0 o mayor a 100. Llamarla con valores válidos e inválidos.

**Comportamiento Esperado:**
- Debe usarse `raise ValueError(...)` dentro de la función.
- Llamar a la función con un valor < 0 o > 100 debe lanzar un `ValueError`.
- El error lanzado debe capturarse en el código llamador e imprimirse su mensaje.
- Llamar con un valor válido (0–100) debe imprimir un mensaje de éxito.

**Casos de prueba:**
| `nivel` | Comportamiento esperado |
|---|---|
| `72` | Imprime mensaje de éxito |
| `-5` | Lanza y captura ValueError |
| `110` | Lanza y captura ValueError |

---

### Lección 5 · Alertas Personalizadas

**Desafío:** Definir una clase de excepción personalizada `ErrorDeMision` que herede de `Exception`. Lanzarla dentro de una función `verificar_casco(integridad)` cuando la integridad cae por debajo de 20. Capturarla en el código llamador.

**Comportamiento Esperado:**
- `ErrorDeMision` debe definirse como una clase que hereda de `Exception`.
- Debe usarse `raise ErrorDeMision(...)` dentro de `verificar_casco`.
- La excepción debe capturarse con `except ErrorDeMision`.
- El mensaje capturado debe incluir la palabra `"casco"` o `"integridad"`.
- Los valores válidos de integridad (≥ 20) deben imprimir un mensaje seguro sin lanzar excepciones.

**Casos de prueba:**
| `integridad` | Comportamiento esperado |
|---|---|
| `50` | Imprime mensaje seguro |
| `19` | Lanza y captura ErrorDeMision |
| `0` | Lanza y captura ErrorDeMision |

---

## Capítulo 9 — Bahía de Módulos

### Lección 1 · Abriendo la Caja

**Desafío:** Importar el módulo `math` y usarlo para calcular: la hipotenusa de una maniobra en ángulo recto (`math.sqrt`), el techo de una estimación de combustible (`math.ceil`) e imprimir el valor de `math.pi`.

**Comportamiento Esperado:**
- `import math` debe estar presente.
- `math.sqrt()` debe llamarse y su resultado imprimirse.
- `math.ceil()` debe llamarse y su resultado imprimirse.
- `math.pi` debe accederse e imprimirse.
- Los tres resultados deben tener etiquetas descriptivas.

**Ejemplo de salida válida:**
```
Distancia de maniobra: 5.0
Unidades de combustible necesarias: 8
Constante Pi: 3.141592653589793
```

---

### Lección 2 · Eventos Aleatorios

**Desafío:** Importar el módulo `random` y simular tres eventos aleatorios de asteroides. Usar `random.choice()` para seleccionar de una lista de cadenas de eventos y `random.randint()` para generar una puntuación de severidad de impacto entre 1 y 10.

**Comportamiento Esperado:**
- `import random` debe estar presente.
- `random.choice()` debe llamarse al menos una vez con una lista de al menos tres eventos posibles.
- `random.randint(1, 10)` debe llamarse al menos una vez.
- Deben imprimirse tres resultados de simulación, cada uno con un nombre de evento y una puntuación de severidad.
- Los resultados variarán — la prueba debe verificar el formato, no los valores exactos.

**Ejemplo de salida válida:**
```
Evento: Lluvia de micrometeoritos | Severidad: 4
Evento: Llamarada solar | Severidad: 9
Evento: Campo de escombros | Severidad: 2
```

---

### Lección 3 · Reloj de Misión

**Desafío:** Importar `datetime` y registrar la hora de inicio de la misión. Simular el tiempo transcurrido calculando la diferencia entre dos objetos `datetime` e imprimir los segundos transcurridos.

**Comportamiento Esperado:**
- Debe estar presente `from datetime import datetime` o `import datetime`.
- Debe llamarse `datetime.now()`.
- Debe calcularse un timedelta entre dos objetos datetime.
- Los segundos transcurridos deben imprimirse usando `.total_seconds()`.
- No se requiere entrada del usuario.

**Ejemplo de salida válida:**
```
Misión iniciada: 2026-03-11 09:00:00
Tiempo transcurrido: 7200.0 segundos
```

---

### Lección 4 · Módulos Propios

**Desafío:** Escribir el contenido de un módulo `utils_mision.py` que contenga una función `estado_combustible(nivel)` que devuelva una cadena de estado. Luego importarla y llamarla en el script principal.

**Comportamiento Esperado:**
- Debe crearse (o simularse) un archivo separado `utils_mision.py`.
- La función debe importarse con `from utils_mision import estado_combustible`.
- Llamar a `estado_combustible(80)` debe devolver una cadena no vacía.
- La cadena devuelta debe imprimirse desde el script principal.
- No debe existir lógica de verificación de combustible en el archivo principal — solo la importación y la llamada.

---

### Lección 5 · Importaciones Limpias

**Desafío:** Reescribir las siguientes sentencias de importación usando `from` y `as` para mayor claridad:
- Importar solo `sqrt` y `pi` desde `math`
- Importar `randint` desde `random`
- Importar `datetime` desde `datetime` con el alias `dt`

Luego usar cada nombre importado en un cálculo breve e imprimir los resultados.

**Comportamiento Esperado:**
- No debe haber un `import math` o `import random` a secas — debe usarse `from ... import ...`.
- `datetime` debe tener el alias `dt` usando `as`.
- Los tres nombres importados deben usarse en cálculos.
- Los resultados deben imprimirse con etiquetas.

**Ejemplo de salida válida:**
```
Raíz cuadrada: 7.0
Pi: 3.141592653589793
Entero aleatorio: 6
Hora actual: 2026-03-11 09:00:00
```

---

## Capítulo 10 — Señal de Regreso

### Lección 1 · Leyendo los Registros

**Desafío:** Abrir un archivo pre-existente `registro_mision.txt` e imprimir su contenido línea por línea, eliminando los espacios en blanco al final de cada línea.

**Comportamiento Esperado:**
- Debe usarse `open()` con modo `"r"`.
- El contenido del archivo debe leerse línea por línea (usando `readlines()` o un bucle `for` sobre el objeto de archivo).
- Cada línea debe imprimirse con `.strip()` aplicado.
- Un archivo vacío no debe producir salida ni error.
- Un archivo con tres líneas debe producir exactamente tres líneas de salida.

---

### Lección 2 · Escribiendo el Informe

**Desafío:** Escribir un informe de estado de la tripulación en un archivo llamado `informe_tripulacion.txt`. El archivo debe contener al menos tres líneas: nombre de la misión, número de tripulantes y estado de la misión.

**Comportamiento Esperado:**
- Debe usarse `open()` con modo `"w"`.
- Deben escribirse al menos tres líneas usando `write()` o `writelines()`.
- Cada línea debe terminar con `"\n"`.
- Tras escribir, el archivo debe reabrirse y su contenido imprimirse para verificación.
- La salida verificada debe coincidir exactamente con lo que fue escrito.

---

### Lección 3 · Manejo Seguro de Archivos

**Desafío:** Reescribir las operaciones de lectura y escritura de archivos de las lecciones anteriores usando la sentencia `with` como gestor de contexto.

**Comportamiento Esperado:**
- Todas las operaciones de archivo deben usar la sintaxis `with open(...) as f:`.
- No debe haber ninguna llamada explícita a `f.close()`.
- La lectura debe producir la misma salida que la Lección 1.
- La escritura debe producir un archivo válido legible por un segundo bloque `with`.
- Un intento de usar `f` después de que el bloque `with` termine debe resultar en un `ValueError` (archivo cerrado) — esto debe demostrarse y capturarse.

---

### Lección 4 · CSV de la Tripulación

**Desafío:** Dado un archivo pre-existente `datos_tripulacion.csv` con columnas `nombre,rol,salud`, usar el módulo `csv` para leer e imprimir los datos de cada tripulante como una línea etiquetada.

**Comportamiento Esperado:**
- Debe estar presente `import csv`.
- Debe usarse `csv.reader` o `csv.DictReader` (no separación manual de cadenas).
- La fila de encabezado debe omitirse o manejarse correctamente.
- Cada fila de datos debe imprimirse con etiquetas de campo.
- Un archivo con tres filas de datos debe producir exactamente tres líneas de salida etiquetadas.

**Ejemplo de salida válida:**
```
Nombre: Comandante Orion | Rol: Piloto | Salud: 95
Nombre: Dra. Vega | Rol: Médico | Salud: 88
Nombre: Tte. Park | Rol: Ingeniero | Salud: 100
```

---

### Lección 5 · Misión Completada 🏠

**Desafío:** Desafío final. El estudiante debe escribir un programa completo que:
1. Lea los datos de la tripulación desde `datos_tripulacion.csv`.
2. Filtre los tripulantes con salud por debajo de 80 usando una comprensión de lista.
3. Defina una función `generar_informe(tripulacion)` que acepte la lista filtrada y escriba un informe de autorización de atraque en `informe_atraque.txt`.
4. Maneje cualquier excepción relacionada con archivos con `try`/`except`.
5. Imprima `"Misión completada. Orion está en casa."` al final.

**Comportamiento Esperado:**
- Los cinco pasos anteriores deben estar presentes y ser funcionales.
- Debe usarse el módulo `csv` para la lectura.
- Una comprensión de lista debe filtrar los datos de la tripulación.
- Debe definirse y llamarse una función con una operación `return` o de escritura de archivos.
- `try`/`except` debe envolver las operaciones de archivo.
- `"Misión completada"` debe ser la última línea de salida.
- `informe_atraque.txt` debe existir y no estar vacío tras la ejecución del programa.

**Ejemplo de salida válida:**
```
Tripulación cargada: 4 miembros
Tripulantes que necesitan atención: 1
Informe de atraque escrito.
Misión completada. Orion está en casa.
```

---

*PyMission Control © 2026 — Todos los derechos reservados.*
