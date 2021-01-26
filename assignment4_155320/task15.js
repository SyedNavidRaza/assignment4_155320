var age = parseInt(prompt("Entr your age: "));
document.write("Your age is " + age +"<br>");
var today = new Date();
var currentYear = today.getFullYear();
dob = currentYear-age;
document.write("Your birth year is " + dob +"<br>");