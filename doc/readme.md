# Índice Modular de Documentación

La documentación de este proyecto está organizada de forma modular para facilitar la navegación y la colaboración en diferentes partes del proyecto. A continuación se presenta una descripción general de la estructura y los contenidos de cada carpeta:

## [Introducción](./Introducción/introduccion.md)
- [¿Qué te ofrece Let's rol?](./Introducción/introduccion.md#qué-te-ofrece-lets-rol)
- [La Tienda de Let's rol](./Introducción/introduccion.md#la-tienda-de-lets-rol)
- [Enfoque Inicial en Kingdom Hearts y Futuras Expansiones](./Introducción/introduccion.md#enfoque-inicial-en-kingdom-hearts-y-futuras-expansiones)
---
## [Los Usuarios](./Usuarios/Tipos_de_usuario.md)
- [Administrador](./Usuarios/Tipos_de_usuario.md#administrador)
- [Usuario Estándar](./Usuarios/Tipos_de_usuario.md#usuario-estándar)
- [Navegante](./Usuarios/Tipos_de_usuario.md#navegante)
- [Medidas de seguridad](./Usuarios/Medidas_de_seguridad.md)
---
## [Modelo de Datos](Modelo_de_datos/Modelo_de_datos.md)
- [Tablas](Modelo_de_datos/Modelo_de_datos.md#tablas)
- [Relaciones](Modelo_de_datos/Modelo_de_datos.md#relaciones)
- [Descripción](Modelo_de_datos/Modelo_de_datos.md#descripción)
- [Tabla de Valores por Defecto](Modelo_de_datos/Modelo_de_datos.md#tabla-de-valores-por-defecto)
---
## [Funcionalidades de la Web](./Funcionalidades_de_la_web)
- [Diagrama de casos de uso](./Funcionalidades_de_la_web/Diagrama_de_casos_de_uso.md)
- [Tablas de casos de uso](./Funcionalidades_de_la_web/tablas.md)
  - [Registrarse](./Funcionalidades_de_la_web/tablas.md#registrarse)
  - [Iniciar Sesión](./Funcionalidades_de_la_web/tablas.md#iniciar-sesión)
  - [Ver Juegos Disponibles](./Funcionalidades_de_la_web/tablas.md#ver-juegos-disponibles)
  - [Crear Personaje Base](./Funcionalidades_de_la_web/tablas.md#crear-personaje-base)
  - [Crear Partida](./Funcionalidades_de_la_web/tablas.md#crear-partida)
  - [Buscar Partida](./Funcionalidades_de_la_web/tablas.md#buscar-partida)
  - [Continuar Partida](./Funcionalidades_de_la_web/tablas.md#continuar-partida)
  - [Comprar en Tienda](./Funcionalidades_de_la_web/tablas.md#comprar-en-tienda)
  - [Leer Foro](./Funcionalidades_de_la_web/tablas.md#leer-foro)
  - [Escribir en el Foro](./Funcionalidades_de_la_web/tablas.md#escribir-en-el-foro)
  - [Modificar Productos de Tienda](./Funcionalidades_de_la_web/tablas.md#modificar-productos-de-tienda)
  - [Habilitar/Deshabilitar Modos de Juego](./Funcionalidades_de_la_web/tablas.md#habilitardeshabilitar-modos-de-juego)
  
---
## Modos de juego

### [Kingdom Heards (KH)](./Modos_de_juego/Kingdom_hearts)

- [Cartas](./Modos_de_juego/Kingdom_hearts/Cartas)
  - [porcentaje de cartas.json](./Modos_de_juego/Kingdom_hearts/Cartas/porcentaje_de_cartas.json)
  - [Porcentaje de las cartas.md](./Modos_de_juego/Kingdom_hearts/Cartas/Porcentaje_de_las_cartas.md)
  - [valores cartas.json](./Modos_de_juego/Kingdom_hearts/Cartas/valores_cartas.json)
  - [Valores de las cartas.md](./Modos_de_juego/Kingdom_hearts/Cartas/Valores_de_las_cartas.md)
- [Información](./Modos_de_juego/Kingdom_hearts/Informacion)
  - [Funcionamiento de porcentajes de las cartas](./Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md)
    - [Cálculo de porcentajes con TypeScript (Frontend) y PHP con Laravel (Backend)](./Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md#1-cálculo-de-porcentajes-con-typescript-frontend-y-php-con-laravel-backend)
    - [Cálculo de porcentajes de las cartas en ambos lenguajes](./Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md#2-cálculo-de-porcentajes-de-las-cartas-en-ambos-lenguajes)
    - [Tabla de resultados con Markdown](./Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md#3-tabla-de-resultados-con-markdown)
    - [Conclusiones](./Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md#4-conclusiones)
    - [Funcionamiento de la Tienda](./Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md#5-funcionamiento-de-la-tienda)
  - [Jugador](./Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md)
    - [Creación del Personaje](./Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md#creación-del-personaje)
    - [Estadísticas y Atributos](./Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md#estadísticas-y-atributos)
    - [Subida de Nivel](./Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md#subida-de-nivel)
    - [Cartas del Juego](./Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md#cartas-del-juego)
    - [Exploración y Travesías](./Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md#exploración-y-travesías)
  - [Master](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md)
    - [Creación de la Partida](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#creación-de-la-partida)
    - [Configuración y Control de la Partida](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#configuración-y-control-de-la-partida)
    - [Creación de Lore y Ambientación](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#creación-de-lore-y-ambientación)
    - [Ejemplo de Lore](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#ejemplo-de-lore)
    - [Creación de Monstruos y Bosses](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#creación-de-monstruos-y-bosses)
    - [Control de Habilidades y Objetos de Enemigos](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#control-de-habilidades-y-objetos-de-enemigos)
    - [Tienda y Objetos](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#tienda-y-objetos)
    - [Pack de Cartas de Magia](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#pack-de-cartas-de-magia)
    - [Pack de Cartas de Objetos](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#pack-de-cartas-de-objetos)
    - [Pack de Cartas de Llave Espada](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#pack-de-cartas-de-llave-espada)
    - [Pack Mixto](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#pack-mixto)
    - [Escalado de Estadísticas de Criaturas](./Modos_de_juego/Kingdom_hearts/Informacion/Master.md#escalado-de-estadísticas-de-criaturas)
  - [Sistema de combate](./Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md)
    - [Inicio de los Turnos](./Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#inicio-de-los-turnos)
    - [Sistema de Ataque](./Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#sistema-de-ataque)
    - [Sistema de Defensa y Contrataque](./Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#sistema-de-defensa-y-contrataque)
    - [Sistema de Combos y Bloqueo de Combos](./Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#sistema-de-combos-y-bloqueo-de-combos)
    - [Estrategia y Tácticas](./Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#estrategia-y-tácticas)
    - [Progresión y Desarrollo](./Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#progresión-y-desarrollo)
- [Introducción](./Modos_de_juego/Kingdom_hearts/Introduccion.md)
- [Modelo de datos](./Modos_de_juego/Kingdom_hearts/modelo_de_datos.md)

---
## Dungeons & Dragons (D&D)
- (Este apartado está vacío por ahora)
---
## Modular
- (Este apartado está vacío por ahora)
---
## Mapa de Navegación
- [Introducción](./mapa_de_navegacion/introduccion.md)
- [Manual de Juego e Instrucciones](./mapa_de_navegacion/manual_de_juego_e_instrucciones.md)
