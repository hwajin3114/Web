// console.log("function.js");

// sum(1, 2);   // hosting

function sumThis() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    document.getElementById("result").innerText = sum(num1, num2);
}

function sum(num1, num2) {
    // console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    var result = num1 + num2;
    return result;
}

function minus(num1, num2) {
    var result = num1 - num2;
    return result;
}

function concat(str1, str2) {   // 문자 연결
    return str1 + str2;
}

var numbers = [3, 4, 2, 8, 7];
function arySum() {
    var sum = 0;
    for(num of numbers) {
        sum += num;
    }
    return num;
}

var mySum = function() {
    var sum = 0;
    for(num of numbers) {
        sum += num;
    }
    return num;
}

function setBackgroundColor(element) {
    element.style.backgroundColor = "#568EA6";
    element.style.color = "white";
    element.style.textAlign = "center";
}