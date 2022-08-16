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

const titulo = document.querySelector("#resultado h1");
const subTitulo = document.querySelector("#resultado h2");

titulo.innerText = `Pagarias  ${totalAPagar}`;
subTitulo.innerText = `Cada mes por los proximos ${proyecto.meses} meses`;
