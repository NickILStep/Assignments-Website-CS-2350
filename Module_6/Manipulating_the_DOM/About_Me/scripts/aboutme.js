"use strict";

window.addEventListener("load", setUp);

var imgNum = 0;

function setUp() {
    // Change the body tag's style so it has a font-family of "Arial, sans-serif".

    // Create and append an embedded stylesheet
    var styles = document.createElement("style");
    document.head.appendChild(styles);

    // Add the style rule to the stylesheet
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "body { \
            font-family: Arial, sans-serif; \
        }", 0
    );

    // Replace each of the spans (nickname, favorites, hometown) with your own information.

    // Change the span elements to the replacement text
    document.getElementById("nickname").outerHTML = "Nick";
    document.getElementById("favorites").outerHTML = "Food - Panda Express, Movie - How to Train Your Dragon, Book - Michael Vey, Animal - Fox";
    document.getElementById("hometown").outerHTML = "Brigham City, UT";

    // Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

    // Create an object set of the children of the ul element
    var ulChildren = document.getElementsByTagName("ul")[0].children;

    // Iterate through all those li elements
    for(var i = 0; i < ulChildren.length; i++) {
        // Set their class to listitem
        ulChildren[i].setAttribute("class", "listitem");
    }

    // Add a style to the stylesheet to change their color to red
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "li.listitem { \
            color: red; \
        }", 1
    );

    // Create a new img element and set its src attribute to a picture of you with the picture being named "me1.jpg". Append that image under the <h1>.

    // Create the img element
    var myPic = document.createElement("img");
    myPic.setAttribute("src", "images/me1.jpg");
    myPic.setAttribute("id", "portraitImg");

    // Append the myPic element after the h1 element
    document.getElementsByTagName("h1")[0].parentNode.insertBefore(myPic, document.getElementsByTagName("h1")[0].nextSibling);

    // Add style to control image width
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "img#portraitImg { \
            width: 8em; \
        }", 2
    );

    // Call a function ChangePic() function when the user clicks on your image, and change the src property of the image to display another random picture of you.
    document.getElementById("portraitImg").addEventListener("click", ChangePic);
}

function ChangePic() {
    var prevImgNum = imgNum;

    while(imgNum === prevImgNum) {
        imgNum = Math.ceil(Math.random() * 7);
    }

    document.getElementById("portraitImg").setAttribute("src", "images/me" + imgNum + ".jpg");
}