window.onload = iniciar;

function iniciar() {
  btnCrear.addEventListener("click", creadorVehiculo);
  let autos = [];

  function creadorObjetoVehiculo(marca, modelo, año) {
    this.vehiculoMarca = marca;
    this.vehiculoModelo = modelo;
    this.vehiculoAño = año;
    this.mostrarVehiculo = function () {
      var msg =
        "Se ha creado un vehiculo, esto son sus datos: \n" +
        "Marca: " +
        this.vehiculoMarca +
        "\nModelo: " +
        this.vehiculoModelo +
        "\nAño: " +
        this.vehiculoAño;
      +autos;
      alert(msg);
    };
  }
  function creadorVehiculo() {
    var marca = document.getElementById("inputMar").value;
    var modelo = document.getElementById("inputMod").value;
    var año = document.getElementById("inputAño").value;

    var nuevoVehiculo = new creadorObjetoVehiculo(marca, modelo, año);
    nuevoVehiculo.mostrarVehiculo();
    autos.push(nuevoVehiculo);
  }
}

/* No logre realizar un bucle para crear varios autos y luego agregarlos todos a un array e imprimirlo en un alert */
