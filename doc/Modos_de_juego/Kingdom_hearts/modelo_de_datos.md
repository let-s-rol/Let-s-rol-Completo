## Modelo Relacional - Base de Datos de Juegos en la Plataforma

### Tablas Generales:

#### 1. Users

| user_id (PK) | username | email | password_hash | gender | profile_picture | is_admin | registration_date |
|--------------|----------|-------|---------------|--------|-----------------|----------|-------------------|
| ...          | ...      | ...   | ...           | ...    | ...             | ...      | ...               |

#### 2. Base_Characters

| id_base_character (PK) | id_user (FK - Users) | name | race | description | base_character_img |
|------------------------|----------------------|------|------|-------------|--------------------|
| ...                    | ...                  | ...  | ...  | ...         | ...                |

#### 3. Chat

| id_chat (PK) | id_user (FK - Users) | id_run (FK - Runs) | text_chat |
|--------------|----------------------|--------------------|-----------|
| ...          | ...                  | ...                | ...       |

### Tablas Específicas del Juego Kingdom Hearts (KH):

#### 1. Games

| id_game (PK) | name | description |
|--------------|------|-------------|
| ...          | ...  | ...         |

#### 2. Cards_kh

| id_card_kh (PK) | id_game (FK - Games) | name | card_lvl | card_type | card_str | card_agi | card_mag |
|-----------------|----------------------|------|----------|-----------|----------|----------|----------|
| ...             | ...                  | ...  | ...      | ...       | ...      | ...      | ...      |

#### 3. Player_Characters_kh

| id_player_character_kh (PK) | id_base_character (FK - Base_Characters) | id_user (FK - Users) | id_run (FK - Runs_kh) | health_point | card_point | player_exp | player_lvl | player_str | player_agi | player_mag | player_init | platines | last_card (FK - Cards_kh) |
|-----------------------------|------------------------------------------|----------------------|-----------------------|--------------|------------|------------|------------|------------|------------|------------|-------------|----------|---------------------------|
| ...                         | ...                                      | ...                  | ...                   | ...          | ...        | ...        | ...        | ...        | ...        | ...        | ...         | ...      | ...                       |

#### 4. Card_Inventory_kh

| id_card_inventory_kh (PK) | id_player_character_kh (FK - Player_Characters_kh) | id_card_kh (FK - Cards_kh) | inventory_flag | desk_flag | used_flag | consumed_flag |
|---------------------------|----------------------------------------------------|----------------------------|----------------|-----------|-----------|---------------|
| ...                       | ...                                                | ...                        | ...            | ...       | ...       | ...           |

#### 5. Runs_kh

| id_run_kh (PK) | id_game (FK - Games) | run_name | run_description |
|----------------|----------------------|----------|-----------------|
| ...            | ...                  | ...      | ...             |

#### 6. Historial_kh

| id_historial_kh (PK) | id_run_kh (FK - Runs_kh) | eventos | estado_run |
|----------------------|--------------------------|---------|------------|
| ...                  | ...                      | ...     | ...        |

#### 7. Monsters_kh

| id_monster_kh (PK) | id_game (FK - Games) | monster_img |
|--------------------|----------------------|-------------|
| ...                | ...                  | ...         |

#### 8. Monsters_Run_kh

| id_monster_run_kh (PK) | id_monster_kh (FK - Monsters_kh) | id_run_kh (FK - Runs_kh) | monster_health | monster_ap | monster_init |
|------------------------|----------------------------------|--------------------------|----------------|------------|--------------|
| ...                    | ...                              | ...                      | ...            | ...        | ...          |

### Relaciones:

- La tabla **Player_Characters_kh** tiene una relación de muchos a uno con la tabla **Base_Characters**. Un personaje
  jugador puede estar asociado a un único personaje base.

- La tabla **Card_Inventory_kh** tiene una relación de muchos a uno con la tabla **Player_Characters_kh**. Cada tarjeta
  de inventario está asociada a un único personaje jugador.

- La tabla **Player_Characters_kh** tiene una relación de uno a uno con la tabla **Cards_kh**. El campo **last_card** en
  la tabla **Player_Characters_kh** hace referencia al campo **id_card_kh** en la tabla **Cards_kh** y representa la
  última tarjeta equipada por el personaje jugador.

- La tabla **Player_Characters_kh** tiene una relación de muchos a uno con la tabla **Users**. Cada personaje jugador
  está asociado a un único usuario.

- La tabla **Player_Characters_kh** tiene una relación de muchos a uno con la tabla **Runs_kh**. Cada personaje jugador
  puede estar asociado a una única carrera (partida).

- La tabla **Historial_kh** tiene una relación de muchos a uno con la tabla **Runs_kh**. Cada registro de historial está
  asociado a una única carrera (partida).

- La tabla **Chat** tiene una relación de muchos a uno con la tabla **Users**. Cada mensaje de chat está asociado a un
  único usuario.

- La tabla **Chat** tiene una relación de muchos a uno con la tabla **Runs**. Cada mensaje de chat está asociado a una
  única carrera (partida).

- La tabla **Monsters_Run_kh** tiene una relación de muchos a uno con la tabla **Monsters_kh**. Cada monstruo en una
  carrera está asociado a un único monstruo.

- La tabla **Monsters_Run_kh** tiene una relación de muchos a uno con la tabla **Runs_kh**. Cada monstruo en una carrera
  está asociado a una única carrera (partida).

### Ejemplos de tablas completas

#### Ejemplo de Tabla "Users":

| user_id (PK) | username | email             | password_hash  | gender    | profile_picture | is_admin | registration_date |
|--------------|----------|-------------------|----------------|-----------|-----------------|----------|-------------------|
| 1            | user1    | user1@example.com | [hashed_pass1] | Masculino | [profile_url1]  | false    | 2023-06-01        |
| 2            | user2    | user2@example.com | [hashed_pass2] | Femenino  | [profile_url2]  | false    | 2023-06-02        |
| 3            | user3    | user3@example.com | [hashed_pass3] | Masculino | [profile_url3]  | false    | 2023-06-03        |
| 4            | user4    | user4@example.com | [hashed_pass4] | Femenino  | [profile_url4]  | false    | 2023-06-04        |
| 5            | user5    | user5@example.com | [hashed_pass5] | Masculino | [profile_url5]  | false    | 2023-06-05        |

#### Ejemplo de Tabla "Base_Characters":

| id_base_character (PK) | id_user (FK - Users) | name      | race  | description                                       | base_character_img |
|------------------------|----------------------|-----------|-------|---------------------------------------------------|--------------------|
| 1                      | 1                    | Warrior   | Human | A brave warrior fighting for justice.             | [img_url1]         |
| 2                      | 2                    | Archer    | Elf   | A skilled archer living in mysterious forests.    | [img_url2]         |
| 3                      | 3                    | Dwarf     | Dwarf | A powerful warrior with an imposing beard.        | [img_url3]         |
| 4                      | 4                    | Sorceress | Human | A mysterious sorceress with arcane powers.        | [img_url4]         |
| 5                      | 5                    | Druid     | Elf   | A wise druid protecting nature and its creatures. | [img_url5]         |

#### Ejemplo de Tabla "Chat":

| id_chat (PK) | id_user (FK - Users) | id_run (FK - Runs) | text_chat                                    |
|--------------|----------------------|--------------------|----------------------------------------------|
| 1            | 1                    | 1                  | Hello, everyone! How's the quest going?      |
| 2            | 2                    | 1                  | Hi there! We encountered some monsters.      |
| 3            | 3                    | 2                  | I found a hidden treasure in the forest!     |
| 4            | 4                    | 2                  | Be careful, there are traps in the dungeon.  |
| 5            | 5                    | 3                  | Let's meet at the village for a celebration! |

#### Ejemplo de Tabla "Games":

| id_game (PK) | name           | description                                                                                                                   |
|--------------|----------------|-------------------------------------------------------------------------------------------------------------------------------|
| 1            | Kingdom Hearts | An action-adventure role-playing game based on a famous video game.                                                           |
| 2            | D&D            | Dungeons & Dragons is a classic role-playing game that allows players to immerse themselves in fantasy worlds and adventures. |
| 3            | Modular        | A modular role-playing game that allows Game Masters to create their own settings and share their roles with other players.   |

#### Ejemplo de Tabla "Cards_kh":

| id_card_kh (PK) | id_game (FK - Games) | name    | card_lvl | card_type | card_str | card_agi | card_mag |
|-----------------|----------------------|---------|----------|-----------|----------|----------|----------|
| 1               | 1                    | Fire    | 1        | Magic     | 5        | 3        | 8        |
| 2               | 1                    | Potion  | 1        | Healing   | 2        | 5        | 1        |
| 3               | 1                    | Thunder | 2        | Magic     | 7        | 4        | 10       |
| 4               | 1                    | Elixir  | 3        | Healing   | 4        | 9        | 2        |
| 5               | 1                    | Cure    | 1        | Healing   | 3        | 4        | 3        |

#### Ejemplo de Tabla "Player_Characters_kh":

| id_player_character_kh (PK) | id_base_character (FK - Base_Characters) | id_user (FK - Users) | id_run (FK - Runs_kh) | health_point | card_point | player_exp | player_lvl | player_str | player_agi | player_mag | player_init | platines | last_card (FK - Cards_kh) |
|-----------------------------|------------------------------------------|----------------------|-----------------------|--------------|------------|------------|------------|------------|------------|------------|-------------|----------|---------------------------|
| 1                           | 1                                        | 1                    | 1                     | 100          | 50         | 0          | 1          | 8          | 5          | 3          | 12          | 1000     | 2                         |
| 2                           | 2                                        | 2                    | 1                     | 90           | 60         | 150        | 2          | 5          | 8          | 1          | 10          | 500      | 4                         |
| 3                           | 3                                        | 3                    | 2                     | 120          | 45         | 300        | 3          | 7          | 6          | 2          | 8           | 750      | 1                         |
| 4                           | 4                                        | 4                    | 2                     | 80           | 70         | 450        | 4          | 4          | 9          | 3          | 14          | 250      | 3                         |
| 5                           | 5                                        | 5                    | 3                     | 110          | 55         | 600        | 5          | 6          | 3          | 4          | 11          | 1000     | 5                         |

