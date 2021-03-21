function Clean(){
    document.getElementById("output").innerHTML = "0";
    document.getElementById("input").innerHTML = "0";
}
function writeToInput(char){
    let currentchar = document.getElementById("input").innerHTML;
    if(currentchar == "0"){
        if(isOperator(char)){
            document.getElementById("input").innerHTML = char + " ";
        }else{
            document.getElementById("input").innerHTML = char;
        }
        
    }
    else{
        if(isOperator(char)){
            // if(isOperator(currentchar.substring(currentchar.length -2, currentchar.length -1))){
            //     document.getElementById("input").innerHTML = currentchar.substring(0, currentchar.length -2) + " " + char;
            // }else{
            //     document.getElementById("input").innerHTML = currentchar + " " + char;
            // }
            if(char === "*" || char === "/"){
                document.getElementById("input").innerHTML = currentchar + " " + char + " ";
            }else{
                document.getElementById("input").innerHTML = currentchar + " " + char + " ";
            }    
        }else{
            document.getElementById("input").innerHTML = currentchar + char;
        }
    }
}
function calculate(){
    /*let curr = document.getElementById('input').innerHTML;
    if(curr.charAt(curr.length-1) === "%"){
        let num = curr.substring(0, curr.indexOf("%"));
        document.getElementById('output').innerHTML = num/100;
    }else{
        // var egal = eval(document.getElementById('input').innerHTML);
        // document.getElementById('output').innerHTML = egal;*/
        document.getElementById('output').innerHTML = get_res(document.getElementById('input').innerHTML);
    //}
    //console.log(document.getElementById('input').innerHTML);
    
}
function get_res(data){
    if (data.match(/^\([^\(]*?\)$/g) !== null) {
        data = data.slice(1,-1);
    }
    while (data.match(/\([^\(]*?\)/g) !== null) {
        data = data.replace(/\([^\(]*?\)/,get_res(data.match(/\([^\(]*?\)/g)[0]));
    }
    let arr = data.split(" ");
    let res_arr = new Array();
    let temp;
    let tmp1;
    let tmp2;
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind].length !== 0) {
            res_arr.push(arr[ind]);
        }
    }
    arr = res_arr;
    res_arr = new Array();
    let minus = false;
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
            if (arr[ind].match(/^[+-]?[0-9]+%$/) !== null) {
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
            else if (arr[ind].match(/^[+-]?[0-9]+!$/) !== null) {
                if ((minus) && (arr[ind][0] !== "-") && (arr[ind][0] !== "+")) {
                    temp = 1;
                    for (let i = 1; i < Number(arr[ind].slice(0, -1)) + 1; i++) {
                        temp *= i;
                    }
                    res_arr.push("-" + temp);
                    minus = false;
                }
                else if (minus && (arr[ind][0] !== "-")) {
                    temp = 1;
                    for (let i = 1; i < Number(arr[ind].slice(1, -1)) + 1; i++) {
                        temp *= i;
                    }
                    res_arr.push("-" + temp);
                    minus = false;
                }
                else if (minus && (arr[ind][0] !== "+")) {
                    temp = 1;
                    for (let i = 1; i < Number(arr[ind].slice(1, -1)) + 1; i++) {
                        temp *= i;
                    }
                    res_arr.push(String(temp));
                    minus = false;
                }
                else if (arr[ind][0] !== "-") {
                    temp = 1;
                    for (let i = 1; i < Number(arr[ind].slice(0, -1)) + 1; i++) {
                        temp *= i;
                    }
                    res_arr.push(String(temp));
                    minus = false;
                }
                else {
                    temp = 1;
                    for (let i = 1; i < Number(arr[ind].slice(1, -1)) + 1; i++) {
                        temp *= i;
                    }
                    res_arr.push("-" + temp);
                    minus = false;
                }
            }
            else if (arr[ind] == "-"){
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
        tmp1 = arr.indexOf("^");
        tmp2 = arr.indexOf("√");
        if ((tmp1 !== -1) && (tmp2 !== 2)) {
            temp = Math.min(arr.indexOf("√"), arr.indexOf("^"));
        }
        else {
            temp = Math.max(arr.indexOf("√"), arr.indexOf("^"));
        }
        if (temp !== -1) {
            if (arr[temp] === "^") {
                tmp1 = arr[temp - 1];;
                tmp2 = arr[temp + 1];
                if (arr[temp - 1].match(/^[+-]?[0-9]+%$/) !== null) {
                    tmp1 = Number(arr[temp - 1].slice(0, -1)) / 100;
                }
                if (arr[temp + 1].match(/^[+-]?[0-9]+%$/) !== null) {
                    tmp2 = Number(arr[temp + 1].slice(0, -1)) / 100;
                }
                arr.splice(temp - 1, 3, String(Number(tmp1) ** Number(tmp2)));
            }
            else {
                tmp1 = arr[temp - 1];
                tmp2 = arr[temp + 1];
                if (arr[temp - 1].match(/^[+-]?[0-9]+%$/) !== null) {
                        tmp1 = Number(arr[temp - 1].slice(0, -1)) / 100;
                } 
                 
                if (arr[temp + 1].match(/^[+-]?[0-9]+%$/) !== null) {
                    tmp2 = Number(arr[temp + 1].slice(0, -1)) / 100;
                }
                console.log(arr);
                arr.splice(temp - 1, 3, String(Number(tmp2) ** (1 / Number(tmp1))));
            }
            check = true;
        }
    }
    console.log(arr);
    check = true;
    while (check) {
        check = false;
        tmp1 = arr.indexOf("/");
        tmp2 = arr.indexOf("*");
        if ((tmp1 !== -1) && (tmp2 !== 2)) {
            temp = Math.min(arr.indexOf("/"), arr.indexOf("*"));
        }
        else {
            temp = Math.max(arr.indexOf("/"), arr.indexOf("*"));
        }
        if (temp !== -1){
            if (arr[temp] === "/") {
                tmp1 = arr[temp - 1];
                tmp2 = arr[temp + 1];
                if (arr[temp - 1].match(/^[+-]?[0-9]+%$/) !== null) {
                    tmp1 = Number(arr[temp - 1].slice(0, -1)) / 100;
                }
                if (arr[temp + 1].match(/^[+-]?[0-9]+%$/) !== null) {
                    tmp2 = Number(arr[temp + 1].slice(0, -1)) / 100;
                }
                arr.splice(temp - 1, 3, String(Number(tmp1) / Number(tmp2)));
            }
            else {
                tmp1 = arr[temp - 1];
                tmp2 = arr[temp + 1];
                if (arr[temp - 1].match(/^[+-]?[0-9]+%$/) !== null) {
                    tmp1 = Number(arr[temp - 1].slice(0, -1)) / 100;
                }
                if (arr[temp + 1].match(/^[+-]?[0-9]+%$/) !== null) {
                    tmp2 = Number(arr[temp + 1].slice(0, -1)) / 100;
                }
                arr.splice(temp - 1, 3, String(Number(tmp1) * Number(tmp2)));
            }
            check = true;
        }
    }
    console.log(arr);
    let res = 0;
    for (let ind = 0; ind < arr.length; ind++) {
        if (Number.isNaN(Number(arr[ind])) !== true) {
            res += Number(arr[ind]);
        }
        else {
            res += res * (Number(arr[ind].slice(0, -1)) / 100);
        }
    }
    return String(res);
}
function isOperator(char){
    if(char === "+" || char === "-" || char === "*" || char === "/" || char === "^" || char == "√"){
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