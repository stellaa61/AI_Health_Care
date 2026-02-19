// 점수 배열을 입력받아, 평균을 반환하는 함수

// function getAverages(scores) {
//     //내가한거 완전 틀림 ㅋㅋ
//     //scores = ((num1 + num2 +num3 + num4) / i)
// }

// console.log(getAverages([80, 90, 75, 83]))

function getAverages(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum = sum + scores[i]
    }
    return sum / scores.length;
}

console.log(getAverages([80, 90, 75, 83]));


// 빈배열 값
function getAverages(scores) {

    if (scores.length === 0) {
        return 0
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum = sum + scores[i]
    }
    return sum / scores.length;
}
}
console.log(getAverages([]));

