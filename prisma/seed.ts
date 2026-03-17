import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

const chapters: Parameters<typeof prisma.chapter.upsert>[0]['create'][] = [
  {
    id: 'cmmu813gvw65g9l6ahzez',
    order: 1,
    slug: 'reinicio-del-sistema',
    title: 'Reinicio del Sistema',
    description:
      'La nave del astronauta ha aterrizado de emergencia en un asteroide errante y todos los sistemas están fuera de línea. El jugador debe escribir sus primeros scripts de Python para restaurar las funciones básicas. Aprende a usar print(), declarar variables, trabajar con los tipos de datos fundamentales (int, float, str, bool) y construir mensajes de estado dinámicos con f-strings.',
    storyText:
      'El Comandante Orion despierta en una cabina oscura. Las luces de emergencia parpadean. La IA de la nave ha desaparecido. Recoges un terminal deteriorado y ves un cursor parpadeante. "Cadete, ¿puedes escribir?" Una sola línea de Python puede volver a encender las luces.',
    isPublic: true,
  },
  {
    id: 'cmmu813h6rurh3ytqcv86',
    order: 2,
    slug: 'calculando-el-reingreso',
    title: 'Calculando el Reingreso',
    description:
      'La computadora de navegación necesita cálculos manuales para trazar una trayectoria de escape del pozo gravitacional del asteroide. El jugador usa Python como calculadora de misión: operadores aritméticos, división entera y módulo, precedencia de operadores, input() para leer sensores en tiempo real y conversión de tipos para procesar los datos correctamente.',
    storyText:
      'Los propulsores vuelven a la vida, pero sin la computadora de navegación Orion no puede calcular el tiempo de encendido. Abres el panel de anulación manual. "Todo lo que necesito es algo de aritmética y una forma de pedirle lecturas actuales a la nave." El asteroide te está atrayendo — cada segundo cuenta.',
    isPublic: true,
  },
  {
    id: 'cmmu813h6dzbeduiqluq3',
    order: 3,
    slug: 'protocolos-de-decision',
    title: 'Protocolos de Decisión',
    description:
      'La nave llega a una bifurcación en el cinturón de asteroides y el jugador debe programar lógica de toma de decisiones para elegir el camino más seguro. Domina if/elif/else, operadores de comparación (==, !=, <, >, <=, >=), operadores lógicos (and, or, not), condicionales anidados y la evaluación de veracidad de Python.',
    storyText:
      'Dos rutas aparecen en la pantalla resquebrajada. Una lleva a través de densos escombros, la otra bordea una zona de radiación. Orion te mira: "La computadora solía decidir estas cosas automáticamente. ¿Puedes enseñarle a pensar?" Tus condicionales lo mantendrán con vida.',
    isPublic: true,
  },
  {
    id: 'cmmu813h7d1he9xblxf3m',
    order: 4,
    slug: 'bucles-orbitales',
    title: 'Bucles Orbitales',
    description:
      'La nave necesita ejecutar verificaciones repetidas: escaneos de oxígeno, barridos de escombros y temporizadores de cuenta regresiva. El jugador usa bucles para automatizar tareas repetitivas. Aprende while, for, range(), las instrucciones break y continue para control de flujo, y bucles anidados para escanear estructuras de datos en cuadrícula.',
    storyText:
      'El sistema de soporte vital falla en ciclos. Cada 30 segundos un módulo diferente se apaga. "Necesitamos algo que siga funcionando hasta que lo arregle," grita Orion sobre la alarma. Asientes y comienzas a escribir. Los bucles nunca se cansan — y ahora mismo, tú tampoco puedes.',
    isPublic: true,
  },
  {
    id: 'cmmu813h7o9ttalx36187',
    order: 5,
    slug: 'funciones-de-mision',
    title: 'Funciones de Misión',
    description:
      'El código de la nave se está volviendo desordenado con lógica repetida por todas partes. El jugador aprende a organizar el código en funciones reutilizables. Domina la palabra clave def, parámetros y argumentos, valores de retorno, parámetros por defecto, el scope de variables locales y globales, y la escritura de docstrings claros.',
    storyText:
      'El terminal de la cabina se llena de código repetido. Orion mira la pantalla con el ceño fruncido: "¿Cada vez que necesitamos verificar el combustible, copias las mismas líneas?" Las funciones son los bloques de construcción de una computadora de misión real — escribe una vez, llama desde cualquier lugar.',
    isPublic: true,
  },
  {
    id: 'cmmu813h75vfx5pyl7kuw',
    order: 6,
    slug: 'manifiesto-de-la-tripulacion',
    title: 'Manifiesto de la Tripulación',
    description:
      'La nave detecta una señal de socorro de tres astronautas varados. El jugador usa listas y tuplas para gestionar datos de tripulación y suministros. Aprende indexación y slicing, métodos de lista (append, remove, sort, len), tuplas inmutables para coordenadas fijas, comprensiones de lista para filtrado eficiente y listas anidadas para modelar estructuras en cuadrícula.',
    storyText:
      'Las comunicaciones chisporrotean. Tres sobrevivientes más — dispersos por el asteroide. Orion sonríe: "No podemos dejarlos atrás." El sistema de datos de la nave ahora necesita rastrear nombres, posiciones y raciones para cuatro personas. Alcanzas el teclado: "Sé exactamente qué estructura de datos usar."',
    isPublic: true,
  },
  {
    id: 'cmmu813h7ur35fi0ucyv8',
    order: 7,
    slug: 'base-de-datos-de-mision',
    title: 'Base de Datos de Misión',
    description:
      'Con cuatro miembros de tripulación rescatados, la nave necesita un sistema de datos estructurado. El jugador usa diccionarios para construir la base de datos central de la misión. Aprende pares clave-valor, acceso y actualización segura, métodos clave (keys, values, items, get), diccionarios anidados, iteración y sets para rastrear ubicaciones sin duplicados.',
    storyText:
      'Cuatro personas, cuatro conjuntos de necesidades: requerimientos de oxígeno, habilidades, alertas médicas. "Necesitamos una base de datos adecuada," dice Orion. "Las listas ya no son suficientes." Comienzas a escribir llaves. Un diccionario para cada astronauta — la base de una computadora de misión real.',
    isPublic: true,
  },
  {
    id: 'cmmu813h76ld0t4n9ozfl',
    order: 8,
    slug: 'protocolos-de-error',
    title: 'Protocolos de Error',
    description:
      'La nave atraviesa una zona peligrosa del espacio y los sistemas empiezan a lanzar errores en cascada. El jugador aprende a manejar excepciones con elegancia para mantener la misión operativa. Domina try/except, múltiples bloques except para distintos tipos de error, else y finally para limpieza garantizada, raise y la definición de excepciones personalizadas.',
    storyText:
      'Un micrometeoro perfora un panel de sensores. El terminal se inunda de rojo: ZeroDivisionError, KeyError, TypeError. La nave está en pánico — y Orion también. "¿Puedes evitar que se caiga?" Respiras hondo. "Puedo manejarlo." Y lo dices en serio: tanto por la nave como por el error.',
    isPublic: true,
  },
  {
    id: 'cmmu813h7qwez77zxcttf',
    order: 9,
    slug: 'bahia-de-modulos',
    title: 'Bahía de Módulos',
    description:
      'El jugador descubre una biblioteca de módulos preconstruidos en la nave. Aprende a importar la librería estándar de Python y a estructurar código reutilizable en archivos separados. Usa math para navegación precisa, random para simular eventos impredecibles, datetime para rastrear tiempos de misión y domina las importaciones con from y as.',
    storyText:
      'En la parte trasera de la nave, Orion encuentra una caja polvorienta etiquetada "Bahía de Módulos." Dentro: herramientas construidas por ingenieros que vinieron antes. "No tenemos que construir todo desde cero," dice. Abres la caja. random, math, datetime — un kit completo esperando ser utilizado.',
    isPublic: true,
  },
  {
    id: 'cmmu813h7ybfsgo91417j',
    order: 10,
    slug: 'senal-de-regreso',
    title: 'Señal de Regreso',
    description:
      'El tramo final de la misión. El jugador usa entrada y salida de archivos para leer registros de misión y escribir los datos de navegación finales. Aprende open() y sus modos, read/readline/readlines, write/writelines, la sentencia with como gestor de contexto seguro, conceptos básicos de CSV y aplica todos los conocimientos en un desafío integrador final.',
    storyText:
      'La Tierra está en el horizonte. La tripulación está viva. Pero la computadora de acoplamiento necesita un archivo de navegación final — un registro completo escrito en disco. "Todo lo que hemos hecho," dice Orion en voz baja, "se reduce a esto." Abres un archivo. Línea por línea, Python lo lleva a casa.',
    isPublic: true,
  },
];

const lessons: Parameters<typeof prisma.lesson.upsert>[0]['create'][] = [
  // ─── Chapter 1 — Reinicio del Sistema ────────────────────────────────────
  {
    id: 'cmmu8wdmdwmn2d19jvzvu',
    chapterId: 'cmmu813gvw65g9l6ahzez',
    order: 1,
    slug: 'hola-espacio',
    title: '¡Hola, Espacio!',
    xpReward: 50,
    content: `## Señal de Vida

La nave está oscura. El terminal parpadea. Es hora de enviar la primera señal.

\`print()\` es la función más básica de Python — muestra texto en la consola. Cada misión comienza con una sola línea.

\`\`\`python
print("Señal de vida recibida. Sistema operativo.")
print("Comandante Orion — Estado: activo")
\`\`\`

Puedes imprimir texto (**strings**), números y múltiples valores separados por comas:

\`\`\`python
print("Oxígeno:", 92, "% — Nominal")
\`\`\`

> 💡 **Misión:** Cada \`print()\` es una línea de comunicación entre tú y la nave. Úsala bien.`,
  },
  {
    id: 'cmmu8wdo2fy9ks00jggac',
    chapterId: 'cmmu813gvw65g9l6ahzez',
    order: 2,
    slug: 'nombrando-la-mision',
    title: 'Nombrando la Misión',
    xpReward: 50,
    content: `## Nombrando la Misión

Los sistemas de la nave están en línea, pero necesitamos identificar cada componente. Las **variables** son etiquetas que guardan datos en la memoria del ordenador de a bordo.

Para crear una variable, escribe su nombre, el signo \`=\` y su valor:

\`\`\`python
nombre_mision = "Operación Regreso"
distancia_tierra = 384400  # km
tripulacion_activa = True

print(nombre_mision)
print("Distancia a la Tierra:", distancia_tierra, "km")
\`\`\`

Las reglas para nombrar variables son simples:
- Solo letras, números y guiones bajos \`_\`
- No pueden comenzar con un número
- Son sensibles a mayúsculas: \`combustible\` ≠ \`Combustible\`

Elige nombres descriptivos para que el código sea fácil de leer durante la misión.

> 💡 **Protocolo:** Usa \`snake_case\` (palabras en minúscula separadas por \`_\`) para nombres de variables en Python.`,
  },
  {
    id: 'cmmu8wdo2alrcflrh96k9',
    chapterId: 'cmmu813gvw65g9l6ahzez',
    order: 3,
    slug: 'datos-en-el-cosmos',
    title: 'Datos en el Cosmos',
    xpReward: 75,
    content: `## Datos en el Cosmos

La nave registra distintos tipos de datos: números enteros, decimales, texto y estados lógicos. Python clasifica automáticamente cada valor en su **tipo de dato**.

Los cuatro tipos fundamentales son:

\`\`\`python
# int — número entero
orbitas_completadas = 47

# float — número decimal
gravedad = 9.81  # m/s²

# str — cadena de texto
estado = "En órbita"

# bool — verdadero o falso
escudo_activo = True
\`\`\`

Puedes verificar el tipo de cualquier valor con \`type()\`:

\`\`\`python
print(type(orbitas_completadas))  # <class 'int'>
print(type(gravedad))             # <class 'float'>
print(type(estado))               # <class 'str'>
print(type(escudo_activo))        # <class 'bool'>
\`\`\`

Conocer el tipo de dato es esencial: no puedes sumar un número a un texto sin conversión.

> 💡 **Sensor:** Usa \`type()\` para diagnosticar el tipo de dato cuando algo no funciona como esperabas.`,
  },
  {
    id: 'cmmu8wdo3h6lr2hlb8sgl',
    chapterId: 'cmmu813gvw65g9l6ahzez',
    order: 4,
    slug: 'reportes-de-estado',
    title: 'Reportes de Estado',
    xpReward: 75,
    content: `## Reportes de Estado

El centro de control necesita reportes claros y formateados. Los **f-strings** permiten insertar variables directamente dentro de una cadena de texto.

Escribe una \`f\` antes de las comillas y usa llaves \`{}\` para incrustar cualquier expresión:

\`\`\`python
nombre = "Comandante Orion"
oxigeno = 87.5
modulo = "Artemis-7"

reporte = f"Piloto: {nombre} | Módulo: {modulo} | O₂: {oxigeno}%"
print(reporte)
\`\`\`

También puedes realizar operaciones y aplicar formato de números dentro de las llaves:

\`\`\`python
velocidad = 7823.456
print(f"Velocidad actual: {velocidad:.1f} km/s")
# Salida: Velocidad actual: 7823.5 km/s
\`\`\`

Los f-strings son más legibles y eficientes que concatenar cadenas con \`+\`.

> 💡 **Transmisión:** Usa \`:.2f\` dentro de las llaves para mostrar decimales con precisión fija en tus reportes.`,
  },
  {
    id: 'cmmu8wdo3zyxho5nwzpdb',
    chapterId: 'cmmu813gvw65g9l6ahzez',
    order: 5,
    slug: 'anotar-los-registros',
    title: 'Anotar los Registros',
    xpReward: 50,
    content: `## Anotar los Registros

Todo buen sistema de navegación lleva anotaciones. Los **comentarios** son notas en el código que Python ignora completamente — existen solo para los humanos que leen el programa.

Usa \`#\` para un comentario de una sola línea, y triples comillas para bloques de texto más largos:

\`\`\`python
# Inicializar sistemas de vuelo
velocidad = 7900  # km/s — velocidad orbital

"""
Sistema de soporte vital:
Revisar niveles de oxígeno y CO₂
antes de cada maniobra.
"""
oxigeno = 92
co2 = 0.04
\`\`\`

Los comentarios son esenciales para:
- Explicar por qué tomamos una decisión técnica
- Documentar unidades de medida
- Deshabilitar código temporalmente sin borrarlo

> 💡 **Bitácora:** Comenta el *por qué*, no el *qué* — el código ya muestra qué hace; tus notas deben explicar la razón.`,
  },

  // ─── Chapter 2 — Calculando el Reingreso ─────────────────────────────────
  {
    id: 'cmmu8wdo373nbm4uamhtk',
    chapterId: 'cmmu813h6rurh3ytqcv86',
    order: 1,
    slug: 'matematicas-del-propulsor',
    title: 'Matemáticas del Propulsor',
    xpReward: 50,
    content: `## Matemáticas del Propulsor

Para calcular la trayectoria de reingreso, el ordenador de a bordo necesita operaciones aritméticas básicas. Python soporta todos los operadores matemáticos estándar.

\`\`\`python
empuje = 45000   # newtons
masa = 12000     # kg
aceleracion = empuje / masa  # 3.75 m/s²

altitud_inicial = 408   # km
descenso = 50
altitud_final = altitud_inicial - descenso  # 358 km

print(f"Aceleración: {aceleracion} m/s²")
print(f"Altitud final: {altitud_final} km")
\`\`\`

Operadores disponibles:
- \`+\` suma, \`-\` resta
- \`*\` multiplicación, \`/\` división (resultado float)
- \`**\` potencia

\`\`\`python
energia = masa * aceleracion ** 2
print(f"Energía cinética: {energia} J")
\`\`\`

> 💡 **Motor:** La división \`/\` siempre devuelve un \`float\`; usa \`//\` si necesitas un resultado entero.`,
  },
  {
    id: 'cmmu8wdo3mlw61x2lpmo5',
    chapterId: 'cmmu813h6rurh3ytqcv86',
    order: 2,
    slug: 'ratios-de-combustible',
    title: 'Ratios de Combustible',
    xpReward: 75,
    content: `## Ratios de Combustible

El ingeniero de propulsión necesita repartir el combustible en tanques iguales. Para eso usamos la **división entera** \`//\` y el **módulo** \`%\`.

\`//\` devuelve el cociente sin decimales; \`%\` devuelve el resto de la división:

\`\`\`python
combustible_total = 1450   # litros
capacidad_tanque = 400     # litros por tanque

tanques_llenos = combustible_total // capacidad_tanque
sobrante = combustible_total % capacidad_tanque

print(f"Tanques completos: {tanques_llenos}")   # 3
print(f"Litros sobrantes: {sobrante}")          # 250
\`\`\`

El operador \`%\` también es útil para detectar números pares o impares:

\`\`\`python
orbita = 14
if orbita % 2 == 0:
    print("Órbita par — sincronizar antena")
\`\`\`

> 💡 **Tanque:** \`%\` es el resto de la división entera — si el resultado es \`0\`, la división fue exacta.`,
  },
  {
    id: 'cmmu8wdo38ehdaktsuzqm',
    chapterId: 'cmmu813h6rurh3ytqcv86',
    order: 3,
    slug: 'orden-de-operaciones',
    title: 'Orden de Operaciones',
    xpReward: 75,
    content: `## Orden de Operaciones

El computador de navegación evalúa expresiones complejas siguiendo reglas de **precedencia**. Un error de orden puede mandar la nave a una trayectoria incorrecta.

Python sigue el mismo orden que las matemáticas (PEMDAS):

\`\`\`python
# Sin paréntesis — potencias y multiplicación primero
resultado = 2 + 3 * 4 ** 2   # 2 + 3 * 16 = 50
print(resultado)  # 50

# Con paréntesis — toma el control
resultado = (2 + 3) * (4 ** 2)   # 5 * 16 = 80
print(resultado)  # 80
\`\`\`

Orden de mayor a menor prioridad:
1. \`()\` paréntesis
2. \`**\` potencia
3. \`* / // %\` multiplicación y división
4. \`+ -\` suma y resta

\`\`\`python
velocidad_final = 7900
velocidad_inicial = 7400
tiempo = 120
delta_v = (velocidad_final - velocidad_inicial) / tiempo
print(f"ΔV: {delta_v:.2f} m/s²")
\`\`\`

> 💡 **Cálculo:** En caso de duda, añade paréntesis — son gratuitos y evitan errores de trayectoria.`,
  },
  {
    id: 'cmmu8wdo3qu6kflxu8keo',
    chapterId: 'cmmu813h6rurh3ytqcv86',
    order: 4,
    slug: 'entrada-de-sensores',
    title: 'Entrada de Sensores',
    xpReward: 50,
    content: `## Entrada de Sensores

El Comandante Orion necesita ingresar datos manualmente cuando los sensores automáticos fallan. \`input()\` espera que el usuario escriba algo y devuelve ese texto como una cadena.

\`\`\`python
nombre = input("Identifique al operador: ")
print(f"Acceso concedido: {nombre}")
\`\`\`

Puedes solicitar cualquier información durante la ejecución del programa:

\`\`\`python
sector = input("Ingrese sector de búsqueda: ")
print(f"Escaneando sector {sector}...")
\`\`\`

**Importante:** \`input()\` siempre devuelve un \`str\`. Si necesitas un número, debes convertirlo:

\`\`\`python
altitud_texto = input("Altitud de maniobra (km): ")
altitud = float(altitud_texto)
nueva_altitud = altitud - 50
print(f"Ajustando a: {nueva_altitud} km")
\`\`\`

> 💡 **Panel:** Nunca uses datos de \`input()\` sin validarlos — un operador podría ingresar un valor inesperado.`,
  },
  {
    id: 'cmmu8wdo3fi65ixb7btcy',
    chapterId: 'cmmu813h6rurh3ytqcv86',
    order: 5,
    slug: 'interpretando-las-lecturas',
    title: 'Interpretando las Lecturas',
    xpReward: 75,
    content: `## Interpretando las Lecturas

Los sensores envían datos en formatos mixtos. Para operar con ellos matemáticamente, necesitamos **convertir tipos** usando las funciones \`int()\`, \`float()\` y \`str()\`.

\`\`\`python
# Sensor envía temperatura como texto
lectura_sensor = "3200"
temperatura = int(lectura_sensor)
print(temperatura + 100)   # 3300 — ahora funciona
\`\`\`

\`float()\` acepta cadenas con decimales:

\`\`\`python
presion_txt = "1.013"
presion = float(presion_txt)
print(f"Presión: {presion * 100:.1f} kPa")
\`\`\`

\`str()\` convierte números a texto para construir mensajes:

\`\`\`python
modulo_id = 7
etiqueta = "Módulo-" + str(modulo_id)
print(etiqueta)   # Módulo-7
\`\`\`

Si la conversión falla (texto no numérico), Python lanzará un \`ValueError\`. Aprenderemos a manejarlo en el Capítulo 8.

> 💡 **Conversión:** Convierte siempre antes de operar — Python no mezcla tipos automáticamente en aritmética.`,
  },

  // ─── Chapter 3 — Protocolos de Decisión ──────────────────────────────────
  {
    id: 'cmmu8wdo3p24vuervwnnq',
    chapterId: 'cmmu813h6dzbeduiqluq3',
    order: 1,
    slug: 'deteccion-de-peligros',
    title: 'Detección de Peligros',
    xpReward: 50,
    content: `## Detección de Peligros

Los escudos detectaron una anomalía. El sistema debe decidir automáticamente: ¿activar protocolo de emergencia o continuar la misión? Las sentencias **if/else** permiten ejecutar código de forma condicional.

\`\`\`python
nivel_radiacion = 850  # mSv

if nivel_radiacion > 500:
    print("¡ALERTA! Activando escudos de radiación.")
    print("Desviar ruta — sector contaminado.")
else:
    print("Niveles nominales. Continuar trayectoria.")
\`\`\`

La condición dentro del \`if\` puede usar operadores de comparación:
- \`==\` igual, \`!=\` diferente
- \`<\`, \`>\`, \`<=\`, \`>=\`

\`\`\`python
oxigeno = 95
if oxigeno >= 80:
    print("Soporte vital: ÓPTIMO")
else:
    print("Soporte vital: CRÍTICO — activar reservas")
\`\`\`

La indentación (4 espacios) define el bloque de código que pertenece a cada rama.

> 💡 **Protocolo:** La condición del \`if\` debe devolver \`True\` o \`False\`; los comparadores hacen eso por ti.`,
  },
  {
    id: 'cmmu8wdo348d3mv3qhimn',
    chapterId: 'cmmu813h6dzbeduiqluq3',
    order: 2,
    slug: 'interruptor-de-tres-vias',
    title: 'Interruptor de Tres Vías',
    xpReward: 75,
    content: `## Interruptor de Tres Vías

El sistema de alerta tiene tres niveles: normal, advertencia y crítico. Con solo \`if/else\` tendríamos código enredado. **elif** permite encadenar múltiples condiciones de forma limpia.

\`\`\`python
temperatura_motor = 1850  # °C

if temperatura_motor > 2000:
    print("🔴 CRÍTICO — apagar motor")
elif temperatura_motor > 1500:
    print("🟡 ADVERTENCIA — reducir empuje")
else:
    print("🟢 NOMINAL — continuar")
\`\`\`

Python evalúa las condiciones **en orden** y ejecuta solo el primer bloque verdadero:

\`\`\`python
combustible = 30  # porcentaje

if combustible > 75:
    estado = "Lleno"
elif combustible > 40:
    estado = "Moderado"
elif combustible > 15:
    estado = "Bajo"
else:
    estado = "CRÍTICO"

print(f"Combustible: {estado}")
\`\`\`

> 💡 **Secuencia:** Ordena los \`elif\` de mayor a menor restricción para evitar condiciones que nunca se alcancen.`,
  },
  {
    id: 'cmmu8wdo3una0ddzphevs',
    chapterId: 'cmmu813h6dzbeduiqluq3',
    order: 3,
    slug: 'alertas-combinadas',
    title: 'Alertas Combinadas',
    xpReward: 75,
    content: `## Alertas Combinadas

Una emergencia real rara vez depende de un solo sensor. Los **operadores lógicos** \`and\`, \`or\` y \`not\` permiten combinar múltiples condiciones en una sola evaluación.

\`\`\`python
escudo_activo = True
meteoro_detectado = True

# and — ambas condiciones deben ser True
if meteoro_detectado and escudo_activo:
    print("Impacto inminente — escudo listo.")

# or — al menos una condición debe ser True
bateria_baja = False
temperatura_critica = True

if bateria_baja or temperatura_critica:
    print("Sistema en riesgo — revisar nave.")
\`\`\`

\`not\` invierte el valor lógico:

\`\`\`python
piloto_automatico = False
if not piloto_automatico:
    print("Control manual requerido.")
\`\`\`

Tabla de verdad rápida:
- \`True and False\` → \`False\`
- \`True or False\` → \`True\`
- \`not True\` → \`False\`

> 💡 **Diagnóstico:** Usa paréntesis para agrupar condiciones complejas: \`(a and b) or (c and d)\`.`,
  },
  {
    id: 'cmmu8wdo3pu2ky8dck127',
    chapterId: 'cmmu813h6dzbeduiqluq3',
    order: 4,
    slug: 'decisiones-anidadas',
    title: 'Decisiones Anidadas',
    xpReward: 100,
    content: `## Decisiones Anidadas

Algunos protocolos requieren verificaciones en cascada. Los **if anidados** son sentencias condicionales dentro de otras sentencias condicionales.

\`\`\`python
altitud = 120      # km
velocidad = 7800   # m/s

if altitud < 200:
    print("Dentro de la atmósfera superior.")
    if velocidad > 7500:
        print("Velocidad de reingreso — activar escudo térmico.")
        if velocidad > 8000:
            print("¡PELIGRO! Velocidad excesiva — frenar motores.")
    else:
        print("Velocidad controlada — maniobra segura.")
else:
    print("En órbita — sin peligro inmediato.")
\`\`\`

Cada nivel de anidamiento añade 4 espacios de indentación. Demasiados niveles hacen el código difícil de leer. Cuando superes 3 niveles, considera refactorizar con funciones o \`and\`/\`or\`:

\`\`\`python
# Más legible con and
if altitud < 200 and velocidad > 7500:
    print("Activar escudo térmico.")
\`\`\`

> 💡 **Arquitectura:** Más de 3 niveles de anidamiento es una señal de que deberías usar funciones.`,
  },
  {
    id: 'cmmu8wdo3vi9xdwgcw1et',
    chapterId: 'cmmu813h6dzbeduiqluq3',
    order: 5,
    slug: 'atajos-de-veracidad',
    title: 'Atajos de Veracidad',
    xpReward: 100,
    content: `## Atajos de Veracidad

Python puede evaluar cualquier valor como verdadero o falso sin compararlo explícitamente. Esto se llama **truthiness** y simplifica muchos condicionales de misión.

Valores que se evalúan como \`False\`:
- \`0\`, \`0.0\` (cero)
- \`""\` (cadena vacía)
- \`[]\`, \`{}\`, \`()\` (colecciones vacías)
- \`None\`

Todo lo demás es \`True\`.

\`\`\`python
tripulacion = ["Orion", "Lyra"]
mensaje_entrada = ""
nivel_combustible = 0

if tripulacion:
    print("Tripulación a bordo.")

if not mensaje_entrada:
    print("Sin transmisión entrante.")

if not nivel_combustible:
    print("¡Alerta! Combustible agotado.")
\`\`\`

Esto es equivalente a comparar con \`len(lista) > 0\` o \`valor != 0\`, pero mucho más conciso.

\`\`\`python
datos_sensor = None
if datos_sensor is None:
    print("Sensor sin respuesta — revisar conexión.")
\`\`\`

> 💡 **Eficiencia:** Usa truthiness para simplificar condiciones, pero usa \`is None\` explícitamente para verificar \`None\`.`,
  },

  // ─── Chapter 4 — Bucles Orbitales ────────────────────────────────────────
  {
    id: 'cmmu8wdo3f0yijp3kb3aj',
    chapterId: 'cmmu813h7d1he9xblxf3m',
    order: 1,
    slug: 'mientras-esperamos',
    title: 'Mientras Esperamos',
    xpReward: 50,
    content: `## Mientras Esperamos

La nave está en órbita de espera. El sistema monitorea continuamente hasta recibir la señal de reingreso. El bucle **while** repite un bloque de código mientras su condición sea verdadera.

\`\`\`python
senal_recibida = False
ciclos = 0

while not senal_recibida:
    ciclos += 1
    print(f"Ciclo {ciclos} — esperando señal...")
    if ciclos == 3:
        senal_recibida = True

print("¡Señal recibida! Iniciando secuencia de reingreso.")
\`\`\`

**Atención:** un \`while\` sin condición de salida produce un **bucle infinito**. Asegúrate siempre de que la condición pueda volverse \`False\`.

\`\`\`python
oxigeno = 100
while oxigeno > 0:
    print(f"Oxígeno: {oxigeno}%")
    oxigeno -= 10
print("Reservas agotadas.")
\`\`\`

> 💡 **Control:** Si ejecutas un bucle infinito accidentalmente, usa \`Ctrl+C\` para detener el programa.`,
  },
  {
    id: 'cmmu8wdo3lnzvux0h4mst',
    chapterId: 'cmmu813h7d1he9xblxf3m',
    order: 2,
    slug: 'para-cada-modulo',
    title: 'Para Cada Módulo',
    xpReward: 50,
    content: `## Para Cada Módulo

El sistema de diagnóstico debe revisar cada módulo de la nave uno por uno. El bucle **for** itera sobre cada elemento de una secuencia, ejecutando el bloque por cada uno.

\`\`\`python
modulos = ["Motor", "Escudo", "Soporte vital", "Comunicaciones"]

for modulo in modulos:
    print(f"Revisando {modulo}... OK")

print("Diagnóstico completo.")
\`\`\`

Puedes iterar sobre cadenas de texto también:

\`\`\`python
codigo_acceso = "ORION7"
for caracter in codigo_acceso:
    print(caracter)
\`\`\`

El bucle \`for\` es perfecto cuando sabes de antemano cuántos elementos tienes. A diferencia de \`while\`, no necesitas actualizar manualmente una variable de control.

\`\`\`python
lecturas = [98.6, 101.2, 99.8, 97.4]
for temperatura in lecturas:
    if temperatura > 100:
        print(f"Temperatura alta: {temperatura}°")
\`\`\`

> 💡 **Iterable:** Cualquier secuencia en Python (lista, cadena, tupla) puede usarse directamente en un \`for\`.`,
  },
  {
    id: 'cmmu8wdo4uy7scakqs08k',
    chapterId: 'cmmu813h7d1he9xblxf3m',
    order: 3,
    slug: 'cuenta-regresiva',
    title: 'Cuenta Regresiva',
    xpReward: 75,
    content: `## Cuenta Regresiva

T-menos 10 segundos para el encendido. \`range()\` genera una secuencia de números sin crear una lista en memoria, ideal para bucles con conteos precisos.

\`\`\`python
# Cuenta regresiva del 10 al 1
for t in range(10, 0, -1):
    print(f"T-{t}...")
print("¡Ignición!")
\`\`\`

\`range()\` acepta hasta tres argumentos: \`range(inicio, fin, paso)\`. El \`fin\` es **exclusivo**:

\`\`\`python
# Números del 0 al 4
for i in range(5):
    print(f"Órbita {i + 1}")

# Verificar cada 100 km de altitud
for altitud in range(0, 500, 100):
    print(f"Altitud: {altitud} km")
\`\`\`

También sirve para repetir una acción un número fijo de veces:

\`\`\`python
for _ in range(3):
    print("Ping al satélite...")
\`\`\`

> 💡 **Paso negativo:** \`range(10, 0, -1)\` baja de 10 a 1; \`range(10, -1, -1)\` incluye el 0.`,
  },
  {
    id: 'cmmu8wdo4if3urb28ravv',
    chapterId: 'cmmu813h7d1he9xblxf3m',
    order: 4,
    slug: 'break-y-continue',
    title: 'Break y Continue',
    xpReward: 75,
    content: `## Break y Continue

Durante el escaneo orbital, algunos sectores deben saltarse y otros detienen la búsqueda al instante. \`break\` y \`continue\` dan control preciso sobre el flujo de un bucle.

\`break\` **termina el bucle** inmediatamente:

\`\`\`python
sectores = ["A1", "A2", "A3", "A4", "A5"]

for sector in sectores:
    if sector == "A3":
        print(f"Señal detectada en {sector} — deteniendo escaneo.")
        break
    print(f"Sector {sector}: sin señal.")
\`\`\`

\`continue\` **salta al siguiente ciclo** sin ejecutar el resto del bloque:

\`\`\`python
for i in range(1, 8):
    if i % 2 == 0:
        continue   # saltar sectores pares
    print(f"Escaneando sector impar {i}")
\`\`\`

Ambos funcionan igual en bucles \`while\`:

\`\`\`python
while True:
    dato = input("Comando: ")
    if dato == "salir":
        break
    print(f"Ejecutando: {dato}")
\`\`\`

> 💡 **Control:** Usa \`break\` para detener al encontrar lo que buscas; usa \`continue\` para filtrar sin detener.`,
  },
  {
    id: 'cmmu8wdo4aojyn4zis2ow',
    chapterId: 'cmmu813h7d1he9xblxf3m',
    order: 5,
    slug: 'barrido-de-cuadricula',
    title: 'Barrido de Cuadrícula',
    xpReward: 100,
    content: `## Barrido de Cuadrícula

El radar debe escanear cada celda de una cuadrícula bidimensional. Para esto usamos **bucles anidados**: un bucle \`for\` dentro de otro.

\`\`\`python
filas = ["N", "S"]
columnas = [1, 2, 3]

for fila in filas:
    for columna in columnas:
        print(f"Escaneando celda {fila}{columna}")
\`\`\`

Los bucles anidados con \`range()\` son útiles para matrices numéricas:

\`\`\`python
# Cuadrícula 3x3 de energía
for x in range(3):
    for y in range(3):
        energia = (x + 1) * (y + 1)
        print(f"[{x},{y}] = {energia}", end="  ")
    print()  # salto de línea al final de cada fila
\`\`\`

Cada vuelta del bucle exterior ejecuta el bucle interior **completo**. Para una cuadrícula 3×3 = 9 iteraciones totales.

**Cuidado:** bucles muy anidados pueden ser lentos con datos grandes.

> 💡 **Eficiencia:** Minimiza los niveles de anidamiento — cada nivel multiplica el número de iteraciones.`,
  },

  // ─── Chapter 5 — Funciones de Misión ─────────────────────────────────────
  {
    id: 'cmmu8wdo446dozpnoawyk',
    chapterId: 'cmmu813h7o9ttalx36187',
    order: 1,
    slug: 'primera-funcion',
    title: 'Primera Función',
    xpReward: 50,
    content: `## Primera Función

El manual de vuelo tiene procedimientos estándar que se repiten. En Python, las **funciones** encapsulan bloques de código reutilizables, definidas con \`def\`.

\`\`\`python
def verificar_sistemas():
    print("Motor: OK")
    print("Escudo: OK")
    print("Soporte vital: OK")
    print("Sistemas listos para maniobra.")

# Llamar la función
verificar_sistemas()
verificar_sistemas()  # reutilizable
\`\`\`

La función se define una vez y puede llamarse tantas veces como sea necesario. El bloque indentado bajo \`def\` es el **cuerpo** de la función.

\`\`\`python
def cuenta_regresiva():
    for t in range(5, 0, -1):
        print(f"T-{t}...")
    print("¡Despegue!")

cuenta_regresiva()
\`\`\`

Las funciones evitan repetir código y facilitan el mantenimiento — si el procedimiento cambia, solo actualizas un lugar.

> 💡 **Protocolo:** Nombra tus funciones con verbos que describan la acción: \`calcular_orbita()\`, \`enviar_reporte()\`.`,
  },
  {
    id: 'cmmu8wdo4pfwgyfnyhot4',
    chapterId: 'cmmu813h7o9ttalx36187',
    order: 2,
    slug: 'pasando-datos',
    title: 'Pasando Datos',
    xpReward: 75,
    content: `## Pasando Datos

Una función que siempre usa los mismos valores es útil, pero los **parámetros** la hacen realmente poderosa: permiten enviar datos distintos en cada llamada.

\`\`\`python
def reportar_estado(modulo, nivel):
    print(f"Módulo {modulo} — Energía: {nivel}%")

reportar_estado("Motor A", 87)
reportar_estado("Escudo", 45)
reportar_estado("Antena", 100)
\`\`\`

Puedes tener múltiples parámetros. Los **argumentos de palabra clave** mejoran la legibilidad:

\`\`\`python
def calcular_tiempo(distancia, velocidad):
    tiempo = distancia / velocidad
    return tiempo

horas = calcular_tiempo(distancia=384400, velocidad=11000)
print(f"Tiempo estimado: {horas:.1f} horas")
\`\`\`

Los parámetros son variables locales dentro de la función — solo existen mientras la función se ejecuta.

> 💡 **Claridad:** Usa argumentos de palabra clave en llamadas con muchos parámetros para evitar confusiones de orden.`,
  },
  {
    id: 'cmmu8wdo4fik3a6t5zdk0',
    chapterId: 'cmmu813h7o9ttalx36187',
    order: 3,
    slug: 'obteniendo-resultados',
    title: 'Obteniendo Resultados',
    xpReward: 75,
    content: `## Obteniendo Resultados

Las funciones no solo ejecutan acciones — también pueden **devolver valores** al código que las llamó. La sentencia \`return\` entrega el resultado y termina la función.

\`\`\`python
def calcular_delta_v(velocidad_final, velocidad_inicial):
    delta_v = velocidad_final - velocidad_inicial
    return delta_v

resultado = calcular_delta_v(7900, 7400)
print(f"ΔV requerido: {resultado} m/s")
\`\`\`

Puedes devolver múltiples valores como una tupla:

\`\`\`python
def estado_combustible(litros):
    porcentaje = litros / 2000 * 100
    critico = porcentaje < 20
    return porcentaje, critico

pct, es_critico = estado_combustible(350)
print(f"Combustible: {pct:.1f}% — Crítico: {es_critico}")
\`\`\`

Sin \`return\`, Python devuelve \`None\` automáticamente. Una función con \`return\` sin valor también devuelve \`None\`.

> 💡 **Diseño:** Funciones que devuelven valores son más reutilizables y comprobables que las que solo imprimen.`,
  },
  {
    id: 'cmmu8wdo448o03j0jlawq',
    chapterId: 'cmmu813h7o9ttalx36187',
    order: 4,
    slug: 'valores-de-reserva',
    title: 'Valores de Reserva',
    xpReward: 75,
    content: `## Valores de Reserva

Cuando los sensores no envían un valor, el sistema usa datos de respaldo. Los **parámetros por defecto** dan a una función un valor predefinido cuando no se proporciona uno.

\`\`\`python
def preparar_maniobra(tipo, empuje=50, duracion=10):
    print(f"Maniobra: {tipo}")
    print(f"Empuje: {empuje}% | Duración: {duracion}s")

preparar_maniobra("Corrección orbital")          # usa defaults
preparar_maniobra("Reingreso", empuje=80)        # empuje personalizado
preparar_maniobra("Freno", empuje=100, duracion=30)
\`\`\`

Los parámetros con valor por defecto siempre van **al final** de la lista de parámetros:

\`\`\`python
# Correcto
def reporte(nombre, nivel=100, unidad="km"):
    print(f"{nombre}: {nivel} {unidad}")

# Incorrecto — SyntaxError
# def reporte(nivel=100, nombre, unidad="km"):
\`\`\`

> 💡 **Flexibilidad:** Los valores por defecto hacen tu función fácil de usar en el caso común y configurable para casos especiales.`,
  },
  {
    id: 'cmmu8wdo4fyl60jyvwxbr',
    chapterId: 'cmmu813h7o9ttalx36187',
    order: 5,
    slug: 'scope-y-globales',
    title: 'Scope y Globales',
    xpReward: 100,
    content: `## Scope y Globales

Las variables no son accesibles en todos lados — su **scope** (alcance) define dónde existen. En Python hay dos ámbitos principales: **local** (dentro de una función) y **global** (en el módulo principal).

\`\`\`python
combustible_global = 1000   # variable global

def quemar_combustible(cantidad):
    resultado = combustible_global - cantidad  # puede leer global
    return resultado

restante = quemar_combustible(200)
print(restante)  # 800
\`\`\`

Para **modificar** una variable global dentro de una función, debes declarar \`global\`:

\`\`\`python
energia = 100

def usar_booster():
    global energia
    energia -= 30
    print(f"Energía tras booster: {energia}%")

usar_booster()   # 70
usar_booster()   # 40
\`\`\`

Modificar variables globales hace el código difícil de depurar. Prefiere pasar datos como parámetros y devolver resultados con \`return\`.

> 💡 **Disciplina:** Evita \`global\` siempre que puedas — las funciones puras (sin efectos externos) son más seguras y testeables.`,
  },
  {
    id: 'cmmu8wdo499m9lbnsnw9b',
    chapterId: 'cmmu813h7o9ttalx36187',
    order: 6,
    slug: 'documentar-el-kit',
    title: 'Documentar el Kit',
    xpReward: 75,
    content: `## Documentar el Kit

El manual de procedimientos debe incluir una descripción de cada herramienta. Los **docstrings** son cadenas de documentación que describen qué hace una función, sus parámetros y qué devuelve.

\`\`\`python
def calcular_orbita(altitud, masa):
    """
    Calcula el periodo orbital de una nave.

    Parámetros:
        altitud (float): Altitud sobre la superficie en km.
        masa (float): Masa de la nave en kg.

    Retorna:
        float: Periodo en minutos.
    """
    radio_tierra = 6371  # km
    r = radio_tierra + altitud
    periodo = 2 * 3.14159 * (r / 7.9) ** 1.5 / 60
    return periodo
\`\`\`

Accede al docstring de cualquier función con \`help()\`:

\`\`\`python
help(calcular_orbita)
print(calcular_orbita.__doc__)
\`\`\`

Un buen docstring responde tres preguntas: ¿qué hace?, ¿qué recibe?, ¿qué devuelve?

> 💡 **Manual:** Escribe el docstring antes del código — te obliga a pensar claramente en el propósito de la función.`,
  },

  // ─── Chapter 6 — Manifiesto de la Tripulación ────────────────────────────
  {
    id: 'cmmu8wdo4o8d5v6l3rvv2',
    chapterId: 'cmmu813h75vfx5pyl7kuw',
    order: 1,
    slug: 'lista-de-la-tripulacion',
    title: 'Lista de la Tripulación',
    xpReward: 75,
    content: `## Lista de la Tripulación

La tripulación de la misión necesita un registro ordenado. Las **listas** en Python almacenan múltiples valores en una sola variable, manteniendo el orden de inserción.

\`\`\`python
tripulacion = ["Orion", "Lyra", "Atlas", "Nova"]
suministros = ["oxígeno", "agua", "comida", "medicina"]
lecturas = [98.6, 101.2, 99.8, 97.4]

print(f"Tripulantes: {len(tripulacion)}")
print(f"Primer tripulante: {tripulacion[0]}")
\`\`\`

Las listas pueden contener cualquier tipo de dato, incluso mezclarlos:

\`\`\`python
modulo = ["Artemis-7", 4, True, 408.5]
print(modulo)
\`\`\`

Puedes crear una lista vacía y añadir elementos después:

\`\`\`python
alertas = []
alertas.append("Presión baja")
alertas.append("Temperatura alta")
print(f"Alertas activas: {alertas}")
\`\`\`

> 💡 **Orden:** Las listas preservan el orden de inserción — el elemento en índice \`0\` siempre es el primero añadido.`,
  },
  {
    id: 'cmmu8wdo429fhd7ouvvd2',
    chapterId: 'cmmu813h75vfx5pyl7kuw',
    order: 2,
    slug: 'accediendo-al-manifiesto',
    title: 'Accediendo al Manifiesto',
    xpReward: 75,
    content: `## Accediendo al Manifiesto

El manifiesto de la misión tiene 50 entradas. Necesitamos acceder a tripulantes específicos y extraer subgrupos. La **indexación** y el **slicing** son las herramientas para eso.

\`\`\`python
tripulacion = ["Orion", "Lyra", "Atlas", "Nova", "Vega"]

# Indexación — acceso por posición (0-based)
print(tripulacion[0])    # "Orion" — primero
print(tripulacion[-1])   # "Vega" — último
print(tripulacion[-2])   # "Nova" — penúltimo
\`\`\`

**Slicing** extrae una sublista con \`[inicio:fin:paso]\`:

\`\`\`python
# Primeros tres tripulantes
equipo_a = tripulacion[0:3]   # ["Orion", "Lyra", "Atlas"]

# Desde el tercero hasta el final
reservas = tripulacion[2:]    # ["Atlas", "Nova", "Vega"]

# Invertir la lista
invertida = tripulacion[::-1]
print(invertida)
\`\`\`

El índice \`fin\` es **exclusivo** — \`[0:3]\` devuelve los elementos 0, 1 y 2.

> 💡 **Negativo:** Los índices negativos cuentan desde el final — \`-1\` es el último, \`-2\` el penúltimo.`,
  },
  {
    id: 'cmmu8wdo4rpkpvwn4klg8',
    chapterId: 'cmmu813h75vfx5pyl7kuw',
    order: 3,
    slug: 'actualizando-la-lista',
    title: 'Actualizando la Lista',
    xpReward: 75,
    content: `## Actualizando la Lista

Durante la misión, la tripulación y los suministros cambian. Las listas son **mutables** — puedes añadir, eliminar y reorganizar elementos en cualquier momento.

\`\`\`python
tripulacion = ["Orion", "Lyra", "Atlas"]

# append — añade al final
tripulacion.append("Nova")
print(tripulacion)   # ["Orion", "Lyra", "Atlas", "Nova"]

# remove — elimina la primera ocurrencia del valor
tripulacion.remove("Lyra")
print(tripulacion)   # ["Orion", "Atlas", "Nova"]

# insert — inserta en una posición específica
tripulacion.insert(1, "Vega")
print(tripulacion)   # ["Orion", "Vega", "Atlas", "Nova"]
\`\`\`

Ordenar la lista con \`sort()\`:

\`\`\`python
numeros = [3, 1, 4, 1, 5, 9]
numeros.sort()                # ascendente
numeros.sort(reverse=True)    # descendente
\`\`\`

> 💡 **Copia:** \`sort()\` modifica la lista original. Usa \`sorted(lista)\` si necesitas conservar el orden original.`,
  },
  {
    id: 'cmmu8wdo4gj70ivjdtwb1',
    chapterId: 'cmmu813h75vfx5pyl7kuw',
    order: 4,
    slug: 'coordenadas-fijas',
    title: 'Coordenadas Fijas',
    xpReward: 75,
    content: `## Coordenadas Fijas

Las coordenadas de los puntos de reingreso nunca deben modificarse una vez calculadas. Las **tuplas** son secuencias **inmutables** — como listas, pero que no pueden cambiar.

\`\`\`python
# Tupla con paréntesis
punto_reingreso = (28.5, -80.6)   # latitud, longitud
print(f"Zona de amerizaje: {punto_reingreso}")

# Acceso igual que listas
print(punto_reingreso[0])   # 28.5
print(punto_reingreso[1])   # -80.6

# Intentar modificar lanza TypeError
# punto_reingreso[0] = 30.0  ← Error!
\`\`\`

Las tuplas son útiles para devolver múltiples valores desde funciones:

\`\`\`python
def posicion_nave():
    return 408.0, 51.6, 245.3   # altitud, inclinacion, longitud

alt, inc, lon = posicion_nave()   # desempaquetado
print(f"Alt: {alt} km | Inc: {inc}° | Lon: {lon}°")
\`\`\`

> 💡 **Inmutable:** Usa tuplas para datos que no deben cambiar — Python las procesa más rápido que las listas.`,
  },
  {
    id: 'cmmu8wdo4rpztls715e1n',
    chapterId: 'cmmu813h75vfx5pyl7kuw',
    order: 5,
    slug: 'filtrando-suministros',
    title: 'Filtrando Suministros',
    xpReward: 100,
    content: `## Filtrando Suministros

El almacén de la nave tiene cientos de ítems. Necesitamos filtrar y transformar listas de forma rápida. Las **list comprehensions** crean nuevas listas en una sola línea expresiva.

Sintaxis: \`[expresión for elemento in iterable if condición]\`

\`\`\`python
lecturas = [23, 87, 12, 95, 44, 102, 67, 8]

# Filtrar lecturas críticas (> 80)
criticas = [r for r in lecturas if r > 80]
print(criticas)   # [87, 95, 102]

# Transformar — convertir km a millas
distancias_km = [100, 250, 380, 520]
distancias_millas = [d * 0.621 for d in distancias_km]
print(distancias_millas)
\`\`\`

Comparado con el equivalente en bucle:

\`\`\`python
# Equivalente con for
criticas = []
for r in lecturas:
    if r > 80:
        criticas.append(r)
\`\`\`

La comprehension es más concisa y, en general, más rápida.

> 💡 **Legibilidad:** Si la comprehension supera ~60 caracteres, considera usar un bucle \`for\` normal.`,
  },
  {
    id: 'cmmu8wdo48oerohh1c9b2',
    chapterId: 'cmmu813h75vfx5pyl7kuw',
    order: 6,
    slug: 'cuadricula-de-almacenamiento',
    title: 'Cuadrícula de Almacenamiento',
    xpReward: 100,
    content: `## Cuadrícula de Almacenamiento

La bodega de la nave está organizada en filas y columnas. Las **listas anidadas** (listas dentro de listas) representan datos bidimensionales como matrices o cuadrículas.

\`\`\`python
bodega = [
    ["oxígeno", "agua", "comida"],
    ["herramientas", "piezas", "cables"],
    ["medicina", "trajes", "baterías"]
]

# Acceder: [fila][columna]
print(bodega[0][1])   # "agua"
print(bodega[2][0])   # "medicina"
\`\`\`

Iterar sobre una cuadrícula con bucles anidados:

\`\`\`python
for fila in bodega:
    for item in fila:
        print(f"  - {item}")
    print("---")
\`\`\`

Crear una matriz numérica vacía:

\`\`\`python
filas, cols = 3, 4
matriz = [[0] * cols for _ in range(filas)]
print(matriz)
\`\`\`

> 💡 **Acceso:** Usa \`lista[fila][columna]\` — primero el índice de la lista exterior, luego el de la interior.`,
  },

  // ─── Chapter 7 — Base de Datos de Misión ─────────────────────────────────
  {
    id: 'cmmu8wdo429l90bleips2',
    chapterId: 'cmmu813h7ur35fi0ucyv8',
    order: 1,
    slug: 'perfiles-de-tripulacion',
    title: 'Perfiles de Tripulación',
    xpReward: 75,
    content: `## Perfiles de Tripulación

Cada tripulante tiene un perfil con nombre, rango y estado de salud. Un **diccionario** almacena pares **clave: valor**, permitiendo acceder a los datos por nombre en lugar de por posición.

\`\`\`python
orion = {
    "nombre": "Comandante Orion",
    "rango": "Capitán",
    "edad": 38,
    "salud": 97.5,
    "activo": True
}

print(orion["nombre"])    # "Comandante Orion"
print(orion["salud"])     # 97.5
\`\`\`

Los diccionarios se crean con llaves \`{}\`. Las claves deben ser únicas e inmutables (generalmente strings):

\`\`\`python
nave = {
    "id": "Artemis-7",
    "altitud": 408,
    "velocidad": 7800,
    "tripulantes": 4
}

print(f"Nave {nave['id']} a {nave['altitud']} km")
\`\`\`

> 💡 **Clave:** Las claves de diccionario son como etiquetas únicas — más descriptivas que los índices numéricos de una lista.`,
  },
  {
    id: 'cmmu8wdo47s0alzvalzat',
    chapterId: 'cmmu813h7ur35fi0ucyv8',
    order: 2,
    slug: 'leyendo-los-datos',
    title: 'Leyendo los Datos',
    xpReward: 75,
    content: `## Leyendo los Datos

Los sensores actualizan constantemente los datos de la nave. Necesitamos leer valores del diccionario y modificarlos cuando lleguen nuevas lecturas.

\`\`\`python
nave = {"altitud": 408, "velocidad": 7800, "combustible": 75}

# Leer un valor
print(nave["altitud"])

# Actualizar un valor existente
nave["altitud"] = 380
print(f"Nueva altitud: {nave['altitud']} km")

# Añadir una nueva clave
nave["temperatura"] = 22.5
print(nave)
\`\`\`

Para **eliminar** una clave usa \`del\` o \`.pop()\`:

\`\`\`python
del nave["temperatura"]             # elimina la clave
velocidad = nave.pop("velocidad")   # elimina y devuelve el valor
print(f"Velocidad archivada: {velocidad}")
\`\`\`

Verificar si una clave existe antes de acceder:

\`\`\`python
if "combustible" in nave:
    print(f"Combustible: {nave['combustible']}%")
\`\`\`

> 💡 **Seguridad:** Usa \`in\` antes de acceder a una clave que podría no existir para evitar \`KeyError\`.`,
  },
  {
    id: 'cmmu8wdo4b41t7so3gqy3',
    chapterId: 'cmmu813h7ur35fi0ucyv8',
    order: 3,
    slug: 'metodos-de-dict',
    title: 'Métodos de Dict',
    xpReward: 75,
    content: `## Métodos de Dict

Para procesar todos los datos de la base de misión, necesitamos recorrer claves y valores. Los diccionarios tienen métodos específicos para esto.

\`\`\`python
sistemas = {
    "motor": 92,
    "escudo": 78,
    "antena": 100,
    "soporte_vital": 88
}

# .keys() — todas las claves
print(list(sistemas.keys()))

# .values() — todos los valores
print(list(sistemas.values()))

# .items() — pares (clave, valor)
for sistema, nivel in sistemas.items():
    print(f"{sistema}: {nivel}%")
\`\`\`

\`.get()\` devuelve un valor por defecto si la clave no existe, evitando \`KeyError\`:

\`\`\`python
nivel = sistemas.get("radar", 0)
print(f"Radar: {nivel}%")   # 0 — clave no existe

nivel_motor = sistemas.get("motor", 0)
print(f"Motor: {nivel_motor}%")   # 92
\`\`\`

> 💡 **Preferido:** Usa \`.get(clave, default)\` en lugar de acceso directo cuando la clave puede no estar presente.`,
  },
  {
    id: 'cmmu8wdo43hbsk22tzfxc',
    chapterId: 'cmmu813h7ur35fi0ucyv8',
    order: 4,
    slug: 'perfiles-anidados',
    title: 'Perfiles Anidados',
    xpReward: 100,
    content: `## Perfiles Anidados

La base de datos de misión almacena información detallada de cada tripulante, incluyendo subestructuras. Los **diccionarios anidados** permiten organizar datos jerárquicos.

\`\`\`python
tripulacion = {
    "orion": {
        "nombre": "Comandante Orion",
        "salud": {"oxigeno": 98, "presion": "normal"},
        "equipo": ["casco", "traje", "radio"]
    },
    "lyra": {
        "nombre": "Ingeniera Lyra",
        "salud": {"oxigeno": 95, "presion": "normal"},
        "equipo": ["herramientas", "scanner"]
    }
}

# Acceder a datos anidados
print(tripulacion["orion"]["nombre"])
print(tripulacion["lyra"]["salud"]["oxigeno"])
\`\`\`

Actualizar valores en niveles profundos:

\`\`\`python
tripulacion["orion"]["salud"]["oxigeno"] = 96
print(tripulacion["orion"]["salud"])
\`\`\`

> 💡 **Profundidad:** Cada nivel de anidamiento se accede con otro par de corchetes. Más de 3 niveles sugiere refactorizar.`,
  },
  {
    id: 'cmmu8wdo46h90cad5io53',
    chapterId: 'cmmu813h7ur35fi0ucyv8',
    order: 5,
    slug: 'recorriendo-la-base-de-datos',
    title: 'Recorriendo la Base de Datos',
    xpReward: 75,
    content: `## Recorriendo la Base de Datos

El sistema de diagnóstico debe verificar todos los registros. Iterar sobre diccionarios permite procesar cada entrada de la base de datos de misión automáticamente.

\`\`\`python
inventario = {
    "oxígeno": 850,
    "agua": 1200,
    "comida": 480,
    "combustible": 950
}

# Iterar claves
for recurso in inventario:
    print(f"Recurso: {recurso}")

# Iterar valores con alerta
for cantidad in inventario.values():
    if cantidad < 500:
        print(f"¡Alerta! Stock bajo: {cantidad}")
\`\`\`

Iterar pares con \`.items()\` — la forma más común:

\`\`\`python
for recurso, cantidad in inventario.items():
    estado = "CRÍTICO" if cantidad < 500 else "OK"
    print(f"{recurso}: {cantidad} unidades — {estado}")
\`\`\`

> 💡 **Orden:** Desde Python 3.7, los diccionarios mantienen el orden de inserción — puedes confiar en él.`,
  },
  {
    id: 'cmmu8wdo4s17ygj0zv6gr',
    chapterId: 'cmmu813h7ur35fi0ucyv8',
    order: 6,
    slug: 'puntos-de-ruta-unicos',
    title: 'Puntos de Ruta Únicos',
    xpReward: 100,
    content: `## Puntos de Ruta Únicos

El sistema de navegación recibe señales de múltiples satélites, con coordenadas repetidas. Los **sets** (conjuntos) almacenan solo valores **únicos** y ofrecen operaciones matemáticas de conjuntos.

\`\`\`python
# Eliminar duplicados automáticamente
señales = {"SAT-1", "SAT-3", "SAT-1", "SAT-7", "SAT-3"}
print(señales)   # {'SAT-1', 'SAT-3', 'SAT-7'} — sin duplicados

# Crear desde una lista con duplicados
rutas = [101, 205, 101, 307, 205, 410]
rutas_unicas = set(rutas)
print(rutas_unicas)
\`\`\`

Operaciones de conjuntos:

\`\`\`python
activos = {"Orion", "Lyra", "Atlas"}
disponibles = {"Lyra", "Nova", "Vega"}

comunes = activos & disponibles       # intersección
todos = activos | disponibles         # unión
solo_activos = activos - disponibles  # diferencia

print(comunes)   # {'Lyra'}
\`\`\`

> 💡 **Membresía:** Verificar \`elemento in set\` es mucho más rápido que \`elemento in lista\` para colecciones grandes.`,
  },

  // ─── Chapter 8 — Protocolos de Error ─────────────────────────────────────
  {
    id: 'cmmu8wdo4bwkuhmyr0a8x',
    chapterId: 'cmmu813h76ld0t4n9ozfl',
    order: 1,
    slug: 'capturando-fallos',
    title: 'Capturando Fallos',
    xpReward: 75,
    content: `## Capturando Fallos

Los sistemas de la nave pueden fallar en cualquier momento. El bloque **try/except** permite capturar errores en tiempo de ejecución sin que el programa se detenga abruptamente.

\`\`\`python
try:
    altitud = int(input("Altitud de maniobra (km): "))
    velocidad = 7800 / altitud
    print(f"Velocidad ajustada: {velocidad:.2f}")
except ValueError:
    print("Error: el valor ingresado no es un número.")
except ZeroDivisionError:
    print("Error: altitud no puede ser cero.")
\`\`\`

Sin manejo de errores, una excepción detiene todo el programa — en una nave espacial eso sería catastrófico.

\`\`\`python
try:
    datos = [100, 200, 300]
    print(datos[10])   # índice fuera de rango
except IndexError as e:
    print(f"Fallo de acceso: {e}")
    print("Usando valor por defecto.")
\`\`\`

> 💡 **Específico:** Captura siempre el tipo de excepción más específico posible — evita \`except:\` sin tipo.`,
  },
  {
    id: 'cmmu8wdo4888f9vxrp8dc',
    chapterId: 'cmmu813h76ld0t4n9ozfl',
    order: 2,
    slug: 'manejadores-especificos',
    title: 'Manejadores Específicos',
    xpReward: 75,
    content: `## Manejadores Específicos

Diferentes fallos requieren diferentes protocolos. Un bloque \`try\` puede tener **múltiples cláusulas \`except\`**, cada una manejando un tipo de error distinto.

\`\`\`python
def leer_sensor(datos, indice):
    try:
        valor = datos[indice]
        resultado = 100 / valor
        return resultado
    except IndexError:
        print("Error: sensor fuera de rango del array.")
    except ZeroDivisionError:
        print("Error: lectura del sensor es cero — fallo de hardware.")
    except TypeError:
        print("Error: tipo de dato inesperado en el sensor.")
\`\`\`

Python recorre los \`except\` en orden y ejecuta el primero que coincida:

\`\`\`python
try:
    combustible = float(input("Combustible restante: "))
    autonomia = 1000 / combustible
    print(f"Autonomía: {autonomia:.1f} km")
except ValueError:
    print("Formato inválido — ingresa un número.")
except ZeroDivisionError:
    print("Sin combustible — misión en riesgo.")
\`\`\`

> 💡 **Orden:** Coloca las excepciones más específicas primero; las más generales al final para no ocultar errores.`,
  },
  {
    id: 'cmmu8wdo4jix8cb55qz73',
    chapterId: 'cmmu813h76ld0t4n9ozfl',
    order: 3,
    slug: 'siempre-limpia',
    title: 'Siempre Limpia',
    xpReward: 100,
    content: `## Siempre Limpia

Después de una maniobra riesgosa, el protocolo exige limpiar los sistemas sin importar si tuvo éxito o falló. Las cláusulas \`else\` y \`finally\` en manejo de excepciones cumplen esa función.

\`else\` se ejecuta **solo si no ocurrió ninguna excepción**:

\`\`\`python
try:
    valor = int(input("Código de acceso: "))
except ValueError:
    print("Código inválido — acceso denegado.")
else:
    print(f"Acceso concedido. Código: {valor}")
\`\`\`

\`finally\` se ejecuta **siempre**, con o sin error — ideal para liberar recursos:

\`\`\`python
try:
    archivo = open("registro.txt", "r")
    contenido = archivo.read()
    print(contenido)
except FileNotFoundError:
    print("Archivo de registro no encontrado.")
finally:
    print("Cerrando conexión con sistema de archivos.")
    # archivo.close() iría aquí si se abrió
\`\`\`

> 💡 **Limpieza:** Usa \`finally\` para acciones que deben ocurrir siempre: cerrar archivos, liberar conexiones, resetear estados.`,
  },
  {
    id: 'cmmu8wdo4f0ir49zu66fx',
    chapterId: 'cmmu813h76ld0t4n9ozfl',
    order: 4,
    slug: 'disparar-la-alarma',
    title: 'Disparar la Alarma',
    xpReward: 100,
    content: `## Disparar la Alarma

El piloto automático detecta una condición imposible. En vez de continuar con datos inválidos, puede **lanzar una excepción** intencionalmente usando \`raise\`.

\`\`\`python
def establecer_altitud(km):
    if km < 0:
        raise ValueError(f"Altitud inválida: {km} km. Debe ser >= 0.")
    if km > 36000:
        raise ValueError(f"Altitud {km} km excede órbita geoestacionaria.")
    return km

try:
    altitud = establecer_altitud(-50)
except ValueError as e:
    print(f"Error de parámetro: {e}")
\`\`\`

\`raise\` también puede re-lanzar la excepción actual dentro de un \`except\`:

\`\`\`python
try:
    velocidad = float("velocidad_invalida")
except ValueError:
    print("Error registrado en bitácora.")
    raise   # re-lanza para el nivel superior
\`\`\`

> 💡 **Guardia:** Valida los parámetros de tus funciones con \`raise\` al inicio — es más fácil depurar errores tempranos.`,
  },
  {
    id: 'cmmu8wdo47p5kvlhmp06n',
    chapterId: 'cmmu813h76ld0t4n9ozfl',
    order: 5,
    slug: 'alertas-personalizadas',
    title: 'Alertas Personalizadas',
    xpReward: 100,
    content: `## Alertas Personalizadas

El sistema de la nave necesita errores con nombres específicos que identifiquen exactamente qué salió mal. Las **excepciones personalizadas** son clases que heredan de \`Exception\`.

\`\`\`python
class FalloDePropulsor(Exception):
    """Se lanza cuando el propulsor no responde."""
    pass

class NivelCritico(Exception):
    """Se lanza cuando un recurso cae por debajo del umbral."""
    def __init__(self, recurso, nivel):
        super().__init__(f"{recurso} en nivel crítico: {nivel}%")
        self.recurso = recurso
        self.nivel = nivel
\`\`\`

Usar las excepciones personalizadas:

\`\`\`python
def verificar_oxigeno(nivel):
    if nivel < 20:
        raise NivelCritico("Oxígeno", nivel)

try:
    verificar_oxigeno(15)
except NivelCritico as e:
    print(f"ALERTA: {e}")
    print(f"Recurso afectado: {e.recurso}")
\`\`\`

> 💡 **Semántica:** Las excepciones personalizadas hacen tu código autodocumentado — el nombre del error dice exactamente qué pasó.`,
  },

  // ─── Chapter 9 — Bahía de Módulos ────────────────────────────────────────
  {
    id: 'cmmu8wdo43q7p8x0ug9fy',
    chapterId: 'cmmu813h7qwez77zxcttf',
    order: 1,
    slug: 'abriendo-la-caja',
    title: 'Abriendo la Caja',
    xpReward: 75,
    content: `## Abriendo la Caja

La nave necesita cálculos trigonométricos y logarítmicos para la trayectoria de reingreso. El módulo **math** de Python provee estas funciones matemáticas avanzadas.

\`\`\`python
import math

# Constantes
print(math.pi)    # 3.141592653589793
print(math.e)     # 2.718281828459045

# Funciones comunes
radio = 50
area = math.pi * radio ** 2
print(f"Área de señal: {area:.2f} km²")

hipotenusa = math.sqrt(3**2 + 4**2)
print(f"Distancia diagonal: {hipotenusa}")   # 5.0
\`\`\`

Funciones trigonométricas para cálculos de ángulo:

\`\`\`python
angulo_grados = 45
angulo_rad = math.radians(angulo_grados)
print(f"sin(45°) = {math.sin(angulo_rad):.4f}")
print(f"cos(45°) = {math.cos(angulo_rad):.4f}")
\`\`\`

> 💡 **Radianes:** Las funciones trigonométricas de \`math\` trabajan en radianes — usa \`math.radians()\` para convertir desde grados.`,
  },
  {
    id: 'cmmu8wdo4q30veocfruvs',
    chapterId: 'cmmu813h7qwez77zxcttf',
    order: 2,
    slug: 'eventos-aleatorios',
    title: 'Eventos Aleatorios',
    xpReward: 75,
    content: `## Eventos Aleatorios

Las simulaciones de emergencia requieren eventos impredecibles. El módulo **random** genera números y selecciones aleatorias para pruebas y simulaciones de la misión.

\`\`\`python
import random

# Número entero aleatorio en rango [a, b]
falla_sector = random.randint(1, 10)
print(f"Falla simulada en sector: {falla_sector}")

# Float entre 0.0 y 1.0
probabilidad = random.random()
print(f"Probabilidad de impacto: {probabilidad:.2%}")

# Float en rango específico
temperatura = random.uniform(150.0, 500.0)
print(f"Temperatura simulada: {temperatura:.1f}°C")
\`\`\`

Selección y mezcla de listas:

\`\`\`python
tripulacion = ["Orion", "Lyra", "Atlas", "Nova"]

# Elegir uno al azar
eva = random.choice(tripulacion)
print(f"EVA asignada a: {eva}")

# Mezclar orden
random.shuffle(tripulacion)
print(f"Turno de guardia: {tripulacion}")
\`\`\`

> 💡 **Reproducible:** Usa \`random.seed(42)\` para obtener siempre la misma secuencia aleatoria en pruebas.`,
  },
  {
    id: 'cmmu8wdo497awn9tbz3yq',
    chapterId: 'cmmu813h7qwez77zxcttf',
    order: 3,
    slug: 'reloj-de-mision',
    title: 'Reloj de Misión',
    xpReward: 75,
    content: `## Reloj de Misión

Cada evento de la misión lleva una marca de tiempo. El módulo **datetime** provee herramientas para trabajar con fechas, horas y duraciones.

\`\`\`python
from datetime import datetime, timedelta

# Momento actual
ahora = datetime.now()
print(f"Hora misión: {ahora.strftime('%Y-%m-%d %H:%M:%S')}")

# Fecha específica de lanzamiento
lanzamiento = datetime(2024, 3, 15, 9, 30, 0)
print(f"Lanzamiento: {lanzamiento}")
\`\`\`

Calcular duraciones con \`timedelta\`:

\`\`\`python
reingreso = lanzamiento + timedelta(days=12, hours=6)
print(f"Reingreso estimado: {reingreso}")

# Diferencia entre fechas
duracion = reingreso - lanzamiento
print(f"Duración de misión: {duracion.days} días")
\`\`\`

Comparar fechas:

\`\`\`python
if datetime.now() > reingreso:
    print("¡Reingreso atrasado! Revisar trayectoria.")
\`\`\`

> 💡 **Formato:** Usa \`strftime()\` para formatear fechas como texto y \`strptime()\` para convertir texto a fecha.`,
  },
  {
    id: 'cmmu8wdo5azxc0hc2dgn4',
    chapterId: 'cmmu813h7qwez77zxcttf',
    order: 4,
    slug: 'modulos-propios',
    title: 'Módulos Propios',
    xpReward: 100,
    content: `## Módulos Propios

La nave tiene sistemas reutilizables que deben estar disponibles en todo el software. Podemos crear nuestros propios **módulos**: archivos \`.py\` con funciones y constantes que importamos donde los necesitemos.

Archivo \`propulsion.py\`:

\`\`\`python
# propulsion.py
VELOCIDAD_ORBITAL = 7900  # m/s
GRAVEDAD_TIERRA = 9.81    # m/s²

def calcular_delta_v(v_final, v_inicial):
    """Calcula el cambio de velocidad necesario."""
    return abs(v_final - v_inicial)

def tiempo_de_vuelo(distancia, velocidad):
    """Devuelve el tiempo en horas."""
    return distancia / velocidad / 3600
\`\`\`

Importar y usar en otro archivo:

\`\`\`python
# mision_principal.py
import propulsion

dv = propulsion.calcular_delta_v(7900, 7400)
print(f"ΔV requerido: {dv} m/s")

horas = propulsion.tiempo_de_vuelo(384400, propulsion.VELOCIDAD_ORBITAL)
print(f"Tiempo a la Luna: {horas:.1f} h")
\`\`\`

> 💡 **Organización:** Divide tu código en módulos por responsabilidad — propulsión, navegación, soporte vital — para mantenerlo manejable.`,
  },
  {
    id: 'cmmu8wdo5u6m6ks7damai',
    chapterId: 'cmmu813h7qwez77zxcttf',
    order: 5,
    slug: 'importaciones-limpias',
    title: 'Importaciones Limpias',
    xpReward: 75,
    content: `## Importaciones Limpias

El código de navegación usa docenas de funciones matemáticas. Repetir \`math.\` antes de cada una es verboso. \`from\` y \`as\` hacen las importaciones más limpias y expresivas.

\`from módulo import nombre\` importa solo lo que necesitas:

\`\`\`python
from math import pi, sqrt, radians, sin, cos

angulo = radians(30)
print(f"sin(30°) = {sin(angulo):.4f}")
print(f"Área = {pi * sqrt(25):.4f}")
\`\`\`

\`as\` crea un alias — útil para nombres largos o conflictos:

\`\`\`python
import datetime as dt
from random import randint as aleatorio

ahora = dt.datetime.now()
sector = aleatorio(1, 20)
print(f"Sector {sector} escaneado a las {ahora.strftime('%H:%M')}")
\`\`\`

Evita \`from módulo import *\` — importa todo sin control y contamina el espacio de nombres.

> 💡 **Explícito:** Importa solo lo que uses — el código se vuelve más legible y los errores más fáciles de rastrear.`,
  },

  // ─── Chapter 10 — Señal de Regreso ───────────────────────────────────────
  {
    id: 'cmmu8wdo5ifsnn7c1768k',
    chapterId: 'cmmu813h7ybfsgo91417j',
    order: 1,
    slug: 'leyendo-los-registros',
    title: 'Leyendo los Registros',
    xpReward: 75,
    content: `## Leyendo los Registros

La nave guarda todos los eventos en archivos de texto. Para acceder a los registros históricos, necesitamos **leer archivos** con Python.

\`\`\`python
# Abrir y leer todo el contenido
archivo = open("bitacora.txt", "r", encoding="utf-8")
contenido = archivo.read()
print(contenido)
archivo.close()   # siempre cerrar
\`\`\`

Leer línea por línea con \`readlines()\`:

\`\`\`python
archivo = open("eventos.txt", "r", encoding="utf-8")
lineas = archivo.readlines()

for linea in lineas:
    if "ALERTA" in linea:
        print(f"Evento crítico: {linea.strip()}")

archivo.close()
\`\`\`

El modo \`"r"\` es solo lectura. Si el archivo no existe, Python lanzará \`FileNotFoundError\`. Aprenderemos a manejarlo con seguridad en las próximas lecciones.

> 💡 **Encoding:** Siempre especifica \`encoding="utf-8"\` al abrir archivos para evitar problemas con caracteres especiales.`,
  },
  {
    id: 'cmmu8wdo5xvpeutz7fvfm',
    chapterId: 'cmmu813h7ybfsgo91417j',
    order: 2,
    slug: 'escribiendo-el-informe',
    title: 'Escribiendo el Informe',
    xpReward: 75,
    content: `## Escribiendo el Informe

Al finalizar cada fase de la misión, el Comandante Orion debe registrar los eventos en la bitácora. Python permite **escribir en archivos** con los modos \`"w"\` y \`"a"\`.

Modo \`"w"\` — escribe desde cero (borra contenido existente):

\`\`\`python
archivo = open("informe_mision.txt", "w", encoding="utf-8")
archivo.write("INFORME DE MISIÓN — Fase 10\n")
archivo.write("Estado: En trayectoria de reingreso\n")
archivo.write("Tripulación: todos operativos\n")
archivo.close()
\`\`\`

Modo \`"a"\` — añade al final sin borrar lo existente:

\`\`\`python
archivo = open("informe_mision.txt", "a", encoding="utf-8")
archivo.write("Actualización 14:32 — Escudo térmico activado\n")
archivo.close()
\`\`\`

\`writelines()\` escribe una lista de cadenas de una sola vez:

\`\`\`python
lineas = ["T+00:10 — Motor OK\n", "T+00:45 — Órbita alcanzada\n"]
archivo = open("log.txt", "w", encoding="utf-8")
archivo.writelines(lineas)
archivo.close()
\`\`\`

> 💡 **Cuidado:** El modo \`"w"\` sobrescribe todo — usa \`"a"\` si quieres conservar el historial anterior.`,
  },
  {
    id: 'cmmu8wdo5krpmrmce66p0',
    chapterId: 'cmmu813h7ybfsgo91417j',
    order: 3,
    slug: 'manejo-seguro-de-archivos',
    title: 'Manejo Seguro de Archivos',
    xpReward: 100,
    content: `## Manejo Seguro de Archivos

Si el programa falla entre \`open()\` y \`close()\`, el archivo queda abierto y puede corromperse. El **gestor de contexto \`with\`** garantiza que el archivo se cierre siempre, incluso si ocurre un error.

\`\`\`python
# Sin with — arriesgado
archivo = open("registro.txt", "r", encoding="utf-8")
contenido = archivo.read()
archivo.close()   # ¿qué pasa si hay error antes de esto?

# Con with — seguro
with open("registro.txt", "r", encoding="utf-8") as archivo:
    contenido = archivo.read()
    print(contenido)
# archivo se cierra automáticamente aquí
\`\`\`

Leer y escribir con \`with\` y manejo de errores:

\`\`\`python
try:
    with open("bitacora.txt", "a", encoding="utf-8") as log:
        log.write("Reingreso iniciado — T+12:06:00\n")
        log.write("Temperatura escudo: 1650°C — nominal\n")
    print("Bitácora actualizada.")
except IOError as e:
    print(f"Error de escritura: {e}")
\`\`\`

> 💡 **Estándar:** Usa siempre \`with open(...)\` — es la forma idiomática y segura de trabajar con archivos en Python.`,
  },
  {
    id: 'cmmu8wdo5rytb9agklj69',
    chapterId: 'cmmu813h7ybfsgo91417j',
    order: 4,
    slug: 'csv-de-la-tripulacion',
    title: 'CSV de la Tripulación',
    xpReward: 100,
    content: `## CSV de la Tripulación

Los registros de telemetría se almacenan en formato CSV (valores separados por comas). El módulo **csv** de Python simplifica la lectura y escritura de este formato.

\`\`\`python
import csv

# Escribir datos de tripulación en CSV
tripulacion = [
    ["nombre", "rango", "oxigeno"],
    ["Orion", "Capitan", 98],
    ["Lyra", "Ingeniera", 95],
    ["Atlas", "Piloto", 97]
]

with open("tripulacion.csv", "w", newline="", encoding="utf-8") as f:
    escritor = csv.writer(f)
    escritor.writerows(tripulacion)
\`\`\`

Leer el CSV con \`DictReader\` para acceder por nombre de columna:

\`\`\`python
with open("tripulacion.csv", "r", encoding="utf-8") as f:
    lector = csv.DictReader(f)
    for fila in lector:
        print(f"{fila['nombre']} — O₂: {fila['oxigeno']}%")
\`\`\`

> 💡 **newline:** Usa \`newline=""\` al abrir archivos CSV para escritura — evita líneas en blanco extra en Windows.`,
  },
  {
    id: 'cmmu8wdo5nk33iw159bd7',
    chapterId: 'cmmu813h7ybfsgo91417j',
    order: 5,
    slug: 'mision-completada',
    title: 'Misión Completada',
    xpReward: 100,
    content: `## Misión Completada

La nave se acerca a la Tierra. Es hora de integrar todo lo aprendido en un sistema de resumen de misión. Este programa combina funciones, manejo de errores, archivos y estructuras de datos.

\`\`\`python
import csv
from datetime import datetime

def generar_reporte(archivo_datos, archivo_salida):
    """Lee telemetría CSV y genera un reporte de misión."""
    alertas = []
    try:
        with open(archivo_datos, "r", encoding="utf-8") as f:
            lector = csv.DictReader(f)
            for fila in lector:
                nivel = float(fila.get("oxigeno", 100))
                if nivel < 90:
                    alertas.append(f"ALERTA O2: {fila['nombre']} — {nivel}%")
    except FileNotFoundError:
        print("Archivo de datos no encontrado.")
        return

    with open(archivo_salida, "w", encoding="utf-8") as f:
        f.write(f"Reporte: {datetime.now()}\n")
        f.write(f"Alertas detectadas: {len(alertas)}\n")
        for alerta in alertas:
            f.write(alerta + "\n")

    print("Reporte generado. Misión documentada.")

generar_reporte("telemetria.csv", "reporte_final.txt")
\`\`\`

> 🚀 **Misión completada:** Cada concepto aprendido — variables, bucles, funciones, errores, archivos — es un sistema que ahora forma parte de tu nave. Bienvenido a casa, Comandante.`,
  },
];

const challenges: Parameters<typeof prisma.challenge.upsert>[0]['create'][] = [
  // ── Chapter 1 · Lesson 1 ─────────
  {
    id: 'cmmua7xlcunaswx05qv8w',
    lessonId: 'cmmu8wdmdwmn2d19jvzvu',
    instructions: `El Comandante Orion necesita enviar su primera señal de socorro. Declara una variable \`mensaje\` y asígnale una cadena que contenga la frase 'señal de socorro'. Luego imprímela usando \`print()\`.`,
    starterCode: `# Misión: enviar la primera señal de socorro de Orion
# Declara tu variable de mensaje aquí
mensaje = ""  # Escribe tu mensaje (debe incluir 'señal de socorro')

# Imprime el mensaje
print(mensaje)`,
    testCode: `assert isinstance(mensaje, str), "mensaje debe ser una cadena de texto"
assert len(mensaje) > 0, "El mensaje no puede estar vacío"
assert "señal de socorro" in mensaje.lower(), "El mensaje debe contener 'señal de socorro'"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 1 · Lesson 2 ─────────
  {
    id: 'cmmua7xlg76gknoa9v5ce',
    lessonId: 'cmmu8wdo2fy9ks00jggac',
    instructions: `La nave necesita ser identificada. Declara \`nombre_nave\` (str), \`num_tripulantes\` (int) y \`nivel_combustible\` (float) con valores reales. Imprime cada variable.`,
    starterCode: `# Identifica los datos clave de la misión
nombre_nave = ""  # Ej: "Ares VII"
num_tripulantes = 0  # Ej: 1
nivel_combustible = 0.0  # Ej: 80.5

print("Nave:", nombre_nave)
print("Tripulación:", num_tripulantes)
print("Combustible:", nivel_combustible)`,
    testCode: `assert isinstance(nombre_nave, str) and len(nombre_nave) > 0, "nombre_nave debe ser str no vacía"
assert isinstance(num_tripulantes, int) and num_tripulantes > 0, "num_tripulantes debe ser int positivo"
assert isinstance(nivel_combustible, float) and nivel_combustible > 0, "nivel_combustible debe ser float positivo"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 1 · Lesson 3 ─────────
  {
    id: 'cmmua7xlg34lphnieitsf',
    lessonId: 'cmmu8wdo2alrcflrh96k9',
    instructions: `Los sensores de la nave registran cuatro tipos. Declara \`contador_orbitas\` (int), \`temperatura_exterior\` (float), \`nombre_capitan\` (str) y \`motor_activo\` (bool). Imprime cada valor junto con su tipo usando \`type()\`.`,
    starterCode: `# Un entero: número de órbitas completadas
contador_orbitas = 0  # Ej: 42

# Un flotante: temperatura exterior en °C
temperatura_exterior = 0.0  # Ej: -270.5

# Una cadena: nombre del capitán
nombre_capitan = ""  # Ej: "Orion"

# Un booleano: ¿está el motor activo?
motor_activo = False  # True o False

print(contador_orbitas, type(contador_orbitas))
print(temperatura_exterior, type(temperatura_exterior))
print(nombre_capitan, type(nombre_capitan))
print(motor_activo, type(motor_activo))`,
    testCode: `assert type(contador_orbitas) is int, "contador_orbitas debe ser int"
assert type(temperatura_exterior) is float, "temperatura_exterior debe ser float"
assert type(nombre_capitan) is str and len(nombre_capitan) > 0, "nombre_capitan debe ser str no vacía"
assert type(motor_activo) is bool, "motor_activo debe ser bool"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 1 · Lesson 4 ─────────
  {
    id: 'cmmua7xlhr5yy3u3i0jq2',
    lessonId: 'cmmu8wdo3h6lr2hlb8sgl',
    instructions: `Las variables de estado ya están declaradas. Construye un f-string completo y almacénalo en \`reporte\`. El mensaje debe incluir \`nombre_nave\`, \`nivel_oxigeno\` y \`combustible\` interpolados desde las variables.`,
    starterCode: `# Variables del sistema — no las modifiques
nombre_nave = "Ares VII"
nivel_oxigeno = 72
combustible = 80.5

# Construye el reporte usando un f-string
# Debe incluir las tres variables anteriores
reporte = ""  # Reemplaza con tu f-string

print(reporte)`,
    testCode: `assert isinstance(reporte, str) and len(reporte) > 0, "reporte debe ser una cadena no vacía"
assert "Ares VII" in reporte, "El reporte debe incluir nombre_nave"
assert "72" in reporte, "El reporte debe incluir nivel_oxigeno"
assert "80.5" in reporte, "El reporte debe incluir combustible"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 1 · Lesson 5 ─────────
  {
    id: 'cmmua7xlhyk6484xkntpb',
    lessonId: 'cmmu8wdo3zyxho5nwzpdb',
    instructions: `Orion necesita que el código esté documentado. Escribe un script con al menos tres comentarios de línea (\`#\`) que expliquen cada sección. Guarda un texto de registro en \`entrada_registro\` e imprímelo.`,
    starterCode: `# Sección 1: (reemplaza con un comentario descriptivo real)
mision = "Operación Regreso a Casa"

# Sección 2: (reemplaza con un comentario descriptivo real)
fecha = "Año 2026, Día 47"

# Sección 3: construye la entrada del registro
entrada_registro = ""  # Asigna un mensaje de registro aquí

print(entrada_registro)`,
    testCode: `assert isinstance(entrada_registro, str) and len(entrada_registro) > 0, "entrada_registro debe ser una cadena no vacía"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 2 · Lesson 6 ─────────
  {
    id: 'cmmua7xlhvwpioh98f62a',
    lessonId: 'cmmu8wdo373nbm4uamhtk',
    instructions: `Los propulsores están listos. Calcula \`tiempo_encendido\` dividiendo \`distancia\` entre \`velocidad\`. Las variables ya están declaradas. Imprime el resultado con una etiqueta.`,
    starterCode: `distancia = 2250   # km hasta la órbita segura
velocidad = 50     # km/s de los propulsores

# Calcula el tiempo de encendido
tiempo_encendido = 0  # Tu cálculo aquí (distancia / velocidad)

print(f"Tiempo de encendido: {tiempo_encendido} segundos")`,
    testCode: `assert tiempo_encendido == 45.0, f"Se esperaba 45.0 s, se obtuvo {tiempo_encendido}"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 2 · Lesson 1 ─────────
  {
    id: 'cmmua7xlh45z8yyp6wlbt',
    lessonId: 'cmmu8wdo3mlw61x2lpmo5',
    instructions: `Raciona el combustible: usa \`//\` para calcular \`encendidos_posibles\` y \`%\` para \`combustible_restante\` a partir de \`combustible_total\` y \`tasa_por_encendido\`. Imprime ambos resultados.`,
    starterCode: `combustible_total = 23      # unidades totales
tasa_por_encendido = 5      # unidades por encendido

# Encendidos completos posibles (usa //)
encendidos_posibles = 0

# Combustible que sobra (usa %)
combustible_restante = 0

print(f"Encendidos completos posibles: {encendidos_posibles}")
print(f"Combustible restante: {combustible_restante} unidades")`,
    testCode: `assert encendidos_posibles == 4, f"Se esperaba 4, se obtuvo {encendidos_posibles}"
assert combustible_restante == 3, f"Se esperaba 3, se obtuvo {combustible_restante}"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 2 · Lesson 2 ─────────
  {
    id: 'cmmua7xlhyylk5elwnmdi',
    lessonId: 'cmmu8wdo38ehdaktsuzqm',
    instructions: `Calcula \`velocidad_escape\` con la fórmula \`(2 * masa * gravedad) / arrastre ** 2\`. Los paréntesis son esenciales para respetar la precedencia. Usa las variables pre-declaradas.`,
    starterCode: `masa = 50        # toneladas métricas
gravedad = 9.8   # m/s²
arrastre = 20    # coeficiente de resistencia

# Fórmula: (2 * masa * gravedad) / arrastre ** 2
velocidad_escape = 0  # Tu fórmula aquí

print(f"Velocidad de escape: {velocidad_escape} m/s")`,
    testCode: `assert round(velocidad_escape, 2) == 2.45, f"Se esperaba 2.45 m/s, se obtuvo {round(velocidad_escape, 2)}"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 2 · Lesson 3 ─────────
  {
    id: 'cmmua7xlhgciajkdvrfch',
    lessonId: 'cmmu8wdo3qu6kflxu8keo',
    instructions: `Los sensores han enviado dos lecturas. Asigna un valor numérico a \`sensor_oxigeno\` (entre 0 y 100) y a \`sensor_temperatura\` (puede ser negativo). Luego imprímelos con etiquetas.`,
    starterCode: `# Asigna valores recibidos de los sensores
sensor_oxigeno = 0    # Entre 0 y 100, ej: 72
sensor_temperatura = 0  # Puede ser negativo, ej: -40

print(f"Nivel de oxígeno: {sensor_oxigeno}")
print(f"Temperatura: {sensor_temperatura}")`,
    testCode: `assert isinstance(sensor_oxigeno, (int, float)), "sensor_oxigeno debe ser un número"
assert 0 <= sensor_oxigeno <= 100, "sensor_oxigeno debe estar entre 0 y 100"
assert isinstance(sensor_temperatura, (int, float)), "sensor_temperatura debe ser un número"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 2 · Lesson 4 ─────────
  {
    id: 'cmmua7xlh11wdyrpsca6o',
    lessonId: 'cmmu8wdo3fi65ixb7btcy',
    instructions: `Los instrumentos envían datos como texto. Convierte \`distancia_str\` y \`velocidad_str\` a \`float\`, calcula \`tiempo_viaje = distancia / velocidad\` e imprímelo redondeado a dos decimales.`,
    starterCode: `distancia_str = "1500"   # km como cadena
velocidad_str = "33"     # km/s como cadena

# Convierte a float
distancia = 0.0   # Usa float()
velocidad = 0.0   # Usa float()

# Calcula el tiempo de viaje
tiempo_viaje = 0.0  # distancia / velocidad

print(f"Tiempo de viaje: {round(tiempo_viaje, 2)} segundos")`,
    testCode: `assert isinstance(distancia, float), "distancia debe ser float"
assert isinstance(velocidad, float), "velocidad debe ser float"
assert round(tiempo_viaje, 2) == 45.45, f"Se esperaba 45.45 s, se obtuvo {round(tiempo_viaje, 2)}"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 3 · Lesson 5 ─────────
  {
    id: 'cmmua7xlhqgbe15s8ugo4',
    lessonId: 'cmmu8wdo3p24vuervwnnq',
    instructions: `El sensor de oxígeno marca 25%. Escribe un \`if/else\`: si \`nivel_oxigeno >= 21\`, asigna \`'Seguro'\` a \`estado_oxigeno\`; si no, asigna \`'Peligro'\`. Imprime el resultado.`,
    starterCode: `nivel_oxigeno = 25  # % de O2 en la cabina

estado_oxigeno = ""  # "Seguro" o "Peligro"

# Tu if/else aquí

print(f"Oxígeno al {nivel_oxigeno}% — Estado: {estado_oxigeno}")`,
    testCode: `assert estado_oxigeno != "", "estado_oxigeno no puede estar vacío"
assert "seguro" in estado_oxigeno.lower() or "normal" in estado_oxigeno.lower(), "Con nivel 25 (>=21) debe indicar seguridad"
nivel_oxigeno = 15
if nivel_oxigeno >= 21:
    estado_oxigeno = "Seguro"
else:
    estado_oxigeno = "Peligro"
assert "peligro" in estado_oxigeno.lower() or "crítico" in estado_oxigeno.lower(), "Con nivel 15 (<21) debe indicar peligro"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 3 · Lesson 6 ─────────
  {
    id: 'cmmua7xlhd1t6ix8srjrg',
    lessonId: 'cmmu8wdo348d3mv3qhimn',
    instructions: `El medidor de combustible indica 90%. Clasifícalo con \`if/elif/else\`: \`'Lleno'\` si >= 75%, \`'Bajo'\` si entre 25–74%, \`'Crítico'\` si < 25%. Guarda la categoría en \`estado_combustible\`.`,
    starterCode: `nivel_combustible = 90  # % de combustible restante

estado_combustible = ""  # "Lleno", "Bajo" o "Crítico"

# Tu if/elif/else aquí

print(f"Combustible al {nivel_combustible}% — Estado: {estado_combustible}")`,
    testCode: `assert estado_combustible == "Lleno", f"Con nivel 90 se esperaba 'Lleno', se obtuvo '{estado_combustible}'"
nivel_combustible = 50
if nivel_combustible >= 75:
    estado_combustible = "Lleno"
elif nivel_combustible >= 25:
    estado_combustible = "Bajo"
else:
    estado_combustible = "Crítico"
assert estado_combustible == "Bajo", "Con nivel 50 se esperaba 'Bajo'"
nivel_combustible = 10
if nivel_combustible >= 75:
    estado_combustible = "Lleno"
elif nivel_combustible >= 25:
    estado_combustible = "Bajo"
else:
    estado_combustible = "Crítico"
assert estado_combustible == "Crítico", "Con nivel 10 se esperaba 'Crítico'"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 3 · Lesson 1 ─────────
  {
    id: 'cmmua7xlhtlc2mac5m2pc',
    lessonId: 'cmmu8wdo3una0ddzphevs',
    instructions: `Los sensores reportan \`nivel_oxigeno = 18\` e \`integridad_casco = 40\`. Si el oxígeno está bajo 21 Y la integridad del casco bajo 50, asigna una alerta a \`mensaje_alerta\`. En caso contrario, asigna \`'Todos los sistemas nominales'\`.`,
    starterCode: `nivel_oxigeno = 18      # % de O2 (valor peligroso)
integridad_casco = 40   # % de integridad del casco

mensaje_alerta = ""  # Asigna el mensaje correspondiente

# Tu if/else usando el operador \`and\`

print(mensaje_alerta)`,
    testCode: `assert mensaje_alerta != "", "mensaje_alerta no puede estar vacío"
assert "nominal" not in mensaje_alerta.lower(), "Con O2=18 y casco=40 debe haber alerta"
nivel_oxigeno = 25
integridad_casco = 40
if nivel_oxigeno < 21 and integridad_casco < 50:
    mensaje_alerta = "¡ALERTA!"
else:
    mensaje_alerta = "Todos los sistemas nominales"
assert "nominal" in mensaje_alerta.lower(), "Con O2=25 y casco=40 (solo una condición) debe ser nominal"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 3 · Lesson 2 ─────────
  {
    id: 'cmmua7xlh79d2bgje23eg',
    lessonId: 'cmmu8wdo3pu2ky8dck127',
    instructions: `La nave enfrenta dos obstáculos: \`radiacion_alta\` y \`casco_resistente\`. Si hay radiación y el casco resiste, navega con blindaje. Si hay radiación sin protección, retrocede. Sin radiación, continúa normalmente. Guarda la decisión en \`decision_ruta\`.`,
    starterCode: `radiacion_alta = True    # ¿Zona de alta radiación?
casco_resistente = True  # ¿El casco resiste?

decision_ruta = ""  # Resultado: continuar/retroceder/normal

# Tu if anidado aquí

print(f"Decisión de ruta: {decision_ruta}")`,
    testCode: `assert decision_ruta != "", "decision_ruta no puede estar vacío"
assert "blindaje" in decision_ruta.lower() or "continuar" in decision_ruta.lower(), "Con radiacion=True y casco=True debe continuar con blindaje"
radiacion_alta = True
casco_resistente = False
if radiacion_alta:
    if casco_resistente:
        decision_ruta = "Continuar con blindaje"
    else:
        decision_ruta = "Retroceder"
else:
    decision_ruta = "Continuar normalmente"
assert "retroceder" in decision_ruta.lower(), "Con radiacion=True y casco=False debe retroceder"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 3 · Lesson 3 ─────────
  {
    id: 'cmmua7xlh3likv6gq1e63',
    lessonId: 'cmmu8wdo3vi9xdwgcw1et',
    instructions: `Usa veracidad de Python para verificar \`lista_tripulacion\` y \`nombre_nave\`. Sin \`len()\` ni \`== ""\`, almacena en \`estado_lista\` y \`estado_nombre\` mensajes que indiquen si cada variable tiene contenido o está vacía.`,
    starterCode: `lista_tripulacion = ["Orion", "Vega", "Park"]
nombre_nave = "Ares VII"

estado_lista = ""   # "Tripulación registrada" o "Sin tripulación"
estado_nombre = ""  # "Nave identificada" o "Sin nombre de nave"

# Usa: if lista_tripulacion: (sin len ni ==)

print(f"Lista: {estado_lista}")
print(f"Nombre: {estado_nombre}")`,
    testCode: `assert estado_lista != "", "estado_lista no puede estar vacío"
assert estado_nombre != "", "estado_nombre no puede estar vacío"
assert any(w in estado_lista.lower() for w in ["registrada", "tripulación", "tiene", "hay"]), "Con lista poblada, estado_lista debe indicar que hay tripulación"
assert any(w in estado_nombre.lower() for w in ["identificada", "nave", "tiene", "hay"]), "Con nombre_nave poblado, estado_nombre debe indicar que hay nombre"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 4 · Lesson 4 ─────────
  {
    id: 'cmmua7xlh4e6mlxhga21d',
    lessonId: 'cmmu8wdo3f0yijp3kb3aj',
    instructions: `El depurador trabaja. Empezando en \`nivel_oxigeno = 15\`, usa un bucle \`while\` que incremente el nivel en 2 unidades por ciclo e imprima el valor en cada iteración. El bucle termina cuando el nivel alcance 21 o más.`,
    starterCode: `nivel_oxigeno = 15  # % de O2 — por debajo del umbral seguro

# Bucle while: aumenta 2 unidades por ciclo, imprime el nivel

# Tu while aquí

print("Sistemas estables.")`,
    testCode: `assert nivel_oxigeno >= 21, f"El bucle debe terminar con nivel_oxigeno >= 21, se obtuvo {nivel_oxigeno}"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 4 · Lesson 5 ─────────
  {
    id: 'cmmua7xlhcfagwzn5amy9',
    lessonId: 'cmmu8wdo3lnzvux0h4mst',
    instructions: `Recorre \`sistemas_nave\` con un bucle \`for\`. Para cada sistema construye una línea \`'sistema: OK'\`. Almacena las líneas en \`verificaciones\` e imprímelas.`,
    starterCode: `sistemas_nave = ["Oxígeno", "Propulsores", "Navegación", "Comunicaciones"]

verificaciones = []  # Almacenará las líneas de estado

for sistema in sistemas_nave:
    linea = ""  # Construye: "NombreSistema: OK"
    verificaciones.append(linea)
    print(linea)`,
    testCode: `assert len(verificaciones) == 4, f"Deben verificarse 4 sistemas, se verificaron {len(verificaciones)}"
for i, sistema in enumerate(sistemas_nave):
    assert sistema in verificaciones[i], f"'{sistema}' debe aparecer en la verificación {i+1}"
    assert "ok" in verificaciones[i].lower(), f"La verificación {i+1} debe contener 'OK'"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 4 · Lesson 6 ─────────
  {
    id: 'cmmua7xli7traxv6b14x4',
    lessonId: 'cmmu8wdo4uy7scakqs08k',
    instructions: `El lanzamiento está programado. Usa \`range()\` con los argumentos correctos para contar de 10 a 1 (descendente), añadiendo cada número a \`cuenta\`. Al finalizar, imprime \`'¡Despegue!'\`.`,
    starterCode: `cuenta = []

# range(inicio, fin_exclusivo, paso)
for numero in range(0, 0, 0):  # ← Corrige los tres argumentos
    cuenta.append(numero)
    print(numero)

print("¡Despegue!")`,
    testCode: `assert cuenta == list(range(10, 0, -1)), f"La cuenta debe ser [10,9,...,1], se obtuvo {cuenta}"
assert cuenta[0] == 10 and cuenta[-1] == 1
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 4 · Lesson 1 ─────────
  {
    id: 'cmmua7xli1nncg8o84nmd',
    lessonId: 'cmmu8wdo4if3urb28ravv',
    instructions: `El scanner procesa \`lecturas\`. Usa \`continue\` para saltar los \`-1\` (defectuosos) y \`break\` al encontrar \`0\` (apagado). Almacena las lecturas válidas en \`lecturas_validas\`.`,
    starterCode: `lecturas = [72, -1, 68, -1, 71, 0, 65, 70]
lecturas_validas = []

for lectura in lecturas:
    # continue si lectura == -1
    # break si lectura == 0
    # si es válida, agregar a lecturas_validas e imprimir
    pass  # Reemplaza con tu código

print(f"Lecturas válidas: {lecturas_validas}")
print("Bucle terminado.")`,
    testCode: `assert lecturas_validas == [72, 68, 71], f"Se esperaba [72, 68, 71], se obtuvo {lecturas_validas}"
assert 65 not in lecturas_validas, "Las lecturas después del 0 no deben incluirse"
assert -1 not in lecturas_validas, "Las lecturas defectuosas no deben incluirse"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 4 · Lesson 2 ─────────
  {
    id: 'cmmua7xlih4bk7yfybdz1',
    lessonId: 'cmmu8wdo4aojyn4zis2ow',
    instructions: `La cuadrícula 3×3 \`cuadricula\` representa escombros (0=Libre, 1=Escombros). Usa bucles \`for\` anidados para almacenar en \`resultado_escaneo\` cadenas con formato \`'[fila][col]: Libre'\` o \`'[fila][col]: Escombros'\`.`,
    starterCode: `cuadricula = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
]

resultado_escaneo = []

for fila in range(len(cuadricula)):
    for col in range(len(cuadricula[fila])):
        # Determina "Libre" o "Escombros" y añade a resultado_escaneo
        pass  # Reemplaza con tu código

for linea in resultado_escaneo:
    print(linea)`,
    testCode: `assert len(resultado_escaneo) == 9, f"Deben escanearse 9 celdas, se escanearon {len(resultado_escaneo)}"
assert resultado_escaneo[0] == "[0][0]: Libre"
assert resultado_escaneo[1] == "[0][1]: Escombros"
assert resultado_escaneo[5] == "[1][2]: Escombros"
assert resultado_escaneo[8] == "[2][2]: Libre"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 5 · Lesson 3 ─────────
  {
    id: 'cmmua7xli4jj30rlfehz4',
    lessonId: 'cmmu8wdo446dozpnoawyk',
    instructions: `Define \`reporte_estado()\` sin parámetros. La función debe imprimir un mensaje de estado de misión y también retornarlo. Llámala una vez desde el código principal.`,
    starterCode: `def reporte_estado():
    mensaje = ""  # Escribe tu mensaje de estado aquí
    print(mensaje)
    return mensaje  # Retorna el mensaje para verificación

reporte_estado()`,
    testCode: `resultado = reporte_estado()
assert isinstance(resultado, str) and len(resultado) > 0, "reporte_estado() debe retornar una cadena no vacía"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 5 · Lesson 4 ─────────
  {
    id: 'cmmua7xli3h8kthk4wqgi',
    lessonId: 'cmmu8wdo4pfwgyfnyhot4',
    instructions: `Define \`verificar_oxigeno(nivel, umbral)\` que retorne \`'Seguro'\` si \`nivel >= umbral\`, o \`'Crítico'\` si no. Llámala con \`(25, 21)\` y \`(18, 21)\`.`,
    starterCode: `def verificar_oxigeno(nivel, umbral):
    # Retorna "Seguro" o "Crítico" según la comparación
    pass  # Reemplaza con tu código

resultado1 = verificar_oxigeno(25, 21)
resultado2 = verificar_oxigeno(18, 21)

print(f"Nivel 25, umbral 21: {resultado1}")
print(f"Nivel 18, umbral 21: {resultado2}")`,
    testCode: `assert verificar_oxigeno(25, 21) is not None, "La función debe retornar un valor"
assert "seguro" in str(verificar_oxigeno(25, 21)).lower(), "verificar_oxigeno(25, 21) debe retornar 'Seguro'"
assert "crítico" in str(verificar_oxigeno(18, 21)).lower() or "critico" in str(verificar_oxigeno(18, 21)).lower(), "verificar_oxigeno(18, 21) debe retornar 'Crítico'"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 5 · Lesson 5 ─────────
  {
    id: 'cmmua7xli9kpbpl0byfnk',
    lessonId: 'cmmu8wdo4fik3a6t5zdk0',
    instructions: `Define \`calcular_eta(distancia, velocidad)\` que retorne \`distancia / velocidad\` sin imprimir nada internamente. Llámala con distintos valores e imprime los resultados desde fuera.`,
    starterCode: `def calcular_eta(distancia, velocidad):
    # Solo retorna el resultado, sin print() dentro
    pass  # Reemplaza con tu código

eta1 = calcular_eta(1000, 50)
eta2 = calcular_eta(750, 25)

print(f"ETA ruta 1: {eta1} horas")
print(f"ETA ruta 2: {eta2} horas")`,
    testCode: `assert calcular_eta(1000, 50) == 20.0, f"calcular_eta(1000,50) debe ser 20.0, se obtuvo {calcular_eta(1000, 50)}"
assert calcular_eta(750, 25) == 30.0, f"calcular_eta(750,25) debe ser 30.0, se obtuvo {calcular_eta(750, 25)}"
assert calcular_eta(500, 100) == 5.0
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 5 · Lesson 6 ─────────
  {
    id: 'cmmua7xlim6hpl089wn9o',
    lessonId: 'cmmu8wdo448o03j0jlawq',
    instructions: `Define \`escanear_modulo(nombre, estado='OK')\`. La función debe imprimir y retornar la cadena \`'nombre: estado'\`. Llámala sin el segundo argumento y luego con \`estado='FALLO'\`.`,
    starterCode: `def escanear_modulo(nombre, estado="OK"):
    linea = ""  # Construye "nombre: estado"
    print(linea)
    return linea

escanear_modulo("Propulsores")
escanear_modulo("Navegación", estado="FALLO")`,
    testCode: `r1 = escanear_modulo("Propulsores")
assert "OK" in r1, f"Sin segundo argumento debe contener 'OK', se obtuvo: '{r1}'"
r2 = escanear_modulo("Navegación", estado="FALLO")
assert "FALLO" in r2, f"Con estado='FALLO' debe contener 'FALLO', se obtuvo: '{r2}'"
assert "Propulsores" in r1 and "Navegación" in r2
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 5 · Lesson 1 ─────────
  {
    id: 'cmmua7xli9mk2k9b3ebbk',
    lessonId: 'cmmu8wdo4fyl60jyvwxbr',
    instructions: `Declara \`contador_misiones = 0\` a nivel global. Define \`registrar_mision()\` que use \`global\` para incrementarlo en 1 e imprima el valor. Llama a la función exactamente tres veces.`,
    starterCode: `contador_misiones = 0

def registrar_mision():
    global contador_misiones
    # Incrementa el contador e imprime el valor
    pass  # Reemplaza con tu código

registrar_mision()
registrar_mision()
registrar_mision()`,
    testCode: `assert contador_misiones == 3, f"Tras tres llamadas debe ser 3, se obtuvo {contador_misiones}"
registrar_mision()
assert contador_misiones == 4, "Cada llamada debe incrementar el contador en 1"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 6 · Lesson 2 ─────────
  {
    id: 'cmmua7xli74n5v5i402ib',
    lessonId: 'cmmu8wdo499m9lbnsnw9b',
    instructions: `Define \`verificar_combustible(actual, maximo)\` con un docstring completo (propósito, parámetros y retorno). La función debe retornar \`(actual / maximo) * 100\`. Imprímelo con el símbolo \`%\`.`,
    starterCode: `def verificar_combustible(actual, maximo):
    '''
    Escribe aquí el docstring de la función.
    Menciona: propósito, parámetros actual y maximo, y lo que retorna.
    '''
    # Calcula y retorna el porcentaje
    pass  # Reemplaza con tu código

porcentaje = verificar_combustible(500, 800)
print(f"Nivel de combustible: {porcentaje}%")`,
    testCode: `assert verificar_combustible.__doc__ is not None, "La función debe tener un docstring"
assert len(verificar_combustible.__doc__.strip()) > 20, "El docstring debe ser descriptivo"
assert verificar_combustible(500, 800) == 62.5, f"verificar_combustible(500,800) debe ser 62.5, se obtuvo {verificar_combustible(500, 800)}"
assert verificar_combustible(100, 100) == 100.0
assert verificar_combustible(0, 100) == 0.0
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 6 · Lesson 3 ─────────
  {
    id: 'cmmua7xlifn387dmub6vx',
    lessonId: 'cmmu8wdo4o8d5v6l3rvv2',
    instructions: `Registra a los astronautas rescatados. Crea \`tripulacion\` con al menos cuatro nombres. Recórrela con \`for\` e imprime cada nombre en su propia línea.`,
    starterCode: `tripulacion = []  # Agrega al menos 4 nombres de astronautas

for nombre in tripulacion:
    print(nombre)`,
    testCode: `assert isinstance(tripulacion, list), "tripulacion debe ser una lista"
assert len(tripulacion) >= 4, f"Debe tener al menos 4 miembros, tiene {len(tripulacion)}"
assert all(isinstance(n, str) and len(n) > 0 for n in tripulacion), "Todos los miembros deben ser cadenas no vacías"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 6 · Lesson 4 ─────────
  {
    id: 'cmmua7xliso9gv9lmfdzf',
    lessonId: 'cmmu8wdo429fhd7ouvvd2',
    instructions: `Dada la lista \`tripulacion\` de 5 elementos, accede: al primer tripulante en \`primero\` (índice 0), al último en \`ultimo\` (índice -1), y a los tres del medio en \`tripulacion_media\` (slice \`[1:4]\`).`,
    starterCode: `tripulacion = ["Comandante Orion", "Dra. Vega", "Tte. Park", "Sgto. Kim", "Ingeniero Reyes"]

primero = None  # índice 0
ultimo = None   # índice -1
tripulacion_media = None  # slice [1:4]

print(f"Primero: {primero}")
print(f"Último: {ultimo}")
print(f"Tripulación intermedia: {tripulacion_media}")`,
    testCode: `assert primero == "Comandante Orion", f"primero debe ser 'Comandante Orion', se obtuvo '{primero}'"
assert ultimo == "Ingeniero Reyes", f"ultimo debe ser 'Ingeniero Reyes', se obtuvo '{ultimo}'"
assert tripulacion_media == ["Dra. Vega", "Tte. Park", "Sgto. Kim"], f"tripulacion_media incorrecta: {tripulacion_media}"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 6 · Lesson 5 ─────────
  {
    id: 'cmmua7xli875482fvqri3',
    lessonId: 'cmmu8wdo4rpkpvwn4klg8',
    instructions: `Empezando con \`['Vega', 'Park', 'Kim']\`, usa \`append()\` para añadir \`'Reyes'\`, \`remove()\` para eliminar \`'Park'\`, y \`sort()\` para ordenarla. Imprime la lista tras cada operación.`,
    starterCode: `tripulacion = ["Vega", "Park", "Kim"]

# 1. Agrega "Reyes" con append()
# Tu código aquí
print(f"Tras append: {tripulacion}")

# 2. Elimina "Park" con remove()
# Tu código aquí
print(f"Tras remove: {tripulacion}")

# 3. Ordena con sort()
# Tu código aquí
print(f"Tras sort: {tripulacion}")`,
    testCode: `assert "Reyes" in tripulacion, "Reyes debe estar en la lista tras append()"
assert "Park" not in tripulacion, "Park debe haberse eliminado con remove()"
assert tripulacion == sorted(tripulacion), f"La lista debe estar ordenada: {tripulacion}"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 6 · Lesson 6 ─────────
  {
    id: 'cmmua7xliaqwgx02tbyp9',
    lessonId: 'cmmu8wdo4gj70ivjdtwb1',
    instructions: `Declara \`puntos_navegacion\` como tupla con tres pares de coordenadas flotantes. Imprime cada punto. Intenta modificar un elemento en \`try/except TypeError\` para demostrar la inmutabilidad.`,
    starterCode: `# Tupla de 3 tuplas, cada una con 2 flotantes
puntos_navegacion = ()  # Ej: ((12.5, -34.7), (45.0, 20.1), (-5.3, 88.0))

for i, punto in enumerate(puntos_navegacion, 1):
    print(f"Punto {i}: {punto}")

try:
    puntos_navegacion[0] = (0.0, 0.0)
except TypeError:
    print("No se pueden modificar los puntos: las tuplas son inmutables.")`,
    testCode: `assert isinstance(puntos_navegacion, tuple), "puntos_navegacion debe ser una tupla"
assert len(puntos_navegacion) == 3, f"Debe tener 3 puntos, tiene {len(puntos_navegacion)}"
assert all(isinstance(p, tuple) and len(p) == 2 for p in puntos_navegacion), "Cada punto debe ser tupla de 2 elementos"
assert all(isinstance(c, float) for p in puntos_navegacion for c in p), "Las coordenadas deben ser float"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 7 · Lesson 1 ─────────
  {
    id: 'cmmua7xlied50x00389kk',
    lessonId: 'cmmu8wdo4rpztls715e1n',
    instructions: `Dada \`suministros = [5, 0, 3, -1, 8, 0, 2]\`, usa una comprensión de lista para crear \`suministros_utiles\` con solo los valores mayores a 0. Imprime ambas listas.`,
    starterCode: `suministros = [5, 0, 3, -1, 8, 0, 2]

# Comprensión de lista: [x for x in suministros if ...]
suministros_utiles = []  # Reemplaza con tu comprensión

print(f"Original: {suministros}")
print(f"Útiles:   {suministros_utiles}")`,
    testCode: `assert suministros_utiles == [5, 3, 8, 2], f"Se esperaba [5, 3, 8, 2], se obtuvo {suministros_utiles}"
assert 0 not in suministros_utiles
assert -1 not in suministros_utiles
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 7 · Lesson 2 ─────────
  {
    id: 'cmmua7xli8t9fbjetpfhq',
    lessonId: 'cmmu8wdo48oerohh1c9b2',
    instructions: `El compartimento de carga es una cuadrícula 3×3. Declara \`compartimento\` como lista anidada. Imprímela fila por fila con \`|\` separando celdas y \`'Vacío'\` donde haya \`None\`.`,
    starterCode: `compartimento = [
    ["Tanque de Oxígeno", None, "Ración"],
    [None, "Botiquín", None],
    ["Caja de Herramientas", None, "Celda de Combustible"],
]

# Imprime fila por fila con | y 'Vacío' en lugar de None
for fila in compartimento:
    pass  # Reemplaza con tu código`,
    testCode: `assert isinstance(compartimento, list) and len(compartimento) == 3
assert all(len(fila) == 3 for fila in compartimento)
assert compartimento[0][0] == "Tanque de Oxígeno"
assert compartimento[1][1] == "Botiquín"
assert compartimento[0][1] is None
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 7 · Lesson 3 ─────────
  {
    id: 'cmmua7xlis3658yf7urxj',
    lessonId: 'cmmu8wdo429l90bleips2',
    instructions: `Crea \`tripulante\` con al menos cuatro claves: \`nombre\`, \`rol\`, \`uso_oxigeno\` y \`salud\`. Imprime cada par clave-valor con una etiqueta descriptiva.`,
    starterCode: `tripulante = {
    # Agrega: nombre (str), rol (str), uso_oxigeno (float), salud (int)
}

for clave, valor in tripulante.items():
    print(f"{clave.capitalize()}: {valor}")`,
    testCode: `assert isinstance(tripulante, dict)
for clave in ["nombre", "rol", "uso_oxigeno", "salud"]:
    assert clave in tripulante, f"Falta la clave '{clave}'"
assert isinstance(tripulante["nombre"], str) and len(tripulante["nombre"]) > 0
assert isinstance(tripulante["salud"], (int, float)) and tripulante["salud"] > 0
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 7 · Lesson 4 ─────────
  {
    id: 'cmmua7xliqz79ho7ehjom',
    lessonId: 'cmmu8wdo47s0alzvalzat',
    instructions: `El tripulante sufrió una lesión. Accede a \`tripulante['salud']\`, imprímela antes, réstale 10 en el diccionario (el valor original es 95) e imprímela después.`,
    starterCode: `tripulante = {
    "nombre": "Comandante Orion",
    "rol": "Piloto",
    "uso_oxigeno": 0.5,
    "salud": 95
}

print(f"Salud antes: {tripulante['salud']}")

# Actualiza la salud restando 10
# Tu código aquí

print(f"Salud después: {tripulante['salud']}")`,
    testCode: `assert tripulante["salud"] == 85, f"La salud debe ser 85 tras -10, se obtuvo {tripulante['salud']}"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 7 · Lesson 5 ─────────
  {
    id: 'cmmua7xlisgxq9kv3ek6r',
    lessonId: 'cmmu8wdo4b41t7so3gqy3',
    instructions: `Explora el perfil del tripulante. Imprime claves con \`.keys()\`, valores con \`.values()\`, y recupera \`rango\` de forma segura con \`.get('rango', 'Desconocido')\`. Almacena el resultado en \`rango\`.`,
    starterCode: `tripulante = {
    "nombre": "Comandante Orion",
    "rol": "Piloto",
    "uso_oxigeno": 0.5,
    "salud": 95
}

print("Claves:", list(tripulante.keys()))
print("Valores:", list(tripulante.values()))

rango = None  # Usa .get() con valor por defecto "Desconocido"
print(f"Rango: {rango}")`,
    testCode: `assert rango == "Desconocido", f"rango debe ser 'Desconocido', se obtuvo '{rango}'"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 8 · Lesson 6 ─────────
  {
    id: 'cmmua7xlig67r17u5in0w',
    lessonId: 'cmmu8wdo43hbsk22tzfxc',
    instructions: `Construye \`tripulacion\`: diccionario donde cada clave es un nombre y el valor es un dict con \`rol\`, \`salud\` y \`uso_oxigeno\`. Imprime el nombre y la salud de cada tripulante.`,
    starterCode: `tripulacion = {
    "Orion": {},  # Agrega: rol, salud, uso_oxigeno
    "Vega":  {},  # Agrega: rol, salud, uso_oxigeno
    "Park":  {},  # Agrega: rol, salud, uso_oxigeno
}

for nombre, datos in tripulacion.items():
    print(f"{nombre} — Salud: {datos['salud']}")`,
    testCode: `assert len(tripulacion) >= 3
for nombre, datos in tripulacion.items():
    assert isinstance(datos, dict), f"Datos de {nombre} deben ser dict"
    for campo in ["rol", "salud", "uso_oxigeno"]:
        assert campo in datos, f"Perfil de {nombre} debe tener '{campo}'"
    assert isinstance(datos["salud"], (int, float))
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 8 · Lesson 1 ─────────
  {
    id: 'cmmua7xlifr7j6s577d4k',
    lessonId: 'cmmu8wdo46h90cad5io53',
    instructions: `Recorre \`tripulacion\` con \`.items()\`. Si \`salud < 80\`, añade el nombre a \`en_alerta\` e imprime advertencia. Si no, imprime 'OK'.`,
    starterCode: `tripulacion = {
    "Orion": {"rol": "Piloto",    "salud": 95, "uso_oxigeno": 0.5},
    "Vega":  {"rol": "Médico",    "salud": 75, "uso_oxigeno": 0.6},
    "Park":  {"rol": "Ingeniero", "salud": 100, "uso_oxigeno": 0.4},
}

en_alerta = []

for nombre, datos in tripulacion.items():
    pass  # Reemplaza con tu lógica`,
    testCode: `assert "Vega" in en_alerta, "Vega (salud=75) debe estar en alerta"
assert "Orion" not in en_alerta, "Orion (salud=95) no debe estar en alerta"
assert "Park" not in en_alerta, "Park (salud=100) no debe estar en alerta"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 8 · Lesson 2 ─────────
  {
    id: 'cmmua7xlifeywslfxit0x',
    lessonId: 'cmmu8wdo4s17ygj0zv6gr',
    instructions: `Dada la lista \`puntos_visitados\` con duplicados, usa \`set()\` para crear \`puntos_unicos\`. Imprime cuántos puntos únicos hay y el conjunto.`,
    starterCode: `puntos_visitados = ["PR1", "PR2", "PR1", "PR3", "PR2", "PR4", "PR1"]

puntos_unicos = set()  # Reemplaza con: set(puntos_visitados)

print(f"Puntos únicos visitados: {len(puntos_unicos)}")
print(f"Conjunto: {puntos_unicos}")`,
    testCode: `assert isinstance(puntos_unicos, set)
assert len(puntos_unicos) == 4, f"Deben ser 4 puntos únicos, se obtuvieron {len(puntos_unicos)}"
assert puntos_unicos == {"PR1", "PR2", "PR3", "PR4"}
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 8 · Lesson 3 ─────────
  {
    id: 'cmmua7xlitaz6zn3e9d6i',
    lessonId: 'cmmu8wdo4bwkuhmyr0a8x',
    instructions: `Los sensores pueden fallar. Usa \`try/except ZeroDivisionError\` para calcular \`combustible / cantidad_encendidos\`. Si el divisor es 0, almacena un mensaje de error en \`resultado\`; si no, almacena el valor numérico.`,
    starterCode: `combustible = 100
cantidad_encendidos = 0  # Cambia a 4 para el caso exitoso

resultado = None

try:
    pass  # Tu cálculo aquí
except ZeroDivisionError:
    pass  # Almacena mensaje de error en resultado

print(f"Resultado: {resultado}")`,
    testCode: `combustible = 100
cantidad_encendidos = 0
try:
    resultado = combustible / cantidad_encendidos
except ZeroDivisionError:
    resultado = "Error: división por cero"
assert isinstance(resultado, str), "Con encendidos=0, resultado debe ser mensaje de error"
combustible = 100
cantidad_encendidos = 4
try:
    resultado = combustible / cantidad_encendidos
except ZeroDivisionError:
    resultado = "Error"
assert resultado == 25.0, f"Con 100/4 se esperaba 25.0, se obtuvo {resultado}"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 8 · Lesson 4 ─────────
  {
    id: 'cmmua7xlizf0ox3rhcezi',
    lessonId: 'cmmu8wdo4888f9vxrp8dc',
    instructions: `Define \`analizar_sensor(valor)\` que convierta a float y divida 100 entre él. Maneja \`ValueError\` y \`ZeroDivisionError\` con bloques \`except\` separados. Retorna el resultado o un mensaje de error.`,
    starterCode: `def analizar_sensor(valor):
    try:
        numero = float(valor)      # Puede lanzar ValueError
        resultado = 100 / numero   # Puede lanzar ZeroDivisionError
        return resultado
    except ValueError:
        return "Error: el valor no es numérico"
    except ZeroDivisionError:
        return "Error: división por cero"

print(analizar_sensor("42.5"))
print(analizar_sensor("abc"))
print(analizar_sensor("0"))`,
    testCode: `assert isinstance(analizar_sensor("42.5"), float)
assert round(analizar_sensor("42.5"), 4) == round(100 / 42.5, 4)
assert "error" in str(analizar_sensor("abc")).lower()
assert "error" in str(analizar_sensor("0")).lower()
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 9 · Lesson 5 ─────────
  {
    id: 'cmmua7xliybnr8fuqvz74',
    lessonId: 'cmmu8wdo4jix8cb55qz73',
    instructions: `Simula la conexión con \`try/except/else/finally\`. El bloque \`else\` ejecuta una verificación solo sin error. El bloque \`finally\` siempre asigna \`True\` a \`conexion_cerrada\` e imprime \`'Conexión cerrada.'\`.`,
    starterCode: `hay_error = False  # Cambia a True para probar el caso de error
conexion_cerrada = False

try:
    if hay_error:
        raise RuntimeError("Fallo de conexión")
    print("Conexión establecida.")
except RuntimeError as e:
    print(f"Error: {e}")
else:
    print("Verificación de estado completada.")
finally:
    conexion_cerrada = True
    print("Conexión cerrada.")`,
    testCode: `assert conexion_cerrada == True, "finally debe ejecutarse siempre"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 9 · Lesson 6 ─────────
  {
    id: 'cmmua7xljg9wfmzuor8xj',
    lessonId: 'cmmu8wdo4f0ir49zu66fx',
    instructions: `Define \`establecer_oxigeno(nivel)\` que lance \`ValueError\` si \`nivel < 0\` o \`nivel > 100\`. Si es válido, imprime éxito. Llámala con un valor válido y dos inválidos dentro de \`try/except\`.`,
    starterCode: `def establecer_oxigeno(nivel):
    if nivel < 0 or nivel > 100:
        raise ValueError(f"Nivel inválido: {nivel}. Debe estar entre 0 y 100.")
    print(f"Oxígeno establecido al {nivel}%")

establecer_oxigeno(72)

for invalido in [-5, 110]:
    try:
        establecer_oxigeno(invalido)
    except ValueError as e:
        print(f"Alerta capturada: {e}")`,
    testCode: `error_lanzado = False
try:
    establecer_oxigeno(-5)
except ValueError:
    error_lanzado = True
assert error_lanzado, "establecer_oxigeno(-5) debe lanzar ValueError"
error_lanzado = False
try:
    establecer_oxigeno(110)
except ValueError:
    error_lanzado = True
assert error_lanzado, "establecer_oxigeno(110) debe lanzar ValueError"
no_error = True
try:
    establecer_oxigeno(72)
except Exception:
    no_error = False
assert no_error, "establecer_oxigeno(72) no debe lanzar excepción"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 9 · Lesson 1 ─────────
  {
    id: 'cmmua7xljegg3ax7c5y9d',
    lessonId: 'cmmu8wdo47p5kvlhmp06n',
    instructions: `Define \`ErrorDeMision(Exception)\`. Luego define \`verificar_casco(integridad)\` que lance \`ErrorDeMision\` cuando la integridad sea < 20. Pruébala con valores seguros e inseguros.`,
    starterCode: `class ErrorDeMision(Exception):
    pass

def verificar_casco(integridad):
    if integridad < 20:
        raise ErrorDeMision(f"Integridad crítica: {integridad}%")
    print(f"Casco OK — Integridad: {integridad}%")

verificar_casco(50)

try:
    verificar_casco(15)
except ErrorDeMision as e:
    print(f"ErrorDeMision capturado: {e}")`,
    testCode: `assert issubclass(ErrorDeMision, Exception)
error_lanzado = False
try:
    verificar_casco(15)
except ErrorDeMision:
    error_lanzado = True
assert error_lanzado, "verificar_casco(15) debe lanzar ErrorDeMision"
error_lanzado = False
try:
    verificar_casco(0)
except ErrorDeMision:
    error_lanzado = True
assert error_lanzado, "verificar_casco(0) debe lanzar ErrorDeMision"
no_error = True
try:
    verificar_casco(50)
except Exception:
    no_error = False
assert no_error, "verificar_casco(50) no debe lanzar excepción"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 9 · Lesson 2 ─────────
  {
    id: 'cmmua7xljxizta6g60q6h',
    lessonId: 'cmmu8wdo43q7p8x0ug9fy',
    instructions: `Importa \`math\` y calcula: \`distancia_maniobra\` con \`math.sqrt(3**2 + 4**2)\`, \`combustible_techo\` con \`math.ceil(7.2)\`, y almacena \`math.pi\` en \`constante_pi\`. Imprime los tres.`,
    starterCode: `import math

distancia_maniobra = 0  # math.sqrt(3**2 + 4**2)
combustible_techo = 0   # math.ceil(7.2)
constante_pi = 0        # math.pi

print(f"Distancia de maniobra: {distancia_maniobra}")
print(f"Unidades de combustible necesarias: {combustible_techo}")
print(f"Constante Pi: {constante_pi}")`,
    testCode: `assert distancia_maniobra == 5.0, f"math.sqrt(9+16) debe ser 5.0, se obtuvo {distancia_maniobra}"
assert combustible_techo == 8, f"math.ceil(7.2) debe ser 8, se obtuvo {combustible_techo}"
assert constante_pi == 3.141592653589793
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 9 · Lesson 3 ─────────
  {
    id: 'cmmua7xljrg6u0btrhgny',
    lessonId: 'cmmu8wdo4q30veocfruvs',
    instructions: `Importa \`random\`. Simula tres eventos espaciales con \`random.choice()\` y \`random.randint(1, 10)\`. Guarda los resultados como tuplas \`(evento, severidad)\` en \`simulaciones\`.`,
    starterCode: `import random

eventos_posibles = [
    "Lluvia de micrometeoritos",
    "Llamarada solar",
    "Campo de escombros",
    "Tormenta de partículas"
]

simulaciones = []

for _ in range(3):
    evento = None     # random.choice(eventos_posibles)
    severidad = None  # random.randint(1, 10)
    simulaciones.append((evento, severidad))
    print(f"Evento: {evento} | Severidad: {severidad}")`,
    testCode: `assert isinstance(simulaciones, list) and len(simulaciones) == 3
for evento, severidad in simulaciones:
    assert evento in eventos_posibles, f"'{evento}' no es un evento válido"
    assert isinstance(severidad, int) and 1 <= severidad <= 10
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 10 · Lesson 4 ─────────
  {
    id: 'cmmua7xljmfwh6y8ddie3',
    lessonId: 'cmmu8wdo497awn9tbz3yq',
    instructions: `Importa \`datetime\`. Crea \`inicio_mision = datetime(2026, 3, 17, 8, 0, 0)\` y \`fin_simulado\` dos horas después. Calcula \`tiempo_transcurrido\` y guarda los segundos en \`segundos_mision\`.`,
    starterCode: `from datetime import datetime

inicio_mision = datetime(2026, 3, 17, 8, 0, 0)
fin_simulado = datetime(2026, 3, 17, 10, 0, 0)  # 2 horas después

tiempo_transcurrido = None  # fin_simulado - inicio_mision
segundos_mision = None      # .total_seconds()

print(f"Misión iniciada: {inicio_mision}")
print(f"Tiempo transcurrido: {segundos_mision} segundos")`,
    testCode: `assert segundos_mision == 7200.0, f"2 horas = 7200 s, se obtuvo {segundos_mision}"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 10 · Lesson 5 ─────────
  {
    id: 'cmmua7xlj8fqdeigry16g',
    lessonId: 'cmmu8wdo5azxc0hc2dgn4',
    instructions: `Simula un módulo propio. Define \`estado_combustible(nivel)\` que retorne \`'Lleno'\` (>= 75), \`'Bajo'\` (>= 25) o \`'Crítico'\` (< 25). Llámala con distintos niveles e imprime los resultados.`,
    starterCode: `def estado_combustible(nivel):
    '''
    Retorna el estado del combustible según el nivel porcentual.
    '''
    # Lleno si >=75, Bajo si >=25, Crítico si <25
    pass  # Reemplaza con tu código

print(estado_combustible(80))
print(estado_combustible(50))
print(estado_combustible(10))`,
    testCode: `assert estado_combustible(80) == "Lleno"
assert estado_combustible(50) == "Bajo"
assert estado_combustible(10) == "Crítico"
assert estado_combustible(75) == "Lleno"
assert estado_combustible(25) == "Bajo"
assert estado_combustible(0) == "Crítico"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 10 · Lesson 6 ─────────
  {
    id: 'cmmua7xlj134kepi6ti8e',
    lessonId: 'cmmu8wdo5u6m6ks7damai',
    instructions: `Usa \`from math import sqrt, pi\`, \`from random import randint\` y \`from datetime import datetime as dt\`. Usa cada nombre en un cálculo breve e imprime los resultados.`,
    starterCode: `from math import sqrt, pi
from random import randint
from datetime import datetime as dt

raiz = sqrt(49)
constante = pi
entero_aleatorio = randint(1, 10)
hora_actual = dt.now()

print(f"Raíz cuadrada: {raiz}")
print(f"Pi: {constante}")
print(f"Entero aleatorio: {entero_aleatorio}")
print(f"Hora actual: {hora_actual}")`,
    testCode: `assert raiz == 7.0
assert constante == 3.141592653589793
assert isinstance(entero_aleatorio, int) and 1 <= entero_aleatorio <= 10
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 10 · Lesson 1 ─────────
  {
    id: 'cmmua7xljkcd0qcz597qp',
    lessonId: 'cmmu8wdo5ifsnn7c1768k',
    instructions: `Lee \`registro_mision.txt\` línea por línea (el archivo se crea automáticamente). Aplica \`.strip()\` a cada línea y almacénalas en \`lineas_registro\`. Imprime cada línea.`,
    starterCode: `with open("registro_mision.txt", "w") as f:
    f.write("Día 1: Sistemas inicializados\\n")
    f.write("Día 2: Propulsores activados\\n")
    f.write("Día 3: Rumbo a la Tierra\\n")

lineas_registro = []

with open("registro_mision.txt", "r") as f:
    for linea in f:
        linea_limpia = linea.strip()
        lineas_registro.append(linea_limpia)
        print(linea_limpia)`,
    testCode: `assert isinstance(lineas_registro, list) and len(lineas_registro) == 3
assert lineas_registro[0] == "Día 1: Sistemas inicializados"
assert lineas_registro[2] == "Día 3: Rumbo a la Tierra"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 10 · Lesson 2 ─────────
  {
    id: 'cmmua7xljymqfory9lk8l',
    lessonId: 'cmmu8wdo5xvpeutz7fvfm',
    instructions: `Escribe un informe en \`informe_tripulacion.txt\` con al menos tres líneas: nombre de misión, tripulantes y estado. Luego reabre el archivo y almacena su contenido en \`contenido_verificado\`.`,
    starterCode: `nombre_mision = "Operación Regreso"
num_tripulantes = 4
estado_mision = "En tránsito a la Tierra"

with open("informe_tripulacion.txt", "w") as f:
    f.write(f"Misión: {nombre_mision}\\n")
    f.write(f"Tripulantes: {num_tripulantes}\\n")
    f.write(f"Estado: {estado_mision}\\n")

contenido_verificado = ""
with open("informe_tripulacion.txt", "r") as f:
    contenido_verificado = f.read()

print(contenido_verificado)`,
    testCode: `assert isinstance(contenido_verificado, str) and len(contenido_verificado) > 0
assert "Regreso" in contenido_verificado or "misión" in contenido_verificado.lower()
assert "4" in contenido_verificado
assert contenido_verificado.count("\\n") >= 3
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 10 · Lesson 3 ─────────
  {
    id: 'cmmua7xljregi9b65rrga',
    lessonId: 'cmmu8wdo5krpmrmce66p0',
    instructions: `Usa \`with\` para todas las operaciones. Escribe en \`datos_nave.txt\`, léelo en \`contenido_nave\`. Demuestra que el archivo se cerró: intenta usar \`f\` fuera del bloque y almacena \`True\` en \`archivo_cerrado\` si lanza \`ValueError\`.`,
    starterCode: `with open("datos_nave.txt", "w") as f:
    f.write("Sistema: Ares VII\\n")
    f.write("Estado: Operacional\\n")

contenido_nave = ""
with open("datos_nave.txt", "r") as f:
    contenido_nave = f.read()

archivo_cerrado = False
try:
    f.read()  # Debe fallar: archivo cerrado
except ValueError:
    archivo_cerrado = True

print(contenido_nave)
print(f"Archivo cerrado automáticamente: {archivo_cerrado}")`,
    testCode: `assert isinstance(contenido_nave, str) and len(contenido_nave) > 0
assert "Ares VII" in contenido_nave or "Sistema" in contenido_nave
assert archivo_cerrado == True
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 10 · Lesson 4 ─────────
  {
    id: 'cmmua7xljdygom29p4sls',
    lessonId: 'cmmu8wdo5rytb9agklj69',
    instructions: `Usa \`csv.DictReader\` para leer \`datos_tripulacion.csv\` (se crea automáticamente). Almacena cada fila en \`registros_tripulacion\` e imprime cada registro con etiquetas.`,
    starterCode: `import csv

with open("datos_tripulacion.csv", "w", newline="") as f:
    escritor = csv.writer(f)
    escritor.writerow(["nombre", "rol", "salud"])
    escritor.writerow(["Comandante Orion", "Piloto", "95"])
    escritor.writerow(["Dra. Vega", "Médico", "88"])
    escritor.writerow(["Tte. Park", "Ingeniero", "100"])

registros_tripulacion = []
with open("datos_tripulacion.csv", "r") as f:
    lector = csv.DictReader(f)
    for fila in lector:
        registros_tripulacion.append(fila)
        print(f"Nombre: {fila['nombre']} | Rol: {fila['rol']} | Salud: {fila['salud']}")`,
    testCode: `assert isinstance(registros_tripulacion, list) and len(registros_tripulacion) == 3
assert "nombre" in registros_tripulacion[0] and "rol" in registros_tripulacion[0]
assert registros_tripulacion[0]["nombre"] == "Comandante Orion"
assert registros_tripulacion[1]["rol"] == "Médico"
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
  // ── Chapter 10 · Lesson 5 ─────────
  {
    id: 'cmmua7xljuhhdbayzv9w5',
    lessonId: 'cmmu8wdo5nk33iw159bd7',
    instructions: `Desafío final: lee el CSV, filtra tripulantes con salud < 80 con comprensión de lista, define \`generar_informe(tripulacion)\` que escriba en \`informe_atraque.txt\`, maneja errores con \`try/except\` e imprime \`'Misión completada. Orion está en casa.'\`.`,
    starterCode: `import csv

with open("datos_tripulacion.csv", "w", newline="") as f:
    escritor = csv.writer(f)
    escritor.writerow(["nombre", "rol", "salud"])
    escritor.writerow(["Comandante Orion", "Piloto", "95"])
    escritor.writerow(["Dra. Vega", "Médico", "72"])
    escritor.writerow(["Tte. Park", "Ingeniero", "100"])
    escritor.writerow(["Sgto. Kim", "Técnico", "68"])

tripulacion_completa = []
with open("datos_tripulacion.csv", "r") as f:
    lector = csv.DictReader(f)
    for fila in lector:
        tripulacion_completa.append(fila)
print(f"Tripulación cargada: {len(tripulacion_completa)} miembros")

# Filtra los que tienen salud < 80 (comprensión de lista)
necesitan_atencion = []  # [t for t in ... if int(t['salud']) < 80]
print(f"Tripulantes que necesitan atención: {len(necesitan_atencion)}")

def generar_informe(tripulacion):
    with open("informe_atraque.txt", "w") as f:
        for t in tripulacion:
            f.write(f"{t['nombre']} — Salud: {t['salud']}\\n")

try:
    generar_informe(necesitan_atencion)
    print("Informe de atraque escrito.")
except Exception as e:
    print(f"Error: {e}")

print("Misión completada. Orion está en casa.")`,
    testCode: `assert len(tripulacion_completa) == 4
assert len(necesitan_atencion) == 2, f"2 tripulantes con salud<80, se encontraron {len(necesitan_atencion)}"
nombres = [t["nombre"] for t in necesitan_atencion]
assert "Dra. Vega" in nombres
assert "Sgto. Kim" in nombres
import os
assert os.path.exists("informe_atraque.txt")
with open("informe_atraque.txt", "r") as f:
    contenido = f.read()
assert len(contenido) > 0
print('✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.')`,
    expectedOutput: `✅ ¡Todos los sistemas en marcha! Objetivo de la misión completado.`,
  },
];

export async function main() {
  console.log('Start Seed');

  console.log('Clearing existing content');
  await prisma.submission.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.chapterProgress.deleteMany();
  await prisma.userStats.updateMany({
    data: {
      totalXp: 0,
      level: 1,
      currentChapterId: null,
    },
  });
  await prisma.challenge.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.chapter.deleteMany();
  console.log('Done.\n');

  for (const data of chapters) {
    await prisma.chapter.upsert({
      where: { id: data.id },
      create: data,
      update: data,
    });
  }

  for (const data of lessons) {
    await prisma.lesson.upsert({
      where: { id: data.id },
      create: data,
      update: data,
    });
  }

  for (const data of challenges) {
    await prisma.challenge.upsert({
      where: { id: data.id },
      create: data,
      update: data,
    });
  }
  console.log('Seeded');
  console.log(` - ${chapters.length} chapter(s)`);
  console.log(` - ${lessons.length} lesson(s)`);
  console.log(` - ${challenges.length} challenge(s)`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
