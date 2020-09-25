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
        text = document.createTextNode(field);
        td.append(text);
        tr.append(td);
    }
    return tr;
}

function getBoardList() {
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
                checkbox.onclick = function () {}
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

    // inputs.forEach((a, b) => {
    //     console.log(a.value);
    // });

    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;

    boardDB.push(new Board(boardNo, title, content, writer));

    let tbl = document.getElementById('tbl');
    tr = document.createElement('tr');
    tr.setAttribute('id', boardNo);

    // 체크박스 생성
    td = document.createElement('td');
    checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
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

    inputs.forEach((a, b) => {
        inputs[b].value = "";
    });
}

function updateData() {
    let boardNo = document.getElementById('boardNo').value;
    console.log("boardNo>> " + boardNo);
    if (boardNo != '') {
        console.log("수정");
        boardDB.forEach(function (obj, idx) {
            for (let field of titles) {
                if (field !== 'checkbox' && field !== 'detail') {
                    if (boardNo == obj[field] && field === 'boardNo') {
                        let res = boardDB.filter(it => it.boardNo == boardNo);
                        console.log(res);
                        res.title = document.getElementById('title').value;
                        res.content = document.getElementById('content').value;
                        res.writer = document.getElementById('writer').value;
                    }
                    // console.log(`field : ${field}, value : ${obj[field]}`);
                } else {
                    console.log(`--- ${field} ---`);
                }
            }
        });
    } else {
        console.log("수정할 거 없음");
        // window.alert("수정할 거 없음");
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