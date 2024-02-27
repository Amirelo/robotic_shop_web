DROP DATABASE IF EXISTS ROBOTIC_SHOP;
CREATE DATABASE IF NOT EXISTS ROBOTIC_SHOP;
USE ROBOTIC_SHOP;

CREATE TABLE IF NOT EXISTS tbl_categories(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    IMAGE VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS tbl_products(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    image VARCHAR(255),
    price INTEGER NOT NULL,
    quantity INTEGER,
    sold INTEGER,
    totalRating INTEGER,
    categoryID INTEGER
);

ALTER TABLE tbl_products ADD CONSTRAINT FK_PRODUCTCATEGORY FOREIGN KEY (categoryID) REFERENCES tbl_products(id);

INSERT INTO tbl_categories(name) VALUES 
("Batteries"), 
("Charger"), 
("Wiring"),
("Cables"),
("Connectors"),
("Data communication"),
("Input devices"),
("Data storage"),
("Electronic components"),
("Adapters/Converters"),
("LCD and display"),
("Lighting component"),
("Motors and Actuators"), 
("Microcontrollers"), 
("Sensors");

INSERT INTO tbl_products(name, description, image, price, quantity, sold, totalRating, categoryID) VALUES 
("Battery Holder - 6 x AA", "Plastic holder use for standard AA battery\nNumber of cell: 6\nDouble sided\nSold individually", "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg", 25000, 140, 46, 4.3, 1);