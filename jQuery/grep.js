let members = [];

members.push({name: "hone", point: 80});
members.push({name: "hwang", point: 100});
members.push({name: "park", point: 95});
members.push({name: "choi", point: 50});
members.push({name: "ryu", point: 30});

// each | a:index, b:object
$(members).each((a, b) => {
    console.log(a, b);
});

// each는 그냥 각 요소별로 처리하는 용도이고
// grep은 조건에 해당하는 요소를 return 해서 새로운 배열 반환

// grep | a:object, b:index
// point가 50점 이상인 member
let grepMem = $.grep(members, (a, b) => {
    // console.log(a, b);
    return (a.point > 50 ? a : null);
});
console.log(grepMem);

// grep은 요소를 먼저 가져오면 error 나지만
// map은 grep 처럼 $.map으로 해주거나 요소를 먼저 가져와서 처리해주나 상관없다.
console.clear();
// grepMem 배열에 point만 가져와서 새로운 배열로 반환
let sum = $(grepMem).map((a, b) => {
    console.log(a, b);
    return b.point;
}).get();   // get : 문자열로 반환

let sumPoint = 0;
$(sum).each((a, b) => {
    console.log(a, b);
    sumPoint += b;
});
console.log("point 50 이상 총 합 : " + sumPoint);

let memName = $(members).map((a, b) => {
    return b.name;
});
// inArray : 배열안에서 데이터를 찾아서 해당 인덱스 번호를 출력
let ind = $.inArray('ryu', memName);
console.log("ind : " +ind);

// isArray : 입력한 객체가 배열이면 true, 아니면 false
console.log("isArray memName : " + $.isArray(memName));
console.log("isArray members : " + $.isArray(members));