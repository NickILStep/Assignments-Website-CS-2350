"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Nicholas Stephenson
   Date:   11/18/2021

   Filename: bc_switch.js
   
   setupStyles()
   Function to set up the style sheet switcher and insert
   form buttons to allow the user to switch between web
   view and page view
   
*/

window.addEventListener("load", setupStyles);

function setupStyles() {
   // Create a <link> element for style sheet
   var pageStyle = document.createElement("link");
   pageStyle.setAttribute("href", "styles/bc_page.css");
   pageStyle.setAttribute("rel", "stylesheet");
   pageStyle.setAttribute("disabled", "disabled");

   // Append the link element to the document head section
   document.head.appendChild(pageStyle);
   pageStyle.disabled = true;

   // Insert buttons for the style switcher
   var buttonDIV = document.createElement("div");
   buttonDIV.setAttribute("id", "styleButtons");

   var webButton = document.createElement("input");
   webButton.setAttribute("type", "button");
   webButton.setAttribute("value", "Web View");

   var pageButton = document.createElement("input");
   pageButton.setAttribute("type", "button");
   pageButton.setAttribute("value", "Page View");

   buttonDIV.appendChild(webButton);
   buttonDIV.appendChild(pageButton);

   document.body.insertBefore(buttonDIV, document.body.firstChild);

   // Append embedded <style> in <head>
   var buttonStyles = document.createElement("style");
   document.head.appendChild(buttonStyles);

   // Add our style rules to the embedded stylesheet
   document.styleSheets[document.styleSheets.length-1].insertRule(
      "div#styleButtons { \
         position: fixed; \
      }", 0
   );

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "div#styleButtons input { \
         background-color: rgba(68, 94, 186, 0.6); \
         border: 3px solid rgba(0, 24, 123, .6); \
         border-radius: 50%; \
         cursor: pointer; \
         color: white; \
         display: inline-block; \
         font-size: 1.2m; \
         line-height: 60px; \
         margin: 5px 10px; \
         width: 100px; \
      }", 1
   );

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "@media print { \
         div#styleButtons { \
            display: none; \
         } \
      }", 2
   );

   // Turn the Page View stylesheet off/on
   webButton.onclick = function() {
      pageStyle.disabled = true;
   };

   pageButton.onclick = function() {
      pageStyle.disabled = false;
   };
}