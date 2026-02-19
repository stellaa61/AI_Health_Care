let num1 = 3;
let num2 = 7;
let operator = "/";

let result;

if (operator === "+") {
    result = num1 + num2
} else if (operator === "-") {
    result = num1 - num2
} else if (operator === "*") {
    result = num1 * num2
// } else if(operator === "/") {
//     result = num1 / num2

// 나누기 = 소수점 2째자리까만. > 근데 값은 num->string 변환
// } else if (operator === "/") {
//    result = (num1 / num2).toFixed(2);
// }
//바로 숫자로 정리
} else if (operator === "/") {
   result = Math.round((num1 / num2)*100)/100;
}
console.log(result);
console.log(typeof result);
