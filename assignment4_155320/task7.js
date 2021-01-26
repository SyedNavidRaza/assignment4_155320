var stringToCheck = "The quick brown fox jumps over the lazy dog";
document.write("Text: " + stringToCheck);
stringToCheck = stringToCheck.toLowerCase();
var count = (stringToCheck.match(/the/g) || []).length;
document.write("<br>" + "There are "+ count + " occurrence(s) of word 'the'");