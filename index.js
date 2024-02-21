// return은 함수 종료 기능을 가짐
// toFixed를 사용하면 문자로 출력됨
// console.log(vat(55555));

// function vat(a){
//     var num =  (a * 1.1).toFixed(1);
//     return parseFloat(num)
// }

// Q1. 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수를 만들어봅시다.
// (1초 == 1000ms 입니다)

// console.log(함수(1,30));
// console.log(함수(2,0));

// function 함수(a,b){
//     var num = (a * 60000 + b * 1000).toFixed(0);
//     return parseFloat(num);
// }

// Q2. 가격을 파라미터로 입력하면 10% 할인된 가격을 뱉는 함수를 만들어봅시다.
// 근데 첫 구매여부도 true/false로 둘째파라미터에 입력해서 첫 구매가 맞을 경우 추가로 1.5 달러도 할인해줘야합니다. 
// 주의사항은 가격으로 10.3 이런거 넣으면 소수로 인한 오차도 나올 수도 있으니 오차는 깔끔하게 처리해보든가 합시다
console.log(함수(10, true))

function 함수(a, b){
    var num = (a - (a / 10)).toFixed(0);
    if(b == true){
        num = num - 1.5;
    }
    return parseFloat(num);
}