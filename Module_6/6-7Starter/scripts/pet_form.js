"use strict";

window.addEventListener("load", function() {
    // Start by setting initial values of elements
    initElemVals();

    // Add event handlers
    this.document.getElementById("weight").oninput = updateSize;
    this.document.getElementById("days").oninput = updateBoarding;
    this.document.getElementById("sing").onclick = updateSing;
    this.document.getElementById("cute").onclick = updateCute;
    this.document.getElementById("trick").onclick = updateTrick;
});

function initElemVals() {
    // Update all the values
    updateSing();
    updateCute();
    updateTrick();
    updateSize();
    updateBoarding();
    updateTotal();

    // Hide div elements until corresponding boxes are checked
    if(!document.getElementById("sing").checked) {
        document.getElementById("singAdd").setAttribute("class", "hidden");
    }
    if(!document.getElementById("cute").checked) {
        document.getElementById("cuteAdd").setAttribute("class", "hidden");
    }
    if(!document.getElementById("trick").checked) {
        document.getElementById("trickAdd").setAttribute("class", "hidden");
    }
}

function updateSize() {
    //Find the kennel size based on pet weight
    var petWeight = parseInt(document.getElementById("weight").value);
    var kennelSize;

    // Set the kennelSize value to text based on petWeight
    if(petWeight <= 4) {
        kennelSize = "mini";
    }
    else if(petWeight > 4 && petWeight <= 12) {
        kennelSize = "small";
    }
    else if(petWeight > 12 && petWeight <= 50) {
        kennelSize = "medium";
    }
    else if(petWeight > 50) {
        kennelSize = "large";
    }
    else {
        kennelSize = "";
    }

    // Set the value of the size element to the valuse of kennelSize
    document.getElementById("size").value = kennelSize;
}

function updateBoarding() {
    // Get the number of boarding days from the days element
    var days = parseInt(document.getElementById("days").value);
    var boardFee;
    
    // Calculate the boarding fee based on the number of days requested
    if(days >= 0) {
        boardFee = (days * 19.99).toFixed(2);
    }
    else {
        boardFee = "0.00";
    }

    // Set the value of the boardingFee element to the value of boardFee
    document.getElementById("boardingFee").value = boardFee;
    // Update the totals at the bottom of the page
    updateTotal();
}

function updateTotal() {
    var regCost = 0.00;
    var numEvents = 0.00;
    var totalCost = 0.00;

    // Set the boardingCost value from boardingFee
    var boardCost = parseFloat(document.getElementById("boardingFee").value);
    var boardVar
    if(boardCost === "") {
        boardVar = 0;
    }
    else {
        boardVar = boardCost;
    }
    document.getElementById("boardingCost").value = boardVar.toFixed(2);

    // Calculate the number of events selected
    if(document.getElementById("sing").checked) {
        numEvents++;
    }
    if(document.getElementById("cute").checked) {
        numEvents++;
    }
    if(document.getElementById("trick").checked) {
        numEvents++;
    }

    // Calculate and display the cost of registering for the chosen events
    regCost = parseFloat((numEvents * 120.00)).toFixed(2);
    document.getElementById("registrationCost").value = regCost;

    // Calculate and display the total cost at the bottom of the page
    totalCost = parseFloat(boardCost) + parseFloat(regCost);
    document.getElementById("totalCost").value = totalCost.toFixed(2);
}

function updateSing() {
    // Display the singAdd div if the sing checkbox is checked and hide it if not
    if(document.getElementById("sing").checked) {
        document.getElementById("singAdd").setAttribute("class", "unhidden");
    }
    else {
        document.getElementById("singAdd").setAttribute("class", "hidden");
    }
    // Update the total values
    updateTotal();
}

function updateCute() {
    // Display the cuteAdd div if the cute checkbox is checked and hide it if not
    if(document.getElementById("cute").checked) {
        document.getElementById("cuteAdd").setAttribute("class", "unhidden");
    }
    else {
        document.getElementById("cuteAdd").setAttribute("class", "hidden");
    }
    // Update the total values
    updateTotal();
}

function updateTrick() {
    // Display the trickAdd div if the trick checkbox is checked and hide it if not
    if(document.getElementById("trick").checked) {
        document.getElementById("trickAdd").setAttribute("class", "unhidden");
    }
    else {
        document.getElementById("trickAdd").setAttribute("class", "hidden");
    }
    // Update the total values
    updateTotal();
}