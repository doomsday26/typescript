var num1 = document.getElementById('num1');
var number1 = num1.value;
var num2 = document.getElementById('num2');
var number2 = num1.value;
var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    var a = add(number1, number2);
    console.log(a);
});
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return (+num1 + +num2);
    }
    else {
        return "enter proper type";
    }
}
