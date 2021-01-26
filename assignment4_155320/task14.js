var rightNow = new Date();
document.write("Current Date: " + rightNow + "<br>");
var hours = rightNow.getHours();
var ndate = new Date();
ndate.setHours(--hours);
document.write("1 hour ago, it was " + ndate)