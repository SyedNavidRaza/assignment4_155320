//var dayList = ["sun", "mon", "tue","wed", "thur", "fri", "sat"]
//var date = new Date("June 14 2019 10:45:25")
//var day = date.getDay();
//document.write(day + "<br>")
//var nameOfDay = dayList[day];
//document.write(nameOfDay + "<br>")
var unitList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine","ten"];
//var tensList = ["ten", "Twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty","ninty"]
//var  hundredList = ["Hundred"]
var input = parseInt(prompt("Enter your Number"));
document.write(input + "<br>")
var wordOfNumber = unitList[input];
document.write(wordOfNumber + "<br>")
//if (input>9){
//    var wordOfNumber = tensList[input];
//    document.write(tensList + "<br>")
//}