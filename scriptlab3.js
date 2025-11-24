
function playBeep() {
  document.getElementById("beep").play();
}


function getValues() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  return { n1, n2 };
}


function sumar() {
  let { n1, n2 } = getValues();
  let resultado = n1 + n2;
  mostrarResultado(resultado);
}

function restar() {
  let { n1, n2 } = getValues();
  let resultado = n1 - n2;
  mostrarResultado(resultado);
}

function multiplicar() {
  let { n1, n2 } = getValues();
  let resultado = n1 * n2;
  mostrarResultado(resultado);
}

function dividir() {
  let { n1, n2 } = getValues();
  if (n2 === 0) {
    mostrarResultado("Error: División por cero");
  } else {
    let resultado = n1 / n2;
    mostrarResultado(resultado);
  }
}


function limpiar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").innerText = "Resultado:";
}


function mostrarResultado(valor) {
  document.getElementById("resultado").innerText = "Resultado: " + valor;
  playBeep();
}
