"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Nicholas Stephenson
   Date:   11/21/21

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/

// Run these programs when the page loads
window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

function findKeyWords() {
   // Create the html elements that will contain the list of keywords
   var keyAside = document.createElement("aside");
   var keyHeading = document.createElement("h1");
   var headingText = document.createTextNode("Keyword List");
   var keyList = document.createElement("ol");

   // Set the id of the aside element
   keyAside.setAttribute("id", "keywords");

   // Append each of the elements together
   keyHeading.appendChild(headingText);
   keyAside.appendChild(keyHeading);
   keyAside.appendChild(keyList);

   // Create a variable set of the items in the article that are highlighted
   var keyWordElems = document.querySelectorAll("dfn");
   var keyWords = new Array(keyWordElems.length);

   // Loop through that set and create a new set of the text values from the original set and set the items' ids
   for(var i = 0; i < keyWordElems.length; i++) {
      keyWords[i] = keyWordElems[i].textContent;

      // Replace whitespace with "_"
      var linkId = replaceWS(keyWords[i]);

      keyWordElems[i].setAttribute("id", "keyword_" + linkId);
   }

   // Sort the list alphabetically
   keyWords.sort();

   // Start formatting each item to be inserted into the html list
   for(var i = 0; i < keyWords.length; i++) {
      var keyWordList = document.createElement("li");
      var keyWordLink = document.createElement("a");

      // Create links to each of the highlighted words and set them to the list values
      keyWordLink.innerHTML = keyWords[i];
      var linkId = replaceWS(keyWords[i]);
      keyWordLink.setAttribute("href", "#keyword_" + linkId);

      keyWordList.appendChild(keyWordLink);
      keyList.appendChild(keyWordList);
   }

   // Insert the list as the first child of the "doc" article
   document.getElementById("doc").insertBefore(keyAside, document.getElementById("doc").firstChild);
}

function makeKeyStyles() {
   // Create and insert an embedded stylesheet
   var styleSheet = document.createElement("style");
   document.head.appendChild(styleSheet);

   // Add styles to the stylesheet
   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords { \
         border: 3px solid rgb(101, 101, 101); \
         float: right; \
         margin: 20px 0px 20px 20px; \
         padding: 10px; \
         width: 320px; \
      }", 0
   );

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords h1 { \
         font-size: 2em; \
         margin: 5px; \
         text-align: center; \
      }", 1
   );

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol { \
         margin-left: 20px; \
         font-size: 1.2em; \
      }", 2
   );

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol li { \
         line-height: 1.5em; \
      }", 3
   );

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol li a { \
         color: rgb(101, 101, 101); \
         text-decoration: none; \
      }", 4
   );
}




/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.toString().replace(/\s+/g,"_");
   return revText;
}
