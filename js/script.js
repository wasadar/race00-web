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
    for (let ind = 0; ind < arr.length; ind++){
        if (Number.isNaN(Number(arr[ind])) !== true) {
            if ((minus) && (arr[ind][0] !== "-") (arr[ind][0] !== "+")) {
                res_arr.push("-" + arr[ind]);
                minus = false;
            }
            else if (minus) {
                res_arr.push(arr[ind].slice(1));
                minus = false;
            }
            else {
                res_arr.push(arr[ind]);
            }
        }
        else {
            if (arr[ind] === "-"){
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
    let check = true;
    while (check) {
        check = false;
        arr = res_arr;
        temp = Math.max(arr.indexOf("÷"),arr.indexOf("*"));
        if (temp !== -1){
            if (arr[temp] === "÷"){
                arr.splice(temp - 1,3,Number(arr[temp-1]) / Number(arr[temp+1]));
            }
            else {
                arr.splice(temp - 1,3,Number(arr[temp-1]) * Number(arr[temp+1]));
            }
            check = true;
        }
    }
    temp = 0;
    for (el of arr){
        temp += Number(el);
    }
    return temp;
}let get_res = function(data){
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
    for (let ind = 0; ind < arr.length; ind++){
        if (Number.isNaN(Number(arr[ind])) !== true) {
            if ((minus) && (arr[ind][0] !== "-") (arr[ind][0] !== "+")) {
                res_arr.push("-" + arr[ind]);
                minus = false;
            }
            else if (minus) {
                res_arr.push(arr[ind].slice(1));
                minus = false;
            }
            else {
                res_arr.push(arr[ind]);
            }
        }
        else {
            if (arr[ind] === "-"){
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
    let check = true;
    while (check) {
        check = false;
        arr = res_arr;
        temp = Math.max(arr.indexOf("÷"),arr.indexOf("*"));
        if (temp !== -1){
            if (arr[temp] === "÷"){
                arr.splice(temp - 1,3,Number(arr[temp-1]) / Number(arr[temp+1]));
            }
            else {
                arr.splice(temp - 1,3,Number(arr[temp-1]) * Number(arr[temp+1]));
            }
            check = true;
        }
    }
    temp = 0;
    for (el of arr){
        temp += Number(el);
    }
    return temp;
}let get_res = function(data){
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
    for (let ind = 0; ind < arr.length; ind++){
        if (Number.isNaN(Number(arr[ind])) !== true) {
            if ((minus) && (arr[ind][0] !== "-") (arr[ind][0] !== "+")) {
                res_arr.push("-" + arr[ind]);
                minus = false;
            }
            else if (minus) {
                res_arr.push(arr[ind].slice(1));
                minus = false;
            }
            else {
                res_arr.push(arr[ind]);
            }
        }
        else {
            if (arr[ind] === "-"){
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
    let check = true;
    while (check) {
        check = false;
        arr = res_arr;
        temp = Math.max(arr.indexOf("÷"),arr.indexOf("*"));
        if (temp !== -1){
            if (arr[temp] === "÷"){
                arr.splice(temp - 1,3,Number(arr[temp-1]) / Number(arr[temp+1]));
            }
            else {
                arr.splice(temp - 1,3,Number(arr[temp-1]) * Number(arr[temp+1]));
            }
            check = true;
        }
    }
    temp = 0;
    for (el of arr){
        temp += Number(el);
    }
    return temp;
}let get_res = function(data){
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
    for (let ind = 0; ind < arr.length; ind++){
        if (Number.isNaN(Number(arr[ind])) !== true) {
            if ((minus) && (arr[ind][0] !== "-") (arr[ind][0] !== "+")) {
                res_arr.push("-" + arr[ind]);
                minus = false;
            }
            else if (minus) {
                res_arr.push(arr[ind].slice(1));
                minus = false;
            }
            else {
                res_arr.push(arr[ind]);
            }
        }
        else {
            if (arr[ind] === "-"){
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
    let check = true;
    while (check) {
        check = false;
        arr = res_arr;
        temp = Math.max(arr.indexOf("÷"),arr.indexOf("*"));
        if (temp !== -1){
            if (arr[temp] === "÷"){
                arr.splice(temp - 1,3,Number(arr[temp-1]) / Number(arr[temp+1]));
            }
            else {
                arr.splice(temp - 1,3,Number(arr[temp-1]) * Number(arr[temp+1]));
            }
            check = true;
        }
    }
    temp = 0;
    for (el of arr){
        temp += Number(el);
    }
    return temp;
}
