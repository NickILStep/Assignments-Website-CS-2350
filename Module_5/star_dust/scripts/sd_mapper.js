"use strict";

/*
   New Perspectives on HTML5 and CSS3 and JavaScript, 6th Edition
   Tutorial 9

   Planisphere Script
   Author: Nicholas Stephenson
   Date:   10/30/2021

*/

starMap();
setInterval(starMap, 1000);

function starMap() {
   // Update the date and time on the page to current values
   var thisTime = new Date();
   var timeStr = thisTime.toLocaleString();
   document.getElementById("timeStamp").innerHTML = timeStr;

   // Use values for hour and month to insert a specific image
   var thisHour = thisTime.getHours();
   var thisMonth = thisTime.getMonth();
   var mapNum = (2 * thisMonth + thisHour) % 24;
   var imgStr = "<img src='images/sd_sky" + mapNum + ".png' />";
   document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);
}