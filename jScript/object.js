// 오브젝트 방식
let p1 = {name : "Hong", age : 30}

// ----------------------------------------

// 클래스 방식
class Person {
    constructor(name, age) {    // 생성자
        // _필드명 : _는 private의 의미를 담고있다. 외부로 필드명 노출되는거 방지
        this._name = name;
        this._age = age;
    }

    get name() {    // getter
        return this._name;
    }
    set name(name) {    // setter
        this._name = name;
    }

    get age() {    // getter
        return this._age;
    }
    set age(age) {    // setter
        this._age = age;
    }
}

let p2 = new Person("Park", 30);    // 대입
p2.name = "Choi";   // 할당. setter 호출
p2.age = 25;
console.log(`name : ${p2.name}, age : ${p2.age}`);  // 출력. getter 호출

let p3 = new Person("Kim", 22);

// 클래스 방식보다 오브젝트 방식이 더 간편하다

// ----------------------------------------

// 이거는 생성자만 만들어서 하는 방식..?
function Student(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
}

// 생성할 때 new가 없다.
let s1 = Student("Park", 3, 10);
let s2 = Student("Hong", 4, 11);
let s3 = Student("Hwang", 5, 12);