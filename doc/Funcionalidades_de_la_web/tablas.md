<a name="_heading=h.lnxbz9"></a>Registrarse

<table>
  <tr>
    <th >Caso de Uso</th>
    <th colspan="4" >Registrar Usuario</th>
  </tr>
  <tr>
    <td >Dependencias</td>
    <td colspan="4" ></td>
  </tr>
  <tr>
    <td >Precondición</td>
    <td colspan="4" >Que el Usuario se encuentre en la página de registro de la <i>Let’s Rol</i></td>
  </tr>
  <tr>
    <td >Descripción</td>
    <td colspan="4" >La web de <i>Let’s Rol</i> recibe los datos del usuario que se quiere registrar y lo introduce en la base de datos de acuerdo a los siguientes pasos.</td>
  </tr>
  <tr>
    <td rowspan="4" >Secuencia Normal</td>
    <td >Paso</td>
    <td colspan="3" >Acción</td>
  </tr>
  <tr>
    <td >1</td>
    <td colspan="3" >El sistema muestra sus distintos campos para rellenar y queda a la espera. Los campos son: correo, <i>nick</i>, contraseña y sexo (este último campo es opcional).</td>
  </tr>
  <tr>
    <td >2</td>
    <td colspan="3" >El usuario inserta datos en los campos correspondientes.</td>
  </tr>
  <tr>
    <td >3</td>
    <td colspan="3" >El usuario indica al sistema que procese los datos que indicó, pulsando el botón de “Registrar”.</td>
  </tr>
  <tr>
    <td ></td>
    <td >4</td>
    <td colspan="3" >El sistema al procesar los datos, analiza en busca de si hay excepciones, si no las hay, registra con éxito el usuario.</td>
  </tr>
  <tr>
    <td ></td>
    <td >5</td>
    <td colspan="3" >El sistema te indica que te has registrado y te manda a la sección de <i>login</i>.</td>
  </tr>
  <tr>
    <td >Postcondición</td>
    <td colspan="4" >El Usuario queda registrado en la base de datos.</td>
  </tr>
  <tr>
    <td rowspan="7" >Excepciones</td>
    <td >Paso</td>
    <td colspan="3" >Acción</td>
  </tr>
  <tr>
    <td rowspan="3" >2</td>
    <td colspan="3" >Si el Usuario ya se encuentra registrado en la página o se repite el nombre de Usuario</td>
  </tr>
  <tr>
    <td >P.1</td>
    <td colspan="2" >Salta un <i>pop-up</i> que te advierte que ya estás registrado con ese correo o nombre de Usuario.</td>
  </tr>
  <tr>
    <td >P.2</td>
    <td colspan="2" >Se cancela el registro.</td>
  </tr>
  <tr>
    <td rowspan="3" >2</td>
    <td colspan="3" >El Usuario no ha rellenado uno de los campos obligatorios del formulario de registro.</td>
  </tr>
  <tr>
    <td >P.1</td>
    <td colspan="2" >Salta un <i>pop-up</i> del sistema indicándote que te ha faltado uno u otros campos obligatorios a rellenar.</td>
  </tr>
  <tr>
    <td >P.2</td>
    <td colspan="2" >Se cancela el registro.</td>
  </tr>
  <tr>
    <td >Comentario</td>
    <td colspan="4" ></td>
  </tr>
</table>

<a name="_heading=h.lnxbz9"></a>Iniciar Sesión

<table>
  <tr>
    <th >Caso de Uso</th>
    <th colspan="4" >Iniciar Sesión</th>
  </tr>
  <tr>
    <td >Dependencias</td>
    <td colspan="4" ></td>
  </tr>
  <tr>
    <td >Precondición</td>
    <td colspan="4" >Que el Usuario se encuentre en la página de inicio de sesión de la <i>Let’s Rol</i></td>
  </tr>
  <tr>
    <td >Descripción</td>
    <td colspan="4" >El usuario introduce su correo electrónico y contraseña para acceder a su cuenta en la web de <i>Let’s Rol</i>.</td>
  </tr>
  <tr>
    <td rowspan="3" >Secuencia Normal</td>
    <td >Paso</td>
    <td colspan="3" >Acción</td>
  </tr>
  <tr>
    <td >1</td>
    <td colspan="3" >El sistema muestra los campos para ingresar el correo electrónico y la contraseña.</td>
  </tr>
  <tr>
    <td >2</td>
    <td colspan="3" >El usuario ingresa su correo electrónico y contraseña.</td>
  </tr>
  <tr>
    <td ></td>
    <td >3</td>
    <td colspan="3" >El sistema verifica la información ingresada y permite el acceso si los datos son correctos.</td>
  </tr>
  <tr>
    <td >Postcondición</td>
    <td colspan="4" >El Usuario inicia sesión en la página y accede a su cuenta.</td>
  </tr>
  <tr>
    <td rowspan="2" >Excepciones</td>
    <td >Paso</td>
    <td colspan="3" >Acción</td>
  </tr>
  <tr>
    <td >2</td>
    <td colspan="3" >Si el correo electrónico o la contraseña son incorrectos</td>
  </tr>
  <tr>
    <td >Comentario</td>
    <td colspan="4" ></td>
  </tr>
</table>

<a name="_heading=h.lnxbz9"></a>Ver Juegos Disponibles

<table>
  <tr>
    <th >Caso de Uso</th>
    <th colspan="4" >Ver Juegos Disponibles</th>
  </tr>
  <tr>
    <td >Dependencias</td>
    <td colspan="4" ></td>
  </tr>
  <tr>
    <td >Precondición</td>
    <td colspan="4" >El usuario está en la página principal de la web de <i>Let’s Rol</i></td>
  </tr>
  <tr>
    <td >Descripción</td>
    <td colspan="4" >El usuario puede ver la lista de juegos disponibles para jugar en la web de <i>Let’s Rol</i>.</td>
  </tr>
  <tr>
    <td rowspan="2" >Secuencia Normal</td>
    <td >Paso</td>
    <td colspan="3" >Acción</td>
  </tr>
  <tr>
    <td >1</td>
    <td colspan="3" >El sistema muestra una lista de juegos disponibles.</td>
  </tr>
  <tr>
    <td >Postcondición</td>
    <td colspan="4" >El Usuario visualiza la lista de juegos disponibles.</td>
  </tr>
  <tr>
    <td >Comentario</td>
    <td colspan="4" ></td>
  </tr>
</table>

<a name="_heading=h.lnxbz9"></a>Crear Personaje Base

<table>
  <tr>
    <th valign="top">Caso de Uso</th>
    <th colspan="4" valign="top">Crear Personaje Base</th>
  </tr>
  <tr>
    <td valign="top">Dependencias</td>
    <td colspan="4" valign="top">El usuario ha iniciado sesión como Usuario Estándar.</td>
  </tr>
  <tr>
    <td valign="top">Precondición</td>
    <td colspan="4" valign="top">El usuario desea crear un nuevo personaje base para su partida.</td>
  </tr>
  <tr>
    <td valign="top">Descripción</td>
    <td colspan="4" valign="top">El usuario, como Usuario Estándar, tiene la capacidad de crear un nuevo personaje base para utilizarlo en sus partidas. Debe proporcionar información como el nombre, raza y descripción del personaje.</td>
  </tr>
  <tr>
    <td rowspan="4" valign="top">Secuencia Normal</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">1</td>
    <td colspan="3" valign="top">El sistema muestra un formulario para crear un nuevo personaje base.</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El usuario ingresa los datos del personaje base, incluyendo el nombre, raza y descripción.</td>
  </tr>
  <tr>
    <td valign="top">3</td>
    <td colspan="3" valign="top">El usuario confirma y envía los datos del nuevo personaje base.</td>
  </tr>
  <tr>
    <td valign="top">Postcondición</td>
    <td colspan="4" valign="top">El Usuario ha creado exitosamente un nuevo personaje base y está listo para utilizarlo en sus partidas.</td>
  </tr>
  <tr>
    <td rowspan="3" valign="top">Excepciones</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El usuario no proporciona todos los datos obligatorios del formulario.</td>
  </tr>
  <tr>
    <td valign="top">P.1</td>
    <td colspan="3" valign="top">El sistema muestra un mensaje de error indicando que todos los campos obligatorios deben ser completados.</td>
  </tr>
  <tr>
    <td valign="top">Comentario</td>
    <td colspan="4" valign="top"></td>
  </tr>
</table>

<a name="_heading=h.lnxbz9"></a>Crear Partida

<table>
  <tr>
    <th valign="top">Caso de Uso</th>
    <th colspan="4" valign="top">Crear Partida</th>
  </tr>
  <tr>
    <td valign="top">Dependencias</td>
    <td colspan="4" valign="top">El usuario ha iniciado sesión como Usuario Estándar.</td>
  </tr>
  <tr>
    <td valign="top">Precondición</td>
    <td colspan="4" valign="top">El usuario desea crear una nueva partida para un juego específico.</td>
  </tr>
  <tr>
    <td valign="top">Descripción</td>
    <td colspan="4" valign="top">El usuario, como Usuario Estándar, tiene la capacidad de crear una nueva partida para un juego de rol específico. Debe proporcionar información como el nombre de la partida, el juego al que pertenece y una descripción para que otros jugadores puedan unirse.</td>
  </tr>
  <tr>
    <td rowspan="4" valign="top">Secuencia Normal</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">1</td>
    <td colspan="3" valign="top">El sistema muestra un formulario para crear una nueva partida.</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El usuario ingresa los datos de la partida, incluyendo el nombre, el juego al que pertenece y una descripción.</td>
  </tr>
  <tr>
    <td valign="top">3</td>
    <td colspan="3" valign="top">El usuario confirma y crea la nueva partida.</td>
  </tr>
  <tr>
    <td valign="top">Postcondición</td>
    <td colspan="4" valign="top">El Usuario ha creado exitosamente una nueva partida y está listo para comenzar a jugar o esperar a que otros jugadores se unan.</td>
  </tr>
  <tr>
    <td rowspan="3" valign="top">Excepciones</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El usuario no proporciona todos los datos obligatorios del formulario.</td>
  </tr>
  <tr>
    <td valign="top">P.1</td>
    <td colspan="3" valign="top">El sistema muestra un mensaje de error indicando que todos los campos obligatorios deben ser completados.</td>
  </tr>
  <tr>
    <td valign="top">Comentario</td>
    <td colspan="4" valign="top"></td>
  </tr>
</table>

<a name="_heading=h.lnxbz9"></a>Buscar Partida

<table>
  <tr>
    <th valign="top">Caso de Uso</th>
    <th colspan="4" valign="top">Buscar Partida</th>
  </tr>
  <tr>
    <td valign="top">Dependencias</td>
    <td colspan="4" valign="top">El usuario ha iniciado sesión como Usuario Estándar.</td>
  </tr>
  <tr>
    <td valign="top">Precondición</td>
    <td colspan="4" valign="top">El usuario desea buscar partidas disponibles para un juego específico.</td>
  </tr>
  <tr>
    <td valign="top">Descripción</td>
    <td colspan="4" valign="top">El usuario, como Usuario Estándar, tiene la capacidad de buscar partidas disponibles para un juego de rol específico. Puede filtrar las partidas por nombre, juego y otros criterios para encontrar una partida que se adapte a sus preferencias.</td>
  </tr>
  <tr>
    <td rowspan="4" valign="top">Secuencia Normal</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">1</td>
    <td colspan="3" valign="top">El sistema muestra una página de búsqueda de partidas con opciones de filtrado.</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El usuario ingresa los criterios de búsqueda, como el nombre de la partida o el juego al que pertenece.</td>
  </tr>
  <tr>
    <td valign="top">3</td>
    <td colspan="3" valign="top">El usuario ejecuta la búsqueda y el sistema muestra una lista de partidas que coinciden con los criterios ingresados.</td>
  </tr>
  <tr>
    <td valign="top">Postcondición</td>
    <td colspan="4" valign="top">El Usuario obtiene una lista de partidas disponibles que coinciden con los criterios de búsqueda.</td>
  </tr>
  <tr>
    <td rowspan="3" valign="top">Excepciones</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">3</td>
    <td colspan="3" valign="top">No se encuentran partidas que coincidan con los criterios de búsqueda.</td>
  </tr>
  <tr>
    <td valign="top">P.1</td>
    <td colspan="3" valign="top">El sistema muestra un mensaje indicando que no hay partidas disponibles con los criterios de búsqueda especificados.</td>
  </tr>
  <tr>
    <td valign="top">Comentario</td>
    <td colspan="4" valign="top"></td>
  </tr>
</table>

<a name="_heading=h.lnxbz9"></a>Continuar Partida

<table>
  <tr>
    <th valign="top">Caso de Uso</th>
    <th colspan="4" valign="top">Continuar Partida</th>
  </tr>
  <tr>
    <td valign="top">Dependencias</td>
    <td colspan="4" valign="top">El usuario ha iniciado sesión como Usuario Estándar.</td>
  </tr>
  <tr>
    <td valign="top">Precondición</td>
    <td colspan="4" valign="top">El usuario desea continuar una partida en la que ya está participando.</td>
  </tr>
  <tr>
    <td valign="top">Descripción</td>
    <td colspan="4" valign="top">El usuario, como Usuario Estándar, puede continuar una partida previamente creada en la que ya está participando. El sistema mostrará una lista de partidas en las que el usuario tiene personajes y le permitirá elegir la partida que desea continuar.</td>
  </tr>
  <tr>
    <td rowspan="4" valign="top">Secuencia Normal</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">1</td>
    <td colspan="3" valign="top">El sistema muestra una lista de partidas en las que el usuario tiene personajes.</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El usuario selecciona una partida de la lista para continuar.</td>
  </tr>
  <tr>
    <td valign="top">3</td>
    <td colspan="3" valign="top">El sistema carga la partida seleccionada y permite al usuario continuar jugando desde donde la dejó.</td>
  </tr>
  <tr>
    <td valign="top">Postcondición</td>
    <td colspan="4" valign="top">El Usuario continúa jugando la partida seleccionada desde su último punto guardado.</td>
  </tr>
  <tr>
    <td rowspan="2" valign="top">Excepciones</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">1</td>
    <td colspan="3" valign="top">El usuario no tiene personajes en ninguna partida.</td>
  </tr>
  <tr>
    <td valign="top">Comentario</td>
    <td colspan="4" valign="top"></td>
  </tr>
</table>

<a name="_heading=h.lnxbz9"></a>Comprar en Tienda

<table>
  <tr>
    <th valign="top">Caso de Uso</th>
    <th colspan="4" valign="top">Comprar en Tienda</th>
  </tr>
  <tr>
    <td valign="top">Dependencias</td>
    <td colspan="4" valign="top">El usuario ha iniciado sesión como Usuario Estándar.</td>
  </tr>
  <tr>
    <td valign="top">Precondición</td>
    <td colspan="4" valign="top">El usuario desea comprar productos de la tienda.</td>
  </tr>
  <tr>
    <td valign="top">Descripción</td>
    <td colspan="4" valign="top">El usuario, como Usuario Estándar, puede comprar productos de la tienda utilizando sus créditos disponibles. El sistema mostrará una lista de productos disponibles en la tienda y permitirá al usuario agregar los productos deseados a su carrito de compras.</td>
  </tr>
  <tr>
    <td rowspan="5" valign="top">Secuencia Normal</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">1</td>
    <td colspan="3" valign="top">El sistema muestra una lista de productos disponibles en la tienda.</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El usuario selecciona los productos que desea comprar y los agrega a su carrito de compras.</td>
  </tr>
  <tr>
    <td valign="top">3</td>
    <td colspan="3" valign="top">El usuario revisa los productos en su carrito de compras y confirma la compra.</td>
  </tr>
  <tr>
    <td valign="top">4</td>
    <td colspan="3" valign="top">El sistema actualiza el saldo de créditos del usuario y registra la compra en el historial de compras del usuario.</td>
  </tr>
  <tr>
    <td valign="top">Postcondición</td>
    <td colspan="4" valign="top">El Usuario ha realizado la compra de los productos seleccionados y su saldo de créditos ha sido actualizado.</td>
  </tr>
  <tr>
    <td rowspan="3" valign="top">Excepciones</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El usuario no tiene suficientes créditos para realizar la compra.</td>
  </tr>
  <tr>
    <td valign="top">Comentario</td>
    <td colspan="4" valign="top"></td>
  </tr>
</table>


<a name="_heading=h.lnxbz9"></a>Leer Foro

<table>
  <tr>
    <th valign="top">Caso de Uso</th>
    <th colspan="4" valign="top">Leer Foro</th>
  </tr>
  <tr>
    <td valign="top">Dependencias</td>
    <td colspan="4" valign="top">El usuario ha iniciado sesión como Navegante, Usuario Estándar o Administrador.</td>
  </tr>
  <tr>
    <td valign="top">Precondición</td>
    <td colspan="4" valign="top">El usuario desea acceder al foro para leer los mensajes publicados.</td>
  </tr>
  <tr>
    <td valign="top">Descripción</td>
    <td colspan="4" valign="top">El usuario puede acceder al foro para leer todos los mensajes publicados por otros usuarios y administradores. Los mensajes estarán organizados en diferentes hilos de discusión y se mostrará la fecha y el autor de cada mensaje.</td>
  </tr>
  <tr>
    <td rowspan="3" valign="top">Secuencia Normal</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">1</td>
    <td colspan="3" valign="top">El usuario navega a la sección del foro en la web de Let's Rol.</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El sistema muestra todos los mensajes publicados en el foro, organizados por hilos de discusión y con la información del autor y la fecha de publicación.</td>
  </tr>
  <tr>
    <td valign="top">Postcondición</td>
    <td colspan="4" valign="top">El Usuario ha accedido al foro y ha leído los mensajes publicados.</td>
  </tr>
  <tr>
    <td valign="top">Comentario</td>
    <td colspan="4" valign="top"></td>
  </tr>
</table>

<a name="_heading=h.lnxbz9"></a>Escribir en el Foro

<table>
  <tr>
    <th valign="top">Caso de Uso</th>
    <th colspan="4" valign="top">Escribir en el Foro</th>
  </tr>
  <tr>
    <td valign="top">Dependencias</td>
    <td colspan="4" valign="top">El usuario ha iniciado sesión como Usuario Estándar o Administrador.</td>
  </tr>
  <tr>
    <td valign="top">Precondición</td>
    <td colspan="4" valign="top">El usuario desea participar en el foro y escribir un nuevo mensaje.</td>
  </tr>
  <tr>
    <td valign="top">Descripción</td>
    <td colspan="4" valign="top">El usuario puede escribir un nuevo mensaje en el foro y publicarlo para que otros usuarios y administradores puedan leerlo y responder.</td>
  </tr>
  <tr>
    <td rowspan="3" valign="top">Secuencia Normal</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">1</td>
    <td colspan="3" valign="top">El usuario navega a la sección del foro en la web de Let's Rol.</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El usuario selecciona la opción "Escribir nuevo mensaje" y accede al formulario de redacción.</td>
  </tr>
  <tr>
    <td valign="top"></td>
    <td valign="top">3</td>
    <td colspan="3" valign="top">El usuario redacta el contenido del mensaje y lo guarda como un nuevo hilo de discusión en el foro.</td>
  </tr>
  <tr>
    <td valign="top"></td>
    <td valign="top">4</td>
    <td colspan="3" valign="top">El sistema registra el mensaje en la base de datos y lo muestra en la sección del foro para que otros usuarios puedan leerlo.</td>
  </tr>
  <tr>
    <td valign="top">Postcondición</td>
    <td colspan="4" valign="top">El Usuario ha escrito y publicado un nuevo mensaje en el foro.</td>
  </tr>
  <tr>
    <td valign="top">Comentario</td>
    <td colspan="4" valign="top">Solo los Usuarios Estándar y Administradores pueden escribir mensajes en el foro.</td>
  </tr>
</table>

<a name="_heading=h.lnxbz9"></a>Modificar Productos de Tienda

<table>
  <tr>
    <th valign="top">Caso de Uso</th>
    <th colspan="4" valign="top">Modificar Productos de Tienda</th>
  </tr>
  <tr>
    <td valign="top">Dependencias</td>
    <td colspan="4" valign="top">El usuario ha iniciado sesión como Administrador.</td>
  </tr>
  <tr>
    <td valign="top">Precondición</td>
    <td colspan="4" valign="top">El Administrador desea agregar, eliminar o modificar productos en la tienda de la web.</td>
  </tr>
  <tr>
    <td valign="top">Descripción</td>
    <td colspan="4" valign="top">El Administrador tiene la capacidad de realizar cambios en el catálogo de productos de la tienda, incluyendo agregar nuevos productos, eliminar los existentes o actualizar sus detalles.</td>
  </tr>
  <tr>
    <td rowspan="5" valign="top">Secuencia Normal</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">1</td>
    <td colspan="3" valign="top">El Administrador navega a la sección de administración de la tienda en la web de Let's Rol.</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El Administrador selecciona la opción "Modificar Productos" y accede al listado de productos disponibles en la tienda.</td>
  </tr>
  <tr>
    <td valign="top">3</td>
    <td colspan="3" valign="top">El Administrador elige entre agregar un nuevo producto, eliminar uno existente o actualizar los detalles de un producto existente.</td>
  </tr>
  <tr>
    <td valign="top"></td>
    <td valign="top">4</td>
    <td colspan="3" valign="top">El Administrador realiza los cambios deseados y guarda los resultados en la base de datos.</td>
  </tr>
  <tr>
    <td valign="top">Postcondición</td>
    <td colspan="4" valign="top">Los cambios realizados en la tienda de productos han sido registrados en la base de datos y reflejados en la web.</td>
  </tr>
  <tr>
    <td rowspan="3" valign="top">Excepciones</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">Si el Administrador encuentra que un producto ha sido descontinuado o ya no está disponible, puede eliminarlo de la lista de productos.</td>
  </tr>
  <tr>
    <td valign="top">3</td>
    <td colspan="3" valign="top">Si el Administrador encuentra que un producto necesita actualizaciones o cambios en sus detalles (como precio, cantidad en stock, etc.), puede realizar esas modificaciones y guardar los cambios.</td>
  </tr>
  <tr>
    <td valign="top">Comentario</td>
    <td colspan="4" valign="top">Solo los Administradores tienen acceso para modificar los productos de la tienda.</td>
  </tr>
</table>

<a name="_heading=h.lnxbz9"></a>Habilitar/Deshabilitar Modos de Juego

<table>
  <tr>
    <th valign="top">Caso de Uso</th>
    <th colspan="4" valign="top">Habilitar/Deshabilitar Modos de Juego</th>
  </tr>
  <tr>
    <td valign="top">Dependencias</td>
    <td colspan="4" valign="top">El usuario ha iniciado sesión como Administrador.</td>
  </tr>
  <tr>
    <td valign="top">Precondición</td>
    <td colspan="4" valign="top">El Administrador desea gestionar los modos de juego disponibles en la web.</td>
  </tr>
  <tr>
    <td valign="top">Descripción</td>
    <td colspan="4" valign="top">El Administrador tiene la capacidad de habilitar o deshabilitar los modos de juego que la web permite gestionar. Esto puede ser útil cuando se están arreglando problemas técnicos de algún modo de juego o cuando se quiere introducir nuevos modos.</td>
  </tr>
  <tr>
    <td rowspan="4" valign="top">Secuencia Normal</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">1</td>
    <td colspan="3" valign="top">El Administrador navega a la sección de administración de modos de juego en la web de Let's Rol.</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">El Administrador selecciona el modo de juego que desea habilitar o deshabilitar.</td>
  </tr>
  <tr>
    <td valign="top"></td>
    <td valign="top">3</td>
    <td colspan="3" valign="top">El Administrador cambia el estado del modo de juego seleccionado entre "Habilitado" y "Deshabilitado" y guarda los cambios en la base de datos.</td>
  </tr>
  <tr>
    <td valign="top">Postcondición</td>
    <td colspan="4" valign="top">El estado del modo de juego seleccionado ha sido actualizado y reflejado en la web.</td>
  </tr>
  <tr>
    <td rowspan="2" valign="top">Excepciones</td>
    <td valign="top">Paso</td>
    <td colspan="3" valign="top">Acción</td>
  </tr>
  <tr>
    <td valign="top">2</td>
    <td colspan="3" valign="top">Si el Administrador encuentra que un modo de juego presenta problemas técnicos o no es adecuado para los usuarios, puede deshabilitarlo temporalmente hasta que se resuelvan los problemas.</td>
  </tr>
  <tr>
    <td valign="top">Comentario</td>
    <td colspan="4" valign="top">Solo los Administradores tienen acceso para habilitar o deshabilitar modos de juego.</td>
  </tr>
</table>