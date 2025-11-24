// Paso 1: Declaración de funciones matemáticas
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) {
  if (b === 0) return "Error: División por cero";
  return a / b;
}

// Paso 2: Función principal
function realizarOperacion(num1, num2, operacion) {
  if (operacion === "suma") {
    return sumar(num1, num2);
  } else if (operacion === "resta") {
    return restar(num1, num2);
  } else if (operacion === "multiplicacion") {
    return multiplicar(num1, num2);
  } else if (operacion === "division") {
    return dividir(num1, num2);
  } else {
    return "Operación no válida";
  }
}

// Paso 3: Función que se ejecuta al presionar el botón
function ejecutarCalculadora() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("operacion").value;

  let resultado = realizarOperacion(n1, n2, op);
  document.getElementById("resultado").innerText = 
    `El resultado de la ${op} es: ${resultado}`;
}
