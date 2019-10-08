//what is the purpose of a function.



currentItemPrice = 2.00;
currentItemQuantity = 10;

function totalPrice(price, quantity){
   var total = (price *quantity );
   console.log("Thank you for shopping at felicia's fruit stand");
   return total;

}

console.log(totalPrice(currentItemPrice, currentItemQuantity));