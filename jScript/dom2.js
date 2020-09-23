let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
let dates = [];
for (let i = 1; i <= 31; i++) {
    dates.push(i);  // 배열에 추가
}

function loadPage() {
    // 아이디 bdy 찾아서 innerHTML이라는 속성 찾아서 해당하는 값을 넣어라
    // document.getElementById("bdy").innerHTML = "페이지로딩됨.";

    // 표를 만들어보자    
    let $table = document.createElement("table");
    $table.setAttribute('border', '1px solid');
    $table.setAttribute('style', 'border-collapse:collapse');
    let $tr = document.createElement("tr");
    // th가 반복된다. 배열 days로 for(of)문을 사용해보자?
    for (let day of days) {
        let $th = document.createElement("th");
        let text = document.createTextNode(day);
        // 텍스트로 들어갈 값은 배열 days의 요소들을 담은 day임

        $th.appendChild(text);
        $tr.appendChild($th); // 루핑돌면서 tr이랑 th가 붙어야함
    }
    $table.appendChild($tr);

    let $td, text;
    dates.forEach(function (a, b) {
        if (b % 7 == 0) {
            $tr = document.createElement("tr");
            $table.appendChild($tr);
        }
        $td = document.createElement("td");
        text = document.createTextNode(a);
        $td.appendChild(text);
        $tr.appendChild($td);
    });
    document.getElementById("bdy").appendChild($table); // 최종적으로 바디에 테이블을 갖다붙인다
}