// Codigo JavaScript

function calculator() {
  // Las variables num1, num2 manipularán los valores ingresados ​​por el usuario
  let num1 = parseInt(document.getElementById("numero1").value);
  let num2 = parseInt(document.getElementById("numero2").value);

  // Estan son las vaiables para el calculo de la raiz cuadrada

  let num_raiz = parseInt(document.getElementById("numero_raiz").value);

  // Definamos que tipo de operación tenemos que hacer
  let operation = document.getElementById("operaciones").value;

  if (operation === "suma") {
    document.getElementById("resultado").value = num1 + num2;
  }

  if (operation === "resta") {
    document.getElementById("resultado").value = num1 - num2;
  }

  if (operation === "division") {
    document.getElementById("resultado").value = num1 / num2;
  }

  if (operation === "mult") {
    document.getElementById("resultado").value = num1 * num2;
  }
  if (operation === "potencia") {

    document.getElementById("resultado").value = (num1 ** num2);

  }
  if (operation === "raiz") {

    document.getElementById("resultado").value = Math.sqrt(num_raiz);
    
  }

}
