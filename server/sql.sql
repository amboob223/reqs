CREATE DATABASE english;

CREATE TABLE greetings(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    hello VARCHAR(255)
);
CREATE SEQUENCE greetings_id_seq;

SELECT * FROM greetings;

-- this is what we used to fix the problem 
ALTER SEQUENCE greetings_id_seq RESTART WITH 1;
you can also use 
CREATE SEQUENCE greetings_id_seq START 1 INCREMENT 1;
