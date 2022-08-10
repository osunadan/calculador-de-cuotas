/* Empiezo con creer un "template" de objeto que guarde la información del proyecto del cliente y con un metodo que calcula cuanto pagarias por los meses que elijas */
let totalAPagar = null;

class proyecto {
  constructor(nombre, presupuesto, meses) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
    this.meses = meses;
  }

  pagoCuotas() {
    for (let i = 1; i <= this.meses; i++) {
      console.log("Mes " + i);
      console.log(Math.round((totalAPagar = this.presupuesto / this.meses)));
    }
    return Math.round(totalAPagar);
  }
}

let proyectos = [];

proyectos.push(
  new proyecto(
    prompt("¿Que tipo de proyecto necesitas?"),
    parseInt(prompt("¿Cual es tu presupuesto?")),
    parseInt(prompt("¿A cuantos meses te gustaría pagarlo?"))
  )
);

for (proyecto of proyectos) {
  proyecto.pagoCuotas();
}

alert(
  "Pagarias " +
    totalAPagar +
    " " +
    "cada mes por los proximos " +
    proyecto.meses +
    " meses"
);
