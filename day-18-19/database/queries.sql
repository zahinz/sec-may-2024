-- POSTGRESQL QUERIES

-- query time now
SELECT NOW();

-- check for current database
SELECT current_database();

-- check for current user
SELECT current_user;

-- ---------------------------------------------------------
-- DATA DEFINITION LANGUAGE (DDL)
-- ---------------------------------------------------------
-- create users table with id, username, email, and password
-- id is a serial type, primary key
-- username and email are unique
CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(255) UNIQUE,
    email varchar(255) UNIQUE,
    password varchar(255),
    created_at timestamp DEFAULT NOW()
);

-- create user table with id uuid
CREATE TABLE users_uuid (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username varchar(255) UNIQUE,
    email varchar(255) UNIQUE,
    password varchar(255),
    created_at timestamp DEFAULT NOW()
);
-- before running the above query, you need to install the uuid-ossp extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- delete users table
DROP TABLE users;

-- alter users table, add a new column date_of_birth
ALTER TABLE users ADD COLUMN date_of_birth date;

-- update username column to full_name
ALTER TABLE users RENAME COLUMN username TO full_name;


-- ---------------------------------------------------------
-- DATA MANIPULATION LANGUAGE (DML)
-- ---------------------------------------------------------
-- insert a new user
INSERT INTO users (username, email, password)
VALUES('zahinzul', 'zahinzul@mail.com', 'abcd5678');

-- list all users
SELECT * FROM users;

-- list all user only id, username, and email
SELECT id, username, email FROM users;

-- list users with spcific email
SELECT * FROM users WHERE email = 'zahin@mail.com';

-- update username of user with id 1
UPDATE users SET username = 'zahin' WHERE id = 1;

-- delete user with id 1
DELETE FROM users WHERE id = 1;

-- delete users rows and reset the serial id
TRUNCATE users RESTART IDENTITY;

-- count the number of users
SELECT COUNT(*) FROM users;

-- count the number of users which created_at is greater than 2021-01-01
SELECT COUNT(*) FROM users WHERE created_at > '2021-01-01';



-- ---------------------------------------------------------
-- ASSSIGNMENT
-- ---------------------------------------------------------
-- create a table todos with id, name, is_completes, created_by, created_at
-- found out the creation of relationship between table users and todos
-- create DML queries to insert, update, delete, and select data from todos table

CREATE TABLE todos (
    id serial PRIMARY KEY,
    name varchar(255),
    is_completed boolean DEFAULT false,
    created_by integer REFERENCES users(id),
    created_at timestamp DEFAULT NOW()
);

INSERT INTO todos (name, created_by)
VALUES('Learn SQL', 1);

UPDATE todos SET is_completed = true WHERE id = 1;

DELETE FROM todos WHERE id = 1;

SELECT * FROM todos WHERE created_by = 1;

-- join todo and users table
SELECT * from todos
JOIN users ON todos.created_by = users.id;

-- join users and todos table
select * from users
JOIN todos ON users.id = todos.created_by;

-- join todo and users table where email is 'zahin@mail.com'
SELECT * from todos
JOIN users ON todos.created_by = users.id
WHERE users.email = 'zahin@mail.com';

-- join todo and users table where email is 'zahin@mail.com' and select specific columns
SELECT todos.id, todos.name, todos.is_completed, todos.created_at, users.id from todos
JOIN users ON todos.created_by = users.id
WHERE users.email = 'zahin@mail.com';

-- join todo and users table where email is 'zahin@mail.com' and select specific columns with alias name for columns
SELECT todos.id AS todo_id, todos.name, todos.is_completed, todos.created_at, users.id AS user_id from todos
JOIN users ON todos.created_by = users.id
WHERE users.email = 'zahin@mail.com';

-- count the number of todos belongs to user with email 'zahin@mail.com'
SELECT COUNT(*) from todos
JOIN users ON todos.created_by = users.id
WHERE users.email = 'zahin@mail.com';

-- count the number of todos which is not completed
JOIN users ON todos.created_by = users.id
WHERE users.email = 'zahin@mail.com' AND is_completed = false;

-- count the number of completed and not completed todos in single query
SELECT * from todos
JOIN users ON todos.created_by = users.id
WHERE users.email = 'zahin@mail.com'
GROUP BY is_completed;

-- ADVANCE SQL QUERIES
-- if else condition in SQL
SELECT
todos.id,
todos.name,
    CASE
        WHEN is_completed = true THEN 'Completed'
        ELSE 'Not Completed'
    END AS status
FROM todos
JOIN users ON todos.created_by = users.id
WHERE users.email = 'zahin@mail.com'

-- count the number of completed and not completed todos in single query
SELECT 
    COUNT(CASE WHEN is_completed = true THEN 1 END) AS completed_todos,
    COUNT(CASE WHEN is_completed = false THEN 1 END) AS not_completed_todos
FROM todos
JOIN users ON todos.created_by = users.id
WHERE users.email = 'zahin@mail.com'

-- search todos with name contains 'LEARN' and case insensitive
SELECT * 
FROM todos
WHERE LOWER(name) LIKE LOWER('%LEARN%');

-- status data type status enum postponed, completed, inprogress
CREATE TABLE todos (
    id serial PRIMARY KEY,
    name varchar(255),
    status status_enum DEFAULT 'inprogress',
    created_by integer REFERENCES users(id),
    created_at timestamp DEFAULT NOW()
);

-- insert new column in todos table - trasaction status with transaction_enum type

-- declare transaction enum type
CREATE TYPE transaction_enum AS ENUM ('credit', 'debit', 'transfer', 'cashout');

-- insert new column in todos table - transaction status with transaction_enum type
ALTER TABLE todos ADD COLUMN transaction_status transaction_enum;

-- declare status enum type
CREATE TYPE status_enum AS ENUM ('postponed', 'completed', 'inprogress');

