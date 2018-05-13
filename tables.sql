-- create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

-- create movies table
CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    rating DECIMAL,
    duration INTEGER,
    original_release DATE,
    img VARCHAR(500)
);

-- create bookmarks table
CREATE TABLE IF NOT EXISTS bookmarks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    movie_id INTEGER
);

-- create reviews table
CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    title VARCHAR(255),
    rating DECIMAL,
    feedback VARCHAR(500)
);

-- create seen table
CREATE TABLE IF NOT EXISTS seen (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    title VARCHAR(255)
);

-- create followers table
CREATE TABLE IF NOT EXISTS followers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    name VARCHAR(255)
);

-- create following table
CREATE TABLE IF NOT EXISTS following (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    name VARCHAR(255)
);