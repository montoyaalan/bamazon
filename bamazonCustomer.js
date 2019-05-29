var inquirer = require("inquirer");
var mysql = require("mysql");
var Table =  require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

var showProducts = function(){
  var query = "SELECT * FROM products";
  connection.query(query, function(err, res) {
    if (err) throw err;
    var showTable = new Table ({
      head: ["Item ID", "Product Name", "Category", "Price", "Quantity"],
      colWidths: [10,25,25,10,14]
    });
    for (var i = 0; i < res.length; i++){
      showTable.push(
        [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
      );
    }
    console.log(showTable.toString());
    buyPrompt();
  });
}

function buyPrompt(){
  inquirer.prompt([
    {
      name: "ID",
      type: "input",
      message: "Enter the item ID you'd like to purchase.",
      filter: Number
    },
    {
      name: "Quantity",
      type: "input",
      message: "How many would you like to purchase?",
      filter: Number
    },
  ]).then(function(input){
    var idInput = input.ID;
    var quantityInput = input.Quantity;
    placeOrder(idInput, quantityInput);
  });
};

function placeOrder(ID, amtNeeded){
  connection.query("Select * FROM products WHERE item_id = " + ID, function(err,res){
    if(err){console.log(err)};
    if(amtNeeded <= res[0].stock_quantity){
      var totalPrice = res[0].price * amtNeeded;
      console.log("Your order is in stock!");
      console.log("Your total for " + amtNeeded + " " + res[0].product_name + " is " + totalPrice + ".");

      connection.query("UPDATE products SET stock_quantity =  " + (res[0].stock_quantity - amtNeeded) + " WHERE item_id = " + ID);
    } else {
      console.log("Sorry for the incovenience, we don't have enough of " + res[0].product_name + " in stock!");
    };
    showProducts();

  });

};

showProducts();
