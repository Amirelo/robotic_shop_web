DROP DATABASE IF EXISTS ROBOTIC_SHOP;
CREATE DATABASE IF NOT EXISTS ROBOTIC_SHOP;
USE ROBOTIC_SHOP;

CREATE TABLE IF NOT EXISTS tbl_categories(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255)
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

INSERT INTO tbl_categories(name, image) VALUES 
("Robot Parts", "https://images.pexels.com/photos/1084213/pexels-photo-1084213.jpeg")
("Kits", "https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg")
("Consumer Robots", "https://images.pexels.com/photos/3616738/pexels-photo-3616738.jpeg"),
("Cables", "https://images.pexels.com/photos/415043/pexels-photo-415043.jpeg?");

INSERT INTO tbl_products(name, description, image, price, quantity, sold, totalRating, categoryID) VALUES 
("Battery Holder - 6 x AA", "Plastic holder use for standard AA battery\nNumber of cell: 6\nDouble sided\nSold individually", "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg", 25000, 140, 46, 4.3, 1);