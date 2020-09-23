var sum = 0;    // sum을 밖에 선언 안 할려면 return으로 받아서 처리

function aryFunc() {
    var numbers = [45, 28, 22, 10, 55];

    numbers.forEach(callBackFunc);

    console.log("sum : " + sum);
    document.getElementById("ary").innerHTML = sum;
}

// val : 실제값, idx : 인덱스 위치, ary : 배열 그자체
// numbers.forEach(function (val, idx, ary) {
//     console.log(val, idx, ary);
// });
function callBackFunc(v, i, a) {
    sum += v;
}

// --------------------------------------------------------------------

// var, let으로 같은 이름의 변수를 두개씩 선언했다.
var num1 = 10;
var num1 = "hello";
console.log(num1);

// let은 var보다 더 흠.. 까다롭게 체크한다.
let num2 = 10;
// let num2 = "hello";
console.log(num2);

// const : 상수. 한번 선언하면 값을 변경할 수 없다.
const num3 = 10;
// num3 = 20;

// --------------------------------------------------------------------

// p1을 오브젝트(obj) 타입으로 선언해 보자 -> 클래스같은
let p1 = {
    name: "Hong",
    age: 20
}

let p2 = {
    name: "Park",
    age: 25
}

let p3 = {
    name: "Choi",
    age: 30
}

let persons = [p1, p2, p3];
// forEach() : persons에 들어있는 각각의 요소들을 실행
// function이 forEach()의 매개값으로 들어옴
persons.forEach(function (a, b, c) {
    // console.log(a, b, c);
    // console.log(a.name + ", " + a.age);
});

// persons.sort(); // 얘도 sort가 제대로 안됐다
// 뭐를 기준으로 정렬할건지 정해서 짜야한다.
persons.sort(function (a, b) {
    // 1. 나이순
    // return b.age - a.age;
    // 2. 이름순
    if (a.name < b.name) return -1;
    else return 1;
});

// 얘도 람다식으로 줄일 수 있다.
// persons.forEach((a, b, c) => console.log(a, b, c));

// ``안에 입력하면 음.. 입력한 형식 그대로 출력(?)
persons.forEach((a, b, c) => console.log(`value : ${a.name}, age : ${a.age}, index : ${b}, ary : ${c}`));

numbers = [45, 38, 66, 92, 18, 100];
// 문자열로 인식해 정렬하는걸 방지하기 위해 sort에 function을 매개값으로 받아서 수행
// numbers.sort(); // 정렬
// numbers.sort(function(a, b) {
//     return a - b;   // - 값이 오름차순. + 값이 내림차순
// });
// numbers.forEach(function(a, b, c) {
//     console.log(a);
//     // 그냥 정렬하면 문자열로 인식하고 정렬해서 이상함
// });

// numbers에서 가장 작은 값을 출력
numbers.sort(function (a, b) {
    return a - b;   // - 값이 오름차순. + 값이 내림차순
});
console.log("최소값 : " + numbers[0]);

// forEach : 배열은 바꾸지는 않고 그냥 그 안에 요소들을 처리하는거
// sort : 배열 자체를 바꾸는것

// --------------------------------------------------------------------

// map : forEach와 달리 어떤 결과값을 return 해준다. 그 return 값에 대해 새로운 배열을 생성
let newNum = numbers.map(function(a, b, c) {
    console.log(`a : ${a}, b : ${b}, c : ${c}`);
    return a * b;
});

console.log(newNum);

// filter : 조건을 만족하는 값만 return 해서 새로운 배열을 생성
let theNew = newNum.filter(function(a, b, c) {
    return a > 0;
});

console.log(theNew);
// 38, 90, 198, 368, 500

// --------------------------------------------------------------------

// reduce :: 배열.reduce((누적값, 현잿값, 인덱스, 요소[배열을말하는거]) => { return 결과 }, 초깃값);
// 기존의 a, b, c 앞에 누적값이 하나 더 생김
theNew.reduce((a, b, c, d) => {
    console.log(`a : ${a}, b : ${b}, c : ${c}, d : ${d}`);
    return a + b;
    // return 없이 console 했을때는 a값이 undefined 떴는데 return 해주니까 그 결과값이 출력된다.
}, 0);  // 초기값으로 0을 줬다. 초기값이 없으면 초기값 무시하고 2번째 요소가 첫번째로 출력된다.

// reduce로 최대값 구하기
let anotherNew = theNew.reduce((a, b) => {
    console.log(a, b);
    return Math.max(a, b);  // return a > b ? a : b;
});

console.log(anotherNew);

// --------------------------------------------------------------------