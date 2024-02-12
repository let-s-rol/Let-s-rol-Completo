Aquí tienes la documentación completa con todos los cambios aplicados:

## Modelo Relacional - Funciones Generales de la Web

### Tablas:

#### 1. Usuarios
| user_id (PK) | username | email | password_hash | gender | profile_picture | is_admin | registration_date |
|--------------|----------|-------|---------------|--------|-----------------|----------|-------------------|
| ...          | ...      | ...   | ...           | ...    | ...             | ...      | ...               |

#### 2. Productos
| product_id (PK) | name | description | price | stock_quantity | image_url |
|-----------------|------|-------------|-------|----------------|-----------|
| ...             | ...  | ...         | ...   | ...            | ...       |

#### 3. Compras
| purchase_id (PK) | user_id (FK - Usuarios) | purchase_date | total_amount |
|------------------|-------------------------|---------------|--------------|
| ...              | ...                     | ...           | ...          |

#### 4. Detalles de Compras
| detail_id (PK) | purchase_id (FK - Compras) | product_id (FK - Productos) | quantity | subtotal |
|----------------|----------------------------|-----------------------------|----------|----------|
| ...            | ...                        | ...                         | ...      | ...      |

#### 5. Personajes Base
| id_base_character (PK) | id_user (FK - Usuarios) | name | race | description | base_character_img |
|------------------------|-------------------------|------|------|-------------|--------------------|
| ...                    | ...                     | ...  | ...  | ...         | ...                |

#### 6. Juegos
| id_juego (PK) | nombre | descripcion |
|---------------|--------|-------------|
| ...           | ...    | ...         |

#### 7. Atributos de Personajes
| attribute_id (PK) | id_base_character (FK - Personajes Base) | life | sword_damage | magic_damage |
|-------------------|-------------------------------------------|------|--------------|--------------|
| ...               | ...                                       | ...  | ...          | ...          |

#### 8. Inventario de Personajes
| inventory_id (PK) | id_user (FK - Usuarios) | item_name | quantity |
|-------------------|--------------------------|-----------|----------|
| ...               | ...                      | ...       | ...      |

#### 9. Localizaciones y Escenarios
| location_id (PK) | name       | description | image_url |
|------------------|------------|-------------|-----------|
| ...              | ...        | ...         | ...       |

#### 10. Misiones o Tareas
| mission_id (PK) | name       | description | creator_npc_id (FK - NPCs) |
|-----------------|------------|-------------|-----------------------------|
| ...             | ...        | ...         | ...                         |

#### 11. NPC (Personajes no jugadores)
| npc_id (PK) | name       | description | image_url |
|-------------|------------|-------------|-----------|
| ...         | ...        | ...         | ...       |

### Relaciones:

- La tabla **Compras** tiene una relación de uno a muchos con la tabla **Detalles de Compras**. Una compra puede tener varios detalles de compra, ya que puede contener múltiples productos diferentes.

- La tabla **Usuarios** tiene una relación uno a muchos con la tabla **Compras**. Un usuario puede realizar varias compras, pero cada compra está asociada a un único usuario.

- La tabla **Personajes Base** tiene una relación uno a muchos con la tabla **Usuarios**. Un usuario puede tener varios personajes base, pero cada personaje base está asociado a un único usuario.

- La tabla **Atributos de Personajes** está relacionada de manera uno a uno con la tabla **Personajes Base**, proporcionando información detallada sobre las estadísticas de vida, daño de espada y daño de magia de cada personaje base.

- La tabla **Misiones o Tareas** tiene una relación de muchos a uno con la tabla **NPCs**, indicando qué NPC creó la misión o tarea.

### Descripción:

- La tabla **Usuarios** almacena información sobre los usuarios registrados en la plataforma. El campo **user_id** es la clave primaria que identifica de manera única a cada usuario. El campo **is_admin** se utiliza para determinar si un usuario es un administrador o no.

- La tabla **Productos** contiene los detalles de los productos disponibles en la tienda. El campo **product_id** es la clave primaria que identifica a cada producto.

- La tabla **Compras** registra la información de cada compra realizada por los usuarios. El campo **purchase_id** es la clave primaria de esta tabla. Cada compra está asociada a un usuario específico mediante el campo **user_id**.

- La tabla **Detalles de Compras** almacena los detalles específicos de cada producto comprado en una compra. El campo **detail_id** es la clave primaria de esta tabla, y los campos **purchase_id** y **product_id** son claves foráneas que hacen referencia a las tablas **Compras** y **Productos**, respectivamente.

- La tabla **Personajes Base** guarda la información de los personajes base creados por los usuarios. El campo **id_base_character** es la clave primaria que identifica de manera única a cada personaje base. El campo **id_user** es una clave foránea que referencia al **user_id** en la tabla **Usuarios**, indicando el usuario al que pertenece el personaje base.

- La tabla **Juegos** almacena los juegos disponibles en la web. El campo **id_juego** es la clave primaria que identifica de manera única a cada juego. Los campos **nombre** y **descripcion** contienen la información básica del juego, como su nombre y una breve descripción.

- La tabla **Atributos de Personajes** proporciona información detallada sobre las estadísticas de vida, daño de espada y daño de magia de cada personaje base.

- La tabla **Inventario de Personajes** registra los elementos y objetos que cada usuario posee en el juego.

- La tabla **Localizaciones y Escenarios** contiene información sobre los diferentes lugares y escenarios dentro del mundo del juego, incluyendo imágenes para ayudar a visualizarlos.

- La tabla **Misiones o Tareas** almacena las misiones o tareas que los usuarios pueden realizar en el juego, junto con quién las creó.

- La tabla **NPCs (Personajes no jugadores)** permite definir y gestionar NPCs que pueden interactuar con los jugadores, proporcionar misiones y tareas, vender objetos, etc.

### Tabla de Valores por Defecto

Tabla: Usuarios

| user_id (PK) | username | email             | password_hash     | gender    | profile_picture | is_admin | registration_date |
|--------------|----------|-------------------|-------------------|-----------|-----------------|----------|-------------------|
| 1            | user1    | user1@example.com | [hashed_password] | Masculino | [image_url]     | false    | 2023-06-01        |
| 2            | user2    | user2@example.com | [hashed_password] | Femenino  | [image_url]     | false    | 2023-06-10        |
| 3            | user3    | user3@example.com | [hashed_password] | Masculino | [image_url]     | false    | 2023-06-15        |
| 4            | user4    | user4@example.com | [hashed_password] | Femenino  | [image_url]     | false    | 2023-06-20        |
| 5            | user5    | user5@example.com | [hashed_password] | Masculino | [image_url]     | false    | 2023-06-25        |

Tabla: Productos

| product_id (PK) | name       | description                | price | stock_quantity | image_url   |
|-----------------|------------|----------------------------|-------|----------------|-------------|
| 1               | Producto 1 | Descripción del producto 1 | 19.99 | 50             | [image_url] |
| 2               | Producto 2 | Descripción del producto 2 | 29.99 | 25             | [image_url] |
| 3               | Producto 3 | Descripción del producto 3 | 9.99  | 100            | [image_url] |
| 4               | Producto 4 | Descripción del producto 4 | 14.99 | 75             | [image_url] |
| 5               | Producto 5 | Descripción del producto 5 | 39.99 | 10             | [image_url] |

Tabla: Compras

| purchase_id (PK) | user_id (FK - Usuarios) | purchase_date | total_amount |
|------------------|-------------------------|---------------|--------------|
| 1                | 1                       | 2023-07-15    | 25.99        |
| 2                | 2                       | 2023-07-20    | 37.50        |
| 3                | 3                       | 2023-07-22    | 15.75        |
| 4                | 4                       | 2023-07-25    | 12.00        |
| 5                | 5                       | 2023-07-28    | 9.99         |

Tabla: Detalles de Compras

| detail_id (PK) | purchase_id (FK - Compras) | product_id (FK - Productos) | quantity | subtotal |
|----------------|----------------------------|-----------------------------|----------|----------|
| 1              | 1                          | 1                           | 2        | 39.98    |
| 2              | 2                          | 2                           | 1        | 29.99    |
| 3              | 3                          | 3                           | 3        | 29.97    |
| 4              | 4                          | 4                           | 1        | 14.99    |
| 5              | 5                          | 5                           | 2        | 79.98    |

Tabla: Personajes Base

| id_base_character (PK) | id_user (FK - Usuarios) | name        | race   | description                                                | base_character_img |
|------------------------|-------------------------|-------------|--------|------------------------------------------------------------|--------------------|
| 1                      | 1                       | Personaje 1 | Humano | Un valiente guerrero que lucha por la justicia.            | [image_url]        |
| 2                      | 2                       | Personaje 2 | Elfo   | Un hábil arquero que vive en los bosques misteriosos.      | [image_url]        |
| 3                      | 3                       | Personaje 3 | Enano  | Un poderoso guerrero con una barba imponente.              | [image_url]        |
| 4                      | 4                       | Personaje 4 | Humano | Una hechicera misteriosa con poderes arcanos.              | [image_url]        |
| 5                      | 5                       | Personaje 5 | Elfo   | Un sabio druida que protege la naturaleza y sus criaturas. | [image_url]        |

Tabla: Juegos

| id_juego (PK) | nombre         | descripcion                                                                                                                 |
|---------------|----------------|-----------------------------------------------------------------------------------------------------------------------------|
| 1             | Kingdom Hearts | Juego de rol basado en un famoso videojuego de acción y aventura.                                                           |
| 2             | D&D            | Dungeons & Dragons es un juego de rol clásico que permite a los jugadores sumergirse en mundos de fantasía y aventura.      |
| 3             | Modular        | Juego de rol modular que permite a los Masters crear sus propias configuraciones y compartir sus roles con otros jugadores. |

Claro, aquí tienes las tablas con algunos valores por defecto para proporcionar un ejemplo:

### Tabla de Valores por Defecto

#### Tabla: Usuarios

| user_id (PK) | username | email             | password_hash     | gender    | profile_picture | is_admin | registration_date |
|--------------|----------|-------------------|-------------------|-----------|-----------------|----------|-------------------|
| 1            | user1    | user1@example.com | [hashed_password] | Masculino | [image_url]     | false    | 2023-06-01        |
| 2            | user2    | user2@example.com | [hashed_password] | Femenino  | [image_url]     | false    | 2023-06-10        |
| 3            | user3    | user3@example.com | [hashed_password] | Masculino | [image_url]     | false    | 2023-06-15        |
| 4            | user4    | user4@example.com | [hashed_password] | Femenino  | [image_url]     | false    | 2023-06-20        |
| 5            | user5    | user5@example.com | [hashed_password] | Masculino | [image_url]     | false    | 2023-06-25        |

#### Tabla: Productos

| product_id (PK) | name       | description                | price | stock_quantity | image_url |
|-----------------|------------|----------------------------|-------|----------------|-----------|
| 1               | Producto 1 | Descripción del producto 1 | 19.99 | 50             | [image_url] |
| 2               | Producto 2 | Descripción del producto 2 | 29.99 | 25             | [image_url] |
| 3               | Producto 3 | Descripción del producto 3 | 9.99  | 100            | [image_url] |
| 4               | Producto 4 | Descripción del producto 4 | 14.99 | 75             | [image_url] |
| 5               | Producto 5 | Descripción del producto 5 | 39.99 | 10             | [image_url] |

#### Tabla: Compras

| purchase_id (PK) | user_id (FK - Usuarios) | purchase_date | total_amount |
|------------------|-------------------------|---------------|--------------|
| 1                | 1                       | 2023-07-15    | 25.99        |
| 2                | 2                       | 2023-07-20    | 37.50        |
| 3                | 3                       | 2023-07-22    | 15.75        |
| 4                | 4                       | 2023-07-25    | 12.00        |
| 5                | 5                       | 2023-07-28    | 9.99         |

#### Tabla: Detalles de Compras

| detail_id (PK) | purchase_id (FK - Compras) | product_id (FK - Productos) | quantity | subtotal |
|----------------|----------------------------|-----------------------------|----------|----------|
| 1              | 1                          | 1                           | 2        | 39.98    |
| 2              | 2                          | 2                           | 1        | 29.99    |
| 3              | 3                          | 3                           | 3        | 29.97    |
| 4              | 4                          | 4                           | 1        | 14.99    |
| 5              | 5                          | 5                           | 2        | 79.98    |

#### Tabla: Personajes Base

| id_base_character (PK) | id_user (FK - Usuarios) | name        | race   | description                                                | base_character_img |
|------------------------|-------------------------|-------------|--------|------------------------------------------------------------|--------------------|
| 1                      | 1                       | Personaje 1 | Humano | Un valiente guerrero que lucha por la justicia.            | [image_url]        |
| 2                      | 2                       | Personaje 2 | Elfo   | Un hábil arquero que vive en los bosques misteriosos.      | [image_url]        |
| 3                      | 3                       | Personaje 3 | Enano  | Un poderoso guerrero con una barba imponente.              | [image_url]        |
| 4                      | 4                       | Personaje 4 | Humano | Una hechicera misteriosa con poderes arcanos.              | [image_url]        |
| 5                      | 5                       | Personaje 5 | Elfo   | Un sabio druida que protege la naturaleza y sus criaturas. | [image_url]        |

#### Tabla: Juegos

| id_juego (PK) | nombre         | descripcion                                                                                                                 |
|---------------|----------------|-----------------------------------------------------------------------------------------------------------------------------|
| 1             | Kingdom Hearts | Juego de rol basado en un famoso videojuego de acción y aventura.                                                           |
| 2             | D&D            | Dungeons & Dragons es un juego de rol clásico que permite a los jugadores sumergirse en mundos de fantasía y aventura.      |
| 3             | Modular        | Juego de rol modular que permite a los Masters crear sus propias configuraciones y compartir sus roles con otros jugadores. |

#### Tabla: Atributos de Personajes

| attribute_id (PK) | id_base_character (FK - Personajes Base) | life | sword_damage | magic_damage  |
|-------------------|-------------------------------------------|------|--------------|--------------|
| 1                 | 1                                         | 100  | 20           | 10           |
| 2                 | 2                                         | 80   | 30           | 5            |
| 3                 | 3                                         | 120  | 25           | 15           |
| 4                 | 4                                         | 90   | 15           | 25           |
| 5                 | 5                                         | 110  | 18           | 20           |

#### Tabla: Inventario de Personajes

| inventory_id (PK) | id_user (FK - Usuarios)  | item_name         | quantity |
|-------------------|--------------------------|-------------------|----------|
| 1                 | 1                        | Espada básica     | 1        |
| 2                 | 1                        | Poción de vida    | 3        |
| 3                 | 2                        | Arco básico       | 1        |
| 4                 | 3                        | Martillo de hierro| 1        |
| 5                 | 4                        | Libro de hechizos | 1        |

#### Tabla: Localizaciones y Escenarios

| location_id (PK) | name       | description                                                    | image_url   |
|------------------|------------|----------------------------------------------------------------|-------------|
| 1                | Ciudad     | Una bulliciosa ciudad llena de comerciantes y aventureros.     | [image_url] |
| 2                | Bosque     | Un vasto bosque lleno de criaturas mágicas y peligros ocultos. | [image_url] |
| 3                | Montaña    | Una imponente cordillera que esconde secretos antiguos.        | [image_url] |
| 4                | Mazmorra   | Una red de pasadizos subterráneos llenos de trampas y tesoros. | [image_url] |

#### Tabla: Misiones o Tareas

| mission_id (PK) | name                 | description                                                        | creator_npc_id (FK - NPCs) |
|-----------------|----------------------|--------------------------------------------------------------------|----------------------------|
| 1               | Rescate en el Bosque | Encuentra al explorador desaparecido y tráelo de vuelta.           | 1                          |
| 2               | Derrota al Dragón    | Salva el pueblo derrotando al temible dragón que lo aterroriza.    | 2                          |
| 3               | Tesoros Perdidos     | Encuentra los tesoros perdidos en la montaña y tráelos de vuelta.  | 3                          |
| 4               | Exploración de la Mazmorra | Adéntrate en la mazmorra y descubre sus secretos.            | 4                          |

#### Tabla: NPC (Personajes no jugadores)

| npc_id (PK) | name    | description                                                                | image_url   |
|-------------|------------|-------------------------------------------------------------------------|-------------|
| 1           | Explorador | Un valiente explorador en busca de tesoros perdidos.                    | [image_url] |
| 2           | Guardián del Pueblo | Un anciano sabio que protege al pueblo de los peligros.        | [image_url] |
| 3           | Guardian de la Montaña | Un enano robusto que custodia los tesoros de la montaña.    | [image_url] |
| 4           | Señor de la Mazmorra | Un brujo misterioso que controla la mazmorra y sus criaturas. | [image_url] |

