# Índice Modular de Documentación

La documentación de este proyecto está organizada de forma modular para facilitar la navegación y la colaboración en diferentes partes del proyecto. A continuación se presenta una descripción general de la estructura y los contenidos de cada carpeta:

## [Introducción](doc/Introducción/introduccion.md)
- [¿Qué te ofrece Let's rol?](doc/Introducción/introduccion.md#qué-te-ofrece-lets-rol)
- [La Tienda de Let's rol](doc/Introducción/introduccion.md#la-tienda-de-lets-rol)
- [Enfoque Inicial en Kingdom Hearts y Futuras Expansiones](doc/Introducción/introduccion.md#enfoque-inicial-en-kingdom-hearts-y-futuras-expansiones)
---
## [Los Usuarios](doc/Usuarios/Tipos_de_usuario.md)
- [Administrador](doc/Usuarios/Tipos_de_usuario.md#administrador)
- [Usuario Estándar](doc/Usuarios/Tipos_de_usuario.md#usuario-estándar)
- [Navegante](doc/Usuarios/Tipos_de_usuario.md#navegante)
- [Medidas de seguridad](doc/Usuarios/Medidas_de_seguridad.md)
---
## [Modelo de Datos](doc/Modelo_de_datos/Modelo_de_datos.md)
- [Tablas](doc/Modelo_de_datos/Modelo_de_datos.md#tablas)
- [Relaciones](doc/Modelo_de_datos/Modelo_de_datos.md#relaciones)
- [Descripción](doc/Modelo_de_datos/Modelo_de_datos.md#descripción)
- [Tabla de Valores por Defecto](doc/Modelo_de_datos/Modelo_de_datos.md#tabla-de-valores-por-defecto)
---
## [Funcionalidades de la Web](doc/Funcionalidades_de_la_web)
- [Diagrama de casos de uso](doc/Funcionalidades_de_la_web/Diagrama_de_casos_de_uso.md)
- [Tablas de casos de uso](doc/Funcionalidades_de_la_web/tablas.md)
  - [Registrarse](doc/Funcionalidades_de_la_web/tablas.md#registrarse)
  - [Iniciar Sesión](doc/Funcionalidades_de_la_web/tablas.md#iniciar-sesión)
  - [Ver Juegos Disponibles](doc/Funcionalidades_de_la_web/tablas.md#ver-juegos-disponibles)
  - [Crear Personaje Base](doc/Funcionalidades_de_la_web/tablas.md#crear-personaje-base)
  - [Crear Partida](doc/Funcionalidades_de_la_web/tablas.md#crear-partida)
  - [Buscar Partida](doc/Funcionalidades_de_la_web/tablas.md#buscar-partida)
  - [Continuar Partida](doc/Funcionalidades_de_la_web/tablas.md#continuar-partida)
  - [Comprar en Tienda](doc/Funcionalidades_de_la_web/tablas.md#comprar-en-tienda)
  - [Leer Foro](doc/Funcionalidades_de_la_web/tablas.md#leer-foro)
  - [Escribir en el Foro](doc/Funcionalidades_de_la_web/tablas.md#escribir-en-el-foro)
  - [Modificar Productos de Tienda](doc/Funcionalidades_de_la_web/tablas.md#modificar-productos-de-tienda)
  - [Habilitar/Deshabilitar Modos de Juego](doc/Funcionalidades_de_la_web/tablas.md#habilitardeshabilitar-modos-de-juego)
  
---
## Modos de juego

### [Kingdom Heards (KH)](doc/Modos_de_juego/Kingdom_hearts)

- [Cartas](doc/Modos_de_juego/Kingdom_hearts/Cartas)
  - [porcentaje de cartas.json](doc/Modos_de_juego/Kingdom_hearts/Cartas/porcentaje_de_cartas.json)
  - [Porcentaje de las cartas.md](doc/Modos_de_juego/Kingdom_hearts/Cartas/Porcentaje_de_las_cartas.md)
  - [valores cartas.json](doc/Modos_de_juego/Kingdom_hearts/Cartas/valores_cartas.json)
  - [Valores de las cartas.md](doc/Modos_de_juego/Kingdom_hearts/Cartas/Valores_de_las_cartas.md)
- [Información](doc/Modos_de_juego/Kingdom_hearts/Informacion)
  - [Funcionamiento de porcentajes de las cartas](doc/Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md)
    - [Cálculo de porcentajes con TypeScript (Frontend) y PHP con Laravel (Backend)](doc/Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md#1-cálculo-de-porcentajes-con-typescript-frontend-y-php-con-laravel-backend)
    - [Cálculo de porcentajes de las cartas en ambos lenguajes](doc/Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md#2-cálculo-de-porcentajes-de-las-cartas-en-ambos-lenguajes)
    - [Tabla de resultados con Markdown](doc/Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md#3-tabla-de-resultados-con-markdown)
    - [Conclusiones](doc/Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md#4-conclusiones)
    - [Funcionamiento de la Tienda](doc/Modos_de_juego/Kingdom_hearts/Informacion/Funcionamiento_de_porcentajes_de_las_cartas.md#5-funcionamiento-de-la-tienda)
  - [Jugador](doc/Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md)
    - [Creación del Personaje](doc/Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md#creación-del-personaje)
    - [Estadísticas y Atributos](doc/Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md#estadísticas-y-atributos)
    - [Subida de Nivel](doc/Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md#subida-de-nivel)
    - [Cartas del Juego](doc/Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md#cartas-del-juego)
    - [Exploración y Travesías](doc/Modos_de_juego/Kingdom_hearts/Informacion/Jugador.md#exploración-y-travesías)
  - [Master](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md)
    - [Creación de la Partida](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#creación-de-la-partida)
    - [Configuración y Control de la Partida](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#configuración-y-control-de-la-partida)
    - [Creación de Lore y Ambientación](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#creación-de-lore-y-ambientación)
    - [Ejemplo de Lore](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#ejemplo-de-lore)
    - [Creación de Monstruos y Bosses](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#creación-de-monstruos-y-bosses)
    - [Control de Habilidades y Objetos de Enemigos](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#control-de-habilidades-y-objetos-de-enemigos)
    - [Tienda y Objetos](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#tienda-y-objetos)
    - [Pack de Cartas de Magia](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#pack-de-cartas-de-magia)
    - [Pack de Cartas de Objetos](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#pack-de-cartas-de-objetos)
    - [Pack de Cartas de Llave Espada](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#pack-de-cartas-de-llave-espada)
    - [Pack Mixto](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#pack-mixto)
    - [Escalado de Estadísticas de Criaturas](doc/Modos_de_juego/Kingdom_hearts/Informacion/Master.md#escalado-de-estadísticas-de-criaturas)
  - [Sistema de combate](doc/Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md)
    - [Inicio de los Turnos](doc/Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#inicio-de-los-turnos)
    - [Sistema de Ataque](doc/Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#sistema-de-ataque)
    - [Sistema de Defensa y Contrataque](doc/Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#sistema-de-defensa-y-contrataque)
    - [Sistema de Combos y Bloqueo de Combos](doc/Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#sistema-de-combos-y-bloqueo-de-combos)
    - [Estrategia y Tácticas](doc/Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#estrategia-y-tácticas)
    - [Progresión y Desarrollo](doc/Modos_de_juego/Kingdom_hearts/Informacion/Sistema_de_combate.md#progresión-y-desarrollo)
- [Introducción](doc/Modos_de_juego/Kingdom_hearts/Introduccion.md)
- [Modelo de datos](doc/Modos_de_juego/Kingdom_hearts/modelo_de_datos.md)

---
## Dungeons & Dragons (D&D)
- (Este apartado está vacío por ahora)
---
## Modular
- (Este apartado está vacío por ahora)
---
## Mapa de Navegación
- [Introducción](doc/mapa_de_navegacion/introduccion.md)
- [Manual de Juego e Instrucciones](doc/mapa_de_navegacion/manual_de_juego_e_instrucciones.md)
