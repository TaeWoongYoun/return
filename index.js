// return은 함수 종료 기능을 가짐
// toFixed를 사용하면 문자로 출력됨
console.log(vat(55555));

function vat(a){
    var num =  (a * 1.1).toFixed(1);
    return parseFloat(num)
}
