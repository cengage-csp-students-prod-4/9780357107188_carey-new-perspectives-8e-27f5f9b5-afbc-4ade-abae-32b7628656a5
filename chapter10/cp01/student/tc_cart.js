"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Alissa Burnett 
   Date:   11/23/2026
   
   Filename: tc_cart.js
	
*/

// Initialize cartHTML with the opening table tag and table header row
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// Loop through the items array to build table rows dynamically
for (var i = 0; i < item.length; i++) {
   cartHTML += "<tr><td>" + item[i] + "</td>";
   cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";
   
   // Calculate cost for the current item and add it to the running order total
   var itemCost = itemPrice[i] * itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td></tr>";
   orderTotal += itemCost;
}

// Append the subtotal row and closing table tag to cartHTML
cartHTML += "<tr><td colspan=\"4\">Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

// Apply the completed cartHTML string to the innerHTML of the cart div
document.getElementById("cart").innerHTML = cartHTML;