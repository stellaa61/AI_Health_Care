const readline = require ("readline");
// readline: Node에서 터미널 입력을 받기 위한 기본 도구
// createInterface: readline으로 받은 입력 / 출력 통로 만들기.
// => rl: 키보드로 입력을 받고 터미널로 출력할 수 있게 하는 대화 통로=> 고정값으로 고정 const
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question(): 사용자가 직접 입력한 질문 출력
// 입력값-> 함수 input 1/input2로 들어옴

rl.question ("first number: ", function (input1) {
    rl.question ("second number: ", function (input2) {
        rl.question ("operator (+, -, *, /): ", function(operator) {
            //input을 통해 들어온 숫자를 string이 아닌 진짜 숫자타입의 숫자로 변환해서 받아내고 num1 /num2로 각각 선언.
            //input을 통해 들어온 어떠한 것도 string으로 받아냄 (기본값)
            let num1 = Number(input1);
            let num2 = Number(input2);
            let result;

            if (operator === "+") {
              result = num1 + num2
            } else if (operator === "-") {
              result = num1 - num2
            } else if (operator === "*") {
              result = num1 * num2
            } else if(operator === "/") {
                 result = num1 / num2
            } else {
                result = "Wrong Operator";
            }

            console.log("result: ", result);
            rl.close();
        });
    });
});