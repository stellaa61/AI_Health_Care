/// 함수 (function)

function add(num1,num2) {
    return num1 + num2
}

// 반환 - 호출부로 값을 되돌려주기
// 함수를 사용하다 = 호출하다 = 값을 넘겨주기/전달 
// = 선언해놓은 곳에 값을 넘겨주고 선언된 기능을 실행된 결과값을 반환
add(1, 2);
console.log(add(1, 2));

let result = add(1, 2)
console.log(result)

// 출력(output) - 터미널에 값을 보이기

// 함수 만들기 = function을 매개변수로 받음 
// 함수 자체를 다른 함수로 보낼 수 있다.
function wrapper(func) {
    const result = func(1, 2);
    console.log(result);
}

wrapper(add)

/////////////// myFunction사용
let myFunction = add;
console.log(myFunction);
console.log(myFunction(10, 20));