DROP TABLE IF EXISTS players;

CREATE TABLE players (
    id serial PRIMARY KEY, 
    playername varchar(20) NOT NULL UNIQUE,
    score INT NOT NULL,
);