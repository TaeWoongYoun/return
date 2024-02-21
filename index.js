// return은 함수 종료 기능을 가짐
// toFixed를 사용하면 문자로 출력됨
// console.log(vat(55555));

// function vat(a){
//     var num =  (a * 1.1).toFixed(1);
//     return parseFloat(num)
// }

// Q1. 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수를 만들어봅시다.
// (1초 == 1000ms 입니다)

console.log(함수(1,30));
console.log(함수(2,0));

function 함수(a,b){
    var num = (a * 60000 + b * 1000).toFixed(0);
    return parseFloat(num);
}