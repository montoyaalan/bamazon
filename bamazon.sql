-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (
  -- Makes a numeric column called "item_id" which cannot contain null --
  --unique ID for each product
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "product_name" which cannot contain null --
  --name of product--
  product_name VARCHAR(100) NOT NULL,
  -- Makes a string column called "department_name" which cannot contain null --
  department_name VARCHAR(100) NOT NULL,
  -- Makes an decimal column called "price" which cannot contain null --
  --the cost to customer--
  price DECIMAL(10,2) NOT NULL,
--how much of the product is available in the store--
  stock_quantity INTEGER(100),

  PRIMARY KEY (item_id)

);