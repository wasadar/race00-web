function Clean(){
    document.getElementById("output").innerHTML = "0";
    document.getElementById("input").innerHTML = "0";
}
function writeToInput(char){
    let currentchar = document.getElementById("input").innerHTML;
    if(currentchar == "0"){
        document.getElementById("input").innerHTML = char;
    }
    else{
        if(isOperator(char)){
            if(isOperator(currentchar.substring(currentchar.length -2, currentchar.length -1))){
                document.getElementById("input").innerHTML = currentchar.substring(0, currentchar.length -2) + " " + char;
            }else{
                document.getElementById("input").innerHTML = currentchar + " " + char;
            }
        }else{
            document.getElementById("input").innerHTML = currentchar + char;
        }
    }
}
function calculate(){
    let curr = document.getElementById('input').innerHTML;
    if(curr.charAt(curr.length-1) === "%"){
        let num = curr.substring(0, curr.indexOf("%"));
        document.getElementById('output').innerHTML = num/100;
    }else{
        // var egal = eval(document.getElementById('input').innerHTML);
        // document.getElementById('output').innerHTML = egal;
        document.getElementById('output').innerHTML = get_res(document.getElementById('input').innerHTML);
    }
    //console.log(document.getElementById('input').innerHTML);
    
}
let get_res = function(data){
    if (data.match(/\([^\(]*?\)/g) !== null) {
        data = data.slice(1,-1);
    }
    while (data.match(/\([^\(]*?\)/g) !== null){
        data.replace(/\([^\(]*?\)/,get_res(data.match(/\([^\(]*?\)/g)[0]));
    }
    let arr = data.split(" ");
    let res_arr = new Array();
    let minus = false;
    let temp;
    console.log(arr);
    for (let ind = 0; ind < arr.length; ind++){
        if (Number.isNaN(Number(arr[ind])) !== true) {
            if ((minus) && (arr[ind][0] !== "-") && (arr[ind][0] !== "+")) {
                res_arr.push("-" + arr[ind]);
                minus = false;
            }
            else if (minus && (arr[ind][0] !== "-")) {
                res_arr.push("-" + arr[ind].slice(1));
                minus = false;
            }
            else if (minus && (arr[ind][0] !== "+")) {
                res_arr.push(arr[ind].slice(1));
                minus = false;
            }
            else {
                res_arr.push(arr[ind]);
                minus = false;
            }
        }
        else {
            if (arr[ind] == "-"){
                if (minus){
                    minus = false;
                }
                else {
                    minus = true;
                }
            }
            else if (arr[ind] !== "+"){
                res_arr.push(arr[ind]);
            }
        }
    }
    console.log(res_arr);
    let check = true;
    while (check) {
        check = false;
        arr = res_arr;
        temp = Math.max(arr.indexOf("/"),arr.indexOf("*"));
        if (temp !== -1){
            if (arr[temp] === "/"){
                arr.splice(temp - 1,3,Number(arr[temp-1]) / Number(arr[temp+1]));
            }
            else {
                arr.splice(temp - 1,3,Number(arr[temp-1]) * Number(arr[temp+1]));
            }
            check = true;
        }
    }
    console.log(arr);
    let res = 0;
    for (el of arr){
        res += Number(el);
    }
    return res;
}
function isOperator(char){
    if(char === "+" || char === "-" || char === "*" || char === "/"){
        return true;
    }else return false;
}
function changeSign(){
    let current = document.getElementById('input').innerHTML;
    if(!isNaN(current)){
        document.getElementById('input').innerHTML = -1 * Number(current);
    }else{
        let arr = Array.from(current);
       
        for (let i = arr.length-1; i >=0; i--) {
            if(isOperator(arr[i])){
                if(isOperator(arr[i-3]) || isOperator(arr[i-2])){
                    if(arr[i] === "-"){
                        arr[i] = "+";
                    }else arr[i] = "-"; 
                    
                    document.getElementById('input').innerHTML = arr.join("");
                }else{
                    if(current.charAt(i) === "-"){
                       let res = current.substring(0, i+1) + " + " + current.substring(i+1, current.length);
                       document.getElementById('input').innerHTML = res; 
                    }
                    if(current.charAt(i) === "+"){
                        let res = current.substring(0, i+1) + " - " + current.substring(i+1, current.length);
                        document.getElementById('input').innerHTML = res; 
                    }
                }
                break;
            } 
        }
    }
}