# bamazon
Homework for Week 12-MySQL

# Bamazon
Bamazon is a CRM that focuses on sales. It provides command-line interfaces for customers, managers, and supervisors.

## Technologies Used
- [x] ES7, Node, MySQL

## How to Run
To run Bamazon on Windows and Mac, you will need [Bash](https://git-scm.com/downloads/), [Node](https://nodejs.org/en/), [npm](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm), and [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

1. In Bash, type `git clone https://github.com/montoyaalan/bamazon.git` to download Bamazon.


2. Then, type `cd UT-Coding-Boot-Camp/homework/hw12; npm install` to download the required packages.

PHOTO ON HOW TO RUN

3. In MySQL Workbench, connect to `localhost:3306` and run `bamazon_schema.sql` then `bamazon_seeds.sql`.

4. Finally, in Bash, type `node bamazonCustomer.js` to log in as a customer, `node bamazonManager.js` as a manager, and `node bamazonSupervisor.js` as a supervisor.

PHOTO ON HOW TO RUN

## Demos - Customer

As a customer, you can check items (products) that are for sale and buy them.

To buy an item, enter the item ID and quantity. You will get the subtotal.

PHOTO

Note, you can buy an item only up to the stock quantity.

PHOTO

At the end, you can see all items that you purchased.


PHOTO

## Demos - Manager

As a manager, you can add new items and restock them.

### Add a New Product

To add an item, enter the department name (make a selection), item name, price, and stock quantity.

PHOTO

### View Products for Sale

Check items that are for sale.

PHOTO

### Add to Inventory

Let's stock more Until Dawn!

PHOTO

### View Low Inventory

Finally, you can check which items have fewer than 5 in stock.

PHOTO

## Demos - Supervisor

As a supervisor, you can add new departments and check their profits.

### Add a New Department

To add a department, enter the department name and overhead costs.

PHOTO

### View Department Sales

You can check the overhead costs, sales, and profits of each department.
