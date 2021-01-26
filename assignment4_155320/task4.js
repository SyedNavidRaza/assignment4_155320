var id = prompt("Enter your email adress");
var a;
if (id.indexOf("@") !== -1){
    for(var i=0; i<id.length-1; i++){
        if(id.charAt(i) === (id.charAt(65-90) || id.charAt(97-122))){
            if(id.slice(indexof("@")+1, (id.length() - indexOf("@"))) === (id.charAt(65-90) || id.charAt(97-122))) {
                a = true;
                break;
            }
        }
    }
    document.write("Valid email id");
}
else{
    a= false;
    document.write("Invalid email");
}