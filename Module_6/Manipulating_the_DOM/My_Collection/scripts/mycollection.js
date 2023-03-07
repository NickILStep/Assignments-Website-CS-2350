"use strict";

var books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];

window.addEventListener("load", setUp);
window.addEventListener("load", addStyle);

function setUp() {
    // Create the table element
    var listTable = document.createElement("table");

    // Create table header elements for each of the columns
    var titleHead = document.createElement("th");
    var authorHead = document.createElement("th");
    var readHead = document.createElement("th");

    // Set the text of the table headers
    titleHead.innerHTML = "Title";
    authorHead.innerHTML = "Author";
    readHead.innerHTML = "Read?";

    // Append the table headers to a table row
    var headRow = document.createElement("tr");
    headRow.appendChild(titleHead);
    headRow.appendChild(authorHead);
    headRow.appendChild(readHead);

    // Append the table row to the table
    listTable.appendChild(headRow);

    // Add the table to the html
    document.body.appendChild(listTable);

    for(var i = 0; i < books.length; i++) {
        var insertRow = document.createElement("tr");
        var titleData = document.createElement("td");
        var authorData = document.createElement("td");
        var readData = document.createElement("td");

        insertRow.appendChild(titleData);
        insertRow.appendChild(authorData);
        insertRow.appendChild(readData);

        titleData.innerHTML = books[i].title;
        authorData.innerHTML = books[i].author;
        if(books[i].alreadyRead) {
            // readData.innerHTML = "&check;";
            readData.innerHTML = "<img src='images/check.jpg' class='checkcross' alt='checkmark' />"
        }
        else {
            // readData.innerHTML = "&#9747;";
            readData.innerHTML = "<img src='images/cross.jpg' class='checkcross' alt='cross' />"
        }

        listTable.appendChild(insertRow);
    }
}

function addStyle() {
    var styleSheet = document.createElement("style");
    document.head.appendChild(styleSheet);

    document.styleSheets[document.styleSheets.length-1].insertRule(
        "table, th, td { \
            border: 1px solid black; \
            text-align: center; \
            border-collapse: collapse; \
        }", 0
    );

    document.styleSheets[document.styleSheets.length-1].insertRule(
        "th, td { \
            padding: 10px; \
        }", 1
    );

    document.styleSheets[document.styleSheets.length-1].insertRule(
        "th { \
            background-color: rgb(202, 202, 202); \
            font-size: 2em; \
            color: rgb(64, 64, 64); \
        }", 2
    );

    document.styleSheets[document.styleSheets.length-1].insertRule(
        "td { \
            font-size: 1.25em; \
            color: rgb(101, 101, 101); \
            background-color: rgb(240, 240, 240); \
        }", 3
    );

    document.styleSheets[document.styleSheets.length-1].insertRule(
        "img.checkcross { \
            width: 1em; \
        }", 4
    );
}