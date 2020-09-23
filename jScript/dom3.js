let hong = {
    name: "홍길동",
    age: 25,
    hobby: "독서"
}

let $table = document.createElement("table");
$table.setAttribute("border", "1");
$table.setAttribute("style", "border-collapse:collapse");
let $tr, $td, $text;

for(let field in hong) {
    $tr = document.createElement("tr");
    
    console.log(`field: ${field}, val: ${hong[field]}`);
    $td = document.createElement("td");
    $text = document.createTextNode(field);
    $td.appendChild($text);
    $td.setAttribute("style", "background:lightblue");
    $tr.appendChild($td);

    $td = document.createElement("td");
    $text = document.createTextNode(hong[field]);
    $td.appendChild($text);
    $tr.appendChild($td);

    $table.appendChild($tr);
}
document.getElementsByTagName("body")[0].appendChild($table);