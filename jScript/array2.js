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