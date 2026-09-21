let memoria = 0;

function sumar() {
  const num1 = document.getElementById('num1').value;
  const resultado = parseInt(num1) + memoria;

  document.getElementById('pResultado').innerHTML = resultado;

  memoria = resultado;
  
  document.getElementById('num1').value = 0;

}