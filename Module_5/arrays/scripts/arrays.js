/*

Author Name: Nicholas Stephenson
Date: 10/31/2021
File Name: arrays.js

*/

// call the functions here
document.getElementById("family").innerHTML = famArray();
arraySelect();
sortArrays();
footerText();

// Part 1: create an array of family mambers and their relationships to me
function famArray () {
    // initialize arrays for family names and relationships
    var names = ["Suzanne", "James", "Laura", "Nate", "Lily", "Elena", "Wesley", "Carrie", "Hannah", "Jacob"];
    var relationships = ["Mother", "Father", "Sister", "Brother-In-Law", "Niece", "Niece", "Brother", "Sister-In-Law", "Sister", "Brother"];

    // create the beginning of the table code
    arrayHTML = "<table>\
                    <tr>\
                        <th>Name</th>\
                        <th>Relationship</th>\
                    </tr>";
    
    // loop through the arrays to add content to the table
    for(var i = 0; i < names.length; i++) {
        arrayHTML +=    "<tr>\
                            <td>" + names[i] + "</td>\
                            <td>" + relationships[i] + "</td>\
                        </tr>";
    }

    // close the table code and return it
    arrayHTML += "</table>";
    return arrayHTML;
}

// Part 2: select items from an array
function arraySelect() {
    // declare the empty emptyArray array and a list of colors to fill it with
    var emptyArray = [];
    var colorArray = ["red", "green", "purple", "brown", "yellow", "pink", "blue", "orange"];
    
    // add the colors to the emptyArray array
    for(var i = 0; i < colorArray.length; i++) {
        emptyArray.push(colorArray[i]);
    }

    // create an unordered list of all colors from the emptyArray array
    document.getElementById("allColors").innerHTML = unorderedList(emptyArray);

    // create an unordered list of all colors from the emptyArray array that start with the letter p
    // declare an empty array
    var pList = [];
    
    // loop theough the emptyArray array
    for(var color of emptyArray) {
        // check for values that start with the letter p
        if(color[0] === "p") {
            // add those values to the pList array
            pList.push(color);
        }
    }

    // create an unordered list out of the resulting pList array
    document.getElementById("pColors").innerHTML = unorderedList(pList);

    // create an unordered list of all colors from the emptyArray array that do not start with the letter b
    // declare an empty array
    var bList = [];

    // loop through the emptyArray array
    for(var color of emptyArray) {
        // check for values that don't start with the letter b
        if(color[0] != "b") {
            // add those values to the bList array
            bList.push(color);
        }
    }

    // create an unordered list out of the resulting bList array
    document.getElementById("nonBColors").innerHTML = unorderedList(bList);

    // create an unordered list of all colors from the emptyArray array that contain the letter n
    // declare an empty array
    var nList = [];

    // loop through the emptyArray array
    for(var color of emptyArray) {
        // loop through the letters of each value of the array
        for(var i = 0; i < color.length; i++) {
            // check if each letter is n
            if(color[i] === "n") {
                // once an n is found, add the current word to the nList array and break out of the for-loop
                nList.push(color);
                break;
            }
        }
    }

    // create an unordered list out of the resulting nList array
    document.getElementById("filterColors").innerHTML = unorderedList(nList);
}

// create an HTML unordered list string out of a given array
function unorderedList(arrayIn) {
    // declare a temporary string variable to store the unordered list in
    var tempUL = "<ul>";

    // loop through the given array and add a <li> object to tempUL for each item
    for(var arrayItem of arrayIn) {
        tempUL += "<li>" + arrayItem + "</li>";
    }

    // close off the unordered list and return it
    tempUL += "</ul>";
    return tempUL;
}

// Part 3: sort arrays
function sortArrays() {
    // declare the string and number arrays
    var stringArray = ["Bartholomew", "Fox", "Alphanumeric", "Turkey", "Germany", "Billy Eyelash", "String Theory", "Dingus", "Horizon", "Shrine", "Otter", "Watch", "Record", "Bowling", "Beer", "Chair", "Cube", "Dragon"];
    var numberArray = [7, 20, 4, 12, -21, 5, 80, 0, -23, 10284, 456, -419, 68, 666, -235415];

    // display the original arrays
    document.getElementById("twoArrays").innerHTML = arrayParagraph(stringArray) + arrayParagraph(numberArray);

    // sort the arrays using JS Array sort method
    stringArray.sort();
    numberArray.sort();

    // display the new sorted arrays
    document.getElementById("sortedArrays").innerHTML = arrayParagraph(stringArray) + arrayParagraph(numberArray);

    // sort the list of numbers with a comparison funciton
    numberArray.sort(function(a, b) {return a - b});
    document.getElementById("sortedNumberArray").innerHTML = arrayParagraph(numberArray);
}

// create a paragraph element from a given array
function arrayParagraph(arrayIn) {
    // create a string with an opening <p> tag
    var tempP = "<p>";

    // convert input array to a string and add to the tempP string
    tempP += arrayIn.toString();

    // add a closing </p> tag and return the string
    tempP += "</p>";
    return tempP;
}

// Part 4: add dates to the footer
function footerText() {
    // create variables for the last modified date and current date
    var docMod = document.lastModified;
    var currDate = new Date();

    // write these variables to the footer section
    document.getElementById("dates").innerHTML = "<h4>Last Modified: " + docMod + "</h4>\
                                                  <h4>Current Date: " + currDate + "</h4>";
}