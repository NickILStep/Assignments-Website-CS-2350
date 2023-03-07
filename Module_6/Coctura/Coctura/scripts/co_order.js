"use strict";

/*

   Order Form Script
   
   Author: Nicholas Stephenson
   Date:   11/24/2021
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/
window.addEventListener("load", function() {
   var orderForm = document.forms.orderForm;
   orderForm.elements.orderDate.value = new Date().toDateString();
   orderForm.elements.model.focus();

   // Calculate the cost of the order
   calcOrder();

   // Respond to any change events
   orderForm.elements.model.onchange = calcOrder;
   orderForm.elements.qty.onchange = calcOrder;
   
   var planOptions = document.querySelectorAll("input[name='protection']");
   for(var i = 0; i < planOptions.length; i++) {
      planOptions[i].onclick = calcOrder;
   }
});

function calcOrder() {
   var orderForm = document.forms.orderForm;

   // Calculate initial cost of order
   var mIndex = orderForm.elements.model.selectedIndex;
   var mCost = orderForm.elements.model.options[mIndex].value;
   var qIndex = orderForm.elements.qty.selectedIndex;
   var quantity = orderForm.elements.qty[qIndex].value;

   // Initial cost = model cost * qty
   var initialCost = parseFloat(mCost * quantity);
   orderForm.elements.initialCost.value = formatUSACurrency(initialCost);

   // Retreive the user's protection plan
   var pCost = parseFloat(document.querySelector("input[name='protection']:checked").value);
   orderForm.elements.protectionCost.value = formatNumber(pCost, 2);

   // Subtotal
   orderForm.elements.subtotal.value = formatNumber(initialCost + pCost, 2);

   // Sales tax
   var salesTax = parseFloat(0.05 * (initialCost + pCost));
   orderForm.elements.salesTax.value = formatNumber(salesTax, 2);

   // Total cost
   var totalCost = parseFloat(initialCost + pCost + salesTax);
   orderForm.elements.totalCost.value = formatUSACurrency(totalCost);

   // Store the text details into the hidden fields
   orderForm.elements.modelName.value = orderForm.elements.model.options[mIndex].text;
   orderForm.elements.protectionName.value = document.querySelector("input[name='protection']:checked").nextSibling.nodeValue;
}

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
   });
}

function formatUSACurrency(val) {
   return val.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
   });
}