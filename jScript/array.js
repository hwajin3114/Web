var students = [];


students.push("이땡땡");    // push : 새로운 데이터를 기존의 데이터 맨 뒤에 추가
students.push("이땡땡");
students[1] = "김땡땡"; // 인덱스 주소값으로 추가
students.unshift("최땡땡"); // unshift : 새로운 데이터를 제일 앞에 추가

// students.pop(); // pop : 뒤에서부터 제거
// students.shift();   // shift : 앞에서부터 제거

// console.log(students[0]);
// console.log(students[1]);

// 최땡땡 이땡땡 김땡땡 ..
// students.splice(1,1, "쟈몽");   // 최땡땡 쟈몽 김땡땡
students.splice(1,0, "쟈몽", "라임");   // 최땡땡 [쟈몽, 라임] 이땡땡 김땡땡
// spilce : 자르거나 추가할때 사용. 1번째부터 1자리를 ""로 대체
// 자르는 수에 따라 추가하거나 제거. 0이면 자르는게 없으니 추가
for(stu of students) {
    console.log(stu);
}

// 최땡땡 [쟈몽, 라임] 이땡땡 김땡땡
console.log("-------------------");
// index 1(포함), index 3(미포함) 사이의 값을 자른다
var newStud = students.slice(1, 3); // 쟈몽, 라임
// var newStud = students.slice(1); // 쟈몽, 라임, 이땡땡, 김땡땡
for(stu of newStud) {
    console.log(stu);
}

console.log("-------------------");
students.sort();    // 김땡땡 라임 이땡땡 쟈몽 최땡땡
for(stu of students) {
    console.log(stu);
}

var numbers = [4, 6, 2, 9, 1, 10, 100];
// numbers.sort(); // 그냥 sort 하면 문자로 인식하고 정렬해서 이상하다

// callback function 사용해서 정렬
// 메소드 안에 매개값으로 function이 들어갈 수 있다.
numbers.sort(function(a, b) {
    console.log(a, b);
    // - 값이면 오름차순, + 값이면 내림차순
    return a - b;   // 오름차순
});
for (num of numbers) {
    console.log(num);
}