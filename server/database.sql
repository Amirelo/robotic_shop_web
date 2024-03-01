DROP DATABASE IF EXISTS ROBOTIC_SHOP;
CREATE DATABASE IF NOT EXISTS ROBOTIC_SHOP;
USE ROBOTIC_SHOP;

CREATE TABLE IF NOT EXISTS tbl_collections(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS tbl_brands(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255)
)

CREATE TABLE IF NOT EXISTS tbl_products(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    price INTEGER NOT NULL,
    quantity INTEGER,
    sold INTEGER,
    totalRating INTEGER,
    categoryID INTEGER
);

CREATE TABLE IF NOT EXISTS tbl_product_infos(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(255),
    weight FLOAT,
    dimensions VARCHAR(255),
    warranty FLOAT,
    paragraphLink VARCHAR(255)
);

ALTER TABLE tbl_products ADD CONSTRAINT FK_PRODUCTCATEGORY FOREIGN KEY (categoryID) REFERENCES tbl_products(id);

INSERT INTO tbl_collections(name, image) VALUES 
("Robot Parts", "https://images.pexels.com/photos/1084213/pexels-photo-1084213.jpeg")
("Kits", "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg")
("Consumer Robots", "https://images.pexels.com/photos/4107244/pexels-photo-4107244.jpeg"),

INSERT INTO tbl_products(name, description, image, price, quantity, sold, totalRating, categoryID) VALUES 
("Test cleaner", "Great cleaner", "https://images.pexels.com/photos/844874/pexels-photo-844874.jpeg", 1350000, 20, 46, 4.3, 1);