window.onload = iniciar;

function iniciar() {
  btnCalcular = document.getElementById("btnCalcular");
  btnCalcular.addEventListener("click", contarDigitosEntero);

  function contarDigitosEntero() {
    let numero = Number(document.getElementById("inputNum").value);
    {
      if (typeof numero != "number" || !Number.isInteger(numero)) {
        alert("Debe pasar como argumento un número entero.");
      }
      let contador = 0;

      while (numero >= 1) {
        ++contador;
        numero /= 10;
      }
      alert("La cantidad de digitos de su numero es: " + contador);
    }
  }
}
