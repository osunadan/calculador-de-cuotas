let montoTotal = parseInt(
  prompt("Ingresa el monto de presupuesto que tienes para tu proyecto")
);

let meses = parseInt(
  prompt("¿A cuantos meses sin intereses te gustaria pagarlo (4, 6, 8 o 12)?")
);

switch (meses) {
  case 4:
    cuotas(4);
    alert(
      "Pagarias " +
        cuotas() +
        " " +
        "cada mes por los proximos " +
        meses +
        " meses"
    );
    break;

  case 6:
    cuotas(6);
    alert(
      "Pagarias " +
        cuotas() +
        " " +
        "cada mes por los proximos " +
        meses +
        " meses"
    );
    break;

  case 8:
    cuotas(8);
    alert(
      "Pagarias " +
        cuotas() +
        " " +
        "cada mes por los proximos " +
        meses +
        " meses"
    );
    break;

  case 12:
    cuotas(12);
    alert(
      "Pagarias " +
        cuotas() +
        " " +
        "cada mes por los proximos " +
        meses +
        " meses"
    );
    break;

  default:
    alert(
      "Datos incorrectos " +
        "Intentalo de nuevo con algunos de los meses señalados"
    );
    break;
}

function cuotas(meses) {
  for (let i = 1; i <= meses; i++) {
    console.log("Mes " + i);
    console.log(Math.round((totalAPagar = montoTotal / meses)));
  }
  return Math.round(totalAPagar);
}
