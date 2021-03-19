function Clean(){
    document.getElementById("output").innerHTML = "0";
    document.getElementById("input").innerHTML = "0";
}
function writeToInput(char){
    var currentchar = document.getElementById("input").innerHTML;
    if(currentchar == "0"){
        document.getElementById("input").innerHTML = char;
    }else{
        document.getElementById("input").innerHTML = currentchar + char;
    }
}
function calculate(){
    var egal = eval(document.getElementById('input').innerHTML);
    document.getElementById('output').innerHTML = egal;
}
