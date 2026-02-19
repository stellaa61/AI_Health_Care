// 배열(array)

let numbers = [10, 20, 30];
//문자열도 가능
console.log(numbers[0]);
console.log(numbers[1]);


//for문 사용

for (let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
}

//안에 있는 값을 바로 꺼내기 가능 / 더 많이 사용
for (const num of numbers){

}

for (const [i, num] of numbers.entries()) {
    console.log(i + "번 index값" + num);
}