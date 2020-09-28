class Board {
    constructor(boardNo, title, content, writer) {
        // 필드 선언
        this._boardNo = boardNo;
        this._title = title;
        this._content = content;
        this._writer = writer;
    }

    get boardNo() {
        return this._boardNo;
    }
    set boardNo(boardNo) {
        this._boardNo = boardNo;
    }

    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }

    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }

    get writer() {
        return this._writer;
    }
    set writer(writer) {
        this._writer = writer;
    }
} // end of class

// console.log(b1.boardNo);    // 필드(프로퍼티) 형식으로 호출

let boardDB = [];
boardDB.push(new Board(1, 'javaScript', '웹 언어 입니다', '리쟈몽'));
boardDB.push(new Board(2, 'java', '컴파일러 입니다', '꼬부기'));
boardDB.push(new Board(3, 'oracle', '데이터베이스 관리', '파이리'));

let titles = ['checkbox', 'boardNo', 'title', 'content', 'writer', 'detail'];

let table, tr, td, text, checkbox, btn;

function createTitle() {
    tr = document.createElement('tr');
    for (let field of titles) {
        td = document.createElement('th');
        td.setAttribute('style', 'padding:10px;');
        if (field === 'checkbox') {
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            // 헤더의 checkbox 선택시 전체 선택
            checkbox.onchange = function () {
                let chks = document.querySelectorAll('td input[class="checkB"]');
                for (let i = 0; i < chks.length; i++) {
                    chks[i].checked = this.checked;
                }
            }
            td.append(checkbox);
        } else {
            text = document.createTextNode(field);
            td.append(text);
        }
        tr.append(td);
    }
    return tr;
}

function getBoardList() {
    let num = boardDB[boardDB.length - 1].boardNo;
    document.getElementById('boardNo').value = ++num;

    table = document.createElement('table');
    table.setAttribute('border', '1');
    table.setAttribute('style', 'text-align:center; border-collapse:collapse;');
    table.setAttribute('id', 'tbl');
    table.append(createTitle()); // title row

    // 데이터 영역
    boardDB.forEach(function (obj, idx) {
        tr = document.createElement('tr');
        tr.setAttribute('id', obj.boardNo);
        table.append(tr);
        for (let field of titles) {
            td = document.createElement('td');
            td.setAttribute('style', 'padding:5px;');
            if (field === 'checkbox') {
                checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('class', 'checkB');
                checkbox.onchange = function () {
                    // 하위 checkbox가 하나씩 해제되면 헤더의 check도 해제되어야한다.
                    synchCheckbox();
                }
                td.append(checkbox);
            } else if (field === 'detail') {
                btn = document.createElement('button');
                text = document.createTextNode("상세");
                btn.append(text);
                btn.onclick = showDetail;
                td.append(btn);
            } else {
                text = document.createTextNode(obj[field]);
                td.append(text);
            }
            tr.append(td);
        }
    });

    document.getElementById('main').append(table);
}

function insertData() {
    let inputs = document.querySelectorAll('input');

    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;

    if (title != '') {
        boardDB.push(new Board(boardNo, title, content, writer));

        let tbl = document.getElementById('tbl');
        tr = document.createElement('tr');
        tr.setAttribute('id', boardNo);

        // 체크박스 생성
        td = document.createElement('td');
        checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'checkB');
        checkbox.onchange = function () {
            // 하위 checkbox가 하나씩 해제되면 헤더의 check도 해제되어야한다.
            synchCheckbox();
        }
        td.append(checkbox);
        tr.append(td);
        // 게시글 번호
        td = document.createElement('td');
        td.append(boardNo);
        tr.append(td);
        // 제목
        td = document.createElement('td');
        td.append(title);
        tr.append(td);
        // 내용
        td = document.createElement('td');
        td.append(content);
        tr.append(td);
        // 작성자
        td = document.createElement('td');
        td.append(writer);
        tr.append(td);
        // 상세 버튼
        td = document.createElement('td');
        btn = document.createElement('button');
        btn.innerHTML = '상세'
        td.append(btn);
        tr.append(td);
        btn.onclick = showDetail;

        tbl.append(tr);

        // 입력 후 초기화
        inputs.forEach((a, b) => {
            if (b != 0) {
                inputs[b].value = "";
            } else {
                let num = boardDB[boardDB.length - 1].boardNo;
                document.getElementById('boardNo').value = ++num;
            }
        });
    } else {
        window.alert("입력 할 거 없음");
    }
}

function updateData() {
    // element 정보를 가져오도록
    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;

    if (boardNo != '') {
        for (let i = 0; i < boardDB.length; i++) {
            if (boardDB[i].boardNo == boardNo) {
                boardDB[i] = new Board(boardNo, title, content, writer);
                break;
            }
        }
    } else {
        // console.log("수정 할 거 없음");
        window.alert("수정 할 거 없음");
    }

    // 수정된 내용 화면에도 수정
    let trs = document.querySelectorAll('#tbl tr[id]');
    for (let i = 0; i < trs.length; i++) {
        if (trs[i].id == boardNo) {
            trs[i].children[2].innerHTML = title;
            trs[i].children[3].innerHTML = content;
            trs[i].children[4].innerHTML = writer;
            break;
        }
    }
}

function getBoard(id) {
    // id값으로 DB에서 해당하는 데이터를 찾아온다.
    let oneBoard;
    for (let board of boardDB) {
        if (board.boardNo == id) {
            // oneBoard = new Board(board.boardNo, board.title, board.content, board.writer);
            oneBoard = board;
        }
    }
    return oneBoard;
}

function showDetail() {
    let id = this.parentNode.parentNode.id;
    let board = getBoard(id);
    document.getElementById('boardNo').value = board.boardNo;
    document.getElementById('title').value = board.title;
    document.getElementById('content').value = board.content;
    document.getElementById('writer').value = board.writer;
}

function synchCheckbox() {
    let hchks = document.querySelectorAll('th input[type="checkbox"]');
    let chks = document.querySelectorAll('td input[class="checkB"]');

    hchks[0].checked = true; // default

    for (let i = 0; i < chks.length; i++) {
        if (!chks[i].checked) {
            hchks[0].checked = false;
            break;
        }
    }
}

function deleteData() {
    let del = [];
    let chks = document.querySelectorAll('td input[class="checkB"]');

    // 화면에서 삭제
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            del.push(chks[i].parentNode.parentNode.id);
            chks[i].parentNode.parentNode.remove();
        }
    }

    // 배열에서 삭제
    del.forEach(function (obj, idx) { // 삭제할 대상
        for (let i = 0; i < boardDB.length; i++) {
            if (boardDB[i].boardNo == obj) {
                // delete boardDB[i];  // 이렇게 지우면 데이터는 지워지는데 공간이 남는다.
                // boardDB.splice(idx, 1, ''); // idx위치부터 1개를 지우고 ''로 대체하겠다.
                boardDB.splice(idx, 1); // 삭제후 대체하지 않겠다. 빈공간 안남음
                break;
            }
        }
    });

    document.querySelectorAll('th input[type="checkbox"]')[0].checked = false;
}