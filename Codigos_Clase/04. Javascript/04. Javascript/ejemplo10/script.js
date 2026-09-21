let operador = '';
let num2 = 0;

function limpiar() {
  document.getElementById('num1').value = "";
}

function agregarNumero(num) {
  const val = document.getElementById('num1').value;
  document.getElementById('num1').value = val + num;
}

function setOperador(op) {
  operador = op;
  num2 = document.getElementById('num1').value;
  limpiar();
}

function calcular() {
  let res = 0;
  const num1 = document.getElementById('num1').value;

  switch(operador) {
    case "sumar": 
      res = parseInt(num2) + parseInt(num1);
      break;
    case "restar": 
      res = parseInt(num2) - parseInt(num1);
      break;
    case "multiplicar": 
      res = parseInt(num2) * parseInt(num1);
      break;
    case "dividir": 
      if (num1 == 0)
        alert("No se puede dividir entre 0. ");
      else
        res = parseInt(num2) / parseInt(num1);
      break; 

  }
  document.getElementById('num1').value = res;
}

