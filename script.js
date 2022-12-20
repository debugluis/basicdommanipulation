const h1 = document.querySelector('h1');
const form = document.getElementById('formCalc');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btnCalc = document.getElementById('btnCalc');
const result = document.getElementById('result');
console.log({formCalc, input1, input2, btnCalc, result});

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    var suma = Number(input1.value) + Number(input2.value);
    console.log(suma);
    result.innerText = ('Resultado de la suma: '+ suma);
}