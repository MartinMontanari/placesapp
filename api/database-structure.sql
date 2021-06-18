CREATE DATABASE placesapp;

USE placesapp;

CREATE TABLE places(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY;
    title VARCHAR(255) NOT NULL;
    description TEXT NOT NULL;
    location VARCHAR(255) NOT NULL;
    openHours INT(5) NOT NULL;
    closedHours INT(5) NOT NULL;
    image_url TEXT;
    created_at TIMESTAMP DEFAULT CURRENT_TIME;
);

DESCRIBE places;