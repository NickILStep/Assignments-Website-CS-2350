"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Review Assignment

   Author: Nicholas Stephenson
   Date:   11/17/2021

   Global Variables
   ================
   
   allCells
      References the TD cells within the Hitori table grid.   
      
   Function List
   =============

   startUp()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   switchPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   findErrors()
      Highlights the errors in the Hitori puzzle in a red font.
      
   showSolution()
      Shows the solution to the Hitori puzzle
    
   checkSolution()
      Checks the current user's puzzle to verify whether it contains
      the complete and correct solution.

   drawHitori(numbers, blocks, rating)
      Returns a text string of the HTML code to
      display a Hitori puzzle table based on the contents of
      the numbers, blocks, and rating parameters.
	
*/

// Global variables
var allCells;

// Function calls
startUp();


// Function declarations
// Set the layout of the puzzle grid
function startUp() {
   // Initialize to the first puzzle
   document.getElementById("puzzleTitle").innerHTML = "Puzzle 1";
   document.getElementById("puzzle").innerHTML = drawHitori(hitori1Numbers, hitori1Blocks, hitori1Rating);

   // Add event handlers to each cell of the grid
   var puzzleButtons = document.getElementsByClassName("puzzles");
   for(var i = 0; i < puzzleButtons.length; i++) {
      puzzleButtons[i].onclick = switchPuzzle;
   }

   // Set styles of the cells to hide solution
   setupPuzzle();

   // Add event handlers to the Check Solution and Show Solution buttons
   document.getElementById("check").onclick = findErrors;
   document.getElementById("solve").onclick = showSolution;
}

// Switch between puzzles
function switchPuzzle(e) {
   // Only perform actions if the user accepts the dialog box
   if(confirm("Your current progress will be lost! Continue anyway?")) {
      // Set the title text
      var puzzleID = e.target.id;
      document.getElementById("puzzleTitle").innerHTML = e.target.value;

      // Switch to a puzzle depending on the clicked button
      switch(puzzleID) {
         case "puzzle1" :
            document.getElementById("puzzle").innerHTML = drawHitori(hitori1Numbers, hitori1Blocks, hitori1Rating);
            break;
         case "puzzle2" :
            document.getElementById("puzzle").innerHTML = drawHitori(hitori2Numbers, hitori2Blocks, hitori2Rating);
            break;
         case "puzzle3" :
            document.getElementById("puzzle").innerHTML = drawHitori(hitori3Numbers, hitori3Blocks, hitori3Rating);
            break;
      }
      setupPuzzle();
   }
}

// Setup the puzzle to hide the solution
function setupPuzzle() {
   // Create an object set of all td elements in the table hitoriGrid
   allCells = document.querySelectorAll("table#hitoriGrid td");

   for(var i = 0; i < allCells.length; i++) {
      // Set initial cell styles
      allCells[i].style.backgroundColor = "rgb(255, 255, 255)";
      allCells[i].style.color = "rgb(0, 0, 0)";
      allCells[i].style.borderRadius = "0";

      // Add cell event listeners
      // Create variables for different styles
      var bgColor;
      var txtColor;
      var borderRadius;

      // Add an event listener to each cell to change styles on click
      allCells[i].addEventListener("mousedown",
         function(e) {
            // Determine values for the style variables depending on which key is being pressed at time of click
            if(e.shiftKey) {
               bgColor = "white";
               txtColor = "black";
               borderRadius = "0";
            }
            else if(e.altKey) {
               bgColor = "black";
               txtColor = "white";
               borderRadius = "0";
            }
            else {
               bgColor = "rgb(101, 101, 101)";
               txtColor = "white";
               borderRadius = "50%";
            }

            // Apply the style values to the clicked cell
            e.target.style.backgroundColor = bgColor;
            e.target.style.color = txtColor;
            e.target.style.borderRadius = borderRadius;

            // Prevent default action to avoid selecting text when dragging
            e.preventDefault();
         }
      );

      // Add an event listener to all cells to change cursor
      allCells[i].addEventListener("mouseover",
         function(e) {
            // Create variable for cursor image address
            var cursorStyle;

            // Set the cursorStyle variable to a different image depending on which keyboard button is pressed
            if(e.shiftKey) {
               cursorStyle = "url(images/jpf_eraser.png), alias";
            }
            else if(e.altKey) {
               cursorStyle = "url(images/jpf_block.png), cell";
            }
            else {
               cursorStyle = "url(images/jpf_circle.png), pointer";
            }

            // Set the cursor to the selected image
            e.target.style.cursor = cursorStyle;
         }
      );

      allCells[i].addEventListener("mouseup", checkSolution);
   }
}

// Highlight incorrect cells
function findErrors() {
   for(var i = 0; i < allCells.length; i++) {
      if((allCells[i].className === "blocks" && allCells[i].style.backgroundColor === "rgb(101, 101, 101)") || (allCells[i].className === "circles" && allCells[i].style.backgroundColor === "black")) {
         allCells[i].style.color = "red";
      }
   }

   // Reset the cells after 1 second
   setTimeout(
      function() {
         for(var i = 0; i < allCells.length; i++) {
            // Only change the current cell's font color back to white if it is currently red
            if(allCells[i].style.color === "red") {
               allCells[i].style.color = "white";
            }
         }
      }, 1000
   );
}


         
/* ================================================================= */

function checkSolution() {
   /* Set the initial solved state of the puzzle to true */
   var solved = true;

   /* Loop through the puzzle cells, exiting when an incorrect
      cell is found, setting the solved variable to false */

   for (var i = 0; i < allCells.length; i++) {
      var cellColor = allCells[i].style.backgroundColor;
      var cellClass = allCells[i].className;

      /* A cell is incorrect if it is in the block class and is not black
         or in the circle class and is not white */
      if ( (cellClass == "blocks" && cellColor !== "black") || 
           (cellClass == "circles" && cellColor !== "rgb(101, 101, 101)")) {
         solved = false;
         break;
      }
   }

   /* If solved is still true after the loop, display an alert box */
   if (solved) alert("Congratulations! You solved the puzzle!");
}

function showSolution () {
   for (var i = 0; i < allCells.length; i++) {
      allCells[i].style.color = "";
      allCells[i].style.backgroundColor = "";
      allCells[i].style.borderRadius = "";
   };   
}

function drawHitori(numbers, blocks, rating) {

   /* Initial HTML String for the Hitori Puzzle */
   var htmlString = "";

   /* numbers is a multidimensional array containing the
      Hitori numbers; blocks is a corresponding 
      multidimensional array containing the location of the
      blocks which are indicated by the # character.
      Non-blocking cells are indicated by a blank character.
  */

   /* Create a Web table with the id, hitoriGrid, containing
      the numeric values. Blocks cells have the class name,
      blocks. Non-blocking cells have the class name, circles
  */

   var totalRows = numbers.length;
   var totalCols = numbers[0].length;
   htmlString = "<table id='hitoriGrid'>";
   htmlString += "<caption>" + rating + "</caption>";
   

   for (var i = 0; i < totalRows; i++) {
      htmlString += "<tr>";

      for (var j = 0; j < totalCols; j++) {
         if (blocks[i][j] == "#") htmlString += "<td  class='blocks'>"
         else htmlString += "<td class='circles'>";

         htmlString += numbers[i][j];
         htmlString +="</td>";
      }

      htmlString += "</tr>";
   }

   htmlString += "</table>";

   return htmlString;
}