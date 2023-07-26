¡Por supuesto! Aquí tienes el archivo unificado con los diferentes apartados separados con títulos de nivel 2:

## Modelo Relacional - Funciones Generales de la Web

### Tablas:

#### 1. Usuarios
| user_id (PK) | username  | email                | password_hash      | gender    | profile_picture | is_admin | registration_date |
   | ------------ | --------- | -------------------- | ------------------ | --------- | --------------- | -------- | ----------------- |
| ...          | ...       | ...                  | ...                | ...       | ...             | ...      | ...               |

#### 2. Productos
| product_id (PK) | name               | description                            | price  | stock_quantity | image_url        |
   | --------------- | ------------------ | -------------------------------------- | ------| -------------- | ----------------- |
| ...             | ...                | ...                                    | ...   | ...            | ...               |

#### 3. Compras
| purchase_id (PK) | user_id (FK - Usuarios) | purchase_date | total_amount |
   | ---------------- | ----------------------- | ------------- | ------------ |
| ...              | ...                     | ...           | ...          |

#### 4. Detalles de Compras
| detail_id (PK) | purchase_id (FK - Compras) | product_id (FK - Productos) | quantity | subtotal |
   | -------------- | -------------------------- | --------------------------- | -------- | -------- |
| ...            | ...                        | ...                         | ...      | ...      |

#### 5. Personajes Base
| id_base_character (PK) | id_user (FK - Usuarios) | name         | race   | description                                                | base_character_img |
   | ---------------------- | ----------------------- | ------------ | ------ | ---------------------------------------------------------- | ------------------ |
| ...                    | ...                     | ...          | ...    | ...                                                        | ...                |

#### 6. Juegos
| id_juego (PK) | nombre          | descripcion                                                                           |
   | ------------- | --------------- | ------------------------------------------------------------------------------------- |
| ...           | ...             | ...                                                                                   |

### Relaciones:

- La tabla **Compras** tiene una relación de uno a muchos con la tabla **Detalles de Compras**. Una compra puede tener varios detalles de compra, ya que puede contener múltiples productos diferentes.

- La tabla **Usuarios** tiene una relación uno a muchos con la tabla **Compras**. Un usuario puede realizar varias compras, pero cada compra está asociada a un único usuario.

- La tabla **Personajes Base** tiene una relación uno a muchos con la tabla **Usuarios**. Un usuario puede tener varios personajes base, pero cada personaje base está asociado a un único usuario.

### Descripción:

- La tabla **Usuarios** almacena información sobre los usuarios registrados en la plataforma. El campo **user_id** es la clave primaria que identifica de manera única a cada usuario. El campo **is_admin** se utiliza para determinar si un usuario es un administrador o no.

- La tabla **Productos** contiene los detalles de los productos disponibles en la tienda. El campo **product_id** es la clave primaria que identifica a cada producto.

- La tabla **Compras** registra la información de cada compra realizada por los usuarios. El campo **purchase_id** es la clave primaria de esta tabla. Cada compra está asociada a un usuario específico mediante el campo **user_id**.

- La tabla **Detalles de Compras** almacena los detalles específicos de cada producto comprado en una compra. El campo **detail_id** es la clave primaria de esta tabla, y los campos **purchase_id** y **product_id** son claves foráneas que hacen referencia a las tablas **Compras** y **Productos**, respectivamente.

- La tabla **Personajes Base** guarda la información de los personajes base creados por los usuarios. El campo **id_base_character** es la clave primaria que identifica de manera única a cada personaje base. El campo **id_user** es una clave foránea que referencia al **user_id** en la tabla **Usuarios**, indicando el usuario al que pertenece el personaje base.

- La tabla **Juegos** almacena los juegos disponibles en la web. El campo **id_juego** es la clave primaria que identifica de manera única a cada juego. Los campos **nombre** y **descripcion** contienen la información básica del juego, como su nombre y una breve descripción.

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
