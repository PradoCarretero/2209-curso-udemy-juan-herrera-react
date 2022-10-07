const activo = true;
/* let mensaje = "";
if (activo) {
  mensaje = "Activo";
} else {
  mensaje = "Inactivo";
} */

/*  const mensaje = activo ? "Activo" : "Inactivo"; */

//EXPRESAMOS SOLO AL PRIMERA PARTE DEL IF:
//1.
/* const mensaje = activo ? "Activo" : null; */
//2.
const mensaje = activo && "Activo";

console.log(mensaje);
